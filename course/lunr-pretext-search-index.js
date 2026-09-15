var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "pp-specs",
  "level": "1",
  "url": "pp-specs.html",
  "type": "Section",
  "number": "",
  "title": "Writing Conventions for MTH 210",
  "body": " Writing Conventions for MTH 210   These are writing conventions that we will learn and use in MTH 210. Every writing revision and final revision of each portfolio should follow all of these.  Click or tap on each convention below to read more details and see an example.    Required writing conventions   To earn math & writing successful or better, a proof must do all of these:   Include a true and correctly worded theorem statement just before the proof  The theorem statement should be a simple declarative statement, like we've studied in class. Here is a typical textbook problem:  Prove that if is an integer and is odd, then is odd.  To write a solution to this problem, first turn it into a theorem statement like the following:  Theorem 1: If is an integer and is an odd integer, then is an odd integer.  The statement must be true (so make sure you've tried examples!). It should be in the form of a conditional and\/or quantified statement. Your statement must follow all other writing conventions. That includes defining any variables in the statement before you use them. For example, note how is defined right away above.  After the theorem statement is written, skip a line and write Proof and begin the proof on that same line.   At the very beginning of the proof, state all assumptions and explain what will be proved  Clearly state all assumptions and say what you will prove. This may feel like you’re repeating things you just wrote in the theorem statement. That's OK! A proof should be fully self-contained. Here's an example:   Theorem 1: If is an integer and is an odd integer, then is an odd integer.  Proof. We assume that is an integer and is an odd integer. We will prove that is an odd integer.  You should always check some examples to see if a theorem statement is true or not. If it is false, give a single clear counterexample (with explanation) and then follow any additional instructions on the portfolio sheet.   State the proof method being used and any additional information required to clarify it  Always state the proof method being used just after the assumptions, such as We give a direct proof.  If using proof by contrapositive, contradiction, cases, or induction, clearly state the new assumptions or statement being used.  These other proof methods listed begin in Chapter 3. When using any of these proof methods, first tell the reader that you are using them and clearly state the assumptions or new theorem statement before you continue the proof:   Theorem 1: If is an integer and is an odd integer, then is an odd integer.  Proof. We will prove the contrapositive of this statement, which is If is even, then is even. So, we assume that is an even integer. We will prove that is an even integer as well.  Here's another example:   Theorem: If then is an irrational number.  Proof: We will prove this theorem by contradiction. So, we assume that the negation of the statement is true. That is, we assume that and is a rational number.    Give clear, correct, and organized justification for each statement, and have no important errors or omissions  Directly explain why each statement is true. When in doubt, explain more!  A proof is made of statements that build up on each other. Once you've justified one statement, it becomes a building block that can be used to justify future statements. So, the sentences in your proofs must be put in a logical order so that each statement follows from the work before it. Each statement's justification must be clear and unambiguous in addition to being mathematically correct. Don't worry about being too direct or repetitive; always say exactly how you know that a statement is true. Leave nothing to the reader's imagination! The words because and by are helpful to indicate justifications.   Theorem: If is an even integer, then is an even integer.  Proof: We assume that is an even integer. We will give a direct proof that is an even integer.  Because is even by assumption, by definition we can write for some integer .  Using algebra, we know that  Because is an integer, by the closure properties of integers, is also an integer...   Each sentence in the example above contains a statement, and a justification. Make sure you can see where each one is. Sometimes justifications come before statements, other times they come after -- this is a matter of finding a way to make a sentence sound natural.  You can also justify statements using outside facts that are prerequisites for this class. Using algebra above is an example of this. You can (and should!) leave out details below the level of this class (including excessive algebra or arithmetic).   Define all variables and new notation before they are used  Before using any variable, you must explain what it is. Never use a variable without defining it first. Here are some examples:  Let be the base length of the triangle.  Let .   In particular, notice that each example tells you the meaning of the variable or the set it comes from (which is like a meaning). It is also OK to define the variable immediately after using it in the same sentence, as in:  Because is even, we know that for some integer .  Therefore, for some .   Using an undefined variable is a critical logical mistake!  Similarly, you must define any new notation that you create or use within your proof. For example, if using to represent the Lucas Numbers (we'll see what these are later!), you would need to write Let represent the th Lucas number before using that symbol anywhere else.  You do not need to define standard symbols that we have already defined and used in class.   Cite definitions clearly and correctly each time one is used  Every definition has two parts: A word (like even ), and a meaning for that word. Using a definition involves connecting one of these two parts to the other, so that you can use the other part.  For example, if you know a number is even, the definition lets you include the other half of the definition as a statement in your proof: There exists an integer so that . Definitions work both ways, so if you know that where is an integer, then the definition lets you state that is even.  To cite a definition, you must include a warrant or reason for why you can use it in this situation. Then, write the conclusion that the definition lets you make. Use the definition's word where it best fits and use the phrase by definition to connect these items.  It can sometimes feel repetitive to cite a definition each time you use it. That's OK! It is better to be clear and thorough, than to leave some justification out.  Good examples:   Because we are given that is even, by definition there exists an integer such that . (Here the warrant is that we are given is even. Then the conclusion comes after by definition. )  Because we have written where is an integer, by definition is an even integer. (This time the warrant is that we've already written for an integer . The conclusion is that we can say is called even. )   Note: You don't need to repeat the name of the definition multiple times in the same sentence. Use the word once, as long as it is clear which word you are using. Here's a poor example: Because we are given that is even, by definition of even there exists an integer such that . Note that even is repeated unnecessarily. This is still a correct statement, just not well-written.     Additional writing conventions   Every proof must do most of these, where most means occasional errors in up to 3 items, or consistent errors in 1 item.  One way to earn excellent is for a proof to do all of these thoroughly and with no noticeable omissions.   Be typed in a new Overleaf document  Use the provided Overleaf template and refer to the LaTeX reference document for help with symbols and formatting. These are available on Blackboard.   Follow all basic WRT 150 writing requirements, including spelling, grammar, and punctuation, and avoiding shorthand  Specifically, use correct spelling, grammar, and punctuation. Ensure each sentence is complete and has a subject and a verb (which may include mathematical symbols).  In addition, start a new paragraph when a new idea begins. Proofs often have only 1 or 2 sentences per paragraph, and it's OK to start a new paragraph as soon as there's a new idea, even if it makes for a very short paragraph.  Finally, avoid shorthand words, abbreviations, or slang. For example, use substitute rather than sub in or plug in . These are both shorthands for the more precise idea of substitution.   Use we instead of I or you  The idea is to stress that you and the reader are doing the mathematics together. This really is standard in math, so it’s good practice with it now!   Begin every sentence with a word, not a symbol  This avoids problems with whether you should capitalize a variable or not. Symbols also make it harder to tell where a sentence begins.   Good example: Because , by definition we know that is even.  Bad example: , so by definition we know that is even.    Include every equation or formula in a sentence, including correct punctuation  Every equation can be read in words, and so it must fit properly within a sentence. This includes putting a punctuation mark at the end of a sentence, even if the sentence ends with a formula. For example, notice the comma, colon, and period in this complete sentence:   Using algebra, we have:    Read this out loud: It forms a complete sentence including a verb. Here's how I would read this: Using algebra, we have: squared plus plus 1 equals zero. Notice in particular that there's a period at the end of the sentence, even though that end occurs with an equation.   Display (center) important equations and align signs  This means putting important equations, centered, on their own line. Only center important equations that are key to the proof or its conclusion. Minor or helper equations can be left inline. If the left side of the equation does not change, don’t repeat it. For example:  You can find examples of how to do this in the sample Overleaf file.  Use appropriate symbols in formulas; avoid excessive symbols (or writing out formulas in words) otherwise  Do not try to write out formulas in words. But also, never use a symbol or abbreviation in place of a word (such as , , , etc.   Good example: Because there exists an integer so that ...  Bad example (too many symbols): Because s.t. ...  Bad example (too many words): Because n equals two times k, ...    Use equation numbers sparingly and always refer to them in the text  If you don’t need to refer to an equation by number, leave out the number. You can see examples of both in the sample Overleaf file.   Write exponents, fractions, operations, and all other mathematical symbols in professional textbook format  Never use shorthand formatting. See examples in the sample Overleaf file. Here's a quick reference:    Yes!  Nooooooooo!     x^2     (x+1)\/5, or worse: x+1\/5     sqrt(7)    or  x*y     Write all variables in italics  This helps them stick out and distinguishes words like a from variables like .   Include a summary at the end of the proof and an end of proof symbol  It’s considered good form to sum up the proof once you’ve finished the main writing, and to clearly show the reader where the proof ends. Briefly state what you actually proved, and put a box at the end of that line. This can be summarized or simplified compared to the original theorem statement, as long as it is still true.    "
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
  "title": "Define all variables and new notation before they are used.",
  "body": "Define all variables and new notation before they are used  Before using any variable, you must explain what it is. Never use a variable without defining it first. Here are some examples:  Let be the base length of the triangle.  Let .   In particular, notice that each example tells you the meaning of the variable or the set it comes from (which is like a meaning). It is also OK to define the variable immediately after using it in the same sentence, as in:  Because is even, we know that for some integer .  Therefore, for some .   Using an undefined variable is a critical logical mistake!  Similarly, you must define any new notation that you create or use within your proof. For example, if using to represent the Lucas Numbers (we'll see what these are later!), you would need to write Let represent the th Lucas number before using that symbol anywhere else.  You do not need to define standard symbols that we have already defined and used in class.  "
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
  "title": "Follow all basic WRT 150 writing requirements, including spelling, grammar, and punctuation, and avoiding shorthand.",
  "body": "Follow all basic WRT 150 writing requirements, including spelling, grammar, and punctuation, and avoiding shorthand  Specifically, use correct spelling, grammar, and punctuation. Ensure each sentence is complete and has a subject and a verb (which may include mathematical symbols).  In addition, start a new paragraph when a new idea begins. Proofs often have only 1 or 2 sentences per paragraph, and it's OK to start a new paragraph as soon as there's a new idea, even if it makes for a very short paragraph.  Finally, avoid shorthand words, abbreviations, or slang. For example, use substitute rather than sub in or plug in . These are both shorthands for the more precise idea of substitution.  "
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
  "body": " Portfolio Problem 1     If is an even integer, then is an odd integer.       Instructions for the draft  Upload a scanned image of your draft to the Blackboard assignment.  To earn math successful , your draft must do all of the following:   Prove Theorem 1 using a know-show table or similar format. Include all key mathematical ideas and work so that you have a complete solution. Include just enough writing and detail to make it understandable. Drafts can be hand-written -- don't focus on writing conventions nor typing them up yet.  Include examples. Substitute in a variety of appropriate values for to see how this theorem works. Include at least 3 examples, covering a variety of relevant -values. For each, show how you know the hypothesis and conclusion are true (see the sample portfolio solution for an example of how to format these).     Instructions for the writing revision  First, wait for draft feedback on Blackboard!  Then, submit a PDF of your writing revision to the Blackboard assignment.  To earn math & writing successful , your writing revision must do all of the following:   Include a formal proof of Theorem 1.  Include examples, same as in the draft.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , do all of these (in the writing revision or later):   Thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail.  Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them. (In future portfolios, you'll have other options for how to earn excellent . This time, your goal is to show that you can follow all of the conventions thoroughly.)  Note that excellent is not automatic upon revision, and relies on showing thorough attention to detail. (This is true in each portfolio -- just a reminder here!)      "
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
  "id": "pp-2",
  "level": "1",
  "url": "pp-2.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 2",
  "body": " Portfolio Problem 2    An integer is a multiple of 3 provided that there exists an integer such that .     The sum of the cubes of any three consecutive integers is a multiple of 3.      The sum of the cubes of any three consecutive integers is a multiple of 4.       Instructions for the draft  Upload a scanned image of your draft to the Blackboard assignment.  To earn math successful , your draft must address both of the conjectures, following these instructions:  If a conjecture is true:   State it as a theorem and write a proof of it in know-show format.  Generate three concrete examples that illustrate it and cover a variety of integers. Include the examples after the proof. For each, show how you know the hypothesis and conclusion are true (see the sample portfolio solution for an example of how to format these).    If a conjecture is false:   Say it is false and include one concrete counterexample. Use specific numbers and explain how they make the hypothesis true, but the conclusion false (see the sample portfolio solution for an example of how to format a disproof).      To mathematize this kind of theorem, create a variable that represents one of the three consecutive integers. Then how do you represent the other consecutive integers in terms of that variable? What formula can you write out to represent the sum described in the Theorem statement?    Instructions for the writing revision  First, wait for draft feedback on Blackboard!  Then, submit a PDF of your writing revision to the Blackboard assignment.  To earn math & writing successful , your writing revision must do all of the following:   Follow all instructions for proofs, examples, and counterexamples from the draft. Each of these should now be formatted following the writing guidelines.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail when you do so. Then pick one of these and do it:  Polish Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them. Note that excellent is not automatic upon revision, and relies on showing thorough attention to detail.  Generalize While proving or disproving the two conjectures, you should have noticed some patterns in the algebra. Create and prove a more general theorem that explains exactly which numbers the sum is, or isn't, a multiple of. You may need to add additional hypotheses or otherwise clarify your theorem statement. (This is in addition to following all instructions for the writing revision -- in particular, your writing revision must include all required proofs, examples, and disproofs.)      "
},
{
  "id": "pp-2-2-1",
  "level": "2",
  "url": "pp-2.html#pp-2-2-1",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": " An integer is a multiple of 3 provided that there exists an integer such that .  "
},
{
  "id": "pp-2-2-2",
  "level": "2",
  "url": "pp-2.html#pp-2-2-2",
  "type": "Conjecture",
  "number": "3",
  "title": "",
  "body": "  The sum of the cubes of any three consecutive integers is a multiple of 3.   "
},
{
  "id": "pp-2-2-3",
  "level": "2",
  "url": "pp-2.html#pp-2-2-3",
  "type": "Conjecture",
  "number": "4",
  "title": "",
  "body": "  The sum of the cubes of any three consecutive integers is a multiple of 4.   "
},
{
  "id": "pp-3",
  "level": "1",
  "url": "pp-3.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 3",
  "body": " Portfolio Problem 3     Let be a three digit natural number with hundreds digit , tens digit , and ones digit . The number is divisible by 11 if and only if is divisible by 11.       Instructions for the draft  Upload a scanned image of your draft to the Blackboard assignment.  To earn math successful , your draft must do all of the following:   Prove using a know-show table or similar format. Include all key mathematical ideas and work so that you have a complete solution. Include just enough writing and detail to make it understandable. Drafts can be hand-written -- don't focus on communication guidelines nor typing them up yet.  Important: This is a biconditional statement! Write a separate know-show table for each direction separately. When you do, be careful to include the correct hypotheses for each.  Include examples. Include at least 2 examples for each direction, covering a variety of -values. For each, show how you know the hypothesis and conclusion are true (see the sample portfolio solution for an example of how to format these).   When we write a three digit number such as 418, what does the 4 represent in terms of place value? What about the 1, and the 8? How can you write this out in one formula of the form ?  For each direction of the proof, write out the hypotheses very carefully in the form of an equation. What could you add or subtract from both sides to obtain the kind of equation you need for your conclusion?     Instructions for the writing revision  First, wait for draft feedback on Blackboard!  Then, submit a PDF of your writing revision to the Blackboard assignment.  To earn math & writing successful , your writing revision must do all of the following:   Include a formal proof of . You should prove both directions within a single proof. Carefully state and use the hypotheses in each direction. See the sample proofs from class for help.  The let sentence at the beginning gives you a set of hypotheses that apply in both directions of the biconditional. Assume them once at the beginning of the whole proof, and use them in both directions.  Include examples of both directions, same as in the draft.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail when you do so. Then pick one of these and do it:  Polish Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them. Note that excellent is not automatic upon revision, and relies on showing thorough attention to detail.  Challenge: Use modular arithmetic Rework your proof so that it uses (only) modular arithmetic, not divisibility. That is, you should find a way to do the entire proof with modular arithmetic and arithmetic shortcuts. This should be relatively short and slick. If you're not sure, run it past Dr. Clark first! (This is in addition to following all instructions for the writing revision -- in particular, your writing revision must include all required examples too.)      "
},
{
  "id": "thm-pp3",
  "level": "2",
  "url": "pp-3.html#thm-pp3",
  "type": "Theorem",
  "number": "5",
  "title": "",
  "body": "  Let be a three digit natural number with hundreds digit , tens digit , and ones digit . The number is divisible by 11 if and only if is divisible by 11.   "
},
{
  "id": "pp-4",
  "level": "1",
  "url": "pp-4.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 4",
  "body": " Portfolio Problem 4     For all , if , then and .      For all , if , then or .       Instructions for the draft  Upload a scanned image of your draft to the Blackboard assignment.  To earn math successful , your draft must address both of the conjectures, following these instructions:  If a conjecture is true:   State it as a theorem and write a proof of it in know-show format.  Generate three concrete examples that illustrate it and cover a variety of integers. Include the examples after the proof. For each, show how you know the hypothesis and conclusion are true (see the sample portfolio solution for an example of how to format these).    If a conjecture is false:   Say it is false and include one concrete counterexample. Use specific numbers and explain how they make the hypothesis true, but the conclusion false (see the sample portfolio solution for an example of how to format a disproof).      Read each conjecture carefully! They are similar, but not the same in some important ways.    Instructions for the writing revision  First, wait for draft feedback on Blackboard!  Then, submit a PDF of your writing revision to the Blackboard assignment.  To earn math & writing successful , your writing revision must do all of the following:   Follow all instructions for proofs, examples, and counterexamples from the draft. Each of these should now be formatted following the writing guidelines.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail when you do so. Then pick one of these and do it:  Polish Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them. Note that excellent is not automatic upon revision, and relies on showing thorough attention to detail.  The Zero Product Property In algebra class, you likely learned the zero product property . This says that if then either or (you use this when factoring and solving quadratics, for example). But, that was in the real numbers! Your work above shows that the zero product property is not always true in modular arithmetic, and your counterexample should give you a hint of why this might be true with other moduli. To earn excellent, explain for which natural numbers the following statement is true: For all , if , then or . This should include a clear statement of exactly which it is true for, and either a proof or a clear explanation of why those values work. (This is in addition to following all instructions for the writing revision -- in particular, your writing revision must include all required proofs, examples, and disproofs.)      "
},
{
  "id": "pp-4-2-1",
  "level": "2",
  "url": "pp-4.html#pp-4-2-1",
  "type": "Conjecture",
  "number": "6",
  "title": "",
  "body": "  For all , if , then and .   "
},
{
  "id": "pp-4-2-2",
  "level": "2",
  "url": "pp-4.html#pp-4-2-2",
  "type": "Conjecture",
  "number": "7",
  "title": "",
  "body": "  For all , if , then or .   "
},
{
  "id": "pp-5",
  "level": "1",
  "url": "pp-5.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 5 - Team project",
  "body": " Portfolio Problem 5 - Team project     For each integer , if then .    What does the Division Algorithm tell you about in this situation?    For each integer , if then .    The previous theorem will be helpful -- be clear and precise about how you use it. Here's a handy template: Because (statement you know is true), by , (conclusion from the theorem).    The real number is irrational.    We completed a similar proof in Section 3.3. Feel free to use it as a starting point -- but be very careful to understand where this proof must be different! Look for ways to use in the proof of .     Instructions for the draft  To earn math successful , your group must do all of the following:   Work together as a team to find a proof for all three theorems. Know-show tables are fine.  Put them all in one document, but write a separate theorem statement and proof for each.  Include at least two examples that illustrate , and two more for . You don't need examples for . Put the examples outside of the proofs (see the sample portfolio solution for an example of how to format these).  One group member should submit a scanned image of your draft to the Blackboard assignment.     Instructions for the writing revision  First, wait for draft feedback on Blackboard!  To earn math & writing successful , you must do all of the following:  Individually , submit your project reflection (link is on Blackboard). This must be completed in order to earn your individual portfolio grade.  As a group, do all of these:   Include all proofs and examples required, as in the draft.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Do not include a view only because Dr. Clark will share an Overleaf document with your team (so I'll already have access to it).  One group member should submit a PDF of your writing revision to the Blackboard assignment.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail when you do so. Then do the following:  Polish Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them.  Note that excellent is not automatic upon revision, and relies on showing thorough attention to detail.    "
},
{
  "id": "thm-pp5-1",
  "level": "2",
  "url": "pp-5.html#thm-pp5-1",
  "type": "Theorem",
  "number": "8",
  "title": "",
  "body": "  For each integer , if then .   "
},
{
  "id": "thm-pp5-2",
  "level": "2",
  "url": "pp-5.html#thm-pp5-2",
  "type": "Theorem",
  "number": "9",
  "title": "",
  "body": "  For each integer , if then .   "
},
{
  "id": "thm-pp5-3",
  "level": "2",
  "url": "pp-5.html#thm-pp5-3",
  "type": "Theorem",
  "number": "10",
  "title": "",
  "body": "  The real number is irrational.   "
},
{
  "id": "pp-6",
  "level": "1",
  "url": "pp-6.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 6",
  "body": " Portfolio Problem 6     Assume that are Fibonacci numbers. Prove that . Use induction.    Special instructions: If you choose this conjecture, first rephrase it as a fully correct theorem statement. It needs some work!    Let be a natural number and let . Then the th derivative of is    Special instructions: If you choose this conjecture, complete the theorem statement with an explicit (i.e. not recursive) formula for and use induction to prove your conjecture.     Instructions for the draft  Upload a scanned image of your draft to the Blackboard assignment.  To earn math successful , your draft must do all of the following:   Pick ONE conjecture and prove it. Ignore the other one. Include all key mathematical ideas and work so that you have a complete solution. Include just enough writing and detail to make it understandable. Drafts can be hand-written -- don't focus on communication specifications nor typing them up yet.  Follow the special instructions for your conjecture.  Include examples. Include at least 3 examples. These are separate from the base case of the induction proof and should be stated after the proof. See the sample portfolio solution for an example of how to format these.     Instructions for the writing revision  First, wait for draft feedback on Blackboard!  Then, submit a PDF of your writing revision to the Blackboard assignment.  To earn math & writing successful , your writing revision must do all of the following:   Include a proof and examples, as in the draft.  Put a special focus on demonstrating that you understand what the predicate, assumptions, and conclusions mean. Make sure that what you write has the correct meaning . This includes using predicate notation ( ) and quantifiers carefully and correctly. Also clearly and correctly state what you are assuming and what you are going to prove in the inductive step.  To help with writing, there are many sample induction proofs, including examples using Fibonacci numbers and derivatives, in the daily folders for 4.1, 4.2, and 4.3. There is also a template that you can follow for all induction proofs in the Portfolio folder.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail when you do so. Then do this:  Polish Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them.  Note that excellent is not automatic upon revision, and relies on showing thorough attention to detail.    "
},
{
  "id": "pp-6-2-1",
  "level": "2",
  "url": "pp-6.html#pp-6-2-1",
  "type": "Conjecture",
  "number": "11",
  "title": "",
  "body": "  Assume that are Fibonacci numbers. Prove that . Use induction.   "
},
{
  "id": "pp-6-2-3",
  "level": "2",
  "url": "pp-6.html#pp-6-2-3",
  "type": "Conjecture",
  "number": "12",
  "title": "",
  "body": "  Let be a natural number and let . Then the th derivative of is   "
},
{
  "id": "pp-7",
  "level": "1",
  "url": "pp-7.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 7 - Team project",
  "body": " Portfolio Problem 7 - Team project     Let be the th Lucas number and let and . For each , .       Instructions for the draft  To earn math successful , your group must do all of the following:   First, read out loud and discuss this as a team: Using the second principle of mathematical induction (textbook, near the end of Section 4.2). Compare this to how regular induction works -- pay special attention to the assumptions in the inductive step.  Then read out loud below. Read through the sample proof and notes carefully, and ask Dr. Clark questions about all of it! To test yourselves, answer this question: How are the assumptions in the inductive step different between strong and regular induction?  Finally, read this out loud: The Lucas numbers are a recursive sequence of numbers, similar to the Fibonacci numbers. The Lucas numbers are defined as:  Work together as a team to prove the theorem at the top of this page. Structure your draft to clearly show each key part of an induction proof.  Important hints:   The quadratic formula can be used to show that and are the two solutions to . This implies that and (why? -- you should be able to explain this!). These facts are useful, and if you wish to use them, you should justify them (briefly) within your proof.  To help understand the theorem, start by verifying that and .  Work with the relation and substitute the expressions for and from above. Use the useful facts from part (a), and the fact that to simplify. Use all of this to prove that .  Note that items (b) and (c) are scratch work; they should help you understand how to approach the proof but are not actually part of the proof themselves.    Include examples. Include at least two concrete examples illustrating your theorem (the hints above help you generate one example for ). Write them separately, above or below the proof. These are different from the base cases. (See the sample portfolio solution for an example of how to format these).  One group member should submit a scanned image of your draft to the Blackboard assignment.     Instructions for the writing revision  First, wait for draft feedback on Blackboard!  To earn math & writing successful , you must do all of the following:  Individually, submit your project reflection (link is on Blackboard). This must be completed in order to earn your individual portfolio grade.  As a group, do all of these:   Include a formal proof of the theorem.  Include examples, same as in the draft.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Do not include a view only link because Dr. Clark will share an Overleaf document with your team (so I'll already have access to it).  One group member should submit a PDF of your writing revision to the Blackboard assignment.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail when you do so. Then do the following:  Polish Polish your writing so that it follows all of the thoroughly, with no noticeable omissions. Click or tap the link to see all of them. Note that excellent is not automatic upon revision, and relies on showing thorough attention to detail.      Strong induction hints and tips  This proof uses what is often called strong induction , or the second principle of mathematical induction . Read about it in Section 4.2.  The only difference between strong induction and regular induction is that you may assume more in the inductive step: You may assume that any or all of , , , are true (for some ). You may use any or all of these in your proof. Typically, not all of them will actually be used in the proof, but they're available if you need them.  Below is an example of how strong induction works, in addition to the examples in your book. Note that this is not a formal proof -- it is just an outline to help you understand this new idea. Tap Proof to open and read it.   The Fibonacci number satisfies for all .   Let be   where .  Base cases: claims that . We know that and , and by inspection . So is true.  Likewise, claims that . We know that and , and by inspection . So is true.  Assumptions: We assume that, for some natural number , both and are true. That is, we assume that and .  Goal: We want to prove that .  Inductive step:   Reading the above inequalities from top to bottom shows that .     Notes:    Why did we need strong induction? Because each Fibonacci number is defined in terms of the two previous Fibonacci numbers, we needed to know something about both  and . Assuming that only would not have given us enough to work with.    Why did we have to do two base cases? Because this strong induction uses the two previous Fibonacci numbers. So this first inductive step amounts to proving If and are true, then is true. Think carefully about this!    Why did we only assume that and are true, when strong induction would allow us to assume that all of , ,  , are true? This is just a matter of style: We only needed and in the proof, so we didn't say anything about , , etc. It is considered good style to mention only the predicates you need.       "
},
{
  "id": "pp-7-2-1",
  "level": "2",
  "url": "pp-7.html#pp-7-2-1",
  "type": "Theorem",
  "number": "13",
  "title": "",
  "body": "  Let be the th Lucas number and let and . For each , .   "
},
{
  "id": "pp-7-induction-tips-5",
  "level": "2",
  "url": "pp-7.html#pp-7-induction-tips-5",
  "type": "Theorem",
  "number": "14",
  "title": "",
  "body": " The Fibonacci number satisfies for all .   Let be   where .  Base cases: claims that . We know that and , and by inspection . So is true.  Likewise, claims that . We know that and , and by inspection . So is true.  Assumptions: We assume that, for some natural number , both and are true. That is, we assume that and .  Goal: We want to prove that .  Inductive step:   Reading the above inequalities from top to bottom shows that .   "
},
{
  "id": "pp-8",
  "level": "1",
  "url": "pp-8.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 8",
  "body": " Portfolio Problem 8     Let be the set of all integers for which 4 divides , and let be the set of all integers that are congruent to 3 (mod 12). Then .    Special instructions: If you choose this conjecture, provide examples of at least 5 numbers form each set in roster notation, and show briefly how you know that number is in that set. Then show thaty our conclusion is true.    If and are subsets of some universal set , then .    Special instructions:  Choose this conjecture if you want to aim for excellent . If you choose this conjecture, provide an example of both sets and with at least 5 numbers in each. Then show how to calculate the sets on either side of the equation and show that the results agree with your conclusion. Read the Instructions for excellence carefully if that is your goal.     Instructions for the draft  Choose only one of the conjectures and address it. Ignore the other one.  You might want to look at the Instructions for excellence below before choosing -- that makes a difference this time!  Upload a scanned image of your draft to the Blackboard assignment.  To earn math successful , your draft must address only one conjecture:   If your conjecture is true:   State it as a theorem and write a proof of it in know-show format.  Follow the special instructions written underneath your conjecture.    If your conjecture is false:   Determine if one of the sets is a subset of the other set. If so, state an appropriate theorem about subsets and prove it.  Separately, before the proof, provide one clear counterexample that shows that the other subset statement is false.  Follow the special instructions written underneath your conjecture.       Instructions for the writing revision  First, wait for draft feedback on Blackboard!  Then, submit a PDF of your writing revision to the Blackboard assignment.  To earn math & writing successful , your writing revision must do all of the following:   Follow all instructions for proofs, examples, and counterexamples from the draft. Each of these should now be formatted following the writing conventions.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to detail when you do so. Then do the following:  Choose and follow these additional instructions Choose this (more difficult) conjecture, then also write your proof using only set algebra as we have discussed in class. In particular, do not use element-chasing. Your proof should be clearly and thoroughly explained, both in words and in symbols, as usual. (This is in addition to following all instructions for the writing revision -- in particular, your writing revision must include all required proofs, examples, and disproofs.)  Note that excellent is not automatic upon revision, and relies on showing thorough attention to these instructions.    "
},
{
  "id": "pp-8-2-1",
  "level": "2",
  "url": "pp-8.html#pp-8-2-1",
  "type": "Conjecture",
  "number": "15",
  "title": "",
  "body": "  Let be the set of all integers for which 4 divides , and let be the set of all integers that are congruent to 3 (mod 12). Then .   "
},
{
  "id": "pp-8-conj-2",
  "level": "2",
  "url": "pp-8.html#pp-8-conj-2",
  "type": "Conjecture",
  "number": "16",
  "title": "",
  "body": "  If and are subsets of some universal set , then .   "
},
{
  "id": "pp-9",
  "level": "1",
  "url": "pp-9.html",
  "type": "Section",
  "number": "",
  "title": "Portfolio Problem 9",
  "body": " Portfolio Problem 9   If you intend to try for excellent on this portfolio, see the instructions and ask Dr. Clark right away.    Let be defined by for all . Then is a bijection.    Special instructions: If you choose this conjecture and it is false, then determine if is an injection or a surjection. State a new theorem including only the true items and prove it. Separately -- outside of the proof -- provide one clear counterexample to any parts that are false.    Let be defined by for all . Then is a bijection.    Special instructions: As written, this function is neither a surjection nor an injection. If you choose this, you must first include concrete counterexamples to show why it is not injective and not surjective. Then change both the domain and codomain to the largest possible sets that make a bijection. State your new result with a properly written theorem statement that includes the corrected domain and codomain, and prove the new statement.    Let be the set of all matrices with real number entries. The function defined by the rule is a bijection. (Notice that makes a very small but important change to where and are located.)    Special instructions: If you choose this conjecture and it is false, then determine if is an injection or is a surjection. State a new theorem including only the true items and prove it. Separately -- outside of the proof -- provide one clear counterexample to any parts that are false.     Instructions for the draft  Choose only one of the conjectures and address it. Ignore the other ones.  Upload a scanned image of your draft to the Blackboard assignment.  To earn math successful , your draft must address only one conjecture:   Each conjecture asks you to prove that a function is a bijection. Be sure to follow the special instructions on what to do if the conjecture is false -- it's different in each case.  This time, you do not need to include any other examples of the theorems in action (other than counterexamples).     Instructions for the writing revision  First, wait for draft feedback on Blackboard!  Then, submit a PDF of your writing revision to the Blackboard assignment.  To earn math & writing successful , your writing revision must do all of the following:   Follow all instructions for proofs, examples, and counterexamples from the draft. Each of these should now be formatted following the writing conventions.  Address all feedback from the draft.  Type your work in latex . Use the template , how-to guide , and sample portfolio solution .  Include a view only link to your Overleaf document in the Blackboard submission's text field.  Follow all of the conventions listed below (click each one to get more details and examples):         Also follow most of the (open the link to see what most means).    Instructions for excellence  To earn math & writing excellent , thoroughly address all comments from the draft and writing revision, and thoroughly attend to details when you do so. Then do this:  Ask Dr. Clark for a personalized challenge This is the challenge round! Ask Dr. Clark for a specific challenge about how to earn excellent on this portfolio. Ask earlier rather than later, since it might involve making a different choice of conjecture.      "
},
{
  "id": "pp-9-conj-1",
  "level": "2",
  "url": "pp-9.html#pp-9-conj-1",
  "type": "Conjecture",
  "number": "17",
  "title": "",
  "body": "  Let be defined by for all . Then is a bijection.   "
},
{
  "id": "pp-9-conj-2",
  "level": "2",
  "url": "pp-9.html#pp-9-conj-2",
  "type": "Conjecture",
  "number": "18",
  "title": "",
  "body": "  Let be defined by for all . Then is a bijection.   "
},
{
  "id": "pp-9-conj-3",
  "level": "2",
  "url": "pp-9.html#pp-9-conj-3",
  "type": "Conjecture",
  "number": "19",
  "title": "",
  "body": "  Let be the set of all matrices with real number entries. The function defined by the rule is a bijection. (Notice that makes a very small but important change to where and are located.)   "
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
