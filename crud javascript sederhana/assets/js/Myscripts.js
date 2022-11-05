let selectedRow = null;

const Simpan = (e) => {
  event.preventDefault();
  let formData = readFormData();

  if (selectedRow == null) {
    insertNewRecord(formData);
  }
};
