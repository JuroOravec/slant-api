# Logging

## TL;DR

- Package / Library
  - User-oriented - Use [signale](https://github.com/klaussinani/signale).
  - Internal / Debugging - Use [debug](https://github.com/visionmedia/debug).
- Server / Web app or other complex project
  - Use [Winson](https://github.com/winstonjs/winston)
    (or
    [Bunyan](https://github.com/trentm/node-bunyan)
    if the use case fits better)
  - You can redirect package output (e.g. from
    [debug](https://github.com/visionmedia/debug))
    to the selected logger as debug log level.

## Interactive

These are the tools for informing or interacting with user through a command-line. The output is expected to be read primarily by users, machine-readability is secondary here, so focus is on easily distinguishable outputs. For interactive logging or user interaction, following should be a good combination:

- [signale](https://github.com/klaussinani/signale) - pretty and
  easily-customized console logging.
  - Can be good for informing user of a
    progress of some complex process (e.g. think of installing a package, or
    describing the progress of a pipeline (as used in
    [semantic-release](https://github.com/semantic-release/semantic-release))
  - Supports secrets detection, interactive (progress) mode, and more
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - user interaction
  through cli (choices, lists, prompts, confirmations, passwords, ...)
  - Use for prompting user for input.
  - Supports defaults, can be extended to use
    [autocomplete](https://www.npmjs.com/package/inquirer-autocomplete-prompt)
- [cli-progress](https://www.npmjs.com/package/cli-progress) - Progress bar
  in command line.
  - Use if there's a process which may take some time and is quantifiable, but
    the stage details are not important (contrast with [signale's](https://github.com/klaussinani/signale) interactive
    mode)
  - Single- or multi-bars, ETA, custom total / increments, and more.
- [chalk](https://www.npmjs.com/package/chalk) - Colourful ouput.

## Informative

Unlike the [interactive logging](#interactive), the purpose of informative
logging is to understand how the process works and whether it works as
intended. It may display more details to user, and should be machine-readable.
It is understood that the output of this logging is not a primary / auxiliary feature, but rather a tool to debug / resolve issues.

### Informative - Package / Library

For a package or library, we only want to ensure that all output flows through
a customizable centralized system, so users can decided what
logging is shown and where it is sent. We don't make that decision.

Also, as the package or library is meant to be used as a component in a larger
project, and we have no control over the environment where it is used, we
mustn't collect any usage data. Therefore solutions like
[winson](https://github.com/winstonjs/winston)
or
[bunyan](https://github.com/trentm/node-bunyan)
are overkill in this case as we cannot benefit from the features like
fine control over output streams.

So we assume we're looking for a logger for a package with small scope of
responsibility (and thus with limited number of inputs and side-effects that
would need to be logged). We also want to be compliant with best practices / de
facto standards. Given these, the best option is to use
[debug](https://github.com/visionmedia/debug).

[debug](https://github.com/visionmedia/debug) enables the library user to:

- turn on / off the logging, or select only specific parts to be logged,
  either through environmental variables or JS API.
- output stream overriding
  ([in case you'd want to redirect it to tools like winston](https://stackoverflow.com/questions/47012796/is-it-possible-to-use-winston-logging-and-debug-module-together))
- basic formatting, colour-coding, and more...

While [debug](https://github.com/visionmedia/debug) doesn't distinguish between
different logging levels out of the box, it's not necessarily required. Some
packages may need to be silent to avoid polluting stdout, and other may have
such specific use that distinction between log / error is sufficient.

> Although there's some overlap, this can still work alongside interactive logging as their use is different:
>
> Interactive ([signale](https://github.com/klaussinani/signale))
>
> - used for reporting user-oriented information
> - default ON
> - could be turned off e.g. with a `quiet` flag
>
> Informative ([debug](https://github.com/visionmedia/debug))
>
> - used for reporting internal information
> - default OFF
> - could be turned on with a `debug` flag

### Informative - Server / Web app or other complex project

Here we're talking about projects where their complexity or intended use
permits them to decide over logging options. Think of server or web apps or
other standalone tools / apps. These are (mostly) not meant to be used as a
third party component, they are mostly used by you or your team, and are
possibly even private. This means you can decide what logging should be
collected and where it should be sent so it complies with business
requirements / legal regulations.

You need to ensure standardized formatting for machine-readability, multiple
(possibly remote) destinations for different log types, inclusion of system
metadata (e.g. request, process, or machine ID... ). As the apps may be
long-lived or process many tasks you also need to consider the whole logging
lifecycle (what should (not) be collected and why, when, how long it should
be kept alive, handling storage / file rotation, etc... ).

In this case tools like
[debug](https://github.com/visionmedia/debug)
won't cut it, as fine granularity is required.

There's many options out there, whether it's
[winston](https://github.com/winstonjs/winston),
[bunyan](https://github.com/trentm/node-bunyan),
[log4js](https://github.com/log4js-node/log4js-node),
or for a more pythonic logger, there's also
[intel](https://github.com/seanmonstar/intel).

Since many of the functionalities overlap, it's likely best choice to go with
the one has good community support and extensible architecture, which at the
time of writing is [winston](https://github.com/winstonjs/winston).

## Logging strategy

Like with other software aspects, also here it's important to agree on a
logging strategy. Just like with e.g. code styling, this will free others from
having to decide what, when and why to log, allowing them to focus on the
important and avoid needless conflicts.

This piece won't go into details of setting up logging strategy
([there's](https://hub.packtpub.com/7-best-practices-for-logging-in-node-js/)
[plenty](https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications)
[other](https://blog.bitsrc.io/logging-best-practices-for-node-js-applications-8a0a5969b94c)
[resources](https://blog.papertrailapp.com/best-practices-for-logging-in-nodejs/)
[you](https://www.datadoghq.com/blog/node-logging-best-practices/) [can](https://coralogix.com/log-analytics-blog/node-logging-best-practices-tips/)
[read](https://stackify.com/winston-logging-tutorial/)
[to](https://coralogix.com/log-analytics-blog/important-things-log-application-software/)
[get](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/)
[started](https://medium.com/@samngms/which-npm-logging-module-to-choose-debug-winston-log4js-and-bunyan-1045fb4b0475)),
but some general things to keep in mind are:

### Log on the interfaces (in addition to logging elsewhere)

You may have a well-tested software and a robust internal interaction between
components, but the environment and conditions in production may be different.
You cannot control what is being feed the system, and so it may just happen
to be something you haven't tested for and kill the system. It's hence
important to log information that is entering or leaving your system (within
the limits of reason, of course).

What this means:

- If you have a server app, log the requests received, e.g. with
  [morgan](https://www.npmjs.com/package/morgan)
  or
  [express-winston](https://github.com/bithavoc/express-winston#readme).
- If you are interacting with a file system, log what file you are
  reading / writing to.
- If fetching data through an API that may return dynamic data, log what
  conditions you sent to the API.

## Further reading

To read up more on logging, check out some of the
[awesome](https://github.com/hugo53/awesome-logging)
[logging](https://github.com/roundrobin/awesome-logging)
projects
