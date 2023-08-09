import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'community',
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  parentId: { 
    type: String,
  },
  children: [  //recursion: one thread have many threads.
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread'
    }
  ]
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;