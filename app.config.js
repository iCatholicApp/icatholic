import "dotenv/config";

const bible_api_key = process.env.BIBLE_API_KEY;

export default ({ config }) => {
    return {
        ...config,
        extra: {
            ...config.extra,
            bible_api_key: bible_api_key,
        },
    };
};
