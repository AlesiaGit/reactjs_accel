<Query Kind="Program" />

double[] horMarks;
double[] verMarks;

void Main()
{
	var left = 27.393723;
	var right = 27.704773;
	
	var top = 53.977897;
	var bottom = 53.829839;
	
	var horDiffAngle = right - left;
	var verDiffAngle = bottom - top;
	
	var horDeltaAngle = horDiffAngle / 20.0;
	var verDeltaAngle = verDiffAngle / 20.0;
	
	left.Dump("left");
	right.Dump("right");
	
	horDiffAngle.Dump();
	horDeltaAngle.Dump();
	
	horMarks = Enumerable.Range(0, 21)
		.Select(i => left + horDeltaAngle * i)
		.ToArray()
		.Dump();
	
	top.Dump("top");
	bottom.Dump("bottom");
	verDiffAngle.Dump();
	verDeltaAngle.Dump();
	
	verMarks = Enumerable.Range(0, 21)
		.Select(i => bottom - verDeltaAngle * i)
		.ToArray()
		.Dump();
	
	var horJson = ("const HOR_MARKS = [\r\n"
		+ string.Join(", ", horMarks)
		+ "\r\n];")
		.Dump();
	
	var verJson = ("const VER_MARKS = [\r\n"
		+ string.Join(", ", verMarks)
		+ "\r\n];")
		.Dump();
		
	var current = new Tuple<double, double>(27.465563, 53.965200);
	
	GetTilePos(current).Dump();
	GetTileName(current).Dump();
	
}

Tuple<int, int> GetTilePos(Tuple<double, double> location)
{
	var horIndex = 0;
	var verIndex = 0;
	
	for (; horIndex < horMarks.Length; horIndex++)
	{
		if (location.Item1 < horMarks[horIndex])
		{
			break;
		}
	}

	for (; verIndex < verMarks.Length; verIndex++)
	{
		if (location.Item2 < verMarks[verIndex])
		{
			break;
		}
	}

	return new Tuple<int, int>(horIndex, verIndex);
}

string GetTileName(Tuple<double, double> location)
{
	var tilePos = GetTilePos(location);
	return $"{tilePos.Item1}_{tilePos.Item2}";
}