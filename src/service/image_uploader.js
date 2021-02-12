class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append('file',file);
        data.append('upload_preset', 'gn0jbnbp');
        const result = await fetch(
            "https://api.cloudinary.com/v1_1/duphhc4hn/upload",
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json();
    }
}

export default ImageUploader;