ComplexDiagram(
  Sequence(
    NonTerminal('noun_phrase', {href: '#noun_phrase'}),
    Optional(NonTerminal('post_qualifiers', {href: '#post_qualifiers'}), 'skip'),
    Optional(NonTerminal('certainty', {href: '#certainty'}), 'skip'),
    NonTerminal('comparator', {href: '#comparator'}),
    NonTerminal('expression', {href: '#expression'})
  )
).addTo();
