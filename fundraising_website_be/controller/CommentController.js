const { Comment, Donation } = require("../config/db.connect");

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [Donation],
    });
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message || "Some error occurred while retrieving comments.",
    });
  }
};

exports.getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findByPk(id, {
      include: [Donation],
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Some error occurred while retrieving comment.",
    });
  }
};

// Find comments by page ID
exports.getCommentsByPageId = async (req, res) => {
  const { pageId } = req.params;

  try {
    const comments = await Comment.findAll({
      where: {
        page_id: pageId,
      },
    });

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message || "Some error occurred while retrieving comments.",
    });
  }
};

exports.create = async (req, res) => {
  const { comment, page_id, donation_id } = req.body;

  if (!comment || !page_id || !donation_id) {
    return res.status(400).json({
      message: "comment, page_id, and donation_id are required",
    });
  }

  try {
    const newComment = await Comment.create({
      comment,
      page_id,
      donation_id,
    });

    return res.status(201).json(newComment);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message || "Some error occurred while creating the Comment.",
    });
  }
};
