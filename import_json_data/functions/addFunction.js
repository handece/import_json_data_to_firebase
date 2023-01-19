async function addData(data) {
    await admin.firestore().collection("your_collection_name").add({
        name: data.name,
        iso2: data.iso2,
        long: data.long,
        lat: data.lat
    });
  }

  module.exports.addData = addData;