const router = require('express').Router();

// posting note function route 
router.post('/notes', (req, res) => {
  console.log(req.body)
  store
      .addNote(req.body)
      .then(note => {
          res.json(note)
      })
      .catch(err => {
          res.status(500).json(err)
      })
})

// delete note function route
router.delete('/notes/:id', (req, res) => {
  store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err))
})

module.exports = router;