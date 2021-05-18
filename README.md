# BedrockTechnicalTestTools
This is a set of gametest sets that allow you to test technical items in minecraft bedrock edition. If you would like to contribute to this and don't know how to use git hub please join the discord, figure out how to add in the test structures or fix items that you find.
https://discord.gg/v2bxUZcwCm

If you find a bug please file it here.

https://github.com/RavinMaddHatter/BedrockTechnicalTestTools/issues

If you are looking for how to download this please look here

https://github.com/RavinMaddHatter/BedrockTechnicalTestTools/releases

## Setup
The behavior pack and resource pack must be attached to a world with GameTestFramwork enabled. If you do not enable gametest framework this will not work as the video and instructions explain. 

## Commands
The following section contains all of the currnet commands in the pack
### Timers
Timers are automatic structures that allow for automatically starting and stoping certian aspects of the game.

#### timers:mob_spawning_5min
When executed loads a structure and a mob that will enable general mob spawning for 5 minutes and then disable mobspawning completely. after 5 minutes 

#### timers:mob_spawning_10min
When executed loads a structure and a mob that will enable general mob spawning for 10 minutes and then disable mobspawning completely. after 10 minutes 

#### timers:mob_spawning_15min
When executed loads a structure and a mob that will enable general mob spawning for 15 minutes and then disable mobspawning completely. after 15 minutes 

#### timers:mob_spawning_1hour
When executed loads a structure and a mob that will enable general mob spawning for 60 minutes and then disable mobspawning completely. after 60 minutes 

#### timers:random_tick_5min
When executed loads a structure and a mob that will set random tick to 1 (default) for 5 minutes and then set random tick to 0 after 5 minutes 

#### timers:random_tick_10min
When executed loads a structure and a mob that will set random tick to 1 (default) for 10 minutes and then set random tick to 0 after 10 minutes 

#### timers:random_tick_15min
When executed loads a structure and a mob that will set random tick to 1 (default) for 15 minutes and then set random tick to 0 after 15 minutes 

#### timers:random_tick_1hour
When executed loads a structure and a mob that will set random tick to 1 (default) for 60 minutes and then set random tick to 0 after 60 minutes 

#### timers:random_tick_x10_5min
When executed loads a structure and a mob that will set random tick to 10  for 5 minutes and then set random tick to 0 after 5 minutes 

#### timers:random_tick_x10_10min
When executed loads a structure and a mob that will set random tick to 10 for 10 minutes and then set random tick to 0 after 10 minutes 

#### timers:random_tick_x10_15min
When executed loads a structure and a mob that will set random tick to 10 for 15 minutes and then set random tick to 0 after 15 minutes 

#### timers:random_tick_x10_1hour
When executed loads a structure and a mob that will set random tick to 10 for 60 minutes and then set random tick to 0 after 60 minutes 

#### timers:random_tickx100_5min
When executed loads a structure and a mob that will set random tick to 100  for 5 minutes and then set random tick to 0 after 5 minutes 

#### timers:random_tickx100_10min
When executed loads a structure and a mob that will set random tick to 100 for 10 minutes and then set random tick to 0 after 10 minutes 

#### timers:random_tickx100_15min
When executed loads a structure and a mob that will set random tick to 100 for 15 minutes and then set random tick to 0 after 15 minutes 

#### timers:random_tickx100_1hour
When executed loads a structure and a mob that will set random tick to 100 for 60 minutes and then set random tick to 0 after 60 minutes 

### mobs
This seciton contains tools specific to mobs.
#### mobs:hostile_mob_cap
Counts the current number of monsters loaded

#### mobs:hostile_mob_counter
counts the total number of monsters that have been loaded since command block was turned on

#### mobs:passive_mob_cap
Counts the total number of passive mobs that are currently loaded

#### mobs:passive_mob_counter
counts the total number of passive mobs that have spaned since the command block was turned on.

### Items
This section has structures related to item processing

#### items:high_speed_counter
A 16 hopper speed item counter that does not sort.

#### items:sorted_item_counter
A 1x hopper sppeed item counter that has 7 soring channels and 1 overflow channel. Requries setup.

### Lag
This section contains lag generation tools and lag busting tools

#### lag:check_lag
Adds a game test that allows you to check the time between ticks. 

#### lag:shulker_lag
spawns a set of full shulkers being pushed into empty shulkers that can be used to increase lag on the server. The more lamps that are lit, the lower the lag is on the server.

#### lag:target_block_lag
Spawns a bunch of target blocks, this is reportedly different than the shulker lag and could impact machines differently.
