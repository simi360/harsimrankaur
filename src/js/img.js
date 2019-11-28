const makeImage = (url, width = 100, height = 100)  => {
    const img = document.createElement("img");

    img.width = width;
    img.height = height;
    img.style = "display: block;";
    img.src = url;
    return img;
};
export default makeImage;