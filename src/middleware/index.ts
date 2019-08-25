import {
    handleCors,
    handleCompression,
    handleBodyReqParsing,
} from './common';

export default [handleCors, handleCompression, handleBodyReqParsing];