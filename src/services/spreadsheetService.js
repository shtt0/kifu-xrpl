import { GoogleSpreadsheet } from "google-spreadsheet";

// Load credentials from a local file or environment variables
const CREDENTIALS = JSON.parse(process.env.REACT_APP_GOOGLE_SHEET_CREDENTIALS);
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const getUserProfile = async (userId) => {
  await doc.useServiceAccountAuth(CREDENTIALS);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0]; // Assumes the first sheet
  const rows = await sheet.getRows();

  const profile = rows.find((row) => row.userId === userId);
  return profile
    ? {
        name: profile.name,
        occupation: profile.occupation,
        introduction: profile.introduction,
        receivedAmount: profile.receivedAmount,
        requiredAmount: profile.requiredAmount,
        totalDonations: profile.totalDonations,
        recentDonationLocation: profile.recentDonationLocation,
        recentDonationAmount: profile.recentDonationAmount,
        recentDonationDate: profile.recentDonationDate,
        didList: profile.didList ? profile.didList.split(",") : [],
      }
    : null;
};
