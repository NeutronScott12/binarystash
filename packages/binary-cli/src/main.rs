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
        ).get_matches();

    let config = matches.value_of("config").unwrap_or("default.conf");
    println!("value for config: {}", config);
}
