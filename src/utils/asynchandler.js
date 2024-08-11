const asyncHandler = (fn) => async (req, res, next) => {
  try{
    await fn(req, res, next)
  }
  catch(error){
    res.error(err.code || 500).json(
      {
        succes:false,
        message: err.message
      }
    )
  }
}

export {asyncHandler}