var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "pp-specs",
  "level": "1",
  "url": "pp-specs.html",
  "type": "Section",
  "number": "",
  "title": "Writing Conventions for MTH 210",
  "body": " Writing Conventions for MTH 210   These are writing conventions that we will learn and use in MTH 210. Every writing revision of a portfolio should follow all of these.  Click or tap on each convention below to read more details and see an example.    Required writing conventions   To earn math & writing successful or better, a proof must do all of these:   Include a true and correctly worded theorem statement just before the proof  The theorem statement should be a simple declarative statement, like we've studied in class. Here is a typical textbook problem:  Prove that if is an integer and is odd, then is odd.  To write a solution to this problem, first turn it into a theorem statement like the following:  Theorem 1: If is an integer and is an odd integer, then is an odd integer.  The statement must be true (so make sure you've tried examples!). It should be in the form of a conditional and\/or quantified statement. Your statement must follow all other writing conventions. That includes defining any variables in the statement before you use them. For example, note how is defined right away above.  After the theorem statement is written, skip a line and write Proof and begin the proof on that same line.   At the very beginning of the proof, state all assumptions and explain what will be proved  Clearly state all assumptions and say what you will prove. This may feel like you’re repeating things you just wrote in the theorem statement. That's OK! A proof should be fully self-contained. Here's an example:   Theorem 1: If is an integer and is an odd integer, then is an odd integer.  Proof. We assume that is an integer and is an odd integer. We will prove that is an odd integer.  You should always check some examples to see if a theorem statement is true or not. If it is false, give a single clear counterexample (with explanation) and then follow any additional instructions on the portfolio sheet.   State the proof method being used and any additional information required to clarify it  Always state the proof method being used just after the assumptions, such as We give a direct proof.  If using proof by contrapositive, contradiction, cases, or induction, clearly state the new assumptions or statement being used.  These other proof methods listed begin in Chapter 3. When using any of these proof methods, first tell the reader that you are using them and clearly state the assumptions or new theorem statement before you continue the proof:   Theorem 1: If is an integer and is an odd integer, then is an odd integer.  Proof. We will prove the contrapositive of this statement, which is If is even, then is even. So, we assume that is an even integer. We will prove that is an even integer as well.  Here's another example:   Theorem: If then is an irrational number.  Proof: We will prove this theorem by contradiction. So, we assume that the negation of the statement is true. That is, we assume that and is a rational number.    Give clear, correct, and organized justification for each statement, and have no important errors or omissions  Directly explain why each statement is true. When in doubt, explain more!  A proof is made of statements that build up on each other. Once you've justified one statement, it becomes a building block that can be used to justify future statements. So, the sentences in your proofs must be put in a logical order so that each statement follows from the work before it. Each statement's justification must be clear and unambiguous in addition to being mathematically correct. Don't worry about being too direct or repetitive; always say exactly how you know that a statement is true. Leave nothing to the reader's imagination! The words because and by are helpful to indicate justifications.   Theorem: If is an even integer, then is an even integer.  Proof: We assume that is an even integer. We will give a direct proof that is an even integer.  Because is even by assumption, by definition we can write for some integer .  Using algebra, we know that  Because is an integer, by the closure properties of integers, is also an integer...   Each sentence in the example above contains a statement, and a justification. Make sure you can see where each one is. Sometimes justifications come before statements, other times they come after -- this is a matter of finding a way to make a sentence sound natural.  You can also justify statements using outside facts that are prerequisites for this class. Using algebra above is an example of this. You can (and should!) leave out details below the level of this class (including excessive algebra or arithmetic).   Define all variables before they are used  Before using any variable, you must explain what it is. Never use a variable without defining it first. Here are some examples:  Let be the base length of the triangle.  Let .   In particular, notice that each example tells you the meaning of the variable or the set it comes from (which is like a meaning). It is also OK to define the variable immediately after using it in the same sentence, as in:  Because is even, we know that for some integer .  Therefore, for some .   Using an undefined variable is a critical logical mistake!   Cite definitions clearly and correctly each time one is used  Every definition has two parts: A word (like even ), and a meaning for that word. Using a definition involves connecting one of these two parts to the other, so that you can use the other part.  For example, if you know a number is even, the definition lets you include the other half of the definition as a statement in your proof: There exists an integer so that . Definitions work both ways, so if you know that where is an integer, then the definition lets you state that is even.  To cite a definition, you must include a warrant or reason for why you can use it in this situation. Then, write the conclusion that the definition lets you make. Use the definition's word where it best fits and use the phrase by definition to connect these items.  It can sometimes feel repetitive to cite a definition each time you use it. That's OK! It is better to be clear and thorough, than to leave some justification out.  Good examples:   Because we are given that is even, by definition there exists an integer such that . (Here the warrant is that we are given is even. Then the conclusion comes after by definition. )  Because we have written where is an integer, by definition is an even integer. (This time the warrant is that we've already written for an integer . The conclusion is that we can say is called even. )   Note: You don't need to repeat the name of the definition multiple times in the same sentence. Use the word once, as long as it is clear which word you are using. Here's a poor example: Because we are given that is even, by definition of even there exists an integer such that . Note that even is repeated unnecessarily. This is still a correct statement, just not well-written.     Additional writing conventions   Every proof must do most of these, where most allows occasional errors in up to 3 items, or consistent errors in 1 item.  One way to earn excellent is for a proof to do all of these thoroughly and with no noticeable omissions.   Be typed in a new Overleaf document  Use the provided Overleaf template and refer to the LaTeX reference document for help with symbols and formatting. These are available on Blackboard.   Follow all basic WRT 150 writing requirements  Specifically, use correct spelling, grammar, and punctuation. Ensure each sentence is complete and has a subject and a verb (which may include mathematical symbols).  In addition, start a new paragraph when a new idea begins. Proofs often have only 1 or 2 sentences per paragraph, and it's OK to start a new paragraph as soon as there's a new idea, even if it makes for a very short paragraph.   Use we instead of I or you  The idea is to stress that you and the reader are doing the mathematics together. This really is standard in math, so it’s good practice with it now!   Begin every sentence with a word, not a symbol  This avoids problems with whether you should capitalize a variable or not. Symbols also make it harder to tell where a sentence begins.   Good example: Because , by definition we know that is even.  Bad example: , so by definition we know that is even.    Include every equation or formula in a sentence, including correct punctuation  Every equation can be read in words, and so it must fit properly within a sentence. This includes putting a punctuation mark at the end of a sentence, even if the sentence ends with a formula. For example, notice the comma, colon, and period in this complete sentence:   Using algebra, we have:    Read this out loud: It forms a complete sentence including a verb. Here's how I would read this: Using algebra, we have: squared plus plus 1 equals zero. Notice in particular that there's a period at the end of the sentence, even though that end occurs with an equation.   Display (center) important equations and align signs  This means putting important equations, centered, on their own line. Only center important equations that are key to the proof or its conclusion. Minor or helper equations can be left inline. If the left side of the equation does not change, don’t repeat it. For example:  You can find examples of how to do this in the sample Overleaf file.  Use appropriate symbols in formulas; avoid excessive symbols (or writing out formulas in words) otherwise  Do not try to write out formulas in words. But also, never use a symbol or abbreviation in place of a word (such as , , , etc.   Good example: Because there exists an integer so that ...  Bad example (too many symbols): Because s.t. ...  Bad example (too many words): Because n equals two times k, ...    Use equation numbers sparingly and always refer to them in the text  If you don’t need to refer to an equation by number, leave out the number. You can see examples of both in the sample Overleaf file.   Write exponents, fractions, operations, and all other mathematical symbols in professional textbook format  Never use shorthand formatting. See examples in the sample Overleaf file. Here's a quick reference:    Yes!  Nooooooooo!     x^2     (x+1)\/5, or worse: x+1\/5     sqrt(7)    or  x*y     Write all variables in italics  This helps them stick out and distinguishes words like a from variables like .   Include a summary at the end of the proof and an end of proof symbol  It’s considered good form to sum up the proof once you’ve finished the main writing, and to clearly show the reader where the proof ends. Briefly state what you actually proved, and put a box at the end of that line. This can be summarized or simplified compared to the original theorem statement, as long as it is still true.    "
},
{
  "id": "wc-statement",
  "level": "2",
  "url": "pp-specs.html#wc-statement",
  "type": "Writing convention",
  "number": "1",
  "title": "Include a true and correctly worded theorem statement just before the proof.",
  "body": "Include a true and correctly worded theorem statement just before the proof  The theorem statement should be a simple declarative statement, like we've studied in class. Here is a typical textbook problem:  Prove that if is an integer and is odd, then is odd.  To write a solution to this problem, first turn it into a theorem statement like the following:  Theorem 1: If is an integer and is an odd integer, then is an odd integer.  The statement must be true (so make sure you've tried examples!). It should be in the form of a conditional and\/or quantified statement. Your statement must follow all other writing conventions. That includes defining any variables in the statement before you use them. For example, note how is defined right away above.  After the theorem statement is written, skip a line and write Proof and begin the proof on that same line.  "
},
{
  "id": "wc-assumptions",
  "level": "2",
  "url": "pp-specs.html#wc-assumptions",
  "type": "Writing convention",
  "number": "2",
  "title": "At the very beginning of the proof, state all assumptions and explain what will be proved.",
  "body": "At the very beginning of the proof, state all assumptions and explain what will be proved  Clearly state all assumptions and say what you will prove. This may feel like you’re repeating things you just wrote in the theorem statement. That's OK! A proof should be fully self-contained. Here's an example:   Theorem 1: If is an integer and is an odd integer, then is an odd integer.  Proof. We assume that is an integer and is an odd integer. We will prove that is an odd integer.  You should always check some examples to see if a theorem statement is true or not. If it is false, give a single clear counterexample (with explanation) and then follow any additional instructions on the portfolio sheet.  "
},
{
  "id": "wc-proof-method",
  "level": "2",
  "url": "pp-specs.html#wc-proof-method",
  "type": "Writing convention",
  "number": "3",
  "title": "State the proof method being used and any additional information required to clarify it.",
  "body": "State the proof method being used and any additional information required to clarify it  Always state the proof method being used just after the assumptions, such as We give a direct proof.  If using proof by contrapositive, contradiction, cases, or induction, clearly state the new assumptions or statement being used.  These other proof methods listed begin in Chapter 3. When using any of these proof methods, first tell the reader that you are using them and clearly state the assumptions or new theorem statement before you continue the proof:   Theorem 1: If is an integer and is an odd integer, then is an odd integer.  Proof. We will prove the contrapositive of this statement, which is If is even, then is even. So, we assume that is an even integer. We will prove that is an even integer as well.  Here's another example:   Theorem: If then is an irrational number.  Proof: We will prove this theorem by contradiction. So, we assume that the negation of the statement is true. That is, we assume that and is a rational number.   "
},
{
  "id": "wc-justify",
  "level": "2",
  "url": "pp-specs.html#wc-justify",
  "type": "Writing convention",
  "number": "4",
  "title": "Give clear, correct, and organized justification for each statement, and have no important errors or omissions.",
  "body": "Give clear, correct, and organized justification for each statement, and have no important errors or omissions  Directly explain why each statement is true. When in doubt, explain more!  A proof is made of statements that build up on each other. Once you've justified one statement, it becomes a building block that can be used to justify future statements. So, the sentences in your proofs must be put in a logical order so that each statement follows from the work before it. Each statement's justification must be clear and unambiguous in addition to being mathematically correct. Don't worry about being too direct or repetitive; always say exactly how you know that a statement is true. Leave nothing to the reader's imagination! The words because and by are helpful to indicate justifications.   Theorem: If is an even integer, then is an even integer.  Proof: We assume that is an even integer. We will give a direct proof that is an even integer.  Because is even by assumption, by definition we can write for some integer .  Using algebra, we know that  Because is an integer, by the closure properties of integers, is also an integer...   Each sentence in the example above contains a statement, and a justification. Make sure you can see where each one is. Sometimes justifications come before statements, other times they come after -- this is a matter of finding a way to make a sentence sound natural.  You can also justify statements using outside facts that are prerequisites for this class. Using algebra above is an example of this. You can (and should!) leave out details below the level of this class (including excessive algebra or arithmetic).  "
},
{
  "id": "wc-variables",
  "level": "2",
  "url": "pp-specs.html#wc-variables",
  "type": "Writing convention",
  "number": "5",
  "title": "Define all variables before they are used.",
  "body": "Define all variables before they are used  Before using any variable, you must explain what it is. Never use a variable without defining it first. Here are some examples:  Let be the base length of the triangle.  Let .   In particular, notice that each example tells you the meaning of the variable or the set it comes from (which is like a meaning). It is also OK to define the variable immediately after using it in the same sentence, as in:  Because is even, we know that for some integer .  Therefore, for some .   Using an undefined variable is a critical logical mistake!  "
},
{
  "id": "wc-definitions",
  "level": "2",
  "url": "pp-specs.html#wc-definitions",
  "type": "Writing convention",
  "number": "6",
  "title": "Cite definitions clearly and correctly each time one is used.",
  "body": "Cite definitions clearly and correctly each time one is used  Every definition has two parts: A word (like even ), and a meaning for that word. Using a definition involves connecting one of these two parts to the other, so that you can use the other part.  For example, if you know a number is even, the definition lets you include the other half of the definition as a statement in your proof: There exists an integer so that . Definitions work both ways, so if you know that where is an integer, then the definition lets you state that is even.  To cite a definition, you must include a warrant or reason for why you can use it in this situation. Then, write the conclusion that the definition lets you make. Use the definition's word where it best fits and use the phrase by definition to connect these items.  It can sometimes feel repetitive to cite a definition each time you use it. That's OK! It is better to be clear and thorough, than to leave some justification out.  Good examples:   Because we are given that is even, by definition there exists an integer such that . (Here the warrant is that we are given is even. Then the conclusion comes after by definition. )  Because we have written where is an integer, by definition is an even integer. (This time the warrant is that we've already written for an integer . The conclusion is that we can say is called even. )   Note: You don't need to repeat the name of the definition multiple times in the same sentence. Use the word once, as long as it is clear which word you are using. Here's a poor example: Because we are given that is even, by definition of even there exists an integer such that . Note that even is repeated unnecessarily. This is still a correct statement, just not well-written.  "
},
{
  "id": "wc-overleaf",
  "level": "2",
  "url": "pp-specs.html#wc-overleaf",
  "type": "Writing convention",
  "number": "7",
  "title": "Be typed in a new Overleaf document.",
  "body": "Be typed in a new Overleaf document  Use the provided Overleaf template and refer to the LaTeX reference document for help with symbols and formatting. These are available on Blackboard.  "
},
{
  "id": "wc-spelling",
  "level": "2",
  "url": "pp-specs.html#wc-spelling",
  "type": "Writing convention",
  "number": "8",
  "title": "Follow all basic WRT 150 writing requirements.",
  "body": "Follow all basic WRT 150 writing requirements  Specifically, use correct spelling, grammar, and punctuation. Ensure each sentence is complete and has a subject and a verb (which may include mathematical symbols).  In addition, start a new paragraph when a new idea begins. Proofs often have only 1 or 2 sentences per paragraph, and it's OK to start a new paragraph as soon as there's a new idea, even if it makes for a very short paragraph.  "
},
{
  "id": "wc-we",
  "level": "2",
  "url": "pp-specs.html#wc-we",
  "type": "Writing convention",
  "number": "9",
  "title": "Use “we” instead of “I” or “you”.",
  "body": "Use we instead of I or you  The idea is to stress that you and the reader are doing the mathematics together. This really is standard in math, so it’s good practice with it now!  "
},
{
  "id": "wc-begin",
  "level": "2",
  "url": "pp-specs.html#wc-begin",
  "type": "Writing convention",
  "number": "10",
  "title": "Begin every sentence with a word, not a symbol.",
  "body": "Begin every sentence with a word, not a symbol  This avoids problems with whether you should capitalize a variable or not. Symbols also make it harder to tell where a sentence begins.   Good example: Because , by definition we know that is even.  Bad example: , so by definition we know that is even.   "
},
{
  "id": "wc-formula",
  "level": "2",
  "url": "pp-specs.html#wc-formula",
  "type": "Writing convention",
  "number": "11",
  "title": "Include every equation or formula in a sentence, including correct punctuation.",
  "body": "Include every equation or formula in a sentence, including correct punctuation  Every equation can be read in words, and so it must fit properly within a sentence. This includes putting a punctuation mark at the end of a sentence, even if the sentence ends with a formula. For example, notice the comma, colon, and period in this complete sentence:   Using algebra, we have:    Read this out loud: It forms a complete sentence including a verb. Here's how I would read this: Using algebra, we have: squared plus plus 1 equals zero. Notice in particular that there's a period at the end of the sentence, even though that end occurs with an equation.  "
},
{
  "id": "wc-display",
  "level": "2",
  "url": "pp-specs.html#wc-display",
  "type": "Writing convention",
  "number": "12",
  "title": "Display (center) important equations and align “<span class=\"process-math\">\\(=\\)<\/span>” signs.",
  "body": "Display (center) important equations and align signs  This means putting important equations, centered, on their own line. Only center important equations that are key to the proof or its conclusion. Minor or helper equations can be left inline. If the left side of the equation does not change, don’t repeat it. For example:  You can find examples of how to do this in the sample Overleaf file. "
},
{
  "id": "wc-symbols",
  "level": "2",
  "url": "pp-specs.html#wc-symbols",
  "type": "Writing convention",
  "number": "13",
  "title": "Use appropriate symbols in formulas; avoid excessive symbols (or writing out formulas in words) otherwise.",
  "body": "Use appropriate symbols in formulas; avoid excessive symbols (or writing out formulas in words) otherwise  Do not try to write out formulas in words. But also, never use a symbol or abbreviation in place of a word (such as , , , etc.   Good example: Because there exists an integer so that ...  Bad example (too many symbols): Because s.t. ...  Bad example (too many words): Because n equals two times k, ...   "
},
{
  "id": "wc-numbering",
  "level": "2",
  "url": "pp-specs.html#wc-numbering",
  "type": "Writing convention",
  "number": "14",
  "title": "Use equation numbers sparingly and always refer to them in the text.",
  "body": "Use equation numbers sparingly and always refer to them in the text  If you don’t need to refer to an equation by number, leave out the number. You can see examples of both in the sample Overleaf file.  "
},
{
  "id": "wc-textbook-format",
  "level": "2",
  "url": "pp-specs.html#wc-textbook-format",
  "type": "Writing convention",
  "number": "15",
  "title": "Write exponents, fractions, operations, and all other mathematical symbols in professional textbook format.",
  "body": "Write exponents, fractions, operations, and all other mathematical symbols in professional textbook format  Never use shorthand formatting. See examples in the sample Overleaf file. Here's a quick reference:    Yes!  Nooooooooo!     x^2     (x+1)\/5, or worse: x+1\/5     sqrt(7)    or  x*y    "
},
{
  "id": "wc-italics",
  "level": "2",
  "url": "pp-specs.html#wc-italics",
  "type": "Writing convention",
  "number": "16",
  "title": "Write all variables in italics.",
  "body": "Write all variables in italics  This helps them stick out and distinguishes words like a from variables like .  "
},
{
  "id": "wc-summary",
  "level": "2",
  "url": "pp-specs.html#wc-summary",
  "type": "Writing convention",
  "number": "17",
  "title": "Include a summary at the end of the proof and an “end of proof” symbol.",
  "body": "Include a summary at the end of the proof and an end of proof symbol  It’s considered good form to sum up the proof once you’ve finished the main writing, and to clearly show the reader where the proof ends. Briefly state what you actually proved, and put a box at the end of that line. This can be summarized or simplified compared to the original theorem statement, as long as it is still true.  "
},
{
  "id": "pp-1",
  "level": "1",
  "url": "pp-1.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 1",
  "body": " Portfolio Problem 1     If is an even integer, then is an odd integer.       Instructions for the draft  Upload a scanned image of your draft on Blackboard by...  To earn math successful , your draft must do all of the following:   Prove Theorem 1 using a know-show table or similar format. Include all key mathematical ideas and work so that you have a complete solution. Include just enough writing and detail to make it understandable. Drafts can be hand-written -- don't focus on communication specifications nor typing them up yet.  Include examples. Substitute in a variety of appropriate values for to see how this theorem works. Include at least 3 examples, covering a variety of -values. For each, show how you know the hypothesis and conclusion are true (see the sample portfolio solution for an example of how to format these).     Instructions for the writing revision  Submit a PDF of your writing revision on Blackboard by...  To earn math & writing successful , your writing revision must do all of the following:   Include a formal proof of Theorem 1.  Include examples, same as in the draft.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):           Instructions for excellence  To earn math & writing excellent , do all of these (in the writing revision or later):   Thoroughly address all comments from the draft and writing revision.  Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them. (In future portfolios, you'll have other options for how to earn excellent . This time, your goal is to show that you can follow all of the conventions thoroughly.)      "
},
{
  "id": "pp-1-2-1",
  "level": "2",
  "url": "pp-1.html#pp-1-2-1",
  "type": "Theorem",
  "number": "1",
  "title": "",
  "body": "  If is an even integer, then is an odd integer.   "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
