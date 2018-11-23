ComplexDiagram(
  Sequence(
    NonTerminal('noun_phrase', {href: '#noun_phrase'}),
    Optional(NonTerminal('post_qualifiers', {href: '#post_qualifiers'}), 'skip'),
    Choice(0, 'that', 'who'),
    Optional(NonTerminal('certainty', {href: '#certainty'}), 'skip'),
    NonTerminal('contracted_clauses', {href: '#contracted_clauses'})
  )
).addTo();
