1、JS数据类型
有Null、Number、String、Undefined、Boolean这5种基本数据类型；
引用数据类型含有Object、Function、Array、Date等类型。
问题：undefined和null两者的异同
相同点：都有一个字面量，null和undefind。转化为Boolean类型时，都会转化为false，转化为Object类型时，都会报TypeError错误。
undefined派生于null类型，undefined == null
不同点：null是关键字，而undefind是挂载在window上的全局变量。在使用typeOf检测时，typeOf undefined = undefined；typeOf null = object
在进行数值计算的时候，undefined会转化成NAN，而null会转化成Null



