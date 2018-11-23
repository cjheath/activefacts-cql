ComplexDiagram(
  Sequence(
    NonTerminal('expression', {href: '#expression'}),
    Optional(NonTerminal('certainty', {href: '#certainty'}), 'skip'),
    NonTerminal('comparator', {href: '#comparator'}),
    NonTerminal('contraction', {href: '#contraction'}),
    Optional(NonTerminal('post_qualifiers', {href: '#post_qualifiers'}), 'skip')
  )
).addTo();
