const fileInput = document.querySelector(".input");
const downloadBtn = document.querySelector(".download");

downloadBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  downloadBtn.innerText = "Downloading file...";
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  // fetching file and returning response as blob
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      // creating URL
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(tempUrl);
      downloadBtn.innerText = "Download";
      fileInput.value = "";
    })
    .catch(() => {
      downloadBtn.innerText = "Download";
      alert("Failed to download file!");
    });
}
