import bcrytpt from "bcrypt"
export const hash = (plainText) => {
    return bcrytpt.hashSync(plainText, 10)
}

export const compare = (plainText, hashText) => {
    return bcrytpt.compareSync(plainText, hashText)
}