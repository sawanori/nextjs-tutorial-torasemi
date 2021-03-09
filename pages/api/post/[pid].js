export default (req,res) => {
 const {
   query:{pid},
 } = req
 res.end(`post:${pid}`)
}