var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#RCall.jl-1",
    "page": "Introduction",
    "title": "RCall.jl",
    "category": "section",
    "text": "R is a language for statistical computing and graphics that has been around for couple of decades and it has one of the most impressive collections of scientific and statistical packages of any environment. Recently, the Julia language has become an attractive alternative because it provides the remarkable performance of a low-level language without sacrificing the readability and ease-of-use of high-level languages. However, Julia still lacks the depth and scale of the R package environment.This package, RCall, facilitates communication between these two languages and allows the user to call R packages from within Julia, providing the best of both worlds. Additionally, this is a pure Julia package so it is portable and easy to use."
},

{
    "location": "installation.html#",
    "page": "Installation",
    "title": "Installation",
    "category": "page",
    "text": ""
},

{
    "location": "installation.html#Installing-RCall.jl-1",
    "page": "Installation",
    "title": "Installing RCall.jl",
    "category": "section",
    "text": "RCall.jl requires that a recent version of R, at least 3.2.0, be installed. "
},

{
    "location": "installation.html#Standard-installations-1",
    "page": "Installation",
    "title": "Standard installations",
    "category": "section",
    "text": "If R has been installed using one of the standard approaches below, then RCall.jl can simply be installed withPkg.add(\"RCall\")Should you experience problems with any of these methods, please open an issue."
},

{
    "location": "installation.html#Windows-1",
    "page": "Installation",
    "title": "Windows",
    "category": "section",
    "text": "The current Windows binary from CRAN."
},

{
    "location": "installation.html#OS-X-1",
    "page": "Installation",
    "title": "OS X",
    "category": "section",
    "text": "The CRAN .pkg or the homebrew/science tap."
},

{
    "location": "installation.html#Linux-1",
    "page": "Installation",
    "title": "Linux",
    "category": "section",
    "text": "Most Linux distributions allow installation of R from their package manager, however these are often out of date, and may not work with RCall.jl. We recommend that you use the updated repositories from CRAN."
},

{
    "location": "installation.html#Ubuntu-1",
    "page": "Installation",
    "title": "Ubuntu",
    "category": "section",
    "text": "The following will update R on recent versions of Ubuntu:sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E084DAB9\nsudo add-apt-repository -y \"deb http://cran.rstudio.com/bin/linux/ubuntu $(lsb_release -s -c)/\"\nsudo apt-get update -y\nsudo apt-get install -y r-base r-base-dev"
},

{
    "location": "installation.html#Updating-R-1",
    "page": "Installation",
    "title": "Updating R",
    "category": "section",
    "text": "If you have updated the R installation, you may need to rebuild the RCall cache viaBase.compilecache(\"RCall\")"
},

{
    "location": "installation.html#Other-methods-1",
    "page": "Installation",
    "title": "Other methods",
    "category": "section",
    "text": "If you have installed R by some other method, then some further modifications may be necessary, for example, if you're building R from scratch, or the files have been copied but not installed in the usual manner (common on cluster installations).Firstly, try setting the R_HOME environmental variable to the location of your R installation, which can be found by running R.home() from within R. This can be set in your ~/.juliarc.jl file via the ENV global variable, e.g.ENV[\"R_HOME\"] = ...You may also need to specify the variable LD_LIBRARY_PATH before launching Julia, for exampleexport LD_LIBRARY_PATH=\"$LD_LIBRARY_PATH:`R RHOME`/lib\"\njulia"
},

{
    "location": "installation.html#Windows-PATH-1",
    "page": "Installation",
    "title": "Windows PATH",
    "category": "section",
    "text": "The PATH environmental variable should contain the location of your R binary, and the HOME variable should contain the current user's home directory. These need to be set before Julia is started."
},

{
    "location": "gettingstarted.html#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "gettingstarted.html#Getting-started-1",
    "page": "Getting Started",
    "title": "Getting started",
    "category": "section",
    "text": "The RCall package is loaded viausing RCallThis will initialize the R process in the background."
},

{
    "location": "gettingstarted.html#Several-Ways-to-use-RCall-1",
    "page": "Getting Started",
    "title": "Several Ways to use RCall",
    "category": "section",
    "text": "RCall provides multiple ways to allow R interacting with Julia. R REPL mode\n@rput and @rget macros\nR\"\" string macro\nRCall API: reval, rcall and rcopy etc."
},

{
    "location": "gettingstarted.html#R-REPL-mode-1",
    "page": "Getting Started",
    "title": "R REPL mode",
    "category": "section",
    "text": "The R REPL mode allows real time switching between the Julia prompt and R prompt. Press $ to activate the R REPL mode and the R prompt will be shown. (Press backspace to leave R REPL mode in case you did not know.)julia> foo = 1\n1\n\nR> x <- $foo\n\nR> x\n[1] 1The R REPL mode supports variable substitution of Julia objects via the $ symbol. It is also possible to pass Julia expressions in the REPL mode.R> x = $(rand(10))\n\nR> sum(x)\n[1] 5.097083"
},

{
    "location": "gettingstarted.html#@rput-and-@rget-macros-1",
    "page": "Getting Started",
    "title": "@rput and @rget macros",
    "category": "section",
    "text": "These macros transfer variables between R and Julia environments. The copied variable will have the same name as the original.julia> z = 1\n1\n\njulia> @rput z\n1\n\nR> z\n[1] 1\n\nR> r = 2\n\njulia> @rget r\n2.0\n\njulia> r\n2.0It is also possible to put and get multiple variables in one line.julia> foo = 2\n2\n\njulia> bar = 4\n4\n\njulia> @rput foo bar\n4\n\nR> foo + bar\n[1] 6"
},

{
    "location": "gettingstarted.html#@R_str-string-macro-1",
    "page": "Getting Started",
    "title": "@R_str string macro",
    "category": "section",
    "text": "Another way to use RCall is the R\"\" string macro, it is especially useful in script files.R\"rnorm(10)\"This evaluates the expression inside the string in R, and returns the result as an RObject, which is a Julia wrapper type around an R object.The R\"\" string macro supports variable substitution of Julia objects via the $ symbol, whenever it is not valid R syntax (i.e. when not directly following a symbol or completed expression such as aa$bb):x = randn(10)\nR\"t.test($x)\"It is also possible to pass Julia expressions which are evaluated before being passed to R: these should be included in parenthesesR\"optim(0, $(x -> x-cos(x)), method='BFGS')\"A large chunk of code could be quoted between triple string quotationsy = 1\nR\"\"\"\nf <- function(x, y) x + y\nret <- f(1, $y)\n\"\"\""
},

{
    "location": "gettingstarted.html#RCall-API-1",
    "page": "Getting Started",
    "title": "RCall API",
    "category": "section",
    "text": "The reval function evaluates any given input string as R code in the R environment. The returned result is an RObject object.jmtcars = reval(\"mtcars\");\nnames(jmtcars)\njmtcars[:mpg]\ntypeof(jmtcars)The rcall function is used to construct function calls.rcall(:dim, jmtcars)The arguments will be implicitly converted to RObject upon evaluation.rcall(:sum, Float64[1.0, 4.0, 6.0])The rcopy function converts RObjects to Julia objects. It uses a variety of heuristics to pick the most appropriate Julia type:rcopy(R\"c(1)\")\nrcopy(R\"c(1, 2)\")\nrcopy(R\"list(1, 'zz')\")\nrcopy(R\"list(a=1, b='zz')\")It is possible to force a specific conversion by passing the output type as the first argument:rcopy(Array{Int}, R\"c(1,2)\")Converters and Constructors could also be used specifically to yield the desired type.convert(Array{Float64}, R\"c(1,2)\")\nFloat64(R\"1+3\")"
},

{
    "location": "conversions.html#",
    "page": "Conversions",
    "title": "Conversions",
    "category": "page",
    "text": ""
},

{
    "location": "conversions.html#Conversions-1",
    "page": "Conversions",
    "title": "Conversions",
    "category": "section",
    "text": "RCall supports conversions to and from most base Julia types and popular Statistics packages, e.g., DataFrames, DataArrays, NullableArrays, CategoricalArrays NamedArrays and AxisArrays.using RCall\nusing DataFrames\nusing NamedArrays\nusing AxisArrays"
},

{
    "location": "conversions.html#Base-Julia-Types-1",
    "page": "Conversions",
    "title": "Base Julia Types",
    "category": "section",
    "text": "# Julia -> R\na = RObject(1)# R -> Julia\nrcopy(a)# Julia -> R\na = RObject([1.0, 2.0])# R -> Julia\nrcopy(a)"
},

{
    "location": "conversions.html#Dictionaries-1",
    "page": "Conversions",
    "title": "Dictionaries",
    "category": "section",
    "text": "# Julia -> R\nd = Dict(:a => 1, :b => [4, 5, 3])\nr = RObject(d)# R -> Julia\nrcopy(r)"
},

{
    "location": "conversions.html#Date-1",
    "page": "Conversions",
    "title": "Date",
    "category": "section",
    "text": "# Julia -> R\nd = Date(2012, 12, 12)\nr = RObject(d)# R -> Julia\nrcopy(r)"
},

{
    "location": "conversions.html#DateTime-1",
    "page": "Conversions",
    "title": "DateTime",
    "category": "section",
    "text": "# julia -> R\nd = DateTime(2012, 12, 12, 12, 12, 12)\nr = RObject(d)# R -> Julia\nrcopy(r)"
},

{
    "location": "conversions.html#DataFrames-and-DataArrays-1",
    "page": "Conversions",
    "title": "DataFrames and DataArrays",
    "category": "section",
    "text": "d = DataFrame([[1.0, 4.5, 7.0]], [:x])\n# Julia -> R\nr = RObject(d)# R -> Julia\nrcopy(r)In default, the column names of R data frames are sanitized such that foo.bar would be replaced by foo_bar.rcopy(R\"data.frame(a.b = 1:3)\")To avoid the sanitization, use sanitize option.rcopy(R\"data.frame(a.b = 1:10)\"; sanitize = false)"
},

{
    "location": "conversions.html#NamedArrays-1",
    "page": "Conversions",
    "title": "NamedArrays",
    "category": "section",
    "text": "# Julia -> R\naa = NamedArray([1,2,3], [[\"a\", \"b\", \"c\"]], [:id])\nr = RObject(aa)# R -> Julia\nrcopy(r)"
},

{
    "location": "conversions.html#AxisArrays-1",
    "page": "Conversions",
    "title": "AxisArrays",
    "category": "section",
    "text": "# Julia -> R\naa = AxisArray([1,2,3], Axis{:id}([\"a\", \"b\", \"c\"]))\nr = RObject(aa)# R -> Julia\nrcopy(r)"
},

{
    "location": "internal.html#",
    "page": "Internal",
    "title": "Internal",
    "category": "page",
    "text": ""
},

{
    "location": "internal.html#Internal-API-1",
    "page": "Internal",
    "title": "Internal API",
    "category": "section",
    "text": ""
},

{
    "location": "internal.html#RCall.CharSxp",
    "page": "Internal",
    "title": "RCall.CharSxp",
    "category": "Type",
    "text": "R character string\n\n\n\n"
},

{
    "location": "internal.html#RCall.ClosSxp",
    "page": "Internal",
    "title": "RCall.ClosSxp",
    "category": "Type",
    "text": "R function closure\n\n\n\n"
},

{
    "location": "internal.html#RCall.CplxSxp",
    "page": "Internal",
    "title": "RCall.CplxSxp",
    "category": "Type",
    "text": "R complex vector\n\n\n\n"
},

{
    "location": "internal.html#RCall.EnvSxp",
    "page": "Internal",
    "title": "RCall.EnvSxp",
    "category": "Type",
    "text": "R environment\n\n\n\n"
},

{
    "location": "internal.html#RCall.IntSxp",
    "page": "Internal",
    "title": "RCall.IntSxp",
    "category": "Type",
    "text": "R integer vector\n\n\n\n"
},

{
    "location": "internal.html#RCall.LangSxp",
    "page": "Internal",
    "title": "RCall.LangSxp",
    "category": "Type",
    "text": "R function call\n\n\n\n"
},

{
    "location": "internal.html#RCall.LglSxp",
    "page": "Internal",
    "title": "RCall.LglSxp",
    "category": "Type",
    "text": "R logical vector\n\n\n\n"
},

{
    "location": "internal.html#RCall.ListSxp",
    "page": "Internal",
    "title": "RCall.ListSxp",
    "category": "Type",
    "text": "R pairs (cons) list cell\n\n\n\n"
},

{
    "location": "internal.html#RCall.NilSxp",
    "page": "Internal",
    "title": "RCall.NilSxp",
    "category": "Type",
    "text": "R NULL value\n\n\n\n"
},

{
    "location": "internal.html#RCall.RObject",
    "page": "Internal",
    "title": "RCall.RObject",
    "category": "Type",
    "text": "An RObject is a Julia wrapper for an R object (known as an \"S-expression\" or \"SEXP\"). It is stored as a pointer which is protected from the R garbage collector, until the RObject itself is finalized by Julia. The parameter is the type of the S-expression.\n\nWhen called with a Julia object as an argument, a corresponding R object is constructed.\n\njulia> RObject(1)\nRObject{IntSxp}\n[1] 1\n\njulia> RObject(1:3)\nRObject{IntSxp}\n[1] 1 2 3\n\njulia> RObject(1.0:3.0)\nRObject{RealSxp}\n[1] 1 2 3\n\n\n\n"
},

{
    "location": "internal.html#RCall.RObject-Tuple{Any}",
    "page": "Internal",
    "title": "RCall.RObject",
    "category": "Method",
    "text": "sexp(x) converts a Julia object x to a pointer to a corresponding Sxp Object.\n\n\n\n"
},

{
    "location": "internal.html#RCall.RealSxp",
    "page": "Internal",
    "title": "RCall.RealSxp",
    "category": "Type",
    "text": "R real vector\n\n\n\n"
},

{
    "location": "internal.html#RCall.S4Sxp",
    "page": "Internal",
    "title": "RCall.S4Sxp",
    "category": "Type",
    "text": "R S4 object\n\n\n\n"
},

{
    "location": "internal.html#RCall.StrSxp",
    "page": "Internal",
    "title": "RCall.StrSxp",
    "category": "Type",
    "text": "R vector of character strings\n\n\n\n"
},

{
    "location": "internal.html#RCall.Sxp",
    "page": "Internal",
    "title": "RCall.Sxp",
    "category": "Type",
    "text": "RCall.jl's type Sxp mirrors the R symbolic expression record SEXPREC in R API. These are represented by a pointer Ptr{S<:Sxp} (which is called SEXP in R API).\n\n\n\n"
},

{
    "location": "internal.html#RCall.VecSxp",
    "page": "Internal",
    "title": "RCall.VecSxp",
    "category": "Type",
    "text": "R list (i.e. Array{Any,1})\n\n\n\n"
},

{
    "location": "internal.html#RCall.AnySxp",
    "page": "Internal",
    "title": "RCall.AnySxp",
    "category": "Type",
    "text": "R \"any\" object\n\n\n\n"
},

{
    "location": "internal.html#RCall.BcodeSxp",
    "page": "Internal",
    "title": "RCall.BcodeSxp",
    "category": "Type",
    "text": "R byte code\n\n\n\n"
},

{
    "location": "internal.html#RCall.BuiltinSxp",
    "page": "Internal",
    "title": "RCall.BuiltinSxp",
    "category": "Type",
    "text": "R built-in function\n\n\n\n"
},

{
    "location": "internal.html#RCall.DotSxp",
    "page": "Internal",
    "title": "RCall.DotSxp",
    "category": "Type",
    "text": "R dot-dot-dot object\n\n\n\n"
},

{
    "location": "internal.html#RCall.ExprSxp",
    "page": "Internal",
    "title": "RCall.ExprSxp",
    "category": "Type",
    "text": "R expression vector\n\n\n\n"
},

{
    "location": "internal.html#RCall.ExtPtrSxp",
    "page": "Internal",
    "title": "RCall.ExtPtrSxp",
    "category": "Type",
    "text": "R external pointer\n\n\n\n"
},

{
    "location": "internal.html#RCall.PromSxp",
    "page": "Internal",
    "title": "RCall.PromSxp",
    "category": "Type",
    "text": "R promise\n\n\n\n"
},

{
    "location": "internal.html#RCall.RawSxp",
    "page": "Internal",
    "title": "RCall.RawSxp",
    "category": "Type",
    "text": "R byte vector\n\n\n\n"
},

{
    "location": "internal.html#RCall.SpecialSxp",
    "page": "Internal",
    "title": "RCall.SpecialSxp",
    "category": "Type",
    "text": "R special function\n\n\n\n"
},

{
    "location": "internal.html#RCall.SxpHead",
    "page": "Internal",
    "title": "RCall.SxpHead",
    "category": "Type",
    "text": "R Sxp header: a pointer to this is used for unknown types.\n\n\n\n"
},

{
    "location": "internal.html#RCall.SymSxp",
    "page": "Internal",
    "title": "RCall.SymSxp",
    "category": "Type",
    "text": "R symbol\n\n\n\n"
},

{
    "location": "internal.html#RCall.WeakRefSxp",
    "page": "Internal",
    "title": "RCall.WeakRefSxp",
    "category": "Type",
    "text": "R weak reference\n\n\n\n"
},

{
    "location": "internal.html#Types-1",
    "page": "Internal",
    "title": "Types",
    "category": "section",
    "text": "Modules = [RCall]\nOrder   = [:type]"
},

{
    "location": "internal.html#DataArrays.isna-Tuple{RCall.RObject,Integer}",
    "page": "Internal",
    "title": "DataArrays.isna",
    "category": "Method",
    "text": "Check if the ith member of s coorespond to R's NA values.\n\n\n\n"
},

{
    "location": "internal.html#DataArrays.isna-Tuple{RCall.RObject}",
    "page": "Internal",
    "title": "DataArrays.isna",
    "category": "Method",
    "text": "Check if the members of a vector are NA values. Always return a BitArray.\n\n\n\n"
},

{
    "location": "internal.html#RCall.anyna-Tuple{RCall.RObject{S<:RCall.VectorSxp}}",
    "page": "Internal",
    "title": "RCall.anyna",
    "category": "Method",
    "text": "Check if there are any NA values in the vector.\n\n\n\n"
},

{
    "location": "internal.html#RCall.getattrib-Tuple{Ptr{S<:RCall.Sxp},Ptr{RCall.SymSxp}}",
    "page": "Internal",
    "title": "RCall.getattrib",
    "category": "Method",
    "text": "Return a particular attribute of an RObject\n\n\n\n"
},

{
    "location": "internal.html#RCall.getclass-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.getclass",
    "category": "Method",
    "text": "Returns the class of an R object.\n\n\n\n"
},

{
    "location": "internal.html#RCall.getnames-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.getnames",
    "category": "Method",
    "text": "Returns the names of an R vector.\n\n\n\n"
},

{
    "location": "internal.html#RCall.rcall-Tuple{Any,Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.rcall",
    "category": "Method",
    "text": "Evaluate a function in the global environment. The first argument corresponds to the function to be called. It can be either a FunctionSxp type, a SymSxp or a Symbol.\n\n\n\n"
},

{
    "location": "internal.html#RCall.rcopy-Tuple{RCall.RObject}",
    "page": "Internal",
    "title": "RCall.rcopy",
    "category": "Method",
    "text": "rcopy(r) copies the contents of an R object into a corresponding canonical Julia type.\n\n\n\n"
},

{
    "location": "internal.html#RCall.reval",
    "page": "Internal",
    "title": "RCall.reval",
    "category": "Function",
    "text": "Evaluate an R symbol or language object (i.e. a function call) in an R try/catch block, returning an RObject.\n\n\n\n"
},

{
    "location": "internal.html#RCall.rimport",
    "page": "Internal",
    "title": "RCall.rimport",
    "category": "Function",
    "text": "Import an R package as a julia module.\n\ngg = rimport(\"ggplot2\")\n\n\n\n"
},

{
    "location": "internal.html#RCall.rlang-Tuple{Any,Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.rlang",
    "category": "Method",
    "text": "Create a function call from a function pointer and a list of arguments and return it as an RObject, which can then be evaulated\n\n\n\n"
},

{
    "location": "internal.html#RCall.rparse-Tuple{AbstractString}",
    "page": "Internal",
    "title": "RCall.rparse",
    "category": "Method",
    "text": "Parse a string as an R expression, returning an RObject.\n\n\n\n"
},

{
    "location": "internal.html#RCall.rprint-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.rprint",
    "category": "Method",
    "text": "Print the value of an Sxp using R's printing mechanism\n\n\n\n"
},

{
    "location": "internal.html#RCall.setattrib!-Tuple{Ptr{S<:RCall.Sxp},Ptr{RCall.SymSxp},Ptr{T<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.setattrib!",
    "category": "Method",
    "text": "Set a particular attribute of an RObject\n\n\n\n"
},

{
    "location": "internal.html#RCall.setclass!-Tuple{Ptr{S<:RCall.Sxp},Ptr{RCall.StrSxp}}",
    "page": "Internal",
    "title": "RCall.setclass!",
    "category": "Method",
    "text": "Set the class of an R object.\n\n\n\n"
},

{
    "location": "internal.html#RCall.setnames!-Tuple{Ptr{S<:RCall.Sxp},Ptr{RCall.StrSxp}}",
    "page": "Internal",
    "title": "RCall.setnames!",
    "category": "Method",
    "text": "Set the names of an R vector.\n\n\n\n"
},

{
    "location": "internal.html#Base.eltype-Tuple{Type{RCall.LglSxp}}",
    "page": "Internal",
    "title": "Base.eltype",
    "category": "Method",
    "text": "Element types of R vectors.\n\n\n\n"
},

{
    "location": "internal.html#Base.getindex-Tuple{Ptr{RCall.EnvSxp},Ptr{RCall.SymSxp}}",
    "page": "Internal",
    "title": "Base.getindex",
    "category": "Method",
    "text": "extract the value of symbol s in the environment e\n\n\n\n"
},

{
    "location": "internal.html#Base.getindex-Tuple{Ptr{S<:RCall.PairListSxp},AbstractString}",
    "page": "Internal",
    "title": "Base.getindex",
    "category": "Method",
    "text": "extract an element from a PairListSxp by label\n\n\n\n"
},

{
    "location": "internal.html#Base.getindex-Tuple{Ptr{S<:RCall.PairListSxp},Integer}",
    "page": "Internal",
    "title": "Base.getindex",
    "category": "Method",
    "text": "extract the i-th element of a PairListSxp\n\n\n\n"
},

{
    "location": "internal.html#Base.getindex-Tuple{Ptr{S<:RCall.VectorAtomicSxp},Integer}",
    "page": "Internal",
    "title": "Base.getindex",
    "category": "Method",
    "text": "Indexing into VectorSxp types uses Julia indexing into the vec result, except for StrSxp and the VectorListSxp types, which must apply sexp to the Ptr{Void} obtained by indexing into the vec result.\n\n\n\n"
},

{
    "location": "internal.html#Base.getindex-Tuple{Ptr{S<:RCall.VectorSxp},AbstractString}",
    "page": "Internal",
    "title": "Base.getindex",
    "category": "Method",
    "text": "String indexing finds the first element with the matching name\n\n\n\n"
},

{
    "location": "internal.html#Base.isascii-Tuple{RCall.CharSxp}",
    "page": "Internal",
    "title": "Base.isascii",
    "category": "Method",
    "text": "Determines the encoding of the CharSxp. This is determined by the 'gp' part of the sxpinfo (this is the middle 16 bits).\n\n0x00_0002_00 (bit 1): set of bytes (no known encoding)\n0x00_0004_00 (bit 2): Latin-1\n0x00_0008_00 (bit 3): UTF-8\n0x00_0040_00 (bit 6): ASCII\n\nWe only support ASCII and UTF-8.\n\n\n\n"
},

{
    "location": "internal.html#Base.isnull-Tuple{RCall.RObject{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "Base.isnull",
    "category": "Method",
    "text": "Check if values correspond to R's NULL object.\n\n\n\n"
},

{
    "location": "internal.html#Base.length-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "Base.length",
    "category": "Method",
    "text": "Sxp methods for length return the R length.\n\nRf_xlength handles Sxps that are not vector-like and R's \"long vectors\", which have a negative value for the length member.\n\n\n\n"
},

{
    "location": "internal.html#Base.names-Tuple{RCall.RObject}",
    "page": "Internal",
    "title": "Base.names",
    "category": "Method",
    "text": "Returns the names of an R vector, the result is converted to a Julia symbol array.\n\n\n\n"
},

{
    "location": "internal.html#Base.setindex!-Tuple{Ptr{RCall.EnvSxp},Ptr{S<:RCall.Sxp},Ptr{RCall.SymSxp}}",
    "page": "Internal",
    "title": "Base.setindex!",
    "category": "Method",
    "text": "assign value v to symbol s in the environment e\n\n\n\n"
},

{
    "location": "internal.html#Base.setindex!-Tuple{Ptr{S<:RCall.PairListSxp},Ptr{T<:RCall.Sxp},AbstractString}",
    "page": "Internal",
    "title": "Base.setindex!",
    "category": "Method",
    "text": "Set element of a PairListSxp by a label.\n\n\n\n"
},

{
    "location": "internal.html#Base.setindex!-Tuple{Ptr{S<:RCall.PairListSxp},Ptr{T<:RCall.Sxp},Integer}",
    "page": "Internal",
    "title": "Base.setindex!",
    "category": "Method",
    "text": "assign value v to the i-th element of a PairListSxp\n\n\n\n"
},

{
    "location": "internal.html#Base.setindex!-Tuple{Ptr{S<:RCall.VectorSxp},Ptr{T<:RCall.Sxp},AbstractString}",
    "page": "Internal",
    "title": "Base.setindex!",
    "category": "Method",
    "text": "Set element of a VectorSxp by a label.\n\n\n\n"
},

{
    "location": "internal.html#RCall._eltype-Tuple{Ptr{RCall.RealSxp}}",
    "page": "Internal",
    "title": "RCall._eltype",
    "category": "Method",
    "text": "It returns the corresponding element type when a RealSxp is converting to a julia object.\n\n\n\n"
},

{
    "location": "internal.html#RCall.bound-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.bound",
    "category": "Method",
    "text": "The R NAMED property, represented by 2 bits in the info field. This can take values 0,1 or 2, corresponding to whether it is bound to 0,1 or 2 or more symbols. See http://cran.r-project.org/doc/manuals/r-patched/R-exts.html#Named-objects-and-copying\n\n\n\n"
},

{
    "location": "internal.html#RCall.dataptr-Tuple{Ptr{S<:RCall.VectorSxp}}",
    "page": "Internal",
    "title": "RCall.dataptr",
    "category": "Method",
    "text": "Pointer to start of the data array in a SEXPREC. Corresponds to DATAPTR C macro.\n\n\n\n"
},

{
    "location": "internal.html#RCall.decref_extptr-Tuple{Ptr{RCall.ExtPtrSxp}}",
    "page": "Internal",
    "title": "RCall.decref_extptr",
    "category": "Method",
    "text": "Called by the R finalizer.\n\n\n\n"
},

{
    "location": "internal.html#RCall.endEmbeddedR-Tuple{}",
    "page": "Internal",
    "title": "RCall.endEmbeddedR",
    "category": "Method",
    "text": "endEmbeddedR()\n\nClose embedded R session.\n\n\n\n"
},

{
    "location": "internal.html#RCall.event_callback-Tuple{}",
    "page": "Internal",
    "title": "RCall.event_callback",
    "category": "Method",
    "text": "Event Callback: allows R to process Julia events when R is busy. For example, writing output to STDOUT while running an expensive R command.\n\n\n\n"
},

{
    "location": "internal.html#RCall.findNamespace-Tuple{String}",
    "page": "Internal",
    "title": "RCall.findNamespace",
    "category": "Method",
    "text": "find namespace by name of the namespace, it is not error tolerant.\n\n\n\n"
},

{
    "location": "internal.html#RCall.getNamespace-Tuple{String}",
    "page": "Internal",
    "title": "RCall.getNamespace",
    "category": "Method",
    "text": "get namespace by name of the namespace. It is safer to be used than findNamespace as it checks bound.\n\n\n\n"
},

{
    "location": "internal.html#RCall.getParseErrorMsg-Tuple{}",
    "page": "Internal",
    "title": "RCall.getParseErrorMsg",
    "category": "Method",
    "text": "Get the R parser error msg for the previous parsing result.\n\n\n\n"
},

{
    "location": "internal.html#RCall.initEmbeddedR-Tuple{}",
    "page": "Internal",
    "title": "RCall.initEmbeddedR",
    "category": "Method",
    "text": "initEmbeddedR()\n\nThis initializes an embedded R session. It should only be called when R is not already running (e.g. if Julia is running inside an R session)\n\n\n\n"
},

{
    "location": "internal.html#RCall.isNA-Tuple{Complex{Float64}}",
    "page": "Internal",
    "title": "RCall.isNA",
    "category": "Method",
    "text": "Check if a value corresponds to R's sentinel NA values. These function should not be exported.\n\n\n\n"
},

{
    "location": "internal.html#RCall.julia_extptr_callback-Tuple{Ptr{RCall.ListSxp}}",
    "page": "Internal",
    "title": "RCall.julia_extptr_callback",
    "category": "Method",
    "text": "The function called by R .External for Julia callbacks.\n\nIt receives a Ptr{ListSxp} containing\n\na pointer to the function itself (Ptr{ExtPtrSxp})\na pointer to the Julia function (Ptr{ExtPtrSxp})\nany arguments (as Ptr{S<:Sxp})\n\n\n\n"
},

{
    "location": "internal.html#RCall.makeExternalPtr",
    "page": "Internal",
    "title": "RCall.makeExternalPtr",
    "category": "Function",
    "text": "Create an Ptr{ExtPtrSxp} object\n\n\n\n"
},

{
    "location": "internal.html#RCall.makeNativeSymbolRef-Tuple{Ptr{Void}}",
    "page": "Internal",
    "title": "RCall.makeNativeSymbolRef",
    "category": "Method",
    "text": "Register a function pointer as an R NativeSymbol. We technically are supposed to use R_registerRoutines. Starting from R 3.4, R_MakeExternalPtrFn is a part of R API in R 3.4. It is probably safe to such to make the external pointer.\n\n\n\n"
},

{
    "location": "internal.html#RCall.naeltype-Tuple{Type{RCall.LglSxp}}",
    "page": "Internal",
    "title": "RCall.naeltype",
    "category": "Method",
    "text": "NA element for each type\n\n\n\n"
},

{
    "location": "internal.html#RCall.newEnvironment-Tuple{Ptr{RCall.EnvSxp}}",
    "page": "Internal",
    "title": "RCall.newEnvironment",
    "category": "Method",
    "text": "newEnvironment([env])\n\nCreate a new environment which extends environment env (globalEnv by default).\n\n\n\n"
},

{
    "location": "internal.html#RCall.parseVector",
    "page": "Internal",
    "title": "RCall.parseVector",
    "category": "Function",
    "text": "A pure julia wrapper of R_ParseVector\n\n\n\n"
},

{
    "location": "internal.html#RCall.prepare_inline_julia_code",
    "page": "Internal",
    "title": "RCall.prepare_inline_julia_code",
    "category": "Function",
    "text": "Prepare code for evaluating the julia expressions. When the code is execulated, the results are stored in the R environment #JL.\n\n\n\n"
},

{
    "location": "internal.html#RCall.preserve-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.preserve",
    "category": "Method",
    "text": "Prevent garbage collection of an R object. Object can be released via release.\n\nThis is slower than protect, as it requires searching an internal list, but more flexible.\n\n\n\n"
},

{
    "location": "internal.html#RCall.protect-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.protect",
    "category": "Method",
    "text": "Stack-based protection of garbage collection of R objects. Objects are released via unprotect. Returns the same pointer, allowing inline use.\n\nThis is faster than preserve, but more restrictive. Really only useful inside functions.\n\n\n\n"
},

{
    "location": "internal.html#RCall.rcall_p-Tuple{Any,Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.rcall_p",
    "category": "Method",
    "text": "Evaluate a function in the global environment. The first argument corresponds to the function to be called. It can be either a FunctionSxp type, a SymSxp or a Symbol.\n\n\n\n"
},

{
    "location": "internal.html#RCall.registerCFinalizerEx-Tuple{Ptr{RCall.ExtPtrSxp}}",
    "page": "Internal",
    "title": "RCall.registerCFinalizerEx",
    "category": "Method",
    "text": "Register finalizer to be called by the R GC.\n\n\n\n"
},

{
    "location": "internal.html#RCall.release-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.release",
    "category": "Method",
    "text": "Release object that has been gc protected by preserve.\n\n\n\n"
},

{
    "location": "internal.html#RCall.render-Tuple{String}",
    "page": "Internal",
    "title": "RCall.render",
    "category": "Method",
    "text": "Render an inline R script, substituting invalid \"$(Expr(:incomplete, \"incomplete: invalid string syntax\"))\n\n\n\n"
},

{
    "location": "internal.html#RCall.reval_p",
    "page": "Internal",
    "title": "RCall.reval_p",
    "category": "Function",
    "text": "Evaluate an R symbol or language object (i.e. a function call) in an R try/catch block, returning a Sxp pointer.\n\n\n\n"
},

{
    "location": "internal.html#RCall.reval_p-Tuple{Ptr{RCall.ExprSxp},Ptr{RCall.EnvSxp}}",
    "page": "Internal",
    "title": "RCall.reval_p",
    "category": "Method",
    "text": "Evaluate an R expression array iteratively. If throw_error is false, the error message and warning will be thrown to STDERR.\n\n\n\n"
},

{
    "location": "internal.html#RCall.rlang_p-Tuple{Any,Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.rlang_p",
    "category": "Method",
    "text": "Create a function call from a list of arguments\n\n\n\n"
},

{
    "location": "internal.html#RCall.rparse_p-Tuple{Ptr{RCall.StrSxp}}",
    "page": "Internal",
    "title": "RCall.rparse_p",
    "category": "Method",
    "text": "Parse a string as an R expression, returning a Sxp pointer.\n\n\n\n"
},

{
    "location": "internal.html#RCall.set_last_value-Tuple{Ptr{S<:RCall.Sxp}}",
    "page": "Internal",
    "title": "RCall.set_last_value",
    "category": "Method",
    "text": "Set the variable .Last.value to a given value\n\n\n\n"
},

{
    "location": "internal.html#RCall.sexp-Tuple{Ptr{RCall.SxpHead}}",
    "page": "Internal",
    "title": "RCall.sexp",
    "category": "Method",
    "text": "Convert a Ptr{UnknownSxp} to an approptiate Ptr{S<:Sxp}.\n\n\n\n"
},

{
    "location": "internal.html#RCall.sexp-Tuple{Type{RCall.ClosSxp},Any}",
    "page": "Internal",
    "title": "RCall.sexp",
    "category": "Method",
    "text": "Wrap a callable Julia object f an a R ClosSxpPtr.\n\nConstructs the following R code\n\nfunction(...) .External(juliaCallback, fExPtr, ...)\n\n\n\n"
},

{
    "location": "internal.html#RCall.sexp-Tuple{Type{RCall.ExtPtrSxp},Any}",
    "page": "Internal",
    "title": "RCall.sexp",
    "category": "Method",
    "text": "Wrap a Julia object an a R Ptr{ExtPtrSxp}.\n\nWe store the pointer and the object in a const Dict to prevent it being removed by the Julia GC.\n\n\n\n"
},

{
    "location": "internal.html#RCall.sexp_arglist_dots-Tuple{Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.sexp_arglist_dots",
    "category": "Method",
    "text": "Create an argument list for an R function call, with a varargs \"dots\" at the end.\n\n\n\n"
},

{
    "location": "internal.html#RCall.sexpnum-Tuple{RCall.SxpHead}",
    "page": "Internal",
    "title": "RCall.sexpnum",
    "category": "Method",
    "text": "The SEXPTYPE number of a Sxp\n\nDetermined from the trailing 5 bits of the first 32-bit word. Is a 0-based index into the info field of a SxpHead.\n\n\n\n"
},

{
    "location": "internal.html#RCall.tryEval",
    "page": "Internal",
    "title": "RCall.tryEval",
    "category": "Function",
    "text": "A pure julia wrapper of R_tryEval.\n\n\n\n"
},

{
    "location": "internal.html#RCall.unprotect-Tuple{Integer}",
    "page": "Internal",
    "title": "RCall.unprotect",
    "category": "Method",
    "text": "Release last n objects gc-protected by protect.\n\n\n\n"
},

{
    "location": "internal.html#RCall.unsafe_array-Tuple{Ptr{S<:RCall.VectorSxp}}",
    "page": "Internal",
    "title": "RCall.unsafe_array",
    "category": "Method",
    "text": "The same as unsafe_vec, except returns an appropriately sized array.\n\n\n\n"
},

{
    "location": "internal.html#RCall.unsafe_vec-Tuple{Ptr{S<:RCall.VectorSxp}}",
    "page": "Internal",
    "title": "RCall.unsafe_vec",
    "category": "Method",
    "text": "Represent the contents of a VectorSxp type as a Vector.\n\nThis does __not__ copy the contents.  If the argument is not named (in R) or otherwise protected from R's garbage collection (e.g. by keeping the containing RObject in scope) the contents of this vector can be modified or could cause a memory error when accessed.\n\nThe contents are as stored in R.  Missing values (NA's) are represented in R by sentinels.  Missing data values in RealSxp and CplxSxp show up as NaN and NaN + NaNim, respectively.  Missing data in IntSxp show up as -2147483648, the minimum 32-bit integer value.  Internally a LglSxp is represented as Vector{Int32}.  The convention is that 0 is false, -2147483648 is NA and all other values represent true.\n\n\n\n"
},

{
    "location": "internal.html#RCall.validate_libR-Tuple{Any}",
    "page": "Internal",
    "title": "RCall.validate_libR",
    "category": "Method",
    "text": "validate_libR(libR)\n\nChecks that the R library libR can be loaded and is satisfies version requirements. Returns true if valid, throws an error if not.\n\n\n\n"
},

{
    "location": "internal.html#Methods-1",
    "page": "Internal",
    "title": "Methods",
    "category": "section",
    "text": "Modules = [RCall]\nOrder   = [:function]"
},

{
    "location": "internal.html#RCall.@R_str-Tuple{Any}",
    "page": "Internal",
    "title": "RCall.@R_str",
    "category": "Macro",
    "text": "R\"...\"\n\nAn inline R expression, the result of which is evaluated and returned as an RObject.\n\nIt supports substitution of Julia variables and expressions via prefix with $ whenever not valid R syntax (i.e. when not immediately following another completed R expression):\n\nR\"glm(Sepal.Length ~ Sepal.Width, data=$iris)\"\n\nIt is also possible to pass Julia expressions:\n\nR\"plot(RCall.#94)\"\n\nAll such Julia expressions are evaluated once, before the R expression is evaluated.\n\nThe expression does not support assigning to Julia variables, so the only way retrieve values from R via the return value.\n\n\n\n"
},

{
    "location": "internal.html#RCall.@rget-Tuple{Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.@rget",
    "category": "Macro",
    "text": "Copies variables from R to Julia using the same name.\n\n\n\n"
},

{
    "location": "internal.html#RCall.@rimport-Tuple{Any,Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.@rimport",
    "category": "Macro",
    "text": "Import an R Package as a Julia module. For example,\n\n@rimport ggplot2\n\nis equivalent to ggplot2 = rimport(\"ggplot2\") with error checking.\n\nYou can also use classic Python syntax to make an alias: @rimport *package-name* as *shorthand*\n\n@rimport ggplot2 as gg\n\nwhich is equivalent to gg = rimport(\"ggplot2\").\n\n\n\n"
},

{
    "location": "internal.html#RCall.@rlibrary-Tuple{Any}",
    "page": "Internal",
    "title": "RCall.@rlibrary",
    "category": "Macro",
    "text": "Load all exported functions/objects of an R package to the current module. Almost equivalent to\n\n__temp__ = rimport(\"ggplot2\")\nusing .__temp__\n\n\n\n"
},

{
    "location": "internal.html#RCall.@rput-Tuple{Vararg{Any,N}}",
    "page": "Internal",
    "title": "RCall.@rput",
    "category": "Macro",
    "text": "Copies variables from Julia to R using the same name.\n\n\n\n"
},

{
    "location": "internal.html#RCall.@var_str-Tuple{Any}",
    "page": "Internal",
    "title": "RCall.@var_str",
    "category": "Macro",
    "text": "Returns a variable named \"str\". Useful for passing keyword arguments containing dots.\n\n\n\n"
},

{
    "location": "internal.html#Macros-1",
    "page": "Internal",
    "title": "Macros",
    "category": "section",
    "text": "Modules = [RCall]\nOrder   = [:macro]"
},

{
    "location": "internal.html#RCall.globalEnv",
    "page": "Internal",
    "title": "RCall.globalEnv",
    "category": "Constant",
    "text": "R global Environment.\n\nglobalEnv[:x] = 1\nglobalEnv[:x]\n\n\n\n"
},

{
    "location": "internal.html#RCall.jtypExtPtrs",
    "page": "Internal",
    "title": "RCall.jtypExtPtrs",
    "category": "Constant",
    "text": "Julia types (typically functions) which are wrapped in Ptr{ExtPtrSxp} are stored here to prevent garbage collection by Julia.\n\n\n\n"
},

{
    "location": "internal.html#RCall.typs",
    "page": "Internal",
    "title": "RCall.typs",
    "category": "Constant",
    "text": "vector of R Sxp types\n\n\n\n"
},

{
    "location": "internal.html#Constants-1",
    "page": "Internal",
    "title": "Constants",
    "category": "section",
    "text": "Modules = [RCall]\nOrder   = [:constant]"
},

]}
