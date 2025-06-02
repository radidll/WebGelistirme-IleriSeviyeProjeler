let cropper;
const image = document.getElementById('image');
const input = document.getElementById('imageInput');
const cropBtn = document.getElementById('cropBtn');

input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        image.src = event.target.result;
        if (cropper) cropper.destroy();
        cropper = new Cropper(image, {
            aspectRatio: NaN,
            viewMode: 1
        });
    };
    reader.readAsDataURL(file);
});

cropBtn.addEventListener('click', () => {
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas();
    const croppedImageURL = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = croppedImageURL;
    a.download = 'cropped-image.png';
    a.click();
});