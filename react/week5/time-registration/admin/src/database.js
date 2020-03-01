const admin = require("firebase-admin");

let db = admin.firestore();

const getUser = async uid => {
  return await db
    .collection("users")
    .doc(uid)
    .get()
    .then(doc => doc.data());
};

const getUserType = async uid => {
  const query = await db
    .collection("users")
    .doc(uid)
    .get()
    .then(doc => doc.data());
  return query;
};

const createShift = async shift => {
  console.log(shift);
  return await db.collection("shifts").add(shift);
};

const getShifts = async uid => {
  const query = await db
    .collection("shifts")
    .where("uid", "==", uid)
    .get();
  return query.docs.map(doc => doc.data());
};

const getAllEmployeesShifts = async () => {
  const shifts = [];
  await db
    .collection("shifts")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => shifts.push(doc.data()));
    });
  return shifts;
};

module.exports = {
  getUser,
  getUserType,
  createShift,
  getShifts,
  getAllEmployeesShifts
};
