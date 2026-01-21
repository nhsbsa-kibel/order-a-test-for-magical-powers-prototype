// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/magical-powers-answer', function (req, res) {
  const data = req.session.data
  const doYouHaveMagicalPowers = data.doYouHaveMagicalPowers

  if (doYouHaveMagicalPowers === "Yes") {

    res.redirect('/details')

  } else if (doYouHaveMagicalPowers === "No") {

    res.redirect('/ineligible')

  } else if (doYouHaveMagicalPowers === "I'm not sure") {

    res.redirect('/ineligible')

  } else {

    // No answer selected, return to question
    res.redirect('/magical-powers')

  }
})




module.exports = router
