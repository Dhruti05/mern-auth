import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    // 1. Token nikaalo cookies se
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again!" });
    }

    try {
        // 2. Token verify karo
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            // 3. Sabse important: Agar req.body undefined hai (GET request mein), toh use object banao
            if (!req.body) {
                req.body = {};
            }
            
            // Ab userId set karo, ab crash nahi hoga
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: "Not Authorized. Login Again!" });
        }

        // 4. Agle function pe jao
        next();

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export default userAuth;