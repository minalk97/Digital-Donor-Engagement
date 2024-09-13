const { FundraisingPage, Donation } = require("../config/db.connect");

exports.getAllPages = async (req, res) => {
  try {
    const pages = await FundraisingPage.findAll();
    return res.status(200).json(pages);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message ||
        "Some error occurred while retrieving fundraising pages.",
    });
  }
};

exports.getPageById = async (req, res) => {
  const { id } = req.params;

  try {
    const page = await FundraisingPage.findByPk(id, {
      include: [
        {
          model: Donation,
        },
      ],
    });

    if (!page) {
      return res.status(404).json({ message: "Fundraising page not found" });
    }

    return res.status(200).json(page);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message ||
        "Some error occurred while retrieving fundraising page.",
    });
  }
};
