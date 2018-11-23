ComplexDiagram(
  Sequence('as', 'agreed',
    Optional(Sequence('on', NonTerminal('date', {href: '#date'})), 'skip'),
    'by',
    NonTerminal('agents', {href: '#agents'})
  )
).addTo();
