ComplexDiagram(
  Sequence(
    '(',
    Optional(Sequence('according', 'to', NonTerminal('agents', {href: '#agents'})), 'skip'),
    Choice(0,
      'because',
      Sequence('as', 'opposed', 'to'),
      Sequence('so', 'that'),
      Sequence('to', 'avoid')
    ),
    NonTerminal('description', {href: '#description'}),
    Optional(Sequence(',', NonTerminal('as_agreed_by', {href: '#as_agreed_by'})), 'skip'),
    ')'
  )
).addTo();
