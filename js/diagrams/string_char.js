ComplexDiagram(
  Choice(0,
    Sequence(Comment('standard escape'), '\\', '[befntr\\\']'),
    Sequence(Comment('octal char'), '\\', '[0-7]', '[0-7]', '[0-7]'),
    Sequence(Comment('escaped newline'), '\\', Sequence(ZeroOrMore('\\r'), '\\n', ZeroOrMore('\\r'))),
    Sequence(Comment('nul character'), '\\0'),
    Sequence(Comment('hexadecimal char'), '\\x', '[0-9A-Fa-f]', '[0-9A-Fa-f]'),
    Sequence(Comment('unicode char'), '\\u', '[0-9A-Fa-f]', '[0-9A-Fa-f]', '[0-9A-Fa-f]', '[0-9A-Fa-f]'),
    Sequence(Comment('other char'), '[^\'\\\\0-\\x07\\x0A-\\x1F]')
  )
).addTo();
