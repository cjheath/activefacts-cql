ComplexDiagram(
  Sequence(
    NonTerminal('quantifier', {href: '#quantifier'}),
    Optional(NonTerminal('mapping_pragmas', {href: '#mapping_pragmas'}), 'skip'),
    NonTerminal('enforcement', {href: '#enforcement'}),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip')
  )
).addTo();
