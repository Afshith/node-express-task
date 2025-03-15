const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        console.log("asyncWrapper executed for route:", req.path);
        await fn(req, res);
      } catch (error) {
        console.error("Error caught in asyncWrapper:", error.message);
        next(error);
      }
    };
  };

  export default asyncWrapper;