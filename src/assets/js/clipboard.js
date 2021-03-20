const copyText = document.querySelector('#clipboard-btn')

function copyToClipboard() {
   copyText.select();
   copyText.setSelectionRange(0, 99999); /* For mobile devices */
   document.execCommand("copy");

   console.log("copied")

   alert("Copied the text: " + copyText.value);
}