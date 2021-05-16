import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";



var mspt ;
var averageMSPT;
var totalMSPT
const ticksToAverage=10;    

function calc_mspt (test,startTime,i)
{
	var mspt = (Date.now()-startTime)/ticksToAverage;
	totalMSPT=totalMSPT + mspt;
	averageMSPT=totalMSPT/(i+1);
	test.fail("mspt: "+mspt.toFixed(1)+", tps: "+(1000/mspt).toFixed(1));
	print("mspt:"+mspt);	
}
function fiveminmobspawn(test)
{
	test.spawn("timers:five_min", new BlockLocation(2, 2, 3));
	test.succeed()
}
function tenminmobspawn(test)
{
	test.spawn("timers:ten_min", new BlockLocation(2, 2, 3));
	test.succeed()
}
function fifteenminmobspawn(test)
{
	test.spawn("timers:fifteen_min", new BlockLocation(2, 2, 3));
	test.succeed()
	
}
function hourmobspawn(test)
{
	test.spawn("timers:hour", new BlockLocation(2, 2, 3));
	test.succeed()
}

/// Lag testing tools
GameTest.register("lag", "check_lag",  (test) => {
	var i;
	totalMSPT=0;
	
	var start = Date.now();
	// wait 20 ticks, then check whether the victim still exists
	test.runAtTickTime(ticksToAverage, () =>{
                        calc_mspt(test,start,i);
                        test.succeed();
						});
		

	//test.fail("average mspt = "+averageMSPT/samples);
		


}).tag(GameTest.Tags.suiteDefault);
GameTest.register("lag", "shulker_lag",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault);
GameTest.register("lag", "target_block_lag",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault);

//Item counting
GameTest.register("items", "high_speed_counter",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault).structureName("items:high_speed_counter"); 

GameTest.register("items", "sorted_item_counter",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault).structureName("items:sorted_item_counter"); 


//mob counters
GameTest.register("mobs", "hostile_mob_cap",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault);
GameTest.register("mobs", "hostile_mob_counter",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault);

GameTest.register("mobs", "passive_mob_cap",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault);

GameTest.register("mobs", "passive_mob_counter",  (test) => {
	test.succeed();
}).tag(GameTest.Tags.suiteDefault);

//Timers
GameTest.register("timers","mob_spawning_5min",fiveminmobspawn).structureName("timers:domobsapwning"); 
GameTest.register("timers","mob_spawning_10min",tenminmobspawn).structureName("timers:domobsapwning"); 
GameTest.register("timers","mob_spawning_15min",fifteenminmobspawn).structureName("timers:domobsapwning"); 
GameTest.register("timers","mob_spawning_1hour",hourmobspawn).structureName("timers:domobsapwning"); 

GameTest.register("timers","random_tick_5min",fiveminmobspawn).structureName("timers:randomTick"); 
GameTest.register("timers","random_tick_10min",tenminmobspawn).structureName("timers:randomTick"); 
GameTest.register("timers","random_tick_15min",fifteenminmobspawn).structureName("timers:randomTick"); 
GameTest.register("timers","random_tick_1hour",hourmobspawn).structureName("timers:randomTick"); 

GameTest.register("timers","random_tick_x10_5min",fiveminmobspawn).structureName("timers:randomTickx10"); 
GameTest.register("timers","random_tick_x10_10min",tenminmobspawn).structureName("timers:randomTickx10"); 
GameTest.register("timers","random_tick_x10_15min",fifteenminmobspawn).structureName("timers:randomTickx10"); 
GameTest.register("timers","random_tick_x10_1hour",hourmobspawn).structureName("timers:randomTickx10"); 

GameTest.register("timers","random_tickx100_5min",fiveminmobspawn).structureName("timers:randomTickx100"); 
GameTest.register("timers","random_tickx100_10min",tenminmobspawn).structureName("timers:randomTickx10"); 
GameTest.register("timers","random_tickx100_15min",fifteenminmobspawn).structureName("timers:randomTickx100"); 
GameTest.register("timers","random_tickx100_1hour",hourmobspawn).structureName("timers:randomTickx100"); 

