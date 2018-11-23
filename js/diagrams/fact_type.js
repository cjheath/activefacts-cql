ComplexDiagram(
  Sequence(
    Optional(Sequence(
      Choice(0, 'each', Skip()),
      NonTerminal('term', {href: '#term'}),
      Optional(NonTerminal('mapping_pragmas', {href: '#mapping_pragmas'}), 'skip'),
      'is', 'where'
    )),
    NonTerminal('anonymous_fact_type', {href: '#anonymous_fact_type'})
  )
).addTo();
