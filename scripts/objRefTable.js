const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar
	];
};
self.C3_JsPropNameTable = [
	{cristal: 0},
	{Sólido: 0},
	{grama: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{home: 0},
	{agua: 0},
	{tempo: 0},
	{Sprite: 0},
	{vida: 0},
	{Sprite2: 0}
];

self.InstanceType = {
	cristal: class extends self.ISpriteInstance {},
	grama: class extends self.ISpriteInstance {},
	home: class extends self.ISpriteInstance {},
	agua: class extends self.ISpriteInstance {},
	tempo: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	vida: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}