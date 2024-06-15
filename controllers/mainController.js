import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import Post from "../model/postModel.js";
import Hive from "../model/hiveModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv"
config();
const jwtSecret = process.env.JWT_SECRET;

const getMainPage = asyncHandler(async (req,res) =>
  {
    const hive = await Hive.find();
    const post = await Post.find()
      .populate("user_id", "username")
      .populate("hive_id", "hive_name");
    res.render("index", { hive: hive, user: req.user, post: post });
  });
const getSettingPage = asyncHandler(async (req,res) =>
  { 
    const hive = await Hive.find();
    const post = await Post.find()
      .populate("hive_id", "hive_name");
    res.render("settings", { user: req.user, hive: hive, post: post });
  })
const getEditPost = asyncHandler(async (req,res) =>
  {
    const hive = await Hive.find();
    const post = await Post.findById(req.params.id)
      .populate("hive_id", "hive_name");
    res.render("editpost", { user: req.user, hive:hive, post: post });
  })
const getEditHive = asyncHandler(async (req,res) =>
  {
    const hive = await Hive.findById(req.params.id)
    res.render("edithive", { hive: hive, user: req.user });
  })
const createUser = asyncHandler(async (req,res) => 
  {
    const { username, password, email } = req.body;

    console.log("Creating user:", { username, email });
    const userExists = await User.findOne({ email });
    if (userExists)
    {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = User.create(
      {
        username,
        password,
        email,
      });

    if (user)
    {
      res.redirect("/?userCreated=true");
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  });
const createHive = asyncHandler(async (req,res) =>
  {
    const { hive_name, hive_desc, hive_creator } = req.body;
    console.log("Creating Hive Forum:", { hive_name });
    const hiveExists = await Hive.findOne({ hive_name });
    if (hiveExists)
    {
      res.status(400);
      throw new Error("Hive already exists");
    }
    const hive = Hive.create(
      {
        hive_name,
        hive_desc,
        hive_creator,
      });
    if (hive)
    {
      res.redirect("/?hiveCreated=true");
    } else {
      res.status(400);
      throw new Error("Invalid hive data");
    }
  });
const createPost = asyncHandler(async (req,res) =>
  {
    const { title, content, text, user_id, hive_id } = req.body;
    console.log("Creating Post: ", { title, user_id });
    const post = Post.create(
      {
        title,
        content,
        text,
        user_id,
        hive_id,
      });
    if (post)
    {
      res.redirect("/?postCreated=true");
    } else {
      res.status(400);
      throw new Error("Invalid post data");
    }
  });
const loginUser = asyncHandler(async (req,res) =>
  {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user)
    {
      res.status(401);
      throw new Error("No such user");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch)
    {
      const token = jwt.sign({ id: user._id }, jwtSecret);
      res.cookie("token", token, {httpOnly: true});
      res.redirect("/");
    } else {
      res.status(401);
      throw new Error("Wrong password");
    }
  });

const logoutUser = asyncHandler(async (req,res) =>
  {
    res.clearCookie("token");
    res.redirect("/");
  });
const updateUser = asyncHandler(async (req,res) =>
  {
    const id = req.params.id;
    const { username, email, password } = req.body;
    const user = await User.findById(id);
    user.username = username;
    user.email = email;

    if (password)
    {
      user.password = password;
    }

    await user.save();
    res.redirect("/?refresh=true");
  })
const deleteUser = asyncHandler(async (req,res) => 
  {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user)
    {
      res.status(404);
      throw new Error("User not found.");
    }
    await Post.deleteMany({ user_id: userId });
    await Hive.deleteMany({ hive_creator: userId });
    await User.deleteOne({ _id: userId });
    res.clearCookie("token");
    res.redirect("/");
  })
const updatePost = asyncHandler(async (req,res) =>
  {
    const { title, content, text, user_id, hive_id } = req.body;
    const post = await Post.findById(req.params.id);
    post.title = title;
    post.content = content;
    post.text = text;
    post.user_id = user_id;
    post.hive_id = hive_id;
    await post.save();
    res.redirect("/settings");
  })
const deletePost = asyncHandler(async (req,res) => 
  {
    const post = await Post.findById(req.params.id);
    if (!post)
    {
      res.status(404);
      throw new Error("Post not found.");
    }
    await Post.deleteOne();
    res.redirect("/settings")
  })
const updateHive = asyncHandler(async (req,res) =>
  {
    const { hive_name, hive_desc } = req.body;
    const hive = await Hive.findById(req.params.id);
    hive.hive_name = hive_name;
    hive.hive_desc = hive_desc;
    await hive.save();
    res.redirect("/settings");
  })
const deleteHive = asyncHandler(async (req,res) =>
  {
    const hiveId = req.params.id;
    const hive = await Hive.findById(hiveId);
    if (!hive)
    {
      res.status(404);
      throw new Error("Hive not found.");
    }
    await Post.deleteMany({ hive_id: hiveId });
    await Hive.deleteOne({ _id: hiveId });
    res.redirect("/settings")
  })
export { getMainPage, createUser, loginUser, createHive, createPost, logoutUser, getSettingPage, updateUser, deleteUser, updatePost, deletePost, updateHive, deleteHive, getEditHive, getEditPost };
