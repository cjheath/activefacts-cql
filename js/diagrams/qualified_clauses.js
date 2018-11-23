ComplexDiagram(
  Sequence(
    Optional(NonTerminal('certainty', {href: '#certainty'}), 'skip'),
    NonTerminal('contracted_clauses', {href: '#contracted_clauses'}),
    Optional(NonTerminal('post_qualifiers', {href: '#post_qualifiers'}), 'skip'),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip')
  )
).addTo();
