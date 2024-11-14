type t = {
  dir?: string,
  root?: string,
  base?: string,
  name?: string,
  ext?: string,
}

@module("path") external basename: (~path: string, ~suffix: array<string>) => string = "basename"

@module("path") external delimiter: string = "delimiter"

@module("path") external dirname: (~path: string) => string = "dirname"

@module("path") external extname: (~path: string) => string = "extname"

@module("path") external format: t => string = "format"

// added v22.5.0
@module("path") external matchesGlob: (~path: string, ~pattern: string) => bool = "matchesGlob"

@module("path") external isAbsolute: (~path: string) => bool = "isAbsolute"

@module("path") @variadic
external join: (~paths: array<string>) => string = "join"

@module("path") external normalize: (~paths: string) => string = "normalize"

@module("path") external parse: (~path: string) => t = "parse"

@module("path")
external relative: (~from: string, ~to_: string) => string = "relative"

@module("path") @variadic
external resolve: (~paths: array<string>) => string = "resolve"

@module("path") external sep: string = "sep"

@module("path")
external toNamespacedPath: (~path: string) => string = "toNamespacedPath"
