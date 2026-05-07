const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {

  return (req, res, next) => {

    try {

      const token = req.headers.authorization;

      if (!token) {

        return res.status(401).json({

          success: false,
          message: "No token provided"

        });

      }

      const actualToken = token.split(" ")[1];

      const decoded = jwt.verify(

        actualToken,

        process.env.JWT_SECRET

      );

      // ROLE CHECK
      if (

        roles.length > 0 &&

        !roles.includes(decoded.role)

      ) {

        return res.status(403).json({

          success: false,
          message: "Access denied"

        });

      }

      req.user = decoded;

      next();

    } catch (error) {

      return res.status(401).json({

        success: false,
        message: "Invalid token"

      });

    }

  };

};

module.exports = authMiddleware;