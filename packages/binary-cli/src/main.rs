extern crate clap;

use clap::{Arg, App, SubCommand};

fn main() {
    let matches = App::new("Binary Stash CLI")
        .version("0.0.1")
        .author("Scott")
        .about("Scaffold Common build tools")
        .arg(
            Arg::with_name("config")
                .short("c")
                .long("config")
                .value_name("FILE")
                .help("Sets a custom config file")
                .takes_value(true)
        )
        .arg(
            Arg::with_name("generate prisma starter")
                .short("gp")
                .index(1)
                .long("generate prisma")
                .value_name("FILE")
                .help("Generates a initial prisma setup")
        )
        .get_matches();

    let config = matches.value_of("config").unwrap_or("default.conf");
    println!("value for config: {}", config);

    // println!("Using input file: {}", matches.value_of("INPUT").unwrap());

    // Vary the output based on how many times the user used the "verbose" flag
    // (i.e. 'myprog -v -v -v' or 'myprog -vvv' vs 'myprog -v'
    match matches.occurrences_of("v") {
        0 => println!("No verbose info"),
        1 => println!("Some verbose info"),
        2 => println!("Tons of verbose info"),
        3 | _ => println!("Don't be crazy"),
    }

    // You can handle information about subcommands by requesting their matches by name
    // (as below), requesting just the name used, or both at the same time
    if let Some(matches) = matches.subcommand_matches("test") {
        if matches.is_present("debug") {
            println!("Printing debug info...");
        } else {
            println!("Printing normally...");
        }
    }
}
