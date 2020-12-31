# The Unofficial Advent of Code Syllabus
The syllabus that not only explains each AOC puzzle, but helps users learn more about computer science!
(Note: this is not made by Eric or the Advent of Code team, just a fan who tries to help)

# Links
[Advent of Code](https://adventofcode.com/)

[Subreddit](https://reddit.com/r/adventofcode/)

[Eric's Twitter](https://twitter.com/ericwastl)

## Purpose
The purpose of this syllabus is to assist with the problems some people may have with specific puzzles. This will NOT give the answers or unwantingly spoil the puzzle. It will only give specific ways to solve it if one wants to. The format will be as follows:

Each day will have the first and second part in seperate files, just so the second part doesn't get spoiled. For example:
```
└── years
    ├── ...
    ├── 2019
    └── 2020
        ├── day1
        │   ├── part1.md
        │   ├── part2.md
        │   └── ...
        └── ...
```

They may have extra files for reasons, but generally, this is how each day will be laid out. You can click and read by browsing the files in the repository, or by using the table of contents at the end of this page.

In each of the markdown files, I will explain what the problem is without the story, and a reminder of the general tips that can help. Then, if you so choose, you can look at the specific tips that can help you solve the puzzle. For example, the file would look like this:

> # Advent of Code (YEAR) - Day (DAY), Part (PART)
> 
> ## Summary
> This is where the summary would be if this was an actual file
> 
> ## General Tips
> I would repeat the general tips that is on the main README, which is below. These would also be paraphrased.
> 
> ## Specific Tips (SPOILERS)
> <details> <summary>Spoiler warning!</summary>
> 
> This is where the specific tips will go, where it could spoil how to solve the puzzle, but will provided better tips because they specfically address problems people may have or confusing parts of the puzzle.
> 
> </details>

Finally, as mentioned before, there will be some files that may be included with the markdown files. This is just to aid with them, or provide something I couldn't show on the markdown files.

## General Tips:
- Testing can be the reason you figure out how a specific piece of code should work. Make sure that you can test you code with the examples provided in the prose.
- Most puzzles consist of parsing the input data to a usable state, then using that data to complete the puzzle. For example, part 1 may ask to parse a list of vectors and find the biggest distance from the origin, then in part 2, it will ask you to find the point where all particles collide at.
- You don't need a function for every small instance that is repeated in AOC, but having libraries that can do the mundane stuff can help a lot. For example, fetching the input and creating a project for that day can take a minute or two. Create a script that can do all of that with one command. Just be aware to not spam the server with requests. The best thing to do is to store you input after fetching it to a file, because it will not change, and it is fast to read from disk than to read from the internet in most cases.
- Make sure that the input you have isn't changed in any way or it will mess up the answer. For example, browser may auto-translate if the input vaguely (very vaguely) looks like another languague.
- If the input takes longer than 30 seconds to run, it is either intentional, and it will solve pretty soon, or you have done something wrong. Most of the time, it is the latter, so do some testing to see what is wrong.
- If all else fails, either take a break and come back to it later, or get some help. The subreddit is a great place to ask, and what this syllabus tries to help with.

## Table of Contents

### 2020
| Day | Part One Link | Part Two Link | 
|:---:|:---:|:---:|
| Day 1 - Report Repair | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day1/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day1/part1.md) |
| Day 2 - Password Philosophy | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day2/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day2/part1.md) |
| Day 3 - Toboggan Trajectory | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day3/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day3/part1.md) |
| Day 4 - Passport Processing | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day4/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day4/part1.md) |
| Day 5 - Binary Boarding | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day5/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day5/part1.md) |
| Day 6 - Custom Customs | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day6/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day6/part1.md) |
| Day 7 - Handy Haversacks | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day7/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day7/part1.md) |
| Day 8 - Handheld Halting | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day8/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day8/part1.md) |
| Day 9 - Encoding Error | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day9/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day9/part1.md) |
| Day 10 - Adapter Array | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day10/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day10/part1.md) |
| Day 11 - Seating System | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day11/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day11/part1.md) |
| Day 12 - Rain Risk | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day12/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day12/part1.md) |
| Day 13 - Shuttle Search | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day13/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day13/part1.md) |
| Day 14 - Docking Data | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day14/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day14/part1.md) |
| Day 15 - Rambunctious Recitation | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day15/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day15/part1.md) |
| Day 16 - Ticket Translation | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day16/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day16/part1.md) |
| Day 17 - Conway Cubes | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day17/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day17/part1.md) |
| Day 18 - Operation Order | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day18/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day18/part1.md) |
| Day 19 - Monster Messages | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day19/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day19/part1.md) |
| Day 20 - Jurassic Jigsaw | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day20/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day20/part1.md) |
| Day 21 - Allergen Assessment | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day21/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day21/part1.md) |
| Day 22 - Crab Combat | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day22/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day22/part1.md) |
| Day 23 - Crab Cups | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day23/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day23/part1.md) |
| Day 24 - Lobby Layout | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day24/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day24/part1.md) |
| Day 25 - Combo Breaker | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day25/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2020/day25/part1.md) |

### 2019
| Day | Part One Link | Part Two Link | 
|:---:|:---:|:---:|
| Day 1 - The Tyranny of the Rocket Equation | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day1/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day1/part1.md) |
| Day 2 - 1202 Program Alarm | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day2/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day2/part1.md) |
| Day 3 - Crossed Wires | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day3/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day3/part1.md) |
| Day 4 - Secure Container | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day4/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day4/part1.md) |
| Day 5 - Sunny with a Chance of Asteroids | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day5/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day5/part1.md) |
| Day 6 - Universal Orbit Map | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day6/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day6/part1.md) |
| Day 7 - Amplification Circuit | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day7/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day7/part1.md) |
| Day 8 - Space Image Format | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day8/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day8/part1.md) |
| Day 9 - Sensor Boost | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day9/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day9/part1.md) |
| Day 10 - Monitoring Station | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day10/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day10/part1.md) |
| Day 11 - Space Police | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day11/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day11/part1.md) |
| Day 12 - The N-Body Problem | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day12/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day12/part1.md) |
| Day 13 - Care Package | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day13/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day13/part1.md) |
| Day 14 - Space Stoichiometry | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day14/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day14/part1.md) |
| Day 15 - Oxygen System | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day15/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day15/part1.md) |
| Day 16 - Flawed Frequency Transmission | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day16/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day16/part1.md) |
| Day 17 - Set and Forget | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day17/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day17/part1.md) |
| Day 18 - Many-Worlds Interpretation | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day18/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day18/part1.md) |
| Day 19 - Tractor Beam | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day19/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day19/part1.md) |
| Day 20 - Donut Maze | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day20/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day20/part1.md) |
| Day 21 - Springdroid Adventure | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day21/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day21/part1.md) |
| Day 22 - Slam Shuffle | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day22/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day22/part1.md) |
| Day 23 - Category Six | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day23/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day23/part1.md) |
| Day 24 - Planet of Discord | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day24/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day24/part1.md) |
| Day 25 - Cryostasis | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day25/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2019/day25/part1.md) |

### 2018
| Day | Part One Link | Part Two Link | 
|:---:|:---:|:---:|
| Day 1 - Chronal Calibration | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day1/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day1/part1.md) |
| Day 2 - Inventory Management System | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day2/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day2/part1.md) |
| Day 3 - No Matter How You Slice It | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day3/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day3/part1.md) |
| Day 4 - Repose Record | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day4/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day4/part1.md) |
| Day 5 - Alchemical Reduction | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day5/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day5/part1.md) |
| Day 6 - Chronal Coordinates | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day6/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day6/part1.md) |
| Day 7 - The Sum of Its Parts | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day7/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day7/part1.md) |
| Day 8 - Memory Maneuver | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day8/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day8/part1.md) |
| Day 9 - Marble Mania | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day9/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day9/part1.md) |
| Day 10 - The Stars Align | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day10/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day10/part1.md) |
| Day 11 - Chronal Charge | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day11/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day11/part1.md) |
| Day 12 - Subterranean Sustainability | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day12/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day12/part1.md) |
| Day 13 - Mine Cart Madness | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day13/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day13/part1.md) |
| Day 14 - Chocolate Charts | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day14/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day14/part1.md) |
| Day 15 - Beverage Bandits | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day15/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day15/part1.md) |
| Day 16 - Chronal Classification | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day16/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day16/part1.md) |
| Day 17 - Reservoir Research | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day17/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day17/part1.md) |
| Day 18 - Settlers of The North Pole | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day18/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day18/part1.md) |
| Day 19 - Go With The Flow | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day19/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day19/part1.md) |
| Day 20 - A Regular Map | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day20/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day20/part1.md) |
| Day 21 - Chronal Conversion | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day21/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day21/part1.md) |
| Day 22 - Mode Maze | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day22/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day22/part1.md) |
| Day 23 - Experimental Emergency Teleportation | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day23/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day23/part1.md) |
| Day 24 - Immune System Simulator 20XX | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day24/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day24/part1.md) |
| Day 25 - Four-Dimensional Adventure | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day25/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2018/day25/part1.md) |

### 2017
| Day | Part One Link | Part Two Link | 
|:---:|:---:|:---:|
| Day 1 - Inverse Captcha | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day1/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day1/part1.md) |
| Day 2 - Corruption Checksum | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day2/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day2/part1.md) |
| Day 3 - Spiral Memory | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day3/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day3/part1.md) |
| Day 4 - High-Entropy Passphrases | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day4/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day4/part1.md) |
| Day 5 - A Maze of Twisty Trampolines, All Alike | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day5/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day5/part1.md) |
| Day 6 - Memory Reallocation | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day6/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day6/part1.md) |
| Day 7 - Recursive Circus | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day7/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day7/part1.md) |
| Day 8 - I Heard You Like Registers | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day8/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day8/part1.md) |
| Day 9 - Stream Processing | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day9/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day9/part1.md) |
| Day 10 - Knot Hash | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day10/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day10/part1.md) |
| Day 11 - Hex Ed | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day11/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day11/part1.md) |  
| Day 12 - Digital Plumber | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day12/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day12/part1.md) |
| Day 13 - Packet Scanners | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day13/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day13/part1.md) |
| Day 14 - Disk Defragmentation | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day14/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day14/part1.md) |
| Day 15 - Dueling Generators | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day15/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day15/part1.md) |
| Day 16 - Permutation Promenade | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day16/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day16/part1.md) |
| Day 17 - Spinlock | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day17/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day17/part1.md) || Day 18 - Duet | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day18/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day18/part1.md) |    
| Day 19 - A Series of Tubes | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day19/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day19/part1.md) |
| Day 20 - Particle Swarm | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day20/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day20/part1.md) |
| Day 21 - Fractal Art | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day21/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day21/part1.md) |
| Day 22 - Sporifica Virus | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day22/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day22/part1.md) |
| Day 23 - Coprocessor Conflagration | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day23/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day23/part1.md) |
| Day 24 - Electromagnetic Moat | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day24/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day24/part1.md) |
| Day 25 - The Halting Problem | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day25/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2017/day25/part1.md) |

### 2016
| Day | Part One Link | Part Two Link | 
|:---:|:---:|:---:|
| Day 1 - No Time for a Taxicab | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day1/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day1/part1.md) |
| Day 2 - Bathroom Security | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day2/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day2/part1.md) |
| Day 3 - Squares With Three Sides | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day3/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day3/part1.md) |
| Day 4 - Security Through Obscurity | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day4/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day4/part1.md) |
| Day 5 - How About a Nice Game of Chess? | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day5/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day5/part1.md) |
| Day 6 - Signals and Noise | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day6/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day6/part1.md) |
| Day 7 - Internet Protocol Version 7 | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day7/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day7/part1.md) |
| Day 8 - Two-Factor Authentication | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day8/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day8/part1.md) |
| Day 9 - Explosives in Cyberspace | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day9/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day9/part1.md) |
| Day 10 - Balance Bots | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day10/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day10/part1.md) |
| Day 11 - Radioisotope Thermoelectric Generators | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day11/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day11/part1.md) |
| Day 12 - Leonardo's Monorail | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day12/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day12/part1.md) |
| Day 13 - A Maze of Twisty Little Cubicles | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day13/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day13/part1.md) |
| Day 14 - One-Time Pad | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day14/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day14/part1.md) |
| Day 15 - Timing is Everything | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day15/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day15/part1.md) |
| Day 16 - Dragon Checksum | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day16/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day16/part1.md) |
| Day 17 - Two Steps Forward | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day17/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day17/part1.md) |
| Day 18 - Like a Rogue | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day18/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day18/part1.md) |
| Day 19 - An Elephant Named Joseph | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day19/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day19/part1.md) |
| Day 20 - Firewall Rules | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day20/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day20/part1.md) |
| Day 21 - Scrambled Letters and Hash | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day21/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day21/part1.md) |
| Day 22 - Grid Computing | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day22/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day22/part1.md) |
| Day 23 - Safe Cracking | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day23/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day23/part1.md) |
| Day 24 - Air Duct Spelunking | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day24/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day24/part1.md) |
| Day 25 - Clock Signal | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day25/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2016/day25/part1.md) |

### 2015
| Day | Part One Link | Part Two Link | 
|:---:|:---:|:---:|
| Day 1 - Not Quite Lisp | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day1/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day1/part1.md) |
| Day 2 - I Was Told There Would Be No Math | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day2/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day2/part1.md) |
| Day 3 - Perfectly Spherical Houses in a Vacuum | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day3/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day3/part1.md) |
| Day 4 - The Ideal Stocking Stuffer | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day4/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day4/part1.md) |
| Day 5 - Doesn't He Have Intern-Elves For This? | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day5/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day5/part1.md) |
| Day 6 - Probably a Fire Hazard | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day6/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day6/part1.md) |
| Day 7 - Some Assembly Required | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day7/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day7/part1.md) |
| Day 8 - Matchsticks | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day8/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day8/part1.md) || Day 9 - All in a Single Night | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day9/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day9/part1.md) |
| Day 10 - Elves Look, Elves Say | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day10/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day10/part1.md) |
| Day 11 - Corporate Policy | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day11/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day11/part1.md) |
| Day 12 - JSAbacusFramework.io | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day12/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day12/part1.md) |
| Day 13 - Knights of the Dinner Table | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day13/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day13/part1.md) |
| Day 14 - Reindeer Olympics | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day14/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day14/part1.md) |
| Day 15 - Science for Hungry People | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day15/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day15/part1.md) |
| Day 16 - Aunt Sue | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day16/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day16/part1.md) || Day 17 - No Such Thing as Too Much | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day17/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day17/part1.md) |
| Day 18 - Like a GIF For Your Yard | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day18/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day18/part1.md) |
| Day 19 - Medicine for Rudolph | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day19/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day19/part1.md) |
| Day 20 - Infinite Elves and Infinite Houses | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day20/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day20/part1.md) |
| Day 21 - RPG Simulator 20XX | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day21/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day21/part1.md) |
| Day 22 - Wizard Simulator 20XX | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day22/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day22/part1.md) |
| Day 23 - Opening the Turing Lock | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day23/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day23/part1.md) |
| Day 24 - It Hangs in the Balance | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day24/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day24/part1.md) |
| Day 25 - Let It Snow | [Part One](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day25/part1.md) | [Part Two](https://github.com/CodingAP/unofficial-aoc-syllabus/blob/main/years/2015/day25/part1.md) |