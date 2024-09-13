const { Donation } = require("../config/db.connect");

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.findAll();
    return res.status(200).json(donations);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message || "Some error occurred while retrieving donations.",
    });
  }
};

exports.getDonationById = async (req, res) => {
  const { id } = req.params;

  try {
    const donation = await Donation.findByPk(id);

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    return res.status(200).json(donation);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message || "Some error occurred while retrieving donation.",
    });
  }
};

// Create a new donation
exports.create = async (req, res) => {
  const { amount, page_id, user_id } = req.body;

  if (!amount || !page_id || !user_id) {
    return res.status(400).json({
      message: "Amount, user_id and page_id are required",
    });
  }

  try {
    const donation = await Donation.create({
      amount,
      page_id,
      user_id,
    });

    return res.status(201).json(donation);
  } catch (error) {
    return res.status(500).json({
      message:
        error.message || "Some error occurred while creating the Donation.",
    });
  }
};
