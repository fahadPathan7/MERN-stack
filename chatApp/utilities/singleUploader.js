const createHttpError = require('http-errors');
const multer = require('multer');
const path = require('path');

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_message
) {
    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = path.resolve(__dirname, `../public/uploads/${subfolder_path}`);
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName =
                file.originalname
                    .replace(fileExt, "")
                    .toLowerCase()
                    .split(" ")
                    .join("-") +
                "-" +
                Date.now();
            cb(null, fileName + fileExt);
        },
    });

    // prepare the final multer upload object
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createHttpError(error_message));
            }
        },
    });

    return upload;
}

module.exports = uploader;