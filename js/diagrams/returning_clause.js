ComplexDiagram(
  Sequence(
    'returning',
    Optional(NonTerminal('ordering_prefix', {href: '#ordering_prefix'}), 'skip'),
    NonTerminal('noun_phrase', {href: '#noun_phrase'}),
    ZeroOrMore(Sequence(
      ',',
      Optional(NonTerminal('ordering_prefix', {href: '#ordering_prefix'}), 'skip'),
      NonTerminal('noun_phrase', {href: '#noun_phrase'})
    ))
  )
).addTo();
