twaver = {}

twaver.animate = {}

twaver.canvas = {}

twaver.canvas.interaction = {}

twaver.charts = {}

twaver.controls = {}

twaver.layout = {}

twaver.network = {}

twaver.network.interaction = {}

twaver.vector = {}

twaver.vector.interaction = {}


twaver.AlarmElementMapping = function (alarmBox, elementBox) {
/// <summary>
/// 	这个类定义了告警网元之间的映射关系。一般告警和网元是一对一的关系，但有时如果想要达到一对多或多对一的关系时，就需要使用这个类来定义。一旦定义了告警和网元的关系后，当告警发生时，所有符合条件的网元上都会产生告警。
/// 	想要更详细的了解告警网元映射这个类的使用，可以参考TWaver HTML5的Alarm Mapping Demo
/// 	
/// </summary>
/// <param name="alarmBox" type="twaver.AlarmBox">告警容器的对象</param>
/// <param name="elementBox" type="twaver.ElementBox">网元容器对象</param>
/// <returns type="twaver.AlarmElementMapping">告警网元映射对象本身</returns>
}

twaver.AlarmElementMapping.prototype.dispose = function () {
/// <summary>
/// 	释放告警网元映射中的所有资源，包括告警容器，网元容器等
/// </summary>
}

twaver.AlarmElementMapping.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.AlarmElementMapping.prototype.getCorrespondingAlarms = function (element) {
/// <summary>
/// 	通过网元获取相关联的告警对象
/// </summary>
/// <param name="element" type="twaver.Element">网元对象</param>
/// <returns type="twaver.List">告警对象集合</returns>
}

twaver.AlarmElementMapping.prototype.getCorrespondingElements = function (alarm) {
/// <summary>
/// 	通过告警获取发生这个告警的网元对象
/// </summary>
/// <param name="alarm" type="twaver.Alarm">告警对象</param>
/// <returns type="twaver.List">发生告警的网元对象集合</returns>
}


twaver.AlarmSeverity = function (value, name, nickName, color, displayName) {
/// <summary>
/// 	这个类定义了电信拓扑中所有的告警级别。在TWaver中，当发生一个告警时，需要附带着告警的级别。告警级别的等级预示着告警的严重性。TWaver在这个类中预定义了六种告警级别，用户可以直接使用，也可以添加自己的告警级别。
/// 	每一种告警级别都有一个昵称，通常昵称是用一个简短的字母来表示，用于显示在告警冒泡中。每种告警级别还定义了告警颜色，用户可以更改默认告警级别的颜色。一旦告警级别的颜色发生改变时，所有显示这种告警的视图都会随之更改
/// </summary>
/// <param name="value" type="String">告警级别的值，值越大，告警级别越高</param>
/// <param name="name" type="String">告警级别的名称</param>
/// <param name="nickName" type="String">告警级别的昵称，用于显示在告警冒泡中</param>
/// <param name="color" type="String">告警级别的颜色</param>
/// <param name="displayName" type="String">告警级别显示的名称</param>
/// <returns type="twaver.AlarmSeverity">告警级别对象本身</returns>
}

twaver.AlarmSeverity.add = function (value, name, nickName, color, displayName) {
/// <summary>
/// 	添加一个告警级别
/// </summary>
/// <param name="value" type="Number">告警级别的值，值越大，告警级别越高</param>
/// <param name="name" type="String">告警级别的名称</param>
/// <param name="nickName" type="String">告警级别的昵称，用于显示在告警冒泡中</param>
/// <param name="color" type="String">告警级别的颜色</param>
/// <param name="displayName" type="String">告警级别显示的名称</param>
/// <returns type="twaver.AlarmSeverity">告警级别对象本身</returns>
}

twaver.AlarmSeverity.clear = function () {
/// <summary>
/// 	清除所有的告警级别
/// </summary>
}

twaver.AlarmSeverity.CLEARED = function () {
/// <field type="twaver.AlarmSeverity">清除告警:告警级别中的一种，告警级别的值为0，默认是最低的告警级别</field>
}

twaver.AlarmSeverity.compare = function (severity1, severity2) {
/// <summary>
/// 	比较两种指定的告警级别的值:如果告警级别1大于告警级别2，返回1；如果告警级别1小于告警级别2，返回-1；如果相等，返回0
/// </summary>
/// <param name="severity1" type="twaver.AlarmSeverity"></param>
/// <param name="severity2" type="twaver.AlarmSeverity"></param>
/// <returns type="Number">如果告警级别1大于告警级别2，返回1；如果告警级别1小于告警级别2，返回-1；如果相等，返回0</returns>
}

twaver.AlarmSeverity.CRITICAL = function () {
/// <field type="twaver.AlarmSeverity">严重告警。告警级别中的一种，告警级别的值为500，默认是最高的告警级别</field>
}

twaver.AlarmSeverity.forEach = function (callbackFunction, scope) {
/// <summary>
/// 	覆盖所有的告警级别
/// </summary>
/// <param name="callbackFunction" type="Function">回调函数</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时指的是window</param>
}

twaver.AlarmSeverity.getByName = function (name) {
/// <summary>
/// 	通过告警级别的名称获取告警级别
/// </summary>
/// <param name="name" type="String">告警级别的名称</param>
/// <returns type="twaver.AlarmSeverity">告警级别对象</returns>
}

twaver.AlarmSeverity.getByValue = function (value) {
/// <summary>
/// 	通过告警级别的值获取告警级别。
/// 	告警级别的值越大，告警级别越高。告警级别的值是不可以重复的
/// </summary>
/// <param name="value" type="Number">告警级别的值</param>
/// <returns type="twaver.AlarmSeverity">告警级别对象</returns>
}

twaver.AlarmSeverity.getSortFunction = function () {
/// <summary>
/// 	获取排序的函数。默认是按照告警级别的值来排序的
/// </summary>
/// <returns type="Function">告警级别排序的函数</returns>
}

twaver.AlarmSeverity.INDETERMINATE = function () {
/// <field type="twaver.AlarmSeverity">不确定告警。告警级别的值为100</field>
}

twaver.AlarmSeverity.isClearedAlarmSeverity = function (severity) {
/// <summary>
/// 	判断是否是清除告警
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <returns type="Boolean">true为清除告警，否则为false</returns>
}

twaver.AlarmSeverity.MAJOR = function () {
/// <field type="twaver.AlarmSeverity">主要告警。告警级别的值为400</field>
}

twaver.AlarmSeverity.MINOR = function () {
/// <field type="twaver.AlarmSeverity">次要告警。告警级别的值为300</field>
}

twaver.AlarmSeverity.prototype.getClassName = function () {
/// <summary>
/// 	获取类名
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.AlarmSeverity.remove = function (name) {
/// <summary>
/// 	删除一个告警级别
/// </summary>
/// <param name="name" type="String">告警级别的名称</param>
/// <returns type="twaver.AlarmSeverity">删除了的告警级别对象</returns>
}

twaver.AlarmSeverity.setSortFunction = function (sortFunction) {
/// <summary>
/// 	设置排序的函数。默认是按照告警级别的值来排序的
/// </summary>
/// <param name="sortFunction" type="Function">告警级别排序的函数</param>
}

twaver.AlarmSeverity.severities = function () {
/// <field type="twaver.List">所有的告警级别</field>
}

twaver.AlarmSeverity.WARNING = function () {
/// <field type="twaver.AlarmSeverity">警告告警。告警级别的值为200</field>
}


twaver.AlarmState = function (element) {
/// <summary>
/// 	该类是用于描述网元告警状态的数据模型，包含该网元上的最高告警级别，最高传递告警级别，有多少个新发告警，多个确认告警等信息。
/// 	在TWaver，如果想添加告警，可以通过在AlarmBox中添加一个Alarm或者可以在AlarmState上添加告警。两者都会达到添加告警的效果，但是需要注意的是使用Alarm对象会更改并存储关于告警的信息，而AlarmState上只是存储了告警的级别和数量。
/// 	一般AlarmState用于存储已发生的历史告警。
/// </summary>
/// <param name="element" type="twaver.Element">发生告警的网元对象</param>
/// <returns type="twaver.AlarmState">告警级别对象本身</returns>
}

twaver.AlarmState.prototype.acknowledgeAlarm = function (severity) {
/// <summary>
/// 	确认某个告警级别的一个告警，调用这个方法后，网元上的新发告警数量会减一，确认告警的数量会加一
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
}

twaver.AlarmState.prototype.acknowledgeAllAlarms = function (severity) {
/// <summary>
/// 	确认网元上某个告警级别的所有告警，调用这个方法后，网元上这种告警级别的所有新发告警数量都增加到确认告警的数量上，新发告警的数量则变为零
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
}

twaver.AlarmState.prototype.clear = function () {
/// <summary>
/// 	清除所有的告警状态
/// </summary>
}

twaver.AlarmState.prototype.decreaseAcknowledgedAlarm = function (severity, decrement) {
/// <summary>
/// 	减少指定告警级别的确认告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <param name="decrement" type="Number">减少了的确认告警的数量，为空时数量为1</param>
}

twaver.AlarmState.prototype.decreaseNewAlarm = function (severity, decrement) {
/// <summary>
/// 	减少指定告警级别的新发告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <param name="decrement" type="Number">减少的新发告警的数量，为空时数量为1</param>
}

twaver.AlarmState.prototype.getAcknowledgedAlarmCount = function (severity) {
/// <summary>
/// 	获取指定级别的确认告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <returns type="Number">指定级别的确认告警的数量</returns>
}

twaver.AlarmState.prototype.getAlarmCount = function (severity) {
/// <summary>
/// 	获取指定告警级别的数量，包括新发告警和确认告警
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <returns type="Number">告警级别的数量</returns>
}

twaver.AlarmState.prototype.getClassName = function () {
/// <summary>
/// 	获取告警状态类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.AlarmState.prototype.getHighestAcknowledgedAlarmSeverity = function () {
/// <summary>
/// 	获取最高级别的确认告警
/// </summary>
/// <returns type="twaver.AlarmSeverity">告警级别</returns>
}

twaver.AlarmState.prototype.getHighestNativeAlarmSeverity = function () {
/// <summary>
/// 	获取本地告警中最高级别的告警，包括新发告警和确认告警
/// </summary>
/// <returns type="twaver.AlarmSeverity">最高级别的告警</returns>
}

twaver.AlarmState.prototype.getHighestNewAlarmSeverity = function () {
/// <summary>
/// 	获取最高级别的新发告警
/// </summary>
/// <returns type="twaver.AlarmSeverity">告警级别</returns>
}

twaver.AlarmState.prototype.getHighestOverallAlarmSeverity = function () {
/// <summary>
/// 	获取最高级别的告警。包括新发告警，确认告警和传递告警之间的比较
/// </summary>
/// <returns type="twaver.AlarmSeverity">告警级别</returns>
}

twaver.AlarmState.prototype.getNewAlarmCount = function (severity) {
/// <summary>
/// 	获取指定告警级别新发告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别，为空时获取的是所有的告警级别</param>
/// <returns type="Number">告警级别的数量</returns>
}

twaver.AlarmState.prototype.getPropagateSeverity = function () {
/// <summary>
/// 	获取传播告警的级别。网元上的传播告警级别默认是取的孩子上的最高告警级别
/// </summary>
/// <returns type="twaver.AlarmSeverity">传播告警的级别</returns>
}

twaver.AlarmState.prototype.hasLessSevereNewAlarms = function () {
/// <summary>
/// 	是否显示告警级别较低的新发告警:TWaver是对最高级别的新发告警的网元进行渲染。如果返回值为true，告警冒泡中将会在文本最后显示"+"，来表示还有更多的告警级别较低的新发告警
/// </summary>
/// <returns type="Boolean">如果返回值为true，告警冒泡中将会在文本最后显示"+"，表示还有更多的告警级别较低的新发告警。返回flase，告警冒泡中只显示最高级别的告警信息</returns>
}

twaver.AlarmState.prototype.increaseAcknowledgedAlarm = function (severity, increment) {
/// <summary>
/// 	增加指定告警级别的确认告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <param name="increment" type="Number">告警级别增加的数量</param>
}

twaver.AlarmState.prototype.increaseNewAlarm = function (severity, increment) {
/// <summary>
/// 	增加指定告警级别的新发告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <param name="increment" type="Number">增加的新发告警的数量，为空时数量为1</param>
}

twaver.AlarmState.prototype.isEmpty = function () {
/// <summary>
/// 	判断告警状态是否为空，为空代表没有任何告警
/// </summary>
/// <returns type="Boolean">true为没有任何告警，否则为false</returns>
}

twaver.AlarmState.prototype.isEnablePropagation = function () {
/// <summary>
/// 	是否允许传播告警
/// </summary>
/// <returns type="Boolean">如果孩子的告警可以传播到父亲上，返回true；否则为false</returns>
}

twaver.AlarmState.prototype.removeAllAcknowledgedAlarms = function (severity) {
/// <summary>
/// 	删除指定告警级别的所有确认告警
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">指定的告警级别</param>
}

twaver.AlarmState.prototype.removeAllNewAlarms = function (severity) {
/// <summary>
/// 	删除指定告警级别的所有新发告警
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">指定的告警级别</param>
}

twaver.AlarmState.prototype.setAcknowledgedAlarmCount = function (severity, count) {
/// <summary>
/// 	设置指定级别的确认告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <param name="count" type="Number">告警级别的数量</param>
}

twaver.AlarmState.prototype.setEnablePropagation = function (enablePropagation) {
/// <summary>
/// 	设置是否允许传播告警
/// </summary>
/// <param name="enablePropagation" type="Boolean">如果孩子的告警可以传播到父亲上，则为true，否则为false</param>
}

twaver.AlarmState.prototype.setNewAlarmCount = function (severity, count) {
/// <summary>
/// 	设置指定级别的新发告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">告警级别</param>
/// <param name="count" type="Number">告警级别的数量</param>
}

twaver.AlarmState.prototype.setPropagateSeverity = function (propagateSeverity) {
/// <summary>
/// 	设置传播告警的级别。网元上的传播告警级别默认是取的孩子上的最高告警级别
/// </summary>
/// <param name="propagateSeverity" type="twaver.AlarmSeverity">传播告警级别的值</param>
}


twaver.animate.Animate = function () {
/// <summary>
/// 	动画处理基类，用于渐变地改变网元位置、大小，组件的滚动条位置、缩放比例等
/// </summary>
/// <returns type="twaver.animate.Animate"></returns>
}

twaver.animate.Animate.prototype.action = function (rate) {
/// <summary>
/// 	动画每帧执行的动作，子类重载此方法实现自定义动画效果
/// </summary>
/// <param name="rate" type="Number">动画完成进度</param>
}

twaver.animate.Animate.prototype.current = function () {
/// <field type="Number">当前帧索引</field>
}

twaver.animate.Animate.prototype.delay = function () {
/// <field type="Number">动画的每一帧之间等待时间，默认值为4毫秒</field>
}

twaver.animate.Animate.prototype.finishFunction = function () {
/// <field type="Function">回调函数:动画结束后执行的动作</field>
}

twaver.animate.Animate.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回此类的字符串类名</returns>
}

twaver.animate.Animate.prototype.getCurrentDelay = function () {
/// <summary>
/// 	获取当前帧的延迟毫秒数，默认实现为每帧延迟毫秒数乘以当前帧索引，动画表现出由快到慢的渐变过程
/// </summary>
/// <returns type="Number">返回当前帧的延迟毫秒数</returns>
}

twaver.animate.Animate.prototype.shouldBeFinished = function () {
/// <field type="Boolean">下一个动画是否等待当前动画结束，默认值为false</field>
}

twaver.animate.Animate.prototype.step = function () {
/// <field type="Number">动画帧数，默认值为8</field>
}


twaver.BundleLinks = function (links, siblings) {
/// <summary>
/// 	这个类是用于管理绑定链路的集合
/// </summary>
/// <param name="links" type="twaver.List">绑定链路的集合</param>
/// <param name="siblings" type="twaver.List">所有的兄弟链路</param>
/// <returns type="twaver.BundleLinks">绑定链路对象本身</returns>
}

twaver.BundleLinks.prototype.forEachSiblingLink = function (f, scope) {
/// <summary>
/// 	遍历所有的兄弟链路。
/// </summary>
/// <param name="f" type="Function">遍历链路时的回调函数</param>
/// <param name="scope" type="Object">回调函数的作用域。为空时指的是window</param>
}

twaver.BundleLinks.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.BundleLinks.prototype.getLinks = function () {
/// <summary>
/// 	获取所有绑定的链路
/// </summary>
/// <returns type="twaver.List">绑定链路的集合</returns>
}

twaver.BundleLinks.prototype.getSiblings = function () {
/// <summary>
/// 	获取所有的兄弟链路
/// </summary>
/// <returns type="twaver.List">兄弟链路的集合</returns>
}


twaver.canvas.Attachment = function (elementUI, showInTop) {
/// <summary>
/// 	所有附件的基类，附件是和网元视图关联的视图对象，用于显示网元的附属信息，例如告警、名称标签、图标等。可以定义附件是否显示在最上层，也即会遮挡网元；为了让告警信息不被其他网元遮挡，告警等附件默认显示在最上层，也即告警显示在所有网元的上面
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInTop" type="Boolean">附件是否显示在最上层, 可选, 默认值为false</param>
/// <returns type="twaver.canvas.Attachment"></returns>
}

twaver.canvas.Attachment.prototype.getAlpha = function () {
/// <summary>
/// 	获取附件透明度，默认值为1
/// </summary>
/// <returns type="String"></returns>
}

twaver.canvas.Attachment.prototype.getClassName = function () {
/// <summary>
/// 	获取字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.canvas.Attachment.prototype.getElement = function () {
/// <summary>
/// 	获取和附件关联的网元
/// </summary>
/// <returns type="twaver.Element">返回和附件关联的网元</returns>
}

twaver.canvas.Attachment.prototype.getElementUI = function () {
/// <summary>
/// 	获取和附件关联的网元视图
/// </summary>
/// <returns type="twaver.canvas.ElementUI">返回和附件关联的网元视图</returns>
}

twaver.canvas.Attachment.prototype.getFont = function (styleProp) {
/// <summary>
/// 	获取附件的字体
/// </summary>
/// <param name="styleProp" type="String">样式名称</param>
/// <returns type="String">返回附件的字体</returns>
}

twaver.canvas.Attachment.prototype.getNetwork = function () {
/// <summary>
/// 	获取和附件关联的拓扑
/// </summary>
/// <returns type="twaver.canvas.Network">返回和附件关联的拓扑</returns>
}

twaver.canvas.Attachment.prototype.getStyle = function (styleProp) {
/// <summary>
/// 	获取指定样式的值，封装了Element#getStyle方法
/// </summary>
/// <param name="styleProp" type="String">样式名称</param>
/// <returns type="Object">返回指定样式的值</returns>
}

twaver.canvas.Attachment.prototype.getViewRect = function () {
/// <summary>
/// 	获取附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
/// </summary>
/// <returns type="Object">返回附件视图的位置及大小，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.Attachment.prototype.hit = function (x, y) {
/// <summary>
/// 	命中测试，判断点击指定坐标点是否能选中附件
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">如果点击指定坐标能选中附件，则返回true，否者返回false</returns>
}

twaver.canvas.Attachment.prototype.hitCanvasRect = function (rect) {
/// <summary>
/// 	命中测试，判断附件是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Boolean">返回附件是否包含指定区域</returns>
}

twaver.canvas.Attachment.prototype.isShowOnTop = function () {
/// <summary>
/// 	获取附件是否显示在最上层
/// </summary>
/// <returns type="Boolean">返回附件是否显示在最上层</returns>
}

twaver.canvas.Attachment.prototype.paint = function (ctx) {
/// <summary>
/// 	绘制附件, 子类重载此方法绘制子类自己
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.Attachment.prototype.setShowOnTop = function (t) {
/// <summary>
/// 	设置附件是否显示在最上层
/// </summary>
/// <param name="t" type="Boolean">附件是否显示在最上层</param>
}

twaver.canvas.Attachment.prototype.validate = function () {
/// <summary>
/// 	更新属性, 并重新计算附件大小和位置
/// </summary>
}


twaver.canvas.ElementUI = function (network, element) {
/// <summary>
/// 	网元对应的视图对象，是所有网元视图（LinkUI、NodeUI等）的基类，代表网元在拓扑视图上的可视实体
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.network.ElementUI"></returns>
}

twaver.canvas.ElementUI.prototype.addAttachment = function (attachment) {
/// <summary>
/// 	添加附件，如果showInAttachmentDiv为true，则附件被添加到拓扑的附件层（attachmentDiv），否则附件被添加到网元视图上
/// </summary>
/// <param name="attachment" type="twaver.network.Attachment">附件</param>
}

twaver.canvas.ElementUI.prototype.addBodyBounds = function (rect) {
/// <summary>
/// 	添加内容区域，所有内容区域合并后构成unionBodyBounds
/// </summary>
/// <param name="rect" type="Object">区域，值为包含x、y、width和height属性的Object对象</param>
}

twaver.canvas.ElementUI.prototype.appendShadowBound = function (part, rect) {
/// <summary>
/// 	给指定区域添加阴影区域
/// </summary>
/// <param name="part" type="Object">要添加阴影的对象</param>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Object">添加阴影后的区域</returns>
}

twaver.canvas.ElementUI.prototype.checkAlarmAttachment = function () {
/// <summary>
/// 	检查是否显示告警附件，如果Network#getAlarmLabel(element)返回null或空字符串，则不显示
/// </summary>
}

twaver.canvas.ElementUI.prototype.checkAttachments = function () {
/// <summary>
/// 	检查所有附件是否显示，网元刷新时（validate）被调用，包括告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
/// </summary>
}

twaver.canvas.ElementUI.prototype.checkEditAttachment = function () {
/// <summary>
/// 	检查是否显示编辑附件，如果此网元可选中（Network#isSelected(element)返回true），而且可编辑（Network#isEditable(element)返回true），而且此网元视图可编辑（isEditable()返回true），则显示，否则不显示
/// </summary>
}

twaver.canvas.ElementUI.prototype.checkIconsAttachment = function () {
/// <summary>
/// 	检查是否显示图标组附件，如果Network#getIconsNames(element)返回null或者length为0，则不显示
/// </summary>
}

twaver.canvas.ElementUI.prototype.checkLabelAttachment = function () {
/// <summary>
/// 	检查是否显示标签附件，如果Network#getLabel(element)返回null或空字符串，则不显示
/// </summary>
}

twaver.canvas.ElementUI.prototype.clearShadow = function (ctx) {
/// <summary>
/// 	清除阴影
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.canvas.ElementUI.prototype.getAlarmAttachment = function () {
/// <summary>
/// 	获取告警附件
/// </summary>
/// <returns type="twaver.network.AlarmAttachment">返回告警附件</returns>
}

twaver.canvas.ElementUI.prototype.getAttachments = function () {
/// <summary>
/// 	获取所有附件集合，包含告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
/// </summary>
/// <returns type="twaver.List">返回所有附件集合</returns>
}

twaver.canvas.ElementUI.prototype.getBodyRect = function () {
/// <summary>
/// 	获得内容区域，默认为createBodyRect返回的结果
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.ElementUI.prototype.getClassName = function () {
/// <summary>
/// 	获取该类字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.canvas.ElementUI.prototype.getDyeColor = function (styleProp) {
/// <summary>
/// 	获取指定样式的渲染颜色，如果innerColor不为空则返回innerColor，否则返回指定样式的值
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="String">返回渲染颜色</returns>
}

twaver.canvas.ElementUI.prototype.getEditAttachment = function () {
/// <summary>
/// 	获取编辑附件
/// </summary>
/// <returns type="twaver.network.EditAttachment">返回编辑附件</returns>
}

twaver.canvas.ElementUI.prototype.getElement = function () {
/// <summary>
/// 	获取和网元视图关联的网元
/// </summary>
/// <returns type="twaver.Element">返回和网元视图关联的网元</returns>
}

twaver.canvas.ElementUI.prototype.getFont = function (styleProp) {
/// <summary>
/// 	获取给定样式属性的值作为字体，如果指定样式的值是null，则返回twaver.Defaults.FONT
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="String">返回字体</returns>
}

twaver.canvas.ElementUI.prototype.getHotSpot = function () {
/// <summary>
/// 	获取热点，用于定位附件等的位置
/// </summary>
/// <returns type="Object">返回热点，值为包含x和y属性的Object对象</returns>
}

twaver.canvas.ElementUI.prototype.getIconsAttachment = function () {
/// <summary>
/// 	获取图标组附件
/// </summary>
/// <returns type="twaver.network.IconsAttachment">返回图标组附件</returns>
}

twaver.canvas.ElementUI.prototype.getInnerColor = function () {
/// <summary>
/// 	获取网元填充色
/// </summary>
/// <returns type="String">返回网元填充色</returns>
}

twaver.canvas.ElementUI.prototype.getLabelAttachment = function () {
/// <summary>
/// 	获取标签附件
/// </summary>
/// <returns type="twaver.network.LabelAttachment">返回标签附件</returns>
}

twaver.canvas.ElementUI.prototype.getNetwork = function () {
/// <summary>
/// 	获取和网元视图关联的拓扑
/// </summary>
/// <returns type="twaver.network.Network">返回和网元视图关联的拓扑</returns>
}

twaver.canvas.ElementUI.prototype.getOuterColor = function () {
/// <summary>
/// 	获取网元边框颜色
/// </summary>
/// <returns type="String">返回网元边框颜色</returns>
}

twaver.canvas.ElementUI.prototype.getShadowColor = function () {
/// <summary>
/// 	获取网元选中后阴影颜色
/// </summary>
/// <returns type="String">返回网元选中后阴影颜色</returns>
}

twaver.canvas.ElementUI.prototype.getStyle = function (styleProp) {
/// <summary>
/// 	获取指定样式属性的值，封装了Element.getStyle
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="Object">返回指定样式属性的值</returns>
}

twaver.canvas.ElementUI.prototype.getUnionBodyBounds = function () {
/// <summary>
/// 	获取合并的内容区域
/// </summary>
/// <returns type="Object">返回合并的内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.ElementUI.prototype.getViewRect = function () {
/// <summary>
/// 	获取视图内容区域，包括unionBodyBounds和所有附件的区域
/// </summary>
/// <returns type="Object">返回视图内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.ElementUI.prototype.handlePropertyChange = function (e) {
/// <summary>
/// 	和网元视图关联的网元属性变化时的处理函数，默认实现为调用invalidate方法让网元视图刷新
/// </summary>
/// <param name="e" type="Object">属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.canvas.ElementUI.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	和网元视图关联的网元被选中或取消选中时的处理函数，默认实现为调用invalidate方法让网元视图刷新
/// </summary>
/// <param name="e" type="Object">选择变化事件，包含kind和data属性</param>
}

twaver.canvas.ElementUI.prototype.hit = function (x, y) {
/// <summary>
/// 	命中测试，判断网元视图是否包含指定坐标
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">网元视图是否包含指定坐标，则返回true，否者返回false</returns>
}

twaver.canvas.ElementUI.prototype.hitCanvasPoint = function (x, y) {
/// <summary>
/// 	网元是否包含指定坐标点
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">返回网元是否包含指定坐标点</returns>
}

twaver.canvas.ElementUI.prototype.hitCanvasRect = function (r) {
/// <summary>
/// 	网元是否包含指定区域
/// </summary>
/// <param name="r" type="Object">区域</param>
/// <returns type="Boolean">返回网元是否包含指定区域</returns>
}

twaver.canvas.ElementUI.prototype.hitCanvasRectAtAttachments = function (rect) {
/// <summary>
/// 	网元附件是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Boolean">返回网元附件是否包含指定区域</returns>
}

twaver.canvas.ElementUI.prototype.hitCanvasRectAtBody = function (rect) {
/// <summary>
/// 	网元主体是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Boolean">返回网元主体是否包含指定区域</returns>
}

twaver.canvas.ElementUI.prototype.hitTest = function (x, y) {
/// <summary>
/// 	获取指定坐标下的视图对象，为附件或者网元视图本身
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Object">返回指定坐标下的视图对象，为附件或者网元视图本身</returns>
}

twaver.canvas.ElementUI.prototype.intersects = function (rect) {
/// <summary>
/// 	判断网元视图是否和指定区域相交
/// </summary>
/// <param name="rect" type="Object">矩形区域，值为包含x、y、width和height属性的Object对象</param>
/// <returns type="Boolean">如果网元视图包含指定矩形区域，则返回true，否则返回false</returns>
}

twaver.canvas.ElementUI.prototype.invalidate = function (checkAttachments) {
/// <param name="checkAttachments" type="String"></param>
}

twaver.canvas.ElementUI.prototype.isEditable = function () {
/// <summary>
/// 	获取网元视图是否可编辑，默认值为true
/// </summary>
/// <returns type="Boolean">如果网元视图可编辑，则返回true，否则返回false</returns>
}

twaver.canvas.ElementUI.prototype.isShadowable = function () {
/// <summary>
/// 	判断是否需要设置阴影，默认实现是如果设置了阴影颜色，而且网元被被选中，而且select.style样式为shadow，则返回true，否则返回false
/// </summary>
/// <returns type="Boolean">如果需要设置阴影，则返回true，否则返回false</returns>
}

twaver.canvas.ElementUI.prototype.paint = function (ctx) {
/// <summary>
/// 	绘制网元视图
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.canvas.ElementUI.prototype.paintAttachment = function (ctx, att) {
/// <summary>
/// 	绘制网元附件
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
/// <param name="att" type="twaver.canvas.Attachment">附件</param>
}

twaver.canvas.ElementUI.prototype.paintAttachments = function (ctx) {
/// <summary>
/// 	绘制网元所有附件
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.canvas.ElementUI.prototype.paintBody = function (ctx) {
/// <summary>
/// 	绘制网元主体
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.canvas.ElementUI.prototype.removeAttachment = function (attachment) {
/// <summary>
/// 	删除指定附件
/// </summary>
/// <param name="attachment" type="twaver.network.Attachment">附件</param>
}

twaver.canvas.ElementUI.prototype.setHotSpot = function (value) {
/// <summary>
/// 	设置热点，用于定位附件等的位置
/// </summary>
/// <param name="value" type="Object">热点，值为包含x和y属性的Object对象</param>
}

twaver.canvas.ElementUI.prototype.setShadow = function (part, canvas, rect) {
/// <summary>
/// 	给指定画布元素设置阴影效果
/// </summary>
/// <param name="part" type="Object">网元视图（ElementUI）或者附件（Attachment）</param>
/// <param name="canvas" type="HTMLCanvasElement">画布元素</param>
/// <param name="rect" type="Object">画图大小及位置，值为包含x、y、width和height属性的Object对象</param>
/// <returns type="CanvasRenderingContext2D">画布渲染内容</returns>
}

twaver.canvas.ElementUI.prototype.updateStyle = function () {
/// <summary>
/// 	更新样式
/// </summary>
}

twaver.canvas.ElementUI.prototype.validate = function () {
/// <summary>
/// 	此方法被Network调用，用以重画网元视图内容，此内部检查所有附件是否可见（checkAttachments），并调用updateMeasure方法重画网元内容，最后调用附件的updateMeasure方法，让附件重画
/// </summary>
}

twaver.canvas.ElementUI.prototype.validateImpl = function () {
/// <summary>
/// 	更新视图
/// </summary>
}


twaver.canvas.interaction.BaseInteraction = function (network) {
/// <summary>
/// 	所有拓扑交互处理器的基类，响应鼠标、键盘以及触摸事件；交互处理器封装了原始鼠标、键盘以及触摸事件，并派发了更加方便易用的交互事件（包含当前事件的数据源（一般为网元或者网元集合）以及动作（比如单击网元、双击网元、双击背景等等））。使用Network#addInteractionListener添加交互处理监听器。用户也可以继承此类实现自定义交互处理器，并通过Network#setInteractions加载交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.BaseInteraction"></returns>
}

twaver.canvas.interaction.BaseInteraction.prototype.addListener = function () {
/// <summary>
/// 	批量添加事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会查找函数名为"handle_"加"事件类型"（handle_mousedown，handle_mousedown）的函数，作为指定事件类型的回调函数。此方法一般在setUp方法里被调用
/// </summary>
}

twaver.canvas.interaction.BaseInteraction.prototype.convertFromUIToMarkerRect = function (vr, xoff, yoff) {
/// <summary>
/// 	获取缩放和便宜后的矩形对象
/// </summary>
/// <param name="vr" type="Object">矩形对象</param>
/// <param name="xoff" type="Number">x轴偏移量</param>
/// <param name="yoff" type="Number">y轴偏移量</param>
/// <returns type="Object">返回缩放和便宜后的矩形对象</returns>
}

twaver.canvas.interaction.BaseInteraction.prototype.convertPointFromView = function (p) {
/// <summary>
/// 	获取缩放和平移后的坐标点
/// </summary>
/// <param name="p" type="Object">坐标点</param>
/// <returns type="Object">返回缩放和平移后的坐标点</returns>
}

twaver.canvas.interaction.BaseInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.canvas.interaction.BaseInteraction.prototype.getMarkerPoint = function (e) {
/// <summary>
/// 	获取鼠标点所在的位置
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回鼠标点所在的位置</returns>
}

twaver.canvas.interaction.BaseInteraction.prototype.paint = function (ctx) {
/// <summary>
/// 	绘制交互模式
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.canvas.interaction.BaseInteraction.prototype.removeListener = function () {
/// <summary>
/// 	批量删除事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会删除指定事件类型的函数名为"hanle_"加"事件类型"（handle_mousedown，handle_mousedown）的监听器。此方法一般在tearDown方法里被调用
/// </summary>
}

twaver.canvas.interaction.BaseInteraction.prototype.repaint = function () {
/// <summary>
/// 	重绘交互模式
/// </summary>
}

twaver.canvas.interaction.BaseInteraction.prototype.setUp = function () {
/// <summary>
/// 	初始化交互处理器，一般调用addListener方法添加鼠标、键盘以及触摸事件监听器；Network#setInteractions会调用此方法
/// </summary>
}

twaver.canvas.interaction.BaseInteraction.prototype.tearDown = function () {
/// <summary>
/// 	销毁交互处理器，一般调用removeListener方法删除鼠标、键盘以及触摸事件监听器；使用Network#setInteractions切换交互处理器时会调用此方法撤销旧的交互处理器
/// </summary>
}


twaver.canvas.OverviewInteraction = function (overview) {
/// <summary>
/// 	鹰眼交互处理器
/// </summary>
/// <param name="overview" type="twaver.network.Overview">鹰眼</param>
/// <returns type="twaver.network.OverviewInteraction"></returns>
}

twaver.canvas.OverviewInteraction.prototype.clear = function () {
/// <summary>
/// 	清除拖动鼠标和松开鼠标监听
/// </summary>
}

twaver.canvas.OverviewInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.canvas.OverviewInteraction.prototype.handleMousedown = function (e) {
/// <summary>
/// 	按下鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.OverviewInteraction.prototype.handleMousemove = function (e) {
/// <summary>
/// 	拖动鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.OverviewInteraction.prototype.handleMouseup = function (e) {
/// <summary>
/// 	松开鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.canvas.OverviewMSTouchInteraction = function (overview) {
/// <summary>
/// 	鹰眼触摸交互处理器
/// </summary>
/// <param name="overview" type="twaver.canvas.Overview">鹰眼</param>
/// <returns type="twaver.canvas.OverviewMSTouchInteraction"></returns>
}

twaver.canvas.OverviewMSTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.canvas.OverviewMSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.OverviewMSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.OverviewMSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.canvas.OverviewTouchInteraction = function (overview) {
/// <summary>
/// 	鹰眼触摸交互处理器
/// </summary>
/// <param name="overview" type="twaver.network.Overview">鹰眼</param>
/// <returns type="twaver.network.OverviewTouchInteraction"></returns>
}

twaver.canvas.OverviewTouchInteraction.prototype.clear = function () {
/// <summary>
/// 	清除拖动鼠标和松开鼠标监听
/// </summary>
}

twaver.canvas.OverviewTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.canvas.OverviewTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	触摸结束时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.OverviewTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	触摸移动时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.OverviewTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	触摸开始时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.charts.ChartInteraction = function (chart) {
/// <summary>
/// 	图表交互处理器
/// </summary>
/// <param name="chart" type="twaver.charts.ChartBase">图表</param>
/// <returns type="twaver.charts.ChartInteraction"></returns>
}

twaver.charts.ChartInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.charts.ChartInteraction.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.charts.ChartInteraction.prototype.handleMouseMove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.charts.ChartInteraction.prototype.handleMouseUp = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.charts.ChartInteraction.prototype.handleMouseWheel = function (e) {
/// <summary>
/// 	处理鼠标滚轮事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.charts.ChartMSTouchInteraction = function (chart) {
/// <summary>
/// 	图表触摸交互处理器
/// </summary>
/// <param name="chart" type="twaver.charts.ChartBase">图表</param>
/// <returns type="twaver.charts.ChartMSTouchInteraction"></returns>
}

twaver.charts.ChartMSTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.charts.ChartMSTouchInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.charts.ChartMSTouchInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.charts.ChartMSTouchInteraction.prototype.handleMouseWheel = function (e) {
/// <summary>
/// 	处理鼠标滚轮事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.charts.ChartMSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.charts.ChartMSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.charts.ChartMSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.charts.ChartTouchInteraction = function (chart) {
/// <summary>
/// 	图表触摸交互处理器
/// </summary>
/// <param name="chart" type="twaver.charts.ChartBase">图表</param>
/// <returns type="twaver.charts.ChartTouchInteraction"></returns>
}

twaver.charts.ChartTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.charts.ChartTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.charts.ChartTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.charts.ChartTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.charts.LegendPaneInteraction = function (legendPane) {
/// <summary>
/// 	图表图例交互处理器
/// </summary>
/// <param name="legendPane" type="twaver.charts.LegendPane">图表图例</param>
/// <returns type="twaver.charts.LegendPaneInteraction"></returns>
}

twaver.charts.LegendPaneInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.charts.LegendPaneInteraction.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.charts.LegendPaneTouchInteraction = function (legendPane) {
/// <summary>
/// 	图表图例触摸交互处理器
/// </summary>
/// <param name="legendPane" type="twaver.charts.LegendPane">图表图例</param>
/// <returns type="twaver.charts.LegendPaneTouchInteraction"></returns>
}

twaver.charts.LegendPaneTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.charts.LegendPaneTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.controls.ListBaseInteraction = function (listBase) {
/// <summary>
/// 	列表控件交互处理器
/// </summary>
/// <param name="listBase" type="twaver.controls.ListBase">列表基类</param>
/// <returns type="twaver.controls.ListBaseInteraction"></returns>
}

twaver.controls.ListBaseInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回此类的字符串类名</returns>
}

twaver.controls.ListBaseInteraction.prototype.handleKeyDown = function (e) {
/// <summary>
/// 	处理键盘按下事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.controls.ListBaseInteraction.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.ListBaseInteraction.prototype.handleScroll = function (e) {
/// <summary>
/// 	处理滚动事件
/// </summary>
/// <param name="e" type="Event">滚动事件</param>
}


twaver.controls.ListBaseTouchInteraction = function (listBase) {
/// <summary>
/// 	列表控件触摸交互处理器
/// </summary>
/// <param name="listBase" type="twaver.controls.ListBase">列表基类</param>
/// <returns type="twaver.controls.ListBaseTouchInteraction"></returns>
}

twaver.controls.ListBaseTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.ListBaseTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.ListBaseTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.ListBaseTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.controls.PopupMenu = function (contextView) {
/// <summary>
/// 	创建右键菜单
/// </summary>
/// <param name="contextView" type="Object">HTML元素或者twaver.controles.ControlBase对象</param>
/// <returns type="twaver.controls.PopupMenu">返回右键菜单对象</returns>
}

twaver.controls.PopupMenu.prototype.addMenuItem = function (menuItem) {
/// <summary>
/// 	添加菜单项
/// </summary>
/// <param name="menuItem" type="Object">包含id, type, icon, label, visible, enabled, separator, action, items, selected, groupName属性的对象</param>
}

twaver.controls.PopupMenu.prototype.addSeparator = function () {
/// <summary>
/// 	添加分隔条
/// </summary>
}

twaver.controls.PopupMenu.prototype.dispose = function () {
/// <summary>
/// 	销毁右键菜单对象，删除关联的视图的右键事件
/// </summary>
}

twaver.controls.PopupMenu.prototype.getBackground = function () {
/// <summary>
/// 	获取背景颜色
/// </summary>
/// <returns type="String">返回背景颜色</returns>
}

twaver.controls.PopupMenu.prototype.getBorder = function () {
/// <summary>
/// 	获取边框颜色
/// </summary>
/// <returns type="String">返回边框颜色</returns>
}

twaver.controls.PopupMenu.prototype.getCheckboxSelectedIcon = function () {
/// <summary>
/// 	返回勾选框在选中状态时的图标名称
/// </summary>
/// <returns type="String">获取勾选框在选中状态时的图标名称</returns>
}

twaver.controls.PopupMenu.prototype.getCheckboxUnselectedIcon = function () {
/// <summary>
/// 	获取勾选框在未选中状态时的图标名称
/// </summary>
/// <returns type="String">返回勾选框在未选中状态时的图标名称</returns>
}

twaver.controls.PopupMenu.prototype.getClassName = function () {
/// <summary>
/// 	获取类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.controls.PopupMenu.prototype.getContextView = function () {
/// <summary>
/// 	获取右键菜单关联的视图对象
/// </summary>
/// <returns type="Object">返回视图对象</returns>
}

twaver.controls.PopupMenu.prototype.getDisabledColor = function () {
/// <summary>
/// 	获取菜单项不可用时的文字颜色
/// </summary>
/// <returns type="String">返回菜单项不可用时的文字颜色</returns>
}

twaver.controls.PopupMenu.prototype.getFocusColor = function () {
/// <summary>
/// 	获取菜单项高亮背景颜色
/// </summary>
/// <returns type="String">返回菜单项高亮背景颜色</returns>
}

twaver.controls.PopupMenu.prototype.getMenuItem = function (id) {
/// <summary>
/// 	根据编号返回菜单项
/// </summary>
/// <param name="id" type="String">编号</param>
/// <returns type="Object">返回菜单项</returns>
}

twaver.controls.PopupMenu.prototype.getMenuItemById = function (id) {
/// <summary>
/// 	根据编号返回菜单项
/// </summary>
/// <param name="id" type="String">编号</param>
/// <returns type="Object">返回菜单项</returns>
}

twaver.controls.PopupMenu.prototype.getMenuItemHeight = function () {
/// <summary>
/// 	获取菜单项高度
/// </summary>
/// <returns type="Number">返回菜单项高度</returns>
}

twaver.controls.PopupMenu.prototype.getMenuItems = function () {
/// <summary>
/// 	获取菜单项数组
/// </summary>
/// <returns type="Array">返回菜单项数组</returns>
}

twaver.controls.PopupMenu.prototype.getRadiobuttonSelectedIcon = function () {
/// <summary>
/// 	获取单选框在选中状态时的图标名称
/// </summary>
/// <returns type="String">返回单选框在选中状态时的图标名称</returns>
}

twaver.controls.PopupMenu.prototype.getRadiobuttonUnselectedIcon = function () {
/// <summary>
/// 	获取单选框在未选中状态时的图标名称
/// </summary>
/// <returns type="String">返回单选框在未选中状态时的图标名称</returns>
}

twaver.controls.PopupMenu.prototype.getSubMenuDisableIcon = function () {
/// <summary>
/// 	获取子菜单项不可用时的图标名称
/// </summary>
/// <returns type="String">返回子菜单项不可用时的图标名称</returns>
}

twaver.controls.PopupMenu.prototype.getSubMenuEnableIcon = function () {
/// <summary>
/// 	获取子菜单项可用时的图标名称
/// </summary>
/// <returns type="String">返回子菜单项可用时的图标名称</returns>
}

twaver.controls.PopupMenu.prototype.getView = function () {
/// <summary>
/// 	获取右键菜单div元素
/// </summary>
/// <returns type="HTMLElement">返回右键菜单div元素</returns>
}

twaver.controls.PopupMenu.prototype.getWidth = function () {
/// <summary>
/// 	获取右键菜单宽度
/// </summary>
/// <returns type="Number">返回右键菜单宽度</returns>
}

twaver.controls.PopupMenu.prototype.hide = function () {
/// <summary>
/// 	隐藏右键菜单
/// </summary>
}

twaver.controls.PopupMenu.prototype.isEnabled = function (menuItem) {
/// <summary>
/// 	获取菜单项是否可用，默认菜单项的enable属性不为false时可用
/// </summary>
/// <param name="menuItem" type="Object">菜单项</param>
/// <returns type="Boolean">返回菜单项是否可用</returns>
}

twaver.controls.PopupMenu.prototype.isVisible = function (menuItem) {
/// <summary>
/// 	获取菜单项是否可见，默认菜单项的visible属性不为false时可用
/// </summary>
/// <param name="menuItem" type="Object">菜单项</param>
/// <returns type="Boolean">返回菜单项是否可见</returns>
}

twaver.controls.PopupMenu.prototype.onAction = function (menuItem) {
/// <summary>
/// 	菜单点击时的回调函数
/// </summary>
/// <param name="menuItem" type="Object">菜单项</param>
}

twaver.controls.PopupMenu.prototype.onMenuItemRendered = function (div, menuItem) {
/// <summary>
/// 	菜单项绘制后的回调函数
/// </summary>
/// <param name="div" type="HTMLDivElement">div元素</param>
/// <param name="menuItem" type="Object">菜单项</param>
}

twaver.controls.PopupMenu.prototype.onMenuShowing = function (e) {
/// <summary>
/// 	菜单显示前的回调函数，如果返回false，则右键菜单不显示
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Boolean">返回值决定右键菜单是否显示</returns>
}

twaver.controls.PopupMenu.prototype.renderMenu = function (view, menuItems) {
/// <summary>
/// 	绘制菜单
/// </summary>
/// <param name="view" type="HTMLDivElement">HTML元素</param>
/// <param name="menuItems" type="Array">菜单项数组</param>
}

twaver.controls.PopupMenu.prototype.renderMenuItem = function (div, menuItem) {
/// <summary>
/// 	绘制菜单项
/// </summary>
/// <param name="div" type="HTMLDivElement">div元素</param>
/// <param name="menuItem" type="Object">菜单项</param>
}

twaver.controls.PopupMenu.prototype.setBackground = function (value) {
/// <summary>
/// 	设置背景色
/// </summary>
/// <param name="value" type="String">背景色</param>
}

twaver.controls.PopupMenu.prototype.setBorder = function (value) {
/// <summary>
/// 	设置边框颜色
/// </summary>
/// <param name="value" type="String">颜色</param>
}

twaver.controls.PopupMenu.prototype.setCheckboxSelectedIcon = function (value) {
/// <summary>
/// 	设置勾选框在选中状态时的图标名称
/// </summary>
/// <param name="value" type="String">勾选框在选中状态时的图标名称</param>
}

twaver.controls.PopupMenu.prototype.setCheckboxUnselectedIcon = function (value) {
/// <summary>
/// 	设置勾选框在未选中状态时的图标名称
/// </summary>
/// <param name="value" type="String">勾选框在未选中状态时的图标名称</param>
}

twaver.controls.PopupMenu.prototype.setContextView = function (contextView) {
/// <summary>
/// 	设置右键菜单关联的视图对象
/// </summary>
/// <param name="contextView" type="Object">右键菜单关联的视图对象</param>
}

twaver.controls.PopupMenu.prototype.setDisabledColor = function (value) {
/// <summary>
/// 	设置菜单项不可用时的文字颜色
/// </summary>
/// <param name="value" type="String">菜单项不可用时的文字颜色</param>
}

twaver.controls.PopupMenu.prototype.setFocusColor = function (value) {
/// <summary>
/// 	设置菜单项高亮背景颜色
/// </summary>
/// <param name="value" type="String">菜单项高亮背景颜色</param>
}

twaver.controls.PopupMenu.prototype.setMenuItemHeight = function (value) {
/// <summary>
/// 	设置菜单项高度
/// </summary>
/// <param name="value" type="Number">菜单项高度</param>
}

twaver.controls.PopupMenu.prototype.setMenuItems = function (menuItems) {
/// <summary>
/// 	设置菜单项数组
/// </summary>
/// <param name="menuItems" type="Array">菜单项数组</param>
}

twaver.controls.PopupMenu.prototype.setRadiobuttonSelectedIcon = function (value) {
/// <summary>
/// 	设置单选框在选中状态时的图标名称
/// </summary>
/// <param name="value" type="String">单选框在选中状态时的图标名称</param>
}

twaver.controls.PopupMenu.prototype.setRadiobuttonUnselectedIcon = function (value) {
/// <summary>
/// 	设置单选框在未选中状态时的图标名称
/// </summary>
/// <param name="value" type="String">单选框在未选中状态时的图标名称</param>
}

twaver.controls.PopupMenu.prototype.setSubMenuDisableIcon = function (value) {
/// <summary>
/// 	设置子菜单项不可用时的图标名称
/// </summary>
/// <param name="value" type="String">子菜单项不可用时的图标名称</param>
}

twaver.controls.PopupMenu.prototype.setSubMenuEnableIcon = function (value) {
/// <summary>
/// 	设置子菜单项可用时的图标名称
/// </summary>
/// <param name="value" type="String">子菜单项可用时的图标名称</param>
}

twaver.controls.PopupMenu.prototype.setWidth = function (value) {
/// <summary>
/// 	设置右键菜单宽度
/// </summary>
/// <param name="value" type="Number">宽度</param>
}

twaver.controls.PopupMenu.prototype.show = function (e) {
/// <summary>
/// 	显示右键菜单
/// </summary>
/// <param name="e" type="Object">鼠标事件</param>
}


twaver.controls.PropertySheetInteraction = function (propertySheet) {
/// <summary>
/// 	属性页交互处理器
/// </summary>
/// <param name="propertySheet" type="twaver.controls.PropertySheet">属性页</param>
/// <returns type="twaver.controls.PropertySheetInteraction"></returns>
}

twaver.controls.PropertySheetInteraction.prototype.changeCursor = function (e) {
/// <summary>
/// 	鼠标移动到列分割线时，更改鼠标样式
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.PropertySheetInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.PropertySheetInteraction.prototype.getX = function (e) {
/// <summary>
/// 	获取当前鼠标相对于属性页的x坐标值
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Number">返回当前鼠标相对于属性页的x坐标值</returns>
}

twaver.controls.PropertySheetInteraction.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.PropertySheetInteraction.prototype.handleMouseMove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.PropertySheetInteraction.prototype.handleMouseUp = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.PropertySheetInteraction.prototype.minGap = function () {
/// <field type="Number">属性页属性和值的最小列宽</field>
}


twaver.controls.PropertySheetTouchInteraction = function (propertySheet) {
/// <summary>
/// 	属性页触摸交互处理器
/// </summary>
/// <param name="propertySheet" type="twaver.controls.PropertySheet">属性页</param>
/// <returns type="twaver.controls.PropertySheetTouchInteraction"></returns>
}

twaver.controls.PropertySheetTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	返回此类的字符串类名
/// </summary>
/// <returns type="String">获取此类的字符串类名</returns>
}

twaver.controls.PropertySheetTouchInteraction.prototype.getX = function (e) {
/// <summary>
/// 	获取当前触摸点相对于属性页的x坐标值
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="Number">返回当前触摸点相对于属性页的x坐标值</returns>
}

twaver.controls.PropertySheetTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.PropertySheetTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.PropertySheetTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.PropertySheetTouchInteraction.prototype.minGap = function () {
/// <field type="Number">属性页属性和值的最小列宽</field>
}


twaver.controls.SplitPaneInteraction = function (splitPane) {
/// <summary>
/// 	分割面板控件交互处理器
/// </summary>
/// <param name="splitPane" type="twaver.controls.SplitPane">分割面板控件</param>
/// <returns type="twaver.controls.SplitPaneInteraction"></returns>
}

twaver.controls.SplitPaneInteraction.prototype.clear = function (e) {
/// <summary>
/// 	清除临时状态，并设置分割线位置
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.SplitPaneInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.SplitPaneInteraction.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.SplitPaneInteraction.prototype.handleMouseMove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.SplitPaneInteraction.prototype.handleMouseUp = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.controls.SplitPaneTouchInteraction = function (splitPane) {
/// <summary>
/// 	分割面板触摸交互处理器
/// </summary>
/// <param name="splitPane" type="twaver.controls.SplitPane">分割面板控件</param>
/// <returns type="twaver.controls.SplitPaneTouchInteraction"></returns>
}

twaver.controls.SplitPaneTouchInteraction.prototype.clear = function (e) {
/// <summary>
/// 	清除临时状态，并设置分割线位置
/// </summary>
/// <param name="e" type="TouchEvent"></param>
}

twaver.controls.SplitPaneTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.SplitPaneTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.SplitPaneTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.SplitPaneTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.controls.TableHeaderInteraction = function (tableHeader) {
/// <summary>
/// 	表头控件交互处理器
/// </summary>
/// <param name="tableHeader" type="twaver.controls.TableHeader">表头控件</param>
/// <returns type="twaver.controls.TableHeaderInteraction"></returns>
}

twaver.controls.TableHeaderInteraction.prototype.changeCursor = function (e) {
/// <summary>
/// 	根据当前操作，更改鼠标样式
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.TableHeaderInteraction.prototype.clear = function () {
/// <summary>
/// 	清除临时状态，而且如果当前操作是移动列，则执行移动列动作
/// </summary>
}

twaver.controls.TableHeaderInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.TableHeaderInteraction.prototype.getColumnAt = function (e) {
/// <summary>
/// 	获取当前鼠标下的列
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Column">返回当前鼠标下的列</returns>
}

twaver.controls.TableHeaderInteraction.prototype.getColumnInfoAt = function (e) {
/// <summary>
/// 	获取当前鼠标下的列信息
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回当前鼠标下的列信息</returns>
}

twaver.controls.TableHeaderInteraction.prototype.getMovableDivAt = function (e) {
/// <summary>
/// 	获取当前鼠标下可移动列的HTML元素
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="HTMLDivElement">返回当前鼠标下可移动列的HTML元素</returns>
}

twaver.controls.TableHeaderInteraction.prototype.getX = function (e) {
/// <summary>
/// 	获取当前鼠标相对于表头的x坐标值
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Number">返回当前鼠标相对于表头的x坐标值</returns>
}

twaver.controls.TableHeaderInteraction.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.TableHeaderInteraction.prototype.handleMouseMove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.TableHeaderInteraction.prototype.handleMouseUp = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.controls.TableHeaderTouchInteraction = function (tableHeader) {
/// <summary>
/// 	表头控件触摸交互处理器
/// </summary>
/// <param name="tableHeader" type="twaver.controls.TableHeader">表头控件</param>
/// <returns type="twaver.controls.TableHeaderTouchInteraction"></returns>
}

twaver.controls.TableHeaderTouchInteraction.prototype.clear = function () {
/// <summary>
/// 	清除零时状态，而且如果当前操作是移动列，则执行移动列动作
/// </summary>
}

twaver.controls.TableHeaderTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.TableHeaderTouchInteraction.prototype.getColumnAt = function (e) {
/// <summary>
/// 	获取当前触摸点下的列
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="twaver.Column">返回当前触摸点下的列</returns>
}

twaver.controls.TableHeaderTouchInteraction.prototype.getColumnInfoAt = function (e) {
/// <summary>
/// 	获取当前触摸点下的列信息
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="Object">返回当前触摸点下的列信息</returns>
}

twaver.controls.TableHeaderTouchInteraction.prototype.getMovableDivAt = function (e) {
/// <summary>
/// 	获取当前触摸点下可移动列的HTML元素
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="HTMLDivElement">返回当前触摸点下可移动列的HTML元素</returns>
}

twaver.controls.TableHeaderTouchInteraction.prototype.getX = function (e) {
/// <summary>
/// 	获取当前触摸点相对于表头的x坐标值
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="Number">返回当前触摸点相对于表头的x坐标值</returns>
}

twaver.controls.TableHeaderTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.TableHeaderTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.TableHeaderTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.controls.TabPaneInteraction = function (tabPane) {
/// <summary>
/// 	选项卡面板交互处理器
/// </summary>
/// <param name="tabPane" type="twaver.controls.TabPane">选项卡面板控件</param>
/// <returns type="twaver.controls.TabPaneInteraction"></returns>
}

twaver.controls.TabPaneInteraction.prototype.changeCursor = function (e) {
/// <summary>
/// 	根据当前操作，更改鼠标样式
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.TabPaneInteraction.prototype.clear = function () {
/// <summary>
/// 	清除临时状态，而且如果当前操作是移动选项卡，则执行移动选项卡动作
/// </summary>
}

twaver.controls.TabPaneInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.TabPaneInteraction.prototype.getMovableDivAt = function (e) {
/// <summary>
/// 	获取当前鼠标下可移动选项卡的HTML元素
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="HTMLDivElement">返回当前鼠标下可移动选项卡的HTML元素</returns>
}

twaver.controls.TabPaneInteraction.prototype.getTabAt = function (e) {
/// <summary>
/// 	获取当前鼠标下的选项卡
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Tab">返回当前鼠标下的选项卡</returns>
}

twaver.controls.TabPaneInteraction.prototype.getTabInfoAt = function (e) {
/// <summary>
/// 	获取当前鼠标下的选项卡信息
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回当前鼠标下的选项卡信息</returns>
}

twaver.controls.TabPaneInteraction.prototype.getX = function (e) {
/// <summary>
/// 	获取当前鼠标相对于选项卡的x坐标值
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Number">返回当前鼠标相对于选项卡的x坐标值</returns>
}

twaver.controls.TabPaneInteraction.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.TabPaneInteraction.prototype.handleMouseMove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.controls.TabPaneInteraction.prototype.handleMouseUp = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.controls.TabPaneTouchInteraction = function (tabPane) {
/// <summary>
/// 	选项卡面板触摸交互处理器
/// </summary>
/// <param name="tabPane" type="twaver.controls.TabPane">选项卡面板控件</param>
/// <returns type="twaver.controls.TabPaneTouchInteraction"></returns>
}

twaver.controls.TabPaneTouchInteraction.prototype.clear = function () {
/// <summary>
/// 	清除临时状态，而且如果当前操作是移动选项卡，则执行移动选项卡动作
/// </summary>
}

twaver.controls.TabPaneTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类字符串类名
/// </summary>
/// <returns type="String">返回此类字符串类名</returns>
}

twaver.controls.TabPaneTouchInteraction.prototype.getMovableDivAt = function (e) {
/// <summary>
/// 	获取当前触摸点下可移动选项卡的HTML元素
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="HTMLDivElement">返回当前触摸点下可移动选项卡的HTML元素</returns>
}

twaver.controls.TabPaneTouchInteraction.prototype.getTabAt = function (e) {
/// <summary>
/// 	获取当前触摸点下的选项卡
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="twaver.Tab">返回当前触摸点下的选项卡</returns>
}

twaver.controls.TabPaneTouchInteraction.prototype.getTabInfoAt = function (e) {
/// <summary>
/// 	获取当前触摸点下的选项卡信息
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="Object">返回当前触摸点下的选项卡信息</returns>
}

twaver.controls.TabPaneTouchInteraction.prototype.getX = function (e) {
/// <summary>
/// 	获取当前触摸点相对于选项卡面板的x坐标值
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
/// <returns type="Number">返回当前触摸点相对于选项卡面板的x坐标值</returns>
}

twaver.controls.TabPaneTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.TabPaneTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.TabPaneTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.Defaults = function () {
/// <field type="Object"></field>
}

twaver.Defaults.ACCORDION_BORDER_BOTTOM_COLOR = function () {
/// <field type="String">可折叠面板的底部边框颜色, 默认值为lightgray</field>
}

twaver.Defaults.ACCORDION_COLLAPSE_ICON = function () {
/// <field type="String">可折叠面板收缩后的图标, 默认为collapse_icon</field>
}

twaver.Defaults.ACCORDION_EXPAND_ICON = function () {
/// <field type="String">可折叠面板展开后的图标, 默认值为expand_icon</field>
}

twaver.Defaults.ACCORDION_ICON_POSITION = function () {
/// <field type="String">可折叠面板图标位置，默认为'left'，可选值为'left', 'right'</field>
}

twaver.Defaults.ACCORDION_TITLE_BACKGROUND = function () {
/// <field type="String">可折叠面板标题背景颜色, 默认值为#EBEBEB</field>
}

twaver.Defaults.ACCORDION_TITLE_HEIGHT = function () {
/// <field type="Number">可折叠面板的标题高度, 默认值为20</field>
}

twaver.Defaults.ATTACHMENT_CAP = function () {
/// <field type="String">附件画连线时, 线条两端的样式, 默认值为butt</field>
}

twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT = function () {
/// <field type="Number">附件内容高度, 默认值为20</field>
}

twaver.Defaults.ATTACHMENT_CONTENT_WIDTH = function () {
/// <field type="Number">附件内容宽度, 默认值为30</field>
}

twaver.Defaults.ATTACHMENT_CORNER_RADIUS = function () {
/// <field type="Number">附件圆角半径, 默认值为5</field>
}

twaver.Defaults.ATTACHMENT_DIRECTION = function () {
/// <field type="String">附件显示的方向, 默认值为right</field>
}

twaver.Defaults.ATTACHMENT_FILL = function () {
/// <field type="Boolean">附件是否填充, 默认值为false</field>
}

twaver.Defaults.ATTACHMENT_FILL_COLOR = function () {
/// <field type="String">附件填充颜色, 默认值为#000000</field>
}

twaver.Defaults.ATTACHMENT_GRADIENT = function () {
/// <field type="String">附件渐变色填充样式, 默认值为null, 表示不用渐变色填充</field>
}

twaver.Defaults.ATTACHMENT_GRADIENT_COLOR = function () {
/// <field type="String">附件渐变填充颜色, 默认值为#FFFFFF</field>
}

twaver.Defaults.ATTACHMENT_JOIN = function () {
/// <field type="String">附件画线时，线条连接点样式, 默认值为miter</field>
}

twaver.Defaults.ATTACHMENT_OUTLINE_COLOR = function () {
/// <field type="String">附件边框颜色, 默认值为#000000</field>
}

twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH = function () {
/// <field type="Number">附件边框宽度, 默认值为-1</field>
}

twaver.Defaults.ATTACHMENT_PADDING = function () {
/// <field type="Number">附件内容和边界之间的间距, 默认值为0</field>
}

twaver.Defaults.ATTACHMENT_PADDING_BOTTOM = function () {
/// <field type="Number">附件内容和下边界之间的间距, 默认值为0</field>
}

twaver.Defaults.ATTACHMENT_PADDING_LEFT = function () {
/// <field type="Number">附件内容和左边界之间的间距, 默认值为0</field>
}

twaver.Defaults.ATTACHMENT_PADDING_RIGHT = function () {
/// <field type="Number">附件内容和右边界之间的间距, 默认值为0</field>
}

twaver.Defaults.ATTACHMENT_PADDING_TOP = function () {
/// <field type="Number">附件内容和上边界之间的间距, 默认值为0</field>
}

twaver.Defaults.ATTACHMENT_POINTER_LENGTH = function () {
/// <field type="Number">附件箭头长度, 默认值为10</field>
}

twaver.Defaults.ATTACHMENT_POINTER_WIDTH = function () {
/// <field type="Number">附件箭头宽度, 默认值为8</field>
}

twaver.Defaults.ATTACHMENT_POSITION = function () {
/// <field type="String">附件相对于网元位置, 默认值为topright.topright</field>
}

twaver.Defaults.ATTACHMENT_SHADOWABLE = function () {
/// <field type="Boolean">附件选中时是否有阴影效果, 默认值为true</field>
}

twaver.Defaults.ATTACHMENT_XOFFSET = function () {
/// <field type="Number">附件x轴偏移量, 默认值为0</field>
}

twaver.Defaults.ATTACHMENT_YOFFSET = function () {
/// <field type="Number">附件y轴偏移量, 默认值为0</field>
}

twaver.Defaults.BARCHART_LOWER_LIMIT = function () {
/// <field type="Number">柱状图y轴最小值, 默认值为0</field>
}

twaver.Defaults.BARCHART_TYPE = function () {
/// <field type="String">柱状图类型, 默认值为default</field>
}

twaver.Defaults.BARCHART_UPPER_LIMIT = function () {
/// <field type="Object">柱状图y轴最大值, 默认值为null, 表示未设置</field>
}

twaver.Defaults.BARCHART_XAXIS_LINE_COLOR = function () {
/// <field type="String">柱状图x轴线条颜色, 默认值为#808080</field>
}

twaver.Defaults.BARCHART_XAXIS_LINE_WIDTH = function () {
/// <field type="Number">柱状图x轴线条宽度, 默认值为1</field>
}

twaver.Defaults.BARCHART_XAXIS_TEXT_COLOR = function () {
/// <field type="String">柱状图x轴文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BARCHART_XAXIS_TEXT_FONT = function () {
/// <field type="String">柱状图x轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BARCHART_XSCALE_TEXT_COLOR = function () {
/// <field type="String">柱状图x轴刻度文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BARCHART_XSCALE_TEXT_FONT = function () {
/// <field type="String">柱状图x轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BARCHART_XSCALE_TEXT_ORIENTATION = function () {
/// <field type="String">柱状图x轴刻度文字方向, 默认值为horizontal</field>
}

twaver.Defaults.BARCHART_YAXIS_LINE_COLOR = function () {
/// <field type="String">柱状图y轴线条颜色, 默认值为#808080</field>
}

twaver.Defaults.BARCHART_YAXIS_LINE_WIDTH = function () {
/// <field type="Number">柱状图y轴线条宽度, 默认值为1</field>
}

twaver.Defaults.BARCHART_YAXIS_TEXT_COLOR = function () {
/// <field type="String">柱状图y轴文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BARCHART_YAXIS_TEXT_FONT = function () {
/// <field type="String">柱状图y轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BARCHART_YSCALE_LINE_COLOR = function () {
/// <field type="String">柱状图y轴刻度线条颜色, 默认值为#808080</field>
}

twaver.Defaults.BARCHART_YSCALE_LINE_WIDTH = function () {
/// <field type="Number">柱状图y轴刻度线条宽度, 默认值为0.3</field>
}

twaver.Defaults.BARCHART_YSCALE_MIN_TEXT_VISIBLE = function () {
/// <field type="Boolean">柱状图y轴最小刻度文字是否可见, 默认值为false</field>
}

twaver.Defaults.BARCHART_YSCALE_PIXEL_GAP = function () {
/// <field type="Number">柱状图y轴刻度线间隔(按像素), 默认值为20</field>
}

twaver.Defaults.BARCHART_YSCALE_TEXT_COLOR = function () {
/// <field type="String">柱状图y轴刻度文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BARCHART_YSCALE_TEXT_FONT = function () {
/// <field type="String">柱状图y轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BARCHART_YSCALE_TEXT_VISIBLE = function () {
/// <field type="Boolean">柱状图y轴刻度文字是否可见, 默认值为true</field>
}

twaver.Defaults.BARCHART_YSCALE_VALUE_GAP = function () {
/// <field type="Number">柱状图y轴刻度线间隔(按值), 默认值为0</field>
}

twaver.Defaults.BORDERPANE_HGAP = function () {
/// <field type="Number">布局面板水平间距, 默认值为0</field>
}

twaver.Defaults.BORDERPANE_VGAP = function () {
/// <field type="Number">布局面板垂直间距, 默认值为0</field>
}

twaver.Defaults.BUBBLECHART_LOWER_LIMIT = function () {
/// <field type="Object">气泡图y轴最小值, 默认值为null, 表示没有最小值</field>
}

twaver.Defaults.BUBBLECHART_SELECT_SHADOW_COLOR = function () {
/// <field type="String">气泡图选中阴影颜色, 默认值为#000000</field>
}

twaver.Defaults.BUBBLECHART_SELECT_SHADOW_OFFSET = function () {
/// <field type="Number">气泡图选中阴影偏移量, 默认值为3</field>
}

twaver.Defaults.BUBBLECHART_UPPER_LIMIT = function () {
/// <field type="Object">气泡图y轴最大值, 默认值为null, 表示没有最大值</field>
}

twaver.Defaults.BUBBLECHART_XAXIS_LINE_COLOR = function () {
/// <field type="String">气泡图x轴线条颜色, 默认值为#808080</field>
}

twaver.Defaults.BUBBLECHART_XAXIS_LINE_WIDTH = function () {
/// <field type="Number">气泡图x轴线条宽度, 默认值为1</field>
}

twaver.Defaults.BUBBLECHART_XAXIS_LOWER_LIMIT = function () {
/// <field type="Object">气泡图x轴最小值, 默认值为null, 表示无最小值</field>
}

twaver.Defaults.BUBBLECHART_XAXIS_TEXT_COLOR = function () {
/// <field type="String">气泡图x轴文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BUBBLECHART_XAXIS_TEXT_FONT = function () {
/// <field type="String">气泡图x轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BUBBLECHART_XAXIS_UPPER_LIMIT = function () {
/// <field type="Object">气泡图x轴最大值, 默认值为null, 表示无最大值</field>
}

twaver.Defaults.BUBBLECHART_XSCALE_LINE_COLOR = function () {
/// <field type="String">气泡图x轴刻度线条颜色, 默认值为#808080</field>
}

twaver.Defaults.BUBBLECHART_XSCALE_LINE_WIDTH = function () {
/// <field type="Number">气泡图x轴刻度线条宽度, 默认值为0.3</field>
}

twaver.Defaults.BUBBLECHART_XSCALE_TEXT_COLOR = function () {
/// <field type="String">气泡图x轴刻度文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BUBBLECHART_XSCALE_TEXT_FONT = function () {
/// <field type="String">气泡图x轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BUBBLECHART_XSCALE_TEXT_ORIENTATION = function () {
/// <field type="String">气泡图x轴刻度文字方向, 默认值为horizontal</field>
}

twaver.Defaults.BUBBLECHART_YAXIS_LINE_COLOR = function () {
/// <field type="String">气泡图y轴线条颜色, 默认值为#808080</field>
}

twaver.Defaults.BUBBLECHART_YAXIS_LINE_WIDTH = function () {
/// <field type="Number">气泡图y轴线条宽度, 默认值为1</field>
}

twaver.Defaults.BUBBLECHART_YAXIS_TEXT_COLOR = function () {
/// <field type="String">气泡图y轴文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BUBBLECHART_YAXIS_TEXT_FONT = function () {
/// <field type="String">气泡图y轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_LINE_COLOR = function () {
/// <field type="String">气泡图y轴刻度线条颜色, 默认值为#808080</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_LINE_WIDTH = function () {
/// <field type="Number">气泡图y轴刻度线条宽度, 默认值为0.3</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_MIN_TEXT_VISIBLE = function () {
/// <field type="Boolean">气泡图y轴刻度最小值是否可见, 默认值为false</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_PIXEL_GAP = function () {
/// <field type="Number">气泡图y轴刻度间距(按像素), 默认值为20</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_TEXT_COLOR = function () {
/// <field type="String">气泡图y轴刻度文字颜色, 默认值为#000000</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_TEXT_FONT = function () {
/// <field type="String">气泡图y轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_TEXT_VISIBLE = function () {
/// <field type="Boolean">气泡图y轴刻度文字是否可见, 默认值为true</field>
}

twaver.Defaults.BUBBLECHART_YSCALE_VALUE_GAP = function () {
/// <field type="Number">气泡图y轴刻度间距(按值), 默认值为0</field>
}

twaver.Defaults.CALL_LATER_DELAY = function () {
/// <field type="Number">调用延迟时的延迟时间(单位ms), 默认值为17</field>
}

twaver.Defaults.CANVASUI_FUNCTION = function (network, element) {
/// <summary>
/// 	网元UI对象生成器, 用于twaver.canvas.Network
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑</param>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.canvas.ElementUI">返回指定网元对应的UI对象</returns>
/// <example>
/// 	默认实现为:
/// 	function (network, element) {
/// 	    var clazz = element.getCanvasUIClass();
/// 	    if (clazz) {
/// 	        return new clazz(network, element);
/// 	    }
/// 	    return null;
/// 	}
/// </example>
}

twaver.Defaults.CHART_BACKGROUND_FILL = function () {
/// <field type="Boolean">图表的背景是否填充, 默认值为true</field>
}

twaver.Defaults.CHART_BACKGROUND_FILL_COLOR = function () {
/// <field type="String">图表的背景填充色, 默认值为rgba(50,50,50,0.11)</field>
}

twaver.Defaults.CHART_BACKGROUND_GRADIENT = function () {
/// <field type="String">图表背景渐进色样式, 默认值为linear.north</field>
}

twaver.Defaults.CHART_BACKGROUND_GRADIENT_COLOR = function () {
/// <field type="String">图表背景渐进色, 默认值为#FFFFFF</field>
}

twaver.Defaults.CHART_BACKGROUND_OUTLINE_COLOR = function () {
/// <field type="String">图表背景边框颜色, 默认值为rgba(50,50,50,0.11)</field>
}

twaver.Defaults.CHART_BACKGROUND_OUTLINE_WIDTH = function () {
/// <field type="Number">图表背景边框宽度, 默认值为1</field>
}

twaver.Defaults.CHART_BACKGROUND_VISIBLE = function () {
/// <field type="Boolean">图表背景是否可见, 默认值为false</field>
}

twaver.Defaults.CHART_DOUBLE_CLICK_TO_RESET = function () {
/// <field type="Boolean">双击图表是否还原至原始比例, 默认值为true</field>
}

twaver.Defaults.CHART_SELECT_TOLERANCE = function () {
/// <field type="Number">图表选中误差, 当点击鼠标位置和图表的距离在指定范围内时, 认为图表被选中了, 默认值为0</field>
}

twaver.Defaults.CHART_TOOLTIP_ENABLED = function () {
/// <field type="Boolean">图表是否启用提示信息, 默认值为true</field>
}

twaver.Defaults.CHART_VALUE_FONT = function () {
/// <field type="String">图表值字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.CHART_VALUE_VISIBLE = function () {
/// <field type="Boolean">图表值是否可见, 默认值为true</field>
}

twaver.Defaults.CHART_XGAP = function () {
/// <field type="Number">图表水平边距, 默认值为6</field>
}

twaver.Defaults.CHART_XTRANSLATE_ENABLED = function () {
/// <field type="Boolean">图表x轴方向是否可移动, 默认值为true</field>
}

twaver.Defaults.CHART_XZOOM_ENABLED = function () {
/// <field type="Boolean">图表x轴方向是否可缩放, 默认值为true</field>
}

twaver.Defaults.CHART_YGAP = function () {
/// <field type="Number">图表垂直边距, 默认值为6</field>
}

twaver.Defaults.CHART_YTRANSLATE_ENABLED = function () {
/// <field type="Boolean">图表y轴方向是否可移动, 默认值为true</field>
}

twaver.Defaults.CHART_YZOOM_ENABLED = function () {
/// <field type="Boolean">图表y轴方向是否可缩放, 默认值为true</field>
}

twaver.Defaults.CHARTPANE_LEGEND_ORIENTATION = function () {
/// <field type="String">图表面板图例位置, 默认值为bottom</field>
}

twaver.Defaults.CHARTPANE_LEGEND_WIDTH = function () {
/// <field type="Number">图表面板图例宽度, 默认值为80</field>
}

twaver.Defaults.CHARTPANE_TITLE_HEIGHT = function () {
/// <field type="Number">图表面板标题栏高度, 默认值为20</field>
}

twaver.Defaults.CHARTPANE_TITLE_HORIZONTAL_ALIGN = function () {
/// <field type="String">图表面板标题栏水平对齐方式, 默认值为center</field>
}

twaver.Defaults.COLORS = function () {
/// <field type="Array">可选颜色数组</field>
}

twaver.Defaults.COLUMN_EDITABLE = function () {
/// <field type="Boolean">表格列是否可编辑, 默认值为false</field>
}

twaver.Defaults.COLUMN_HORIZONTAL_ALIGN = function () {
/// <field type="String">表格列水平对齐方式, 默认值为null</field>
}

twaver.Defaults.COLUMN_INNER_TEXT = function () {
/// <field type="Boolean">表格列内容是否为纯文本，默认为true</field>
}

twaver.Defaults.COLUMN_MOVABLE = function () {
/// <field type="Boolean">表格列是否可移动, 默认值为true</field>
}

twaver.Defaults.COLUMN_PROPERTY_TYPE = function () {
/// <field type="String">表格列属性类型, 默认值为accessor</field>
}

twaver.Defaults.COLUMN_RENDER_CELL = function () {
/// <field type="Function">表格列渲染器, 默认值为null</field>
}

twaver.Defaults.COLUMN_RENDER_HEADER = function () {
/// <field type="Object">表格列头渲染器, 默认值为null</field>
}

twaver.Defaults.COLUMN_RESIZABLE = function () {
/// <field type="Boolean">表格列是否可改变大小, 默认值为true</field>
}

twaver.Defaults.COLUMN_SORTABLE = function () {
/// <field type="Boolean">表格列是否可排序, 默认值为true</field>
}

twaver.Defaults.COLUMN_VALUE_TYPE = function () {
/// <field type="String">表格列值类型, 默认值为string</field>
}

twaver.Defaults.COLUMN_VISIBLE = function () {
/// <field type="Boolean">表格列是否可见, 默认值为true</field>
}

twaver.Defaults.COLUMN_WIDTH = function () {
/// <field type="Number">表格列宽度, 默认值为80</field>
}

twaver.Defaults.DIALCHART_COLOR_RANGE_FILL_COLOR = function () {
/// <field type="String">仪表盘外圈填充颜色, 默认值为#808080</field>
}

twaver.Defaults.DIALCHART_END_ANGLE = function () {
/// <field type="Number">仪表盘结束角度, 默认值为360</field>
}

twaver.Defaults.DIALCHART_INNER_DARKER_RADIUS = function () {
/// <field type="Number">仪表盘内圈偏暗半径, 默认值为10</field>
}

twaver.Defaults.DIALCHART_INNER_RADIUS = function () {
/// <field type="Number">仪表盘内圈所占比例, 默认值为0.8</field>
}

twaver.Defaults.DIALCHART_LOWER_LIMIT = function () {
/// <field type="Number">仪表盘最小值, 默认值为0</field>
}

twaver.Defaults.DIALCHART_MAJOR_SCALE_COUNT = function () {
/// <field type="Number">仪表盘大刻度数量, 默认值为11</field>
}

twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_COLOR = function () {
/// <field type="String">仪表盘大刻度颜色, 默认值为#000000</field>
}

twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_LENGTH = function () {
/// <field type="Number">仪表盘大刻度长度, 默认值为8</field>
}

twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_WIDTH = function () {
/// <field type="Number">仪表盘大刻度宽度, 默认值为2</field>
}

twaver.Defaults.DIALCHART_MINOR_SCALE_COUNT = function () {
/// <field type="Number">仪表盘小刻度数量, 默认值为4</field>
}

twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_COLOR = function () {
/// <field type="String">仪表盘小刻度颜色, 默认值为#000000</field>
}

twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_LENGTH = function () {
/// <field type="Number">仪表盘小刻度长度, 默认值为4</field>
}

twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_WIDTH = function () {
/// <field type="Number">仪表盘小刻度宽度, 默认值为1</field>
}

twaver.Defaults.DIALCHART_OUTER_BRIGHTER_RADIUS = function () {
/// <field type="Number">仪表盘外圈偏亮半径, 默认值为10</field>
}

twaver.Defaults.DIALCHART_OUTLINE_COLOR = function () {
/// <field type="String">仪表盘边框颜色, 默认值为#808080</field>
}

twaver.Defaults.DIALCHART_OUTLINE_WIDTH = function () {
/// <field type="Number">仪表盘边框宽度, 默认值为0</field>
}

twaver.Defaults.DIALCHART_PIVOT_FILL = function () {
/// <field type="Boolean">仪表盘轴是否填充, 默认值为true</field>
}

twaver.Defaults.DIALCHART_PIVOT_FILL_COLOR = function () {
/// <field type="String">仪表盘轴填充颜色, 默认值为#808080</field>
}

twaver.Defaults.DIALCHART_PIVOT_OUTLINE_COLOR = function () {
/// <field type="String">仪表盘轴边框颜色, 默认值为#808080</field>
}

twaver.Defaults.DIALCHART_PIVOT_OUTLINE_WIDTH = function () {
/// <field type="Number">仪表盘轴边框宽度, 默认值为0</field>
}

twaver.Defaults.DIALCHART_PIVOT_RADIUS = function () {
/// <field type="Number">仪表盘轴半径, 默认值为10</field>
}

twaver.Defaults.DIALCHART_SCALE_INSIDE = function () {
/// <field type="Boolean">仪表盘刻度是否在内部, 默认值为true</field>
}

twaver.Defaults.DIALCHART_SCALE_LOWER_LIMIT_TEXT_VISIBLE = function () {
/// <field type="Boolean">仪表盘最小刻度值是否可见, 默认值为true</field>
}

twaver.Defaults.DIALCHART_SCALE_TEXT_COLOR = function () {
/// <field type="String">仪表盘刻度字体颜色, 默认值为#000000</field>
}

twaver.Defaults.DIALCHART_SCALE_TEXT_FONT = function () {
/// <field type="String">仪表盘刻度字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.DIALCHART_SCALE_TEXT_VISIBLE = function () {
/// <field type="Boolean">仪表盘刻度文字是否可见, 默认值为true</field>
}

twaver.Defaults.DIALCHART_SCALE_UPPER_LIMIT_TEXT_VISIBLE = function () {
/// <field type="Boolean">仪表盘最小刻度值是否可见, 默认值为true</field>
}

twaver.Defaults.DIALCHART_SELECT_SHADOW_COLOR = function () {
/// <field type="String">仪表盘选中时阴影颜色, 默认值为#000000</field>
}

twaver.Defaults.DIALCHART_SELECT_SHADOW_OFFSET = function () {
/// <field type="Number">仪表盘选中时阴影偏移量, 默认值为3</field>
}

twaver.Defaults.DIALCHART_START_ANGLE = function () {
/// <field type="Number">仪表盘起始角度, 默认值为0</field>
}

twaver.Defaults.DIALCHART_UPPER_LIMIT = function () {
/// <field type="Number">仪表盘最大值, 默认值为100</field>
}

twaver.Defaults.DIALCHART_VALUE_POSITION = function () {
/// <field type="Number">仪表盘值位置, 默认值为0.5</field>
}

twaver.Defaults.ELEMENTUI_FUNCTION = function (network, element) {
/// <summary>
/// 	网元UI对象生成器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.network.ElementUI">返回指定网元对应的UI对象</returns>
}

twaver.Defaults.FOCUS_ON_CLICK = function () {
/// <field type="Boolean">点击视图时, 是否让视图获得焦点, 默认值为true</field>
}

twaver.Defaults.FONT = function () {
/// <field type="String">默认字体样式(12px arial, tahoma, sans-serif, helvetica)</field>
}

twaver.Defaults.ICON_BUS = function () {
/// <field type="String">总线网元图标, 默认值为bus_icon</field>
}

twaver.Defaults.ICON_DATA = function () {
/// <field type="String">数据的图标, 默认值为data_icon</field>
}

twaver.Defaults.ICON_DATABOX = function () {
/// <field type="String">数据容器的图标,默认值为databox_icon</field>
}

twaver.Defaults.ICON_GRID = function () {
/// <field type="String">网格图标, 默认值为grid_icon</field>
}

twaver.Defaults.ICON_GROUP = function () {
/// <field type="String">组图标, 默认值为group_icon</field>
}

twaver.Defaults.ICON_LINK = function () {
/// <field type="String">连线图标, 默认值为link_icon</field>
}

twaver.Defaults.ICON_LINKSUBNETWORK = function () {
/// <field type="String">子网连线图标, 默认值为linksubnetwork_icon</field>
}

twaver.Defaults.ICON_NODE = function () {
/// <field type="String">节点图标, 默认值为node_icon</field>
}

twaver.Defaults.ICON_SHAPELINK = function () {
/// <field type="String">折线图标, 默认值为shapelink_icon</field>
}

twaver.Defaults.ICON_SHAPENODE = function () {
/// <field type="String">多边形节点图标, 默认值为shapenode_icon</field>
}

twaver.Defaults.ICON_SHAPESUBNETWORK = function () {
/// <field type="String">多边形子网图标, 默认值为shapesubnetwork_icon</field>
}

twaver.Defaults.ICON_SUBNETWORK = function () {
/// <field type="String">子网图标, 默认值为network_icon</field>
}

twaver.Defaults.IMAGE_GROUP = function () {
/// <field type="String">组图片, 默认值为group_image</field>
}

twaver.Defaults.IMAGE_NODE = function () {
/// <field type="String">节点图片, 默认值为node_image</field>
}

twaver.Defaults.IMAGE_SUBNETWORK = function () {
/// <field type="String">子网图片, 默认值为subnetwork_image</field>
}

twaver.Defaults.IS_LINK_ADJUSTED_TO_BOTTOM = function () {
/// <field type="Boolean">连线是否调整到节点下面，默认为false</field>
}

twaver.Defaults.KEEP_DEFAULT_FUNCTION = function (e) {
/// <summary>
/// 	是否不调用e.preventDefault方法
/// </summary>
/// <param name="e" type="Event">鼠标或键盘事件</param>
/// <returns type="Boolean">返回是否不调用e.preventDefault方法</returns>
}

twaver.Defaults.LAYER_DEFAULT_ID = function () {
/// <field type="String">默认层ID(default)</field>
}

twaver.Defaults.LAYER_DEFAULT_NAME = function () {
/// <field type="String">默认层名称(default)</field>
}

twaver.Defaults.LEGENDPANE_HIDDEN_COLOR = function () {
/// <field type="String">图表图例隐藏颜色, 默认值为#BABBBC</field>
}

twaver.Defaults.LEGENDPANE_ICON_HEIGHT = function () {
/// <field type="Number">图表图例图标高度, 默认值为10</field>
}

twaver.Defaults.LEGENDPANE_ICON_RADIUS = function () {
/// <field type="Number">图表图例图标圆角半径, 默认值为0</field>
}

twaver.Defaults.LEGENDPANE_ICON_WIDTH = function () {
/// <field type="Number">图表图例图标宽度, 默认值为10</field>
}

twaver.Defaults.LEGENDPANE_ORIENTATION = function () {
/// <field type="String">图表图例方向, 默认值为horizontal</field>
}

twaver.Defaults.LEGENDPANE_ROW_HEIGHT = function () {
/// <field type="Number">图表图例行高, 默认值为20</field>
}

twaver.Defaults.LEGENDPANE_SELECT_BACKGROUND_COLOR = function () {
/// <field type="String">图表图例选中背景色, 默认值为#00007D</field>
}

twaver.Defaults.LEGENDPANE_SELECT_FOREGROUND_COLOR = function () {
/// <field type="String">图表图例选中前景色, 默认值为#FFFFFF</field>
}

twaver.Defaults.LINECHART_INTERRUPTABLE = function () {
/// <field type="Boolean">曲线图上值为空时, 是否不画线, 默认值为true</field>
}

twaver.Defaults.LINECHART_LOWER_LIMIT = function () {
/// <field type="Object">曲线图y轴最小值, 默认值为null, 表示没有最小值</field>
}

twaver.Defaults.LINECHART_UPPER_LIMIT = function () {
/// <field type="Object">曲线图y轴最大值, 默认值为null, 表示没有最大值</field>
}

twaver.Defaults.LINECHART_XAXIS_LINE_COLOR = function () {
/// <field type="String">曲线图x轴线条颜色, 默认值为#808080</field>
}

twaver.Defaults.LINECHART_XAXIS_LINE_WIDTH = function () {
/// <field type="Number">曲线图x轴线条宽度, 默认值为1</field>
}

twaver.Defaults.LINECHART_XAXIS_TEXT_COLOR = function () {
/// <field type="String">曲线图x轴文字颜色, 默认值为#000000</field>
}

twaver.Defaults.LINECHART_XAXIS_TEXT_FONT = function () {
/// <field type="String">曲线图x轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.LINECHART_XSCALE_LINE_COLOR = function () {
/// <field type="String">曲线图x轴刻度线条颜色, 默认值为#808080</field>
}

twaver.Defaults.LINECHART_XSCALE_LINE_WIDTH = function () {
/// <field type="Number">曲线图x轴刻度线条宽度, 默认值为0.3</field>
}

twaver.Defaults.LINECHART_XSCALE_TEXT_COLOR = function () {
/// <field type="String">曲线图x轴刻度文字颜色, 默认值为#000000</field>
}

twaver.Defaults.LINECHART_XSCALE_TEXT_FONT = function () {
/// <field type="String">曲线图x轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.LINECHART_XSCALE_TEXT_ORIENTATION = function () {
/// <field type="String">曲线图x轴刻度文字方向, 默认值为horizontal</field>
}

twaver.Defaults.LINECHART_YAXIS_LINE_COLOR = function () {
/// <field type="String">曲线图y轴线条颜色, 默认值为#808080</field>
}

twaver.Defaults.LINECHART_YAXIS_LINE_WIDTH = function () {
/// <field type="Number">曲线图y轴线条宽度, 默认值为1</field>
}

twaver.Defaults.LINECHART_YAXIS_TEXT_COLOR = function () {
/// <field type="String">曲线图y轴文字颜色, 默认值为#000000</field>
}

twaver.Defaults.LINECHART_YAXIS_TEXT_FONT = function () {
/// <field type="String">曲线图y轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.LINECHART_YSCALE_LINE_COLOR = function () {
/// <field type="String">曲线图y轴刻度线条颜色, 默认值为#808080</field>
}

twaver.Defaults.LINECHART_YSCALE_LINE_WIDTH = function () {
/// <field type="Number">曲线图y轴刻度线条宽度, 默认值为0.3</field>
}

twaver.Defaults.LINECHART_YSCALE_MIN_TEXT_VISIBLE = function () {
/// <field type="Boolean">曲线图y轴刻度最小值是否可见, 默认值为false</field>
}

twaver.Defaults.LINECHART_YSCALE_PIXEL_GAP = function () {
/// <field type="Number">曲线图y轴刻度间距(按像素), 默认值为20</field>
}

twaver.Defaults.LINECHART_YSCALE_TEXT_COLOR = function () {
/// <field type="String">曲线图y轴刻度文字颜色, 默认值为#000000</field>
}

twaver.Defaults.LINECHART_YSCALE_TEXT_FONT = function () {
/// <field type="String">曲线图y轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.LINECHART_YSCALE_TEXT_VISIBLE = function () {
/// <field type="Boolean">曲线图y轴刻度文字是否可见, 默认值为true</field>
}

twaver.Defaults.LINECHART_YSCALE_VALUE_GAP = function () {
/// <field type="Number">曲线图y轴刻度间距(按值), 默认值为0</field>
}

twaver.Defaults.LINK_BUNDLE_AGENT_FUNCTION = function () {
/// <field type="Function">获取连线捆绑时, 作为代理的连线的回调函数, 默认值为null</field>
}

twaver.Defaults.LIST_INDENT = function () {
/// <field type="Number">列表缩进量, 默认值为2</field>
}

twaver.Defaults.LIST_KEYBOARD_REMOVE_ENABLED = function () {
/// <field type="Boolean">列表上键盘DELETE键是否可以删除行，默认值为true</field>
}

twaver.Defaults.LIST_KEYBOARD_SELECT_ENABLED = function () {
/// <field type="Boolean">列表上键盘CTRL+A键是否可以选中所有行，默认值为true</field>
}

twaver.Defaults.LIST_MAKE_VISIBLE_ON_SELECTED = function () {
/// <field type="Boolean">列表上数据被选中时, 列表是否自动滚动到被选中数据可见的区域, 默认值为true</field>
}

twaver.Defaults.LIST_ROW_HEIGHT = function () {
/// <field type="Number">列表行号, 默认值为19</field>
}

twaver.Defaults.LIST_ROW_LINE_COLOR = function () {
/// <field type="String">列表行线条颜色, 默认值为#DDD</field>
}

twaver.Defaults.LIST_ROW_LINE_WIDTH = function () {
/// <field type="Number">列表行线条宽度, 默认值为0</field>
}

twaver.Defaults.LISTBASE_INNER_TEXT = function () {
/// <field type="Boolean">列表内容是否为纯文本，默认为true</field>
}

twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK = function () {
/// <field type="Boolean">拓扑上双击空子网是否进入空子网, 默认值为true</field>
}

twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND = function () {
/// <field type="Boolean">拓扑上双击组是否展开或合并组, 默认值为true</field>
}

twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE = function () {
/// <field type="Boolean">拓扑上双击连线是否合并或展开连线分组, 默认值为true</field>
}

twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK = function () {
/// <field type="Boolean">拓扑上双击子网是否进入子网, 默认值为true</field>
}

twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK = function () {
/// <field type="Boolean">拓扑上双击背景是否返回上一级子网, 默认值为true</field>
}

twaver.Defaults.NETWORK_EDIT_LINE_COLOR = function () {
/// <field type="String">拓扑上创建Link时, 鼠标移动到起始或结束节点上时, 节点周围的边框颜色, 默认值为rgba(184,211,240,0.7)</field>
}

twaver.Defaults.NETWORK_EDIT_LINE_WIDTH = function () {
/// <field type="Number">拓扑上创建Link时, 鼠标移动到起始或结束节点上时, 节点周围的边框宽度, 默认值为2</field>
}

twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR = function () {
/// <field type="String">拓扑上更改ShapeLink或ShapeNode时, 控制点的填充颜色, 默认值为#FFFF00</field>
}

twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR = function () {
/// <field type="String">拓扑上更改ShapeLink或ShapeNode时, 控制点的边框颜色, 默认值为#000000</field>
}

twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH = function () {
/// <field type="Number">拓扑上更改ShapeLink或ShapeNode时, 控制点的边框宽度, 默认值为1</field>
}

twaver.Defaults.NETWORK_EDIT_POINT_SIZE = function () {
/// <field type="Number">拓扑上更改ShapeLink或ShapeNode时, 控制点的大小, 默认值为3</field>
}

twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED = function () {
/// <field type="Boolean">拓扑上是否能用键盘Delete键删除选中网元, 默认值为true</field>
}

twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED = function () {
/// <field type="Boolean">拓扑上是否能用键盘CTRL+A键选中全部网元, 默认值为true</field>
}

twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE = function () {
/// <field type="Boolean">拓扑上延迟移动网元时, 是否有动画效果</field>
}

twaver.Defaults.NETWORK_LAZYMOVE_FILL = function () {
/// <field type="Boolean">拓扑上延迟移动网元时, 是否填充被移动网元的标示框, 默认值为true</field>
}

twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR = function () {
/// <field type="String">拓扑上延迟移动网元时, 被移动网元的标示框的填充色, 默认值为rgba(184,211,240,0.4)</field>
}

twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR = function () {
/// <field type="String">拓扑上延迟移动网元时, 被移动网元的标示框的边框颜色, 默认值为#2877A8</field>
}

twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH = function () {
/// <field type="Number">拓扑上延迟移动网元时, 被移动网元的标示框的边框宽度, 默认值为1</field>
}

twaver.Defaults.NETWORK_LIMIT_ELEMENT_INPOSITIVE_LOCATION = function () {
/// <field type="Boolean">是否限制拓扑原始位置不能为负坐标，默认为true</field>
}

twaver.Defaults.NETWORK_LINK_FLOW_COLOR = function () {
/// <field type="String">LINK的流动颜色</field>
}

twaver.Defaults.NETWORK_LINK_FLOW_INTERVAL = function () {
/// <field type="Number">LINK的流动间隔时间</field>
}

twaver.Defaults.NETWORK_LINK_FLOW_STEPPING = function () {
/// <field type="Number">LINK的流动步进</field>
}

twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED = function () {
/// <field type="Boolean">拓扑上网元被选中时, 拓扑是否滚动到网元可见区域, 默认值为true</field>
}

twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE = function () {
/// <field type="Boolean">拓扑图上非代理的连线是否可见, 默认值为false</field>
}

twaver.Defaults.NETWORK_RECT_SELECT_ENABLED = function () {
/// <field type="Boolean">拓扑图上是否启用框选，默认为true</field>
}

twaver.Defaults.NETWORK_REMOVE_ELEMENTUI_ON_INVISIBLE = function () {
/// <field type="Boolean">拓扑上网元不可见时, 是否删除对应的视图组件, 默认值为false</field>
}

twaver.Defaults.NETWORK_RESIZE_ANIMATE = function () {
/// <field type="Boolean">拓扑上延迟更改网元大小时, 是否有动画效果, 默认值为true</field>
}

twaver.Defaults.NETWORK_RESIZE_LINE_COLOR = function () {
/// <field type="String">拓扑上延迟更改网元大小时网元边框颜色, 默认值为#000000</field>
}

twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH = function () {
/// <field type="Number">拓扑上延迟更改网元大小时网元边框的宽度, 默认值为1</field>
}

twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR = function () {
/// <field type="String">拓扑上更改网元大小时, 控制点的填充色, 默认值为#FFFFFF</field>
}

twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR = function () {
/// <field type="String">拓扑上更改网元大小时, 控制点的边框颜色, 默认值为#000000</field>
}

twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH = function () {
/// <field type="Number">拓扑上更改网元大小时, 控制点的边框宽度, 默认值为1</field>
}

twaver.Defaults.NETWORK_RESIZE_POINT_SIZE = function () {
/// <field type="Number">更改网元大小的控制点的大小，默认为3</field>
}

twaver.Defaults.NETWORK_ROTATE_POINT_FILL_COLOR = function () {
/// <field type="String">旋转控制点的填充色，默认为#FFFF00</field>
}

twaver.Defaults.NETWORK_ROTATE_POINT_OFFSET = function () {
/// <field type="Number">旋转控制点的偏移量，默认为15</field>
}

twaver.Defaults.NETWORK_ROTATE_POINT_OUTLINE_COLOR = function () {
/// <field type="String">旋转控制点的边框颜色，默认为rgba(0,0,0,1)</field>
}

twaver.Defaults.NETWORK_ROTATE_POINT_OUTLINE_WIDTH = function () {
/// <field type="Number">旋转控制点的边框宽度，默认为1</field>
}

twaver.Defaults.NETWORK_ROTATE_POINT_SIZE = function () {
/// <field type="Number">旋转控制点的大小，默认为5</field>
}

twaver.Defaults.NETWORK_ROTATE_SCALE_FILL_COLOR = function () {
/// <field type="String">旋转刻度填充色，默认为rgb(227,166,103)</field>
}

twaver.Defaults.NETWORK_ROTATE_SCALE_FONT_COLOR = function () {
/// <field type="String">旋转刻度文字字体颜色，默认为#FFFFFF</field>
}

twaver.Defaults.NETWORK_ROTATE_SCALE_HEIGHT = function () {
/// <field type="Number">旋转刻度高度，默认为20</field>
}

twaver.Defaults.NETWORK_ROTATE_SCALE_WIDTH = function () {
/// <field type="Number">旋转刻度宽度，默认为30</field>
}

twaver.Defaults.NETWORK_SELECT_FILL_COLOR = function () {
/// <field type="String">拓扑上框选网元时, 框选框的填充色, 默认值为rgba(184,211,240,0.4)</field>
}

twaver.Defaults.NETWORK_SELECT_MODE = function () {
/// <field type="String">拓扑选中模式, 默认值为mix</field>
}

twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR = function () {
/// <field type="String">拓扑上框选网元时, 框选框的边框颜色, 默认值为@2877A8</field>
}

twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH = function () {
/// <field type="Number">拓扑上框选网元时, 框选框的边框宽度, 默认值为1</field>
}

twaver.Defaults.NETWORK_SELECTION_TOLERANCE = function () {
/// <field type="Number">容差选中像素数</field>
}

twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED = function () {
/// <field type="Boolean">拓扑上选中网元时, 是否将网元置顶, 默认值为true</field>
}

twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE = function () {
/// <field type="Boolean">拓扑上进入子网时是否有动画效果, 默认值为true</field>
}

twaver.Defaults.NETWORK_TOOLTIP_ENABLED = function () {
/// <field type="Boolean">是否启用拓扑上网元的提示信息, 默认值为true</field>
}

twaver.Defaults.NODE_HEIGHT = function () {
/// <field type="Number">默认网元高度(50)</field>
}

twaver.Defaults.NODE_WIDTH = function () {
/// <field type="Number">默认网元宽度(50)</field>
}

twaver.Defaults.OVERVIEW_ANIMATE = function () {
/// <field type="Boolean">鹰眼是否有动画效果, 默认值为true</field>
}

twaver.Defaults.OVERVIEW_FILL_COLOR = function () {
/// <field type="String">鹰眼背景填充色, 默认值为rgba(184,211,240,0.4)</field>
}

twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT = function () {
/// <field type="Number">鹰眼最大高度, 默认值为-1</field>
}

twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH = function () {
/// <field type="Number">鹰眼最大宽度, 默认值为-1</field>
}

twaver.Defaults.OVERVIEW_OUTLINE_COLOR = function () {
/// <field type="String">鹰眼边框颜色, 默认值为#BBD3F0</field>
}

twaver.Defaults.OVERVIEW_OUTLINE_WIDTH = function () {
/// <field type="Number">鹰眼边框宽度, 默认值为1</field>
}

twaver.Defaults.OVERVIEW_PADDING = function () {
/// <field type="Number">鹰眼边距, 默认值为1</field>
}

twaver.Defaults.OVERVIEW_SELECT_COLOR = function () {
/// <field type="String">在鹰眼上框选时, 选择框边框颜色, 默认值为#00000FF</field>
}

twaver.Defaults.OVERVIEW_SELECT_WIDTH = function () {
/// <field type="Number">在鹰眼上框选时, 选择框边框宽度, 默认值为1</field>
}

twaver.Defaults.PIECHART_DONUT_RATE = function () {
/// <field type="Number">饼图内环所占比例, 默认值为0.5</field>
}

twaver.Defaults.PIECHART_LINE_RATE = function () {
/// <field type="Number">线形饼图高度占宽度的比例, 默认值为0.5</field>
}

twaver.Defaults.PIECHART_SELECT_OFFSET = function () {
/// <field type="Number">饼图选中后的偏移量, 默认值为5</field>
}

twaver.Defaults.PIECHART_SHADOW_COLOR = function () {
/// <field type="String">饼图选中时阴影颜色, 默认值为#C2CFF1</field>
}

twaver.Defaults.PIECHART_SHADOW_OFFSET = function () {
/// <field type="Number">饼图选中时阴影偏移量, 默认值为1</field>
}

twaver.Defaults.PIECHART_START_ANGLE = function () {
/// <field type="Number">饼图起始角度, 默认值为0</field>
}

twaver.Defaults.PIECHART_TYPE = function () {
/// <field type="String">饼图类型, 默认值为oval</field>
}

twaver.Defaults.PIECHART_VALUE_POSITION = function () {
/// <field type="Number">饼图值标签位置, 默认值为0.5</field>
}

twaver.Defaults.POPUPMENU_CHECKBOX_SELECTED_ICON = function () {
/// <field type="String">右键菜单上勾选框在选中状态时的图标名称，默认为checkbox_selected_icon</field>
}

twaver.Defaults.POPUPMENU_CHECKBOX_UNSELECTED_ICON = function () {
/// <field type="String">右键菜单勾选框在未选中状态时的图标名称，默认为checkbox_unselected_icon</field>
}

twaver.Defaults.POPUPMENU_RADIOBUTTON_SELECTED_ICON = function () {
/// <field type="String">右键菜单单选框在选中状态时的图标名称，默认为radiobutton_selected_icon</field>
}

twaver.Defaults.POPUPMENU_RADIOBUTTON_UNSELECTED_ICON = function () {
/// <field type="String">右键菜单单选框在未选中状态时的图标名称，默认为radiobutton_unselected_icon</field>
}

twaver.Defaults.POPUPMENU_SUBNENU_DISABLE_ICON = function () {
/// <field type="String">右键菜单子菜单项不可用时的图标名称，默认为submenu_disable_icon</field>
}

twaver.Defaults.POPUPMENU_SUBNENU_ENABLE_ICON = function () {
/// <field type="String">右键菜单子菜单项可用时的图标名称，默认为submenu_enable_icon</field>
}

twaver.Defaults.PROPERTY_CATEGORY_NAME = function () {
/// <field type="Object">默认属性页属性类别名, 默认值为null</field>
}

twaver.Defaults.PROPERTY_EDITABLE = function () {
/// <field type="Boolean">默认属性页属性是否可编辑(false)</field>
}

twaver.Defaults.PROPERTY_HORIZONTAL_ALIGN = function () {
/// <field type="String">默认属性页属性文字水平对齐方式(null)</field>
}

twaver.Defaults.PROPERTY_INNER_TEXT = function () {
/// <field type="Boolean">属性页列内容是否为纯文本，默认为true</field>
}

twaver.Defaults.PROPERTY_PROPERTY_TYPE = function () {
/// <field type="String">默认属性页属性类型(accessor)</field>
}

twaver.Defaults.PROPERTY_RENDER_NAME = function () {
/// <field type="Object">属性页属性列渲染器, 默认值为null</field>
}

twaver.Defaults.PROPERTY_RENDER_VALUE = function () {
/// <field type="Object">属性页属性值列渲染器, 默认值为null</field>
}

twaver.Defaults.PROPERTY_VALUE_TYPE = function () {
/// <field type="String">属性页属性值类型, 默认值为string</field>
}

twaver.Defaults.PROPERTYSHEET_AUTO_ADJUSTABLE = function () {
/// <field type="Boolean"></field>
}

twaver.Defaults.PROPERTYSHEET_BORDER_COLOR = function () {
/// <field type="String">属性页边框颜色, 默认值为#EBEBEB</field>
}

twaver.Defaults.PROPERTYSHEET_CATEGORIZABLE = function () {
/// <field type="Boolean">属性页是否允许分组, 默认值为true</field>
}

twaver.Defaults.PROPERTYSHEET_COLLAPSE_ICON = function () {
/// <field type="String">属性页类别合并时的图标, 默认值为collapse_icon</field>
}

twaver.Defaults.PROPERTYSHEET_COLUMN_LINE_WIDTH = function () {
/// <field type="Number">属性页列分隔线宽度, 默认值为1</field>
}

twaver.Defaults.PROPERTYSHEET_EDITABLE = function () {
/// <field type="Boolean">属性页是否可编辑, 默认值为false</field>
}

twaver.Defaults.PROPERTYSHEET_EXPAND_CATEGORY = function () {
/// <field type="Boolean">默认属性页是否展开分组(true)</field>
}

twaver.Defaults.PROPERTYSHEET_EXPAND_ICON = function () {
/// <field type="String">属性页类别展开时的图标, 默认值为expand_icon</field>
}

twaver.Defaults.PROPERTYSHEET_INDENT = function () {
/// <field type="Number">属性页缩进量, 默认值为16</field>
}

twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_HORIZONTAL_ALIGN = function () {
/// <field type="String">属性页属性名列文字水平对齐方式, 默认值为null</field>
}

twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_WIDTH = function () {
/// <field type="Number">属性页属性名列宽度, 默认值为100</field>
}

twaver.Defaults.PROPERTYSHEET_RESIZE_TOLERANCE = function () {
/// <field type="Number">属性页更改属性名列和值列宽度时, 鼠标离分隔线的距离, 默认值为3</field>
}

twaver.Defaults.PROPERTYSHEET_ROW_HEIGHT = function () {
/// <field type="Number">属性页行高, 默认值为19</field>
}

twaver.Defaults.PROPERTYSHEET_ROW_LINE_WIDTH = function () {
/// <field type="Number">属性页行线条宽度, 默认值为1</field>
}

twaver.Defaults.PROPERTYSHEET_SUM_WIDTH = function () {
/// <field type="Number">属性页总宽度, 默认值为200</field>
}

twaver.Defaults.prototype.getClassName = function () {
/// <returns type="String"></returns>
}

twaver.Defaults.RADARCHART_ANCHOR_VISIBLE = function () {
/// <field type="Boolean">雷达图锚点是否可见, 默认值为true</field>
}

twaver.Defaults.RADARCHART_AREA_FILL = function () {
/// <field type="Boolean">雷达图是否填充背景色, 默认值为true</field>
}

twaver.Defaults.RADARCHART_AREA_FILL_ALPHA = function () {
/// <field type="Number">雷达图背景透明度, 默认值为0.2</field>
}

twaver.Defaults.RADARCHART_AREA_SELECT_FILL_ALPHA = function () {
/// <field type="Number">雷达图选中元素填充透明图, 默认值为0.5</field>
}

twaver.Defaults.RADARCHART_AXIS_LINE_COLOR = function () {
/// <field type="String">雷达图轴线颜色, 默认值为#808080</field>
}

twaver.Defaults.RADARCHART_AXIS_LINE_WIDTH = function () {
/// <field type="Number">雷达图轴线宽度, 默认值为3</field>
}

twaver.Defaults.RADARCHART_AXIS_START_ANGLE = function () {
/// <field type="Number">雷达图起始角度, 默认值为0</field>
}

twaver.Defaults.RADARCHART_AXIS_TEXT_COLOR = function () {
/// <field type="String">雷达图轴线文字颜色, 默认值为#000000</field>
}

twaver.Defaults.RADARCHART_AXIS_TEXT_FONT = function () {
/// <field type="String">雷达图轴线文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.RADARCHART_AXIS_TEXT_VISIBLE = function () {
/// <field type="Boolean">雷达图轴线文字是否可见, 默认值为true</field>
}

twaver.Defaults.RADARCHART_AXIS_VISIBLE = function () {
/// <field type="Boolean">雷达图轴线是否可见, 默认值为true</field>
}

twaver.Defaults.RADARCHART_RING_LINE_COLOR = function () {
/// <field type="String">雷达图轴线之间的连线颜色, 默认值为#808080</field>
}

twaver.Defaults.RADARCHART_RING_LINE_WIDTH = function () {
/// <field type="Number">雷达图轴线之间的连线宽度, 默认值为1</field>
}

twaver.Defaults.RADARCHART_RING_TYPE = function () {
/// <field type="String">雷达图轴线之间的连线类型, 默认值为line</field>
}

twaver.Defaults.RADARCHART_RING_VISIBLE = function () {
/// <field type="Boolean">雷达图轴线之间的连线是否可见, 默认值为true</field>
}

twaver.Defaults.RADARCHART_SCALE_COUNT = function () {
/// <field type="Number">雷达图刻度个数, 默认值为5</field>
}

twaver.Defaults.RADARCHART_SCALE_MAXVALUE = function () {
/// <field type="Number">雷达图刻度最大值, 默认值为1</field>
}

twaver.Defaults.RADARCHART_SCALE_MINVALUE = function () {
/// <field type="Number">雷达图刻度最小值, 默认值为0</field>
}

twaver.Defaults.RADARCHART_SCALE_TEXT_COLOR = function () {
/// <field type="String">雷达图刻度文字颜色, 默认值为#000000</field>
}

twaver.Defaults.RADARCHART_SCALE_TEXT_FONT = function () {
/// <field type="String">雷达图刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.RADARCHART_SCALE_TEXT_VISIBLE = function () {
/// <field type="Boolean">雷达图刻度文字是可见, 默认值为true</field>
}

twaver.Defaults.SCROLL_BAR_WIDTH = function () {
/// <field type="Number">滚动条宽度, 默认值为17</field>
}

twaver.Defaults.SELECT_COLOR = function () {
/// <field type="String">默认选中颜色(#C2CFF1)</field>
}

twaver.Defaults.SHOW_ALARM_IN_ATTACHMENT_DIV = function () {
/// <field type="Boolean">告警是否显示在告警div中，默认为true</field>
}

twaver.Defaults.SORT_FUNCTION = function (v1, v2) {
/// <summary>
/// 	默认的排序方法
/// </summary>
/// <param name="v1" type="Object">第一个值</param>
/// <param name="v2" type="Object">第二个值</param>
/// <returns type="Number">返回两个值的比较结果</returns>
}

twaver.Defaults.SPLITPANE_DIVIDER_BACKGROUND = function () {
/// <field type="String">分割面板分隔栏背景色, 默认值为#CCCCFF</field>
}

twaver.Defaults.SPLITPANE_DIVIDER_OPACITY = function () {
/// <field type="Number">移动分割面板分隔栏时, 分隔栏的透明度, 默认值为0.5</field>
}

twaver.Defaults.SPLITPANE_DIVIDER_WIDTH = function () {
/// <field type="Number">分割面板分隔栏宽度, 默认值为6</field>
}

twaver.Defaults.SPLITPANE_MASK_BACKGROUND = function () {
/// <field type="String">移动分割面板分隔条时, 分隔栏背景色</field>
}

twaver.Defaults.SPLITPANE_ORIENTATION = function () {
/// <field type="String">分割面板默认分割方式, 默认值为horizontal</field>
}

twaver.Defaults.SPLITPANE_POSITION = function () {
/// <field type="Number">分割面板默认分割比例, 默认值为0.5</field>
}

twaver.Defaults.TAB_CLOSABLE = function () {
/// <field type="Boolean">页签是否可关闭, 默认值为true</field>
}

twaver.Defaults.TAB_DISABLED = function () {
/// <field type="Boolean">页签是否被禁用, 默认值为false</field>
}

twaver.Defaults.TAB_MOVABLE = function () {
/// <field type="Boolean">是否可移动页签, 默认值为true</field>
}

twaver.Defaults.TAB_RESIZABLE = function () {
/// <field type="Boolean">是否可以更改页签大小, 默认值为true</field>
}

twaver.Defaults.TAB_VISIBLE = function () {
/// <field type="Boolean">页签是否可见, 默认值为true</field>
}

twaver.Defaults.TAB_WIDTH = function () {
/// <field type="Number">页签宽度, 默认值为100</field>
}

twaver.Defaults.TABLE_COLUMN_LINE_COLOR = function () {
/// <field type="String">表格列线条颜色的默认值(#DDD)</field>
}

twaver.Defaults.TABLE_COLUMN_LINE_WIDTH = function () {
/// <field type="Number">表格列线条宽度的默认值(1)</field>
}

twaver.Defaults.TABLE_EDITABLE = function () {
/// <field type="Boolean">默认表格是否可编辑(false)</field>
}

twaver.Defaults.TABLE_KEYBOARD_REMOVE_ENABLED = function () {
/// <field type="Boolean">默认是否可以用键盘DELETE键删除表格行(true)</field>
}

twaver.Defaults.TABLE_KEYBOARD_SELECT_ENABLED = function () {
/// <field type="Boolean">默认是否可以用键盘CTRL+A键选中表格所有行(true)</field>
}

twaver.Defaults.TABLE_MAKE_VISIBLE_ON_SELECTED = function () {
/// <field type="Boolean">表格模型数据被选中时, 表格是否自动滚动到被选中行, 默认值为true</field>
}

twaver.Defaults.TABLE_ROW_HEIGHT = function () {
/// <field type="Number">表格行高, 默认值为19</field>
}

twaver.Defaults.TABLE_ROW_LINE_COLOR = function () {
/// <field type="String">表格行线条颜色, 默认值为#DDDD</field>
}

twaver.Defaults.TABLE_ROW_LINE_WIDTH = function () {
/// <field type="Number">表格行线条宽度, 默认值为1</field>
}

twaver.Defaults.TABLEHEADER_BACKGROUND = function () {
/// <field type="String">表头背景色, 默认值为#EBEBEB</field>
}

twaver.Defaults.TABLEHEADER_COLUMN_LINE_COLOR = function () {
/// <field type="String">表头列线条颜色, 默认值为#DDD</field>
}

twaver.Defaults.TABLEHEADER_HEIGHT = function () {
/// <field type="Number">表头高度, 默认值为24</field>
}

twaver.Defaults.TABLEHEADER_INSERT_BACKGROUND = function () {
/// <field type="String">移动表头时, 新插入位置颜色, 默认值为orange</field>
}

twaver.Defaults.TABLEHEADER_MOVE_BACKGROUND = function () {
/// <field type="String">移动表头时, 表头背景色, 默认值为rgba(184,211,240,0.7)</field>
}

twaver.Defaults.TABLEHEADER_RESIZE_TOLERANCE = function () {
/// <field type="Number">更改表头大小时, 鼠标距离表头边界值, 默认值为3</field>
}

twaver.Defaults.TABLEHEADER_SORT_ASC_ICON = function () {
/// <field type="String">表头升序排序图标, 默认值为sort_asc</field>
}

twaver.Defaults.TABLEHEADER_SORT_DESC_ICON = function () {
/// <field type="String">表头降序排序图标, 默认值为sort_desc</field>
}

twaver.Defaults.TABLEHEADER_SORT_ICON_POSITION = function () {
/// <field type="String">表头排序图标位置, 默认值为98% 50%</field>
}

twaver.Defaults.TABPANE_CLOSE_ICON = function () {
/// <field type="String">页签面板关闭图标, 默认值为close_icon</field>
}

twaver.Defaults.TABPANE_DISABLED_COLOR = function () {
/// <field type="String">页签面板禁用颜色, 默认值为#BABBBC</field>
}

twaver.Defaults.TABPANE_HORIZONTAL_ALIGN = function () {
/// <field type="String">页签面板的标签文字水平对齐方式, 默认值为center</field>
}

twaver.Defaults.TABPANE_INSERT_BACKGROUND = function () {
/// <field type="String">拖拽页签面板时新插入位置信息的背景色</field>
}

twaver.Defaults.TABPANE_MOVE_BACKGROUND = function () {
/// <field type="String">拖拽页签面板时, 页签的背景颜色, 默认值为rgba(184,211,240,0.7)</field>
}

twaver.Defaults.TABPANE_RESIZE_TOLERANCE = function () {
/// <field type="Number">更改页签面板页签大小时, 鼠标离页签边界的距离, 默认值为3</field>
}

twaver.Defaults.TABPANE_SELECT_BACKGROUND = function () {
/// <field type="String">页签面板被选中页签的背景色, 默认值为white</field>
}

twaver.Defaults.TABPANE_SELECT_NEXT_ON_CLOSE = function () {
/// <field type="Boolean">页签面板页签被关闭时, 是否自动选中下一个页签, 默认值为true</field>
}

twaver.Defaults.TABPANE_SELECT_NEXT_ON_INVISIBLE = function () {
/// <field type="Boolean">选项卡面板上选中的选项卡消失时，是否选中下一个选项卡，默认为true</field>
}

twaver.Defaults.TABPANE_TAB_BACKGROUND = function () {
/// <field type="String">页签面板中页签的背景色, 默认值为#EBEBEB</field>
}

twaver.Defaults.TABPANE_TAB_GAP = function () {
/// <field type="Number">页签面板页签之间的间距, 默认值为1</field>
}

twaver.Defaults.TABPANE_TAB_HEIGHT = function () {
/// <field type="Number">页签面板页签高度, 默认值为24</field>
}

twaver.Defaults.TABPANE_TAB_ORIENTATION = function () {
/// <field type="String">页签面板页签的方位, 默认值为top</field>
}

twaver.Defaults.TABPANE_TAB_RADIUS = function () {
/// <field type="Number">页签面板页签圆角半径, 默认值为0</field>
}

twaver.Defaults.TITLEPANE_TITLE_BACKGROUND = function () {
/// <field type="String">标题面板标题栏背景色, 默认值为#DDD</field>
}

twaver.Defaults.TITLEPANE_TITLE_HEIGHT = function () {
/// <field type="Number">标题面板标题栏高度, 默认值为20</field>
}

twaver.Defaults.TITLEPANE_TITLE_HORIZONTAL_ALIGN = function () {
/// <field type="String">标题面板标题栏水平对齐方式, 默认值为left</field>
}

twaver.Defaults.TOOLTIP_BACKGROUND = function () {
/// <field type="String">提示信息背景色, 默认值为lightyellow</field>
}

twaver.Defaults.TOOLTIP_BORDER = function () {
/// <field type="String">提示信息边框样式, 默认值为1px solid gray</field>
}

twaver.Defaults.TOOLTIP_BORDER_RADIUS = function () {
/// <field type="String">提示信息边框圆角半径, 默认值为6px</field>
}

twaver.Defaults.TOOLTIP_BOX_SHADOW = function () {
/// <field type="String">提示信息阴影样式, 默认值为0px 0px 3px #AAA</field>
}

twaver.Defaults.TOOLTIP_COLOR = function () {
/// <field type="String">提示信息字体颜色, 默认值为black</field>
}

twaver.Defaults.TOOLTIP_DISMISS_DELAY = function () {
/// <field type="Number">提示信息消失延迟事件，默认为4000ms</field>
}

twaver.Defaults.TOOLTIP_FONT_SIZE = function () {
/// <field type="String">提示信息字体大小, 默认值为12px</field>
}

twaver.Defaults.TOOLTIP_INITIAL_DELAY = function () {
/// <field type="Number">提示信息显示前的延迟时间，默认为750ms</field>
}

twaver.Defaults.TOOLTIP_PADDING = function () {
/// <field type="String">提示信息内容边距, 默认值为4px 8px</field>
}

twaver.Defaults.TOOLTIP_RESHOW_DELAY = function () {
/// <field type="Number">提示信息重新显示延迟时间，默认为500ms</field>
}

twaver.Defaults.TOOLTIP_XOFFSET = function () {
/// <field type="Number">提示信息x轴偏移量, 默认值为12</field>
}

twaver.Defaults.TOOLTIP_YOFFSET = function () {
/// <field type="Number">提示信息y轴偏移量, 默认值为12</field>
}

twaver.Defaults.TOOLTIP_ZINDEX = function () {
/// <field type="Number">提示信息zIndex值，默认为100000</field>
}

twaver.Defaults.TOUCH_MOVE_THRESHOLD = function () {
/// <field type="Number">触摸交互时，手指移动阀值，默认为5</field>
}

twaver.Defaults.TOUCH_RECT_SELECT_THRESHOLD = function () {
/// <field type="Number">触摸交互时，选中阀值，默认为20</field>
}

twaver.Defaults.TOUCH_ZOOM_THRESHOLD = function () {
/// <field type="Number">触摸交互时，缩放阀值，默认为30</field>
}

twaver.Defaults.TREE_COLLAPSE_ICON = function () {
/// <field type="String">树节点折叠图标, 默认值为collapse_icon</field>
}

twaver.Defaults.TREE_EXPAND_ICON = function () {
/// <field type="String">树节点展开图标, 默认值为expand_icon</field>
}

twaver.Defaults.TREE_INDENT = function () {
/// <field type="Number">树节点缩进量, 默认值为16</field>
}

twaver.Defaults.TREE_KEYBOARD_REMOVE_ENABLED = function () {
/// <field type="Boolean">是否允许在树上用DELETE键删除选中节点, 默认值为true</field>
}

twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED = function () {
/// <field type="Boolean">是否允许在树上用CTRL+A键选中全部节点, 默认值为true</field>
}

twaver.Defaults.TREE_MAKE_VISIBLE_ON_SELECTED = function () {
/// <field type="Boolean">树模型数据被选中时, 树表是否自动滚动到让选中项可见的位置, 默认值为true</field>
}

twaver.Defaults.TREE_ROW_HEIGHT = function () {
/// <field type="Number">树节点行高, 默认值为19</field>
}

twaver.Defaults.TREE_ROW_LINE_COLOR = function () {
/// <field type="String">树节点行线条颜色, 默认值为#DDD</field>
}

twaver.Defaults.TREE_ROW_LINE_WIDTH = function () {
/// <field type="Number">树节点行线条宽度, 默认值为0</field>
}

twaver.Defaults.TREETABLE_COLLAPSE_ICON = function () {
/// <field type="String">树表节点折叠图标, 默认值为collapse_icon</field>
}

twaver.Defaults.TREETABLE_COLUMN_LINE_COLOR = function () {
/// <field type="String">树表列线条颜色, 默认值为#DDD</field>
}

twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH = function () {
/// <field type="Number">树表列线条宽度, 默认值为1</field>
}

twaver.Defaults.TREETABLE_EDITABLE = function () {
/// <field type="Boolean">树表是否可编辑, 默认值为false</field>
}

twaver.Defaults.TREETABLE_EXPAND_ICON = function () {
/// <field type="String">树表节点展开图标, 默认值为expand_icon</field>
}

twaver.Defaults.TREETABLE_INDENT = function () {
/// <field type="Number">树表节点缩进值, 默认值为16</field>
}

twaver.Defaults.TREETABLE_KEYBOARD_REMOVE_ENABLED = function () {
/// <field type="Boolean">是否允许在树表上用delete键删除选中节点, 默认值为true</field>
}

twaver.Defaults.TREETABLE_KEYBOARD_SELECT_ENABLED = function () {
/// <field type="Boolean">是否允许在树表上用CTRL+A键选中全部节点, 默认值为true</field>
}

twaver.Defaults.TREETABLE_MAKE_VISIBLE_ON_SELECTED = function () {
/// <field type="Boolean">树表模型数据被选中时, 树表是否自动滚动到让选中项可见的位置, 默认值为true</field>
}

twaver.Defaults.TREETABLE_ROW_HEIGHT = function () {
/// <field type="Number">树表行高, 默认值为19</field>
}

twaver.Defaults.TREETABLE_ROW_LINE_COLOR = function () {
/// <field type="String">树表行线条颜色, 默认值为#DDD</field>
}

twaver.Defaults.TREETABLE_ROW_LINE_WIDTH = function () {
/// <field type="Number">树表行线条宽度, 默认值为1</field>
}

twaver.Defaults.VECTORUI_FUNCTION = function (network, element) {
/// <summary>
/// 	矢量拓扑图上的网元UI对象生成器
/// </summary>
/// <param name="network" type="twaver.vector.Network">拓扑图</param>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.vector.ElementUI">返回网元视图对象</returns>
}

twaver.Defaults.VIEW_FONT_FAMILY = function () {
/// <field type="String">视图字体样式, 默认值为arial, tahoma, sans-serif, helvetica</field>
}

twaver.Defaults.VIEW_FONT_SIZE = function () {
/// <field type="String">视图字体大小, 默认值为12px</field>
}

twaver.Defaults.VIEW_POSITION = function () {
/// <field type="String">视图位置样式, 默认值为absolute</field>
}

twaver.Defaults.ZOOM_ANIMATE = function () {
/// <field type="Boolean">缩放时是否有动画效果, 默认值为true</field>
}

twaver.Defaults.ZOOM_INCREMENT = function () {
/// <field type="Number">缩放比例系数, 默认值为1.3</field>
}

twaver.Defaults.ZOOM_MAX = function () {
/// <field type="Number">最大缩放比例, 默认值为5</field>
}

twaver.Defaults.ZOOM_MIN = function () {
/// <field type="Number">最小缩放比例, 默认值为0.1</field>
}


twaver.EventDispatcher.prototype.add = function (l, s, a) {
/// <summary>
/// 	添加指定的事件监听器
/// </summary>
/// <param name="l" type="Function">指定的事件监听器</param>
/// <param name="s" type="Object">监听器的作用域，为空时指的是window</param>
/// <param name="a" type="Boolean">是否添加在监听器列表的最前方，如果为空，则添加在最后一个位置</param>
}

twaver.EventDispatcher.prototype.contains = function (l, s) {
/// <summary>
/// 	判断是否包含指定的事件
/// </summary>
/// <param name="l" type="Function">指定的事件监听器</param>
/// <param name="s" type="Object">监听器的作用域，为空时指的是window</param>
/// <returns type="Boolean">如果包含返回true，否则返回false</returns>
}

twaver.EventDispatcher.prototype.fire = function (e) {
/// <summary>
/// 	派发指定的事件
/// </summary>
/// <param name="e" type="Object">指定的事件</param>
}

twaver.EventDispatcher.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.EventDispatcher.prototype.remove = function (l, s) {
/// <summary>
/// 	移除指定的事件监听器
/// </summary>
/// <param name="l" type="Function">指定的事件监听器</param>
/// <param name="s" type="Object">监听器的作用域，为空时指的是window</param>
}


twaver.ImageAsset = function (name, source, width, height) {
/// <param name="name" type="String"></param>
/// <param name="source" type="String"></param>
/// <param name="width" type="String"></param>
/// <param name="height" type="String"></param>
/// <returns type="twaver.ImageAsset"></returns>
}

twaver.ImageAsset.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.ImageAsset.prototype.getFunction = function () {
/// <returns type="String"></returns>
}

twaver.ImageAsset.prototype.getHeight = function () {
/// <summary>
/// 	获取图片的高度
/// </summary>
/// <returns type="Number">图片的高度</returns>
}

twaver.ImageAsset.prototype.getImage = function (color) {
/// <summary>
/// 	获取指定渲染色的图片对象
/// </summary>
/// <param name="color" type="Object">图片渲染的颜色</param>
/// <returns type="twaver.ImageAsset"></returns>
}

twaver.ImageAsset.prototype.getName = function () {
/// <summary>
/// 	获取图片的名称
/// </summary>
/// <returns type="String">图片的名称</returns>
}

twaver.ImageAsset.prototype.getSrc = function () {
/// <summary>
/// 	获取图片的路径
/// </summary>
/// <returns type="String">图片的路径</returns>
}

twaver.ImageAsset.prototype.getWidth = function () {
/// <summary>
/// 	获取图片的宽度
/// </summary>
/// <returns type="Number">图片的宽度</returns>
}

twaver.ImageAsset.prototype.isSvg = function () {
/// <summary>
/// 	获取是否是SVG图片
/// </summary>
/// <returns type="Boolean">返回是否是SVG图片</returns>
}


twaver.JsonSerializer = function (dataBox, settings, filterFunction) {
/// <summary>
/// 	JsonSerializer是用于对数据容器中的数据进行序列化和反序列化的。
/// 	DataBox上提供了一种功能，可以直接从JSON文件中导入数据，或将DataBox中的数据导出到JSON文件。它是通过JsonSerializer这个类来实现的。
/// 	JsonSerializer是数据容器上的一种功能，可以在序列化时进行一些设置来更改导出时的规则
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">进行序列化的数据容器</param>
/// <param name="settings" type="twaver.SerializationSettings">序列化设置的对象</param>
/// <param name="filterFunction" type="Function">序列化时的过滤函数</param>
/// <returns type="twaver.JsonSerializer">序列化对象本身</returns>
}

twaver.JsonSerializer.prototype.deserialize = function (jsonString, rootParent) {
/// <summary>
/// 	将JSON数据序列化到数据容器中的某个对象上，如果rootParent为空，则序列化到数据容器中。
/// </summary>
/// <param name="jsonString" type="String">JSON数据</param>
/// <param name="rootParent" type="twaver.Data">反序列化时的根对象，如果为空，则序列化到数据容器中。</param>
}

twaver.JsonSerializer.prototype.deserializeClientJson = function (instance, json, property) {
/// <summary>
/// 	从指定的JSON字符串中反序列化某个对象的Client属性
/// </summary>
/// <param name="instance" type="Object">反序列化的对象</param>
/// <param name="json" type="String">JSON字符串</param>
/// <param name="property" type="String">反序列化的属性名</param>
}

twaver.JsonSerializer.prototype.deserializePropertyJson = function (instance, json, property) {
/// <summary>
/// 	从指定的JSON字符串中反序列化某个对象的Property属性
/// </summary>
/// <param name="instance" type="Object">反序列化的对象</param>
/// <param name="json" type="String">JSON字符串</param>
/// <param name="property" type="String">反序列化的属性名</param>
}

twaver.JsonSerializer.prototype.deserializeStyleJson = function (instance, json, property) {
/// <summary>
/// 	从指定的JSON字符串中反序列化某个对象的Style属性
/// </summary>
/// <param name="instance" type="Object">反序列化的对象</param>
/// <param name="json" type="String">JSON字符串</param>
/// <param name="property" type="String">反序列化的属性名</param>
}

twaver.JsonSerializer.prototype.deserializeValue = function (json, type) {
/// <summary>
/// 	从JSON字符串中反序列化属性值
/// </summary>
/// <param name="json" type="String">JSON字符串</param>
/// <param name="type" type="String">属性的类型</param>
/// <returns type="String">属性值</returns>
}

twaver.JsonSerializer.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String"></returns>
}

twaver.JsonSerializer.prototype.initRefs = function (data) {
/// <summary>
/// 	初始化数据容器中数据对象的ref值，ref值是TWaver导出时内部使用的属性
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
}

twaver.JsonSerializer.prototype.isSerializable = function (data) {
/// <summary>
/// 	是否需要序列化指定的对象
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <returns type="Boolean">true为序列化，否则为false</returns>
}

twaver.JsonSerializer.prototype.serialize = function () {
/// <summary>
/// 	序列化相关的数据容器
/// </summary>
/// <returns type="String">JSON字符串</returns>
}

twaver.JsonSerializer.prototype.serializeBody = function () {
/// <summary>
/// 	序列化数据容器的主体部分，TWaver内部使用
/// </summary>
}

twaver.JsonSerializer.prototype.serializeClientJson = function (instance, client, newInstance, dataObject) {
/// <summary>
/// 	将对象的Client属性序列化成JSON字符串
/// </summary>
/// <param name="instance" type="Object">序列化的对象</param>
/// <param name="client" type="String">Client属性名称</param>
/// <param name="newInstance" type="Object">新的对象。用于和instance对象比较，如果序列化的Client属性值相等，就不需要序列化这个属性</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.JsonSerializer.prototype.serializeData = function (data) {
/// <summary>
/// 	序列化数据对象
/// </summary>
/// <param name="data" type="twaver.Data">序列化的数据对象</param>
}

twaver.JsonSerializer.prototype.serializePropertyJson = function (instance, property, newInstance, dataObject) {
/// <summary>
/// 	将对象的Property属性序列化成JSON字符串
/// </summary>
/// <param name="instance" type="Object">序列化的对象</param>
/// <param name="property" type="String">Property属性名称</param>
/// <param name="newInstance" type="Object">新的对象。用于和instance对象比较，如果序列化的Property属性值相等，就不需要序列化这个属性</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.JsonSerializer.prototype.serializeStyleJson = function (instance, style, newInstance, dataObject) {
/// <summary>
/// 	将数据对象的Style属性序列化成JSON数据
/// </summary>
/// <param name="instance" type="Object">序列化的对象</param>
/// <param name="style" type="String">Style属性名称</param>
/// <param name="newInstance" type="Object">新的实例化对象。用于和instance对象比较，如果序列化的Style属性值相等，就不需要序列化这个属性</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.JsonSerializer.prototype.serializeValue = function (property, value, newInstanceValue, type, dataObject) {
/// <summary>
/// 	序列化对象的某个属性
/// </summary>
/// <param name="property" type="String">序列化的属性名称</param>
/// <param name="value" type="String">序列化的属性值</param>
/// <param name="newInstanceValue" type="Object">新的实例化对象的属性值</param>
/// <param name="type" type="String">序列化属性的类型。可选值为：'cdata','data','point','list.point','list.string','list.number','rectangle'</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}


twaver.layout.AutoLayouter = function (elementBox) {
/// <summary>
/// 	对指定网元容器的网元进行自动布局，使网元按一定的规则自动排列，预定义的布局类型有如下几种：
/// 	round 圆形布局
/// 	symmetry 对称布局
/// 	hierarchic 层次布局
/// 	topbottom 从上到下布局
/// 	bottomtop 从下到上布局
/// 	rightleft 从右到左布局
/// 	leftright 从左到右布局
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">网元容器</param>
/// <returns type="twaver.layout.AutoLayouter"></returns>
/// <example>
/// 	var autoLayouter = new twaver.layout.AutoLayouter(box);
/// 	autoLayouter.doLayout('round');
/// </example>
}

twaver.layout.AutoLayouter.prototype.doLayout = function (type, finishFunction) {
/// <summary>
/// 	对拓扑按指定布局类型布局。
/// 	布局类型有如下几种：
/// 	round 圆形布局
/// 	symmetry 对称布局
/// 	hierarchic 层次布局
/// 	topbottom 从上到下布局
/// 	bottomtop 从下到上布局
/// 	rightleft 从右到左布局
/// 	leftright 从左到右布局
/// </summary>
/// <param name="type" type="String">布局类型</param>
/// <param name="finishFunction" type="Function">布局完后，执行的回调函数，可选，默认值为null</param>
/// <returns type="Boolean">如果布局成功，则返回true，否者返回false</returns>
/// <example>
/// 	var autoLayouter = new twaver.layout.AutoLayouter(network);
/// 	autoLayouter.doLayout('round', function(){
/// 	    network.zoomOverview();
/// 	});
/// </example>
}

twaver.layout.AutoLayouter.prototype.doLayoutImpl = function (type, finishFunction, result) {
/// <summary>
/// 	调用doLayout或getLayoutResult方法时，内部调用此方法，用指定布局类型对拓扑布局，或者根据指定布局类型获取布局后网元新的中心点
/// 	布局类型有如下几种：
/// 	round 圆形布局
/// 	symmetry 对称布局
/// 	hierarchic 层次布局
/// 	topbottom 从上到下布局
/// 	bottomtop 从下到上布局
/// 	rightleft 从右到左布局
/// 	leftright 从左到右布局
/// </summary>
/// <param name="type" type="String">布局类型</param>
/// <param name="finishFunction" type="Function">布局完后，执行的回调函数，可选，默认值为null</param>
/// <param name="result" type="Object">空对象，用于保存布局结果（key为网元id，值为网元的新中心位置），可选，默认值为null</param>
/// <returns type="Boolean">如果布局成功，则返回true，否者返回false</returns>
}

twaver.layout.AutoLayouter.prototype.getClassName = function () {
/// <summary>
/// 	返回字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.layout.AutoLayouter.prototype.getDimension = function (node) {
/// <summary>
/// 	获取指定节点的大小，默认如果accountAttachments为true则返回网元视图的viewRect大小，否则返回网元的rect大小
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <returns type="Object">返回指定节点的大小，值为包含width和height属性的Object对象</returns>
}

twaver.layout.AutoLayouter.prototype.getElementBox = function () {
/// <summary>
/// 	获取网元容器
/// </summary>
/// <returns type="twaver.ElementBox">返回网元容器</returns>
}

twaver.layout.AutoLayouter.prototype.getElements = function () {
/// <summary>
/// 	获取参与自动布局的网元，默认不可见，不可移动的网元不参与布局
/// </summary>
/// <returns type="twaver.List">返回参与自动布局的网元</returns>
}

twaver.layout.AutoLayouter.prototype.getExplicitXOffset = function () {
/// <summary>
/// 	获取x轴偏移量，布局后，所有网元x坐标将偏移指定像素值，默认值为50
/// </summary>
/// <returns type="Number">返回x轴偏移量</returns>
}

twaver.layout.AutoLayouter.prototype.getExplicitYOffset = function () {
/// <summary>
/// 	获取y轴偏移量，布局后，所有网元y坐标将偏移指定像素值，默认值为50
/// </summary>
/// <returns type="Number">返回y轴偏移量</returns>
}

twaver.layout.AutoLayouter.prototype.getGroupLayoutType = function (group) {
/// <summary>
/// 	获取指定组的布局类型, 默认为自动布局的布局类型, 可以重写此方法对指定的组用特殊的布局类型布局
/// </summary>
/// <param name="group" type="twaver.Group">组</param>
/// <returns type="String">返回指定组的布局类型</returns>
}

twaver.layout.AutoLayouter.prototype.getLayoutResult = function (type) {
/// <summary>
/// 	根据指定布局类型，获取布局后网元新的中心位置
/// 	布局类型有如下几种：
/// 	round 圆形布局
/// 	symmetry 对称布局
/// 	hierarchic 层次布局
/// 	topbottom 从上到下布局
/// 	bottomtop 从下到上布局
/// 	rightleft 从右到左布局
/// 	leftright 从左到右布局
/// </summary>
/// <param name="type" type="String">布局类型</param>
/// <returns type="Object">返回key为网元id，值为新中心位置的对象</returns>
/// <example>
/// 	var autoLayouter = new twaver.layout.AutoLayouter(network);
/// 	var result = autoLayouter.getLayoutResult('round');
/// 	for(var id in result){
/// 	    console.log(id, result[id].x, result[id].y);
/// 	}
/// </example>
}

twaver.layout.AutoLayouter.prototype.getRepulsion = function () {
/// <summary>
/// 	获取网元之间的排斥系数，默认值为1，排斥系数越大，布局后网元之间的间距越大，反之越小
/// </summary>
/// <returns type="Number">返回网元之间的排斥系数</returns>
}

twaver.layout.AutoLayouter.prototype.getType = function () {
/// <summary>
/// 	获取布局类型
/// </summary>
/// <returns type="String">返回布局类型</returns>
}

twaver.layout.AutoLayouter.prototype.isAnimate = function () {
/// <summary>
/// 	获取自动布局是否有动画效果，默认值为true
/// </summary>
/// <returns type="Boolean">返回自动布局是否有动画效果</returns>
}

twaver.layout.AutoLayouter.prototype.isExpandGroup = function () {
/// <summary>
/// 	获取自动布局是否展开组，默认值为false
/// </summary>
/// <returns type="Boolean">返回自动布局是否展开组</returns>
}

twaver.layout.AutoLayouter.prototype.isMovable = function (element) {
/// <summary>
/// 	判断指定网元是否可移动, 也即是否参与自动布局
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元可移动, 也即参与自动布局, 则返回true, 否则返回false</returns>
}

twaver.layout.AutoLayouter.prototype.isVisible = function (element) {
/// <summary>
/// 	判断指定网元是否可见, 不可见的网元不参与自动布局
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果指定网元可见, 则返回true, 否则返回false</returns>
}

twaver.layout.AutoLayouter.prototype.setAnimate = function (value) {
/// <summary>
/// 	设置自动布局是否有动画效果，默认值为true
/// </summary>
/// <param name="value" type="Boolean">是否有动画效果</param>
}

twaver.layout.AutoLayouter.prototype.setExpandGroup = function (value) {
/// <summary>
/// 	设置自动布局是否展开组，默认值为false
/// </summary>
/// <param name="value" type="Boolean">返回自动布局是否展开组</param>
}

twaver.layout.AutoLayouter.prototype.setExplicitXOffset = function (value) {
/// <summary>
/// 	设置x轴偏移量，布局后，所有网元x坐标将偏移指定像素值，默认值为50
/// </summary>
/// <param name="value" type="Number">x轴偏移量</param>
}

twaver.layout.AutoLayouter.prototype.setExplicitYOffset = function (value) {
/// <summary>
/// 	设置y轴偏移量，布局后，所有网元y坐标将偏移指定像素值，默认值为50
/// </summary>
/// <param name="value" type="Number">y轴偏移量</param>
}

twaver.layout.AutoLayouter.prototype.setRepulsion = function (value) {
/// <summary>
/// 	设置网元之间的排斥系数，默认值为1，排斥系数越大，布局后网元之间的间距越大，反之越小
/// </summary>
/// <param name="value" type="Number">网元之间的排斥系数</param>
}


twaver.layout.SpringLayouter = function (network) {
/// <summary>
/// 	对指定的拓扑进行弹簧布局，自动将网元根据连线关系分开，最终根据网元之间的排斥力趋于平衡，适用于所有节点相互有连线的拓扑结构
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.layout.SpringLayouter"></returns>
/// <example>
/// 	var springLayouter = new twaver.layout.SpringLayouter(network);
/// 	springLayouter.start();
/// </example>
}

twaver.layout.SpringLayouter.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.layout.SpringLayouter.prototype.getInterval = function () {
/// <summary>
/// 	获取两次自动布局之间的时间间隔，单位为毫秒，默认值为50ms
/// </summary>
/// <returns type="Number">返回两次自动布局之间的时间间隔，单位为毫秒</returns>
}

twaver.layout.SpringLayouter.prototype.getLimitBounds = function () {
/// <summary>
/// 	获取布局界限，布局时网元不能超出此界限，默认值为null，表示布局时网元没有区域限制
/// </summary>
/// <returns type="Object">布局界限，包含x、y、width和height属性的Object对象</returns>
}

twaver.layout.SpringLayouter.prototype.getLinkRepulsionFactor = function () {
/// <summary>
/// 	获取连线排斥力系数，值越大，网元和连线之间的距离越大，默认值为0.6
/// </summary>
/// <returns type="Number">连线排斥力系数</returns>
}

twaver.layout.SpringLayouter.prototype.getNetwork = function () {
/// <summary>
/// 	获取和弹簧布局绑定的拓扑
/// </summary>
/// <returns type="twaver.network.Network">和弹簧布局绑定的拓扑</returns>
}

twaver.layout.SpringLayouter.prototype.getNodeRepulsionFactor = function () {
/// <summary>
/// 	获取节点排斥力系数，值越大，网元之间的距离越大，默认值为0.6
/// </summary>
/// <returns type="Number">节点排斥力系数</returns>
}

twaver.layout.SpringLayouter.prototype.getStepCount = function () {
/// <summary>
/// 	获取步进，即每次布局时网元重新计算位置的次数，值越大，布局越快趋于平衡，默认值为10
/// </summary>
/// <returns type="Number">步进</returns>
}

twaver.layout.SpringLayouter.prototype.isMovable = function (node) {
/// <summary>
/// 	判断指定节点是否可以移动，如果不可以移动，则在弹簧布局时，此节点将固定不动，否则网元位置会自动改变
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <returns type="Boolean">如果节点可以移动，则返回true，否则返回false</returns>
}

twaver.layout.SpringLayouter.prototype.isRunning = function () {
/// <summary>
/// 	判断弹簧布局是否正在运行
/// </summary>
/// <returns type="Boolean">如果布局正在运行，则返回true，否则返回false</returns>
}

twaver.layout.SpringLayouter.prototype.isVisible = function (element) {
/// <summary>
/// 	判断指定网元是否参与布局
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元参与布局，则返回true，否则返回false</returns>
}

twaver.layout.SpringLayouter.prototype.relax = function () {
/// <summary>
/// 	调用此方法进行一次布局，弹簧布局以一定时间间隔调用此方法对网元进行自动布局
/// </summary>
}

twaver.layout.SpringLayouter.prototype.setInterval = function (interval) {
/// <summary>
/// 	设置两次自动布局之间的时间间隔，单位为毫秒，默认值为50ms
/// </summary>
/// <param name="interval" type="Number">两次自动布局之间的时间间隔，单位为毫秒</param>
}

twaver.layout.SpringLayouter.prototype.setLimitBounds = function (limitBounds) {
/// <summary>
/// 	设置布局界限，布局时网元不能超出此界限，默认值为null，表示布局时网元没有区域限制
/// </summary>
/// <param name="limitBounds" type="Object">布局界限，包含x、y、width和height属性的Object对象</param>
}

twaver.layout.SpringLayouter.prototype.setLinkRepulsionFactor = function (linkRepulsionFactor) {
/// <summary>
/// 	设置连线排斥力系数，值越大，网元和连线之间的距离越大，默认值为0.6
/// </summary>
/// <param name="linkRepulsionFactor" type="Number">连线排斥力系数</param>
}

twaver.layout.SpringLayouter.prototype.setNodeRepulsionFactor = function (nodeRepulsionFactor) {
/// <summary>
/// 	设置节点排斥力系数，值越大，网元之间的距离越大，默认值为0.6
/// </summary>
/// <param name="nodeRepulsionFactor" type="Number">节点排斥力系数</param>
}

twaver.layout.SpringLayouter.prototype.setStepCount = function (stepCount) {
/// <summary>
/// 	设置步进，即每次布局时网元重新计算位置的次数，值越大，布局越快趋于平衡，默认值为10
/// </summary>
/// <param name="stepCount" type="Number">步进</param>
}

twaver.layout.SpringLayouter.prototype.start = function () {
/// <summary>
/// 	开始布局
/// </summary>
}

twaver.layout.SpringLayouter.prototype.stop = function () {
/// <summary>
/// 	停止布局
/// </summary>
}


twaver.List = function () {
/// <summary>
/// 	构造函数
/// </summary>
/// <returns type="twaver.List"></returns>
}

twaver.List.prototype.add = function (item, index) {
/// <summary>
/// 	在指定的序号上添加一个子项
/// </summary>
/// <param name="item" type="Object">添加的数据对象</param>
/// <param name="index" type="Number">添加的数据对象的序号，如果序号为空，则添加在队列的最后一个位置</param>
/// <returns type="Number">返回list的长度</returns>
}

twaver.List.prototype.addAll = function (array) {
/// <summary>
/// 	在列表的末尾添加多个元素，并返回它的长度
/// </summary>
/// <param name="array" type="Object">添加的子项</param>
}

twaver.List.prototype.clear = function () {
/// <summary>
/// 	清空列表中的内容
/// </summary>
/// <returns type="Array">返回含有被删除的元素的数组</returns>
}

twaver.List.prototype.contains = function (item) {
/// <summary>
/// 	判断列表中是否包含指定的项
/// </summary>
/// <param name="item" type="Object">指定的子项</param>
/// <returns type="Boolean">true为包含，否则为false</returns>
}

twaver.List.prototype.forEach = function (f, scope) {
/// <summary>
/// 	循环遍历列表中所有的数据
/// </summary>
/// <param name="f" type="Function">遍历时的回调函数</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时，指的是window</param>
}

twaver.List.prototype.forEachReverse = function (f, scope) {
/// <summary>
/// 	反向循环遍历列表中所有的数据
/// </summary>
/// <param name="f" type="Function">遍历时的回调函数</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时，指的是window</param>
}

twaver.List.prototype.get = function (index) {
/// <summary>
/// 	获取指定序号上的数据项
/// </summary>
/// <param name="index" type="Number">指定的序号</param>
/// <returns type="Object">指定序号上的数据项</returns>
}

twaver.List.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.List.prototype.indexOf = function (item) {
/// <param name="item" type="String"></param>
/// <returns type="String"></returns>
}

twaver.List.prototype.isEmpty = function () {
/// <summary>
/// 	判断列表是否为空
/// </summary>
/// <returns type="Boolean">如果为空返回true，否则返回false</returns>
}

twaver.List.prototype.remove = function (item) {
/// <summary>
/// 	移除列表上指定的项
/// </summary>
/// <param name="item" type="Object">移除的列表项</param>
/// <returns type="Number">数据项的序号</returns>
}

twaver.List.prototype.removeAt = function (index) {
/// <summary>
/// 	移除列表上指定的序号上的数据项
/// </summary>
/// <param name="index" type="Number">指定的序号值</param>
/// <returns type="String"></returns>
}

twaver.List.prototype.set = function (index, item) {
/// <summary>
/// 	给指定的序号上设置数据项
/// </summary>
/// <param name="index" type="Number">指定的序号值</param>
/// <param name="item" type="Object">指定的数据项</param>
/// <returns type="String"></returns>
}

twaver.List.prototype.size = function () {
/// <summary>
/// 	列表的长度
/// </summary>
/// <returns type="Number">列表的长度</returns>
}

twaver.List.prototype.sort = function (sortFunction) {
/// <summary>
/// 	按照指定的排序方法排序
/// </summary>
/// <param name="sortFunction" type="Function">可选，排序的函数</param>
/// <returns type="twaver.List"></returns>
}

twaver.List.prototype.toArray = function (matchFunction, scope) {
/// <summary>
/// 	根据指定的函数将列表转成数组
/// </summary>
/// <param name="matchFunction" type="Function">转化时的条件函数</param>
/// <param name="scope" type="Object">条件函数的作用域，为空时指的是window</param>
/// <returns type="Array"></returns>
}

twaver.List.prototype.toList = function (matchFunction, scope) {
/// <param name="matchFunction" type="String"></param>
/// <param name="scope" type="String"></param>
/// <returns type="String"></returns>
}


twaver.network.Attachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	所有附件的基类，附件是和网元视图关联的视图对象，用于显示网元的附属信息，例如告警、名称标签、图标等。可以定义附件是否显示在附件层，附件层在网元层的上面，所以会遮挡网元；为了让告警信息不被其他网元遮挡，告警等附件默认显示在附件层，也即告警显示在所有网元的上面
/// </summary>
/// <param name="elementUI" type="twaver.network.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在附件层，可选，默认为false</param>
/// <returns type="twaver.network.Attachment"></returns>
}

twaver.network.Attachment.prototype.dispose = function () {
/// <summary>
/// 	销毁附件
/// </summary>
}

twaver.network.Attachment.prototype.getAlpha = function () {
/// <summary>
/// 	获取附件透明度，默认值为1
/// </summary>
/// <returns type="Number">返回附件透明度，默认值为1</returns>
}

twaver.network.Attachment.prototype.getClassName = function () {
/// <summary>
/// 	获取字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.network.Attachment.prototype.getElement = function () {
/// <summary>
/// 	获取和附件关联的网元
/// </summary>
/// <returns type="twaver.Element">返回和附件关联的网元</returns>
}

twaver.network.Attachment.prototype.getElementUI = function () {
/// <summary>
/// 	获取和附件关联的网元视图
/// </summary>
/// <returns type="twaver.network.ElementUI">返回和附件关联的网元视图</returns>
}

twaver.network.Attachment.prototype.getFont = function (styleProp) {
/// <summary>
/// 	获取附件的字体
/// </summary>
/// <param name="styleProp" type="String">样式名称</param>
/// <returns type="String">返回附件的字体</returns>
}

twaver.network.Attachment.prototype.getNetwork = function () {
/// <summary>
/// 	获取和附件关联的拓扑
/// </summary>
/// <returns type="twaver.network.Network">返回和附件关联的拓扑</returns>
}

twaver.network.Attachment.prototype.getStyle = function (styleProp) {
/// <summary>
/// 	获取指定样式的值，封装了Element#getStyle方法
/// </summary>
/// <param name="styleProp" type="String">样式名称</param>
/// <returns type="Object">返回指定样式的值</returns>
}

twaver.network.Attachment.prototype.getView = function () {
/// <summary>
/// 	获取附件的视图div元素
/// </summary>
/// <returns type="HTMLDivElement">返回附件的视图div元素</returns>
}

twaver.network.Attachment.prototype.getViewRect = function () {
/// <summary>
/// 	获取附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
/// </summary>
/// <returns type="Object">返回附件视图的位置及大小，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.Attachment.prototype.hit = function (x, y) {
/// <summary>
/// 	命中测试，判断点击指定坐标点是否能选中附件
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">如果点击指定坐标能选中附件，则返回true，否者返回false</returns>
}

twaver.network.Attachment.prototype.intersects = function (rect) {
/// <summary>
/// 	判断附件视图区域是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">指定区域，值为包含x、y、width和height属性的Object对象</param>
/// <returns type="Boolean">如果附件视图区域包含指定区域，则返回true，否者返回false</returns>
}

twaver.network.Attachment.prototype.isShowInAttachmentDiv = function () {
/// <summary>
/// 	获取附件视图是否显示在附件层中
/// </summary>
/// <returns type="Boolean">返回附件视图是否显示在附件层中</returns>
}

twaver.network.Attachment.prototype.updateMeasure = function () {
/// <summary>
/// 	更新附件视图，一般子类会重载此方法，以更新附件视图
/// </summary>
}


twaver.network.ElementUI = function (network, element) {
/// <summary>
/// 	网元对应的视图对象，是所有网元视图（LinkUI、NodeUI等）的基类，代表网元在拓扑视图上的可视实体
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.network.ElementUI"></returns>
}

twaver.network.ElementUI.prototype.addAttachment = function (attachment) {
/// <summary>
/// 	添加附件，如果showInAttachmentDiv为true，则附件被添加到拓扑的附件层（attachmentDiv），否则附件被添加到网元视图上
/// </summary>
/// <param name="attachment" type="twaver.network.Attachment">附件</param>
}

twaver.network.ElementUI.prototype.addBodyBounds = function (rect) {
/// <summary>
/// 	添加内容区域，所有内容区域合并后构成unionBodyBounds
/// </summary>
/// <param name="rect" type="Object">区域，值为包含x、y、width和height属性的Object对象</param>
}

twaver.network.ElementUI.prototype.addComponent = function (component) {
/// <summary>
/// 	添加HTML元素到网元内容视图(bodyView)
/// </summary>
/// <param name="component" type="HTMLElement">HTML元素</param>
}

twaver.network.ElementUI.prototype.checkAlarmAttachment = function () {
/// <summary>
/// 	检查是否显示告警附件，如果Network#getAlarmLabel(element)返回null或空字符串，则不显示
/// </summary>
}

twaver.network.ElementUI.prototype.checkAttachments = function () {
/// <summary>
/// 	检查所有附件是否显示，网元刷新时（validate）被调用，包括告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
/// </summary>
}

twaver.network.ElementUI.prototype.checkEditAttachment = function () {
/// <summary>
/// 	检查是否显示编辑附件，如果此网元可选中（Network#isSelected(element)返回true），而且可编辑（Network#isEditable(element)返回true），而且此网元视图可编辑（isEditable()返回true），则显示，否则不显示
/// </summary>
}

twaver.network.ElementUI.prototype.checkIconsAttachment = function () {
/// <summary>
/// 	检查是否显示图标组附件，如果Network#getIconsNames(element)返回null或者length为0，则不显示
/// </summary>
}

twaver.network.ElementUI.prototype.checkLabelAttachment = function () {
/// <summary>
/// 	检查是否显示标签附件，如果Network#getLabel(element)返回null或空字符串，则不显示
/// </summary>
}

twaver.network.ElementUI.prototype.cleanUp = function (names) {
/// <summary>
/// 	清除未添加到视图中的对象，比如告警消失后，告警附件需要被清除
/// </summary>
/// <param name="names" type="Array">需要被删除属性名称数组</param>
}

twaver.network.ElementUI.prototype.dispose = function () {
/// <summary>
/// 	销毁网元视图，网元从拓扑关联的网元容器中删除时被调用，用于从拓扑视图中删除网元视图及其附件视图
/// </summary>
}

twaver.network.ElementUI.prototype.getAlarmAttachment = function () {
/// <summary>
/// 	获取告警附件
/// </summary>
/// <returns type="twaver.network.AlarmAttachment">返回告警附件</returns>
}

twaver.network.ElementUI.prototype.getAttachments = function () {
/// <summary>
/// 	获取所有附件集合，包含告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
/// </summary>
/// <returns type="twaver.List">返回所有附件集合</returns>
}

twaver.network.ElementUI.prototype.getBodyRect = function () {
/// <summary>
/// 	获得内容区域，默认为createBodyRect返回的结果
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.ElementUI.prototype.getBodyView = function () {
/// <summary>
/// 	获取网元内容视图
/// </summary>
/// <returns type="HTMLDivElement">返回网元内容视图</returns>
}

twaver.network.ElementUI.prototype.getClassName = function () {
/// <summary>
/// 	获取该类字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.network.ElementUI.prototype.getDyeColor = function (styleProp) {
/// <summary>
/// 	获取指定样式的渲染颜色，如果innerColor不为空则返回innerColor，否则返回指定样式的值
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="String">返回渲染颜色</returns>
}

twaver.network.ElementUI.prototype.getEditAttachment = function () {
/// <summary>
/// 	获取编辑附件
/// </summary>
/// <returns type="twaver.network.EditAttachment">返回编辑附件</returns>
}

twaver.network.ElementUI.prototype.getElement = function () {
/// <summary>
/// 	获取和网元视图关联的网元
/// </summary>
/// <returns type="twaver.Element">返回和网元视图关联的网元</returns>
}

twaver.network.ElementUI.prototype.getFont = function (styleProp) {
/// <summary>
/// 	获取给定样式属性的值作为字体，如果指定样式的值是null，则返回twaver.Defaults.FONT
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="String">返回字体</returns>
}

twaver.network.ElementUI.prototype.getHotSpot = function () {
/// <summary>
/// 	获取热点，用于定位附件等的位置
/// </summary>
/// <returns type="Object">返回热点，值为包含x和y属性的Object对象</returns>
}

twaver.network.ElementUI.prototype.getIconsAttachment = function () {
/// <summary>
/// 	获取图标组附件
/// </summary>
/// <returns type="twaver.network.IconsAttachment">返回图标组附件</returns>
}

twaver.network.ElementUI.prototype.getInnerColor = function () {
/// <summary>
/// 	获取网元填充色
/// </summary>
/// <returns type="String">返回网元填充色</returns>
}

twaver.network.ElementUI.prototype.getLabelAttachment = function () {
/// <summary>
/// 	获取标签附件
/// </summary>
/// <returns type="twaver.network.LabelAttachment">返回标签附件</returns>
}

twaver.network.ElementUI.prototype.getNetwork = function () {
/// <summary>
/// 	获取和网元视图关联的拓扑
/// </summary>
/// <returns type="twaver.network.Network">返回和网元视图关联的拓扑</returns>
}

twaver.network.ElementUI.prototype.getOuterColor = function () {
/// <summary>
/// 	获取网元边框颜色
/// </summary>
/// <returns type="String">返回网元边框颜色</returns>
}

twaver.network.ElementUI.prototype.getShadowColor = function () {
/// <summary>
/// 	获取网元选中后阴影颜色
/// </summary>
/// <returns type="String">返回网元选中后阴影颜色</returns>
}

twaver.network.ElementUI.prototype.getStyle = function (styleProp) {
/// <summary>
/// 	获取指定样式属性的值，封装了Element.getStyle
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="Object">返回指定样式属性的值</returns>
}

twaver.network.ElementUI.prototype.getUnionBodyBounds = function () {
/// <summary>
/// 	获取合并的内容区域
/// </summary>
/// <returns type="Object">返回合并的内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.ElementUI.prototype.getView = function () {
/// <summary>
/// 	获取网元视图，网元视图包含内容视图（bodyview）和附件（告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment）
/// </summary>
/// <returns type="HTMLDivElement">返回网元视图</returns>
}

twaver.network.ElementUI.prototype.getViewRect = function () {
/// <summary>
/// 	获取视图内容区域，包括unionBodyBounds和所有附件的区域
/// </summary>
/// <returns type="Object">返回视图内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.ElementUI.prototype.handlePropertyChange = function (e) {
/// <summary>
/// 	和网元视图关联的网元属性变化时的处理函数，默认实现为调用invalidate方法让网元视图刷新
/// </summary>
/// <param name="e" type="Object">属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.network.ElementUI.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	和网元视图关联的网元被选中或取消选中时的处理函数，默认实现为调用invalidate方法让网元视图刷新
/// </summary>
/// <param name="e" type="Object">选择变化事件，包含kind和data属性</param>
}

twaver.network.ElementUI.prototype.hit = function (x, y) {
/// <summary>
/// 	命中测试，判断网元视图是否包含指定坐标
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">网元视图是否包含指定坐标，则返回true，否者返回false</returns>
}

twaver.network.ElementUI.prototype.hitCanvas = function (x, y, names) {
/// <summary>
/// 	对网元视图中的画布元素进行命中测试，判断网元视图中的画布元素是否包含指定坐标
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <param name="names" type="Array">画布元素名称数组</param>
/// <returns type="Boolean">网元视图中的画布元素是否包含指定坐标，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.hitComponent = function (x, y, names) {
/// <summary>
/// 	对网元视图中的html元素进行命中测试，判断网元视图中的html元素是否包含指定坐标
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <param name="names" type="Array">html元素名称数组</param>
/// <returns type="Boolean">如果网元视图中的html元素包含指定坐标，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.hitTest = function (x, y) {
/// <summary>
/// 	获取指定坐标下的视图对象，为附件或者网元视图本身
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Object">返回指定坐标下的视图对象，为附件或者网元视图本身</returns>
}

twaver.network.ElementUI.prototype.intersects = function (rect) {
/// <summary>
/// 	判断网元视图是否和指定区域相交
/// </summary>
/// <param name="rect" type="Object">矩形区域，值为包含x、y、width和height属性的Object对象</param>
/// <returns type="Boolean">如果网元视图包含指定矩形区域，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.intersectsCanvas = function (rect, names) {
/// <summary>
/// 	对网元视图中的html元素进行命中测试，判断网元视图中的画布元素是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">矩形区域，包含x、y、width和height属性的Object对象</param>
/// <param name="names" type="Array">画布元素名称数组</param>
/// <returns type="Boolean">如果网元视图中的画布元素包含指定区域，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.intersectsComponent = function (rect, names) {
/// <summary>
/// 	对网元视图中的html元素进行命中测试，判断网元视图中的html元素是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">矩形区域，包含x、y、width和height属性的Object对象</param>
/// <param name="names" type="Array">html元素名称数组</param>
/// <returns type="Boolean">如果网元视图中的html元素包含指定区域，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.intersectsTest = function (rect) {
/// <summary>
/// 	获取指定矩形区域的视图对象，为附件或者网元视图本身
/// </summary>
/// <param name="rect" type="Object">矩形区域，包含x、y、width和height属性的Object对象</param>
/// <returns type="Object">返回指定矩形区域的对象，为附件或者网元视图本身</returns>
}

twaver.network.ElementUI.prototype.invalidate = function (checkAttachments) {
/// <param name="checkAttachments" type="String"></param>
}

twaver.network.ElementUI.prototype.isEditable = function () {
/// <summary>
/// 	获取网元视图是否可编辑，默认值为true
/// </summary>
/// <returns type="Boolean">如果网元视图可编辑，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.isShadowable = function () {
/// <summary>
/// 	判断是否需要设置阴影，默认实现是如果设置了阴影颜色，而且网元被被选中，而且select.style样式为shadow，则返回true，否则返回false
/// </summary>
/// <returns type="Boolean">如果需要设置阴影，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.isVisible = function () {
/// <summary>
/// 	判断网元视图是否可见
/// </summary>
/// <returns type="Boolean">如果网元视图可见，则返回true，否则返回false</returns>
}

twaver.network.ElementUI.prototype.removeAttachment = function (attachment) {
/// <summary>
/// 	删除指定附件
/// </summary>
/// <param name="attachment" type="twaver.network.Attachment">附件</param>
}

twaver.network.ElementUI.prototype.setHotSpot = function (value) {
/// <summary>
/// 	设置热点，用于定位附件等的位置
/// </summary>
/// <param name="value" type="Object">热点，值为包含x和y属性的Object对象</param>
}

twaver.network.ElementUI.prototype.setShadow = function (part, canvas, rect) {
/// <summary>
/// 	给指定画布元素设置阴影效果
/// </summary>
/// <param name="part" type="Object">网元视图（ElementUI）或者附件（Attachment）</param>
/// <param name="canvas" type="HTMLCanvasElement">画布元素</param>
/// <param name="rect" type="Object">画图大小及位置，值为包含x、y、width和height属性的Object对象</param>
/// <returns type="CanvasRenderingContext2D">画布渲染内容</returns>
}

twaver.network.ElementUI.prototype.setVisible = function (value) {
/// <summary>
/// 	设置网元视图是否可见
/// </summary>
/// <param name="value" type="Boolean">是否可见</param>
}

twaver.network.ElementUI.prototype.updateMeasure = function () {
/// <summary>
/// 	更新网元视图内容，被validate方法调用，一般子类重载此方法，往网元视图添加HTML元素
/// </summary>
}

twaver.network.ElementUI.prototype.validate = function () {
/// <summary>
/// 	此方法被Network调用，用以重画网元视图内容，此内部检查所有附件是否可见（checkAttachments），并调用updateMeasure方法重画网元内容，最后调用附件的updateMeasure方法，让附件重画
/// </summary>
}


twaver.network.interaction.BaseInteraction = function (network) {
/// <summary>
/// 	所有拓扑交互处理器的基类，响应鼠标、键盘以及触摸事件；交互处理器封装了原始鼠标、键盘以及触摸事件，并派发了更加方便易用的交互事件（包含当前事件的数据源（一般为网元或者网元集合）以及动作（比如单击网元、双击网元、双击背景等等））。使用Network#addInteractionListener添加交互处理监听器。用户也可以继承此类实现自定义交互处理器，并通过Network#setInteractions加载交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.BaseInteraction"></returns>
}

twaver.network.interaction.BaseInteraction.prototype.addListener = function () {
/// <summary>
/// 	批量添加事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会查找函数名为"handle_"加"事件类型"（handle_mousedown，handle_mousedown）的函数，作为指定事件类型的回调函数。此方法一般在setUp方法里被调用
/// </summary>
}

twaver.network.interaction.BaseInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.network.interaction.BaseInteraction.prototype.removeListener = function () {
/// <summary>
/// 	批量删除事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会删除指定事件类型的函数名为"hanle_"加"事件类型"（handle_mousedown，handle_mousedown）的监听器。此方法一般在tearDown方法里被调用
/// </summary>
}

twaver.network.interaction.BaseInteraction.prototype.setUp = function () {
/// <summary>
/// 	初始化交互处理器，一般调用addListener方法添加鼠标、键盘以及触摸事件监听器；Network#setInteractions会调用此方法
/// </summary>
}

twaver.network.interaction.BaseInteraction.prototype.tearDown = function () {
/// <summary>
/// 	销毁交互处理器，一般调用removeListener方法删除鼠标、键盘以及触摸事件监听器；使用Network#setInteractions切换交互处理器时会调用此方法撤销旧的交互处理器
/// </summary>
}


twaver.network.OverviewInteraction = function (overview) {
/// <summary>
/// 	鹰眼交互处理器
/// </summary>
/// <param name="overview" type="twaver.network.Overview">鹰眼</param>
/// <returns type="twaver.network.OverviewInteraction"></returns>
}

twaver.network.OverviewInteraction.prototype.clear = function () {
/// <summary>
/// 	清除拖动鼠标和松开鼠标监听
/// </summary>
}

twaver.network.OverviewInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.network.OverviewInteraction.prototype.handleMousedown = function (e) {
/// <summary>
/// 	按下鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.OverviewInteraction.prototype.handleMousemove = function (e) {
/// <summary>
/// 	拖动鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.OverviewInteraction.prototype.handleMouseup = function (e) {
/// <summary>
/// 	松开鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.network.OverviewMSTouchInteraction = function (overview) {
/// <summary>
/// 	鹰眼触摸交互处理器
/// </summary>
/// <param name="overview" type="twaver.network.Overview">鹰眼</param>
/// <returns type="twaver.network.OverviewMSTouchInteraction"></returns>
}

twaver.network.OverviewMSTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.network.OverviewMSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.OverviewMSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.OverviewMSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.network.OverviewTouchInteraction = function (overview) {
/// <summary>
/// 	鹰眼触摸交互处理器
/// </summary>
/// <param name="overview" type="twaver.network.Overview">鹰眼</param>
/// <returns type="twaver.network.OverviewTouchInteraction"></returns>
}

twaver.network.OverviewTouchInteraction.prototype.clear = function () {
/// <summary>
/// 	清除拖动鼠标和松开鼠标监听
/// </summary>
}

twaver.network.OverviewTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.network.OverviewTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	触摸结束时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.OverviewTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	触摸移动时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.OverviewTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	触摸开始时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.Pool = function (tagName, redundancy) {
/// <summary>
/// 	HTML元素缓存池，根据需要动态创建HTML元素，并重复使用
/// </summary>
/// <param name="tagName" type="String">缓存的HTML元素标签</param>
/// <param name="redundancy" type="Number">冗余HTML元素缓存数，可选，默认值为2</param>
/// <returns type="twaver.Pool"></returns>
}

twaver.Pool.prototype.clear = function () {
/// <summary>
/// 	清除未使用的缓存项
/// </summary>
}

twaver.Pool.prototype.currentIndex = function () {
/// <field type="Number">当前HTML元素索引，初始值为-1，调用get方法后索引加一，调用release方法后，索引减一</field>
}

twaver.Pool.prototype.get = function () {
/// <returns type="HTMLElement">返回下一个可用的HTML元素</returns>
}

twaver.Pool.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回此类的字符串类名</returns>
}

twaver.Pool.prototype.redundancy = function () {
/// <field type="Number">冗余HTML元素缓存数，默认值为2</field>
}

twaver.Pool.prototype.release = function (html) {
/// <summary>
/// 	释放指定HTML元素
/// </summary>
/// <param name="html" type="HTMLElement">HTML元素</param>
}

twaver.Pool.prototype.reset = function () {
/// <summary>
/// 	重置缓存池
/// </summary>
}

twaver.Pool.prototype.size = function () {
/// <summary>
/// 	获取当前缓存池大小
/// </summary>
/// <returns type="Number">返回当前缓存池大小</returns>
}


twaver.PropertyChangeDispatcher = function () {
/// <summary>
/// 	属性变化事件派发器，继承了twaver.EventDispatcher，用于派发属性变化事件
/// </summary>
/// <returns type="twaver.PropertyChangeDispatcher"></returns>
}

twaver.PropertyChangeDispatcher.prototype.addPropertyChangeListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加属性变化监听器，用于监听属性变化
/// </summary>
/// <param name="listener" type="Function">属性变化监听器</param>
/// <param name="scope" type="Object">可选，属性变化监听器的作用域，默认为null，即全局</param>
/// <param name="ahead" type="Boolean">可选，是否将此监听放在最前面，默认为false</param>
/// <example>
/// 	var dispatcher = new twaver.PropertyChangeDispatcher();
/// 	dispatcher.addPropertyChangeListener(function (e) {
/// 	    console.log(e.property, e.newValue, e.oldValue);
/// 	});
/// </example>
}

twaver.PropertyChangeDispatcher.prototype.firePropertyChange = function (property, oldValue, newValue) {
/// <summary>
/// 	派发属性变化事件，属性变化时调用此方法
/// </summary>
/// <param name="property" type="String">发生变化的属性</param>
/// <param name="oldValue" type="Object">和此属性相关的旧值</param>
/// <param name="newValue" type="Object">和此属性相关的新值</param>
/// <returns type="Boolean">如果新值和旧值相等则返回false，否则返回true</returns>
}

twaver.PropertyChangeDispatcher.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回此类的字符串类名</returns>
}

twaver.PropertyChangeDispatcher.prototype.onPropertyChanged = function (e) {
/// <summary>
/// 	属性变化时（firePropertyChange）触发的动作，不需要调用此方法，但可以重载此方法执行自定义逻辑
/// </summary>
/// <param name="e" type="Object">属性变化事件，包含property、oldValue和newValue的Object对象</param>
}

twaver.PropertyChangeDispatcher.prototype.removePropertyChangeListener = function (listener, scope) {
/// <summary>
/// 	删除指定作用域的属性变化监听器，作用域必须和添加监听器时的作用域一致，相同的作用域的相同监听器只能成功添加一次
/// </summary>
/// <param name="listener" type="Function">属性变化监听器</param>
/// <param name="scope" type="Object">属性变化监听器的作用域，可选，默认为null，代表全局</param>
}


twaver.PropertyPropagator = function (dataBox, propertyName, propertyType) {
/// <summary>
/// 	属性传播定义了传播的一种规则，当一个属性值发生更改时，它会传播到相关的对象上。当然你可以定义传播的方向，哪些属性需要传播，哪些网元可以传播。
/// 	属性传播是和数据容器一起工作的
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <param name="propertyName" type="String">属性名</param>
/// <param name="propertyType" type="String">属性类型</param>
/// <returns type="twaver.PropertyPropagator">属性传播对象</returns>
}

twaver.PropertyPropagator.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.PropertyPropagator.prototype.getDataBox = function () {
/// <summary>
/// 	获取绑定的数据容器
/// </summary>
/// <returns type="twaver.DataBox">数据容器对象</returns>
}

twaver.PropertyPropagator.prototype.getPropertyName = function () {
/// <summary>
/// 	获取传递的属性名称
/// </summary>
/// <returns type="String">属性名称</returns>
}

twaver.PropertyPropagator.prototype.getPropertyType = function () {
/// <summary>
/// 	获取传递的属性类型
/// </summary>
/// <returns type="Object">传递的属性类型</returns>
}

twaver.PropertyPropagator.prototype.handleDataBoxChange = function (e) {
/// <summary>
/// 	当数据容器更改时调用此方法，默认将会传递更改的数据。可以重写这个方法更改默认的规则
/// </summary>
/// <param name="e" type="Object">数据容器更改的事件</param>
}

twaver.PropertyPropagator.prototype.handleDataPropertyChange = function (e) {
/// <summary>
/// 	当数据容器中数据的属性更改时调用此方法，默认将会传递更改的数据。可以重写这个方法更改默认的规则
/// </summary>
/// <param name="e" type="Object">数据容器中数据属性更改的事件</param>
}

twaver.PropertyPropagator.prototype.isEnable = function () {
/// <summary>
/// 	返回属性传递规则是否生效
/// </summary>
/// <returns type="Boolean">如果为true，传播生效，如果为false，传播将会停止</returns>
}

twaver.PropertyPropagator.prototype.isInterestedProperty = function (e) {
/// <summary>
/// 	是否是需要响应的类型，TWaver内部使用
/// </summary>
/// <param name="e" type="Object">属性更改的事件</param>
/// <returns type="Boolean">true为符合条件，否则为false</returns>
}

twaver.PropertyPropagator.prototype.propagate = function (data) {
/// <summary>
/// 	传播数据中指定的属性
/// </summary>
/// <param name="data" type="twaver.Data">传播属性值的数据对象</param>
}

twaver.PropertyPropagator.prototype.propagateToParent = function (child, parent) {
/// <summary>
/// 	当需要传递属性值到指定父亲的属性时，调用这个方法
/// </summary>
/// <param name="child" type="twaver.Data">孩子对象</param>
/// <param name="parent" type="twaver.Data">父亲对象</param>
}

twaver.PropertyPropagator.prototype.propagateToTop = function (data) {
/// <summary>
/// 	将网元对象的属性值传递到上一级的数据上。"上一级"在TWaver中默认为父亲节点。用户可以重写这个方法去更改默认的传播规则
/// </summary>
/// <param name="data" type="twaver.Data">传递属性的数据对象</param>
}

twaver.PropertyPropagator.prototype.setEnable = function (enable) {
/// <summary>
/// 	设置属性传递规则是否生效
/// </summary>
/// <param name="enable" type="Boolean">如果为true，传播生效，如果为false，传播将会停止</param>
}


twaver.QuickFinder = function (dataBox, propertyName, propertyType, valueFunction, filterFunction) {
/// <summary>
/// 	快速查找这个类提供了一种快速搜索DataBox的功能，用户可以通过这个类中提供的方法来根据数据上的某个属性快速地查询出匹配的数据。当然用户也可以通过遍历Databox实现查找的功能，但是如果是频繁的遍历和循环，会对性能有一定的影响。而且它没有快速查找这个类的效率高。
/// 	
/// 	快速查找通过构造函数来绑定数据容器和需要进行索引的属性，一旦绑定之后，当数据容器中索引的属性值发生变化时，快速查找中数据也会进行相应的修改。
/// 	
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器对象</param>
/// <param name="propertyName" type="String">索引的属性名称</param>
/// <param name="propertyType" type="String">索引的属性类型，属性类型的可选值为： 'accessor':get/set方法的属性 'style'：样式属性 'client'：自定义的属性。默认为‘accessor’</param>
/// <param name="valueFunction" type="Function">需要包含在返回结果中值的函数</param>
/// <param name="filterFunction" type="Function">过滤出不包含在返回结果中的值的过滤器</param>
/// <returns type="twaver.QuickFinder">快速查找对象本身</returns>
}

twaver.QuickFinder.prototype.dispose = function () {
/// <summary>
/// 	释放所有绑定的资源。当调用这个方法时，绑定在快速查找上的数据容器将被释放
/// </summary>
}

twaver.QuickFinder.prototype.find = function (value) {
/// <summary>
/// 	通过指定的值查询出所有匹配的数据
/// </summary>
/// <param name="value" type="String">指定查询的值</param>
/// <returns type="twaver.List">匹配的数据集合</returns>
}

twaver.QuickFinder.prototype.findFirst = function (value) {
/// <summary>
/// 	通过给定的值查询出匹配数据集合的第一个数据
/// </summary>
/// <param name="value" type="Object">给定查询的值</param>
/// <returns type="twaver.Data">数据集合的第一个数据</returns>
}

twaver.QuickFinder.prototype.getClassName = function () {
/// <summary>
/// 	获取这个类的类名
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.QuickFinder.prototype.getDataBox = function () {
/// <summary>
/// 	获取绑定的数据容器
/// </summary>
/// <returns type="twaver.DataBox">数据容器对象</returns>
}

twaver.QuickFinder.prototype.getFilterFunction = function () {
/// <summary>
/// 	获取过滤的方法
/// </summary>
/// <returns type="Function">过滤的方法</returns>
}

twaver.QuickFinder.prototype.getPropertyName = function () {
/// <summary>
/// 	获取绑定的属性名称
/// </summary>
/// <returns type="String">绑定的属性名称</returns>
}

twaver.QuickFinder.prototype.getPropertyType = function () {
/// <summary>
/// 	获取绑定的属性类型。属性类型的可选值为：
/// 	'accessor':get/set方法的属性
/// 	'style'：样式属性
/// 	'client：自定义的属性
/// </summary>
/// <returns type="String">属性类型</returns>
}

twaver.QuickFinder.prototype.getValue = function (data) {
/// <summary>
/// 	获取对象的属性值。TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <returns type="String">数据对象的属性值</returns>
}

twaver.QuickFinder.prototype.getValueFunction = function () {
/// <summary>
/// 	获取返回值的方法。这个方法用于指出哪些值应该包含在返回的值中。
/// </summary>
/// <returns type="Function">返回值的方法</returns>
}

twaver.QuickFinder.prototype.handleDataBoxChange = function (e) {
/// <summary>
/// 	当数据容器发生变化时，调用此方法。TWaver内部使用
/// </summary>
/// <param name="e" type="Object">数据发生变化的事件</param>
}

twaver.QuickFinder.prototype.handleDataPropertyChange = function (e) {
/// <summary>
/// 	当数据容器中数据的属性发生变化时调用此方法
/// </summary>
/// <param name="e" type="Object">数据属性发生变化的事件</param>
}

twaver.QuickFinder.prototype.isInterested = function (data) {
/// <summary>
/// 	指定的数据是否符合当前的快速查找类的条件
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <returns type="Boolean">true为符合，否则为false</returns>
}


twaver.SelectionModel = function (dataBox) {
/// <summary>
/// 	选择容器是包含在数据容器中的。选择容器用于管理数据容器中所有选中的对象。例如当选中某个对象时，它将会同时添加到选择容器中，当取消选中某个对象时，便会从选择容器中删除。
/// 	通过选择容器，可以更方便的访问或遍历所有选中的数据，也可以更方便地选中和取消某个数据
/// 	
/// 	
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.SelectionModel">选择容器对象本身</returns>
}

twaver.SelectionModel.prototype.addSelectionChangeListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加网元选中更改事件的监听器，当网元的选中状态发生变化时可以通过此监听器监听
/// </summary>
/// <param name="listener" type="Function">选中更改的监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
/// <param name="ahead" type="Boolean">是否添加在监听器列表的最前方，如果为空，则添加在最后一个位置</param>
}

twaver.SelectionModel.prototype.appendSelection = function (datas) {
/// <summary>
/// 	追加指定的选中数据
/// </summary>
/// <param name="datas" type="twaver.List">追加的选中数据的集合</param>
}

twaver.SelectionModel.prototype.clearSelection = function () {
/// <summary>
/// 	清空所有选中的数据
/// </summary>
}

twaver.SelectionModel.prototype.contains = function (data) {
/// <summary>
/// 	判断是否包含某个数据
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="Boolean">true为包含，否则为false</returns>
}

twaver.SelectionModel.prototype.dispose = function () {
/// <summary>
/// 	释放选择容器中所有的资源。包括选择容器上的监听器和选择容器中的数据
/// </summary>
}

twaver.SelectionModel.prototype.fireSelectionChange = function (kind, datas, oldSelection) {
/// <summary>
/// 	派发出选中数据更改的事件
/// </summary>
/// <param name="kind" type="String">数据更改的类型</param>
/// <param name="datas" type="twaver.List">选中数据集合的新值</param>
/// <param name="oldSelection" type="twaver.List">选中数据集合的老值</param>
}

twaver.SelectionModel.prototype.getDataBox = function () {
/// <summary>
/// 	获取绑定的数据容器
/// </summary>
/// <returns type="twaver.DataBox">绑定的数据容器</returns>
}

twaver.SelectionModel.prototype.getFilterFunction = function () {
/// <summary>
/// 	获取选择过滤器，它是用于过滤哪些数据可以选择，哪些数据不可以选择。如果想要使某些数据一直处于不可选中的状态，可以使用此过滤器。
/// </summary>
/// <returns type="Function">选择过滤器</returns>
}

twaver.SelectionModel.prototype.getFirstData = function () {
/// <summary>
/// 	获取第一个选中的数据
/// </summary>
/// <returns type="twaver.Data">第一个选中的数据对象</returns>
}

twaver.SelectionModel.prototype.getLastData = function () {
/// <summary>
/// 	获取最后一个选中的数据
/// </summary>
/// <returns type="twaver.Data">最后一个选中的数据对象</returns>
}

twaver.SelectionModel.prototype.getSelection = function () {
/// <summary>
/// 	获取数据容器中所有选中的数据
/// </summary>
/// <returns type="twaver.List">选中数据的集合</returns>
}

twaver.SelectionModel.prototype.getSelectionMode = function () {
/// <summary>
/// 	获取选择模型的类型，默认是多选。
/// 	选择模型的类型可选值：
/// 	noneSelection:不可选中
/// 	singleSelection:单选
/// 	multipleSelection:多选
/// 	
/// </summary>
/// <returns type="String">选择模型的类型</returns>
}

twaver.SelectionModel.prototype.handleDataBoxChange = function (e) {
/// <summary>
/// 	处理数据容器更改的事件的方法。TWaver内部使用
/// </summary>
/// <param name="e" type="Object">数据容器更改的事件</param>
}

twaver.SelectionModel.prototype.isSelectable = function (data) {
/// <summary>
/// 	判断某个数据是否是选中状态
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <returns type="Boolean">true为选中，否则为false</returns>
}

twaver.SelectionModel.prototype.removeSelection = function (datas) {
/// <summary>
/// 	删除指定选中的数据
/// </summary>
/// <param name="datas" type="twaver.Data">删除选中数据的集合</param>
}

twaver.SelectionModel.prototype.removeSelectionChangeListener = function (listener, scope) {
/// <summary>
/// 	删除网元选中更改事件的监听器，当网元的选中状态发生变化时可以通过此监听器监听
/// </summary>
/// <param name="listener" type="Function">网元选中更改事件的监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
}

twaver.SelectionModel.prototype.selectAll = function () {
/// <summary>
/// 	选中数据容器中所有的数据
/// </summary>
}

twaver.SelectionModel.prototype.setFilterFunction = function (filterFunction) {
/// <summary>
/// 	设置选择过滤器，它是用于过滤哪些数据可以选择，哪些数据不可以选择。如果想要使某些数据一直处于不可选中的状态，可以使用此过滤器。
/// </summary>
/// <param name="filterFunction" type="Function">选择过滤器</param>
}

twaver.SelectionModel.prototype.setSelection = function (datas) {
/// <summary>
/// 	将某些数据设置为选中状态
/// </summary>
/// <param name="datas" type="twaver.List">选中的数据集合</param>
}

twaver.SelectionModel.prototype.setSelectionMode = function (selectionMode) {
/// <summary>
/// 	设置选择模型的类型。
/// 	选择模型的类型可选值：
/// 	noneSelection:不可选中
/// 	singleSelection:单选
/// 	multipleSelection:多选
/// 	
/// </summary>
/// <param name="selectionMode" type="String">选择模型的类型</param>
}

twaver.SelectionModel.prototype.size = function () {
/// <summary>
/// 	选中数据的大小
/// </summary>
/// <returns type="Number">选中数据的大小</returns>
}

twaver.SelectionModel.prototype.toSelection = function (matchFunction, scope) {
/// <summary>
/// 	将选择容器中的数据转换成List
/// </summary>
/// <param name="matchFunction" type="Function">转换集合时的过滤器</param>
/// <param name="scope" type="Object">过滤器的作用域。为空时值为window</param>
/// <returns type="twaver.List">数据集合</returns>
}


twaver.SerializationSettings = function () {
/// <summary>
/// 	这个类是一个序列化时参数的设置类。当数据容器或数据进行序列化时，可以进行一些参数的设置
/// </summary>
/// <returns type="twaver.SerializationSettings">序列化设置对象本身</returns>
}

twaver.SerializationSettings.getClientType = function (client) {
/// <summary>
/// 	获取指定Client属性的数据类型
/// </summary>
/// <param name="client" type="String">Client属性名称</param>
/// <returns type="String">返回指定Client属性的数据类型</returns>
}

twaver.SerializationSettings.getPropertyType = function (property) {
/// <summary>
/// 	获取指定Property属性的数据类型
/// </summary>
/// <param name="property" type="String">Property属性名称</param>
/// <returns type="String">返回指定Property属性的数据类型</returns>
}

twaver.SerializationSettings.getStyleType = function (style) {
/// <summary>
/// 	获取指定Style属性的数据类型
/// </summary>
/// <param name="style" type="String">Style属性名称</param>
/// <returns type="String">返回指定Style属性的数据类型</returns>
}

twaver.SerializationSettings.isClientSerializable = function () {
/// <field type="Boolean">数据容器中所有数据的Client属性是否需要序列化，true为序列化，否则为false</field>
}

twaver.SerializationSettings.isDataBoxSerializable = function () {
/// <field type="Boolean">数据容器是否需要进行序列化。true为序列化，否则为false</field>
}

twaver.SerializationSettings.isLayerBoxSerializable = function () {
/// <field type="Boolean">图层容器是否需要序列化，true为需要序列化，否则为false</field>
}

twaver.SerializationSettings.isStyleSerializable = function () {
/// <field type="Boolean">数据容器中所有数据的Style属性是否需要序列化，true为序列化，否则为false</field>
}

twaver.SerializationSettings.prototype.getClassName = function () {
/// <summary>
/// 	获取这个类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.SerializationSettings.prototype.getClientType = function (client) {
/// <summary>
/// 	获取指定Client属性的数据类型
/// </summary>
/// <param name="client" type="String">Client属性名称</param>
/// <returns type="String">返回指定Client属性的数据类型</returns>
}

twaver.SerializationSettings.prototype.getPropertyType = function (property) {
/// <summary>
/// 	获取指定Property属性的数据类型
/// </summary>
/// <param name="property" type="String">Property属性名称</param>
/// <returns type="String">返回指定Property属性的数据类型</returns>
}

twaver.SerializationSettings.prototype.getStyleType = function (style) {
/// <summary>
/// 	获取指定Style属性的数据类型
/// </summary>
/// <param name="style" type="String">Style属性名称</param>
/// <returns type="String">返回指定Style属性的数据类型</returns>
}

twaver.SerializationSettings.prototype.setClientType = function (client, type) {
/// <summary>
/// 	设置指定Client属性的数据类型
/// </summary>
/// <param name="client" type="String">Client属性名称</param>
/// <param name="type" type="String">数据类型</param>
}

twaver.SerializationSettings.prototype.setPropertyType = function (property, type) {
/// <summary>
/// 	设置指定Property属性的数据类型
/// </summary>
/// <param name="property" type="String">Property属性名称</param>
/// <param name="type" type="String">数据类型</param>
}

twaver.SerializationSettings.prototype.setStyleType = function (style, type) {
/// <summary>
/// 	设置指定Style属性的数据类型
/// </summary>
/// <param name="style" type="String">Style属性名称</param>
/// <param name="type" type="String">数据类型</param>
}

twaver.SerializationSettings.setClientType = function (client, type) {
/// <summary>
/// 	设置指定Client属性的数据类型
/// </summary>
/// <param name="client" type="String">Client属性名称</param>
/// <param name="type" type="String">数据类型</param>
}

twaver.SerializationSettings.setPropertyType = function (property, type) {
/// <summary>
/// 	设置指定Property属性的数据类型
/// </summary>
/// <param name="property" type="String">Property属性名称</param>
/// <param name="type" type="String">数据类型</param>
}

twaver.SerializationSettings.setStyleType = function (style, type) {
/// <summary>
/// 	设置指定Style属性的数据类型
/// </summary>
/// <param name="style" type="String">Style属性名称</param>
/// <param name="type" type="String">数据类型</param>
}


twaver.Styles = function () {
/// <field type="Object">这个类中定义了TWaver中所有对象的样式</field>
}

twaver.Styles.getStyle = function (styleProp) {
/// <summary>
/// 	获取指定Style属性的值
/// </summary>
/// <param name="styleProp" type="String">Style属性名称</param>
/// <returns type="String">返回指定Style属性的值</returns>
}

twaver.Styles.getStyleProperties = function () {
/// <summary>
/// 	获取所有Style属性名称的集合
/// </summary>
/// <returns type="twaver.List">返回所有Style属性名称的集合</returns>
}

twaver.Styles.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.Styles.setStyle = function (styleProp, newValue) {
/// <summary>
/// 	设置指定Style属性的值
/// </summary>
/// <param name="styleProp" type="String">Style属性名称</param>
/// <param name="newValue" type="Object">Style属性值</param>
}


twaver.Util = function () {
/// <field type="Object">这是一个工具类，提供了TWaver中常用的方法</field>
}

twaver.Util.addEventListener = function (type, handler, view, scope) {
/// <summary>
/// 	给HTML元素添加事件监听器
/// </summary>
/// <param name="type" type="String">事件类型</param>
/// <param name="handler" type="Function">回调函数</param>
/// <param name="view" type="HTMLElement">HTML元素</param>
/// <param name="scope" type="Object">可选，回调函数的作用域，默认为null，即全局</param>
}

twaver.Util.calculatePointAngleAlongLine = function (points, segments, isSource, xOffset, yOffset) {
/// <summary>
/// 	计算线条上指定偏移量的点的坐标和角度
/// </summary>
/// <param name="points" type="twaver.List">点的集合</param>
/// <param name="segments" type="twaver.List">点与点之间连线类型的集合, 可选值为lineto, </param>
/// <param name="isSource" type="Boolean">是否在连线的起始端, 为true则为连线的起始端, 否则为连线的结束端</param>
/// <param name="xOffset" type="Number">x轴偏移量</param>
/// <param name="yOffset" type="Number">y轴偏移量</param>
/// <returns type="Object">返回包含point(包含x和y属性的Object对象)和angle属性的Object对象</returns>
}

twaver.Util.containsPoint = function (rect, x, y) {
/// <summary>
/// 	判断传入的X，Y坐标是否在rect的范围之内。
/// </summary>
/// <param name="rect" type="Object">一个包含左上角的坐标点以及宽高的矩形对象。比如{x:10,y:10,width:100,height:100}</param>
/// <param name="x" type="Object">x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为object时，需要传入的一个{x:10,y:10}带x，y变量的对象</param>
/// <param name="y" type="Number">y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值</param>
/// <returns type="Object">如果rect包含x，y坐标，返回true，否则返回false</returns>
}

twaver.Util.createCanvas = function () {
/// <summary>
/// 	创建一个画布对象
/// </summary>
/// <returns type="Object">画布对象</returns>
}

twaver.Util.createDiv = function () {
/// <summary>
/// 	创建一个DIV对象
/// </summary>
/// <returns type="Object">DIV对象</returns>
}

twaver.Util.drawArrow = function (g, arrowWidth, arrowHeight, linePaths, isSrouce, arrowStyle, drawBody, arrowColor, arrowXOffset, arrowYOffset, lineWidth, arrowOutlineColor) {
/// <summary>
/// 	用指定样式画连线的箭头, 连线样式可以为:
/// 	arrow.standard    标准样式
/// 	arrow.delta          三角形
/// 	arrow.diamond    菱形
/// 	arrow.short         短小形
/// 	arrow.slant          斜角
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">画布</param>
/// <param name="arrowWidth" type="Number">箭头宽度</param>
/// <param name="arrowHeight" type="Number">箭头高度</param>
/// <param name="linePaths" type="twaver.List">构成连线的点的集合</param>
/// <param name="isSrouce" type="Boolean">箭头是否在连线的起始端, 为true则为连线的起始端, 否则为连线的结束点</param>
/// <param name="arrowStyle" type="String">箭头样式</param>
/// <param name="drawBody" type="Boolean">箭头是否填充, 为true则填充, 否则不填充</param>
/// <param name="arrowColor" type="String">箭头填充颜色</param>
/// <param name="arrowXOffset" type="Number">箭头X坐标偏移量</param>
/// <param name="arrowYOffset" type="Number">箭头Y坐标偏移量</param>
/// <param name="lineWidth" type="Number">箭头边框宽度</param>
/// <param name="arrowOutlineColor" type="String">箭头边框颜色</param>
}

twaver.Util.drawVector = function (g, shape, x, y, w, h) {
/// <summary>
/// 	在给定的矩形范围中绘制指定的图形。指定图形形状的可选值为：
/// 	'rectangle'：矩形，
/// 	'oval'：椭圆形,
/// 	'roundrect'：圆角矩形,
/// 	'star'：星形,
/// 	'triangle'：三角形, 
/// 	'circle'：圆形,
/// 	'hexagon'：六边形,
/// 	'pentagon'：五角形,
/// 	'diamond'：菱形
/// </summary>
/// <param name="g" type="Object">CanvasRenderingContext2D对象，用于在canvas上绘图</param>
/// <param name="shape" type="String">指定的图形形状。</param>
/// <param name="x" type="Object">x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为object时，需要传入的一个带x，y，width，height变量的对象，例如{x:10,y:10,width:100,height:100}</param>
/// <param name="y" type="Number">y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值</param>
/// <param name="w" type="Number">矩形的宽度。可选，当x为object时w不需要赋值；当x为Number时，w必须要赋值</param>
/// <param name="h" type="Number">矩形的高度。可选，当x为object时，h不需要赋值；当x为Number时，h必须要赋值</param>
}

twaver.Util.ext = function (subClass, superClass, o) {
/// <summary>
/// 	指定的子类继承于父类
/// </summary>
/// <param name="subClass" type="Object">子类</param>
/// <param name="superClass" type="Object">父类</param>
/// <param name="o" type="Object">子类中重写或扩展的属性和方法</param>
}

twaver.Util.fill = function (g, fillColor, gradient, gradientColor, x, y, w, h) {
/// <summary>
/// 	给指定的矩形填充颜色，填充的颜色可以为渐变色，并可以指定渐变的类型。渐变类型的可选值为：
/// 	'linear.southwest'：线性.南西
/// 	'linear.southeast'：线性.南东
/// 	'linear.northwest'：线性.北西
/// 	'linear.northeast'：线性.北东
/// 	'linear.north'：线性.北
/// 	'linear.south'：线性.南
/// 	'linear.west'：线性.西
/// 	'linear.east'：线性.东
/// 	'radial.center'：放射.中
/// 	'radial.southwest'：放射.南西
/// 	'radial.southeast'：放射.南东
/// 	'radial.northwest'：放射.北西
/// 	'radial.northeast'：放射.北东
/// 	'radial.north'：放射.北
/// 	'radial.south'：放射.南
/// 	'radial.west'：放射.西
/// 	'radial.east'：放射.东
/// 	'spread.horizontal':扩展.水平
/// 	'spread.vertical':扩展.垂直
/// 	'spread.diagonal':扩展.对角线
/// 	'spread.antidiagonal':扩展.反对角线
/// 	'spread.north':扩展.北
/// 	'spread.south':扩展.南
/// 	'spread.west':扩展.西
/// 	'spread.east':扩展.东
/// </summary>
/// <param name="g" type="Object">CanvasRenderingContext2D对象，用于在canvas上绘图</param>
/// <param name="fillColor" type="String">填充的颜色值</param>
/// <param name="gradient" type="String">渐变类型</param>
/// <param name="gradientColor" type="String">渐变颜色值</param>
/// <param name="x" type="Object">x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为object时，需要传入的一个带x，y，width，height变量的对象，例如{x:10,y:10,width:100,height:100}</param>
/// <param name="y" type="Number">y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值</param>
/// <param name="w" type="Number">矩形的宽度。可选，当x为object时w不需要赋值；当x为Number时，w必须要赋值</param>
/// <param name="h" type="Number">矩形的高度。可选，当x为object时，h不需要赋值；当x为Number时，h必须要赋值</param>
}

twaver.Util.getAllClassNames = function () {
/// <summary>
/// 	获取所有类名
/// </summary>
/// <returns type="Array">返回所有类名</returns>
}

twaver.Util.getClass = function (className) {
/// <summary>
/// 	通过类名来获取类对象
/// </summary>
/// <param name="className" type="String">类名</param>
/// <returns type="Object">类的对象</returns>
}

twaver.Util.getCSSStyle = function (domObject, styleName) {
/// <summary>
/// 	获取指定HTML元素的指定样式的值
/// </summary>
/// <param name="domObject" type="HTMLElement">HTML对象</param>
/// <param name="styleName" type="String">样式名称</param>
/// <returns type="String">返回指定样式值</returns>
}

twaver.Util.getElementsBounds = function (elements, network) {
/// <summary>
/// 	获取网元所占的区域
/// </summary>
/// <param name="elements" type="twaver.List">网元集合</param>
/// <param name="network" type="twaver.network.Network">拓扑图</param>
/// <returns type="Object">返回指定网元所占的区域</returns>
}

twaver.Util.getFilterColor = function (sourceColor, filterColor) {
/// <summary>
/// 	获取渲染后的颜色
/// </summary>
/// <param name="sourceColor" type="String">原始颜色</param>
/// <param name="filterColor" type="String">渲染色</param>
/// <returns type="Object">返回染色后的颜色，包含r,g,b,a的对象</returns>
}

twaver.Util.getImageAsset = function (name) {
/// <summary>
/// 	通过图片的名称来获取图片对象
/// </summary>
/// <param name="name" type="String">图片的名称</param>
/// <returns type="twaver.ImageAsset">图片对象</returns>
}

twaver.Util.getPointIndex = function (points, point, tolerance) {
/// <summary>
/// 	获取指定点所在的边
/// </summary>
/// <param name="points" type="twaver.List">包含点的集合</param>
/// <param name="point" type="Object">点</param>
/// <param name="tolerance" type="Number">误差值</param>
/// <returns type="Number">返回指定点所在的边</returns>
}

twaver.Util.getRadiansBetweenLines = function (from, to) {
/// <summary>
/// 	获取两点之间的角度
/// </summary>
/// <param name="from" type="Object">起始点</param>
/// <param name="to" type="Object">结束点</param>
/// <returns type="Number">返回两点之间的角度，单位为弧度</returns>
}

twaver.Util.getRect = function (points) {
/// <summary>
/// 	返回包含指定点的矩形
/// </summary>
/// <param name="points" type="Array">"点"的数组</param>
/// <returns type="Object">返回包含指定点的矩形</returns>
}

twaver.Util.getRegisteredImageNames = function () {
/// <summary>
/// 	获取所有注册名图片名称
/// </summary>
/// <returns type="Array">返回所有注册的图片名称</returns>
}

twaver.Util.getSubNetwork = function (element) {
/// <summary>
/// 	获取网元所在的子网
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.SubNetwork">返回网元所在的子网</returns>
}

twaver.Util.getToolTipDiv = function () {
/// <summary>
/// 	返回ToolTip所在的DIV
/// </summary>
/// <returns type="String">返回ToolTip所在的DIV</returns>
}

twaver.Util.getValue = function (instance, property, type) {
/// <summary>
/// 	返回网元的某个属性值
/// </summary>
/// <param name="instance" type="String">网元实例</param>
/// <param name="property" type="String">属性名</param>
/// <param name="type" type="String">属性类型</param>
/// <returns type="String">返回属性值</returns>
}

twaver.Util.getVersion = function () {
/// <summary>
/// 	获取TWaver的版本号
/// </summary>
/// <returns type="String">TWaver的版本号</returns>
}

twaver.Util.grow = function (rect, width, height) {
/// <summary>
/// 	将指定的矩形扩大一定的宽高值。这种扩大是矩形的中心点保持不变，像四周扩大指定值的宽度、高度。
/// 	比如指定的矩形为{x:20,y:20,width:100;height:100},如果扩大的width为10，height为10，那么扩大后的矩形变为{x:10,y:10,width:120,height:120}
/// </summary>
/// <param name="rect" type="Object">指定扩大的矩形</param>
/// <param name="width" type="Number">扩大的宽度值</param>
/// <param name="height" type="Number">扩大的高度值</param>
}

twaver.Util.hideToolTip = function () {
/// <summary>
/// 	隐藏Tooltip
/// </summary>
}

twaver.Util.intersects = function (srcRect, dstRect) {
/// <summary>
/// 	判断指定的矩形区域是否相交
/// </summary>
/// <param name="srcRect" type="Object">矩形区域, 包含x, y, width和height属性的Object对象</param>
/// <param name="dstRect" type="Object">矩形区域, 包含x, y, width和height属性的Object对象</param>
/// <returns type="Boolean">如果指定的区域相交, 则返回true, 否则返回false</returns>
}

twaver.Util.isAndroid = function () {
/// <field type="Boolean">是否为Android，true为是Android，否则为false</field>
}

twaver.Util.isChrome = function () {
/// <field type="Boolean">是否是Chrome浏览器，true为是Chrome浏览器，否则为false</field>
}

twaver.Util.isDeserializing = function () {
/// <summary>
/// 	是否正在进行反序列化操作，默认为false
/// </summary>
/// <returns type="Boolean">如果正在进行反序列化，返回true；否则返回false</returns>
}

twaver.Util.isFirefox = function () {
/// <field type="Boolean">是否是Firefox浏览器，true为是Firefox浏览器，否则为false</field>
}

twaver.Util.isIE = function () {
/// <field type="Boolean">是否是IE浏览器，true为是IE浏览器，否则为false</field>
}

twaver.Util.isIPad = function () {
/// <field type="Boolean">是否为IPad，true为是IPad,否则为false</field>
}

twaver.Util.isIPhone = function () {
/// <field type="Boolean">是否为IPhone，true为是IPhone,否则为false</field>
}

twaver.Util.isIPod = function () {
/// <field type="Boolean">是否为IPod，true为是IPod,否则为false</field>
}

twaver.Util.isOpera = function () {
/// <field type="Boolean">是否是Opera浏览器，true为是Opera浏览器，否则为false</field>
}

twaver.Util.isSafari = function () {
/// <field type="Boolean">是否是Safari浏览器，true为是Safari浏览器，否则为false</field>
}

twaver.Util.isTouchable = function () {
/// <field type="Boolean">是否是可触摸的，true为是可触摸的，否则为false</field>
}

twaver.Util.isTypeOf = function (type, base) {
/// <summary>
/// 	判断是否是某个类的子类
/// </summary>
/// <param name="type" type="Object">父类</param>
/// <param name="base" type="Object">基类</param>
/// <returns type="Boolean">如果是子类则返回true，否则为false</returns>
}

twaver.Util.isWebOS = function () {
/// <field type="Boolean">是否是WebOS，true为是WebOS，否则为false</field>
}

twaver.Util.moveElements = function (elements, xoffset, yoffset, animate, finishFunction) {
/// <summary>
/// 	偏移指定的一批网元
/// </summary>
/// <param name="elements" type="twaver.List">需要偏移的网元集合</param>
/// <param name="xoffset" type="Number">偏移的X坐标值</param>
/// <param name="yoffset" type="Number">偏移的Y坐标值</param>
/// <param name="animate" type="Boolean">是否需要动画</param>
/// <param name="finishFunction" type="Function">偏移完成时回调的函数</param>
}

twaver.Util.newInstance = function (className) {
/// <summary>
/// 	通过类名来实例化一个对象
/// </summary>
/// <param name="className" type="String">类名</param>
/// <returns type="Object">实例化的对象</returns>
}

twaver.Util.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.Util.registerDraw = function (name, draw) {
/// <summary>
/// 	注册自定义矢量绘制函数
/// </summary>
/// <param name="name" type="String">自定义矢量绘制函数名称</param>
/// <param name="draw" type="Function">绘制函数：function (vector, g, data, view)</param>
}

twaver.Util.registerImage = function (name, source, width, height, svg) {
/// <summary>
/// 	注册图片。当给网元设置图片时，需要先进行注册后才能使用
/// </summary>
/// <param name="name" type="String">注册图片的名称</param>
/// <param name="source" type="Object">注册的图片对象</param>
/// <param name="width" type="Number">图片的宽度</param>
/// <param name="height" type="Number">图片的高度</param>
/// <param name="svg" type="Boolean">是否为SVG图片</param>
}

twaver.Util.registerShape = function (name, shapeFunc) {
/// <summary>
/// 	注册自定义矢量图形
/// </summary>
/// <param name="name" type="String">矢量图形名称</param>
/// <param name="shapeFunc" type="Function">绘制函数：function (g, shapeData, data, view)</param>
}

twaver.Util.registerVectorShape = function (name, func) {
/// <summary>
/// 	注册样式'vector.shape'的可选值
/// </summary>
/// <param name="name" type="String">矢量图形名称</param>
/// <param name="func" type="Function">绘制函数：function (g, x, y, w, h)</param>
}

twaver.Util.removeCSSStyle = function (domObject, styleName) {
/// <summary>
/// 	移除HTML样式
/// </summary>
/// <param name="domObject" type="HTMLElement">HTML对象</param>
/// <param name="styleName" type="String">样式名称</param>
}

twaver.Util.removeEventListener = function (type, view, scope) {
/// <summary>
/// 	删除HTML元素的事件监听器
/// </summary>
/// <param name="type" type="String">事件类型</param>
/// <param name="view" type="HTMLElement">HTML元素</param>
/// <param name="scope" type="Object">可选，回调函数的作用域，默认为null，即全局</param>
}

twaver.Util.resetToolTip = function () {
/// <summary>
/// 	重置Tooltip
/// </summary>
}

twaver.Util.rotateCanvas = function (g, rect, angle) {
/// <summary>
/// 	将画布以制定的区域的中心为原点，旋转指定的角度
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">画布渲染上下文对象</param>
/// <param name="rect" type="Object">矩形区域</param>
/// <param name="angle" type="Number">旋转角度，单位为度</param>
}

twaver.Util.setCanvas = function (c, x, y, w, h) {
/// <summary>
/// 	设置指定Canvas的位置和宽高
/// </summary>
/// <param name="c" type="HTMLCanvasElement">指定的Canvas对象</param>
/// <param name="x" type="Number">画布的左边距像素值</param>
/// <param name="y" type="Number">画布的上边距像素值</param>
/// <param name="w" type="Number">画布的宽度</param>
/// <param name="h" type="Number">画布的高度</param>
/// <returns type="CanvasRenderingContext2D">返回一个CanvasRenderingContext2D对象用于在canvas上绘图</returns>
}

twaver.Util.setCSSStyle = function (domObject, styleName, styleValue) {
/// <summary>
/// 	设置指定HTML对象的样式
/// </summary>
/// <param name="domObject" type="HTMLElement">HTML对象</param>
/// <param name="styleName" type="String">样式名称</param>
/// <param name="styleValue" type="String">样式值</param>
}

twaver.Util.setFocus = function (e) {
/// <summary>
/// 	将焦点设置到指定的对象上
/// </summary>
/// <param name="e" type="HTMLElement">设置焦点的对象</param>
}

twaver.Util.setValue = function (instance, property, value) {
/// <summary>
/// 	设置数据对象指定属性的值
/// </summary>
/// <param name="instance" type="twaver.Data">数据对象实例</param>
/// <param name="property" type="String">属性名</param>
/// <param name="value" type="Object">属性值</param>
}

twaver.Util.showToolTip = function (eorp, innerHTML) {
/// <summary>
/// 	显示Tooltip
/// </summary>
/// <param name="eorp" type="Object">坐标或事件对象</param>
/// <param name="innerHTML" type="String">tooltip内容</param>
}

twaver.Util.toDegrees = function (radian) {
/// <summary>
/// 	转换度为弧度
/// </summary>
/// <param name="radian" type="Number">单位为弧度的角度</param>
/// <returns type="Number">返回单位为度的角度</returns>
}

twaver.Util.toRadians = function (degree) {
/// <summary>
/// 	将角度转换为弧度
/// </summary>
/// <param name="degree" type="Number">单位为度的角度</param>
/// <returns type="Number">返回单位为弧度的角度</returns>
}

twaver.Util.transformPoint = function (point, angle, xOffset, yOffset) {
/// <summary>
/// 	以指定的偏移量，旋转角度，转换给定的坐标
/// </summary>
/// <param name="point" type="Object">要转换的坐标，为包含x和y属性的对象</param>
/// <param name="angle" type="Number">旋转角度，单位为弧度</param>
/// <param name="xOffset" type="Number">水平偏移量</param>
/// <param name="yOffset" type="Number">垂直偏移量</param>
/// <returns type="Object">转换后的坐标</returns>
}

twaver.Util.unionRect = function (srcRect, dstRect) {
/// <summary>
/// 	获取包含指定的两个矩形区域的矩形
/// </summary>
/// <param name="srcRect" type="Object">源矩形</param>
/// <param name="dstRect" type="Object">目标矩形</param>
/// <returns type="Object">返回包含指定的两个矩形区域的矩形</returns>
}

twaver.Util.unregisterImage = function (name) {
/// <summary>
/// 	卸载注册的图片
/// </summary>
/// <param name="name" type="String">图片的名称</param>
}

twaver.Util.validateLicense = function (license) {
/// <summary>
/// 	验证license信息
/// </summary>
/// <param name="license" type="String">license的信息</param>
}


twaver.vector.Attachment = function (elementUI, showInTop) {
/// <summary>
/// 	所有附件的基类，附件是和网元视图关联的视图对象，用于显示网元的附属信息，例如告警、名称标签、图标等。可以定义附件是否显示在最上层，也即会遮挡网元；为了让告警信息不被其他网元遮挡，告警等附件默认显示在最上层，也即告警显示在所有网元的上面
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInTop" type="Boolean">附件是否显示在最上层, 可选, 默认值为false</param>
/// <returns type="twaver.canvas.Attachment"></returns>
}

twaver.vector.Attachment.prototype.getAlpha = function () {
/// <summary>
/// 	获取附件透明度，默认值为1
/// </summary>
/// <returns type="String"></returns>
}

twaver.vector.Attachment.prototype.getClassName = function () {
/// <summary>
/// 	获取字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.vector.Attachment.prototype.getElement = function () {
/// <summary>
/// 	获取和附件关联的网元
/// </summary>
/// <returns type="twaver.Element">返回和附件关联的网元</returns>
}

twaver.vector.Attachment.prototype.getElementUI = function () {
/// <summary>
/// 	获取和附件关联的网元视图
/// </summary>
/// <returns type="twaver.canvas.ElementUI">返回和附件关联的网元视图</returns>
}

twaver.vector.Attachment.prototype.getFont = function (styleProp) {
/// <summary>
/// 	获取附件的字体
/// </summary>
/// <param name="styleProp" type="String">样式名称</param>
/// <returns type="String">返回附件的字体</returns>
}

twaver.vector.Attachment.prototype.getNetwork = function () {
/// <summary>
/// 	获取和附件关联的拓扑
/// </summary>
/// <returns type="twaver.canvas.Network">返回和附件关联的拓扑</returns>
}

twaver.vector.Attachment.prototype.getStyle = function (styleProp) {
/// <summary>
/// 	获取指定样式的值，封装了Element#getStyle方法
/// </summary>
/// <param name="styleProp" type="String">样式名称</param>
/// <returns type="Object">返回指定样式的值</returns>
}

twaver.vector.Attachment.prototype.getViewRect = function () {
/// <summary>
/// 	获取附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
/// </summary>
/// <returns type="Object">返回附件视图的位置及大小，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.Attachment.prototype.getZoomViewRect = function () {
/// <summary>
/// 	返回告警对象在缩放情况下的所占空间的大小的矩形
/// </summary>
/// <returns type="Object">矩形</returns>
}

twaver.vector.Attachment.prototype.hit = function (x, y) {
/// <summary>
/// 	命中测试，判断点击指定坐标点是否能选中附件
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">如果点击指定坐标能选中附件，则返回true，否者返回false</returns>
}

twaver.vector.Attachment.prototype.hitCanvasRect = function (rect) {
/// <summary>
/// 	命中测试，判断附件是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Boolean">返回附件是否包含指定区域</returns>
}

twaver.vector.Attachment.prototype.isShowOnTop = function () {
/// <summary>
/// 	获取附件是否显示在最上层
/// </summary>
/// <returns type="Boolean">返回附件是否显示在最上层</returns>
}

twaver.vector.Attachment.prototype.paint = function (ctx) {
/// <summary>
/// 	绘制附件, 子类重载此方法绘制子类自己
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.Attachment.prototype.setShowOnTop = function (t) {
/// <summary>
/// 	设置附件是否显示在最上层
/// </summary>
/// <param name="t" type="Boolean">附件是否显示在最上层</param>
}

twaver.vector.Attachment.prototype.validate = function () {
/// <summary>
/// 	更新属性, 并重新计算附件大小和位置
/// </summary>
}


twaver.vector.BaseZoomManager = function (network) {
/// <summary>
/// 	基本缩放管理器构造函数
/// </summary>
/// <param name="network" type="twaver.vector.Network">拓扑组件</param>
/// <returns type="twaver.vector.BaseZoomManager">基本缩放管理器</returns>
}

twaver.vector.BaseZoomManager.prototype.getAttachmentSizeZoom = function (attachment) {
/// <summary>
/// 	获取拓扑组件特定附件的尺寸缩放值
/// </summary>
/// <param name="attachment" type="twaver.vector.Attachment">附件</param>
/// <returns type="Number">数值</returns>
}

twaver.vector.BaseZoomManager.prototype.getClassName = function () {
/// <summary>
/// 	获取类名
/// </summary>
/// <returns type="String">字符</returns>
}

twaver.vector.BaseZoomManager.prototype.getGraphicsZoom = function () {
/// <summary>
/// 	获取拓扑组件当前的Graphics缩放值
/// </summary>
/// <returns type="Number">数值</returns>
}

twaver.vector.BaseZoomManager.prototype.getLocationZoom = function () {
/// <summary>
/// 	获取拓扑组件当前的位置缩放值
/// </summary>
/// <returns type="Number">数值</returns>
}

twaver.vector.BaseZoomManager.prototype.getSizeZoom = function (ui) {
/// <summary>
/// 	获取拓扑组件特定UI的尺寸缩放值
/// </summary>
/// <param name="ui" type="twaver.vector.ElementUI">网元UI</param>
/// <returns type="Number">数值</returns>
}

twaver.vector.BaseZoomManager.prototype.getZoom = function () {
/// <summary>
/// 	获取拓扑组件的当前缩放值
/// </summary>
/// <returns type="Number">数值</returns>
}

twaver.vector.BaseZoomManager.prototype.isAlarmBalloonVisible = function (element) {
/// <summary>
/// 	判断网元的告警附件在特定zoom值下是否可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">布尔值</returns>
}

twaver.vector.BaseZoomManager.prototype.isAttachmentVisible = function (element) {
/// <summary>
/// 	判断网元的所有附件在特定zoom值下是否可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">布尔值</returns>
}

twaver.vector.BaseZoomManager.prototype.isElementVisible = function (element) {
/// <summary>
/// 	判断网元在特定zoom值下是否可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">布尔值</returns>
}

twaver.vector.BaseZoomManager.prototype.isLabelVisible = function (element) {
/// <summary>
/// 	判断网元的标签附件在特定zoom值下是否可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">布尔值</returns>
}

twaver.vector.BaseZoomManager.prototype.isLinkVisible = function (link) {
/// <summary>
/// 	判断连线在特定zoom值下是否可见
/// </summary>
/// <param name="link" type="twaver.Link">连线</param>
/// <returns type="Boolean">布尔值</returns>
}

twaver.vector.BaseZoomManager.prototype.limitZoom = function (zoom) {
/// <param name="zoom" type="String"></param>
/// <returns type="String"></returns>
}


twaver.vector.ElementUI = function (network, element) {
/// <summary>
/// 	网元对应的视图对象，是所有网元视图（LinkUI、NodeUI等）的基类，代表网元在拓扑视图上的可视实体
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.network.ElementUI"></returns>
}

twaver.vector.ElementUI.prototype.addAttachment = function (attachment) {
/// <summary>
/// 	添加附件，如果showInAttachmentDiv为true，则附件被添加到拓扑的附件层（attachmentDiv），否则附件被添加到网元视图上
/// </summary>
/// <param name="attachment" type="twaver.network.Attachment">附件</param>
}

twaver.vector.ElementUI.prototype.addBodyBounds = function (rect) {
/// <summary>
/// 	添加内容区域，所有内容区域合并后构成unionBodyBounds
/// </summary>
/// <param name="rect" type="Object">区域，值为包含x、y、width和height属性的Object对象</param>
}

twaver.vector.ElementUI.prototype.appendShadowBound = function (part, rect) {
/// <summary>
/// 	给指定区域添加阴影区域
/// </summary>
/// <param name="part" type="Object">要添加阴影的对象</param>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Object">添加阴影后的区域</returns>
}

twaver.vector.ElementUI.prototype.checkAlarmAttachment = function () {
/// <summary>
/// 	检查是否显示告警附件，如果Network#getAlarmLabel(element)返回null或空字符串，则不显示
/// </summary>
}

twaver.vector.ElementUI.prototype.checkAttachments = function () {
/// <summary>
/// 	检查所有附件是否显示，网元刷新时（validate）被调用，包括告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
/// </summary>
}

twaver.vector.ElementUI.prototype.checkEditAttachment = function () {
/// <summary>
/// 	检查是否显示编辑附件，如果此网元可选中（Network#isSelected(element)返回true），而且可编辑（Network#isEditable(element)返回true），而且此网元视图可编辑（isEditable()返回true），则显示，否则不显示
/// </summary>
}

twaver.vector.ElementUI.prototype.checkIconsAttachment = function () {
/// <summary>
/// 	检查是否显示图标组附件，如果Network#getIconsNames(element)返回null或者length为0，则不显示
/// </summary>
}

twaver.vector.ElementUI.prototype.checkLabel2Attachment = function () {
/// <summary>
/// 	检查是否显示标签二附件，如果Network#getLabel2(element)返回null或空字符串，则不显示
/// </summary>
}

twaver.vector.ElementUI.prototype.checkLabelAttachment = function () {
/// <summary>
/// 	检查是否显示标签附件，如果Network#getLabel(element)返回null或空字符串，则不显示
/// </summary>
}

twaver.vector.ElementUI.prototype.clearShadow = function (ctx) {
/// <summary>
/// 	清除阴影
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.vector.ElementUI.prototype.getAlarmAttachment = function () {
/// <summary>
/// 	获取告警附件
/// </summary>
/// <returns type="twaver.network.AlarmAttachment">返回告警附件</returns>
}

twaver.vector.ElementUI.prototype.getAttachments = function () {
/// <summary>
/// 	获取所有附件集合，包含告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
/// </summary>
/// <returns type="twaver.List">返回所有附件集合</returns>
}

twaver.vector.ElementUI.prototype.getBodyRect = function () {
/// <summary>
/// 	获得内容区域，默认为createBodyRect返回的结果
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.ElementUI.prototype.getClassName = function () {
/// <summary>
/// 	获取该类字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.vector.ElementUI.prototype.getDyeColor = function (styleProp) {
/// <summary>
/// 	获取指定样式的渲染颜色，如果innerColor不为空则返回innerColor，否则返回指定样式的值
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="String">返回渲染颜色</returns>
}

twaver.vector.ElementUI.prototype.getEditAttachment = function () {
/// <summary>
/// 	获取编辑附件
/// </summary>
/// <returns type="twaver.network.EditAttachment">返回编辑附件</returns>
}

twaver.vector.ElementUI.prototype.getElement = function () {
/// <summary>
/// 	获取和网元视图关联的网元
/// </summary>
/// <returns type="twaver.Element">返回和网元视图关联的网元</returns>
}

twaver.vector.ElementUI.prototype.getFont = function (styleProp) {
/// <summary>
/// 	获取给定样式属性的值作为字体，如果指定样式的值是null，则返回twaver.Defaults.FONT
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="String">返回字体</returns>
}

twaver.vector.ElementUI.prototype.getHotSpot = function () {
/// <summary>
/// 	获取热点，用于定位附件等的位置
/// </summary>
/// <returns type="Object">返回热点，值为包含x和y属性的Object对象</returns>
}

twaver.vector.ElementUI.prototype.getIconsAttachment = function () {
/// <summary>
/// 	获取图标组附件
/// </summary>
/// <returns type="twaver.network.IconsAttachment">返回图标组附件</returns>
}

twaver.vector.ElementUI.prototype.getInnerColor = function () {
/// <summary>
/// 	获取网元填充色
/// </summary>
/// <returns type="String">返回网元填充色</returns>
}

twaver.vector.ElementUI.prototype.getLabelAttachment = function () {
/// <summary>
/// 	获取标签附件
/// </summary>
/// <returns type="twaver.network.LabelAttachment">返回标签附件</returns>
}

twaver.vector.ElementUI.prototype.getNetwork = function () {
/// <summary>
/// 	获取和网元视图关联的拓扑
/// </summary>
/// <returns type="twaver.network.Network">返回和网元视图关联的拓扑</returns>
}

twaver.vector.ElementUI.prototype.getOuterColor = function () {
/// <summary>
/// 	获取网元边框颜色
/// </summary>
/// <returns type="String">返回网元边框颜色</returns>
}

twaver.vector.ElementUI.prototype.getShadowColor = function () {
/// <summary>
/// 	获取网元选中后阴影颜色
/// </summary>
/// <returns type="String">返回网元选中后阴影颜色</returns>
}

twaver.vector.ElementUI.prototype.getStyle = function (styleProp) {
/// <summary>
/// 	获取指定样式属性的值，封装了Element.getStyle
/// </summary>
/// <param name="styleProp" type="String">样式属性</param>
/// <returns type="Object">返回指定样式属性的值</returns>
}

twaver.vector.ElementUI.prototype.getUnionBodyBounds = function () {
/// <summary>
/// 	获取合并的内容区域
/// </summary>
/// <returns type="Object">返回合并的内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.ElementUI.prototype.getViewRect = function () {
/// <summary>
/// 	获取视图内容区域，包括unionBodyBounds和所有附件的区域
/// </summary>
/// <returns type="Object">返回视图内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.ElementUI.prototype.handlePropertyChange = function (e) {
/// <summary>
/// 	和网元视图关联的网元属性变化时的处理函数，默认实现为调用invalidate方法让网元视图刷新
/// </summary>
/// <param name="e" type="Object">属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.vector.ElementUI.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	和网元视图关联的网元被选中或取消选中时的处理函数，默认实现为调用invalidate方法让网元视图刷新
/// </summary>
/// <param name="e" type="Object">选择变化事件，包含kind和data属性</param>
}

twaver.vector.ElementUI.prototype.hit = function (x, y) {
/// <summary>
/// 	命中测试，判断网元视图是否包含指定坐标
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">网元视图是否包含指定坐标，则返回true，否者返回false</returns>
}

twaver.vector.ElementUI.prototype.hitCanvasPoint = function (x, y) {
/// <summary>
/// 	网元是否包含指定坐标点
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Boolean">返回网元是否包含指定坐标点</returns>
}

twaver.vector.ElementUI.prototype.hitCanvasRect = function (r) {
/// <summary>
/// 	网元是否包含指定区域
/// </summary>
/// <param name="r" type="Object">区域</param>
/// <returns type="Boolean">返回网元是否包含指定区域</returns>
}

twaver.vector.ElementUI.prototype.hitCanvasRectAtAttachments = function (rect) {
/// <summary>
/// 	网元附件是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Boolean">返回网元附件是否包含指定区域</returns>
}

twaver.vector.ElementUI.prototype.hitCanvasRectAtBody = function (rect) {
/// <summary>
/// 	网元主体是否包含指定区域
/// </summary>
/// <param name="rect" type="Object">区域</param>
/// <returns type="Boolean">返回网元主体是否包含指定区域</returns>
}

twaver.vector.ElementUI.prototype.hitTest = function (x, y) {
/// <summary>
/// 	获取指定坐标下的视图对象，为附件或者网元视图本身
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <returns type="Object">返回指定坐标下的视图对象，为附件或者网元视图本身</returns>
}

twaver.vector.ElementUI.prototype.intersects = function (rect) {
/// <summary>
/// 	判断网元视图是否和指定区域相交
/// </summary>
/// <param name="rect" type="Object">矩形区域，值为包含x、y、width和height属性的Object对象</param>
/// <returns type="Boolean">如果网元视图包含指定矩形区域，则返回true，否则返回false</returns>
}

twaver.vector.ElementUI.prototype.invalidate = function (checkAttachments) {
/// <param name="checkAttachments" type="String"></param>
}

twaver.vector.ElementUI.prototype.isEditable = function () {
/// <summary>
/// 	获取网元视图是否可编辑，默认值为true
/// </summary>
/// <returns type="Boolean">如果网元视图可编辑，则返回true，否则返回false</returns>
}

twaver.vector.ElementUI.prototype.isShadowable = function () {
/// <summary>
/// 	判断是否需要设置阴影，默认实现是如果设置了阴影颜色，而且网元被被选中，而且select.style样式为shadow，则返回true，否则返回false
/// </summary>
/// <returns type="Boolean">如果需要设置阴影，则返回true，否则返回false</returns>
}

twaver.vector.ElementUI.prototype.paint = function (ctx) {
/// <summary>
/// 	绘制网元视图
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.vector.ElementUI.prototype.paintAttachment = function (ctx, att) {
/// <summary>
/// 	绘制网元附件
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
/// <param name="att" type="twaver.canvas.Attachment">附件</param>
}

twaver.vector.ElementUI.prototype.paintAttachments = function (ctx) {
/// <summary>
/// 	绘制网元所有附件
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.vector.ElementUI.prototype.paintBody = function (ctx) {
/// <summary>
/// 	绘制网元主体
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.vector.ElementUI.prototype.removeAttachment = function (attachment) {
/// <summary>
/// 	删除指定附件
/// </summary>
/// <param name="attachment" type="twaver.network.Attachment">附件</param>
}

twaver.vector.ElementUI.prototype.setHotSpot = function (value) {
/// <summary>
/// 	设置热点，用于定位附件等的位置
/// </summary>
/// <param name="value" type="Object">热点，值为包含x和y属性的Object对象</param>
}

twaver.vector.ElementUI.prototype.setShadow = function (part, canvas, rect) {
/// <summary>
/// 	给指定画布元素设置阴影效果
/// </summary>
/// <param name="part" type="Object">网元视图（ElementUI）或者附件（Attachment）</param>
/// <param name="canvas" type="HTMLCanvasElement">画布元素</param>
/// <param name="rect" type="Object">画图大小及位置，值为包含x、y、width和height属性的Object对象</param>
/// <returns type="CanvasRenderingContext2D">画布渲染内容</returns>
}

twaver.vector.ElementUI.prototype.updateStyle = function () {
/// <summary>
/// 	更新样式
/// </summary>
}

twaver.vector.ElementUI.prototype.validate = function () {
/// <summary>
/// 	此方法被Network调用，用以重画网元视图内容，此内部检查所有附件是否可见（checkAttachments），并调用updateMeasure方法重画网元内容，最后调用附件的updateMeasure方法，让附件重画
/// </summary>
}

twaver.vector.ElementUI.prototype.validateImpl = function () {
/// <summary>
/// 	更新视图
/// </summary>
}


twaver.vector.interaction.BaseInteraction = function (network) {
/// <summary>
/// 	所有拓扑交互处理器的基类，响应鼠标、键盘以及触摸事件；交互处理器封装了原始鼠标、键盘以及触摸事件，并派发了更加方便易用的交互事件（包含当前事件的数据源（一般为网元或者网元集合）以及动作（比如单击网元、双击网元、双击背景等等））。使用Network#addInteractionListener添加交互处理监听器。用户也可以继承此类实现自定义交互处理器，并通过Network#setInteractions加载交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.BaseInteraction"></returns>
}

twaver.vector.interaction.BaseInteraction.prototype.addListener = function () {
/// <summary>
/// 	批量添加事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会查找函数名为"handle_"加"事件类型"（handle_mousedown，handle_mousedown）的函数，作为指定事件类型的回调函数。此方法一般在setUp方法里被调用
/// </summary>
}

twaver.vector.interaction.BaseInteraction.prototype.convertFromUIToMarkerRect = function (vr, xoff, yoff) {
/// <summary>
/// 	获取缩放和便宜后的矩形对象
/// </summary>
/// <param name="vr" type="Object">矩形对象</param>
/// <param name="xoff" type="Number">x轴偏移量</param>
/// <param name="yoff" type="Number">y轴偏移量</param>
/// <returns type="Object">返回缩放和便宜后的矩形对象</returns>
}

twaver.vector.interaction.BaseInteraction.prototype.convertPointFromView = function (p) {
/// <summary>
/// 	获取缩放和平移后的坐标点
/// </summary>
/// <param name="p" type="Object">坐标点</param>
/// <returns type="Object">返回缩放和平移后的坐标点</returns>
}

twaver.vector.interaction.BaseInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.vector.interaction.BaseInteraction.prototype.getMarkerPoint = function (e) {
/// <summary>
/// 	获取鼠标点所在的位置
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回鼠标点所在的位置</returns>
}

twaver.vector.interaction.BaseInteraction.prototype.getOffset = function (newPoint, lastPoint) {
/// <summary>
/// 	返回两个坐标点直接的偏移，考虑了逻辑缩放的影响
/// </summary>
/// <param name="newPoint" type="Object">坐标点</param>
/// <param name="lastPoint" type="Object">坐标点</param>
/// <returns type="Object">坐标点</returns>
}

twaver.vector.interaction.BaseInteraction.prototype.paint = function (ctx) {
/// <summary>
/// 	绘制交互模式
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.vector.interaction.BaseInteraction.prototype.removeListener = function () {
/// <summary>
/// 	批量删除事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会删除指定事件类型的函数名为"hanle_"加"事件类型"（handle_mousedown，handle_mousedown）的监听器。此方法一般在tearDown方法里被调用
/// </summary>
}

twaver.vector.interaction.BaseInteraction.prototype.repaint = function () {
/// <summary>
/// 	重绘交互模式
/// </summary>
}

twaver.vector.interaction.BaseInteraction.prototype.setUp = function () {
/// <summary>
/// 	初始化交互处理器，一般调用addListener方法添加鼠标、键盘以及触摸事件监听器；Network#setInteractions会调用此方法
/// </summary>
}

twaver.vector.interaction.BaseInteraction.prototype.tearDown = function () {
/// <summary>
/// 	销毁交互处理器，一般调用removeListener方法删除鼠标、键盘以及触摸事件监听器；使用Network#setInteractions切换交互处理器时会调用此方法撤销旧的交互处理器
/// </summary>
}


twaver.vector.OverviewInteraction = function (overview) {
/// <summary>
/// 	鹰眼交互处理器
/// </summary>
/// <param name="overview" type="twaver.network.Overview">鹰眼</param>
/// <returns type="twaver.network.OverviewInteraction"></returns>
}

twaver.vector.OverviewInteraction.prototype.clear = function () {
/// <summary>
/// 	清除拖动鼠标和松开鼠标监听
/// </summary>
}

twaver.vector.OverviewInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.vector.OverviewInteraction.prototype.handleMousedown = function (e) {
/// <summary>
/// 	按下鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.OverviewInteraction.prototype.handleMousemove = function (e) {
/// <summary>
/// 	拖动鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.OverviewInteraction.prototype.handleMouseup = function (e) {
/// <summary>
/// 	松开鼠标时执行的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.vector.OverviewMSTouchInteraction = function (overview) {
/// <summary>
/// 	鹰眼触摸交互处理器
/// </summary>
/// <param name="overview" type="twaver.canvas.Overview">鹰眼</param>
/// <returns type="twaver.canvas.OverviewMSTouchInteraction"></returns>
}

twaver.vector.OverviewMSTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.vector.OverviewMSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.OverviewMSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.OverviewMSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.vector.OverviewTouchInteraction = function (overview) {
/// <summary>
/// 	鹰眼触摸交互处理器
/// </summary>
/// <param name="overview" type="twaver.network.Overview">鹰眼</param>
/// <returns type="twaver.network.OverviewTouchInteraction"></returns>
}

twaver.vector.OverviewTouchInteraction.prototype.clear = function () {
/// <summary>
/// 	清除拖动鼠标和松开鼠标监听
/// </summary>
}

twaver.vector.OverviewTouchInteraction.prototype.getClassName = function () {
/// <summary>
/// 	获取此类的字符串类名
/// </summary>
/// <returns type="String">返回类名</returns>
}

twaver.vector.OverviewTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	触摸结束时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.OverviewTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	触摸移动时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.OverviewTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	触摸开始时执行的处理函数
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.XmlSerializer = function (dataBox, settings, filterFunction) {
/// <summary>
/// 	XMLserializer是用于对数据容器中的数据进行序列化和反序列化的。
/// 	DataBox上提供了一种功能，可以直接从XML文件中导入数据，或将DataBox中的数据导出到XML文件。它是通过XmlSerializer这个类来实现的。
/// 	XmlSerializer是数据容器上的一种功能，可以在序列化时进行一些设置来更改导出时的规则。
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">进行序列化的数据容器</param>
/// <param name="settings" type="twaver.SerializationSettings">序列化设置对象</param>
/// <param name="filterFunction" type="Function">过滤的函数</param>
/// <returns type="twaver.XmlSerializer">序列化对象本身</returns>
}

twaver.XmlSerializer.prototype.deserialize = function (xmlString, rootParent) {
/// <summary>
/// 	将XML字符串反序列化到数据容器中的指定对象上，如果rootParent为空，则序列化到数据容器中
/// </summary>
/// <param name="xmlString" type="String">XML字符串</param>
/// <param name="rootParent" type="twaver.Data">反序列化时的根对象，如果为空，则序列化到数据容器中</param>
}

twaver.XmlSerializer.prototype.deserializeClientXml = function (instance, xml, property) {
/// <summary>
/// 	从指定的XML字符串中反序列化某个对象的Client属性
/// </summary>
/// <param name="instance" type="Object">反序列化的对象</param>
/// <param name="xml" type="String">XML字符串</param>
/// <param name="property" type="String">反序列化的属性名</param>
}

twaver.XmlSerializer.prototype.deserializePropertyXml = function (instance, xml, property) {
/// <summary>
/// 	从指定的XML字符串中反序列化某个对象的Property属性
/// </summary>
/// <param name="instance" type="Object">反序列化的对象</param>
/// <param name="xml" type="String">XML字符串</param>
/// <param name="property" type="String">反序列化的属性名</param>
}

twaver.XmlSerializer.prototype.deserializeStyleXml = function (instance, xml, property) {
/// <summary>
/// 	从指定的XML字符串中反序列化某个对象的Style属性
/// </summary>
/// <param name="instance" type="Object">反序列化的对象</param>
/// <param name="xml" type="String">XML字符串</param>
/// <param name="property" type="String">反序列化的属性名</param>
}

twaver.XmlSerializer.prototype.deserializeValue = function (xml, type) {
/// <summary>
/// 	从XML字符串中反序列化属性值
/// </summary>
/// <param name="xml" type="String">XML字符串</param>
/// <param name="type" type="String">属性的类型</param>
/// <returns type="String">属性值</returns>
}

twaver.XmlSerializer.prototype.getClassName = function () {
/// <summary>
/// 	获取类的名称
/// </summary>
/// <returns type="String">类名</returns>
}

twaver.XmlSerializer.prototype.initRefs = function (data) {
/// <summary>
/// 	初始化数据容器中数据对象的ref值，ref值是TWaver序列化时内部使用的属性
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
}

twaver.XmlSerializer.prototype.isSerializable = function (data) {
/// <summary>
/// 	是否需要序列化指定的对象
/// </summary>
/// <param name="data" type="twaver.Data">序列化的对象</param>
/// <returns type="Boolean">true为序列化，否则为false</returns>
}

twaver.XmlSerializer.prototype.serialize = function () {
/// <summary>
/// 	序列化相关的数据容器
/// </summary>
/// <returns type="String">XML字符串</returns>
}

twaver.XmlSerializer.prototype.serializeBody = function () {
/// <summary>
/// 	序列化数据容器的主体部分，TWaver内部使用
/// </summary>
}

twaver.XmlSerializer.prototype.serializeClientXml = function (instance, client, newInstance) {
/// <summary>
/// 	将对象的Client属性序列化成XML字符串
/// </summary>
/// <param name="instance" type="Object">序列化的数据对象</param>
/// <param name="client" type="String">Client属性名称</param>
/// <param name="newInstance" type="Object">新的实例化对象。用于和instance对象比较，如果序列化的Client属性值相等，就不需要序列化这个属性</param>
}

twaver.XmlSerializer.prototype.serializeData = function (data) {
/// <summary>
/// 	序列化数据对象
/// </summary>
/// <param name="data" type="twaver.Data">序列化的数据对象</param>
}

twaver.XmlSerializer.prototype.serializePropertyXml = function (instance, property, newInstance) {
/// <summary>
/// 	将对象的Property属性序列化成XML字符串
/// </summary>
/// <param name="instance" type="Object">序列化的数据对象</param>
/// <param name="property" type="String">Property属性名称</param>
/// <param name="newInstance" type="Object">新的实例化对象。用于和instance对象比较，如果序列化的Property属性值相等，就不需要序列化这个属性</param>
}

twaver.XmlSerializer.prototype.serializeStyleXml = function (instance, style, newInstance) {
/// <summary>
/// 	将对象的Style属性序列化成XML字符串
/// </summary>
/// <param name="instance" type="Object">序列化的数据对象</param>
/// <param name="style" type="String">Style属性名称</param>
/// <param name="newInstance" type="Object">新的实例化对象。用于和instance对象比较，如果序列化的Style属性值相等，就不需要序列化这个属性</param>
}

twaver.XmlSerializer.prototype.serializeValue = function (c, property, value, newInstanceValue, type) {
/// <summary>
/// 	序列化对象的某个属性
/// </summary>
/// <param name="c" type="String">属性的类型。它的可选值为“c”,"p"或者“s”,代表着数据的Client属性，Property属性和Style属性</param>
/// <param name="property" type="String">序列化的属性名称</param>
/// <param name="value" type="String">序列化的属性值</param>
/// <param name="newInstanceValue" type="Object">新的实例化对象的属性值</param>
/// <param name="type" type="String">序列化属性的类型。可选值为：'cdata','data','point','list.point','list.string','list.number','rectangle'</param>
}


twaver.AlarmStatePropagator = function (elementBox) {
/// <summary>
/// 	这个类用于定义告警状态传播的规则。告警传播是网元容器的一部分，当网元上发生告警时，会将这个告警传播到相关的网元上。默认的传播规则是，传播到发生告警网元的父亲上。
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">绑定的网元容器</param>
/// <returns type="twaver.AlarmStatePropagator">告警状态传播对象</returns>
}

twaver.AlarmStatePropagator.prototype = new twaver.PropertyPropagator()


twaver.AlarmStateStatistics = function (elementBox) {
/// <summary>
/// 	告警统计是用于统计网元容器上所有的告警状态的数量。它需要和网元容器绑定，当网元容器上某个网元的告警状态发生改变时，告警统计类就会自动计算告警的数量。
/// 	这个类可以用于驱动柱状图，饼状图的告警信息的显示
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">网元容器</param>
/// <returns type="twaver.AlarmStateStatistics">告警统计对象本身</returns>
}

twaver.AlarmStateStatistics.prototype = new twaver.PropertyChangeDispatcher()

twaver.AlarmStateStatistics.prototype.decrease = function (element) {
/// <summary>
/// 	减少一个网元(TWaver内部使用)
/// </summary>
/// <param name="element" type="twaver.Element">网元对象</param>
}

twaver.AlarmStateStatistics.prototype.dispose = function () {
/// <summary>
/// 	销毁告警统计，比如网元更改事件的监听器，网元属性更改事件的监听器
/// </summary>
}

twaver.AlarmStateStatistics.prototype.fireAlarmStateChange = function () {
/// <summary>
/// 	派发网元告警统计状态的更改事件。TWaver内部使用
/// </summary>
}

twaver.AlarmStateStatistics.prototype.getAcknowledgedAlarmCount = function (severity) {
/// <summary>
/// 	获取指定告警级别的确认告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">指定的告警级别</param>
/// <returns type="Number">确认告警的数量</returns>
}

twaver.AlarmStateStatistics.prototype.getElementBox = function () {
/// <summary>
/// 	获取绑定的网元容器
/// </summary>
/// <returns type="twaver.ElementBox">网元容器对象</returns>
}

twaver.AlarmStateStatistics.prototype.getFilterFunction = function () {
/// <summary>
/// 	获取告警统计的过滤器，这个过滤器用于过滤哪些网元或哪些告警可以不计入统计范围。默认为空，也就是统计网元容器中所有网元的告警都计入统计范围
/// </summary>
/// <returns type="Function">告警统计的过滤器</returns>
}

twaver.AlarmStateStatistics.prototype.getNewAlarmCount = function (severity) {
/// <summary>
/// 	获取指定告警级别的新发告警的数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">指定的告警级别</param>
/// <returns type="Number">新发告警的数量</returns>
}

twaver.AlarmStateStatistics.prototype.getSumInfo = function (severity) {
/// <summary>
/// 	获取指定告警级别的告警统计的总数信息，包括新发告警的数量，确认告警的数量和两者总数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">指定的告警级别</param>
/// <returns type="Object">告警统计的总数信息</returns>
}

twaver.AlarmStateStatistics.prototype.getTotalAlarmCount = function (severity) {
/// <summary>
/// 	获取指定告警级别的告警总数量
/// </summary>
/// <param name="severity" type="twaver.AlarmSeverity">指定的告警级别</param>
/// <returns type="Number">告警级别的告警总数量</returns>
}

twaver.AlarmStateStatistics.prototype.handleElementBoxChange = function (e) {
/// <summary>
/// 	当网元容器发生变化时。TWaver内部会调用此方法
/// </summary>
/// <param name="e" type="Object">网元容器发生变化的事件</param>
}

twaver.AlarmStateStatistics.prototype.handleElementPropertyChange = function (e) {
/// <summary>
/// 	当网元容器中网元的属性发生变化时调用此方法
/// </summary>
/// <param name="e" type="Object">网元属性变化的事件</param>
}

twaver.AlarmStateStatistics.prototype.increase = function (element) {
/// <summary>
/// 	增加一个网元，TWaver内部使用
/// </summary>
/// <param name="element" type="twaver.Element">网元对象</param>
}

twaver.AlarmStateStatistics.prototype.reset = function () {
/// <summary>
/// 	设置所有的告警统计的数量为零
/// </summary>
}

twaver.AlarmStateStatistics.prototype.setElementBox = function (box) {
/// <summary>
/// 	设置绑定的网元容器
/// </summary>
/// <param name="box" type="twaver.ElementBox">网元容器对象</param>
}

twaver.AlarmStateStatistics.prototype.setFilterFunction = function (f) {
/// <summary>
/// 	设置告警统计的过滤器，这个过滤器用于过滤哪些网元或哪些告警可以不参考统计，默认为空，也就是统计网元容器中所有网元的告警
/// </summary>
/// <param name="f" type="Function">告警统计的过滤器</param>
}


twaver.animate.AnimateBounds = function (node, newBounds, finishFunction) {
/// <summary>
/// 	以动画效果渐变更改节点位置以及大小
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <param name="newBounds" type="Object">节点新的位置及大小，值为包含x、y、width和height属性的Object对象</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateBounds"></returns>
}

twaver.animate.AnimateBounds.prototype = new twaver.animate.Animate()


twaver.animate.AnimateProperty = function (objects, newValues, finishFunction) {
/// <summary>
/// 	以动画效果更改一组对象的属性
/// </summary>
/// <param name="objects" type="twaver.List">需要更改属性的对象集合</param>
/// <param name="newValues" type="twaver.List">新值集合</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateProperty"></returns>
}

twaver.animate.AnimateProperty.prototype = new twaver.animate.Animate()

twaver.animate.AnimateProperty.prototype.currentAction = function (obj, oldValue, newValue, rate) {
/// <summary>
/// 	动画每帧执行的动作，子类重载此方法以实现自定义逻辑
/// </summary>
/// <param name="obj" type="Object">需要更改属性的对象</param>
/// <param name="oldValue" type="Object">旧值</param>
/// <param name="newValue" type="Object">新值</param>
/// <param name="rate" type="Number">动画完成进度</param>
}

twaver.animate.AnimateProperty.prototype.getPropertyValue = function (obj) {
/// <summary>
/// 	获取指定对象的指定属性
/// </summary>
/// <param name="obj" type="Object">需要更改属性的对象</param>
}


twaver.animate.AnimateScrollPosition = function (view, newHorizontalOffset, newVerticalOffset) {
/// <summary>
/// 	以动画效果更改组件垂直和水平滚动条位置
/// </summary>
/// <param name="view" type="HTMLDivElement">HTML DIV元素</param>
/// <param name="newHorizontalOffset" type="Number">新的水平滚动条位置</param>
/// <param name="newVerticalOffset" type="Number">新的垂直滚动条位置</param>
/// <returns type="twaver.animate.AnimateScrollPosition"></returns>
}

twaver.animate.AnimateScrollPosition.prototype = new twaver.animate.Animate()


twaver.animate.AnimateSubNetwork = function (network, subNetwork, finishFunction) {
/// <summary>
/// 	以动画效果切换当前子网
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="subNetwork" type="twaver.SubNetwork">子网</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateSubNetwork"></returns>
}

twaver.animate.AnimateSubNetwork.prototype = new twaver.animate.Animate()


twaver.animate.AnimateXYZoom = function (view, newXZoom, newYZoom, finishFunction) {
/// <summary>
/// 	以动画效果更改水平和垂直缩放比例
/// </summary>
/// <param name="view" type="twaver.controls.View">视图</param>
/// <param name="newXZoom" type="Number">新的水平缩放比例</param>
/// <param name="newYZoom" type="Number">新的垂直缩放比例</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateXYZoom"></returns>
}

twaver.animate.AnimateXYZoom.prototype = new twaver.animate.Animate()


twaver.animate.AnimateXZoom = function (view, newXZoom, finishFunction) {
/// <summary>
/// 	以动画效果更改水平缩放比例
/// </summary>
/// <param name="view" type="twaver.controls.View">视图</param>
/// <param name="newXZoom" type="Number">新的水平缩放比例</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateXZoom"></returns>
}

twaver.animate.AnimateXZoom.prototype = new twaver.animate.Animate()


twaver.animate.AnimateYZoom = function (view, newYZoom, finishFunction) {
/// <summary>
/// 	以动画效果更改垂直缩放比例
/// </summary>
/// <param name="view" type="twaver.controls.View">视图</param>
/// <param name="newYZoom" type="Number">新的垂直缩放比例</param>
/// <param name="finishFunction" type="Number">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateYZoom"></returns>
}

twaver.animate.AnimateYZoom.prototype = new twaver.animate.Animate()


twaver.animate.AnimateZoom = function (view, newZoom, finishFunction) {
/// <summary>
/// 	以动画效果更改缩放比例
/// </summary>
/// <param name="view" type="twaver.controls.View">视图</param>
/// <param name="newZoom" type="Number">新的缩放比例</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateZoom"></returns>
}

twaver.animate.AnimateZoom.prototype = new twaver.animate.Animate()


twaver.canvas.BasicAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	告警附件和标签附件等的基类，用于显示文本信息的附件
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.BasicAttachment"></returns>
}

twaver.canvas.BasicAttachment.prototype = new twaver.canvas.Attachment()

twaver.canvas.BasicAttachment.prototype.calculateMeasure = function () {
/// <summary>
/// 	计算附件位置和大小
/// </summary>
}

twaver.canvas.BasicAttachment.prototype.getCap = function () {
/// <summary>
/// 	获取附件画线时线条两端的样式, 默认值为twaver.Defaults.ATTACHMENT_CAP(butt), 可选值为butt(无端点)，round(圆头端点)或 square(方头端点)
/// </summary>
/// <returns type="String">返回画线时, 线条两端的样式</returns>
}

twaver.canvas.BasicAttachment.prototype.getContentHeight = function () {
/// <summary>
/// 	获取附件内容高度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT(20)
/// </summary>
/// <returns type="Number">返回附件内容高度</returns>
}

twaver.canvas.BasicAttachment.prototype.getContentRect = function () {
/// <summary>
/// 	获取附件内容区域
/// </summary>
/// <returns type="Object">返回附件内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.BasicAttachment.prototype.getContentWidth = function () {
/// <summary>
/// 	获取附件内容宽度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（30）
/// </summary>
/// <returns type="Number">返回附件内容宽度</returns>
}

twaver.canvas.BasicAttachment.prototype.getCornerRadius = function () {
/// <summary>
/// 	获取附件圆角半径，默认值为twaver.Defaults.ATTACHMENT_CORNER_RADIUS（5）
/// </summary>
/// <returns type="Number">返回附件圆角半径</returns>
}

twaver.canvas.BasicAttachment.prototype.getDirection = function () {
/// <summary>
/// 	获取附件箭头的显示方位，一般用于告警冒泡，默认值为twaver.Defaults.ATTACHMENT_DIRECTION（right），可选值为：
/// 	aboveleft 附件箭头在上左角
/// 	aboveright 附件箭头在上右角
/// 	belowleft 附件箭头在下左角
/// 	belowright 附件箭头在下右角
/// 	leftabove 附件箭头在左上角
/// 	leftbelow 附件箭头在左下角
/// 	rightabove 附件箭头在右上角
/// 	rightbelow 附件箭头在右下角
/// 	above 附件箭头在上边
/// 	below 附件箭头在下边
/// 	left 附件箭头在左边
/// 	right 附件箭头在右边
/// </summary>
/// <returns type="String">返回附件箭头的显示方位</returns>
}

twaver.canvas.BasicAttachment.prototype.getFillColor = function () {
/// <summary>
/// 	获取附件填充颜色，默认值为twaver.Defaults.ATTACHMENT_FILL_COLOR（#000000）
/// </summary>
/// <returns type="String">返回附件填充颜色</returns>
}

twaver.canvas.BasicAttachment.prototype.getGradient = function () {
/// <summary>
/// 	获取附件渐进色填充样式，默认值为twaver.Defaults.ATTACHMENT_GRADIENT（null），null表示不使用填充渐进色，可选值为：
/// 	linear.east, linear.north, linear.northeast, linear.northwest, linear.south, linear.southeast, linear.southwest, linear.west, none, radial.center, radial.east, radial.north, radial.northeast, radial.northwest, radial.south, radial.southeast, radial.southwest, radial.west, spread.antidiagonal, spread.diagonal, spread.east, spread.horizontal, spread.north, spread.south, spread.vertical, spread.west
/// </summary>
/// <returns type="String">返回附件渐进色填充样式</returns>
}

twaver.canvas.BasicAttachment.prototype.getGradientColor = function () {
/// <summary>
/// 	获取附件填充渐进色，默认值为twaver.Defaults.ATTACHMENT_GRADIENT_COLOR（#FFFFFF）
/// </summary>
/// <returns type="String">返回附件填充渐进色</returns>
}

twaver.canvas.BasicAttachment.prototype.getJoin = function () {
/// <summary>
/// 	获取附件在画线时的线条连接点样式，默认值为twaver.Defaults.ATTACHMENT_JOIN（miter），可选值为bevel（斜角连接）round（圆角连接）和miter（尖角连接）
/// </summary>
/// <returns type="String">返回附件在画线时的线条连接点样式</returns>
}

twaver.canvas.BasicAttachment.prototype.getOutlineColor = function () {
/// <summary>
/// 	获取附件边框颜色，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_COLOR（#000000）
/// </summary>
/// <returns type="String">返回附件边框颜色</returns>
}

twaver.canvas.BasicAttachment.prototype.getOutlineWidth = function () {
/// <summary>
/// 	获取附件边框宽度，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH（-1），-1代表无边框
/// </summary>
/// <returns type="Number">返回附件边框宽度</returns>
}

twaver.canvas.BasicAttachment.prototype.getPadding = function () {
/// <summary>
/// 	获取附件内容和边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING（0）
/// </summary>
/// <returns type="Number">返回附件内容和边界之间的间距</returns>
}

twaver.canvas.BasicAttachment.prototype.getPaddingBottom = function () {
/// <summary>
/// 	获取附件内容和下边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_BOTTOM（0）
/// </summary>
/// <returns type="Number">返回附件内容和下边界之间的间距</returns>
}

twaver.canvas.BasicAttachment.prototype.getPaddingLeft = function () {
/// <summary>
/// 	获取附件内容和左边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_LEFT（0）
/// </summary>
/// <returns type="Number">返回附件内容和左边界之间的间距</returns>
}

twaver.canvas.BasicAttachment.prototype.getPaddingRight = function () {
/// <summary>
/// 	获取附件内容和右边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_RIGHT（0）
/// </summary>
/// <returns type="Number">附件内容和右边界之间的间距</returns>
}

twaver.canvas.BasicAttachment.prototype.getPaddingTop = function () {
/// <summary>
/// 	获取附件内容和上边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_TOP（0）
/// </summary>
/// <returns type="Number">返回附件内容和上边界之间的间距</returns>
}

twaver.canvas.BasicAttachment.prototype.getPointerLength = function () {
/// <summary>
/// 	获取附件箭头长度，默认值为twaver.Defaults.ATTACHMENT_POINTER_LENGTH（10）
/// </summary>
/// <returns type="Number">返回附件箭头长度</returns>
}

twaver.canvas.BasicAttachment.prototype.getPointerWidth = function () {
/// <summary>
/// 	获取附件箭头宽度，默认值为ATTACHMENT_POINTER_WIDTH（8）
/// </summary>
/// <returns type="Number">返回附件箭头宽度</returns>
}

twaver.canvas.BasicAttachment.prototype.getPosition = function () {
/// <summary>
/// 	获取附件位置，默认值为twaver.Defaults.ATTACHMENT_POSITION（topright.topright）
/// 	可选值为
/// 	hotspot
/// 	from
/// 	to
/// 	topleft.topleft
/// 	topleft.topright
/// 	top.top
/// 	topright.topleft
/// 	topright.topright
/// 	topleft
/// 	top
/// 	topright
/// 	topleft.bottomleft
/// 	topleft.bottomright
/// 	top.bottom
/// 	topright.bottomleft
/// 	topright.bottomright
/// 	left.left
/// 	left
/// 	left.right
/// 	center
/// 	right.left
/// 	right
/// 	right.right
/// 	bottomleft.topleft
/// 	bottomleft.topright
/// 	bottom.top
/// 	bottomright.topleft
/// 	bottomright.topright
/// 	bottomleft
/// 	bottom
/// 	bottomright
/// 	bottomleft.bottomleft
/// 	bottomleft.bottomright
/// 	bottom.bottom
/// 	bottomright.bottomleft
/// 	bottomright.bottomright
/// </summary>
/// <returns type="String">返回附件位置</returns>
}

twaver.canvas.BasicAttachment.prototype.getRoundRect = function () {
/// <summary>
/// 	获取附件圆角区域
/// </summary>
/// <returns type="Object">返回附件圆角区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.BasicAttachment.prototype.getXOffset = function () {
/// <summary>
/// 	获取附件x轴偏移量，默认值为twaver.Defaults.ATTACHMENT_XOFFSET（0）
/// </summary>
/// <returns type="Number">返回附件的x轴偏移量</returns>
}

twaver.canvas.BasicAttachment.prototype.getYOffset = function () {
/// <summary>
/// 	获取附件y轴偏移量，默认值为twaver.Defaults.ATTACHMENT_YOFFSET（0）
/// </summary>
/// <returns type="Number">返回附件y轴偏移量</returns>
}

twaver.canvas.BasicAttachment.prototype.isFill = function () {
/// <summary>
/// 	获取附件是否有填充背景，默认值为twaver.Defaults.ATTACHMENT_FILL（false）
/// </summary>
/// <returns type="Boolean">返回附件是否有填充背景</returns>
}

twaver.canvas.BasicAttachment.prototype.isShadowable = function () {
/// <summary>
/// 	获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE（false）
/// </summary>
/// <returns type="Boolean">返回附件选中时是否有阴影效果</returns>
}


twaver.canvas.EditAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	编辑附件，用于显示网元是否可编辑。对于可编辑的节点，节点周围显示8个可以改变网元大小的小方块；对于多边形和折线，每个可移动点显示为黄色的小圆球
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.EditAttachment"></returns>
}

twaver.canvas.EditAttachment.prototype = new twaver.canvas.Attachment()

twaver.canvas.EditAttachment.prototype.paintEditPoints = function (ctx) {
/// <summary>
/// 	画ShapeLink和ShapeNode的控制点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.EditAttachment.prototype.paintResizingPoints = function (ctx) {
/// <summary>
/// 	画8个更改网元大小的控制点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.EditAttachment.prototype.paintRotatePoints = function (ctx) {
/// <summary>
/// 	绘制旋转点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}


twaver.canvas.IconsAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	图标组附件，用于显示一组图标
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.IconsAttachment"></returns>
}

twaver.canvas.IconsAttachment.prototype = new twaver.canvas.Attachment()

twaver.canvas.IconsAttachment.prototype.isShadowable = function () {
/// <summary>
/// 	获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE(false)
/// </summary>
/// <returns type="Boolean">返回附件选中时是否有阴影效果</returns>
}


twaver.canvas.interaction.CreateElementInteraction = function (network, typeOrElementFunction) {
/// <summary>
/// 	创建节点交互处理器，当点击拓扑时，创建指定类型的节点，并设置此节点中心位置为点击位置，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建节点模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrElementFunction" type="Object">节点类型或者节点生成器方法，可选，默认值为twaver.Node</param>
/// <returns type="twaver.network.interaction.CreateElementInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateElementInteraction(network, twaver.SubNetwork),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateElementInteraction(network,
/// 	    function (point) {
/// 	                    var element = new twaver.Node();
/// 	                    element.setName(element.getClassName());
/// 	                    element.setCenterLocation(point);
/// 	                    var parent = network.getElementAt(point);
/// 	                    if (parent && parent instanceof twaver.Group) {
/// 	                        element.setParent(parent);
/// 	                    }
/// 	                    return element;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.canvas.interaction.CreateElementInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.CreateElementInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.canvas.interaction.CreateLinkInteraction = function (network, typeOrLinkFunction) {
/// <summary>
/// 	创建连线交互处理器，在拓扑上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrLinkFunction" type="Object">连线类型或者连线生成器方法，可选，默认值为twaver.Link</param>
/// <returns type="twaver.network.interaction.CreateLinkInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateLinkInteraction(network, twaver.Link),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateLinkInteraction(network,
/// 	    function (fromNode, toNode) {
/// 	        var link = new twaver.Link();
/// 	        link.setFromNode(fromNode);
/// 	        link.setToNode(toNode);
/// 	        link.setStyle('link.color', 'red');
/// 	        return link;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.CreateLinkInteraction.prototype.clear = function () {
/// <summary>
/// 	创建连线结束后，清除临时状态
/// </summary>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype.createLink = function () {
/// <summary>
/// 	创建连线
/// </summary>
/// <returns type="twaver.Link">连线</returns>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype.getFromNode = function (e) {
/// <summary>
/// 	获取当前鼠标下的节点，并作为将要创建的连线的起始节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回当前鼠标下的节点</returns>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype.getNode = function (e) {
/// <summary>
/// 	获取鼠标下的节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回鼠标下的节点</returns>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype.getToNode = function (e) {
/// <summary>
/// 	获取当前鼠标下的节点，并作为将要创建的连线的结束节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回当前鼠标下的节点</returns>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.CreateLinkInteraction.prototype.paintLine = function (ctx) {
/// <summary>
/// 	从起始点画线到鼠标当前点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}


twaver.canvas.interaction.CreateShapeNodeInteraction = function (network, typeOrShapeNodeFunction) {
/// <summary>
/// 	创建多边形交互处理器，在Network上多次点击不同位置设置多边形的points属性，最后双击结束，可以用Network#setCreateShapeNodeInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="String">拓扑</param>
/// <param name="typeOrShapeNodeFunction" type="Object">多边形类型或者多边形生成器方法，可选，默认值为twaver.ShapeNode</param>
/// <returns type="twaver.network.interaction.CreateShapeNodeInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeNodeInteraction(network, twaver.ShapeNode),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeNodeInteraction(network,
/// 	    function (points) {
/// 	        var shapeNode = new twaver.ShapeNode();
/// 	        shapeNode.setStyle('vector.fill.color', 'red');
/// 	        if(points){
/// 	            shapeNode.setPoints(points);
/// 	        }
/// 	        return shapeNode;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.canvas.interaction.CreateShapeNodeInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.CreateShapeNodeInteraction.prototype.clear = function () {
/// <summary>
/// 	创建多边形结束后，清除临时状态
/// </summary>
}

twaver.canvas.interaction.CreateShapeNodeInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.CreateShapeNodeInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.canvas.interaction.DefaultInteraction = function (network) {
/// <summary>
/// 	默认交互处理器，处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等交互动作
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.DefaultInteraction"></returns>
}

twaver.canvas.interaction.DefaultInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.DefaultInteraction.prototype.handle_keydown = function (e) {
/// <summary>
/// 	处理键盘按下事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.canvas.interaction.DefaultInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.DefaultInteraction.prototype.handleClicked = function (e, element) {
/// <summary>
/// 	处理鼠标点击
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.canvas.interaction.DefaultInteraction.prototype.handleDoubleClicked = function (e, element) {
/// <summary>
/// 	处理鼠标双击
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="element" type="twaver.Element">网元</param>
}


twaver.canvas.interaction.EditInteraction = function (network, lazyMode) {
/// <summary>
/// 	编辑交互处理器，处理改变网元大小、更改折线（ShapeLink）和多边形（ShapeNode）的轨迹等操作，可以用Network#setEditInteractions快速切换当前交互模式为编辑模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选，默认值为false</param>
/// <returns type="twaver.network.interaction.EditInteraction"></returns>
}

twaver.canvas.interaction.EditInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.EditInteraction.prototype.clear = function () {
/// <summary>
/// 	编辑结束后，清除临时状态
/// </summary>
}

twaver.canvas.interaction.EditInteraction.prototype.getDistanceFromPointToLine = function (point, point1, point2) {
/// <summary>
/// 	获取点离直线的距离
/// </summary>
/// <param name="point" type="Object">点</param>
/// <param name="point1" type="Object">线段顶点1</param>
/// <param name="point2" type="Object">线段顶点2</param>
/// <returns type="Number">返回点离直线的距离</returns>
}

twaver.canvas.interaction.EditInteraction.prototype.getPointIndex = function (points, point, closed) {
/// <summary>
/// 	获取指定点所在的边索引
/// </summary>
/// <param name="points" type="twaver.List">坐标点集合</param>
/// <param name="point" type="Object">点</param>
/// <param name="closed" type="Boolean">是否闭合</param>
/// <returns type="Number">返回指定点所在的边索引</returns>
}

twaver.canvas.interaction.EditInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.EditInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.EditInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.EditInteraction.prototype.isPointOnLine = function (point, point1, point2, width) {
/// <summary>
/// 	获取指定点是否在线段上
/// </summary>
/// <param name="point" type="Object">坐标点</param>
/// <param name="point1" type="Object">线段顶点1</param>
/// <param name="point2" type="Object">线段顶点2</param>
/// <param name="width" type="Number">线段宽度</param>
/// <returns type="Boolean">返回指定点是否在线段上</returns>
}

twaver.canvas.interaction.EditInteraction.prototype.showRotateScale = function () {
/// <summary>
/// 	显示旋转刻度
/// </summary>
}


twaver.canvas.interaction.MagnifyInteraction = function (network, scale, xRadius, yRadius) {
/// <summary>
/// 	放大镜交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="scale" type="Number">缩放比例，可选，默认值为2</param>
/// <param name="xRadius" type="Number">水平半径，可选，默认值为100</param>
/// <param name="yRadius" type="Number">垂直半径，可选，默认值为100</param>
/// <returns type="twaver.network.interaction.MagnifyInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.SelectInteraction(network),
/// 	    new twaver.network.interaction.MoveInteraction(network),
/// 	    new twaver.network.interaction.DefaultInteraction(network),
/// 	    new twaver.network.interaction.MagnifyInteraction(network)
/// 	]);
/// </example>
}

twaver.canvas.interaction.MagnifyInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.MagnifyInteraction.prototype.getBackgroundColor = function () {
/// <summary>
/// 	获取放大镜背景颜色
/// </summary>
/// <returns type="String">返回放大镜背景颜色，默认为白色</returns>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.getBorderColor = function () {
/// <summary>
/// 	获取边框颜色
/// </summary>
/// <returns type="String">返回边框颜色，默认为黑色</returns>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.getBorderWidth = function () {
/// <summary>
/// 	获取边框宽度
/// </summary>
/// <returns type="Number">返回边框宽度，默认为1</returns>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.getShape = function () {
/// <summary>
/// 	获取放大镜形状
/// </summary>
/// <returns type="String">返回放大镜形状，默认为圆形</returns>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.getXRadius = function () {
/// <summary>
/// 	获取x轴半径
/// </summary>
/// <returns type="Number">返回x轴半径，默认为100</returns>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.getYRadius = function () {
/// <summary>
/// 	获取y轴半径
/// </summary>
/// <returns type="Number">返回y轴半径</returns>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.getZoom = function () {
/// <summary>
/// 	获取缩放级别
/// </summary>
/// <returns type="Number">返回缩放级别，默认为2</returns>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.setBackgroundColor = function (value) {
/// <summary>
/// 	设置放大镜背景颜色
/// </summary>
/// <param name="value" type="String">放大镜背景颜色</param>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.setBorderColor = function (value) {
/// <summary>
/// 	设置边框颜色
/// </summary>
/// <param name="value" type="String">边框颜色</param>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.setBorderWidth = function (value) {
/// <summary>
/// 	设置边框宽度
/// </summary>
/// <param name="value" type="Number">边框宽度</param>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.setShape = function (value) {
/// <summary>
/// 	设置放大镜形状
/// </summary>
/// <param name="value" type="String">放大镜形状</param>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.setXRadius = function (value) {
/// <summary>
/// 	设置x轴半径
/// </summary>
/// <param name="value" type="Number">x轴半径</param>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.setYRadius = function (value) {
/// <summary>
/// 	设置y轴半径
/// </summary>
/// <param name="value" type="Number">y轴半径</param>
}

twaver.canvas.interaction.MagnifyInteraction.prototype.setZoom = function (value) {
/// <summary>
/// 	设置缩放级别
/// </summary>
/// <param name="value" type="Number">缩放级别</param>
}


twaver.canvas.interaction.MoveInteraction = function (network, lazyMode) {
/// <summary>
/// 	移动网元交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选，默认值为false</param>
/// <returns type="twaver.network.interaction.MoveInteraction"></returns>
}

twaver.canvas.interaction.MoveInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.MoveInteraction.prototype.end = function (e) {
/// <summary>
/// 	移动结束后，清除临时状态
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MoveInteraction.prototype.handle_keydown = function (e) {
/// <summary>
/// 	处理键盘按下事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.canvas.interaction.MoveInteraction.prototype.handle_keyup = function (e) {
/// <summary>
/// 	处理键盘弹起事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.canvas.interaction.MoveInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MoveInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MoveInteraction.prototype.handle_mouseout = function (e) {
/// <summary>
/// 	处理鼠标移出事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MoveInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起，结束网元移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MoveInteraction.prototype.isParenting = function () {
/// <summary>
/// 	获取是否正在设置父亲
/// </summary>
/// <returns type="Number">返回是否正在设置父亲</returns>
}

twaver.canvas.interaction.MoveInteraction.prototype.parentProcess = function (e, released) {
/// <summary>
/// 	键盘P键按下时，鼠标移动到网元上时的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="released" type="Boolean">键盘P键是否按下</param>
}


twaver.canvas.interaction.MSTouchInteraction = function (network) {
/// <summary>
/// 	触摸交互处理器
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑图组件</param>
/// <returns type="twaver.canvas.interaction.MSTouchInteraction"></returns>
}

twaver.canvas.interaction.MSTouchInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

twaver.canvas.interaction.MSTouchInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.canvas.interaction.MSTouchInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MSTouchInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.MSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.interaction.MSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.interaction.MSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.canvas.interaction.PanInteraction = function (network) {
/// <summary>
/// 	手抓图交互处理器，拖动拓扑时水平或垂直滚动拓扑，可以用Network#setPanInteractions快速切换当前拓扑交互模式为手抓图模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.PanInteraction"></returns>
}

twaver.canvas.interaction.PanInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.canvas.interaction.PanInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.PanInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.PanInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.canvas.interaction.ScrollInteraction = function (network) {
/// <summary>
/// 	滚动交互模式
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑图组件</param>
/// <returns type="twaver.canvas.interaction.ScrollInteraction"></returns>
}

twaver.canvas.interaction.ScrollInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

twaver.canvas.interaction.ScrollInteraction.prototype.getScrollBarColor = function () {
/// <summary>
/// 	获取滚动条颜色
/// </summary>
/// <returns type="String">返回滚动条颜色，默认为#cccccc</returns>
}

twaver.canvas.interaction.ScrollInteraction.prototype.getScrollBarWidth = function () {
/// <summary>
/// 	获取滚动条宽度
/// </summary>
/// <returns type="Number">返回滚动条宽度</returns>
}

twaver.canvas.interaction.ScrollInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.handle_mouseout = function (e) {
/// <summary>
/// 	处理鼠标移出事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.handle_mouseover = function (e) {
/// <summary>
/// 	处理鼠标移入事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.handleMouseMove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.handleMouseUp = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.handleMouseWheel = function (e) {
/// <summary>
/// 	处理鼠标滚轮事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.handleViewRectChange = function (e) {
/// <summary>
/// 	处理拓扑图大小变化事件
/// </summary>
/// <param name="e" type="Object">拓扑图事件</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.paintRoundRect = function (ctx, fillStyle, alpha, x, y, w, h, r) {
/// <summary>
/// 	绘制圆角矩形
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
/// <param name="fillStyle" type="String">填充色</param>
/// <param name="alpha" type="Number">透明度</param>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <param name="w" type="Number">宽度</param>
/// <param name="h" type="Number">高度</param>
/// <param name="r" type="Number">圆角半径</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.scrollXOffset = function (left) {
/// <summary>
/// 	沿x轴方向平移
/// </summary>
/// <param name="left" type="Boolean">是否向左平移</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.scrollYOffset = function (up) {
/// <summary>
/// 	沿y轴方向平移
/// </summary>
/// <param name="up" type="Boolean">是否向上平移</param>
}

twaver.canvas.interaction.ScrollInteraction.prototype.validateScrollBar = function () {
/// <summary>
/// 	重新绘制滚动条
/// </summary>
}


twaver.canvas.interaction.SelectInteraction = function (network) {
/// <summary>
/// 	选择网元交互模式，点击空白区域时清空选中，点击网元时选中网元，框选时，选中框选区域中的网元。
/// 	框选时，选择模式（当框选网元时，哪些网元会被选中）会影响如何选择网元，默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.SelectInteraction"></returns>
}

twaver.canvas.interaction.SelectInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

twaver.canvas.interaction.SelectInteraction.prototype.end = function (e) {
/// <summary>
/// 	框选结束时，选中网元
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.SelectInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.canvas.interaction.SelectInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.SelectInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.canvas.interaction.SelectInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.canvas.interaction.TouchInteraction = function (network) {
/// <summary>
/// 	触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.TouchInteraction"></returns>
}

twaver.canvas.interaction.TouchInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

twaver.canvas.interaction.TouchInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.canvas.interaction.TouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.interaction.TouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.canvas.interaction.TouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.canvas.LinkUI = function (network, element) {
/// <summary>
/// 	连线对应的视图对象，用连线的样式在连线的起始和结束节点之间画一条线
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Link">连线</param>
/// <returns type="twaver.network.LinkUI"></returns>
}

twaver.canvas.LinkUI.prototype = new twaver.network.ElementUI()

twaver.canvas.LinkUI.prototype.checkLinkHandlerAttachment = function () {
/// <summary>
/// 	检查连线捆绑标签附件
/// </summary>
}

twaver.canvas.LinkUI.prototype.createBodyRect = function () {
/// <summary>
/// 	创建连线内容区域，默认为热点周围一个像素的矩形
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.LinkUI.prototype.createLinkPoints = function () {
/// <summary>
/// 	生成构成连线的点的集合
/// </summary>
/// <returns type="twaver.List">返回构成连线的点的集合</returns>
}

twaver.canvas.LinkUI.prototype.drawLinePoints = function (g, points, width, color) {
/// <summary>
/// 	画线，drawBody方法调用此方法画线
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">画布渲染内容</param>
/// <param name="points" type="twaver.List">由点构成的集合</param>
/// <param name="width" type="Number">线条宽度</param>
/// <param name="color" type="String">线条颜色</param>
}

twaver.canvas.LinkUI.prototype.getAngle = function () {
/// <summary>
/// 	获取连线的角度
/// </summary>
/// <returns type="Number">返回连线的角度</returns>
}

twaver.canvas.LinkUI.prototype.getControlPoint = function () {
/// <summary>
/// 	获取控制点，控制点用于劈分正交直角连线
/// </summary>
/// <returns type="Object">返回控制点坐标，值为包含x和y属性的Object对象</returns>
}

twaver.canvas.LinkUI.prototype.getFromPoint = function () {
/// <summary>
/// 	获取连线起始坐标
/// </summary>
/// <returns type="Object">返回连线起始坐标，值为包含x和y属性的Object对象</returns>
}

twaver.canvas.LinkUI.prototype.getFromPosition = function (xoffset, yoffset) {
/// <summary>
/// 	获取偏移后的起始坐标
/// </summary>
/// <param name="xoffset" type="Number">x轴偏移量</param>
/// <param name="yoffset" type="Number">y轴偏移量</param>
/// <returns type="Object">返回偏移后的起始坐标，值为包含x和y属性的Object对象</returns>
}

twaver.canvas.LinkUI.prototype.getLineLength = function () {
/// <summary>
/// 	获取Link的长度
/// </summary>
/// <returns type="Number">返回Link的长度</returns>
}

twaver.canvas.LinkUI.prototype.getLinkHandlerAttachment = function () {
/// <summary>
/// 	获取连线捆绑标签附件
/// </summary>
/// <returns type="twaver.network.Attachment">返回连线捆绑标签附件</returns>
}

twaver.canvas.LinkUI.prototype.getLinkPoints = function () {
/// <summary>
/// 	获取构成连线的点的集合
/// </summary>
/// <returns type="twaver.List">返回构成连线的点的集合</returns>
}

twaver.canvas.LinkUI.prototype.getToPoint = function () {
/// <summary>
/// 	获取连线结束坐标
/// </summary>
/// <returns type="Object">返回连线结束坐标，值为包含x和y属性的Object对象</returns>
}

twaver.canvas.LinkUI.prototype.getToPosition = function (xoffset, yoffset) {
/// <summary>
/// 	获取偏移后的结束坐标
/// </summary>
/// <param name="xoffset" type="Number">x轴偏移量</param>
/// <param name="yoffset" type="Number">y轴偏移量</param>
/// <returns type="Object">返回偏移后的结束坐标，值为包含x和y属性的Object对象</returns>
}

twaver.canvas.LinkUI.prototype.setControlPoint = function (point) {
/// <summary>
/// 	设置控制点，控制点用于劈分正交直角连线
/// </summary>
/// <param name="point" type="Object">控制点坐标，值为包含x和y属性的Object对象</param>
}

twaver.canvas.LinkUI.prototype.validateBodyBounds = function () {
/// <summary>
/// 	刷新连线视图所占的区域
/// </summary>
}


twaver.canvas.NodeUI = function (network, element) {
/// <summary>
/// 	节点对应的视图对象，是其他网元对象（组、网格、多边形和子网等）的基类
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑</param>
/// <param name="element" type="twaver.Node">节点</param>
/// <returns type="twaver.canvas.NodeUI"></returns>
}

twaver.canvas.NodeUI.prototype = new twaver.canvas.ElementUI()

twaver.canvas.NodeUI.prototype.createBodyRect = function () {
/// <summary>
/// 	创建节点内容区域，默认为网元节点的x坐标、y坐标、宽度和高度组成
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.NodeUI.prototype.drawDefaultBody = function (ctx) {
/// <summary>
/// 	用图片填充节点内容区域
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.NodeUI.prototype.drawOuterBorder = function (ctx) {
/// <summary>
/// 	画边框
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.NodeUI.prototype.drawPath = function (ctx, prefix, padding, pattern, points, segments, close) {
/// <summary>
/// 	画路径
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
/// <param name="prefix" type="String">前缀</param>
/// <param name="padding" type="Number">内边距</param>
/// <param name="pattern" type="Array">线条虚线样式</param>
/// <param name="points" type="twaver.List">点集合</param>
/// <param name="segments" type="twaver.List">点与点之间连接类型集合</param>
/// <param name="close" type="Boolean">是否闭合</param>
}

twaver.canvas.NodeUI.prototype.drawSelectBorder = function (ctx) {
/// <summary>
/// 	节点被选中时，画选中边框
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.NodeUI.prototype.drawVectorBody = function (ctx) {
/// <summary>
/// 	当body.type为vector或default.vector时，用矢量图形填充节点内容
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.NodeUI.prototype.getDefaultBodyRect = function () {
/// <summary>
/// 	获取网元视图主体边界
/// </summary>
/// <returns type="Object">返回网元视图主体边界</returns>
}

twaver.canvas.NodeUI.prototype.getOuterBorderRect = function () {
/// <summary>
/// 	获取外边框边界
/// </summary>
/// <returns type="Object">返回外边框边界</returns>
}

twaver.canvas.NodeUI.prototype.getPathRect = function (prefix, padding) {
/// <summary>
/// 	获取路径边界
/// </summary>
/// <param name="prefix" type="String">前缀</param>
/// <param name="padding" type="Number">内边距</param>
/// <returns type="Object">返回路径边界</returns>
}

twaver.canvas.NodeUI.prototype.getSelectBorderRect = function () {
/// <summary>
/// 	获取选中边框边界
/// </summary>
/// <returns type="Object">返回选中边框边界</returns>
}

twaver.canvas.NodeUI.prototype.getVectorBody = function () {
/// <summary>
/// 	获取矢量边界
/// </summary>
/// <returns type="Object">返回矢量边界</returns>
}

twaver.canvas.NodeUI.prototype.validateBodyBounds = function () {
/// <summary>
/// 	重新计算网元主体边界
/// </summary>
}


twaver.controls.ControlBase = function () {
/// <summary>
/// 	组件基类，TWaver所有组件基类
/// </summary>
/// <returns type="twaver.controls.ControlBase"></returns>
}

twaver.controls.ControlBase.prototype = new twaver.PropertyChangeDispatcher()

twaver.controls.ControlBase.prototype.addPool = function (pool) {
/// <summary>
/// 	添加HTML元素缓存池
/// </summary>
/// <param name="pool" type="twaver.Pool">HTML元素缓存池</param>
}

twaver.controls.ControlBase.prototype.adjustBounds = function (rect) {
/// <summary>
/// 	设置组件新的位置以及大小，twaver布局管理器（twaver.controls.SplitPane等）在大小变化时会调用此方法
/// </summary>
/// <param name="rect" type="Object">新的位置以及大小，值为包含x、y、width和height属性的Object对象</param>
}

twaver.controls.ControlBase.prototype.getView = function () {
/// <summary>
/// 	获取组件的HTML元素
/// </summary>
/// <returns type="HTMLDivElement">返回组件的HTML元素</returns>
}

twaver.controls.ControlBase.prototype.invalidate = function (delay) {
/// <summary>
/// 	无效组件，在等待指定毫秒数后，刷新组件（调用validate方法）,当组件属性更改后，须调用此方法，让组件重画
/// </summary>
/// <param name="delay" type="Number">延迟刷新等待的毫秒数，可选，默认为twaver.Defaults.CALL_LATER_DELAY</param>
}

twaver.controls.ControlBase.prototype.removePool = function (pool) {
/// <summary>
/// 	删除HTML元素缓存池
/// </summary>
/// <param name="pool" type="twaver.Pool">HTML元素缓存池</param>
}

twaver.controls.ControlBase.prototype.validate = function () {
/// <summary>
/// 	重画组件，调用invalidate后，此方法会被调用
/// </summary>
}

twaver.controls.ControlBase.prototype.validateImpl = function () {
/// <summary>
/// 	调用validate方法后，此方法会被调用，子类须重载此方法以重画组件
/// </summary>
}


twaver.controls.ListBaseMSTouchInteraction = function (listBase) {
/// <summary>
/// 	列表控件触摸交互处理器
/// </summary>
/// <param name="listBase" type="twaver.controls.ListBase">列表基类</param>
/// <returns type="twaver.controls.ListBaseMSTouchInteraction"></returns>
}

twaver.controls.ListBaseMSTouchInteraction.prototype = new twaver.controls.ListBaseInteraction()

twaver.controls.ListBaseMSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.ListBaseMSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.ListBaseMSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.controls.PropertySheetMSTouchInteraction = function (propertySheet) {
/// <summary>
/// 	属性页触摸交互处理器
/// </summary>
/// <param name="propertySheet" type="twaver.controls.PropertySheet">属性页</param>
/// <returns type="twaver.controls.PropertySheetMSTouchInteraction"></returns>
}

twaver.controls.PropertySheetMSTouchInteraction.prototype = new twaver.controls.PropertySheetInteraction()

twaver.controls.PropertySheetMSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.PropertySheetMSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.controls.PropertySheetMSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.Data = function (id) {
/// <summary>
/// 	构造函数
/// 	
/// 	数据是TWaver中最基本的元素，它是所有网元的基类。它存在于数据容器中，被数据容器所管理。
/// 	数据定义了拓扑元素中最基本的属性，比如ID，Name，Icon，Parent等。
/// 	数据中还定义了事件派发的机制，当数据中的属性发生变化时，就会派发出属性更改的事件
/// </summary>
/// <param name="id" type="Object">ID为数据对象的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是数据的ID，如果为Object类型，可以传入一个带数据属性的对象，比如： var data = new twaver.Data({      image:'tw130',      name:'TWaver Router',      clients:{'ip':'192.168.1.152'} });</param>
/// <returns type="twaver.Data">数据对象本身</returns>
}

twaver.Data.prototype = new twaver.PropertyChangeDispatcher()

twaver.Data.prototype.addChild = function (child, index) {
/// <summary>
/// 	在父亲数据下添加孩子数据，index为添加的孩子数据的顺序号，树中同层下的孩子顺序可以通过这个参数来控制。默认为空，添加在最后一个位置
/// </summary>
/// <param name="child" type="twaver.Data">添加的孩子数据</param>
/// <param name="index" type="Number">添加的孩子数据的顺序，树中的同层下的孩子顺序是通过这个参数来控制的。默认为空，也就是添加在最后一个位置</param>
/// <returns type="Boolean">添加成功返回true，否则为false</returns>
}

twaver.Data.prototype.clearChildren = function () {
/// <summary>
/// 	清除这个数据下所有的孩子。注意，这个方法只是切断它们之间的父子关系，并不会从DataBox中将孩子数据删除
/// </summary>
/// <returns type="Boolean">true为操作成功，false为操作失败</returns>
}

twaver.Data.prototype.deserializeClientJson = function (serializer, json, clientProp) {
/// <summary>
/// 	反序列化JSON数据到数据对象的自定义属性
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据</param>
/// <param name="clientProp" type="String">自定义的属性名</param>
}

twaver.Data.prototype.deserializeClientXml = function (serializer, clientXML, clientProp) {
/// <summary>
/// 	反序列化XML数据到数据对象的自定义属性值
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML的序列化对象</param>
/// <param name="clientXML" type="String">XML数据片段</param>
/// <param name="clientProp" type="String">自定义属性名</param>
}

twaver.Data.prototype.deserializeJson = function (serializer, json) {
/// <summary>
/// 	将JSON数据反序列化为数据对象
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据</param>
}

twaver.Data.prototype.deserializePropertyJson = function (serializer, json, property) {
/// <summary>
/// 	反序列化JSON数据到数据对象的自身属性
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据片段</param>
/// <param name="property" type="String">数据自身属性名</param>
}

twaver.Data.prototype.deserializePropertyXml = function (serializer, propertyXML, property) {
/// <summary>
/// 	反序列化XML数据到数据对象的自身属性
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="propertyXML" type="String">XML数据片段</param>
/// <param name="property" type="String">数据自身属性名</param>
}

twaver.Data.prototype.deserializeXml = function (serializer, xml) {
/// <summary>
/// 	将XML数据反序列化为数据对象
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="xml" type="String">XML数据</param>
}

twaver.Data.prototype.getChildAt = function (index) {
/// <summary>
/// 	获取某个序号值上的孩子对象
/// </summary>
/// <param name="index" type="Number">数据的顺序值</param>
/// <returns type="twaver.Data">孩子数据对象</returns>
}

twaver.Data.prototype.getChildren = function () {
/// <summary>
/// 	获取这个数据对象下的所有孩子对象
/// </summary>
/// <returns type="twaver.List">孩子对象的集合</returns>
}

twaver.Data.prototype.getChildrenSize = function () {
/// <summary>
/// 	获取数据对象下孩子的数量
/// </summary>
/// <returns type="Number">孩子数据的数量</returns>
}

twaver.Data.prototype.getClient = function (clientProp) {
/// <summary>
/// 	获取自定义的属性，Client属性一般用于存放用户自定在数据对象上的属性
/// </summary>
/// <param name="clientProp" type="String">自定义的属性名</param>
/// <returns type="Object">返回属性值</returns>
}

twaver.Data.prototype.getClientProperties = function () {
/// <summary>
/// 	获取所有自定义的属性名。Client属性一般用于存放用户自定在数据对象上的属性
/// </summary>
/// <returns type="twaver.List">自定义属性的集合</returns>
}

twaver.Data.prototype.getIcon = function () {
/// <summary>
/// 	得到这个数据的图标，图标是用于在树上显示的。
/// </summary>
/// <returns type="String">返回图标的名称</returns>
}

twaver.Data.prototype.getId = function () {
/// <summary>
/// 	得到数据的ID，ID是用于唯一标识数据对象的，在同一个数据容器中的数据ID不能重复
/// </summary>
/// <returns type="Object">数据的ID编号</returns>
}

twaver.Data.prototype.getName = function () {
/// <summary>
/// 	获取数据对象的名称
/// </summary>
/// <returns type="String">数据对象的名称值</returns>
}

twaver.Data.prototype.getName2 = function () {
/// <summary>
/// 	获取数据对象的名称2
/// </summary>
/// <returns type="String">返回数据对象的名称2</returns>
}

twaver.Data.prototype.getParent = function () {
/// <summary>
/// 	获取数据对象的父亲，每个数据对象只能有一个父亲节点
/// </summary>
/// <returns type="twaver.Data">父亲对象</returns>
}

twaver.Data.prototype.getToolTip = function () {
/// <summary>
/// 	获取数据对象的悬浮标签，悬浮标签是用于在视图上显示的，比如network，tree，table。悬浮标签在视图上显示片刻便会消失。
/// </summary>
/// <returns type="String">数据对象的悬浮标签内容</returns>
}

twaver.Data.prototype.hasChildren = function () {
/// <summary>
/// 	判断这个数据对象下是否有孩子对象
/// </summary>
/// <returns type="Boolean">true为有孩子对象，否则为false</returns>
}

twaver.Data.prototype.IClient = function () {
/// <field type="Boolean">IClient标志</field>
}

twaver.Data.prototype.IData = function () {
/// <field type="Boolean">IData属性标志，默认为true，表明这个对象是IData的类型。</field>
}

twaver.Data.prototype.isDescendantOf = function (data) {
/// <summary>
/// 	判断是否是指定数据对象的子孙节点
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Boolean">true为子孙节点，否则为false</returns>
}

twaver.Data.prototype.isParentOf = function (data) {
/// <summary>
/// 	判断是否是指定数据对象的父亲
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Boolean">true为指定数据对象的父亲，否则为false</returns>
}

twaver.Data.prototype.isRelatedTo = function (data) {
/// <summary>
/// 	判断是否和指定数据对象有关联关系，如果这个数据是指定数据对象的子孙或者指定数据对象是这个数据的子孙都称为有关联关系
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Boolean">true为有关联关系，否则为false</returns>
}

twaver.Data.prototype.newInstance = function () {
/// <summary>
/// 	实例化数据对象
/// </summary>
/// <returns type="twaver.Data">数据对象</returns>
}

twaver.Data.prototype.onChildAdded = function (child, index) {
/// <summary>
/// 	添加完孩子成功后会回调这个方法
/// </summary>
/// <param name="child" type="twaver.Data">添加的孩子对象</param>
/// <param name="index" type="Number">孩子添加的顺序</param>
}

twaver.Data.prototype.onChildRemoved = function (child, index) {
/// <summary>
/// 	删除指定孩子对象时会回调这个方法
/// </summary>
/// <param name="child" type="twaver.Data">删除的孩子对象</param>
/// <param name="index" type="Number">删除的孩子对象的顺序序号</param>
}

twaver.Data.prototype.onChildrenCleared = function (children) {
/// <summary>
/// 	清除所有指定孩子对象时会回调这个方法
/// </summary>
/// <param name="children" type="twaver.List">清除的孩子对象集合</param>
}

twaver.Data.prototype.onClientChanged = function (clientProp, oldValue, newValue) {
/// <summary>
/// 	当数据对象的Client属性发生更改时会回调此方法
/// </summary>
/// <param name="clientProp" type="String">属性名</param>
/// <param name="oldValue" type="String">原值</param>
/// <param name="newValue" type="String">新值</param>
}

twaver.Data.prototype.onParentChanged = function (oldParent, parent) {
/// <summary>
/// 	当数据对象的父亲发生更改时回调此方法
/// </summary>
/// <param name="oldParent" type="twaver.Data">数据对象原来的父亲节点</param>
/// <param name="parent" type="String">数据对象新的父亲节点</param>
}

twaver.Data.prototype.removeChild = function (child) {
/// <summary>
/// 	删除指定的孩子对象
/// </summary>
/// <param name="child" type="twaver.Data">指定的孩子对象</param>
/// <returns type="Boolean">返回true表示删除成功，false为删除失败</returns>
}

twaver.Data.prototype.serializeClientJson = function (serializer, clientPrope, newInstance, dataObject) {
/// <summary>
/// 	序列化数据元素的自定义属性到JSON片段
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="clientPrope" type="String">数据对象的自定义属性名</param>
/// <param name="newInstance" type="twaver.Data">序列化的数据对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.Data.prototype.serializeClientXml = function (serializer, clientPrope, newInstance) {
/// <summary>
/// 	序列化数据元素的自定义属性到XML片段
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="clientPrope" type="String">自定义的属性名称</param>
/// <param name="newInstance" type="twaver.Data">序列化的实例对象</param>
}

twaver.Data.prototype.serializeJson = function (serializer, newInstance, dataObject) {
/// <summary>
/// 	将数据元素序列化成JSON片段
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="newInstance" type="twaver.Data">序列化的实例对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.Data.prototype.serializePropertyJson = function (serializer, property, newInstance, dataObject) {
/// <summary>
/// 	序列化数据元素属性到JSON片段
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="property" type="String">序列化的属性名称</param>
/// <param name="newInstance" type="twaver.Data">序列化的实例对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.Data.prototype.serializePropertyXml = function (serializer, property, newInstance) {
/// <summary>
/// 	序列化数据元素属性到XML片段
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="property" type="String">数据元素的属性名称</param>
/// <param name="newInstance" type="twaver.Data">序列化的实例对象</param>
}

twaver.Data.prototype.serializeXml = function (serializer, newInstance) {
/// <summary>
/// 	将数据元素序列化成XML片段
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="newInstance" type="twaver.Data">序列化的实例对象</param>
}

twaver.Data.prototype.setClient = function (clientProp, newValue) {
/// <summary>
/// 	设置自定义的属性的值
/// </summary>
/// <param name="clientProp" type="String">自定义属性的名称</param>
/// <param name="newValue" type="Object">自定义属性的值</param>
/// <returns type="twaver.Data">数据对象本身</returns>
}

twaver.Data.prototype.setIcon = function (v) {
/// <summary>
/// 	设置数据元素的Icon。Icon和Image是类似的，但需要注意，Icon一般是在树上显示的，而Image是在network上显示的。
/// </summary>
/// <param name="v" type="String">数据元素的Icon名称</param>
}

twaver.Data.prototype.setName = function (v) {
/// <summary>
/// 	设置数据元素的名称
/// </summary>
/// <param name="v" type="String">数据元素的名称</param>
}

twaver.Data.prototype.setName2 = function (v) {
/// <summary>
/// 	设置数据对象的名称2
/// </summary>
/// <param name="v" type="String">数据对象的名称2</param>
}

twaver.Data.prototype.setParent = function (parent) {
/// <summary>
/// 	设置数据元素的父亲，每个数据元素只能设置一个父亲
/// </summary>
/// <param name="parent" type="twaver.Data">父亲数据元素</param>
}

twaver.Data.prototype.setToolTip = function (v) {
/// <summary>
/// 	设置悬浮标签的显示内容。当鼠标移至数据元素时，视图上就会显示这个悬浮标签一段时间。
/// </summary>
/// <param name="v" type="String">悬浮标签显示的内容</param>
}

twaver.Data.prototype.toChildren = function (matchFunction, scope) {
/// <summary>
/// 	根据指定的函数，将数据元素的孩子转换成List集合
/// </summary>
/// <param name="matchFunction" type="Function">指定的函数</param>
/// <param name="scope" type="String">函数的作用域，为空时指的是window</param>
/// <returns type="String">孩子数据的集合</returns>
}


twaver.DataBox = function (name) {
/// <summary>
/// 	数据容器是用于管理数据对象的。它是一种不可见的对象，在TWaver的MVC框架中处于M（模型）层，它是所有视图的数据提供者，比如network，table，tree，propertySheet等。
/// 	数据容器可以管理数据对象的增减事件变化，也可以监听到数据的属性事件变化。
/// 	数据容器上包含着选择容器，用于管理所有选中的数据
/// </summary>
/// <param name="name" type="String">数据容器的名称</param>
/// <returns type="twaver.DataBox"></returns>
}

twaver.DataBox.prototype = new twaver.PropertyChangeDispatcher()

twaver.DataBox.prototype.add = function (data, index) {
/// <summary>
/// 	往数据容器中添加一个数据
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <param name="index" type="String">添加的数据次序。为空时，就将这个数据添加在最后的位置</param>
}

twaver.DataBox.prototype.addDataBoxChangeListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加数据容器的数据增减变化的监听器。当数据容器中的数据发生改变时（增加，删除，清空），就可以通过此方法监听
/// </summary>
/// <param name="listener" type="Function">网元更改事件的监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
/// <param name="ahead" type="Boolean">是否添加在最前方，如果为空，则添加在最后一个位置</param>
}

twaver.DataBox.prototype.addDataPropertyChangeListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加数据容器中数据的属性更改事件的监听器。当数据容器中的数据属性发生变化时，比如网元位置，网元名称等，都可以通过此方法来监听
/// </summary>
/// <param name="listener" type="Function">网元属性更改事件的监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
/// <param name="ahead" type="Boolean">是否添加在最前方，如果为空，则添加在最后一个位置</param>
}

twaver.DataBox.prototype.addHierarchyChangeListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加数据的层次变化的监听器，当数据层次发生时，比如上移，下移，移至顶部，底部，会派发出层次变化的事件，就可以通过这个方法来监听到
/// </summary>
/// <param name="listener" type="Function">数据的层次变化的监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
/// <param name="ahead" type="Boolean">是否添加在最前方，如果为空，则添加在最后一个位置</param>
}

twaver.DataBox.prototype.clear = function () {
/// <summary>
/// 	清空数据容器中所有的数据
/// </summary>
}

twaver.DataBox.prototype.contains = function (data) {
/// <summary>
/// 	判断是否包含某个数据
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <returns type="Boolean">true为包含，false不包含</returns>
}

twaver.DataBox.prototype.containsById = function (id) {
/// <summary>
/// 	通过数据ID判断是否包含某个数据
/// </summary>
/// <param name="id" type="Object">数据的ID编号</param>
/// <returns type="Boolean">true为包含，false不包含</returns>
}

twaver.DataBox.prototype.deserializeClientJson = function (serializer, json, clientProp) {
/// <summary>
/// 	反序列化JSON数据到数据容器的Client属性
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据片段</param>
/// <param name="clientProp" type="String">Client属性名</param>
}

twaver.DataBox.prototype.deserializeClientXml = function (serializer, clientXML, clientProp) {
/// <summary>
/// 	反序列化XML数据到数据容器的Client属性
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="clientXML" type="String">XML数据片段</param>
/// <param name="clientProp" type="String">Client属性名</param>
}

twaver.DataBox.prototype.deserializeJson = function (serializer, json) {
/// <summary>
/// 	反序列化JSON数据到数据容器，包含数据容器的Client属性，Property属性。
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据</param>
}

twaver.DataBox.prototype.deserializePropertyJson = function (serializer, json, property) {
/// <summary>
/// 	反序列化JSON数据到数据容器的自身（property）属性
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据</param>
/// <param name="property" type="String">数据容器的属性名称</param>
}

twaver.DataBox.prototype.deserializePropertyXml = function (serializer, propertyXML, property) {
/// <summary>
/// 	反序列化XML数据到数据容器的自身（property）属性
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="propertyXML" type="String">XML数据</param>
/// <param name="property" type="String">数据容器的属性名称</param>
}

twaver.DataBox.prototype.deserializeXml = function (serializer, xml) {
/// <summary>
/// 	反序列化XML数据到数据容器，包含数据容器的Client数据，Property属性
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="xml" type="String">XML数据</param>
}

twaver.DataBox.prototype.forEach = function (f, scope) {
/// <summary>
/// 	遍历数据容器中的所有数据
/// </summary>
/// <param name="f" type="Function">回调函数</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时指的是window</param>
}

twaver.DataBox.prototype.forEachByBreadthFirst = function (callbackFunction, data, scope) {
/// <summary>
/// 	广度优先遍历数据容器中指定数据的所有子孙数据。如果指定数据为空时，就会遍历数据容器中的所有数据
/// </summary>
/// <param name="callbackFunction" type="Function">回调函数</param>
/// <param name="data" type="twaver.Data">遍历的数据对象，为空时会遍历数据容器中的所有数据</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时指的是window</param>
}

twaver.DataBox.prototype.forEachByDepthFirst = function (callbackFunction, data, scope) {
/// <summary>
/// 	深度优先遍历数据容器中指定数据的所有子孙数据。如果指定数据为空时，就会遍历数据容器中的所有数据
/// </summary>
/// <param name="callbackFunction" type="Function">回调函数</param>
/// <param name="data" type="twaver.Data">遍历的数据对象，为空时会遍历数据容器中的所有数据</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时指的是window</param>
}

twaver.DataBox.prototype.forEachReverse = function (f, scope) {
/// <summary>
/// 	反序遍历数据容器中所有数据
/// </summary>
/// <param name="f" type="Function">回调函数</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时指的是window</param>
}

twaver.DataBox.prototype.getClient = function (clientProp) {
/// <summary>
/// 	根据Client属性名，获取对应的属性值。
/// 	Client属性是用于存放用户自定义的属性
/// </summary>
/// <param name="clientProp" type="String">Client属性名称</param>
/// <returns type="Object">Client属性值</returns>
}

twaver.DataBox.prototype.getClientProperties = function () {
/// <summary>
/// 	获取数据容器中所有的Client属性名。
/// 	Client属性是用于存放用户自定义的属性
/// </summary>
/// <returns type="twaver.List">所有的Client属性名的集合</returns>
}

twaver.DataBox.prototype.getDataAt = function (index) {
/// <summary>
/// 	获取数据容器中某个序号上的数据
/// </summary>
/// <param name="index" type="Number">数据的序号</param>
/// <returns type="twaver.Data">数据对象</returns>
}

twaver.DataBox.prototype.getDataById = function (id) {
/// <summary>
/// 	根据数据的ID编号获取对应的数据
/// </summary>
/// <param name="id" type="Object">数据的ID编号</param>
/// <returns type="twaver.Data">数据对象</returns>
}

twaver.DataBox.prototype.getDatas = function () {
/// <summary>
/// 	获取数据容器中的所有数据
/// </summary>
/// <returns type="twaver.List">所有数据的集合</returns>
}

twaver.DataBox.prototype.getIcon = function () {
/// <summary>
/// 	获取数据容器的图标，图标一般是用于在树上显示的
/// </summary>
/// <returns type="String">图标名称</returns>
}

twaver.DataBox.prototype.getLimit = function () {
/// <summary>
/// 	获取数据容器的上限数。默认为-1，是没有上限的，一旦设置了上限数，当添加的数据数量大于这个上限数时，TWaver就会删除最旧的数据
/// </summary>
/// <returns type="Number">数据容器的上限数</returns>
}

twaver.DataBox.prototype.getName = function () {
/// <summary>
/// 	获取数据容器的名称
/// </summary>
/// <returns type="String">数据容器的名称</returns>
}

twaver.DataBox.prototype.getRoots = function () {
/// <summary>
/// 	获取数据容器中所有根下的数据。根下的数据指的是没有父亲的数据
/// </summary>
/// <returns type="twaver.List">所有根下数据的集合</returns>
}

twaver.DataBox.prototype.getSelectionModel = function () {
/// <summary>
/// 	获取数据容器中的选择容器。选择容器用于存放所有选中的数据对象，更详细的解释请参看SelectionModel类
/// </summary>
/// <returns type="twaver.SelectionModel">选中数据的容器</returns>
}

twaver.DataBox.prototype.getSiblingIndex = function (data) {
/// <summary>
/// 	获取指定数据在兄弟数据中的序号
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <returns type="Number">数据对象的序号</returns>
}

twaver.DataBox.prototype.getSiblings = function (data) {
/// <summary>
/// 	获取指定数据的所有兄弟数据
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="twaver.List">所有兄弟数据的集合</returns>
}

twaver.DataBox.prototype.getToolTip = function () {
/// <summary>
/// 	获取数据容器提示信息的内容，提示信息是在视图上显示的，当鼠标停留在数据容器上一段时间后，提示信息就消失
/// </summary>
/// <returns type="String">提示信息中显示的内容</returns>
}

twaver.DataBox.prototype.handleDataPropertyChange = function (e) {
/// <summary>
/// 	处理数据容器中数据的属性更改的函数。TWaver内部使用
/// </summary>
/// <param name="e" type="Object">属性更改的事件对象，包含所有更改的信息</param>
}

twaver.DataBox.prototype.IClient = function () {
/// <field type="Boolean">是否是IClient的标识</field>
}

twaver.DataBox.prototype.isEmpty = function () {
/// <summary>
/// 	判断数据容器是否为空。当数据容器中没有数据时返回true，否则返回false
/// </summary>
/// <returns type="String">当数据容器中没有数据时返回true，否则返回false</returns>
}

twaver.DataBox.prototype.moveDown = function (data) {
/// <summary>
/// 	将某个数据下移一个序号。一般数据容器和树或表格绑定时使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
}

twaver.DataBox.prototype.moveSelectionDown = function (sm) {
/// <summary>
/// 	将选中的网元下移一个位置。一般在树和表格中使用
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变。
/// </summary>
/// <param name="sm" type="twaver.SelectionModel">选择容器。如果为空，则使用的是DataBox中的SelectionModel</param>
}

twaver.DataBox.prototype.moveSelectionToBottom = function (sm) {
/// <summary>
/// 	将选中的网元下移至最底部。一般在树和表格中使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变。
/// </summary>
/// <param name="sm" type="twaver.SelectionModel">选择容器。如果为空，则使用的是DataBox中的SelectionModel</param>
}

twaver.DataBox.prototype.moveSelectionToTop = function (sm) {
/// <summary>
/// 	将选中的网元上移至最顶部。一般在树和表格中使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
/// </summary>
/// <param name="sm" type="twaver.SelectionModel">选择容器。如果为空，则使用的是DataBox中的SelectionModel</param>
}

twaver.DataBox.prototype.moveSelectionUp = function (sm) {
/// <summary>
/// 	将选中的网元上移一个位置。一般在树和表格中使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
/// </summary>
/// <param name="sm" type="twaver.SelectionModel">选中网元的容器。如果为空，则使用的是DataBox中的SelectionModel</param>
}

twaver.DataBox.prototype.moveTo = function (data, newIndex) {
/// <summary>
/// 	将指定数据移到指定的序号上。一般在绑定的数据容器的树或表格中使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
/// <param name="newIndex" type="Number">数据的序号</param>
}

twaver.DataBox.prototype.moveToBottom = function (data) {
/// <summary>
/// 	将某个数据移至最下方。一般数据容器和树或表格绑定时使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
}

twaver.DataBox.prototype.moveToTop = function (data) {
/// <summary>
/// 	将某个数据移至最上方。一般数据容器和树或表格绑定时使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变。
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
}

twaver.DataBox.prototype.moveUp = function (data) {
/// <summary>
/// 	将某个数据上移一个序号。一般数据容器和树或表格绑定时使用。
/// 	注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
/// </summary>
/// <param name="data" type="twaver.Data">数据对象</param>
}

twaver.DataBox.prototype.newInstance = function () {
/// <summary>
/// 	通过类名来实例化数据容器的对象。传入的参数是不固定的，可以是1-7个参数
/// </summary>
/// <returns type="twaver.DataBox">数据容器对象</returns>
}

twaver.DataBox.prototype.onClientChanged = function (clientProp, oldValue, newValue) {
/// <summary>
/// 	当数据容器的Client属性发生变化时，回调此方法。默认的方法没有任何实现体，子类可以重写这个方法去处理自己的业务
/// </summary>
/// <param name="clientProp" type="String">更改的Client属性名称</param>
/// <param name="oldValue" type="String">Client属性的原值</param>
/// <param name="newValue" type="String">Client属性的新值</param>
}

twaver.DataBox.prototype.onDataPropertyChanged = function (data, e) {
/// <summary>
/// 	当数据容器中数据的属性发生变化时，回调此方法。默认的方法没有任何实现体，子类可以重写这个方法去处理自己的业务
/// </summary>
/// <param name="data" type="twaver.Data">更改属性的数据对象</param>
/// <param name="e" type="Object">属性更改的事件对象，包含所有更改的信息</param>
}

twaver.DataBox.prototype.remove = function (data) {
/// <summary>
/// 	从数据容器中删除某个数据
/// </summary>
/// <param name="data" type="twaver.Data">删除的数据对象</param>
}

twaver.DataBox.prototype.removeById = function (id) {
/// <summary>
/// 	通过数据的ID编号从数据容器中删除该数据
/// </summary>
/// <param name="id" type="Object">数据对象的编号</param>
}

twaver.DataBox.prototype.removeDataBoxChangeListener = function (listener, scope) {
/// <summary>
/// 	移除数据容器的数据增减变化的监听器
/// </summary>
/// <param name="listener" type="Function">网元更改事件监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
}

twaver.DataBox.prototype.removeDataPropertyChangeListener = function (listener, scope) {
/// <summary>
/// 	移除数据容器中数据的属性更改事件的监听器
/// </summary>
/// <param name="listener" type="Function">网元属性更改事件的监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
}

twaver.DataBox.prototype.removeFirst = function (count) {
/// <summary>
/// 	从数据容器中删除第一个数据
/// </summary>
/// <param name="count" type="Number">数据容器的大小</param>
}

twaver.DataBox.prototype.removeHierarchyChangeListener = function (listener, scope) {
/// <summary>
/// 	移除数据的层次变化的监听器
/// </summary>
/// <param name="listener" type="Function">数据的层次变化的监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
}

twaver.DataBox.prototype.removeSelection = function () {
/// <summary>
/// 	删除所有选中的数据
/// </summary>
}

twaver.DataBox.prototype.serializeClientJson = function (serializer, clientPrope, newInstance, dataObject) {
/// <summary>
/// 	序列化数据容器的Client属性到JSON数据
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="clientPrope" type="String">Client属性名</param>
/// <param name="newInstance" type="twaver.DataBox">序列化的实例对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.DataBox.prototype.serializeClientXml = function (serializer, clientPrope, newInstance) {
/// <summary>
/// 	序列化数据容器的Client属性到XML数据
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="clientPrope" type="String">Client属性名</param>
/// <param name="newInstance" type="twaver.DataBox">序列化的实例对象</param>
}

twaver.DataBox.prototype.serializeJson = function (serializer, newInstance, dataObject) {
/// <summary>
/// 	序列化数据容器到JSON数据，包含数据容器的Client数据，Property属性
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="newInstance" type="twaver.DataBox">序列化的实例对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.DataBox.prototype.serializePropertyJson = function (serializer, property, newInstance, dataObject) {
/// <summary>
/// 	序列化数据容器的自身（property）属性到JSON数据
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="property" type="String">数据容器的属性名称</param>
/// <param name="newInstance" type="twaver.DataBox">数据容器实例对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.DataBox.prototype.serializePropertyXml = function (serializer, property, newInstance) {
/// <summary>
/// 	序列化数据容器的自身（property）属性到XML数据
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="property" type="String">数据容器的属性名称</param>
/// <param name="newInstance" type="twaver.DataBox">数据容器的实例对象</param>
}

twaver.DataBox.prototype.serializeXml = function (serializer, newInstance) {
/// <summary>
/// 	序列化数据容器到XML数据，包含数据容器的Client数据，Property属性
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="newInstance" type="Object">数据容器的实例对象</param>
}

twaver.DataBox.prototype.setClient = function (clientProp, newValue) {
/// <summary>
/// 	设置指定的client属性对应的属性值。
/// 	client属性是用于存放用户自定义的属性
/// </summary>
/// <param name="clientProp" type="String">Client属性名称</param>
/// <param name="newValue" type="String">Client属性的值</param>
/// <returns type="twaver.DataBox">数据容器对象本身</returns>
}

twaver.DataBox.prototype.setIcon = function (v) {
/// <summary>
/// 	设置数据容器的图标，图标一般是用在树上显示的
/// </summary>
/// <param name="v" type="String">图标名称</param>
}

twaver.DataBox.prototype.setLimit = function (limit) {
/// <summary>
/// 	设置数据容器的上限数。默认为-1，是没有显示的，一旦设置了上限数，当添加的数据数量大于这个上限数时，TWaver就会删除最旧的数据
/// </summary>
/// <param name="limit" type="Number">数据容器的上限数</param>
}

twaver.DataBox.prototype.setName = function (v) {
/// <summary>
/// 	设置数据容器的名称
/// </summary>
/// <param name="v" type="String">数据容器的名称</param>
}

twaver.DataBox.prototype.setToolTip = function (v) {
/// <summary>
/// 	设置数据容器的提示信息的内容，提示信息是在视图上显示的，当鼠标停留在数据容器上一段时间后，提示信息就消失
/// </summary>
/// <param name="v" type="String">提示信息中显示的内容</param>
}

twaver.DataBox.prototype.size = function () {
/// <summary>
/// 	数据容器的大小，也就是容器中数据的数量
/// </summary>
/// <returns type="Number">数据容器的大小</returns>
}

twaver.DataBox.prototype.toDatas = function (matchFunction, scope) {
/// <summary>
/// 	将数据容器中的数据转成集合
/// </summary>
/// <param name="matchFunction" type="Function">转换成List集合时回调函数</param>
/// <param name="scope" type="String">回调函数的作用域，为空时指的是window</param>
/// <returns type="twaver.List">数据集合</returns>
}


twaver.layout.CloudLayouter = function (network) {
/// <summary>
/// 	对指定拓扑进行旋转木马布局，鼠标移动时，网元按鼠标方向旋转移动
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.layout.CloudLayouter"></returns>
}

twaver.layout.CloudLayouter.prototype = new twaver.PropertyChangeDispatcher()

twaver.layout.CloudLayouter.prototype.centerNode = function (node) {
/// <summary>
/// 	将给定节点居中显示
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
}

twaver.layout.CloudLayouter.prototype.createControlPoint = function (node) {
/// <summary>
/// 	创建指定节点的控制点
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <returns type="Object">返回包含x和y属性的Object对象</returns>
}

twaver.layout.CloudLayouter.prototype.getCeaseLimit = function () {
/// <summary>
/// 	获取停止阀值，当转动速度低于最小值时，布局停止转动，默认值为0.01
/// </summary>
/// <returns type="Number">返回停止阀值</returns>
}

twaver.layout.CloudLayouter.prototype.getCeaseRate = function () {
/// <summary>
/// 	获取停止速度，布局以此速率停止转动，默认值为0.9
/// </summary>
/// <returns type="Number">返回停止速度</returns>
}

twaver.layout.CloudLayouter.prototype.getCount = function () {
/// <summary>
/// 	获取参与布局的节点数
/// </summary>
/// <returns type="Number">返回参与布局的节点数</returns>
}

twaver.layout.CloudLayouter.prototype.getInterval = function () {
/// <summary>
/// 	获取布局时间间隔，单位为毫秒，默认值为50毫秒
/// </summary>
/// <returns type="Number">返回布局时间间隔，单位为毫秒</returns>
}

twaver.layout.CloudLayouter.prototype.getLayoutRect = function () {
/// <summary>
/// 	获取布局区域
/// </summary>
/// <returns type="Object">返回布局区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.layout.CloudLayouter.prototype.getMouseMoveFunction = function () {
/// <summary>
/// 	获取鼠标移动处理方法，默认值为null
/// </summary>
/// <returns type="Function">返回鼠标移动处理方法</returns>
}

twaver.layout.CloudLayouter.prototype.getMouseOverFunction = function () {
/// <summary>
/// 	获取鼠标移出处理方法，默认值为null
/// </summary>
/// <returns type="Function">返回鼠标移出处理方法</returns>
}

twaver.layout.CloudLayouter.prototype.getMoveSpeed = function () {
/// <summary>
/// 	获取转动速率，默认值为2
/// </summary>
/// <returns type="Number">返回转动速率</returns>
}

twaver.layout.CloudLayouter.prototype.getNetwork = function () {
/// <summary>
/// 	获取关联的拓扑对象
/// </summary>
/// <returns type="twaver.network.Network">返回关联的拓扑对象</returns>
}

twaver.layout.CloudLayouter.prototype.getPercentPadding = function () {
/// <summary>
/// 	获取边界间隙大小比例，默认值为0.2
/// </summary>
/// <returns type="Number">返回边界间隙大小比例</returns>
}

twaver.layout.CloudLayouter.prototype.getUpdateNodeFunction = function () {
/// <summary>
/// 	获取更新节点函数，默认值为null
/// </summary>
/// <returns type="Function">返回更新节点函数</returns>
}

twaver.layout.CloudLayouter.prototype.handleDataBoxChange = function (e) {
/// <summary>
/// 	处理拓扑网元容器变化事件
/// </summary>
/// <param name="e" type="Object">拓扑网元容器变化事件</param>
}

twaver.layout.CloudLayouter.prototype.handleMouseMove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.layout.CloudLayouter.prototype.handleMouseOver = function (e) {
/// <summary>
/// 	处理鼠标进入事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.layout.CloudLayouter.prototype.handleNetworkPropertyChange = function (e) {
/// <summary>
/// 	处理拓扑属性变化事件
/// </summary>
/// <param name="e" type="Object">属性变化事件</param>
}

twaver.layout.CloudLayouter.prototype.handleResize = function (e) {
/// <summary>
/// 	处理拓扑大小变化事件
/// </summary>
/// <param name="e" type="Object">拓扑视图刷新事件</param>
}

twaver.layout.CloudLayouter.prototype.handleRollOut = function (e) {
/// <summary>
/// 	处理鼠标移出事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.layout.CloudLayouter.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	选中变化处理函数，默认调用centerNode方法将最后选中的网元居中显示
/// </summary>
/// <param name="e" type="Object">选中变化事件</param>
}

twaver.layout.CloudLayouter.prototype.isActive = function () {
/// <summary>
/// 	获取布局是否处于激活状态
/// </summary>
/// <returns type="Boolean">是否为激活状态</returns>
}

twaver.layout.CloudLayouter.prototype.isAtCenter = function (node, perspective, cx, cy, cz) {
/// <summary>
/// 	判断节点是否在中心位置
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <param name="perspective" type="Number">立体透视度</param>
/// <param name="cx" type="Number">x坐标</param>
/// <param name="cy" type="Number">y坐标</param>
/// <param name="cz" type="Number">z坐标</param>
/// <returns type="Boolean">如果节点居中，则返回true，否则返回false</returns>
}

twaver.layout.CloudLayouter.prototype.isElliptical = function () {
/// <summary>
/// 	获取是否以椭圆方式布局，默认值为true
/// </summary>
/// <returns type="Boolean">返回是否以椭圆方式布局</returns>
}

twaver.layout.CloudLayouter.prototype.isLayoutable = function (node) {
/// <summary>
/// 	判断节点是否可以参与布局，不可见和不可移动的节点不参与布局
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <returns type="String">如果节点可以参与布局，则返回true，否则返回false</returns>
}

twaver.layout.CloudLayouter.prototype.isReloadOnDataBoxChanged = function () {
/// <summary>
/// 	获取网元容器变化后，是否重新加载网元，默认值为true
/// </summary>
/// <returns type="Boolean">返回网元容器变化后，是否重新加载网元</returns>
}

twaver.layout.CloudLayouter.prototype.isRunning = function () {
/// <summary>
/// 	判断布局是否正在进行中
/// </summary>
/// <returns type="Boolean">如果正在布局，则返回true，否则返回false</returns>
}

twaver.layout.CloudLayouter.prototype.isUpdateLayoutRectOnResized = function () {
/// <summary>
/// 	获取拓扑大小变化后，是否重新布局，默认值为true
/// </summary>
/// <returns type="Boolean">返回拓扑大小变化后，是否重新布局</returns>
}

twaver.layout.CloudLayouter.prototype.reload = function () {
/// <summary>
/// 	拓扑网元容器中网元变化后，重新加载网元
/// </summary>
}

twaver.layout.CloudLayouter.prototype.setActive = function (v) {
/// <summary>
/// 	设置布局是否处于激活状态，鼠标移动会让布局处于激活状态
/// </summary>
/// <param name="v" type="Boolean">是否为激活状态</param>
}

twaver.layout.CloudLayouter.prototype.setCeaseLimit = function (v) {
/// <summary>
/// 	设置停止阀值，当转动速度低于阀值时，布局停止转动，默认值为0.01
/// </summary>
/// <param name="v" type="Number">停止阀值</param>
}

twaver.layout.CloudLayouter.prototype.setCeaseRate = function (v) {
/// <summary>
/// 	设置停止速度，布局以此速率停止转动，默认值为0.9
/// </summary>
/// <param name="v" type="Number">设置停止速度</param>
}

twaver.layout.CloudLayouter.prototype.setElliptical = function (v) {
/// <summary>
/// 	设置是否以椭圆方式布局，默认值为true
/// </summary>
/// <param name="v" type="Boolean">是否以椭圆方式布局</param>
}

twaver.layout.CloudLayouter.prototype.setInterval = function (interval) {
/// <summary>
/// 	设置布局时间间隔，单位为毫秒，默认值为50毫秒
/// </summary>
/// <param name="interval" type="Number">布局时间间隔，单位为毫秒</param>
}

twaver.layout.CloudLayouter.prototype.setMouseMoveFunction = function (v) {
/// <summary>
/// 	设置鼠标移动处理方法，默认值为null
/// </summary>
/// <param name="v" type="Function">鼠标移动处理方法</param>
}

twaver.layout.CloudLayouter.prototype.setMouseOverFunction = function (v) {
/// <summary>
/// 	设置鼠标移出处理方法，默认值为null
/// </summary>
/// <param name="v" type="Function">鼠标移出处理方法</param>
}

twaver.layout.CloudLayouter.prototype.setMoveSpeed = function (v) {
/// <summary>
/// 	设置转动速率，默认值为2
/// </summary>
/// <param name="v" type="Number">转动速率</param>
}

twaver.layout.CloudLayouter.prototype.setPercentPadding = function (v) {
/// <summary>
/// 	设置边界间隙大小比例，默认值为0.2
/// </summary>
/// <param name="v" type="Number">边界间隙大小比例</param>
}

twaver.layout.CloudLayouter.prototype.setReloadOnDataBoxChanged = function (v) {
/// <summary>
/// 	设置网元容器变化后，是否重新加载网元，默认值为true
/// </summary>
/// <param name="v" type="Boolean">网元容器变化后，是否重新加载网元</param>
}

twaver.layout.CloudLayouter.prototype.setUpdateLayoutRectOnResized = function (v) {
/// <summary>
/// 	设置拓扑大小变化后，是否重新布局，默认值为true
/// </summary>
/// <param name="v" type="Boolean">拓扑大小变化后，是否重新布局</param>
}

twaver.layout.CloudLayouter.prototype.setUpdateNodeFunction = function (v) {
/// <summary>
/// 	设置更新节点函数，默认值为null
/// </summary>
/// <param name="v" type="Function">更新节点函数</param>
}

twaver.layout.CloudLayouter.prototype.start = function (needToReset) {
/// <summary>
/// 	开始布局
/// </summary>
/// <param name="needToReset" type="Boolean">是否重置布局</param>
}

twaver.layout.CloudLayouter.prototype.stop = function () {
/// <summary>
/// 	停止布局
/// </summary>
}

twaver.layout.CloudLayouter.prototype.updateLayoutRect = function (needToReload) {
/// <summary>
/// 	更新布局区域
/// </summary>
/// <param name="needToReload" type="Boolean">是否重新加载</param>
}

twaver.layout.CloudLayouter.prototype.updateNode = function (node, zIndex, count, alpha) {
/// <summary>
/// 	更新网元节点
/// </summary>
/// <param name="node" type="twaver.Node">网元节点</param>
/// <param name="zIndex" type="Number">z轴索引</param>
/// <param name="count" type="Number">网元数量</param>
/// <param name="alpha" type="Number">透明度</param>
}


twaver.network.BasicAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	告警附件和标签附件等的基类，用于显示文本附件信息
/// </summary>
/// <param name="elementUI" type="twaver.network.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在附件层，可选，默认为false</param>
/// <returns type="twaver.network.BasicAttachment"></returns>
}

twaver.network.BasicAttachment.prototype = new twaver.network.Attachment()

twaver.network.BasicAttachment.prototype.calculateMeasure = function () {
/// <summary>
/// 	调用updateMeasure时，会调用此方法，用于重新计算contentRect和roundRect
/// </summary>
}

twaver.network.BasicAttachment.prototype.getCap = function () {
/// <summary>
/// 	获取附件画线时, 线条两端的样式, 默认值为twaver.Defaults.ATTACHMENT_CAP(butt), 可选值为butt(无端点)，round(圆头端点)或 square(方头端点)
/// </summary>
/// <returns type="String">返回画线时, 线条两端的样式</returns>
}

twaver.network.BasicAttachment.prototype.getContent = function () {
/// <summary>
/// 	获取附件内容
/// </summary>
/// <returns type="HTMLElement">返回附件内容</returns>
}

twaver.network.BasicAttachment.prototype.getContentHeight = function () {
/// <summary>
/// 	获取附件内容高度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（20）
/// </summary>
/// <returns type="Number">返回附件内容高度</returns>
}

twaver.network.BasicAttachment.prototype.getContentRect = function () {
/// <summary>
/// 	获取附件内容区域
/// </summary>
/// <returns type="Object">返回附件内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.BasicAttachment.prototype.getContentWidth = function () {
/// <summary>
/// 	获取附件内容宽度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（30）
/// </summary>
/// <returns type="Number">返回附件内容宽度</returns>
}

twaver.network.BasicAttachment.prototype.getCornerRadius = function () {
/// <summary>
/// 	获取附件圆角半径，默认值为twaver.Defaults.ATTACHMENT_CORNER_RADIUS（5）
/// </summary>
/// <returns type="Number">返回附件圆角半径</returns>
}

twaver.network.BasicAttachment.prototype.getDirection = function () {
/// <summary>
/// 	获取附件箭头的显示方位，一般用于告警冒泡，默认值为twaver.Defaults.ATTACHMENT_DIRECTION（right），可选值为：
/// 	aboveleft 附件箭头在上左角
/// 	aboveright 附件箭头在上右角
/// 	belowleft 附件箭头在下左角
/// 	belowright 附件箭头在下右角
/// 	leftabove 附件箭头在左上角
/// 	leftbelow 附件箭头在左下角
/// 	rightabove 附件箭头右右上角
/// 	rightbelow 附件箭头在右下角
/// 	above 附件箭头在上边
/// 	below 附件箭头在下边
/// 	left 附件箭头在左边
/// 	right 附件箭头在右边
/// </summary>
/// <returns type="String">返回附件箭头的显示方位</returns>
}

twaver.network.BasicAttachment.prototype.getFillColor = function () {
/// <summary>
/// 	获取附件填充颜色，默认值为twaver.Defaults.ATTACHMENT_FILL_COLOR（#000000）
/// </summary>
/// <returns type="String">返回附件填充颜色</returns>
}

twaver.network.BasicAttachment.prototype.getGradient = function () {
/// <summary>
/// 	获取附件渐进色填充样式，默认值为twaver.Defaults.ATTACHMENT_GRADIENT（null），null表示不使用填充渐进色，可选值为：
/// 	linear.east, linear.north, linear.northeast, linear.northwest, linear.south, linear.southeast, linear.southwest, linear.west, none, radial.center, radial.east, radial.north, radial.northeast, radial.northwest, radial.south, radial.southeast, radial.southwest, radial.west, spread.antidiagonal, spread.diagonal, spread.east, spread.horizontal, spread.north, spread.south, spread.vertical, spread.west
/// </summary>
/// <returns type="String">返回附件渐进色填充样式</returns>
}

twaver.network.BasicAttachment.prototype.getGradientColor = function () {
/// <summary>
/// 	获取附件填充渐进色，默认值为twaver.Defaults.ATTACHMENT_GRADIENT_COLOR（#FFFFFF）
/// </summary>
/// <returns type="String">返回附件填充渐进色</returns>
}

twaver.network.BasicAttachment.prototype.getJoin = function () {
/// <summary>
/// 	获取附件画线时，线条连接点样式，默认值为twaver.Defaults.ATTACHMENT_JOIN（miter），可选值为bevel（斜角连接）round（圆角连接）和miter（尖角连接）
/// </summary>
/// <returns type="String">返回附件画线时，线条连接点样式</returns>
}

twaver.network.BasicAttachment.prototype.getOutlineColor = function () {
/// <summary>
/// 	获取附件边框颜色，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_COLOR（#000000）
/// </summary>
/// <returns type="String">返回附件边框颜色</returns>
}

twaver.network.BasicAttachment.prototype.getOutlineWidth = function () {
/// <summary>
/// 	获取附件边框宽度，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH（-1），-1代表无边框
/// </summary>
/// <returns type="Number">返回附件边框宽度</returns>
}

twaver.network.BasicAttachment.prototype.getPadding = function () {
/// <summary>
/// 	获取附件内容和边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING（0）
/// </summary>
/// <returns type="Number">返回附件内容和边界之间的间距</returns>
}

twaver.network.BasicAttachment.prototype.getPaddingBottom = function () {
/// <summary>
/// 	获取附件内容和下边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_BOTTOM（0）
/// </summary>
/// <returns type="Number">返回附件内容和下边界之间的间距</returns>
}

twaver.network.BasicAttachment.prototype.getPaddingLeft = function () {
/// <summary>
/// 	获取附件内容和左边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_LEFT（0）
/// </summary>
/// <returns type="Number">返回附件内容和左边界之间的间距</returns>
}

twaver.network.BasicAttachment.prototype.getPaddingRight = function () {
/// <summary>
/// 	获取附件内容和右边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_RIGHT（0）
/// </summary>
/// <returns type="Number">附件内容和右边界之间的间距</returns>
}

twaver.network.BasicAttachment.prototype.getPaddingTop = function () {
/// <summary>
/// 	获取附件内容和上边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_TOP（0）
/// </summary>
/// <returns type="Number">返回附件内容和上边界之间的间距</returns>
}

twaver.network.BasicAttachment.prototype.getPointerLength = function () {
/// <summary>
/// 	获取附件箭头长度，默认值为twaver.Defaults.ATTACHMENT_POINTER_LENGTH（10）
/// </summary>
/// <returns type="Number">返回附件箭头长度</returns>
}

twaver.network.BasicAttachment.prototype.getPointerWidth = function () {
/// <summary>
/// 	获取附件箭头宽度，默认值为ATTACHMENT_POINTER_WIDTH（8）
/// </summary>
/// <returns type="Number">返回附件箭头宽度</returns>
}

twaver.network.BasicAttachment.prototype.getPosition = function () {
/// <summary>
/// 	获取附件位置，默认值为twaver.Defaults.ATTACHMENT_POSITION（topright.topright）
/// 	可选值为
/// 	hotspot
/// 	from
/// 	to
/// 	topleft.topleft
/// 	topleft.topright
/// 	top.top
/// 	topright.topleft
/// 	topright.topright
/// 	topleft
/// 	top
/// 	topright
/// 	topleft.bottomleft
/// 	topleft.bottomright
/// 	top.bottom
/// 	topright.bottomleft
/// 	topright.bottomright
/// 	left.left
/// 	left
/// 	left.right
/// 	center
/// 	right.left
/// 	right
/// 	right.right
/// 	bottomleft.topleft
/// 	bottomleft.topright
/// 	bottom.top
/// 	bottomright.topleft
/// 	bottomright.topright
/// 	bottomleft
/// 	bottom
/// 	bottomright
/// 	bottomleft.bottomleft
/// 	bottomleft.bottomright
/// 	bottom.bottom
/// 	bottomright.bottomleft
/// 	bottomright.bottomright
/// </summary>
/// <returns type="String">返回附件位置</returns>
}

twaver.network.BasicAttachment.prototype.getRoundRect = function () {
/// <summary>
/// 	获取附件圆角区域
/// </summary>
/// <returns type="Object">返回附件圆角区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.BasicAttachment.prototype.getXOffset = function () {
/// <summary>
/// 	获取附件x轴偏移量，默认值为twaver.Defaults.ATTACHMENT_XOFFSET（0）
/// </summary>
/// <returns type="Number">返回附件x轴偏移量</returns>
}

twaver.network.BasicAttachment.prototype.getYOffset = function () {
/// <summary>
/// 	获取附件y轴偏移量，默认值为twaver.Defaults.ATTACHMENT_YOFFSET（0）
/// </summary>
/// <returns type="Number">返回附件y轴偏移量</returns>
}

twaver.network.BasicAttachment.prototype.isFill = function () {
/// <summary>
/// 	获取附件是否填充背景，默认值为twaver.Defaults.ATTACHMENT_FILL（false）
/// </summary>
/// <returns type="Number">返回附件是否填充背景</returns>
}

twaver.network.BasicAttachment.prototype.isShadowable = function () {
/// <summary>
/// 	获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE（false）
/// </summary>
/// <returns type="Boolean">返回附件选中时是否有阴影效果</returns>
}

twaver.network.BasicAttachment.prototype.setContent = function (value) {
/// <summary>
/// 	设置附件内容
/// </summary>
/// <param name="value" type="HTMLElement">附件内容</param>
}


twaver.network.EditAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	编辑附件，用于显示网元是否可编辑。对于可编辑的节点，节点周围显示8个可以改变网元大小的小方块；对于多边形和折线，每个可移动点显示为黄色的小圆球
/// </summary>
/// <param name="elementUI" type="twaver.network.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在附件层，可选，默认为false</param>
/// <returns type="twaver.network.EditAttachment"></returns>
}

twaver.network.EditAttachment.prototype = new twaver.network.Attachment()


twaver.network.IconsAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	图标组附件，用于显示一组图标
/// </summary>
/// <param name="elementUI" type="twaver.network.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在附件层，可选，默认为false</param>
/// <returns type="twaver.network.IconsAttachment"></returns>
}

twaver.network.IconsAttachment.prototype = new twaver.network.Attachment()

twaver.network.IconsAttachment.prototype.isShadowable = function () {
/// <summary>
/// 	获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE(false)
/// </summary>
/// <returns type="Boolean">返回附件选中时是否有阴影效果</returns>
}


twaver.network.interaction.CreateElementInteraction = function (network, typeOrElementFunction) {
/// <summary>
/// 	创建节点交互处理器，当点击拓扑时，创建指定类型的节点，并设置此节点中心位置为点击位置，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建节点模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrElementFunction" type="Object">节点类型或者节点生成器方法，可选，默认值为twaver.Node</param>
/// <returns type="twaver.network.interaction.CreateElementInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateElementInteraction(network, twaver.SubNetwork),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateElementInteraction(network,
/// 	    function (point) {
/// 	                    var element = new twaver.Node();
/// 	                    element.setName(element.getClassName());
/// 	                    element.setCenterLocation(point);
/// 	                    var parent = network.getElementAt(point);
/// 	                    if (parent && parent instanceof twaver.Group) {
/// 	                        element.setParent(parent);
/// 	                    }
/// 	                    return element;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.network.interaction.CreateElementInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.CreateElementInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.network.interaction.CreateLinkInteraction = function (network, typeOrLinkFunction) {
/// <summary>
/// 	创建连线交互处理器，在拓扑上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrLinkFunction" type="Object">连线类型或者连线生成器方法，可选，默认值为twaver.Link</param>
/// <returns type="twaver.network.interaction.CreateLinkInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateLinkInteraction(network, twaver.Link),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateLinkInteraction(network,
/// 	    function (fromNode, toNode) {
/// 	        var link = new twaver.Link();
/// 	        link.setFromNode(fromNode);
/// 	        link.setToNode(toNode);
/// 	        link.setStyle('link.color', 'red');
/// 	        return link;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.network.interaction.CreateLinkInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.CreateLinkInteraction.prototype.clear = function () {
/// <summary>
/// 	创建连线结束后，清除临时状态
/// </summary>
}

twaver.network.interaction.CreateLinkInteraction.prototype.createLink = function () {
/// <summary>
/// 	创建连线
/// </summary>
/// <returns type="twaver.Link">连线</returns>
}

twaver.network.interaction.CreateLinkInteraction.prototype.getFromNode = function (e) {
/// <summary>
/// 	获取当前鼠标下的节点，并作为将要创建的连线的起始节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回当前鼠标下的节点</returns>
}

twaver.network.interaction.CreateLinkInteraction.prototype.getNode = function (e) {
/// <summary>
/// 	获取鼠标下的节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回鼠标下的节点</returns>
}

twaver.network.interaction.CreateLinkInteraction.prototype.getToNode = function (e) {
/// <summary>
/// 	获取当前鼠标下的节点，并作为将要创建的连线的结束节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回当前鼠标下的节点</returns>
}

twaver.network.interaction.CreateLinkInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.CreateLinkInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.CreateLinkInteraction.prototype.updateLine = function () {
/// <summary>
/// 	选择了起始节点后，移动鼠标将动态画一根起始节点中心点到当前鼠标点的连线（宽度为Network#getEditLineWidth，颜色为Network#getEditLineColor）
/// </summary>
}

twaver.network.interaction.CreateLinkInteraction.prototype.updateMark = function () {
/// <summary>
/// 	鼠标移动到任意节点上时，此节点周围会显示边框（宽度为Network#getEditLineWidth，颜色为Network#getEditLineColor）
/// </summary>
}


twaver.network.interaction.CreateShapeNodeInteraction = function (network, typeOrShapeNodeFunction) {
/// <summary>
/// 	创建多边形交互处理器，在Network上多次点击不同位置设置多边形的points属性，最后双击结束，可以用Network#setCreateShapeNodeInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="String">拓扑</param>
/// <param name="typeOrShapeNodeFunction" type="Object">多边形类型或者多边形生成器方法，可选，默认值为twaver.ShapeNode</param>
/// <returns type="twaver.network.interaction.CreateShapeNodeInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeNodeInteraction(network, twaver.ShapeNode),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeNodeInteraction(network,
/// 	    function (points) {
/// 	        var shapeNode = new twaver.ShapeNode();
/// 	        shapeNode.setStyle('vector.fill.color', 'red');
/// 	        if(points){
/// 	            shapeNode.setPoints(points);
/// 	        }
/// 	        return shapeNode;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.network.interaction.CreateShapeNodeInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.CreateShapeNodeInteraction.prototype.clear = function () {
/// <summary>
/// 	创建多边形结束后，清除临时状态
/// </summary>
}

twaver.network.interaction.CreateShapeNodeInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.CreateShapeNodeInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.CreateShapeNodeInteraction.prototype.updateMark = function (e) {
/// <summary>
/// 	鼠标移动或者点击时，更新当前正在创建的多边形
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.network.interaction.DefaultInteraction = function (network) {
/// <summary>
/// 	默认交互处理器，处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等交互动作
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.DefaultInteraction"></returns>
}

twaver.network.interaction.DefaultInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.DefaultInteraction.prototype.handle_keydown = function (e) {
/// <summary>
/// 	处理键盘按下事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.network.interaction.DefaultInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.DefaultInteraction.prototype.handleClicked = function (e, element) {
/// <summary>
/// 	处理鼠标点击
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.network.interaction.DefaultInteraction.prototype.handleDoubleClicked = function (e, element) {
/// <summary>
/// 	处理鼠标双击
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="element" type="twaver.Element">网元</param>
}


twaver.network.interaction.EditInteraction = function (network, lazyMode) {
/// <summary>
/// 	编辑交互处理器，处理改变网元大小、更改折线（ShapeLink）和多边形（ShapeNode）的轨迹等操作，可以用Network#setEditInteractions快速切换当前交互模式为编辑模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选，默认值为false</param>
/// <returns type="twaver.network.interaction.EditInteraction"></returns>
}

twaver.network.interaction.EditInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.EditInteraction.prototype.clear = function () {
/// <summary>
/// 	编辑结束后，清除临时状态
/// </summary>
}

twaver.network.interaction.EditInteraction.prototype.getDistanceFromPointToLine = function (point, point1, point2) {
/// <summary>
/// 	获取点离直线的距离
/// </summary>
/// <param name="point" type="Object">点</param>
/// <param name="point1" type="Object">线段顶点1</param>
/// <param name="point2" type="Object">线段顶点2</param>
/// <returns type="Number">返回点离直线的距离</returns>
}

twaver.network.interaction.EditInteraction.prototype.getPointIndex = function (points, point, closed) {
/// <summary>
/// 	获取指定点所在的边索引
/// </summary>
/// <param name="points" type="twaver.List">坐标点集合</param>
/// <param name="point" type="Object">点</param>
/// <param name="closed" type="Boolean">是否闭合</param>
/// <returns type="Number">返回指定点所在的边索引</returns>
}

twaver.network.interaction.EditInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.EditInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.EditInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.EditInteraction.prototype.isPointOnLine = function (point, point1, point2, width) {
/// <summary>
/// 	获取指定点是否在线段上
/// </summary>
/// <param name="point" type="Object">坐标点</param>
/// <param name="point1" type="Object">线段顶点1</param>
/// <param name="point2" type="Object">线段顶点2</param>
/// <param name="width" type="Number">线段宽度</param>
/// <returns type="Boolean">返回指定点是否在线段上</returns>
}

twaver.network.interaction.EditInteraction.prototype.showRotateScale = function () {
/// <summary>
/// 	显示旋转刻度
/// </summary>
}


twaver.network.interaction.MagnifyInteraction = function (network, scale, xRadius, yRadius) {
/// <summary>
/// 	放大镜交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="scale" type="Number">缩放比例，可选，默认值为2</param>
/// <param name="xRadius" type="Number">水平半径，可选，默认值为100</param>
/// <param name="yRadius" type="Number">垂直半径，可选，默认值为100</param>
/// <returns type="twaver.network.interaction.MagnifyInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.SelectInteraction(network),
/// 	    new twaver.network.interaction.MoveInteraction(network),
/// 	    new twaver.network.interaction.DefaultInteraction(network),
/// 	    new twaver.network.interaction.MagnifyInteraction(network)
/// 	]);
/// </example>
}

twaver.network.interaction.MagnifyInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.MagnifyInteraction.prototype.getBackgroundColor = function () {
/// <summary>
/// 	获取放大镜背景颜色
/// </summary>
/// <returns type="String">返回放大镜背景颜色，默认为白色</returns>
}

twaver.network.interaction.MagnifyInteraction.prototype.getBorderColor = function () {
/// <summary>
/// 	获取边框颜色
/// </summary>
/// <returns type="String">返回边框颜色，默认为黑色</returns>
}

twaver.network.interaction.MagnifyInteraction.prototype.getBorderWidth = function () {
/// <summary>
/// 	获取边框宽度
/// </summary>
/// <returns type="Number">返回边框宽度，默认为1</returns>
}

twaver.network.interaction.MagnifyInteraction.prototype.getShape = function () {
/// <summary>
/// 	获取放大镜形状
/// </summary>
/// <returns type="String">返回放大镜形状，默认为圆形</returns>
}

twaver.network.interaction.MagnifyInteraction.prototype.getXRadius = function () {
/// <summary>
/// 	获取x轴半径
/// </summary>
/// <returns type="Number">返回x轴半径，默认为100</returns>
}

twaver.network.interaction.MagnifyInteraction.prototype.getYRadius = function () {
/// <summary>
/// 	获取y轴半径
/// </summary>
/// <returns type="Number">返回y轴半径</returns>
}

twaver.network.interaction.MagnifyInteraction.prototype.getZoom = function () {
/// <summary>
/// 	获取缩放级别
/// </summary>
/// <returns type="Number">返回缩放级别，默认为2</returns>
}

twaver.network.interaction.MagnifyInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.setBackgroundColor = function (value) {
/// <summary>
/// 	设置放大镜背景颜色
/// </summary>
/// <param name="value" type="String">放大镜背景颜色</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.setBorderColor = function (value) {
/// <summary>
/// 	设置边框颜色
/// </summary>
/// <param name="value" type="String">边框颜色</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.setBorderWidth = function (value) {
/// <summary>
/// 	设置边框宽度
/// </summary>
/// <param name="value" type="Number">边框宽度</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.setShape = function (value) {
/// <summary>
/// 	设置放大镜形状
/// </summary>
/// <param name="value" type="String">放大镜形状</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.setXRadius = function (value) {
/// <summary>
/// 	设置x轴半径
/// </summary>
/// <param name="value" type="Number">x轴半径</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.setYRadius = function (value) {
/// <summary>
/// 	设置y轴半径
/// </summary>
/// <param name="value" type="Number">y轴半径</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.setZoom = function (value) {
/// <summary>
/// 	设置缩放级别
/// </summary>
/// <param name="value" type="Number">缩放级别</param>
}

twaver.network.interaction.MagnifyInteraction.prototype.updateMark = function () {
/// <summary>
/// 	鼠标移动时，更新放大镜内容
/// </summary>
}


twaver.network.interaction.MoveInteraction = function (network, lazyMode) {
/// <summary>
/// 	移动网元交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选，默认值为false</param>
/// <returns type="twaver.network.interaction.MoveInteraction"></returns>
}

twaver.network.interaction.MoveInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.MoveInteraction.prototype.end = function (e) {
/// <summary>
/// 	移动结束后，清除临时状态
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.MoveInteraction.prototype.handle_keydown = function (e) {
/// <summary>
/// 	处理键盘按下事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.network.interaction.MoveInteraction.prototype.handle_keyup = function (e) {
/// <summary>
/// 	处理键盘弹起事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.network.interaction.MoveInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.MoveInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.MoveInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起，结束网元移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.MoveInteraction.prototype.isParenting = function () {
/// <summary>
/// 	获取是否正在设置父亲
/// </summary>
/// <returns type="Number">返回是否正在设置父亲</returns>
}

twaver.network.interaction.MoveInteraction.prototype.parentProcess = function (e, released) {
/// <summary>
/// 	键盘P键按下时，鼠标移动到网元上时的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="released" type="Boolean">键盘P键是否按下</param>
}


twaver.network.interaction.MSTouchInteraction = function (network) {
/// <summary>
/// 	触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.MSTouchInteraction"></returns>
}

twaver.network.interaction.MSTouchInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.MSTouchInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.network.interaction.MSTouchInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.MSTouchInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.MSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.interaction.MSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.interaction.MSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.network.interaction.PanInteraction = function (network) {
/// <summary>
/// 	手抓图交互处理器，拖动拓扑时水平或垂直滚动拓扑，可以用Network#setPanInteractions快速切换当前拓扑交互模式为手抓图模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.PanInteraction"></returns>
}

twaver.network.interaction.PanInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.PanInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.PanInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.PanInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.network.interaction.SelectInteraction = function (network) {
/// <summary>
/// 	选择网元交互模式，点击空白区域时清空选中，点击网元时选中网元，框选时，选中框选区域中的网元。
/// 	框选时，选择模式（当框选网元时，哪些网元会被选中）会影响如何选择网元，默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.SelectInteraction"></returns>
}

twaver.network.interaction.SelectInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.SelectInteraction.prototype.end = function (e) {
/// <summary>
/// 	框选结束时，选中网元
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.SelectInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.network.interaction.SelectInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.SelectInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.network.interaction.SelectInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.network.interaction.TouchInteraction = function (network) {
/// <summary>
/// 	触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.TouchInteraction"></returns>
}

twaver.network.interaction.TouchInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.network.interaction.TouchInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.network.interaction.TouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.interaction.TouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.network.interaction.TouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.network.LinkUI = function (network, element) {
/// <summary>
/// 	连线对应的视图对象，用连线的样式在连线的起始和结束节点之间画一条线
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Link">连线</param>
/// <returns type="twaver.network.LinkUI"></returns>
}

twaver.network.LinkUI.prototype = new twaver.network.ElementUI()

twaver.network.LinkUI.prototype.checkLinkHandlerAttachment = function () {
/// <summary>
/// 	检查连线捆绑标签附件
/// </summary>
}

twaver.network.LinkUI.prototype.createBodyRect = function () {
/// <summary>
/// 	创建连线内容区域，默认为热点周围一个像素的矩形
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.LinkUI.prototype.createLinkPoints = function () {
/// <summary>
/// 	生成构成连线的点的集合
/// </summary>
/// <returns type="twaver.List">返回构成连线的点的集合</returns>
}

twaver.network.LinkUI.prototype.drawBody = function () {
/// <summary>
/// 	用连线的各种样式（link.width连线宽度、link.color连线颜色等）画连线
/// </summary>
}

twaver.network.LinkUI.prototype.drawLinePoints = function (g, points, width, color) {
/// <summary>
/// 	画线，drawBody方法调用此方法画线
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">画布渲染内容</param>
/// <param name="points" type="twaver.List">由点构成的集合</param>
/// <param name="width" type="Number">线条宽度</param>
/// <param name="color" type="String">线条颜色</param>
}

twaver.network.LinkUI.prototype.getControlPoint = function () {
/// <summary>
/// 	获取控制点，控制点用于劈分正交直角连线
/// </summary>
/// <returns type="Object">返回控制点坐标，值为包含x和y属性的Object对象</returns>
}

twaver.network.LinkUI.prototype.getFromPoint = function () {
/// <summary>
/// 	获取连线起始坐标
/// </summary>
/// <returns type="Object">返回连线起始坐标，值为包含x和y属性的Object对象</returns>
}

twaver.network.LinkUI.prototype.getFromPosition = function (xoffset, yoffset) {
/// <summary>
/// 	获取偏移后的起始坐标
/// </summary>
/// <param name="xoffset" type="Number">x轴偏移量</param>
/// <param name="yoffset" type="Number">y轴偏移量</param>
/// <returns type="Object">返回偏移后的起始坐标，值为包含x和y属性的Object对象</returns>
}

twaver.network.LinkUI.prototype.getLineLength = function () {
/// <summary>
/// 	获取Link的长度
/// </summary>
/// <returns type="Number">返回Link的长度</returns>
}

twaver.network.LinkUI.prototype.getLinkHandlerAttachment = function () {
/// <summary>
/// 	获取连线捆绑标签附件
/// </summary>
/// <returns type="twaver.network.Attachment">返回连线捆绑标签附件</returns>
}

twaver.network.LinkUI.prototype.getLinkPoints = function () {
/// <summary>
/// 	获取构成连线的点的集合
/// </summary>
/// <returns type="twaver.List">返回构成连线的点的集合</returns>
}

twaver.network.LinkUI.prototype.getToPoint = function () {
/// <summary>
/// 	获取连线结束坐标
/// </summary>
/// <returns type="Object">返回连线结束坐标，值为包含x和y属性的Object对象</returns>
}

twaver.network.LinkUI.prototype.getToPosition = function (xoffset, yoffset) {
/// <summary>
/// 	获取偏移后的结束坐标
/// </summary>
/// <param name="xoffset" type="Number">x轴偏移量</param>
/// <param name="yoffset" type="Number">y轴偏移量</param>
/// <returns type="Object">返回偏移后的结束坐标，值为包含x和y属性的Object对象</returns>
}

twaver.network.LinkUI.prototype.setControlPoint = function (point) {
/// <summary>
/// 	设置控制点，控制点用于劈分正交直角连线
/// </summary>
/// <param name="point" type="Object">控制点坐标，值为包含x和y属性的Object对象</param>
}


twaver.network.NodeUI = function (network, element) {
/// <summary>
/// 	节点对应的视图对象，是其他网元对象（组、网格、多边形和子网等）的基类
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Node">节点</param>
/// <returns type="twaver.network.NodeUI"></returns>
}

twaver.network.NodeUI.prototype = new twaver.network.ElementUI()

twaver.network.NodeUI.prototype.createBodyRect = function () {
/// <summary>
/// 	创建节点内容区域，默认为网元节点的x坐标、y坐标、宽度和高度组成
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.network.NodeUI.prototype.drawBody = function () {
/// <summary>
/// 	画节点内容，根据body.type样式属性填充不同内容，body.type样式可选值为：
/// 	default 对应drawDefaultBody方法，用图片填充节点内容区域
/// 	vector 对应drawVectorBody方法，用矢量图形填充节点内容区域
/// 	default.vector 先画图片，再画矢量图形
/// 	vector.default 先画矢量图形，再画图片
/// 	
/// </summary>
}

twaver.network.NodeUI.prototype.drawDefaultBody = function () {
/// <summary>
/// 	用图片填充节点内容区域
/// </summary>
}

twaver.network.NodeUI.prototype.drawOuterBorder = function () {
/// <summary>
/// 	画边框
/// </summary>
}

twaver.network.NodeUI.prototype.drawSelectBorder = function () {
/// <summary>
/// 	节点被选中时，画选中边框
/// </summary>
}

twaver.network.NodeUI.prototype.drawVectorBody = function () {
/// <summary>
/// 	当body.type为vector或default.vector时，用矢量图形填充节点内容
/// </summary>
}


twaver.vector.BasicAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	告警附件和标签附件等的基类，用于显示文本信息的附件
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.BasicAttachment"></returns>
}

twaver.vector.BasicAttachment.prototype = new twaver.canvas.Attachment()

twaver.vector.BasicAttachment.prototype.calculateMeasure = function () {
/// <summary>
/// 	计算附件位置和大小
/// </summary>
}

twaver.vector.BasicAttachment.prototype.getCap = function () {
/// <summary>
/// 	获取附件画线时线条两端的样式, 默认值为twaver.Defaults.ATTACHMENT_CAP(butt), 可选值为butt(无端点)，round(圆头端点)或 square(方头端点)
/// </summary>
/// <returns type="String">返回画线时, 线条两端的样式</returns>
}

twaver.vector.BasicAttachment.prototype.getContentHeight = function () {
/// <summary>
/// 	获取附件内容高度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT(20)
/// </summary>
/// <returns type="Number">返回附件内容高度</returns>
}

twaver.vector.BasicAttachment.prototype.getContentRect = function () {
/// <summary>
/// 	获取附件内容区域
/// </summary>
/// <returns type="Object">返回附件内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.BasicAttachment.prototype.getContentWidth = function () {
/// <summary>
/// 	获取附件内容宽度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（30）
/// </summary>
/// <returns type="Number">返回附件内容宽度</returns>
}

twaver.vector.BasicAttachment.prototype.getCornerRadius = function () {
/// <summary>
/// 	获取附件圆角半径，默认值为twaver.Defaults.ATTACHMENT_CORNER_RADIUS（5）
/// </summary>
/// <returns type="Number">返回附件圆角半径</returns>
}

twaver.vector.BasicAttachment.prototype.getDirection = function () {
/// <summary>
/// 	获取附件箭头的显示方位，一般用于告警冒泡，默认值为twaver.Defaults.ATTACHMENT_DIRECTION（right），可选值为：
/// 	aboveleft 附件箭头在上左角
/// 	aboveright 附件箭头在上右角
/// 	belowleft 附件箭头在下左角
/// 	belowright 附件箭头在下右角
/// 	leftabove 附件箭头在左上角
/// 	leftbelow 附件箭头在左下角
/// 	rightabove 附件箭头在右上角
/// 	rightbelow 附件箭头在右下角
/// 	above 附件箭头在上边
/// 	below 附件箭头在下边
/// 	left 附件箭头在左边
/// 	right 附件箭头在右边
/// </summary>
/// <returns type="String">返回附件箭头的显示方位</returns>
}

twaver.vector.BasicAttachment.prototype.getFillColor = function () {
/// <summary>
/// 	获取附件填充颜色，默认值为twaver.Defaults.ATTACHMENT_FILL_COLOR（#000000）
/// </summary>
/// <returns type="String">返回附件填充颜色</returns>
}

twaver.vector.BasicAttachment.prototype.getGradient = function () {
/// <summary>
/// 	获取附件渐进色填充样式，默认值为twaver.Defaults.ATTACHMENT_GRADIENT（null），null表示不使用填充渐进色，可选值为：
/// 	linear.east, linear.north, linear.northeast, linear.northwest, linear.south, linear.southeast, linear.southwest, linear.west, none, radial.center, radial.east, radial.north, radial.northeast, radial.northwest, radial.south, radial.southeast, radial.southwest, radial.west, spread.antidiagonal, spread.diagonal, spread.east, spread.horizontal, spread.north, spread.south, spread.vertical, spread.west
/// </summary>
/// <returns type="String">返回附件渐进色填充样式</returns>
}

twaver.vector.BasicAttachment.prototype.getGradientColor = function () {
/// <summary>
/// 	获取附件填充渐进色，默认值为twaver.Defaults.ATTACHMENT_GRADIENT_COLOR（#FFFFFF）
/// </summary>
/// <returns type="String">返回附件填充渐进色</returns>
}

twaver.vector.BasicAttachment.prototype.getJoin = function () {
/// <summary>
/// 	获取附件在画线时的线条连接点样式，默认值为twaver.Defaults.ATTACHMENT_JOIN（miter），可选值为bevel（斜角连接）round（圆角连接）和miter（尖角连接）
/// </summary>
/// <returns type="String">返回附件在画线时的线条连接点样式</returns>
}

twaver.vector.BasicAttachment.prototype.getOutlineColor = function () {
/// <summary>
/// 	获取附件边框颜色，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_COLOR（#000000）
/// </summary>
/// <returns type="String">返回附件边框颜色</returns>
}

twaver.vector.BasicAttachment.prototype.getOutlineWidth = function () {
/// <summary>
/// 	获取附件边框宽度，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH（-1），-1代表无边框
/// </summary>
/// <returns type="Number">返回附件边框宽度</returns>
}

twaver.vector.BasicAttachment.prototype.getPadding = function () {
/// <summary>
/// 	获取附件内容和边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING（0）
/// </summary>
/// <returns type="Number">返回附件内容和边界之间的间距</returns>
}

twaver.vector.BasicAttachment.prototype.getPaddingBottom = function () {
/// <summary>
/// 	获取附件内容和下边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_BOTTOM（0）
/// </summary>
/// <returns type="Number">返回附件内容和下边界之间的间距</returns>
}

twaver.vector.BasicAttachment.prototype.getPaddingLeft = function () {
/// <summary>
/// 	获取附件内容和左边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_LEFT（0）
/// </summary>
/// <returns type="Number">返回附件内容和左边界之间的间距</returns>
}

twaver.vector.BasicAttachment.prototype.getPaddingRight = function () {
/// <summary>
/// 	获取附件内容和右边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_RIGHT（0）
/// </summary>
/// <returns type="Number">附件内容和右边界之间的间距</returns>
}

twaver.vector.BasicAttachment.prototype.getPaddingTop = function () {
/// <summary>
/// 	获取附件内容和上边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_TOP（0）
/// </summary>
/// <returns type="Number">返回附件内容和上边界之间的间距</returns>
}

twaver.vector.BasicAttachment.prototype.getPointerLength = function () {
/// <summary>
/// 	获取附件箭头长度，默认值为twaver.Defaults.ATTACHMENT_POINTER_LENGTH（10）
/// </summary>
/// <returns type="Number">返回附件箭头长度</returns>
}

twaver.vector.BasicAttachment.prototype.getPointerWidth = function () {
/// <summary>
/// 	获取附件箭头宽度，默认值为ATTACHMENT_POINTER_WIDTH（8）
/// </summary>
/// <returns type="Number">返回附件箭头宽度</returns>
}

twaver.vector.BasicAttachment.prototype.getPosition = function () {
/// <summary>
/// 	获取附件位置，默认值为twaver.Defaults.ATTACHMENT_POSITION（topright.topright）
/// 	可选值为
/// 	hotspot
/// 	from
/// 	to
/// 	topleft.topleft
/// 	topleft.topright
/// 	top.top
/// 	topright.topleft
/// 	topright.topright
/// 	topleft
/// 	top
/// 	topright
/// 	topleft.bottomleft
/// 	topleft.bottomright
/// 	top.bottom
/// 	topright.bottomleft
/// 	topright.bottomright
/// 	left.left
/// 	left
/// 	left.right
/// 	center
/// 	right.left
/// 	right
/// 	right.right
/// 	bottomleft.topleft
/// 	bottomleft.topright
/// 	bottom.top
/// 	bottomright.topleft
/// 	bottomright.topright
/// 	bottomleft
/// 	bottom
/// 	bottomright
/// 	bottomleft.bottomleft
/// 	bottomleft.bottomright
/// 	bottom.bottom
/// 	bottomright.bottomleft
/// 	bottomright.bottomright
/// </summary>
/// <returns type="String">返回附件位置</returns>
}

twaver.vector.BasicAttachment.prototype.getRoundRect = function () {
/// <summary>
/// 	获取附件圆角区域
/// </summary>
/// <returns type="Object">返回附件圆角区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.BasicAttachment.prototype.getXOffset = function () {
/// <summary>
/// 	获取附件x轴偏移量，默认值为twaver.Defaults.ATTACHMENT_XOFFSET（0）
/// </summary>
/// <returns type="Number">返回附件的x轴偏移量</returns>
}

twaver.vector.BasicAttachment.prototype.getYOffset = function () {
/// <summary>
/// 	获取附件y轴偏移量，默认值为twaver.Defaults.ATTACHMENT_YOFFSET（0）
/// </summary>
/// <returns type="Number">返回附件y轴偏移量</returns>
}

twaver.vector.BasicAttachment.prototype.isFill = function () {
/// <summary>
/// 	获取附件是否有填充背景，默认值为twaver.Defaults.ATTACHMENT_FILL（false）
/// </summary>
/// <returns type="Boolean">返回附件是否有填充背景</returns>
}

twaver.vector.BasicAttachment.prototype.isShadowable = function () {
/// <summary>
/// 	获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE（false）
/// </summary>
/// <returns type="Boolean">返回附件选中时是否有阴影效果</returns>
}


twaver.vector.EditAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	编辑附件，用于显示网元是否可编辑。对于可编辑的节点，节点周围显示8个可以改变网元大小的小方块；对于多边形和折线，每个可移动点显示为黄色的小圆球
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.EditAttachment"></returns>
}

twaver.vector.EditAttachment.prototype = new twaver.canvas.Attachment()

twaver.vector.EditAttachment.prototype.paintEditPoints = function (ctx) {
/// <summary>
/// 	画ShapeLink和ShapeNode的控制点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.EditAttachment.prototype.paintResizingPoints = function (ctx) {
/// <summary>
/// 	画8个更改网元大小的控制点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.EditAttachment.prototype.paintRotatePoints = function (ctx) {
/// <summary>
/// 	绘制旋转点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}


twaver.vector.IconsAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	图标组附件，用于显示一组图标
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.IconsAttachment"></returns>
}

twaver.vector.IconsAttachment.prototype = new twaver.canvas.Attachment()

twaver.vector.IconsAttachment.prototype.isShadowable = function () {
/// <summary>
/// 	获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE(false)
/// </summary>
/// <returns type="Boolean">返回附件选中时是否有阴影效果</returns>
}


twaver.vector.interaction.CreateElementInteraction = function (network, typeOrElementFunction) {
/// <summary>
/// 	创建节点交互处理器，当点击拓扑时，创建指定类型的节点，并设置此节点中心位置为点击位置，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建节点模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrElementFunction" type="Object">节点类型或者节点生成器方法，可选，默认值为twaver.Node</param>
/// <returns type="twaver.network.interaction.CreateElementInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateElementInteraction(network, twaver.SubNetwork),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateElementInteraction(network,
/// 	    function (point) {
/// 	                    var element = new twaver.Node();
/// 	                    element.setName(element.getClassName());
/// 	                    element.setCenterLocation(point);
/// 	                    var parent = network.getElementAt(point);
/// 	                    if (parent && parent instanceof twaver.Group) {
/// 	                        element.setParent(parent);
/// 	                    }
/// 	                    return element;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.vector.interaction.CreateElementInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.vector.interaction.CreateElementInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.vector.interaction.CreateLinkInteraction = function (network, typeOrLinkFunction) {
/// <summary>
/// 	创建连线交互处理器，在拓扑上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrLinkFunction" type="Object">连线类型或者连线生成器方法，可选，默认值为twaver.Link</param>
/// <returns type="twaver.network.interaction.CreateLinkInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateLinkInteraction(network, twaver.Link),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateLinkInteraction(network,
/// 	    function (fromNode, toNode) {
/// 	        var link = new twaver.Link();
/// 	        link.setFromNode(fromNode);
/// 	        link.setToNode(toNode);
/// 	        link.setStyle('link.color', 'red');
/// 	        return link;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.vector.interaction.CreateLinkInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.vector.interaction.CreateLinkInteraction.prototype.clear = function () {
/// <summary>
/// 	创建连线结束后，清除临时状态
/// </summary>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.createLink = function () {
/// <summary>
/// 	创建连线
/// </summary>
/// <returns type="twaver.Link">连线</returns>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.getFromNode = function (e) {
/// <summary>
/// 	获取当前鼠标下的节点，并作为将要创建的连线的起始节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回当前鼠标下的节点</returns>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.getNode = function (e) {
/// <summary>
/// 	获取鼠标下的节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回鼠标下的节点</returns>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.getToNode = function (e) {
/// <summary>
/// 	获取当前鼠标下的节点，并作为将要创建的连线的结束节点
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Node">返回当前鼠标下的节点</returns>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.getZoomNodeRectOrPoint = function (node, returnPoint) {
/// <summary>
/// 	返回节点在缩放情况下所在空间的位置和大小
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <param name="returnPoint" type="Boolean">布尔值，是否返回中心点，否则返回表示大小的矩形</param>
/// <returns type="Object">返回点或者矩形</returns>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.CreateLinkInteraction.prototype.paintLine = function (ctx) {
/// <summary>
/// 	从起始点画线到鼠标当前点
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}


twaver.vector.interaction.CreateShapeNodeInteraction = function (network, typeOrShapeNodeFunction) {
/// <summary>
/// 	创建多边形交互处理器，在Network上多次点击不同位置设置多边形的points属性，最后双击结束，可以用Network#setCreateShapeNodeInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="String">拓扑</param>
/// <param name="typeOrShapeNodeFunction" type="Object">多边形类型或者多边形生成器方法，可选，默认值为twaver.ShapeNode</param>
/// <returns type="twaver.network.interaction.CreateShapeNodeInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeNodeInteraction(network, twaver.ShapeNode),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeNodeInteraction(network,
/// 	    function (points) {
/// 	        var shapeNode = new twaver.ShapeNode();
/// 	        shapeNode.setStyle('vector.fill.color', 'red');
/// 	        if(points){
/// 	            shapeNode.setPoints(points);
/// 	        }
/// 	        return shapeNode;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.vector.interaction.CreateShapeNodeInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.vector.interaction.CreateShapeNodeInteraction.prototype.clear = function () {
/// <summary>
/// 	创建多边形结束后，清除临时状态
/// </summary>
}

twaver.vector.interaction.CreateShapeNodeInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.CreateShapeNodeInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.vector.interaction.DefaultInteraction = function (network) {
/// <summary>
/// 	默认交互处理器，处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等交互动作
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.DefaultInteraction"></returns>
}

twaver.vector.interaction.DefaultInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.vector.interaction.DefaultInteraction.prototype.end = function (e, fromStart) {
/// <param name="e" type="String"></param>
/// <param name="fromStart" type="String"></param>
}

twaver.vector.interaction.DefaultInteraction.prototype.getIntersectMode = function () {
/// <returns type="String"></returns>
}

twaver.vector.interaction.DefaultInteraction.prototype.getScrollBarColor = function () {
/// <returns type="String"></returns>
}

twaver.vector.interaction.DefaultInteraction.prototype.getScrollBarWidth = function () {
/// <returns type="String"></returns>
}

twaver.vector.interaction.DefaultInteraction.prototype.handle_keydown = function (e) {
/// <summary>
/// 	处理键盘按下事件
/// </summary>
/// <param name="e" type="KeyEvent">键盘事件</param>
}

twaver.vector.interaction.DefaultInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.DefaultInteraction.prototype.handleClicked = function (e, element) {
/// <summary>
/// 	处理鼠标点击
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.vector.interaction.DefaultInteraction.prototype.handleDoubleClicked = function (e, element) {
/// <summary>
/// 	处理鼠标双击
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <param name="element" type="twaver.Element">网元</param>
}


twaver.vector.interaction.EditInteraction = function (network, lazyMode) {
/// <summary>
/// 	编辑交互处理器，处理改变网元大小、更改折线（ShapeLink）和多边形（ShapeNode）的轨迹等操作，可以用Network#setEditInteractions快速切换当前交互模式为编辑模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选，默认值为false</param>
/// <returns type="twaver.network.interaction.EditInteraction"></returns>
}

twaver.vector.interaction.EditInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.vector.interaction.EditInteraction.prototype.clear = function () {
/// <summary>
/// 	编辑结束后，清除临时状态
/// </summary>
}

twaver.vector.interaction.EditInteraction.prototype.getDistanceFromPointToLine = function (point, point1, point2) {
/// <summary>
/// 	获取点离直线的距离
/// </summary>
/// <param name="point" type="Object">点</param>
/// <param name="point1" type="Object">线段顶点1</param>
/// <param name="point2" type="Object">线段顶点2</param>
/// <returns type="Number">返回点离直线的距离</returns>
}

twaver.vector.interaction.EditInteraction.prototype.getPointIndex = function (points, point, closed) {
/// <summary>
/// 	获取指定点所在的边索引
/// </summary>
/// <param name="points" type="twaver.List">坐标点集合</param>
/// <param name="point" type="Object">点</param>
/// <param name="closed" type="Boolean">是否闭合</param>
/// <returns type="Number">返回指定点所在的边索引</returns>
}

twaver.vector.interaction.EditInteraction.prototype.handle_mousedown = function (e) {
/// <summary>
/// 	处理鼠标按下事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.EditInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.EditInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.EditInteraction.prototype.isPointOnLine = function (point, point1, point2, width) {
/// <summary>
/// 	获取指定点是否在线段上
/// </summary>
/// <param name="point" type="Object">坐标点</param>
/// <param name="point1" type="Object">线段顶点1</param>
/// <param name="point2" type="Object">线段顶点2</param>
/// <param name="width" type="Number">线段宽度</param>
/// <returns type="Boolean">返回指定点是否在线段上</returns>
}

twaver.vector.interaction.EditInteraction.prototype.showRotateScale = function () {
/// <summary>
/// 	显示旋转刻度
/// </summary>
}


twaver.vector.interaction.MagnifyInteraction = function (network, scale, xRadius, yRadius) {
/// <summary>
/// 	放大镜交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="scale" type="Number">缩放比例，可选，默认值为2</param>
/// <param name="xRadius" type="Number">水平半径，可选，默认值为100</param>
/// <param name="yRadius" type="Number">垂直半径，可选，默认值为100</param>
/// <returns type="twaver.network.interaction.MagnifyInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.SelectInteraction(network),
/// 	    new twaver.network.interaction.MoveInteraction(network),
/// 	    new twaver.network.interaction.DefaultInteraction(network),
/// 	    new twaver.network.interaction.MagnifyInteraction(network)
/// 	]);
/// </example>
}

twaver.vector.interaction.MagnifyInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.vector.interaction.MagnifyInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}


twaver.vector.interaction.MSTouchInteraction = function (network) {
/// <summary>
/// 	触摸交互处理器
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑图组件</param>
/// <returns type="twaver.canvas.interaction.MSTouchInteraction"></returns>
}

twaver.vector.interaction.MSTouchInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

twaver.vector.interaction.MSTouchInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.vector.interaction.MSTouchInteraction.prototype.handle_mousemove = function (e) {
/// <summary>
/// 	处理鼠标移动事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.MSTouchInteraction.prototype.handle_mouseup = function (e) {
/// <summary>
/// 	处理鼠标弹起事件
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
}

twaver.vector.interaction.MSTouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.interaction.MSTouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.interaction.MSTouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.vector.interaction.TouchInteraction = function (network) {
/// <summary>
/// 	触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <returns type="twaver.network.interaction.TouchInteraction"></returns>
}

twaver.vector.interaction.TouchInteraction.prototype = new twaver.network.interaction.BaseInteraction()

twaver.vector.interaction.TouchInteraction.prototype.getIntersectMode = function () {
/// <summary>
/// 	获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
/// </summary>
/// <returns type="Boolean">如果是相交模式，则返回true，否则返回false</returns>
}

twaver.vector.interaction.TouchInteraction.prototype.handleTouchend = function (e) {
/// <summary>
/// 	处理触摸结束事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.interaction.TouchInteraction.prototype.handleTouchmove = function (e) {
/// <summary>
/// 	处理触摸移动事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}

twaver.vector.interaction.TouchInteraction.prototype.handleTouchstart = function (e) {
/// <summary>
/// 	处理触摸开始事件
/// </summary>
/// <param name="e" type="TouchEvent">触摸事件</param>
}


twaver.vector.LinkUI = function (network, element) {
/// <summary>
/// 	连线对应的视图对象，用连线的样式在连线的起始和结束节点之间画一条线
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Link">连线</param>
/// <returns type="twaver.network.LinkUI"></returns>
}

twaver.vector.LinkUI.prototype = new twaver.network.ElementUI()

twaver.vector.LinkUI.prototype.checkLinkHandlerAttachment = function () {
/// <summary>
/// 	检查连线捆绑标签附件
/// </summary>
}

twaver.vector.LinkUI.prototype.createBodyRect = function () {
/// <summary>
/// 	创建连线内容区域，默认为热点周围一个像素的矩形
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.LinkUI.prototype.createLinkPoints = function () {
/// <summary>
/// 	生成构成连线的点的集合
/// </summary>
/// <returns type="twaver.List">返回构成连线的点的集合</returns>
}

twaver.vector.LinkUI.prototype.drawLinePoints = function (g, points, width, color) {
/// <summary>
/// 	画线，drawBody方法调用此方法画线
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">画布渲染内容</param>
/// <param name="points" type="twaver.List">由点构成的集合</param>
/// <param name="width" type="Number">线条宽度</param>
/// <param name="color" type="String">线条颜色</param>
}

twaver.vector.LinkUI.prototype.getControlPoint = function () {
/// <summary>
/// 	获取控制点，控制点用于劈分正交直角连线
/// </summary>
/// <returns type="Object">返回控制点坐标，值为包含x和y属性的Object对象</returns>
}

twaver.vector.LinkUI.prototype.getFromPoint = function () {
/// <summary>
/// 	获取连线起始坐标
/// </summary>
/// <returns type="Object">返回连线起始坐标，值为包含x和y属性的Object对象</returns>
}

twaver.vector.LinkUI.prototype.getFromPosition = function (xoffset, yoffset) {
/// <summary>
/// 	获取偏移后的起始坐标
/// </summary>
/// <param name="xoffset" type="Number">x轴偏移量</param>
/// <param name="yoffset" type="Number">y轴偏移量</param>
/// <returns type="Object">返回偏移后的起始坐标，值为包含x和y属性的Object对象</returns>
}

twaver.vector.LinkUI.prototype.getLineLength = function () {
/// <summary>
/// 	获取Link的长度
/// </summary>
/// <returns type="Number">返回Link的长度</returns>
}

twaver.vector.LinkUI.prototype.getLinkHandlerAttachment = function () {
/// <summary>
/// 	获取连线捆绑标签附件
/// </summary>
/// <returns type="twaver.network.Attachment">返回连线捆绑标签附件</returns>
}

twaver.vector.LinkUI.prototype.getLinkPoints = function () {
/// <summary>
/// 	获取构成连线的点的集合
/// </summary>
/// <returns type="twaver.List">返回构成连线的点的集合</returns>
}

twaver.vector.LinkUI.prototype.getToPoint = function () {
/// <summary>
/// 	获取连线结束坐标
/// </summary>
/// <returns type="Object">返回连线结束坐标，值为包含x和y属性的Object对象</returns>
}

twaver.vector.LinkUI.prototype.getToPosition = function (xoffset, yoffset) {
/// <summary>
/// 	获取偏移后的结束坐标
/// </summary>
/// <param name="xoffset" type="Number">x轴偏移量</param>
/// <param name="yoffset" type="Number">y轴偏移量</param>
/// <returns type="Object">返回偏移后的结束坐标，值为包含x和y属性的Object对象</returns>
}

twaver.vector.LinkUI.prototype.setControlPoint = function (point) {
/// <summary>
/// 	设置控制点，控制点用于劈分正交直角连线
/// </summary>
/// <param name="point" type="Object">控制点坐标，值为包含x和y属性的Object对象</param>
}

twaver.vector.LinkUI.prototype.validateBodyBounds = function () {
/// <summary>
/// 	刷新连线视图所占的区域
/// </summary>
}


twaver.vector.LogicalZoomManager = function (network, sizeChange) {
/// <summary>
/// 	逻辑缩放管理器构造函数
/// </summary>
/// <param name="network" type="twaver.vector.Network">拓扑组件</param>
/// <param name="sizeChange" type="Boolean">布尔值，是否缩放尺寸</param>
/// <returns type="twaver.vector.LogicalZoomManager">逻辑缩放管理器</returns>
}

twaver.vector.LogicalZoomManager.prototype = new twaver.vector.BaseZoomManager()


twaver.vector.NodeUI = function (network, element) {
/// <summary>
/// 	节点对应的视图对象，是其他网元对象（组、网格、多边形和子网等）的基类
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑</param>
/// <param name="element" type="twaver.Node">节点</param>
/// <returns type="twaver.canvas.NodeUI"></returns>
}

twaver.vector.NodeUI.prototype = new twaver.canvas.ElementUI()

twaver.vector.NodeUI.prototype.createBodyRect = function () {
/// <summary>
/// 	创建节点内容区域，默认为网元节点的x坐标、y坐标、宽度和高度组成
/// </summary>
/// <returns type="Object">返回内容区域，值为包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.NodeUI.prototype.drawDefaultBody = function (ctx) {
/// <summary>
/// 	用图片填充节点内容区域
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.NodeUI.prototype.drawOuterBorder = function (ctx) {
/// <summary>
/// 	画边框
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.NodeUI.prototype.drawPath = function (ctx, prefix, padding, pattern, points, segments, close) {
/// <summary>
/// 	画路径
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
/// <param name="prefix" type="String">前缀</param>
/// <param name="padding" type="Number">内边距</param>
/// <param name="pattern" type="Array">线条虚线样式</param>
/// <param name="points" type="twaver.List">点集合</param>
/// <param name="segments" type="twaver.List">点与点之间连接类型集合</param>
/// <param name="close" type="Boolean">是否闭合</param>
}

twaver.vector.NodeUI.prototype.drawSelectBorder = function (ctx) {
/// <summary>
/// 	节点被选中时，画选中边框
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.NodeUI.prototype.drawVectorBody = function (ctx) {
/// <summary>
/// 	当body.type为vector或default.vector时，用矢量图形填充节点内容
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.NodeUI.prototype.getDefaultBodyRect = function () {
/// <summary>
/// 	获取网元视图主体边界
/// </summary>
/// <returns type="Object">返回网元视图主体边界</returns>
}

twaver.vector.NodeUI.prototype.getOuterBorderRect = function () {
/// <summary>
/// 	获取外边框边界
/// </summary>
/// <returns type="Object">返回外边框边界</returns>
}

twaver.vector.NodeUI.prototype.getPathRect = function (prefix, padding) {
/// <summary>
/// 	获取路径边界
/// </summary>
/// <param name="prefix" type="String">前缀</param>
/// <param name="padding" type="Number">内边距</param>
/// <returns type="Object">返回路径边界</returns>
}

twaver.vector.NodeUI.prototype.getSelectBorderRect = function () {
/// <summary>
/// 	获取选中边框边界
/// </summary>
/// <returns type="Object">返回选中边框边界</returns>
}

twaver.vector.NodeUI.prototype.getVectorBody = function () {
/// <summary>
/// 	获取矢量边界
/// </summary>
/// <returns type="Object">返回矢量边界</returns>
}

twaver.vector.NodeUI.prototype.validateBodyBounds = function () {
/// <summary>
/// 	重新计算网元主体边界
/// </summary>
}


twaver.vector.PhysicalZoomManager = function () {
/// <summary>
/// 	物理缩放管理器构造函数
/// </summary>
/// <returns type="twaver.vector.PhysicalZoomManager">物理缩放管理器</returns>
}

twaver.vector.PhysicalZoomManager.prototype = new twaver.vector.BaseZoomManager()


twaver.Alarm = function (id, elementId, alarmSeverity, isAcked, isCleared) {
/// <summary>
/// 	构造函数
/// 	
/// 	告警是电信拓扑系统中的一种预定义的对象，它是基于OSS/J服务质量体系的API和基于ITU-T标准建议的X.733。
/// 	
/// 	在TWaver中，告警是用于展示OSS系统中服务端实际发生的告警。当拓扑图上产生警告时意味着OSS系统中创建的告警被监控到，OSS系统可以将新建的告警传到客户端并在客户端的拓扑图或表格上显示出来。
/// 	
/// 	TWaver中的告警对象定义了告警中最常见的属性。需要注意的是，TWaver中的告警对象只是在UI中使用，而不是直接存储进数据库或服务端的，一般在OSS系统的服务端上的告警会有更详细的属性以及与业务相关的属性。
/// 	
/// 	告警是存储在告警容器中的，告警容器是网元容器的一部分，它是用于管理告警对象的。每一个告警都可以设置相关联的网元ID，当告警产生时，就会在网元上呈现出来。
/// </summary>
/// <param name="id" type="Object">告警ID用于唯一标识告警对象。在告警容器中，ID是不能重复的，如果告警ID是null，TWaver就会根据默认的规则，自动生成一个告警ID。ID可以是string，number类型，也可以是Object类型。是string或number类型时指的是告警的ID，如果为Object类型，可以传入一个带告警属性的对象，比如: var alarm = new twaver.Alarm({      alarmSeverity:AlarmSeverity.CRITICAL,      acked:true,      clients:{'buinessiID':'523'} });</param>
/// <param name="elementId" type="Object">当和告警绑定的网元ID不为空时，添加一个告警，网元上就会同步呈现出这个告警。</param>
/// <param name="alarmSeverity" type="twaver.AlarmSeverity">告警级别</param>
/// <param name="isAcked" type="Boolean">是否是确认告警</param>
/// <param name="isCleared" type="Boolean">告警是否清除</param>
/// <returns type="twaver.Alarm">告警对象本身</returns>
}

twaver.Alarm.prototype = new twaver.Data()

twaver.Alarm.prototype.getAlarmSeverity = function () {
/// <summary>
/// 	得到告警的级别，告警级别可以参考twaver.AlarmSeverity
/// </summary>
/// <returns type="twaver.AlarmSeverity">告警级别</returns>
}

twaver.Alarm.prototype.getElementId = function () {
/// <summary>
/// 	获取绑定在告警上的网元ID
/// </summary>
/// <returns type="Object">网元ID</returns>
}

twaver.Alarm.prototype.IAlarm = function () {
/// <field type="Boolean">告警标志</field>
}

twaver.Alarm.prototype.isAcked = function () {
/// <summary>
/// 	告警是否已经确认
/// </summary>
/// <returns type="Boolean">true为确认，否则为false</returns>
}

twaver.Alarm.prototype.isCleared = function () {
/// <summary>
/// 	告警是否已经清除
/// </summary>
/// <returns type="Boolean">true为清除，否则为false</returns>
}

twaver.Alarm.prototype.setAcked = function (v) {
/// <summary>
/// 	设置告警的状态，true为确认，否则为false
/// </summary>
/// <param name="v" type="Boolean">true为确认，否则为false</param>
}

twaver.Alarm.prototype.setAlarmSeverity = function (v) {
/// <summary>
/// 	设置告警的级别，告警级别可参考twaver.AlarmSeverity
/// </summary>
/// <param name="v" type="twaver.AlarmSeverity">告警级别</param>
}

twaver.Alarm.prototype.setCleared = function (v) {
/// <summary>
/// 	设置告警清除的状态，true为已清除，否则为false
/// </summary>
/// <param name="v" type="Boolean">true为清除，否则为false</param>
}


twaver.AlarmBox = function (elementBox) {
/// <summary>
/// 	告警容器存在于网元容器中，它作为网元容器的一部分，管理着网元容器中所有网元上的告警对象。当创建一个网元容器时，告警容器就会随之生成
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">网元容器对象</param>
/// <returns type="twaver.AlarmBox">告警容器本身</returns>
}

twaver.AlarmBox.prototype = new twaver.DataBox()

twaver.AlarmBox.prototype.getAlarmElementMapping = function () {
/// <summary>
/// 	获取告警-网元映射的对象，这个对象用于管理所有的网元和告警的对应关系，它决定了告警显示在哪些网元上
/// </summary>
/// <returns type="twaver.AlarmElementMapping">告警-网元映射的对象</returns>
}

twaver.AlarmBox.prototype.getCorrespondingAlarms = function (element) {
/// <summary>
/// 	获取某个网元上所有的告警集合
/// </summary>
/// <param name="element" type="twaver.Element">网元对象</param>
/// <returns type="twaver.List">网元上所有的告警集合</returns>
}

twaver.AlarmBox.prototype.getCorrespondingElements = function (alarm) {
/// <summary>
/// 	获取和某个告警相关联的网元对象的集合。
/// </summary>
/// <param name="alarm" type="twaver.Alarm">告警对象</param>
/// <returns type="twaver.List">和告警相关联的网元对象的集合</returns>
}

twaver.AlarmBox.prototype.getElementBox = function () {
/// <summary>
/// 	获取和这个告警容器绑定的网元容器
/// </summary>
/// <returns type="twaver.ElementBox">包含这个告警容器的网元容器对象</returns>
}

twaver.AlarmBox.prototype.handleAckedChange = function (alarm, e) {
/// <summary>
/// 	当告警的确认状态变化时，TWaver内部会调用此方法。
/// </summary>
/// <param name="alarm" type="twaver.Alarm">告警对象</param>
/// <param name="e" type="Object">告警状态的变化事件</param>
}

twaver.AlarmBox.prototype.handleAlarmBoxChange = function (e) {
/// <summary>
/// 	当告警容器发生变化时，TWaver内部会调用此方法。
/// </summary>
/// <param name="e" type="Object">告警对象事件</param>
}

twaver.AlarmBox.prototype.handleAlarmPropertyChange = function (e) {
/// <summary>
/// 	当告警属性发生变化时，TWaver内部会调用此方法。
/// </summary>
/// <param name="e" type="Object">告警对象事件</param>
}

twaver.AlarmBox.prototype.handleAlarmSeverityChange = function (alarm, e) {
/// <summary>
/// 	当告警级别的对象发生变化时，TWaver内部会调用此方法。
/// </summary>
/// <param name="alarm" type="twaver.Alarm">告警对象</param>
/// <param name="e" type="Object">告警对象事件</param>
}

twaver.AlarmBox.prototype.handleElementAdded = function (element) {
/// <summary>
/// 	当网元添加时，TWaver内部会调用此方法。
/// </summary>
/// <param name="element" type="twaver.Element">添加的网元对象</param>
}

twaver.AlarmBox.prototype.handleElementBoxChange = function (e) {
/// <summary>
/// 	当网元容器发生变化时，TWaver内部会调用此方法
/// </summary>
/// <param name="e" type="Object">网元容器发生更改的事件</param>
}

twaver.AlarmBox.prototype.handleElementRemoved = function (element) {
/// <summary>
/// 	当网元删除时，调用此方法。TWaver内部使用
/// </summary>
/// <param name="element" type="twaver.Element">删除了的网元对象</param>
}

twaver.AlarmBox.prototype.isRemoveAlarmWhenAlarmIsCleared = function () {
/// <summary>
/// 	当告警的状态为cleared时是否需要删除告警
/// </summary>
/// <returns type="Boolean">true为删除告警，false不删除告警</returns>
}

twaver.AlarmBox.prototype.isRemoveAlarmWhenElementIsRemoved = function () {
/// <summary>
/// 	当删除网元时，是否删除所有发生在这个网元上的告警对象
/// </summary>
/// <returns type="String">true为删除所有的告警，false为不删除</returns>
}

twaver.AlarmBox.prototype.removeAlarmsByElement = function (element) {
/// <summary>
/// 	删除所有和指定网元相关的告警对象
/// </summary>
/// <param name="element" type="twaver.Element">网元对象</param>
}

twaver.AlarmBox.prototype.setAlarmElementMapping = function (alarmElementMapping) {
/// <summary>
/// 	设置告警-网元映射的对象，这个对象用于管理所有的网元和告警的对应关系，它决定了告警显示在哪些网元上
/// </summary>
/// <param name="alarmElementMapping" type="twaver.AlarmElementMapping">告警-网元映射的对象</param>
}

twaver.AlarmBox.prototype.setRemoveAlarmWhenAlarmIsCleared = function (removeAlarmWhenAlarmIsCleared) {
/// <summary>
/// 	设置当告警的状态为cleared时是否需要删除告警
/// </summary>
/// <param name="removeAlarmWhenAlarmIsCleared" type="Boolean">true为删除告警，false不删除告警</param>
/// <returns type="String"></returns>
}

twaver.AlarmBox.prototype.setRemoveAlarmWhenElementIsRemoved = function (v) {
/// <summary>
/// 	设置当删除网元时，是否删除所有发生在这个网元上的告警对象
/// </summary>
/// <param name="v" type="Boolean">true为删除所有的告警，false为不删除</param>
}


twaver.animate.AnimateCenterLocation = function (objects, newValues, finishFunction) {
/// <summary>
/// 	以动画效果更改一批网元的中心位置
/// </summary>
/// <param name="objects" type="twaver.List">需要更改中心位置的网元节点集合</param>
/// <param name="newValues" type="twaver.List">网元节点新中心位置集合</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateCenterLocation"></returns>
}

twaver.animate.AnimateCenterLocation.prototype = new twaver.animate.AnimateProperty()


twaver.animate.AnimateLocation = function (objects, newValues, finishFunction) {
/// <summary>
/// 	以动画效果更改一批网元的位置
/// </summary>
/// <param name="objects" type="twaver.List">需要更改位置的网元节点集合</param>
/// <param name="newValues" type="twaver.List">网元节点新位置集合</param>
/// <param name="finishFunction" type="Function">回调函数，动画结束后执行的动作，可选，默认值为null</param>
/// <returns type="twaver.animate.AnimateLocation"></returns>
}

twaver.animate.AnimateLocation.prototype = new twaver.animate.AnimateProperty()


twaver.canvas.AlarmAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	告警附件，用于在拓扑上显示网元的新发告警信息，一般显示为包含告警级别和数量的冒泡信息，默认告警冒泡附件应该显示在最上层，以免某个网元的告警信息被其他网元覆盖
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.AlarmAttachment"></returns>
}

twaver.canvas.AlarmAttachment.prototype = new twaver.canvas.BasicAttachment()


twaver.canvas.GridUI = function (network, element) {
/// <summary>
/// 	网格对应的视图对象，网格是由grid.row.count样式属性指定的行数和grid.column.count样式属性指定的列数构成的表格，其他网元可以填充到其网格中
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑视图</param>
/// <param name="element" type="twaver.Grid">网格</param>
/// <returns type="twaver.canvas.GridUI"></returns>
}

twaver.canvas.GridUI.prototype = new twaver.canvas.NodeUI()

twaver.canvas.GridUI.prototype.drawGridBody = function (ctx) {
/// <summary>
/// 	画网格内容
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}


twaver.canvas.GroupUI = function (network, element) {
/// <summary>
/// 	组对应的视图对象，组有合并和展开两种状态，合并时，组的孩子不可见；展开时，孩子可见
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑对象</param>
/// <param name="element" type="twaver.Group">组网元</param>
/// <returns type="twaver.canvas.GroupUI"></returns>
}

twaver.canvas.GroupUI.prototype = new twaver.canvas.NodeUI()

twaver.canvas.GroupUI.prototype.drawExpandedGroup = function (ctx) {
/// <summary>
/// 	画展开后的组，用group.shape样式属性定义的形状画出矢量图形
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.canvas.GroupUI.prototype.getChildrenRects = function () {
/// <summary>
/// 	获取所有孩子的区域
/// </summary>
/// <returns type="twaver.List">返回所有孩子的区域</returns>
}


twaver.canvas.interaction.CreateShapeLinkInteraction = function (network, typeOrLinkFunction) {
/// <summary>
/// 	创建折线交互处理器，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点，可以用Network#setCreateShapeLinkInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrLinkFunction" type="Object">折线类型或者折线生成器方法，可选，默认值为twaver.ShapeLink</param>
/// <returns type="twaver.network.interaction.CreateShapeLinkInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeLinkInteraction(network, twaver.ShapeLink),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeLinkInteraction(network,
/// 	    function (fromNode, toNode, points) {
/// 	        var link = new twaver.ShapeLink();
/// 	        link.setFromNode(fromNode);
/// 	        link.setToNode(toNode);
/// 	        link.setStyle('link.color', 'red');
/// 	        if(points){
/// 	            link.setPoints(points);
/// 	        }
/// 	        return link;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.canvas.interaction.CreateShapeLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


twaver.canvas.LabelAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	标签附件，用于显示网元名称
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.LabelAttachment"></returns>
}

twaver.canvas.LabelAttachment.prototype = new twaver.canvas.BasicAttachment()

twaver.canvas.LabelAttachment.prototype.getLabel = function () {
/// <summary>
/// 	获取标签文本
/// </summary>
/// <returns type="String">返回标签文本</returns>
}


twaver.canvas.LinkHandlerAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	捆绑连线的标签附件，用于显示多条连线捆绑后的标签
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.LinkHandlerAttachment"></returns>
}

twaver.canvas.LinkHandlerAttachment.prototype = new twaver.canvas.BasicAttachment()


twaver.canvas.Overview = function (network) {
/// <summary>
/// 	创建和Network绑定的鹰眼视图，鹰眼是Network的缩略图，能通过鹰眼导航Network。鹰眼支持各种操作：
/// 	单击：将Network的视图中心导航到指定坐标点
/// 	双击：将Network的缩放级别还原为1
/// 	按着CTRL键框选：将Network缩放并平移到指定区域
/// </summary>
/// <param name="network" type="twaver.network.Network">和Overview绑定的Network</param>
/// <returns type="twaver.network.Overview"></returns>
/// <example>
/// 	var overview = new twaver.network.Overview(network);
/// 	overview.adjustBounds({x:0, y:0, width:200, height:200});
/// </example>
}

twaver.canvas.Overview.prototype = new twaver.controls.ControlBase()

twaver.canvas.Overview.prototype.centerNetwork = function (point, animate) {
/// <summary>
/// 	将Network的视图中心点滚动到指定的相对于Overview的坐标
/// </summary>
/// <param name="point" type="Object">相对于Overview的包含x和y属性的Object对象</param>
/// <param name="animate" type="Boolean">可选，如果为true，则有动画效果，否则没有，默认为false</param>
}

twaver.canvas.Overview.prototype.getFillColor = function () {
/// <summary>
/// 	获取Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
/// </summary>
/// <returns type="String">返回Overview的填充色</returns>
}

twaver.canvas.Overview.prototype.getLogicalPoint = function (e) {
/// <summary>
/// 	获取鼠标所在的逻辑坐标，包含x，y属性
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回鼠标所在的逻辑坐标，包含x，y属性</returns>
}

twaver.canvas.Overview.prototype.getMaxPackingHeight = function () {
/// <summary>
/// 	获取Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
/// </summary>
/// <returns type="Number">返回Overview最大伸缩高度</returns>
}

twaver.canvas.Overview.prototype.getMaxPackingWidth = function () {
/// <summary>
/// 	获取Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
/// </summary>
/// <returns type="Number">返回Overview最大伸缩宽度</returns>
}

twaver.canvas.Overview.prototype.getNetwork = function () {
/// <summary>
/// 	获取和Overview绑定的拓扑视图
/// </summary>
/// <returns type="twaver.network.Network">返回和Overview绑定的拓扑视图</returns>
}

twaver.canvas.Overview.prototype.getOutlineColor = function () {
/// <summary>
/// 	获取Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回Overview边框线条颜色</returns>
}

twaver.canvas.Overview.prototype.getOutlineWidth = function () {
/// <summary>
/// 	获取Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回Overview边框线条宽度</returns>
}

twaver.canvas.Overview.prototype.getPadding = function () {
/// <summary>
/// 	获取Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
/// </summary>
/// <returns type="Number">返回Overview边缘空白大小</returns>
}

twaver.canvas.Overview.prototype.getSelectColor = function () {
/// <summary>
/// 	获取Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
/// </summary>
/// <returns type="String">返回Overview框选时轮廓的线条颜色</returns>
}

twaver.canvas.Overview.prototype.getSelectWidth = function () {
/// <summary>
/// 	获取Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
/// </summary>
/// <returns type="Number">返回Overview框选时轮廓的线条宽度</returns>
}

twaver.canvas.Overview.prototype.isAnimate = function () {
/// <summary>
/// 	获取操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
/// </summary>
/// <returns type="Boolean">返回是否使用动画效果</returns>
}

twaver.canvas.Overview.prototype.setAnimate = function (v) {
/// <summary>
/// 	设置操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
/// </summary>
/// <param name="v" type="Boolean">是否使用动画效果</param>
}

twaver.canvas.Overview.prototype.setFillColor = function (v) {
/// <summary>
/// 	设置Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
/// </summary>
/// <param name="v" type="String">Overview的填充色</param>
}

twaver.canvas.Overview.prototype.setMaxPackingHeight = function (v) {
/// <summary>
/// 	设置Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
/// </summary>
/// <param name="v" type="Number">Overview最大伸缩高度</param>
}

twaver.canvas.Overview.prototype.setMaxPackingWidth = function (v) {
/// <summary>
/// 	设置Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview最大伸缩宽度</param>
}

twaver.canvas.Overview.prototype.setNetwork = function (network) {
/// <summary>
/// 	设置和Overview绑定的拓扑视图
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑视图</param>
}

twaver.canvas.Overview.prototype.setOutlineColor = function (v) {
/// <summary>
/// 	设置Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
/// </summary>
/// <param name="v" type="String">Overview边框线条颜色</param>
}

twaver.canvas.Overview.prototype.setOutlineWidth = function (v) {
/// <summary>
/// 	设置Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview边框线条宽度</param>
}

twaver.canvas.Overview.prototype.setPadding = function (v) {
/// <summary>
/// 	设置Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
/// </summary>
/// <param name="v" type="Number">Overview边缘空白大小</param>
}

twaver.canvas.Overview.prototype.setSelectColor = function (v) {
/// <summary>
/// 	设置Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
/// </summary>
/// <param name="v" type="String">Overview框选时轮廓的线条颜色</param>
}

twaver.canvas.Overview.prototype.setSelectWidth = function (v) {
/// <summary>
/// 	设置Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview框选时轮廓的线条宽度</param>
}


twaver.canvas.RotatableNodeUI = function (network, element) {
/// <summary>
/// 	构造可旋转节点的视图对象
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑视图</param>
/// <param name="element" type="twaver.RotatableNode">可旋转节点</param>
/// <returns type="twaver.canvas.RotatableNodeUI"></returns>
}

twaver.canvas.RotatableNodeUI.prototype = new twaver.canvas.NodeUI()


twaver.canvas.ShapeLinkUI = function (network, element) {
/// <summary>
/// 	折线对应的视图对象，由一组点连接而成
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑视图</param>
/// <param name="element" type="twaver.ShapeLink">折线</param>
/// <returns type="twaver.canvas.ShapeLinkUI"></returns>
}

twaver.canvas.ShapeLinkUI.prototype = new twaver.canvas.LinkUI()


twaver.canvas.ShapeNodeUI = function (network, element) {
/// <summary>
/// 	多边形网元对应的多边形网元视图，多边形由一组点组成，并将这些点依次连接而组成
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑</param>
/// <param name="element" type="twaver.ShapeNode">多边形网元</param>
/// <returns type="twaver.canvas.ShapeNodeUI"></returns>
}

twaver.canvas.ShapeNodeUI.prototype = new twaver.canvas.NodeUI()


twaver.charts.ChartPane = function (chart, title, legendOrientation, legendWidth) {
/// <summary>
/// 	Chart面板包括了Chart以及Chart的图例。用户使用这个面板组件可以更方便地来呈现Chart。
/// </summary>
/// <param name="chart" type="twaver.charts.ChartBase">绑定的Chart组件</param>
/// <param name="title" type="String">可选，Chart的标题</param>
/// <param name="legendOrientation" type="String">可选，Chart图例的显示方向，默认为bottom</param>
/// <param name="legendWidth" type="String">可选，Chart图例的宽度，默认为80px</param>
/// <returns type="twaver.charts.ChartPane"></returns>
}

twaver.charts.ChartPane.prototype = new twaver.controls.ControlBase()

twaver.charts.ChartPane.prototype.getChart = function () {
/// <summary>
/// 	获取和这个面板绑定的Chart对象
/// </summary>
/// <returns type="twaver.charts.ChartBase">和这个面板绑定的Chart对象</returns>
}

twaver.charts.ChartPane.prototype.getLegendOrientation = function () {
/// <summary>
/// 	获取Chart上图例的方向
/// 	Orientation的返回值为：
/// 	top：上方
/// 	right：右方
/// 	bottom：下方
/// 	left：左方
/// </summary>
/// <returns type="String">Chart上图例的方向</returns>
}

twaver.charts.ChartPane.prototype.getLegendPane = function () {
/// <summary>
/// 	获取图例的面板
/// </summary>
/// <returns type="twaver.charts.LegendPane">图例的面板</returns>
}

twaver.charts.ChartPane.prototype.getLegendWidth = function () {
/// <summary>
/// 	获取图例面板的宽度
/// </summary>
/// <returns type="Number">图例面板的宽度值</returns>
}

twaver.charts.ChartPane.prototype.getTitle = function () {
/// <summary>
/// 	获取Chart的标题
/// </summary>
/// <returns type="String">Chart的标题</returns>
}

twaver.charts.ChartPane.prototype.getTitleDiv = function () {
/// <summary>
/// 	获取Chart中包含标题的DIV
/// </summary>
/// <returns type="Object">标题的DIV</returns>
}

twaver.charts.ChartPane.prototype.getTitleHeight = function () {
/// <summary>
/// 	获取Chart标题的高度
/// </summary>
/// <returns type="Number">Chart标题的高度</returns>
}

twaver.charts.ChartPane.prototype.getTitleHorizontalAlign = function () {
/// <summary>
/// 	获取标题的水平对齐方式。水平对齐方式的可选值为：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// </summary>
/// <returns type="String">标题的水平对齐方式，默认为center</returns>
}

twaver.charts.ChartPane.prototype.setLegendOrientation = function (value) {
/// <summary>
/// 	设置Chart图例的显示方向，方向的可选值为：
/// 	top：上方
/// 	right：右方
/// 	bottom：下方
/// 	left：左方
/// </summary>
/// <param name="value" type="String">Chart图例的显示方向</param>
}

twaver.charts.ChartPane.prototype.setLegendWidth = function (v) {
/// <summary>
/// 	设置图例面板的宽度值
/// </summary>
/// <param name="v" type="Number">图例面板的宽度值</param>
}

twaver.charts.ChartPane.prototype.setTitle = function (v) {
/// <summary>
/// 	设置Chart的标题
/// </summary>
/// <param name="v" type="String"></param>
}

twaver.charts.ChartPane.prototype.setTitleHeight = function (v) {
/// <summary>
/// 	设置Chart标题的高度
/// </summary>
/// <param name="v" type="Number">Chart标题的高度</param>
}

twaver.charts.ChartPane.prototype.setTitleHorizontalAlign = function (v) {
/// <summary>
/// 	设置标题的水平对齐方式，对齐方式的可选值为
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// </summary>
/// <param name="v" type="String">标题的水平对齐方式，默认为center</param>
}


twaver.charts.LegendPane = function (chart) {
/// <summary>
/// 	图例面板是用于辅助Chart来显示的，它默认是显示在Chart的下方，显示Chart上所有的网元信息
/// </summary>
/// <param name="chart" type="twaver.charts.ChartBase">绑定的Chart对象</param>
/// <returns type="twaver.charts.LegendPane">图例面板本身</returns>
}

twaver.charts.LegendPane.prototype = new twaver.controls.ControlBase()

twaver.charts.LegendPane.prototype.getChart = function () {
/// <summary>
/// 	获取和这个图例面板绑定的Chart
/// </summary>
/// <returns type="twaver.charts.ChartBase">绑定的Chart</returns>
}

twaver.charts.LegendPane.prototype.getHiddenColor = function () {
/// <summary>
/// 	获取图例面板上被隐藏的网元颜色
/// </summary>
/// <returns type="String">被隐藏的网元颜色</returns>
}

twaver.charts.LegendPane.prototype.getIconHeight = function () {
/// <summary>
/// 	获取图例上网元图标的高度
/// </summary>
/// <returns type="Number">图例上网元图标的高度</returns>
}

twaver.charts.LegendPane.prototype.getIconRadius = function () {
/// <summary>
/// 	设置图例面板上图标的圆角弧度，默认为0
/// 	
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.LegendPane.prototype.getIconWidth = function () {
/// <summary>
/// 	获取图例上网元图标的宽度
/// </summary>
/// <returns type="Number">图例上网元图标的宽度</returns>
}

twaver.charts.LegendPane.prototype.getOrientation = function () {
/// <summary>
/// 	获取图例面板显示实现的方向，默认为水平显示。方向的可选值为：
/// 	'horizontal'：水平
/// 	'vertical'：垂直
/// </summary>
/// <returns type="String">图例面板显示实现的方向</returns>
}

twaver.charts.LegendPane.prototype.getRowHeight = function () {
/// <summary>
/// 	获取图例面板的行高
/// </summary>
/// <returns type="Number">图例面板的行高</returns>
}

twaver.charts.LegendPane.prototype.getSelectBackgroundColor = function () {
/// <summary>
/// 	获取选中网元时图例对于元素的背景色
/// </summary>
/// <returns type="String">选中网元时图例对于元素的背景色</returns>
}

twaver.charts.LegendPane.prototype.getSelectForegroundColor = function () {
/// <summary>
/// 	获取选中网元时图例对于元素的前景色
/// </summary>
/// <returns type="String">选中网元时图例对于元素的前景色</returns>
}

twaver.charts.LegendPane.prototype.handleViewChange = function (e) {
/// <summary>
/// 	当图例面板上绑定的Chart更改时，会调用此方法，这个方法用于刷新图例面板
/// </summary>
/// <param name="e" type="Object">Chart视图的变化事件</param>
}

twaver.charts.LegendPane.prototype.isHidden = function (data) {
/// <summary>
/// 	获取图例面板上指定的网元是否隐藏
/// </summary>
/// <param name="data" type="twaver.Data">指定的网元</param>
/// <returns type="Boolean">true为隐藏，false不隐藏</returns>
}

twaver.charts.LegendPane.prototype.onLegendRendered = function (div, data) {
/// <summary>
/// 	当绘制图例面板时会调用此方法，此方法的默认实现为空。用户不需要调用此方法，但可以重载此方法执行自定义逻辑
/// </summary>
/// <param name="div" type="Object">包含图例上网元元素的面板</param>
/// <param name="data" type="twaver.Data">指定的图例上的网元元素</param>
}

twaver.charts.LegendPane.prototype.renderLegend = function (div, data) {
/// <summary>
/// 	在指定的div层上绘制指定数据的图例
/// </summary>
/// <param name="div" type="Object"></param>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
}

twaver.charts.LegendPane.prototype.setHiddenColor = function (v) {
/// <summary>
/// 	设置图例面板上被隐藏的网元颜色
/// </summary>
/// <param name="v" type="String">被隐藏的网元颜色</param>
}

twaver.charts.LegendPane.prototype.setIconHeight = function (v) {
/// <summary>
/// 	设置图例上网元图标的高度
/// </summary>
/// <param name="v" type="Number">图例上网元图标的高度</param>
}

twaver.charts.LegendPane.prototype.setIconRadius = function (v) {
/// <summary>
/// 	获取图例面板上图标的圆角弧度，默认为0
/// </summary>
/// <param name="v" type="Number"></param>
}

twaver.charts.LegendPane.prototype.setIconWidth = function (v) {
/// <summary>
/// 	设置图例上网元图标的宽度
/// </summary>
/// <param name="v" type="Number">图例上网元图标的宽度</param>
}

twaver.charts.LegendPane.prototype.setOrientation = function (v) {
/// <summary>
/// 	设置图例面板显示的方向，默认为水平显示。方向的可选值为：
/// 	'horizontal'：水平
/// 	'vertical'：垂直
/// 	
/// 	
/// </summary>
/// <param name="v" type="String">图例面板显示的方向</param>
}

twaver.charts.LegendPane.prototype.setRowHeight = function (v) {
/// <summary>
/// 	设置图例面板的行高
/// </summary>
/// <param name="v" type="Number">图例面板的行高</param>
}

twaver.charts.LegendPane.prototype.setSelectBackgroundColor = function (v) {
/// <summary>
/// 	设置选中网元时图例对于元素的背景色
/// </summary>
/// <param name="v" type="String">选中网元时图例对于元素的背景色</param>
}

twaver.charts.LegendPane.prototype.setSelectForegroundColor = function (v) {
/// <summary>
/// 	设置选中网元时图例对于元素的前景色
/// </summary>
/// <param name="v" type="String">选中网元时图例对于元素的前景色</param>
}


twaver.Column = function (id) {
/// <summary>
/// 	构造函数
/// 	列是一种基本元素，它是存在于列容器中的（ColumnBox）。列是用来显示表格或树表的基本元素。
/// </summary>
/// <param name="id" type="Object">ID为列的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型，为string或number类型时指的是列的ID，如果为Object类型，可以传入一个带表格列属性的对象，比如： var column = new twaver.Column({      width:100,     editable:true,      movable:true});</param>
/// <returns type="twaver.Column">列对象本身</returns>
}

twaver.Column.prototype = new twaver.Data()

twaver.Column.prototype.getEnumInfo = function () {
/// <summary>
/// 	获取编辑列时显示的内容。如果列中设置了多个值，编辑时会以combobox的样式来呈现。
/// 	例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']。
/// </summary>
/// <returns type="Object">编辑列时显示的内容</returns>
}

twaver.Column.prototype.getHorizontalAlign = function () {
/// <summary>
/// 	获取列的水平对齐方式。可选值：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的可以参考CSS中的text-align样式
/// </summary>
/// <returns type="String">水平对齐方式</returns>
}

twaver.Column.prototype.getPropertyName = function () {
/// <summary>
/// 	获取表格的列所对应的网元属性名
/// </summary>
/// <returns type="String">表格列所对应网元的属性名</returns>
}

twaver.Column.prototype.getPropertyType = function () {
/// <summary>
/// 	获取网元属性的类型。可选值有
/// 	'field'：网元的自身变量属性，
/// 	'accessor', 网元get/set方法的属性，
/// 	'style'：网元样式属性,
/// 	'client'：网元自定义属性
/// </summary>
/// <returns type="String">网元属性类型</returns>
}

twaver.Column.prototype.getSortDirection = function () {
/// <summary>
/// 	获取表格列排序的方向，默认为升序。可选值有：
/// 	'desc'：降序，
/// 	'asc'：升序
/// 	
/// </summary>
/// <returns type="String">排序的方向</returns>
}

twaver.Column.prototype.getSortFunction = function () {
/// <summary>
/// 	获取表格列排序的规则函数
/// </summary>
/// <returns type="Function">排序的函数</returns>
}

twaver.Column.prototype.getValue = function (data, view) {
/// <summary>
/// 	从Data中获取对应的表格列的值，TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">表格或树表格绑定的数据对象</param>
/// <param name="view" type="Object">表格或树表</param>
/// <returns type="Object">返回表格列的值</returns>
}

twaver.Column.prototype.getValueType = function () {
/// <summary>
/// 	获取表格列中值的类型。可选值有：
/// 	'string'：字符串类型，
/// 	'boolean'：布尔类型， 
/// 	'color'：颜色类型， 
/// 	'int'：整型，
/// 	'number'：数字类型
/// </summary>
/// <returns type="String">表格列中值的类型</returns>
}

twaver.Column.prototype.getWidth = function () {
/// <summary>
/// 	获取列的宽度
/// </summary>
/// <returns type="Number">列的宽度</returns>
}

twaver.Column.prototype.IColumn = function () {
/// <field type="Boolean">是否为列的标识</field>
}

twaver.Column.prototype.isEditable = function () {
/// <summary>
/// 	判断是否可编辑
/// </summary>
/// <returns type="Boolean">true为可编辑，false不可编辑</returns>
}

twaver.Column.prototype.isInnerText = function () {
/// <summary>
/// 	获取表格列内容是否为纯文本
/// </summary>
/// <returns type="Boolean">返回表格列内容是否为纯文本，默认为true</returns>
}

twaver.Column.prototype.isMovable = function () {
/// <summary>
/// 	判断是否可移动
/// </summary>
/// <returns type="String">true为可移动，false不可移动</returns>
}

twaver.Column.prototype.isResizable = function () {
/// <summary>
/// 	判断是否可改变大小
/// </summary>
/// <returns type="Boolean">true为可更改大小，false不可更改</returns>
}

twaver.Column.prototype.isSortable = function () {
/// <summary>
/// 	判断是否可排序
/// </summary>
/// <returns type="Boolean">true为可排序，false不可排序</returns>
}

twaver.Column.prototype.isVisible = function () {
/// <summary>
/// 	判断列是否可见
/// </summary>
/// <returns type="Boolean">true为可见，false不可见</returns>
}

twaver.Column.prototype.renderCell = function () {
/// <field type="Function">单元格的renderer</field>
}

twaver.Column.prototype.renderHeader = function () {
/// <field type="Function">表头的renderer</field>
}

twaver.Column.prototype.setEditable = function (v) {
/// <summary>
/// 	设置表格的列是否可编辑
/// </summary>
/// <param name="v" type="String">true为可编辑，false不可编辑</param>
}

twaver.Column.prototype.setEnumInfo = function (v) {
/// <summary>
/// 	设置编辑列时显示的内容。如果列中设置了多个值，编辑时会以combobox的样式来呈现。
/// 	例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']
/// </summary>
/// <param name="v" type="Object">编辑列时显示的内容</param>
}

twaver.Column.prototype.setHorizontalAlign = function (v) {
/// <summary>
/// 	设置列的水平对齐方式。可选值：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的可以参考CSS中的text-align样式
/// </summary>
/// <param name="v" type="String">水平对齐方式</param>
}

twaver.Column.prototype.setInnerText = function (v) {
/// <summary>
/// 	设置表格列内容是否为纯文本
/// </summary>
/// <param name="v" type="Boolean">表格列内容是否为纯文本</param>
}

twaver.Column.prototype.setMovable = function (v) {
/// <summary>
/// 	设置表格列是否可移动
/// </summary>
/// <param name="v" type="Boolean">true为可移动，false不可移动</param>
}

twaver.Column.prototype.setPropertyName = function (v) {
/// <summary>
/// 	设置表格列所对应网元的属性名。这里可以是网元自身的属性，样式属性或自定义的属性
/// </summary>
/// <param name="v" type="String">网元的属性名</param>
}

twaver.Column.prototype.setPropertyType = function (v) {
/// <summary>
/// 	设置网元属性的类型。可选值有
/// 	'field'：网元的自身变量属性，
/// 	'accessor', 网元get/set方法的属性，
/// 	'style'：网元样式属性,
/// 	'client'：网元自定义属性
/// </summary>
/// <param name="v" type="String">网元属性的类型</param>
}

twaver.Column.prototype.setResizable = function (v) {
/// <summary>
/// 	设置表格的列是否可改变大小
/// </summary>
/// <param name="v" type="Boolean">true为可改变大小，false不可改变</param>
}

twaver.Column.prototype.setSortable = function (v) {
/// <summary>
/// 	设置表格的列是否可排序
/// </summary>
/// <param name="v" type="Boolean">true为可以排序，false不可排序</param>
}

twaver.Column.prototype.setSortDirection = function (v) {
/// <summary>
/// 	设置排序的方向，默认为升序。可选值有：
/// 	'desc'：降序，
/// 	'asc'：升序
/// </summary>
/// <param name="v" type="String">排序的方向</param>
}

twaver.Column.prototype.setSortFunction = function (v) {
/// <summary>
/// 	设置表格列排序的规则函数
/// </summary>
/// <param name="v" type="Function">排序的函数</param>
}

twaver.Column.prototype.setValue = function (data, value, view) {
/// <summary>
/// 	设置table上的值回写到data中，TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">表格或树表格绑定的数据对象</param>
/// <param name="value" type="Object">表格列的值</param>
/// <param name="view" type="Object">表格或树表</param>
/// <returns type="twaver.Data"></returns>
}

twaver.Column.prototype.setValueType = function (v) {
/// <summary>
/// 	得到表格列中值的类型。可选值有：
/// 	'string'：字符串类型，
/// 	'boolean'：布尔类型， 
/// 	'color'：颜色类型， 
/// 	'int'：整型，
/// 	'number'：数字类型
/// </summary>
/// <param name="v" type="String">表格列中值的类型</param>
}

twaver.Column.prototype.setVisible = function (v) {
/// <summary>
/// 	设置表格的列是否可见
/// </summary>
/// <param name="v" type="String">true为可见，false不可见</param>
}

twaver.Column.prototype.setWidth = function (v) {
/// <summary>
/// 	设置表格列的宽度
/// </summary>
/// <param name="v" type="Boolean">列的宽度</param>
}


twaver.ColumnBox = function (name) {
/// <summary>
/// 	列容器，它继承于数据容器，是用于管理column（列）对象
/// </summary>
/// <param name="name" type="String">列容器的名称</param>
/// <returns type="twaver.ColumnBox">列容器对象</returns>
}

twaver.ColumnBox.prototype = new twaver.DataBox()


twaver.controls.Accordion = function () {
/// <summary>
/// 	构造函数
/// 	可折叠面板是TWaver提供的用于存储面板的控件，这种面板中可以存放多个DIV面板，并对存放的DIV面板进行折叠操作。
/// 	可折叠面板中的DIV面板只能同时打开其中的一个DIV面板，当点击另外一个DIV的标题时，它会将当前打开的DIV合并，并展开点击的DIV。
/// 	可折叠面板使用DIV的标题来唯一标识其中的DIV对象。
/// 	有关Accordion的使用可以参开LinkEditorDemo
/// </summary>
/// <returns type="twaver.controls.Accordion">可折叠面板对象本身</returns>
}

twaver.controls.Accordion.prototype = new twaver.controls.ControlBase()

twaver.controls.Accordion.prototype.add = function (title, content) {
/// <summary>
/// 	添加指定的内容面板到可折叠面板中
/// </summary>
/// <param name="title" type="String">指定内容面板的标题</param>
/// <param name="content" type="Object">指定的内容面板</param>
}

twaver.controls.Accordion.prototype.clear = function () {
/// <summary>
/// 	清空折叠面板中所有的DIV
/// </summary>
}

twaver.controls.Accordion.prototype.collapse = function () {
/// <summary>
/// 	合并当前的面板
/// </summary>
}

twaver.controls.Accordion.prototype.expand = function (title) {
/// <summary>
/// 	展开指定标题的面板
/// </summary>
/// <param name="title" type="String">指定面板的标题</param>
}

twaver.controls.Accordion.prototype.getBorderBottomColor = function () {
/// <summary>
/// 	获取可折叠面板中DIV面板边框底部的颜色，默认为twaver.Defaults.ACCORDION_BORDER_BOTTOM_COLOR
/// </summary>
/// <returns type="String">底部边框的颜色</returns>
}

twaver.controls.Accordion.prototype.getCollapseIcon = function () {
/// <summary>
/// 	获取面板合并时的图标，默认为twaver.Defaults.ACCORDION_COLLAPSE_ICON
/// </summary>
/// <returns type="String">面板合并时的图标</returns>
}

twaver.controls.Accordion.prototype.getCurrentTitle = function () {
/// <summary>
/// 	获取当前展开面板的标题
/// </summary>
/// <returns type="String">面板的标题</returns>
}

twaver.controls.Accordion.prototype.getExpandIcon = function () {
/// <summary>
/// 	获取面板展开时的图标，默认为twaver.Defaults.ACCORDION_EXPAND_ICON
/// </summary>
/// <returns type="String">面板展开时的图标</returns>
}

twaver.controls.Accordion.prototype.getIconPosition = function () {
/// <summary>
/// 	获取可折叠面板图标位置
/// </summary>
/// <returns type="String">返回可折叠面板图标位置</returns>
}

twaver.controls.Accordion.prototype.getTitleBackground = function () {
/// <summary>
/// 	获取DIV面板标题的背景色，默认为twaver.Defaults.ACCORDION_TITLE_BACKGROUND
/// </summary>
/// <returns type="String">标题的背景色</returns>
}

twaver.controls.Accordion.prototype.getTitleHeight = function () {
/// <summary>
/// 	获取DIV面板标题的高度，默认为 twaver.Defaults.ACCORDION_TITLE_HEIGHT
/// </summary>
/// <returns type="Number">标题的高度值</returns>
}

twaver.controls.Accordion.prototype.getTitles = function () {
/// <summary>
/// 	获取折叠面板中所有DIV面板的标题列表
/// </summary>
/// <returns type="twaver.List">面板标题的列表</returns>
}

twaver.controls.Accordion.prototype.handleMouseDown = function (e) {
/// <summary>
/// 	鼠标点击折叠面板时的处理函数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标点击事件</param>
}

twaver.controls.Accordion.prototype.onCollapsed = function (title) {
/// <summary>
/// 	合并面板时的处理函数，用户不需要自己调用此方法，但可以重载此方法实现自己的逻辑
/// </summary>
/// <param name="title" type="String">合并面板的标题</param>
}

twaver.controls.Accordion.prototype.onExpanded = function (title) {
/// <summary>
/// 	展开面板时的处理函数，用户不需要自己调用此方法，但可以重载此方法实现自己的逻辑
/// </summary>
/// <param name="title" type="String">展开面板的标题</param>
}

twaver.controls.Accordion.prototype.remove = function (title) {
/// <summary>
/// 	删除指定的面板
/// </summary>
/// <param name="title" type="String">指定面板的标题</param>
}

twaver.controls.Accordion.prototype.setBorderBottomColor = function (v) {
/// <summary>
/// 	设置可折叠面板中DIV面板边框底部的颜色，默认为twaver.Defaults.ACCORDION_BORDER_BOTTOM_COLOR
/// </summary>
/// <param name="v" type="String">底部边框的颜色</param>
}

twaver.controls.Accordion.prototype.setCollapseIcon = function (v) {
/// <summary>
/// 	设置面板合并时的图标，默认为twaver.Defaults.ACCORDION_COLLAPSE_ICON
/// </summary>
/// <param name="v" type="String">面板合并时的图标</param>
}

twaver.controls.Accordion.prototype.setExpandIcon = function (v) {
/// <summary>
/// 	设置面板展开时的图标，默认为twaver.Defaults.ACCORDION_EXPAND_ICON
/// </summary>
/// <param name="v" type="String">面板展开时的图标</param>
}

twaver.controls.Accordion.prototype.setIconPosition = function (v) {
/// <summary>
/// 	设置可折叠面板图标位置
/// </summary>
/// <param name="v" type="String">可折叠面板图标位置</param>
}

twaver.controls.Accordion.prototype.setTitleBackground = function (v) {
/// <summary>
/// 	设置DIV面板标题的背景色，默认为twaver.Defaults.ACCORDION_TITLE_BACKGROUND
/// </summary>
/// <param name="v" type="String">所有标题的背景色</param>
}

twaver.controls.Accordion.prototype.setTitleHeight = function (v) {
/// <summary>
/// 	设置DIV面板标题的高度，默认为 twaver.Defaults.ACCORDION_TITLE_HEIGHT
/// </summary>
/// <param name="v" type="Number">标题显示的高度</param>
}


twaver.controls.BorderPane = function (center, top, right, bottom, left) {
/// <summary>
/// 	它是一个采用边框布局的面板，分为上，下，左，右，中间五个区域，每个区域可以放置组件，DIV，ControlBase对象，可以设置各个区域所占的大小。中间区域采用的是填充的方式，也可以设置各个区域之间的间距
/// </summary>
/// <param name="center" type="Object">中间面板的对象，面板对象可以为DIV，也可以为ControlBase的类型</param>
/// <param name="top" type="Object">上面面板的对象，面板对象可以为DIV，也可以为ControlBase的类型</param>
/// <param name="right" type="Object">右边面板的对象，面板对象可以为DIV，也可以为ControlBase的类型</param>
/// <param name="bottom" type="Object">下面面板的对象，面板对象可以为DIV，也可以为ControlBase的类型</param>
/// <param name="left" type="Object">左边面板的对象，面板对象可以为DIV，也可以为ControlBase的类型</param>
/// <returns type="twaver.controls.BorderPane"></returns>
}

twaver.controls.BorderPane.prototype = new twaver.controls.ControlBase()

twaver.controls.BorderPane.prototype.getBottom = function () {
/// <summary>
/// 	获取边框面板中下面部分的面板
/// </summary>
/// <returns type="Object">边框面板中下面部分的面板</returns>
}

twaver.controls.BorderPane.prototype.getBottomHeight = function () {
/// <summary>
/// 	获取边框面板中下面部分面板的高度
/// </summary>
/// <returns type="Number">边框面板中下面部分面板的高度</returns>
}

twaver.controls.BorderPane.prototype.getCenter = function () {
/// <summary>
/// 	获取边框面板中中间部分的面板
/// </summary>
/// <returns type="Object">边框面板中中间部分的面板</returns>
}

twaver.controls.BorderPane.prototype.getHGap = function () {
/// <summary>
/// 	获取各个组件之间的水平间距
/// </summary>
/// <returns type="Number">各个组件之间的水平间距</returns>
}

twaver.controls.BorderPane.prototype.getLeft = function () {
/// <summary>
/// 	获取边框面板中左边部分的面板
/// </summary>
/// <returns type="Object">边框面板中左边部分的面板</returns>
}

twaver.controls.BorderPane.prototype.getLeftWidth = function () {
/// <summary>
/// 	获取边框面板中左边部分面板的宽度
/// </summary>
/// <returns type="Number">边框面板中左边部分面板的宽度</returns>
}

twaver.controls.BorderPane.prototype.getRight = function () {
/// <summary>
/// 	获取边框面板中右边部分的面板
/// </summary>
/// <returns type="Object">边框面板中右边部分的面板</returns>
}

twaver.controls.BorderPane.prototype.getRightWidth = function () {
/// <summary>
/// 	获取边框面板中右边部分面板的宽度
/// </summary>
/// <returns type="Number">边框面板中右边部分的宽度</returns>
}

twaver.controls.BorderPane.prototype.getTop = function () {
/// <summary>
/// 	获取边框面板中上边部分的面板
/// </summary>
/// <returns type="Object">边框面板中上边部分的面板</returns>
}

twaver.controls.BorderPane.prototype.getTopHeight = function () {
/// <summary>
/// 	获取边框面板中上边部分面板的高度
/// </summary>
/// <returns type="Number">边框面板中上边部分面板的高度</returns>
}

twaver.controls.BorderPane.prototype.getVGap = function () {
/// <summary>
/// 	获取各个组件之间的垂直间距
/// </summary>
/// <returns type="Number">各个组件之间的垂直间距</returns>
}

twaver.controls.BorderPane.prototype.setBottom = function (value) {
/// <summary>
/// 	设置边框面板中下面部分的面板
/// </summary>
/// <param name="value" type="Object">边框面板中下面部分的面板</param>
}

twaver.controls.BorderPane.prototype.setBottomHeight = function (v) {
/// <summary>
/// 	设置边框面板中下面部分面板的高度
/// </summary>
/// <param name="v" type="Number">边框面板中下面部分面板的高度</param>
}

twaver.controls.BorderPane.prototype.setCenter = function (value) {
/// <summary>
/// 	设置边框面板中中间部分的面板
/// </summary>
/// <param name="value" type="Object">边框面板中中间部分的面板</param>
}

twaver.controls.BorderPane.prototype.setHGap = function (v) {
/// <summary>
/// 	设置各个组件之间的水平间距
/// </summary>
/// <param name="v" type="Number">各个组件之间的水平间距</param>
}

twaver.controls.BorderPane.prototype.setLeft = function (value) {
/// <summary>
/// 	设置边框面板中左边部分的面板
/// </summary>
/// <param name="value" type="Object">边框面板中左边部分的面板</param>
}

twaver.controls.BorderPane.prototype.setLeftWidth = function (v) {
/// <summary>
/// 	设置边框面板中左边部分面板的宽度
/// </summary>
/// <param name="v" type="Number">边框面板中左边部分面板的宽度</param>
}

twaver.controls.BorderPane.prototype.setRight = function (value) {
/// <summary>
/// 	设置边框面板中右边部分的面板
/// </summary>
/// <param name="value" type="Object">边框面板中右边部分的面板</param>
}

twaver.controls.BorderPane.prototype.setRightWidth = function (v) {
/// <summary>
/// 	设置边框面板中右边部分面板的宽度
/// </summary>
/// <param name="v" type="Number">边框面板中右边部分面板的宽度</param>
}

twaver.controls.BorderPane.prototype.setTop = function (value) {
/// <summary>
/// 	设置边框面板中上边部分的面板
/// </summary>
/// <param name="value" type="Object">边框面板中上边部分的面板</param>
}

twaver.controls.BorderPane.prototype.setTopHeight = function (v) {
/// <summary>
/// 	设置边框面板中上边部分面板的高度
/// </summary>
/// <param name="v" type="Number">边框面板中上边部分面板的高度</param>
}

twaver.controls.BorderPane.prototype.setVGap = function (v) {
/// <summary>
/// 	设置各个组件之间的垂直间距
/// </summary>
/// <param name="v" type="Number">各个组件之间的垂直间距</param>
}


twaver.controls.SplitPane = function (firstView, nextView, orientation, position) {
/// <summary>
/// 	劈分面板是用于将一块面板劈分成两块的面板，两块面板所占的比例大小是由劈分条的位置来决定的，并且可以通过移动劈分条来动态改变这两块面板的大小。
/// 	劈分面板通过设置orientation来进行水平和垂直劈分
/// </summary>
/// <param name="firstView" type="Object">劈分面版的第一块面板，面板可以为DIV或ControlBase类型的对象</param>
/// <param name="nextView" type="Object">劈分面版的第二块面板，面板可以为DIV或ControlBase类型的对象</param>
/// <param name="orientation" type="String">劈分的方向，可以为'horizontal'或 'vertical'</param>
/// <param name="position" type="Number">劈分的百分比</param>
/// <returns type="twaver.controls.SplitPane"></returns>
}

twaver.controls.SplitPane.prototype = new twaver.controls.ControlBase()

twaver.controls.SplitPane.prototype.getDividerBackground = function () {
/// <summary>
/// 	设置劈分条的背景色，默认为twaver.Defaults.SPLITPANE_DIVIDER_BACKGROUND
/// </summary>
/// <returns type="String">劈分条的背景颜色值</returns>
}

twaver.controls.SplitPane.prototype.getDividerDiv = function () {
/// <summary>
/// 	获取劈分条的DIV
/// </summary>
/// <returns type="HTMLDivElement">劈分条的DIV</returns>
}

twaver.controls.SplitPane.prototype.getDividerOpacity = function () {
/// <summary>
/// 	设置劈分条的透明度，默认为twaver.Defaults.SPLITPANE_DIVIDER_OPACITY
/// </summary>
/// <returns type="Number">劈分条的透明度，透明度的值的范围为0-1</returns>
}

twaver.controls.SplitPane.prototype.getDividerWidth = function () {
/// <summary>
/// 	设置劈分条的宽度，默认为twaver.Defaults.SPLITPANE_DIVIDER_WIDTH
/// </summary>
/// <returns type="Number">劈分条的宽度</returns>
}

twaver.controls.SplitPane.prototype.getFirstView = function () {
/// <summary>
/// 	获取劈分面板中的第一块面板
/// </summary>
/// <returns type="Object">劈分面版的第一块面板，面板可以为DIV或ControlBase类型的对象</returns>
}

twaver.controls.SplitPane.prototype.getMaskBackground = function () {
/// <summary>
/// 	获取劈分面板中劈分条拖动时显示的颜色，默认为twaver.Defaults.SPLITPANE_MASK_BACKGROUND
/// </summary>
/// <returns type="String">拖动劈分条时的颜色值</returns>
}

twaver.controls.SplitPane.prototype.getNextView = function () {
/// <summary>
/// 	获取劈分面板中的第二块面板
/// </summary>
/// <returns type="Object">劈分面版的第二块面板，面板可以为DIV或ControlBase类型的对象</returns>
}

twaver.controls.SplitPane.prototype.getOrientation = function () {
/// <summary>
/// 	获取劈分面板的劈分方向，默认为twaver.Defaults.SPLITPANE_ORIENTATION
/// 	可选值有：
/// 	'vertical'：垂直，
/// 	'horizontal'：水平
/// </summary>
/// <returns type="String">劈分面板的劈分方向</returns>
}

twaver.controls.SplitPane.prototype.getPosition = function () {
/// <summary>
/// 	获取劈分条的位置，劈分条的位置决定了两块面板的大小。比如设置为0.7，那么第一块面板占70%，第二块占30%。默认为twaver.Defaults.SPLITPANE_POSITION
/// </summary>
/// <returns type="Number">劈分条的位置，取值范围0-1</returns>
}

twaver.controls.SplitPane.prototype.isDividerDraggable = function () {
/// <summary>
/// 	获取分隔条是否可拖拽
/// </summary>
/// <returns type="Boolean">返回分隔条是否可拖拽，默认问true</returns>
}

twaver.controls.SplitPane.prototype.setDividerBackground = function (v) {
/// <summary>
/// 	获取劈分条的背景色，默认为twaver.Defaults.SPLITPANE_DIVIDER_BACKGROUND
/// </summary>
/// <param name="v" type="String">劈分条的背景色</param>
}

twaver.controls.SplitPane.prototype.setDividerDraggable = function (v) {
/// <summary>
/// 	设置分隔条是否可拖拽
/// </summary>
/// <param name="v" type="Boolean">分隔条是否可拖拽</param>
}

twaver.controls.SplitPane.prototype.setDividerOpacity = function (v) {
/// <summary>
/// 	获取劈分条的透明度，默认为twaver.Defaults.SPLITPANE_DIVIDER_OPACITY
/// </summary>
/// <param name="v" type="Number">劈分条的透明度，透明度的值为0-1</param>
}

twaver.controls.SplitPane.prototype.setDividerWidth = function (v) {
/// <summary>
/// 	设置劈分条的宽度，默认为twaver.Defaults.SPLITPANE_DIVIDER_WIDTH
/// </summary>
/// <param name="v" type="Number">劈分条的宽度</param>
}

twaver.controls.SplitPane.prototype.setFirstView = function (value) {
/// <summary>
/// 	设置劈分面板中的第一块面板
/// </summary>
/// <param name="value" type="Object">劈分面版的第一块面板，面板可以为DIV或ControlBase类型的对象</param>
}

twaver.controls.SplitPane.prototype.setMaskBackground = function (v) {
/// <summary>
/// 	设置劈分面板中劈分条拖动时显示的颜色，默认为twaver.Defaults.SPLITPANE_MASK_BACKGROUND
/// </summary>
/// <param name="v" type="String">拖到劈分条时的颜色值</param>
}

twaver.controls.SplitPane.prototype.setNextView = function (value) {
/// <summary>
/// 	设置劈分面板中的第二块面板
/// </summary>
/// <param name="value" type="Object">劈分面版的第二块面板，面板可以为DIV或ControlBase类型的对象</param>
}

twaver.controls.SplitPane.prototype.setOrientation = function (v) {
/// <summary>
/// 	设置劈分面板的劈分方向，默认为twaver.Defaults.SPLITPANE_ORIENTATION
/// 	可选值有：
/// 	'vertical'：垂直，
/// 	'horizontal'：水平
/// </summary>
/// <param name="v" type="String">劈分面板的劈分方向</param>
}

twaver.controls.SplitPane.prototype.setPosition = function (value) {
/// <summary>
/// 	设置劈分条的位置，劈分条的位置决定了两块面板的大小。比如设置为0.7，那么第一块面板占70%，第二块占30%。默认为twaver.Defaults.SPLITPANE_POSITION
/// </summary>
/// <param name="value" type="Number">劈分条的位置，取值范围0-1</param>
}


twaver.controls.TableHeader = function (table) {
/// <summary>
/// 	这个类用于管理表头
/// </summary>
/// <param name="table" type="twaver.controls.Table">指定的表格对象</param>
/// <returns type="twaver.controls.TableHeader"></returns>
}

twaver.controls.TableHeader.prototype = new twaver.controls.ControlBase()

twaver.controls.TableHeader.prototype.getColumnLineColor = function () {
/// <summary>
/// 	设置表头上列的线的颜色，默认为twaver.Defaults.TABLEHEADER_COLUMN_LINE_COLOR
/// </summary>
/// <returns type="String">表头上列的线的颜色</returns>
}

twaver.controls.TableHeader.prototype.getHeight = function () {
/// <summary>
/// 	设置表头的高度，默认为twaver.Defaults.TABLEHEADER_HEIGHT
/// </summary>
/// <returns type="Number">表头的高度</returns>
}

twaver.controls.TableHeader.prototype.getInsertBackground = function () {
/// <summary>
/// 	获取移动表头的某一列，将其插入表头列时线的颜色，默认为twaver.Defaults.TABLEHEADER_INSERT_BACKGROUND
/// </summary>
/// <returns type="String">移动表头的某一列，将其插入表头列时线的颜色</returns>
}

twaver.controls.TableHeader.prototype.getMoveBackground = function () {
/// <summary>
/// 	获取移动表头的某一列时这一列的背景色，默认为twaver.Defaults.TABLEHEADER_MOVE_BACKGROUND
/// </summary>
/// <returns type="String">移动表头的某一列时这一列的背景色</returns>
}

twaver.controls.TableHeader.prototype.getResizeTolerance = function () {
/// <summary>
/// 	获取更改表头列大小时鼠标移至表头列时的公差，默认为twaver.Defaults.TABLEHEADER_RESIZE_TOLERANCE
/// 	比如设置为5，也就是当鼠标到靠近表头上的分割线5个像素之内，都能改变表头的列的大小
/// </summary>
/// <returns type="Number">鼠标移至表头列更改表头列大小时的公差</returns>
}

twaver.controls.TableHeader.prototype.getRootDiv = function () {
/// <summary>
/// 	获取表头对象的根DIV，这个DIV用于存放所有的表头
/// </summary>
/// <returns type="HTMLDivElement">表头上的根DIV</returns>
}

twaver.controls.TableHeader.prototype.getSortAscIcon = function () {
/// <summary>
/// 	获取升序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_ASC_ICON
/// </summary>
/// <returns type="String">升序排序时表头上显示的图标</returns>
}

twaver.controls.TableHeader.prototype.getSortDescIcon = function () {
/// <summary>
/// 	获取降序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_DESC_ICON
/// </summary>
/// <returns type="String">降序排序时表头上显示的图标</returns>
}

twaver.controls.TableHeader.prototype.getSortIconPosition = function () {
/// <summary>
/// 	获取排序时，图标显示的位置。默认为 twaver.Defaults.TABLEHEADER_SORT_ICON_POSITION。比如设置为 '70% 50%'，那么图标显示的位置为横向在表头列上70%的位置，纵向在表头上50%的位置
/// </summary>
/// <returns type="String">图标显示的位置</returns>
}

twaver.controls.TableHeader.prototype.handleColumnBoxChange = function (e) {
/// <summary>
/// 	ColumnBox里列发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ColumnBox里列的变化事件</param>
}

twaver.controls.TableHeader.prototype.handleColumnHierarchyChange = function (e) {
/// <summary>
/// 	ColumnBox里列的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ColumnBox里列的顺序发生变化事件</param>
}

twaver.controls.TableHeader.prototype.handleColumnPropertyChange = function (e) {
/// <summary>
/// 	ColumnBox里列的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ColumnBox里列的属性发生变化的事件</param>
}

twaver.controls.TableHeader.prototype.invalidateDisplay = function () {
/// <summary>
/// 	当组件属性更改后，须调用此方法，让组件重画
/// </summary>
}

twaver.controls.TableHeader.prototype.invalidateScroll = function () {
/// <summary>
/// 	当拖动表格的滚动条时，须调用此方法，让组件重画
/// </summary>
}

twaver.controls.TableHeader.prototype.onColumnRendered = function (div, column) {
/// <summary>
/// 	当调用renderColumn时，会调用此方法，用户不需要直接调用此方法，但可以重载此方法来实现自己的逻辑
/// </summary>
/// <param name="div" type="HTMLDivElement">包含column的DIV对象</param>
/// <param name="column" type="twaver.Column">指定的列对象</param>
}

twaver.controls.TableHeader.prototype.renderColumn = function (div, column) {
/// <summary>
/// 	绘制表头的列
/// </summary>
/// <param name="div" type="HTMLDivElement">包含column的DIV对象</param>
/// <param name="column" type="twaver.Column">指定的列对象</param>
}

twaver.controls.TableHeader.prototype.setColumnLineColor = function (v) {
/// <summary>
/// 	设置表头上列的线的颜色，默认为twaver.Defaults.TABLEHEADER_COLUMN_LINE_COLOR
/// </summary>
/// <param name="v" type="String">表头上列的线的颜色</param>
}

twaver.controls.TableHeader.prototype.setHeight = function (v) {
/// <summary>
/// 	设置表头的高度，默认为twaver.Defaults.TABLEHEADER_HEIGHT
/// </summary>
/// <param name="v" type="Number">表头的高度</param>
}

twaver.controls.TableHeader.prototype.setInsertBackground = function (v) {
/// <summary>
/// 	设置移动表头的列时，将其插入表头列时线的颜色，默认为twaver.Defaults.TABLEHEADER_INSERT_BACKGROUND
/// </summary>
/// <param name="v" type="String">移动表头的列，将其插入表头列时线的颜色</param>
}

twaver.controls.TableHeader.prototype.setMoveBackground = function (v) {
/// <summary>
/// 	设置移动表头时的背景色，默认为twaver.Defaults.TABLEHEADER_MOVE_BACKGROUND
/// </summary>
/// <param name="v" type="String">移动表头时的背景色</param>
}

twaver.controls.TableHeader.prototype.setResizeTolerance = function (v) {
/// <summary>
/// 	设置更改表头列大小时鼠标移至表头列时的公差，默认为twaver.Defaults.TABLEHEADER_RESIZE_TOLERANCE
/// 	比如设置为5，也就是当鼠标移到表头列上，容差在5个像素之内，都能更改表头列的大小
/// </summary>
/// <param name="v" type="Number">当鼠标靠近表头中的分隔条多少像素时即可以更改表头中列的列宽。</param>
}

twaver.controls.TableHeader.prototype.setSortAscIcon = function (v) {
/// <summary>
/// 	设置升序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_ASC_ICON
/// </summary>
/// <param name="v" type="String">升序排序时表头上显示的图标</param>
}

twaver.controls.TableHeader.prototype.setSortDescIcon = function (v) {
/// <summary>
/// 	获取降序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_DESC_ICON
/// </summary>
/// <param name="v" type="String">降序排序时表头上显示的图标</param>
}

twaver.controls.TableHeader.prototype.setSortIconPosition = function (v) {
/// <summary>
/// 	设置排序时，图标显示的位置。默认为 twaver.Defaults.TABLEHEADER_SORT_ICON_POSITION。比如设置为 '70% 50%'，那么图标显示的位置为横向在表头列上70%的位置，纵向在表头上50%的位置
/// </summary>
/// <param name="v" type="String">图标显示的位置</param>
}

twaver.controls.TableHeader.prototype.validateDisplay = function () {
/// <summary>
/// 	重画组件，调用validate方法后，此方法会被调
/// </summary>
}


twaver.controls.TablePane = function (table, tableHeader) {
/// <summary>
/// 	表格面板，它是用于保存表格的一种面板，表格面板中包含了表格体和表头，即使在创建表格面板时不传入表头，TWaver也会自动为表格体创建一个默认的表头
/// </summary>
/// <param name="table" type="twaver.controls.Table">指定表格对象</param>
/// <param name="tableHeader" type="twaver.controls.TableHeader">可选，如果为空时，TWaver会创建一个默认的表头</param>
/// <returns type="twaver.controls.TablePane"></returns>
}

twaver.controls.TablePane.prototype = new twaver.controls.ControlBase()

twaver.controls.TablePane.prototype.getTable = function () {
/// <summary>
/// 	获取表格面板中的表格体对象
/// </summary>
/// <returns type="twaver.controls.Table"></returns>
}

twaver.controls.TablePane.prototype.getTableHeader = function () {
/// <summary>
/// 	获取表格面板中的表头对象
/// </summary>
/// <returns type="twaver.controls.TableHeader"></returns>
}


twaver.controls.TabPane = function () {
/// <summary>
/// 	选项卡面板是一种视图组件，它是和选项卡容器绑定的，用于显示选项卡容器中的选项卡元素。
/// 	例如：
/// 	var tabPane = new TabPane();
/// 	this.tabPane.setTabRadius(8);
/// 	this.tabPane.setTabGap(5);
/// 	this.tabPane.getTabBox().add(tab1);
/// 	this.tabPane.getTabBox().add(tab2);
/// </summary>
/// <returns type="twaver.controls.TabPane">创建选项卡面板</returns>
}

twaver.controls.TabPane.prototype = new twaver.controls.ControlBase()

twaver.controls.TabPane.prototype.getCloseIcon = function () {
/// <summary>
/// 	获取选项卡上关闭的图标。默认为twaver.Defaults.TABPANE_CLOSE_ICON
/// </summary>
/// <returns type="String">选项卡上关闭的图标</returns>
}

twaver.controls.TabPane.prototype.getContentDiv = function () {
/// <summary>
/// 	获取内容DIV，它是用于存放选项卡上的视图组件
/// </summary>
/// <returns type="HTMLDivElement">选项卡面板中的内容DIV</returns>
}

twaver.controls.TabPane.prototype.getCurrentTab = function () {
/// <summary>
/// 	获取当前的选项卡，当前选项卡为选项卡容器中最后一个选中的数据
/// </summary>
/// <returns type="twaver.Tab">选项卡数据</returns>
}

twaver.controls.TabPane.prototype.getCurrentView = function () {
/// <summary>
/// 	获取当前的选项卡视图，当前选项卡视图为选项卡容器中最后一个选中的数据的视图组件
/// </summary>
/// <returns type="Object">当前的选项卡视图，选项卡视图为DIV或ControlBase类型的对象</returns>
}

twaver.controls.TabPane.prototype.getDisabledColor = function () {
/// <summary>
/// 	获取选项卡不可用时的颜色值，默认为twaver.Defaults.TABPANE_DISABLED_COLOR
/// </summary>
/// <returns type="String">选项卡不可用时的颜色值</returns>
}

twaver.controls.TabPane.prototype.getHorizontalAlign = function () {
/// <summary>
/// 	获取选项卡上文字的水平对齐方式，默认为
/// 	twaver.Defaults.TABPANE_HORIZONTAL_ALIGN
/// 	文字的对齐方式可选值为：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// 	
/// </summary>
/// <returns type="String">选项卡上文字的水平对齐方式</returns>
}

twaver.controls.TabPane.prototype.getInsertBackground = function () {
/// <summary>
/// 	获取在移动选项卡并将其插入选项卡面板时线的颜色，默认为twaver.Defaults.TABPANE_INSERT_BACKGROUND
/// 	
/// </summary>
/// <returns type="String">插入选项卡时线的颜色</returns>
}

twaver.controls.TabPane.prototype.getMoveBackground = function () {
/// <summary>
/// 	设置移动某一选项卡时该选项卡的背景色，默认为twaver.Defaults.TABPANE_MOVE_BACKGROUND
/// </summary>
/// <returns type="String">移动某一选项卡时该选项卡的背景色</returns>
}

twaver.controls.TabPane.prototype.getResizeTolerance = function () {
/// <summary>
/// 	获取当鼠标靠近选项卡的右边框多少像素时即可以更改表头中列的列宽，默认值为twaver.Defaults.TABPANE_TAB_ORIENTATION。比如鼠标没有移动到选项卡上，但是在这个公差范围值之内，那么鼠标也会变成改变大小的状态。
/// </summary>
/// <returns type="Number">当鼠标靠近选项卡的右边框多少像素时即可以更改表头中列的列宽</returns>
}

twaver.controls.TabPane.prototype.getSelectBackground = function () {
/// <summary>
/// 	获取选中的选项卡的背景颜色，默认为twaver.Defaults.TABPANE_SELECT_BACKGROUND
/// </summary>
/// <returns type="String">选中的选项卡的背景颜色</returns>
}

twaver.controls.TabPane.prototype.getTabBackground = function () {
/// <summary>
/// 	获取选项卡的背景色，默认为twaver.Defaults.TABPANE_TAB_BACKGROUND
/// </summary>
/// <returns type="String">选项卡的背景色</returns>
}

twaver.controls.TabPane.prototype.getTabBox = function () {
/// <summary>
/// 	获取选项卡数据容器
/// </summary>
/// <returns type="twaver.TabBox">选项卡数据容器</returns>
}

twaver.controls.TabPane.prototype.getTabDiv = function () {
/// <summary>
/// 	获取选项卡的DIV
/// </summary>
/// <returns type="Object">选项卡的DIV</returns>
}

twaver.controls.TabPane.prototype.getTabGap = function () {
/// <summary>
/// 	获取选项卡之间的间距，默认为twaver.Defaults.TABPANE_TAB_GAP
/// </summary>
/// <returns type="Number">选项卡之间的间距</returns>
}

twaver.controls.TabPane.prototype.getTabHeight = function () {
/// <summary>
/// 	获取选项卡的高度，默认为twaver.Defaults.TABPANE_TAB_HEIGHT
/// </summary>
/// <returns type="Number">选项卡的高度</returns>
}

twaver.controls.TabPane.prototype.getTabOrientation = function () {
/// <summary>
/// 	获取选项卡所处的位置，默认为twaver.Defaults.TABPANE_TAB_ORIENTATION
/// 	。可选值有：
/// 	'top'，'bottom'
/// </summary>
/// <returns type="String">选项卡所处的位置</returns>
}

twaver.controls.TabPane.prototype.getTabRadius = function () {
/// <summary>
/// 	获取选项卡的圆角半径，默认为twaver.Defaults.TABPANE_TAB_RADIUS
/// </summary>
/// <returns type="Number">选项卡的圆角半径</returns>
}

twaver.controls.TabPane.prototype.handleTabChange = function (e) {
/// <summary>
/// 	TabBox中的Tab发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="e" type="Object">TabBox中的Tab发生变化的事件</param>
}

twaver.controls.TabPane.prototype.invalidateTab = function (delay) {
/// <summary>
/// 	无效选项卡，在等待指定的毫秒数后刷新选项卡界面，当选项卡的属性发生更改后，须调用此方法，让选项卡重画
/// 	
/// </summary>
/// <param name="delay" type="Number">延迟刷新等待的毫秒数，可选，默认为twaver.Defaults.CALL_LATER_DELAY</param>
}

twaver.controls.TabPane.prototype.isSelectNextOnClose = function () {
/// <summary>
/// 	当关闭当前的选项卡时，是否选中下一个Tab页。默认为twaver.Defaults.TABPANE_SELECT_NEXT_ON_CLOSE
/// </summary>
/// <returns type="Boolean">true为选中下一个选项卡，否则为false</returns>
}

twaver.controls.TabPane.prototype.isSelectNextOnInVisible = function () {
/// <summary>
/// 	当前选项卡隐藏时是否自动选中下一个选项卡
/// </summary>
/// <returns type="Boolean">当前选项卡隐藏时是否自动选中下一个选项卡</returns>
}

twaver.controls.TabPane.prototype.onTabRendered = function (div, tab) {
/// <summary>
/// 	当调用renderTab时会调用此方法，用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="div" type="HTMLDivElement">包含选项卡的DIV</param>
/// <param name="tab" type="twaver.Tab">指定的选项卡</param>
}

twaver.controls.TabPane.prototype.onViewAdded = function (view) {
/// <summary>
/// 	当Tab上添加视图组件时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="view" type="Object">Tab的视图组件添加的事件</param>
}

twaver.controls.TabPane.prototype.onViewRemoved = function (view) {
/// <summary>
/// 	当Tab上删除视图组件时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="view" type="Object">Tab的视图组件删除的事件</param>
}

twaver.controls.TabPane.prototype.renderTab = function (div, tab) {
/// <summary>
/// 	绘制指定的选项卡，用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="div" type="HTMLDivElement">包含指定选项卡的DIV</param>
/// <param name="tab" type="twaver.Tab">指定的选项卡</param>
}

twaver.controls.TabPane.prototype.setCloseIcon = function (v) {
/// <summary>
/// 	设置选项卡上关闭的图标。默认为twaver.Defaults.TABPANE_CLOSE_ICON
/// </summary>
/// <param name="v" type="String">选项卡上关闭的图标</param>
}

twaver.controls.TabPane.prototype.setDisabledColor = function (v) {
/// <summary>
/// 	设置选项卡不可用时的颜色值，默认为twaver.Defaults.TABPANE_DISABLED_COLOR
/// </summary>
/// <param name="v" type="String">选项卡不可用时的颜色值</param>
}

twaver.controls.TabPane.prototype.setHorizontalAlign = function (v) {
/// <summary>
/// 	设置选项卡上文字的水平对齐方式，默认为
/// 	twaver.Defaults.TABPANE_HORIZONTAL_ALIGN
/// 	文字的对齐方式可选值为：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// </summary>
/// <param name="v" type="String">选项卡上文字的水平对齐方式</param>
}

twaver.controls.TabPane.prototype.setInsertBackground = function (v) {
/// <summary>
/// 	设置在移动选项卡并插入选项卡时线的颜色，默认为twaver.Defaults.TABPANE_INSERT_BACKGROUND
/// 	
/// </summary>
/// <param name="v" type="String">插入选项卡时线的颜色</param>
}

twaver.controls.TabPane.prototype.setMoveBackground = function (v) {
/// <summary>
/// 	设置移动某一选项卡时该选项卡的背景色，默认为twaver.Defaults.TABPANE_MOVE_BACKGROUND
/// </summary>
/// <param name="v" type="String">移动某一选项卡时该选项卡的背景色</param>
}

twaver.controls.TabPane.prototype.setResizeTolerance = function (v) {
/// <summary>
/// 	设置当鼠标靠近分隔条多少像素时可以改变列宽的像素数，默认值为twaver.Defaults.TABPANE_TAB_TOLERANCE。比如鼠标没有移动到选项卡上，但是在这个公差范围值之内，那么鼠标也会变成改变大小的状态。
/// </summary>
/// <param name="v" type="Number">当鼠标靠近分隔条多少像素时可以改变列宽的像素数</param>
}

twaver.controls.TabPane.prototype.setSelectBackground = function (v) {
/// <summary>
/// 	设置选中的选项卡的背景颜色，默认为twaver.Defaults.TABPANE_SELECT_BACKGROUND
/// </summary>
/// <param name="v" type="String">选中的选项卡的背景颜色</param>
}

twaver.controls.TabPane.prototype.setSelectNextOnClose = function (v) {
/// <summary>
/// 	当关闭当前的选项卡时，设置是否选中下一个Tab页。默认为twaver.Defaults.TABPANE_SELECT_NEXT_ON_CLOSE
/// </summary>
/// <param name="v" type="Boolean">true为选中下一个选项卡，否则为false</param>
}

twaver.controls.TabPane.prototype.setSelectNextOnInVisible = function (v) {
/// <summary>
/// 	设置当前选项卡隐藏时是否自动选中下一个选项卡
/// </summary>
/// <param name="v" type="Boolean">当前选项卡隐藏时是否自动选中下一个选项卡</param>
}

twaver.controls.TabPane.prototype.setTabBackground = function (v) {
/// <summary>
/// 	设置选项卡的背景色，默认为twaver.Defaults.TABPANE_TAB_BACKGROUND
/// </summary>
/// <param name="v" type="String">选项卡的背景色</param>
}

twaver.controls.TabPane.prototype.setTabGap = function (v) {
/// <summary>
/// 	获取选项卡之间的间距，默认为twaver.Defaults.TABPANE_TAB_GAP
/// </summary>
/// <param name="v" type="Number">选项卡之间的间距</param>
}

twaver.controls.TabPane.prototype.setTabHeight = function (v) {
/// <summary>
/// 	设置选项卡的高度，默认为twaver.Defaults.TABPANE_TAB_HEIGHT
/// </summary>
/// <param name="v" type="Number">选项卡的高度</param>
}

twaver.controls.TabPane.prototype.setTabOrientation = function (v) {
/// <summary>
/// 	设置选项卡所处的位置，默认为twaver.Defaults.TABPANE_TAB_ORIENTATION
/// 	。可选值有：
/// 	'top'，'bottom'
/// </summary>
/// <param name="v" type="String">选项卡所处的位置</param>
}

twaver.controls.TabPane.prototype.setTabRadius = function (v) {
/// <summary>
/// 	设置选项卡的圆角半径，默认为twaver.Defaults.TABPANE_TAB_RADIUS
/// </summary>
/// <param name="v" type="Number">选项卡的圆角半径</param>
}

twaver.controls.TabPane.prototype.validateTab = function () {
/// <summary>
/// 	重画Tab页，调用validate方法后，此方法会被调用
/// </summary>
}


twaver.controls.TitlePane = function (content, title, icon) {
/// <summary>
/// 	构造函数
/// 	它定义了一个带标题栏的面板，可以为标题栏设置显示的图标，文字，背景色，高度，以及文字的对齐方法
/// </summary>
/// <param name="content" type="Object">内容面板，可以是DIV或ControlBase类型的对象</param>
/// <param name="title" type="String">指定的标题</param>
/// <param name="icon" type="String">标题栏的图标</param>
/// <returns type="twaver.controls.TitlePane"></returns>
}

twaver.controls.TitlePane.prototype = new twaver.controls.ControlBase()

twaver.controls.TitlePane.prototype.getContent = function () {
/// <summary>
/// 	获取带标题面板中所包含的内容面板
/// </summary>
/// <returns type="Object">内容面板对象</returns>
}

twaver.controls.TitlePane.prototype.getIcon = function () {
/// <summary>
/// 	获取标题栏上显示的图标
/// </summary>
/// <returns type="String">标题栏上的图标</returns>
}

twaver.controls.TitlePane.prototype.getTitle = function () {
/// <summary>
/// 	获取标题栏上显示的标题名称
/// </summary>
/// <returns type="String">标题名称</returns>
}

twaver.controls.TitlePane.prototype.getTitleBackground = function () {
/// <summary>
/// 	获取标题的背景色。默认为twaver.Defaults.TITLEPANE_TITLE_BACKGROUND
/// </summary>
/// <returns type="String">标题的背景色</returns>
}

twaver.controls.TitlePane.prototype.getTitleDiv = function () {
/// <summary>
/// 	获取标题栏的DIV
/// </summary>
/// <returns type="HTMLDivElement">标题栏的DIV</returns>
}

twaver.controls.TitlePane.prototype.getTitleHeight = function () {
/// <summary>
/// 	获取标题栏的高度，默认为twaver.Defaults.TITLEPANE_TITLE_HEIGHT
/// </summary>
/// <returns type="Number">标题栏的高度</returns>
}

twaver.controls.TitlePane.prototype.getTitleHorizontalAlign = function () {
/// <summary>
/// 	获取标题的水平对齐方式，默认为twaver.Defaults.TITLEPANE_TITLE_HORIZONTAL_ALIGN
/// 	标题的对齐方式可选值为：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// </summary>
/// <returns type="String">标题的水平对齐方式</returns>
}

twaver.controls.TitlePane.prototype.setContent = function (value) {
/// <summary>
/// 	设置标题面板中所包含的内容面板
/// </summary>
/// <param name="value" type="Object">内容面板对象，可以为DIV或为ControlBase类型的对象</param>
}

twaver.controls.TitlePane.prototype.setIcon = function (v) {
/// <summary>
/// 	设置标题栏上显示的图标
/// </summary>
/// <param name="v" type="String">标题栏上的图标</param>
}

twaver.controls.TitlePane.prototype.setTitle = function (v) {
/// <summary>
/// 	设置标题栏上显示的标题名称
/// </summary>
/// <param name="v" type="String">标题名称</param>
}

twaver.controls.TitlePane.prototype.setTitleBackground = function (v) {
/// <summary>
/// 	设置标题的背景色。默认为twaver.Defaults.TITLEPANE_TITLE_BACKGROUND
/// </summary>
/// <param name="v" type="String">标题的背景色</param>
}

twaver.controls.TitlePane.prototype.setTitleHeight = function (v) {
/// <summary>
/// 	设置标题栏的高度，默认为twaver.Defaults.TITLEPANE_TITLE_HEIGHT
/// </summary>
/// <param name="v" type="Number">标题栏的高度</param>
}

twaver.controls.TitlePane.prototype.setTitleHorizontalAlign = function (v) {
/// <summary>
/// 	设置标题的水平对齐方式，默认为twaver.Defaults.TITLEPANE_TITLE_HORIZONTAL_ALIGN
/// 	标题的对齐方式可选值为：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// </summary>
/// <param name="v" type="String">标题的水平对齐方式</param>
}


twaver.controls.ViewBase = function () {
/// <summary>
/// 	视图基类，和数据容器（DataBox）关联，用于图形化展示数据容器中的数据
/// </summary>
/// <returns type="twaver.controls.ViewBase"></returns>
}

twaver.controls.ViewBase.prototype = new twaver.controls.ControlBase()

twaver.controls.ViewBase.prototype.addInteractionListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加交互事件监听器，用于监听用户各种操作
/// </summary>
/// <param name="listener" type="Function">回调函数</param>
/// <param name="scope" type="Object">可选，回调函数的作用域，默认为null，即全局</param>
/// <param name="ahead" type="Boolean">可选，是否将此监听放在最前面，默认为false</param>
/// <example>
/// 	viewBase.addInteractionListener(function (e) {
/// 	    console.log(e.kind, e.element);
/// 	});
/// 	
/// 	kind可以为下列值：
/// 	createElement 创建网元
/// 	clickElement 单击网元
/// 	doubleClickElement 双击网元 
/// 	clickBackground 单击背景
/// 	doubleClickBackground 双击背景
/// 	removeElement 删除网元
/// 	selectAll 选中所有网元
/// 	upSubNetwork 进入上一层子网
/// 	enterSubNetwork 进入子网
/// 	bundleLink 展开或合并连线捆绑
/// 	expandGroup 展开组
/// 	liveMoveStart 开始实时移动网元
/// 	liveMoveBetween 正在实时移动网元
/// 	liveMoveEnd 结束实时移动网元
/// 	lazyMoveStart 开始延迟移动网元
/// 	lazyMoveBetween 正在延迟移动网元
/// 	lazyMoveEnd 结束延迟移动网元
/// 	liveResizeStart 开始实时改变网元大小
/// 	liveResizeBetween 正在实时改变网元大小
/// 	liveResizeEnd 结束实时改变网元大小
/// 	lazyResizeStart 开始延迟改变网元大小
/// 	lazyResizeBetween 正在延迟改变网元大小
/// 	lazyResizeEnd 结束延迟改变网元大小
/// 	selectStart 开始框选
/// 	selectBetween 正在框选
/// 	selectEnd 结束框选
/// 	liveMovePointStart 开始移动ShapeLink或ShapeNode的点
/// 	liveMovePointBetween 正在移动ShapeLink或ShapeNode的点
/// 	liveMovePointEnd 结束移动ShapeLink或ShapeNode的点
/// </example>
}

twaver.controls.ViewBase.prototype.addViewListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加视图变化事件，用于在视图无效、刷新之前或刷新之后执行自定义动作
/// </summary>
/// <param name="listener" type="Function">回调函数</param>
/// <param name="scope" type="Object">可选，回调函数的作用域，默认为null，即全局</param>
/// <param name="ahead" type="Boolean">可选，是否将此监听放在最前面，默认为false</param>
/// <example>
/// 	viewBase.addViewListener(function (e) {
/// 	    console.log(e.kind);
/// 	});
/// 	kind可以为：
/// 	invalidate 无效视图
/// 	validateStart 刷新视图前
/// 	validateEnd 刷新视图后
/// </example>
}

twaver.controls.ViewBase.prototype.fireInteractionEvent = function (evt) {
/// <summary>
/// 	派发交互事件
/// </summary>
/// <param name="evt" type="Object">交互事件</param>
}

twaver.controls.ViewBase.prototype.fireViewEvent = function (evt) {
/// <summary>
/// 	当视图需要重画时，TWaver调用此方法派发视图变化事件
/// </summary>
/// <param name="evt" type="Object">视图变化事件</param>
}

twaver.controls.ViewBase.prototype.getIcon = function (data) {
/// <summary>
/// 	获取指定数据元的图标，默认返回data#getIcon
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="String">返回指定数据元的图标</returns>
}

twaver.controls.ViewBase.prototype.getLabel = function (data) {
/// <summary>
/// 	获取指定数据元的标签，默认返回Data#getName
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="String">返回指定数据元的标签</returns>
}

twaver.controls.ViewBase.prototype.getSelectColor = function (data) {
/// <summary>
/// 	获取指定数据元的选中颜色，默认值为twaver.Defaults.SELECT_COLOR
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="String">返回指定数据元的选中颜色</returns>
}

twaver.controls.ViewBase.prototype.getSelectionModel = function () {
/// <summary>
/// 	获取选择模型，如果ViewBase#isShareSelectionModel为true（默认值为true），则返回和ViewBase绑定的DataBox的SelectionModel，否则返回视图自己独立的SelectionModel
/// </summary>
/// <returns type="twaver.SelectionModel">返回选择模型</returns>
}

twaver.controls.ViewBase.prototype.getToolTip = function (data) {
/// <summary>
/// 	获取指定数据元的提示信息，默认返回Data#getToolTip
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="String">返回指定数据元的提示信息</returns>
}

twaver.controls.ViewBase.prototype.isFocusOnClick = function () {
/// <summary>
/// 	获取点击时是否让视图获得焦点
/// </summary>
/// <returns type="Boolean">返回点击时是否让视图获得焦点</returns>
}

twaver.controls.ViewBase.prototype.isSelectable = function (data) {
/// <summary>
/// 	判断指定数据元是否可以被选择，此方法包装了SelectionModel的isSelectable方法
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="Boolean">返回指定数据元是否可以被选择</returns>
}

twaver.controls.ViewBase.prototype.isSelected = function (data) {
/// <summary>
/// 	获取指定数据元是否已被选中
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="Boolean">返回指定数据元是否已被选中</returns>
}

twaver.controls.ViewBase.prototype.isShareSelectionModel = function () {
/// <summary>
/// 	获取是否和视图绑定的数据容器共享选择模型，默认为true
/// </summary>
/// <returns type="Boolean">返回是否和视图绑定的数据容器共享选择模型</returns>
}

twaver.controls.ViewBase.prototype.removeInteractionListener = function (listener, scope) {
/// <summary>
/// 	删除指定作用域的交互监听器，作用域必须和添加监听器时的作用域一致，相同的作用域的相同监听器只能成功添加一次
/// </summary>
/// <param name="listener" type="Function">交互监听器</param>
/// <param name="scope" type="Object">交互监听器的作用域，可选，默认为null，代表全局</param>
}

twaver.controls.ViewBase.prototype.removeSelection = function () {
/// <summary>
/// 	删除选中的网元
/// </summary>
/// <returns type="twaver.List">返回被删除的网元集合</returns>
}

twaver.controls.ViewBase.prototype.removeViewListener = function (listener, scope) {
/// <summary>
/// 	删除指定作用域的视图变化监听器，作用域必须和添加监听器时的作用域一致，相同的作用域的相同监听器只能成功添加一次
/// </summary>
/// <param name="listener" type="Function">视图变化监听器</param>
/// <param name="scope" type="Object">视图变化监听器的作用域，可选，默认为null，代表全局</param>
}

twaver.controls.ViewBase.prototype.selectAll = function () {
/// <summary>
/// 	选中所有网元
/// </summary>
/// <returns type="twaver.List">返回所有选中的网元</returns>
}

twaver.controls.ViewBase.prototype.setFocusOnClick = function (v) {
/// <summary>
/// 	设置点击时是否让Network获得焦点
/// </summary>
/// <param name="v" type="Boolean">点击时是否让Network获得焦点</param>
}

twaver.controls.ViewBase.prototype.setShareSelectionModel = function (shareSelectionModel) {
/// <summary>
/// 	设置是否和Network绑定的ElementBox共享选择模型，默认为true
/// </summary>
/// <param name="shareSelectionModel" type="Boolean">是否和Network绑定的ElementBox共享选择模型</param>
}


twaver.Element = function (id) {
/// <summary>
/// 	构造函数
/// 	网元是电信拓扑中一种最基本的数据，它继承于Data，存在于网元容器中，网元上可以添加告警信息。
/// 	
/// </summary>
/// <param name="id" type="Object">网元ID，用于唯一标识网元。如果为空，twaver会按照默认的规则给网元ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是网元的ID，如果为Object类型，可以传入一个带网元属性的对象，比如： var element = new twaver.Element({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.Element">网元对象本身</returns>
}

twaver.Element.prototype = new twaver.Data()

twaver.Element.prototype.deserializeStyleJson = function (serializer, json, styleProp) {
/// <summary>
/// 	反序列化JSON数据到指定的网元样式
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据</param>
/// <param name="styleProp" type="String">网元样式名</param>
}

twaver.Element.prototype.deserializeStyleXml = function (serializer, styleXML, styleProp) {
/// <summary>
/// 	反序列化XML数据到指定的网元样式
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="styleXML" type="String">XML数据</param>
/// <param name="styleProp" type="String">网元样式名</param>
}

twaver.Element.prototype.getAlarmState = function () {
/// <summary>
/// 	获取网元的告警状态对象，告警状态对象是用于存放网元上的所有告警信息
/// </summary>
/// <returns type="twaver.AlarmState">告警状态对象</returns>
}

twaver.Element.prototype.getCanvasUIClass = function () {
/// <summary>
/// 	获取网元的CanvasUI类名称, twaver.canvas.Network用此类实例化网元对应的UI实例
/// </summary>
/// <returns type="String">返回网元的CanvasUI类名称</returns>
}

twaver.Element.prototype.getElementUIClass = function () {
/// <summary>
/// 	获取网元UI的类名，网元UI用于在network组件上绘制这个网元。TWaver会用返回的这个UI类去创建UI对象
/// </summary>
/// <returns type="String">网元UI的类名</returns>
}

twaver.Element.prototype.getLayerId = function () {
/// <summary>
/// 	获取这个网元所在的图层ID。如果为空，则这个网元处于默认的图层上
/// </summary>
/// <returns type="Object">图层ID</returns>
}

twaver.Element.prototype.getStyle = function (styleProp, returnDefaultIfNull) {
/// <summary>
/// 	通过样式名称去获取这个网元样式的值
/// </summary>
/// <param name="styleProp" type="String">网元样式名</param>
/// <param name="returnDefaultIfNull" type="String">当属性为空时，是否需要返回默认的值。默认值为true</param>
/// <returns type="Object">网元的样式值</returns>
}

twaver.Element.prototype.getStyleProperties = function () {
/// <summary>
/// 	获取网元上所有的样式属性集合
/// </summary>
/// <returns type="twaver.List">网元上所有样式属性名的集合</returns>
}

twaver.Element.prototype.getVectorUIClass = function () {
/// <summary>
/// 	获取网元矢量UI的类名，网元UI用于在network组件上绘制这个网元。TWaver会用返回的这个UI类去创建UI对象
/// </summary>
/// <returns type="twaver.vector.ElementUI">矢量UI类型</returns>
}

twaver.Element.prototype.IElement = function () {
/// <field type="Boolean">是否为网元的标识，默认值为true</field>
}

twaver.Element.prototype.isAdjustedToBottom = function () {
/// <summary>
/// 	网元是否需要置底
/// </summary>
/// <returns type="Boolean">true为调整置底，否则为false</returns>
}

twaver.Element.prototype.IStyle = function () {
/// <field type="Boolean">判断这个网元是否具有样式的标识，默认为true。</field>
}

twaver.Element.prototype.onStyleChanged = function (styleProp, oldValue, newValue) {
/// <summary>
/// 	当更改网元的样式时，回调此方法
/// </summary>
/// <param name="styleProp" type="String">网元样式名</param>
/// <param name="oldValue" type="String">网元样式原值</param>
/// <param name="newValue" type="String">网元样式新值</param>
}

twaver.Element.prototype.s = function (style, value) {
/// <summary>
/// 	如果只有一个参数，则返回指定样式的值，相当于getStyle；否则设置样式，相当于setStyle
/// </summary>
/// <param name="style" type="String">样式名称</param>
/// <param name="value" type="Object">样式值</param>
/// <returns type="twaver.Element">如果只有一个参数，则返回指定样式的值，否则返回网元自身</returns>
}

twaver.Element.prototype.serializeStyleJson = function (serializer, stylePrope, newInstance, dataObject) {
/// <summary>
/// 	序列化指定的样式到JSON数据
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="stylePrope" type="String">网元样式名</param>
/// <param name="newInstance" type="twaver.Element">序列化的实例对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.Element.prototype.serializeStyleXml = function (serializer, stylePrope, newInstance) {
/// <summary>
/// 	序列化样式到XML数据
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="stylePrope" type="String">网元样式名</param>
/// <param name="newInstance" type="twaver.Element">序列化的实例对象</param>
}

twaver.Element.prototype.setLayerId = function (v) {
/// <summary>
/// 	设置图层ID
/// </summary>
/// <param name="v" type="Object">图层ID</param>
}

twaver.Element.prototype.setStyle = function (styleProp, newValue) {
/// <summary>
/// 	设置网元上指定样式名的属性值
/// </summary>
/// <param name="styleProp" type="String">网元样式名</param>
/// <param name="newValue" type="String">网元样式值</param>
/// <returns type="twaver.Element">对象本身</returns>
}


twaver.ElementBox = function (name) {
/// <summary>
/// 	ElementBox是网元容器，它用于管理TWaver中所有的网元对象，比如节点，连线，组，子网和所有的设备上的网元，比如网格，跟随者。
/// 	
/// 	ElementBox是处于TWaver MVC框架中的M（模型）层，网元在这一层上是不可见的，但是可以进行管理，比如添加，删除，更新以及序列化。
/// 	
/// 	ElementBox是一个大的网元容器，它里面又包含了一些小的容器，比如告警容器（AlarmBox），管理所有的告警对象；图层容器（LayerBox），管理所有的图层对象；选择容器（SelectionModule），管理所有选中的网元。它和DataBox的区别在于它可以进行告警和图层的管理。
/// 	
/// 	ElementBox管理着所有的网元，它可以驱动所有关联的视图组件，比如Network，Tree，Table。一个网元容器可以驱动多个视图组件
/// 	
/// 	
/// 	
/// </summary>
/// <param name="name" type="String">网元容器的名称</param>
/// <returns type="twaver.ElementBox">网元容器对象</returns>
}

twaver.ElementBox.prototype = new twaver.DataBox()

twaver.ElementBox.IS_INTERESTED_ADJUSTELEMENTINDEX_PROPERTY = function () {
/// <field type="Object">触发网元Index更改的相关属性名。默认有：'fromAgent'，'toAgent'，'expanded'，'parent'，'host'</field>
}

twaver.ElementBox.prototype.addIndexChangeListener = function (listener, scope, ahead) {
/// <summary>
/// 	添加网元序号变化的事件监听器。一个网元容器中可以添加多个事件监听器。
/// </summary>
/// <param name="listener" type="Function">网元序号变化的事件监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
/// <param name="ahead" type="Boolean">是否添加在集合的最前方，如果为空，则添加在最后一个位置</param>
}

twaver.ElementBox.prototype.adjustElementIndex = function (element) {
/// <summary>
/// 	调整网元的序号，将网元设置到最顶部。TWaver内部使用
/// </summary>
/// <param name="element" type="twaver.Element">指定的网元对象</param>
}

twaver.ElementBox.prototype.deserializeStyleJson = function (serializer, json, styleProp) {
/// <summary>
/// 	反序列化JSON数据到网元容器的Style属性
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="json" type="String">JSON数据</param>
/// <param name="styleProp" type="String">反序列化的样式属性名称</param>
}

twaver.ElementBox.prototype.deserializeStyleXml = function (serializer, styleXml, styleProp) {
/// <summary>
/// 	反序列化XML数据到网元容器的Style属性
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="styleXml" type="String">XML数据</param>
/// <param name="styleProp" type="String">序列化的样式属性名称</param>
}

twaver.ElementBox.prototype.fireIndexChange = function (element, oldIndex, newIndex) {
/// <summary>
/// 	派发网元Index变化事件。TWaver内部使用
/// </summary>
/// <param name="element" type="twaver.Element">Index发生变化的网元</param>
/// <param name="oldIndex" type="Number">网元Index的原值</param>
/// <param name="newIndex" type="Number">网元Index的新值</param>
}

twaver.ElementBox.prototype.forEachByLayer = function (callbackFunction, layer, scope) {
/// <summary>
/// 	迭代指定图层上的网元。如果指定的图层为空，则迭代网元容器中的所有网元
/// </summary>
/// <param name="callbackFunction" type="Function">回调函数</param>
/// <param name="layer" type="twaver.Layer">迭代网元的图层</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时指的是顶层的面板，即window</param>
}

twaver.ElementBox.prototype.forEachByLayerReverse = function (callbackFunction, layer, scope) {
/// <summary>
/// 	反序迭代指定图层上的网元。如果指定的图层为空，则迭代网元容器中的所有网元
/// </summary>
/// <param name="callbackFunction" type="Function">回调函数</param>
/// <param name="layer" type="twaver.Layer">迭代网元的图层</param>
/// <param name="scope" type="Object">回调函数的作用域，为空时指的是顶层的面板，即window</param>
}

twaver.ElementBox.prototype.getAlarmBox = function () {
/// <summary>
/// 	获取网元容器中的告警容器
/// </summary>
/// <returns type="twaver.AlarmBox">告警容器</returns>
}

twaver.ElementBox.prototype.getAlarmStatePropagator = function () {
/// <summary>
/// 	获取告警传播对象：默认孩子最高级别的告警会传给父亲
/// </summary>
/// <returns type="twaver.AlarmStatePropagator">告警传播对象</returns>
}

twaver.ElementBox.prototype.getLayerBox = function () {
/// <summary>
/// 	获取网元容器中的图层容器
/// </summary>
/// <returns type="twaver.LayerBox">图层容器</returns>
}

twaver.ElementBox.prototype.getStyle = function (styleProp, returnDefaultIfNull) {
/// <summary>
/// 	获取网元容器某个样式属性的值
/// </summary>
/// <param name="styleProp" type="String">网元容器的样式属性名称</param>
/// <param name="returnDefaultIfNull" type="String"></param>
/// <returns type="Object">网元容器的样式属性值</returns>
}

twaver.ElementBox.prototype.getStyleProperties = function () {
/// <summary>
/// 	获取网元容器的所有样式属性名称
/// </summary>
/// <returns type="twaver.List">样式属性的集合</returns>
}

twaver.ElementBox.prototype.IStyle = function () {
/// <field type="Boolean">是否是Style的标识</field>
}

twaver.ElementBox.prototype.onStyleChanged = function (styleProp, oldValue, newValue) {
/// <summary>
/// 	当网元容器的样式发生变化时，回调此函数
/// </summary>
/// <param name="styleProp" type="String">网元容器的样式属性名称</param>
/// <param name="oldValue" type="String">网元容器的样式属性原值</param>
/// <param name="newValue" type="String">网元容器的样式属性新值</param>
}

twaver.ElementBox.prototype.removeIndexChangeListener = function (listener, scope) {
/// <summary>
/// 	移除网元序号变化的事件监听器
/// </summary>
/// <param name="listener" type="Function">网元序号变化的事件监听器</param>
/// <param name="scope" type="Object">监听器的作用域，为空时指的是window</param>
}

twaver.ElementBox.prototype.sendToBottom = function (element, refElement) {
/// <summary>
/// 	设置指定的网元处于某个网元的底层。当refElement为空时，设置指定在网元容器的最底层
/// </summary>
/// <param name="element" type="twaver.Element">网元对象</param>
/// <param name="refElement" type="twaver.Element">为空时，将网元设置到最底层</param>
}

twaver.ElementBox.prototype.sendToTop = function (element) {
/// <summary>
/// 	设置指定的网元处于网元容易的最顶层
/// </summary>
/// <param name="element" type="twaver.Element">网元对象</param>
}

twaver.ElementBox.prototype.serializeStyleJson = function (serializer, stylePrope, newInstance, dataObject) {
/// <summary>
/// 	序列化网元容器的Style属性到JSON数据
/// </summary>
/// <param name="serializer" type="twaver.JsonSerializer">JSON序列化对象</param>
/// <param name="stylePrope" type="String">序列化的样式属性名称</param>
/// <param name="newInstance" type="twaver.ElementBox">序列化的实例对象</param>
/// <param name="dataObject" type="Object">JSON数据对象</param>
}

twaver.ElementBox.prototype.serializeStyleXml = function (serializer, stylePrope, newInstance) {
/// <summary>
/// 	序列化网元容器的Style属性到XML数据
/// </summary>
/// <param name="serializer" type="twaver.XmlSerializer">XML序列化对象</param>
/// <param name="stylePrope" type="String">网元样式属性名称</param>
/// <param name="newInstance" type="twaver.ElementBox">序列化的实例对象</param>
}

twaver.ElementBox.prototype.setStyle = function (styleProp, newValue) {
/// <summary>
/// 	设置网元容器的样式值
/// </summary>
/// <param name="styleProp" type="String">网元样式属性名称</param>
/// <param name="newValue" type="String">网元样式属性的新值</param>
/// <returns type="twaver.ElementBox">网元容器对象本身</returns>
}

twaver.ElementBox.prototype.startBatch = function (callback, scope) {
/// <summary>
/// 	开始批量添加网元
/// </summary>
/// <param name="callback" type="Function">批量添加数据回调函数</param>
/// <param name="scope" type="Object">回调函数的作用域</param>
}


twaver.Layer = function (id) {
/// <summary>
/// 	图层是在LayerBox中存在的，图层用于对网元进行分层，在ElementBox中的所有网元都显示在某个图层上，同一图层上网元的LayerID是相同的。
/// 	
/// 	图层在network上是不可见的，但是它可以进行上移，下移。也可以对图层上的网元进行是否可见，是否可移动，是否可编辑的设置
/// 	
/// </summary>
/// <param name="id" type="Object">图层ID，用于唯一标识这个图层对象。如果为空，TWaver会按照默认的规则给图层ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是图层的ID，如果为Object类型，可以传入一个带图层属性的对象，比如： var layer = new twaver.Layer({     name:'topLayer',    movable: false,     editable:false});</param>
/// <returns type="twaver.Layer"></returns>
}

twaver.Layer.prototype = new twaver.Data()

twaver.Layer.prototype.ILayer = function () {
/// <field type="Boolean">是否为图层的标识</field>
}

twaver.Layer.prototype.isEditable = function () {
/// <summary>
/// 	判断图层是否可编辑，当设置为false时，其上的网元也不可编辑
/// </summary>
/// <returns type="Boolean">true为可编辑，false不可编辑</returns>
}

twaver.Layer.prototype.isMovable = function () {
/// <summary>
/// 	判断图层是否可移动，当设置为false时，其上的网元也不可移动
/// </summary>
/// <returns type="Boolean">true为可移动，false为不可移动</returns>
}

twaver.Layer.prototype.isRotatable = function () {
/// <summary>
/// 	获取是否可旋转
/// </summary>
/// <returns type="Boolean">返回是否可旋转</returns>
}

twaver.Layer.prototype.isVisible = function () {
/// <summary>
/// 	判断图层是否可见，当设置为false时，其上的网元也不可见
/// </summary>
/// <returns type="Boolean">true为可见，false不可见</returns>
}

twaver.Layer.prototype.setEditable = function (v) {
/// <summary>
/// 	设置图层是否可编辑，当设置为false时，其上的网元也不可编辑
/// </summary>
/// <param name="v" type="Boolean">true为可编辑，false不可编辑</param>
}

twaver.Layer.prototype.setMovable = function (v) {
/// <summary>
/// 	设置图层是否可移动，当设置为false时，其上的网元也不可移动
/// </summary>
/// <param name="v" type="Boolean">true为可移动，false不可移动</param>
}

twaver.Layer.prototype.setRotatable = function (v) {
/// <summary>
/// 	设置是否可旋转
/// </summary>
/// <param name="v" type="Boolean">是否可旋转</param>
}

twaver.Layer.prototype.setVisible = function (v) {
/// <summary>
/// 	设置图层是否可见，当设置为false时，其上的网元也不可见
/// </summary>
/// <param name="v" type="Boolean">true为可见，false不可见</param>
}


twaver.LayerBox = function (elementBox) {
/// <summary>
/// 	图层容器是一种特殊的容器，它是包含在网元容器中的，作为网元容器的一部分，用于管理网元容器中所有的图层对象，比如上移，下移，添加，删除，显示，隐藏图层。处于上层图层上的网元会显示在其下图层上的网元上方。
/// 	
/// 	当创建一个图层容器时，就会有一个默认的图层对象生成，所有没有指定图层ID的网元都会显示在这个图层上，这个图层称之为defaultLayer。这个图层是不能被删除的。
/// 	
/// 	当删除一个图层时，所有在它上面的网元在网元容器中不会被删除
/// 	
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">网元容器对象</param>
/// <returns type="twaver.LayerBox">图层对象本身</returns>
}

twaver.LayerBox.prototype = new twaver.DataBox()

twaver.LayerBox.prototype.getDefaultLayer = function () {
/// <summary>
/// 	获取默认的图层对象
/// </summary>
/// <returns type="twaver.Layer">默认的图层对象</returns>
}

twaver.LayerBox.prototype.getElementBox = function () {
/// <summary>
/// 	获取包含图层容器的网元容器
/// </summary>
/// <returns type="twaver.ElementBox">包含图层容器的网元容器</returns>
}

twaver.LayerBox.prototype.getLayerByElement = function (element) {
/// <summary>
/// 	获取指定网元上的图层
/// </summary>
/// <param name="element" type="twaver.Element">指定的网元对象</param>
/// <returns type="twaver.Layer">图层对象</returns>
}


twaver.network.AlarmAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	告警附件，用于在拓扑上显示网元的新发告警信息，一般显示为包含告警级别和数量的冒泡信息，默认告警冒泡附件应该显示在附件层，以免某个网元的告警信息被其他网元覆盖
/// </summary>
/// <param name="elementUI" type="twaver.network.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在附件层，可选，默认为false</param>
/// <returns type="twaver.network.AlarmAttachment"></returns>
}

twaver.network.AlarmAttachment.prototype = new twaver.network.BasicAttachment()


twaver.network.GridUI = function (network, element) {
/// <summary>
/// 	网格对应的视图对象，网格是由grid.row.count样式属性指定的行数和grid.column.count样式属性指定的列数构成的表格，其他网元可以填充到其网格中
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Grid">网格</param>
/// <returns type="twaver.network.GridUI"></returns>
}

twaver.network.GridUI.prototype = new twaver.network.NodeUI()

twaver.network.GridUI.prototype.drawGridBody = function () {
/// <summary>
/// 	画网格内容
/// </summary>
}


twaver.network.GroupUI = function (network, element) {
/// <summary>
/// 	组对应的视图对象，组有合并和展开两种状态，合并时，组的孩子不可见；展开时，孩子可见
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Group">组</param>
/// <returns type="twaver.network.GroupUI"></returns>
}

twaver.network.GroupUI.prototype = new twaver.network.NodeUI()

twaver.network.GroupUI.prototype.drawExpandedGroup = function () {
/// <summary>
/// 	画展开后的组，用group.shape样式属性定义的形状画出矢量图形
/// </summary>
}

twaver.network.GroupUI.prototype.getChildrenRects = function () {
/// <summary>
/// 	获取所有孩子的区域
/// </summary>
/// <returns type="twaver.List">返回所有孩子的区域</returns>
}


twaver.network.interaction.CreateOrthogonalLinkInteraction = function (network, typeOrLinkFunction, linkType, isByControlPoint, splitPercent, isSplitByPercent) {
/// <summary>
/// 	创建正交直角连线交互处理器
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrLinkFunction" type="String">连线类型或者连线生成器方法，可选，默认值为twaver.Link</param>
/// <param name="linkType" type="String">连线样式，可选，默认值为orthogonal</param>
/// <param name="isByControlPoint" type="Boolean">是否按百分比劈分正交直角连线，可选，默认值为true</param>
/// <param name="splitPercent" type="Number">劈分点距起始节点的百分比位置，可选，默认值为0.5</param>
/// <param name="isSplitByPercent" type="Boolean">是否按百分比劈分正交直角连线，可选，默认值为true</param>
/// <returns type="twaver.network.interaction.CreateOrthogonalLinkInteraction"></returns>
}

twaver.network.interaction.CreateOrthogonalLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


twaver.network.interaction.CreateShapeLinkInteraction = function (network, typeOrLinkFunction) {
/// <summary>
/// 	创建折线交互处理器，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点，可以用Network#setCreateShapeLinkInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrLinkFunction" type="Object">折线类型或者折线生成器方法，可选，默认值为twaver.ShapeLink</param>
/// <returns type="twaver.network.interaction.CreateShapeLinkInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeLinkInteraction(network, twaver.ShapeLink),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeLinkInteraction(network,
/// 	    function (fromNode, toNode, points) {
/// 	        var link = new twaver.ShapeLink();
/// 	        link.setFromNode(fromNode);
/// 	        link.setToNode(toNode);
/// 	        link.setStyle('link.color', 'red');
/// 	        if(points){
/// 	            link.setPoints(points);
/// 	        }
/// 	        return link;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.network.interaction.CreateShapeLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


twaver.network.LabelAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	标签附件，用于显示网元名称
/// </summary>
/// <param name="elementUI" type="twaver.network.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在附件层，可选，默认为false</param>
/// <returns type="twaver.network.LabelAttachment"></returns>
}

twaver.network.LabelAttachment.prototype = new twaver.network.BasicAttachment()

twaver.network.LabelAttachment.prototype.getLabel = function () {
/// <summary>
/// 	获取标签文本
/// </summary>
/// <returns type="String">返回标签文本</returns>
}


twaver.network.LinkHandlerAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	连线捆绑标签附件，用于显示多条连线捆绑后，显示的标签
/// </summary>
/// <param name="elementUI" type="twaver.network.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在附件层，可选，默认为false</param>
/// <returns type="twaver.network.LinkHandlerAttachment"></returns>
}

twaver.network.LinkHandlerAttachment.prototype = new twaver.network.BasicAttachment()


twaver.network.Overview = function (network) {
/// <summary>
/// 	创建和Network绑定的鹰眼视图，鹰眼是Network的缩略图，能通过鹰眼导航Network。鹰眼支持各种操作：
/// 	单击：将Network的视图中心导航到指定坐标点
/// 	双击：将Network的缩放级别还原为1
/// 	按着CTRL键框选：将Network缩放并平移到指定区域
/// </summary>
/// <param name="network" type="twaver.network.Network">和Overview绑定的Network</param>
/// <returns type="twaver.network.Overview"></returns>
/// <example>
/// 	var overview = new twaver.network.Overview(network);
/// 	overview.adjustBounds({x:0, y:0, width:200, height:200});
/// </example>
}

twaver.network.Overview.prototype = new twaver.controls.ControlBase()

twaver.network.Overview.prototype.centerNetwork = function (point, animate) {
/// <summary>
/// 	将Network的视图中心点滚动到指定的相对于Overview的坐标
/// </summary>
/// <param name="point" type="Object">相对于Overview的包含x和y属性的Object对象</param>
/// <param name="animate" type="Boolean">可选，如果为true，则有动画效果，否则没有，默认为false</param>
}

twaver.network.Overview.prototype.getFillColor = function () {
/// <summary>
/// 	获取Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
/// </summary>
/// <returns type="String">返回Overview的填充色</returns>
}

twaver.network.Overview.prototype.getLogicalPoint = function (e) {
/// <summary>
/// 	获取鼠标所在的逻辑坐标，包含x，y属性
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回鼠标所在的逻辑坐标，包含x，y属性</returns>
}

twaver.network.Overview.prototype.getMaxPackingHeight = function () {
/// <summary>
/// 	获取Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
/// </summary>
/// <returns type="Number">返回Overview最大伸缩高度</returns>
}

twaver.network.Overview.prototype.getMaxPackingWidth = function () {
/// <summary>
/// 	获取Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
/// </summary>
/// <returns type="Number">返回Overview最大伸缩宽度</returns>
}

twaver.network.Overview.prototype.getNetwork = function () {
/// <summary>
/// 	获取和Overview绑定的拓扑视图
/// </summary>
/// <returns type="twaver.network.Network">返回和Overview绑定的拓扑视图</returns>
}

twaver.network.Overview.prototype.getOutlineColor = function () {
/// <summary>
/// 	获取Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回Overview边框线条颜色</returns>
}

twaver.network.Overview.prototype.getOutlineWidth = function () {
/// <summary>
/// 	获取Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回Overview边框线条宽度</returns>
}

twaver.network.Overview.prototype.getPadding = function () {
/// <summary>
/// 	获取Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
/// </summary>
/// <returns type="Number">返回Overview边缘空白大小</returns>
}

twaver.network.Overview.prototype.getSelectColor = function () {
/// <summary>
/// 	获取Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
/// </summary>
/// <returns type="String">返回Overview框选时轮廓的线条颜色</returns>
}

twaver.network.Overview.prototype.getSelectWidth = function () {
/// <summary>
/// 	获取Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
/// </summary>
/// <returns type="Number">返回Overview框选时轮廓的线条宽度</returns>
}

twaver.network.Overview.prototype.isAnimate = function () {
/// <summary>
/// 	获取操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
/// </summary>
/// <returns type="Boolean">返回是否使用动画效果</returns>
}

twaver.network.Overview.prototype.setAnimate = function (v) {
/// <summary>
/// 	设置操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
/// </summary>
/// <param name="v" type="Boolean">是否使用动画效果</param>
}

twaver.network.Overview.prototype.setFillColor = function (v) {
/// <summary>
/// 	设置Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
/// </summary>
/// <param name="v" type="String">Overview的填充色</param>
}

twaver.network.Overview.prototype.setMaxPackingHeight = function (v) {
/// <summary>
/// 	设置Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
/// </summary>
/// <param name="v" type="Number">Overview最大伸缩高度</param>
}

twaver.network.Overview.prototype.setMaxPackingWidth = function (v) {
/// <summary>
/// 	设置Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview最大伸缩宽度</param>
}

twaver.network.Overview.prototype.setNetwork = function (network) {
/// <summary>
/// 	设置和Overview绑定的拓扑视图
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑视图</param>
}

twaver.network.Overview.prototype.setOutlineColor = function (v) {
/// <summary>
/// 	设置Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
/// </summary>
/// <param name="v" type="String">Overview边框线条颜色</param>
}

twaver.network.Overview.prototype.setOutlineWidth = function (v) {
/// <summary>
/// 	设置Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview边框线条宽度</param>
}

twaver.network.Overview.prototype.setPadding = function (v) {
/// <summary>
/// 	设置Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
/// </summary>
/// <param name="v" type="Number">Overview边缘空白大小</param>
}

twaver.network.Overview.prototype.setSelectColor = function (v) {
/// <summary>
/// 	设置Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
/// </summary>
/// <param name="v" type="String">Overview框选时轮廓的线条颜色</param>
}

twaver.network.Overview.prototype.setSelectWidth = function (v) {
/// <summary>
/// 	设置Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview框选时轮廓的线条宽度</param>
}


twaver.network.RotatableNodeUI = function (network, element) {
/// <summary>
/// 	构造可旋转节点的视图对象
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑视图</param>
/// <param name="element" type="twaver.RotatableNode">可旋转节点</param>
/// <returns type="twaver.network.RotatableNodeUI"></returns>
}

twaver.network.RotatableNodeUI.prototype = new twaver.network.NodeUI()


twaver.network.ShapeLinkUI = function (network, element) {
/// <summary>
/// 	折线对应的视图对象，由一组点连接而成
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.ShapeLink">折线</param>
/// <returns type="twaver.network.ShapeLinkUI"></returns>
}

twaver.network.ShapeLinkUI.prototype = new twaver.network.LinkUI()


twaver.network.ShapeNodeUI = function (network, element) {
/// <summary>
/// 	多边形网元对应的多边形网元视图，多边形由一组点组成，并将这些点依次连接而组成
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="element" type="twaver.Element">多边形网元</param>
/// <returns type="twaver.network.ShapeNodeUI"></returns>
}

twaver.network.ShapeNodeUI.prototype = new twaver.network.NodeUI()


twaver.Property = function (id) {
/// <summary>
/// 	构造函数
/// 	属性项是一种基本元素，它是存在于属性容器中的（PropertyBox）。属性列是用来显示在属性页中的基本元素
/// </summary>
/// <param name="id" type="Object">ID为属性的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是属性的ID，如果为Object类型，可以传入一个属性的对象，比如： var property = new twaver.Property({  name:'Name',    horizontalAlign:'left',    width:100});</param>
/// <returns type="twaver.Property"></returns>
}

twaver.Property.prototype = new twaver.Data()

twaver.Property.prototype.getCategoryName = function () {
/// <summary>
/// 	获取属性项所属的Category的名称
/// </summary>
/// <returns type="String">Category的名称</returns>
}

twaver.Property.prototype.getEnumInfo = function () {
/// <summary>
/// 	获取编辑属性项时显示的内容。如果属性项中设置了多个值，编辑时会以combobox的样式来呈现。
/// 	例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']。
/// </summary>
/// <returns type="Object">编辑属性项时显示的内容</returns>
}

twaver.Property.prototype.getHorizontalAlign = function () {
/// <summary>
/// 	获取属性项的水平对齐方式。可选值：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的可以参考CSS中的text-align样式
/// </summary>
/// <returns type="String">水平对齐方式</returns>
}

twaver.Property.prototype.getPropertyName = function () {
/// <summary>
/// 	获取属性表的属性项所对应的网元属性名
/// </summary>
/// <returns type="String">属性表的属性项所对应网元的属性名</returns>
}

twaver.Property.prototype.getPropertyType = function () {
/// <summary>
/// 	获取网元属性的类型。可选值有
/// 	'field'：网元的自身变量属性，
/// 	'accessor', 网元get/set方法的属性，
/// 	'style'：网元样式属性,
/// 	'client'：网元自定义属性
/// </summary>
/// <returns type="String">网元属性类型</returns>
}

twaver.Property.prototype.getValue = function (data, view) {
/// <summary>
/// 	从Data中获取对应的属性项的值，TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">属性页绑定的数据对象</param>
/// <param name="view" type="twaver.controls.PropertySheet">绑定的属性页</param>
/// <returns type="Object">返回属性项的值</returns>
}

twaver.Property.prototype.getValueType = function () {
/// <summary>
/// 	获取属性项中值的类型。可选值有：
/// 	'string'：字符串类型，
/// 	'boolean'：布尔类型， 
/// 	'color'：颜色类型， 
/// 	'int'：整型，
/// 	'number'：数字类型
/// </summary>
/// <returns type="String">属性项中值的类型</returns>
}

twaver.Property.prototype.IProperty = function () {
/// <field type="Boolean">是否是属性项的标志</field>
}

twaver.Property.prototype.isEditable = function () {
/// <summary>
/// 	判断属性表的属性项是否可编辑
/// </summary>
/// <returns type="Boolean">true为可编辑，false不可编辑</returns>
}

twaver.Property.prototype.isInnerText = function () {
/// <summary>
/// 	获取属性页列内容是否为纯文本
/// </summary>
/// <returns type="Boolean">返回属性页列内容是否为纯文本</returns>
}

twaver.Property.prototype.isVisible = function () {
/// <field type="Boolean">true表示属性项显示，false不显示</field>
}

twaver.Property.prototype.renderName = function () {
/// <field type="String">这个属性项所对应的render的名称</field>
}

twaver.Property.prototype.renderValue = function () {
/// <field type="Object"></field>
}

twaver.Property.prototype.setCategoryName = function (v) {
/// <summary>
/// 	设置属性项所属的Category的名称
/// </summary>
/// <param name="v" type="String">Category的名称</param>
}

twaver.Property.prototype.setEditable = function (v) {
/// <summary>
/// 	设置属性表的属性项是否可编辑
/// </summary>
/// <param name="v" type="Boolean">true为可编辑，false不可编辑</param>
}

twaver.Property.prototype.setEnumInfo = function (v) {
/// <summary>
/// 	设置编辑属性项时显示的内容。如果属性项中设置了多个值，编辑时会以combobox的样式来呈现。
/// 	例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']
/// </summary>
/// <param name="v" type="Object">编辑属性项时显示的内容</param>
}

twaver.Property.prototype.setHorizontalAlign = function (v) {
/// <summary>
/// 	设置属性项的水平对齐方式。可选值：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的可以参考CSS中的text-align样式
/// </summary>
/// <param name="v" type="String">水平对齐方式</param>
}

twaver.Property.prototype.setInnerText = function (v) {
/// <summary>
/// 	设置属性页列内容是否为纯文本
/// </summary>
/// <param name="v" type="Boolean">属性页列内容是否为纯文本</param>
}

twaver.Property.prototype.setPropertyName = function (value) {
/// <summary>
/// 	设置属性表的属性项所对应的网元属性名
/// </summary>
/// <param name="value" type="String">属性表的属性项所对应网元的属性名</param>
}

twaver.Property.prototype.setPropertyType = function (value) {
/// <summary>
/// 	设置网元属性的类型。可选值有
/// 	'field'：网元的自身变量属性，
/// 	'accessor', 网元get/set方法的属性，
/// 	'style'：网元样式属性,
/// 	'client'：网元自定义属性
/// </summary>
/// <param name="value" type="String">网元属性的类型</param>
}

twaver.Property.prototype.setValue = function (data, value, view) {
/// <summary>
/// 	设置属性页上的值回写到data中，TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">属性页绑定的数据对象</param>
/// <param name="value" type="Object">属性项的值</param>
/// <param name="view" type="twaver.controls.PropertySheet">属性页</param>
/// <returns type="twaver.Data"></returns>
}

twaver.Property.prototype.setValueType = function (v) {
/// <summary>
/// 	得到属性项中值的类型。可选值有：
/// 	'string'：字符串类型，
/// 	'boolean'：布尔类型， 
/// 	'color'：颜色类型， 
/// 	'int'：整型，
/// 	'number'：数字类型
/// </summary>
/// <param name="v" type="String">属性项中值的类型</param>
}


twaver.PropertyBox = function (name) {
/// <summary>
/// 	属性页的属性容器，它是用于管理所有的属性对象，例如增加、删除属性。它继承于数据容器
/// </summary>
/// <param name="name" type="String">属性容器名称</param>
/// <returns type="twaver.PropertyBox">属性容器对象本身</returns>
}

twaver.PropertyBox.prototype = new twaver.DataBox()


twaver.Tab = function (id) {
/// <summary>
/// 	构造函数
/// 	选项卡是一种基本元素，它是存在于选项卡容器中的（TabBox）。选项卡是用来显示在选项卡面板中的基本元素
/// </summary>
/// <param name="id" type="Object">ID为选项卡的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是选项卡的ID，如果为Object类型，可以传入一个带选项卡属性的对象，比如： var tab = new twaver.Tab({  width:50,    closable:true,      resizable:true });</param>
/// <returns type="twaver.Tab"></returns>
}

twaver.Tab.prototype = new twaver.Data()

twaver.Tab.prototype.getView = function () {
/// <summary>
/// 	获取显示在选项卡中的视图组件
/// </summary>
/// <returns type="Object">视图组件</returns>
}

twaver.Tab.prototype.getWidth = function () {
/// <summary>
/// 	获取选项卡的宽度
/// </summary>
/// <returns type="Number">选项卡的宽度</returns>
}

twaver.Tab.prototype.isClosable = function () {
/// <summary>
/// 	获取选项卡是否可关闭。默认值为false
/// </summary>
/// <returns type="Boolean">true为可关闭，false不可关闭</returns>
}

twaver.Tab.prototype.isDisabled = function () {
/// <summary>
/// 	获取选项卡是否不可用。默认值为false
/// </summary>
/// <returns type="Boolean">true为可用，false不可用</returns>
}

twaver.Tab.prototype.isMovable = function () {
/// <summary>
/// 	判断是否可移动，默认值为true
/// </summary>
/// <returns type="Boolean">true为可移动，否则为false</returns>
}

twaver.Tab.prototype.isResizable = function () {
/// <summary>
/// 	判断是否可改变大小，默认值为true
/// </summary>
/// <returns type="Boolean">true为可改变大小，否则为false</returns>
}

twaver.Tab.prototype.isVisible = function () {
/// <summary>
/// 	判断是否可见
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.Tab.prototype.ITab = function () {
/// <field type="Boolean">是否是选项卡的标识</field>
}

twaver.Tab.prototype.setClosable = function (v) {
/// <summary>
/// 	设置选项卡是否可关闭。默认值为false
/// </summary>
/// <param name="v" type="Boolean">true为可关闭，false不可关闭</param>
}

twaver.Tab.prototype.setDisabled = function (v) {
/// <summary>
/// 	设置选项卡是否不可用，默认值为false
/// </summary>
/// <param name="v" type="Boolean">true为可用，false不可用</param>
}

twaver.Tab.prototype.setMovable = function (v) {
/// <summary>
/// 	设置是否可移动，默认值为true
/// </summary>
/// <param name="v" type="Boolean">true为可移动，否则为false</param>
}

twaver.Tab.prototype.setResizable = function (v) {
/// <summary>
/// 	设置是否可改变大小，默认值为true
/// </summary>
/// <param name="v" type="Boolean">true为可改变大小，否则为false</param>
}

twaver.Tab.prototype.setView = function (v) {
/// <summary>
/// 	设置显示在选项卡中的视图组件
/// </summary>
/// <param name="v" type="Object">视图组件</param>
}

twaver.Tab.prototype.setVisible = function (v) {
/// <summary>
/// 	设置是否可见，默认值为true
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.Tab.prototype.setWidth = function (v) {
/// <summary>
/// 	设置选项卡的宽度
/// </summary>
/// <param name="v" type="Number">选项卡的宽度</param>
}


twaver.TabBox = function (name) {
/// <summary>
/// 	选项卡容器，用于管理所有选项卡对象。比如添加、删除选项卡。它继承于数据容器
/// </summary>
/// <param name="name" type="String">选项卡容器的名称</param>
/// <returns type="twaver.TabBox">选项卡容器对象本身</returns>
}

twaver.TabBox.prototype = new twaver.DataBox()


twaver.vector.AlarmAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	告警附件，用于在拓扑上显示网元的新发告警信息，一般显示为包含告警级别和数量的冒泡信息，默认告警冒泡附件应该显示在最上层，以免某个网元的告警信息被其他网元覆盖
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.AlarmAttachment"></returns>
}

twaver.vector.AlarmAttachment.prototype = new twaver.canvas.BasicAttachment()


twaver.vector.GridUI = function (network, element) {
/// <summary>
/// 	网格对应的视图对象，网格是由grid.row.count样式属性指定的行数和grid.column.count样式属性指定的列数构成的表格，其他网元可以填充到其网格中
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑视图</param>
/// <param name="element" type="twaver.Grid">网格</param>
/// <returns type="twaver.canvas.GridUI"></returns>
}

twaver.vector.GridUI.prototype = new twaver.canvas.NodeUI()

twaver.vector.GridUI.prototype.drawGridBody = function (ctx) {
/// <summary>
/// 	画网格内容
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}


twaver.vector.GroupUI = function (network, element) {
/// <summary>
/// 	组对应的视图对象，组有合并和展开两种状态，合并时，组的孩子不可见；展开时，孩子可见
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑对象</param>
/// <param name="element" type="twaver.Group">组网元</param>
/// <returns type="twaver.canvas.GroupUI"></returns>
}

twaver.vector.GroupUI.prototype = new twaver.canvas.NodeUI()

twaver.vector.GroupUI.prototype.drawExpandedGroup = function (ctx) {
/// <summary>
/// 	画展开后的组，用group.shape样式属性定义的形状画出矢量图形
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">canvas画布</param>
}

twaver.vector.GroupUI.prototype.getChildrenRects = function () {
/// <summary>
/// 	获取所有孩子的区域
/// </summary>
/// <returns type="twaver.List">返回所有孩子的区域</returns>
}


twaver.vector.interaction.CreateShapeLinkInteraction = function (network, typeOrLinkFunction) {
/// <summary>
/// 	创建折线交互处理器，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点，可以用Network#setCreateShapeLinkInteractions快速切换当前交互模式为创建连线模式
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑</param>
/// <param name="typeOrLinkFunction" type="Object">折线类型或者折线生成器方法，可选，默认值为twaver.ShapeLink</param>
/// <returns type="twaver.network.interaction.CreateShapeLinkInteraction"></returns>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeLinkInteraction(network, twaver.ShapeLink),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// 	
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.CreateShapeLinkInteraction(network,
/// 	    function (fromNode, toNode, points) {
/// 	        var link = new twaver.ShapeLink();
/// 	        link.setFromNode(fromNode);
/// 	        link.setToNode(toNode);
/// 	        link.setStyle('link.color', 'red');
/// 	        if(points){
/// 	            link.setPoints(points);
/// 	        }
/// 	        return link;
/// 	    }),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.vector.interaction.CreateShapeLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


twaver.vector.Label2Attachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	标签附件2，用于显示网元名称2
/// </summary>
/// <param name="elementUI" type="twaver.vector.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.vector.Label2Attachment"></returns>
}

twaver.vector.Label2Attachment.prototype = new twaver.vector.BasicAttachment()

twaver.vector.Label2Attachment.prototype.getLabel = function () {
/// <summary>
/// 	获取标签文本
/// </summary>
/// <returns type="String">返回标签文本</returns>
}


twaver.vector.LabelAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	标签附件，用于显示网元名称
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.LabelAttachment"></returns>
}

twaver.vector.LabelAttachment.prototype = new twaver.vector.BasicAttachment()

twaver.vector.LabelAttachment.prototype.getLabel = function () {
/// <summary>
/// 	获取标签文本
/// </summary>
/// <returns type="String">返回标签文本</returns>
}


twaver.vector.LinkHandlerAttachment = function (elementUI, showInAttachmentDiv) {
/// <summary>
/// 	捆绑连线的标签附件，用于显示多条连线捆绑后的标签
/// </summary>
/// <param name="elementUI" type="twaver.canvas.ElementUI">网元视图</param>
/// <param name="showInAttachmentDiv" type="Boolean">是否显示在最上层，可选，默认为false</param>
/// <returns type="twaver.canvas.LinkHandlerAttachment"></returns>
}

twaver.vector.LinkHandlerAttachment.prototype = new twaver.vector.BasicAttachment()


twaver.vector.MixedZoomManager = function () {
/// <summary>
/// 	混合缩放管理器构造函数
/// </summary>
/// <returns type="twaver.vector.MixedZoomManager">混合缩放管理器</returns>
}

twaver.vector.MixedZoomManager.prototype = new twaver.vector.LogicalZoomManager()


twaver.vector.Overview = function (network) {
/// <summary>
/// 	创建和Network绑定的鹰眼视图，鹰眼是Network的缩略图，能通过鹰眼导航Network。鹰眼支持各种操作：
/// 	单击：将Network的视图中心导航到指定坐标点
/// 	双击：将Network的缩放级别还原为1
/// 	按着CTRL键框选：将Network缩放并平移到指定区域
/// </summary>
/// <param name="network" type="twaver.network.Network">和Overview绑定的Network</param>
/// <returns type="twaver.network.Overview"></returns>
/// <example>
/// 	var overview = new twaver.network.Overview(network);
/// 	overview.adjustBounds({x:0, y:0, width:200, height:200});
/// </example>
}

twaver.vector.Overview.prototype = new twaver.controls.ControlBase()

twaver.vector.Overview.prototype.centerNetwork = function (point, animate) {
/// <summary>
/// 	将Network的视图中心点滚动到指定的相对于Overview的坐标
/// </summary>
/// <param name="point" type="Object">相对于Overview的包含x和y属性的Object对象</param>
/// <param name="animate" type="Boolean">可选，如果为true，则有动画效果，否则没有，默认为false</param>
}

twaver.vector.Overview.prototype.getFillColor = function () {
/// <summary>
/// 	获取Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
/// </summary>
/// <returns type="String">返回Overview的填充色</returns>
}

twaver.vector.Overview.prototype.getLogicalPoint = function (e) {
/// <summary>
/// 	获取鼠标所在的逻辑坐标，包含x，y属性
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回鼠标所在的逻辑坐标，包含x，y属性</returns>
}

twaver.vector.Overview.prototype.getMaxPackingHeight = function () {
/// <summary>
/// 	获取Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
/// </summary>
/// <returns type="Number">返回Overview最大伸缩高度</returns>
}

twaver.vector.Overview.prototype.getMaxPackingWidth = function () {
/// <summary>
/// 	获取Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
/// </summary>
/// <returns type="Number">返回Overview最大伸缩宽度</returns>
}

twaver.vector.Overview.prototype.getNetwork = function () {
/// <summary>
/// 	获取和Overview绑定的拓扑视图
/// </summary>
/// <returns type="twaver.network.Network">返回和Overview绑定的拓扑视图</returns>
}

twaver.vector.Overview.prototype.getOutlineColor = function () {
/// <summary>
/// 	获取Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回Overview边框线条颜色</returns>
}

twaver.vector.Overview.prototype.getOutlineWidth = function () {
/// <summary>
/// 	获取Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回Overview边框线条宽度</returns>
}

twaver.vector.Overview.prototype.getPadding = function () {
/// <summary>
/// 	获取Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
/// </summary>
/// <returns type="Number">返回Overview边缘空白大小</returns>
}

twaver.vector.Overview.prototype.getSelectColor = function () {
/// <summary>
/// 	获取Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
/// </summary>
/// <returns type="String">返回Overview框选时轮廓的线条颜色</returns>
}

twaver.vector.Overview.prototype.getSelectWidth = function () {
/// <summary>
/// 	获取Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
/// </summary>
/// <returns type="Number">返回Overview框选时轮廓的线条宽度</returns>
}

twaver.vector.Overview.prototype.isAnimate = function () {
/// <summary>
/// 	获取操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
/// </summary>
/// <returns type="Boolean">返回是否使用动画效果</returns>
}

twaver.vector.Overview.prototype.setAnimate = function (v) {
/// <summary>
/// 	设置操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
/// </summary>
/// <param name="v" type="Boolean">是否使用动画效果</param>
}

twaver.vector.Overview.prototype.setFillColor = function (v) {
/// <summary>
/// 	设置Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
/// </summary>
/// <param name="v" type="String">Overview的填充色</param>
}

twaver.vector.Overview.prototype.setMaxPackingHeight = function (v) {
/// <summary>
/// 	设置Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
/// </summary>
/// <param name="v" type="Number">Overview最大伸缩高度</param>
}

twaver.vector.Overview.prototype.setMaxPackingWidth = function (v) {
/// <summary>
/// 	设置Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview最大伸缩宽度</param>
}

twaver.vector.Overview.prototype.setNetwork = function (network) {
/// <summary>
/// 	设置和Overview绑定的拓扑视图
/// </summary>
/// <param name="network" type="twaver.network.Network">拓扑视图</param>
}

twaver.vector.Overview.prototype.setOutlineColor = function (v) {
/// <summary>
/// 	设置Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
/// </summary>
/// <param name="v" type="String">Overview边框线条颜色</param>
}

twaver.vector.Overview.prototype.setOutlineWidth = function (v) {
/// <summary>
/// 	设置Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview边框线条宽度</param>
}

twaver.vector.Overview.prototype.setPadding = function (v) {
/// <summary>
/// 	设置Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
/// </summary>
/// <param name="v" type="Number">Overview边缘空白大小</param>
}

twaver.vector.Overview.prototype.setSelectColor = function (v) {
/// <summary>
/// 	设置Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
/// </summary>
/// <param name="v" type="String">Overview框选时轮廓的线条颜色</param>
}

twaver.vector.Overview.prototype.setSelectWidth = function (v) {
/// <summary>
/// 	设置Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
/// </summary>
/// <param name="v" type="Number">Overview框选时轮廓的线条宽度</param>
}


twaver.vector.RotatableNodeUI = function (network, element) {
/// <summary>
/// 	构造可旋转节点的视图对象
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑视图</param>
/// <param name="element" type="twaver.RotatableNode">可旋转节点</param>
/// <returns type="twaver.canvas.RotatableNodeUI"></returns>
}

twaver.vector.RotatableNodeUI.prototype = new twaver.canvas.NodeUI()


twaver.vector.ShapeLinkUI = function (network, element) {
/// <summary>
/// 	折线对应的视图对象，由一组点连接而成
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑视图</param>
/// <param name="element" type="twaver.ShapeLink">折线</param>
/// <returns type="twaver.canvas.ShapeLinkUI"></returns>
}

twaver.vector.ShapeLinkUI.prototype = new twaver.canvas.LinkUI()


twaver.vector.ShapeNodeUI = function (network, element) {
/// <summary>
/// 	多边形网元对应的多边形网元视图，多边形由一组点组成，并将这些点依次连接而组成
/// </summary>
/// <param name="network" type="twaver.canvas.Network">拓扑</param>
/// <param name="element" type="twaver.ShapeNode">多边形网元</param>
/// <returns type="twaver.canvas.ShapeNodeUI"></returns>
}

twaver.vector.ShapeNodeUI.prototype = new twaver.canvas.NodeUI()


twaver.charts.ChartBase = function (dataBox) {
/// <summary>
/// 	它是TWaver中所有Chart图的基类，定义了Chart上通用的方法。它是和DataBox绑定的，以Chart图的方式来展示数据容器中的数据
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.charts.ChartBase"></returns>
}

twaver.charts.ChartBase.prototype = new twaver.controls.ViewBase()

twaver.charts.ChartBase.prototype.addToolTipInfo = function (x, y, w, h, value, data, index) {
/// <summary>
/// 	添加Chart图中悬浮信息框的内容，TWaver内部调用，重写此方法可以更改Chart图上提示信息的显示内容
/// </summary>
/// <param name="x" type="Number">提示信息显示的X轴上的坐标</param>
/// <param name="y" type="Number">提示信息显示的Y轴上的坐标</param>
/// <param name="w" type="Number">提示信息显示的宽度</param>
/// <param name="h" type="Number">提示信息显示的高度</param>
/// <param name="value" type="String">提示信息显示的内容</param>
/// <param name="data" type="twaver.Data">提示信息所对应的数据对象</param>
/// <param name="index" type="Number">数据所对应的索引值</param>
}

twaver.charts.ChartBase.prototype.createPublishedDatas = function () {
/// <summary>
/// 	创建显示在Chart图上的数据，TWaver内部调用
/// </summary>
/// <returns type="twaver.List">所有发布的数据集合</returns>
}

twaver.charts.ChartBase.prototype.drawBackground = function (g, rect) {
/// <summary>
/// 	绘制图表的背景。当显示图表时，TWaver内部会调用此方法。
/// </summary>
/// <param name="g" type="Object">绘制图表背景的画笔</param>
/// <param name="rect" type="String">图表背景的显示矩形区域。rect是一个包含x,y,width,height的对象。</param>
}

twaver.charts.ChartBase.prototype.drawLine = function (g, color, width, x1, y1, x2, y2) {
/// <summary>
/// 	绘制一条直线，TWaver绘制图表时调用此方法
/// </summary>
/// <param name="g" type="Object">绘制图表的画笔</param>
/// <param name="color" type="String">绘制的直线颜色</param>
/// <param name="width" type="String">绘制的直线宽度</param>
/// <param name="x1" type="Number">直线的起始点X坐标值</param>
/// <param name="y1" type="Number">直线的起始点Y坐标值</param>
/// <param name="x2" type="Number">直线的终点X坐标值</param>
/// <param name="y2" type="Number">直线的终点Y坐标值</param>
}

twaver.charts.ChartBase.prototype.drawValueTexts = function (g) {
/// <summary>
/// 	绘制值，TWaver绘制图表时调用此方法
/// </summary>
/// <param name="g" type="Object">绘制图表的画笔</param>
}

twaver.charts.ChartBase.prototype.drawVerticalText = function (g, text, cx, font, color) {
/// <summary>
/// 	绘制垂直显示的文本内容，TWaver绘制图表时调用此方法
/// </summary>
/// <param name="g" type="Object">绘制图表的画笔</param>
/// <param name="text" type="String">绘制的文本内容</param>
/// <param name="cx" type="Object">文本显示为值的起始坐标点，它是一个包含x，y坐标值的对象</param>
/// <param name="font" type="Object">文本的字体</param>
/// <param name="color" type="String">文本的颜色</param>
}

twaver.charts.ChartBase.prototype.formatValueText = function (value, data) {
/// <summary>
/// 	格式化文本的值，当显示图表时调用此方法，用户可以重写这个方法来对显示的文本进行格式化
/// </summary>
/// <param name="value" type="String">需要格式的值</param>
/// <param name="data" type="twaver.Data">格式化的数据对象</param>
/// <returns type="String">格式化后的字符值</returns>
}

twaver.charts.ChartBase.prototype.getBackgroundFill = function () {
/// <summary>
/// 	获取图表的背景是否填充，默认为twaver.Defaults.CHART_BACKGROUND_FILL
/// </summary>
/// <returns type="Boolean">true为填充背景，否则为false</returns>
}

twaver.charts.ChartBase.prototype.getBackgroundFillColor = function () {
/// <summary>
/// 	获取图表背景的填充色，默认为twaver.Defaults.CHART_BACKGROUND_FILL_COLOR
/// </summary>
/// <returns type="String">背景的填充色</returns>
}

twaver.charts.ChartBase.prototype.getBackgroundGradient = function () {
/// <summary>
/// 	获取背景的渐变类型，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT。
/// 	渐变类型的可选值为：
/// 	'linear.southwest'：线性.南西
/// 	'linear.southeast'：线性.南东
/// 	'linear.northwest'：线性.北西
/// 	'linear.northeast'：线性.北东
/// 	'linear.north'：线性.北
/// 	'linear.south'：线性.南
/// 	'linear.west'：线性.西
/// 	'linear.east'：线性.东
/// 	'radial.center'：放射.中
/// 	'radial.southwest'：放射.南西
/// 	'radial.southeast'：放射.南东
/// 	'radial.northwest'：放射.北西
/// 	'radial.northeast'：放射.北东
/// 	'radial.north'：放射.北
/// 	'radial.south'：放射.南
/// 	'radial.west'：放射.西
/// 	'radial.east'：放射.东
/// 	'spread.horizontal':扩展.水平
/// 	'spread.vertical':扩展.垂直
/// 	'spread.diagonal':扩展.对角线
/// 	'spread.antidiagonal':扩展.反对角线
/// 	'spread.north':扩展.北
/// 	'spread.south':扩展.南
/// 	'spread.west':扩展.西
/// 	'spread.east':扩展.东
/// 	
/// </summary>
/// <returns type="String">渐变类型</returns>
}

twaver.charts.ChartBase.prototype.getBackgroundGradientColor = function () {
/// <summary>
/// 	获取背景的渐变颜色，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT_COLOR
/// </summary>
/// <returns type="String">渐变颜色</returns>
}

twaver.charts.ChartBase.prototype.getBackgroundOutlineColor = function () {
/// <summary>
/// 	获取背景的外边框颜色，默认为twaver.Defaults.CHART_BACKGROUND_OUTLINE_COLOR
/// </summary>
/// <returns type="String">外边框颜色</returns>
}

twaver.charts.ChartBase.prototype.getBackgroundOutlineWidth = function () {
/// <summary>
/// 	获取背景的外边框宽度，默认为 twaver.Defaults.CHART_BACKGROUND_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">外边框的宽度</returns>
}

twaver.charts.ChartBase.prototype.getBackgroundRect = function () {
/// <summary>
/// 	获取背景的显示区域
/// </summary>
/// <returns type="Object">背景的显示矩形范围</returns>
}

twaver.charts.ChartBase.prototype.getCanvas = function () {
/// <summary>
/// 	获取图表上的画板
/// </summary>
/// <returns type="Object">图表的画板</returns>
}

twaver.charts.ChartBase.prototype.getCanvasHeight = function () {
/// <summary>
/// 	获取画板的高度
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.ChartBase.prototype.getCanvasWidth = function () {
/// <summary>
/// 	获取画板的宽度
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.ChartBase.prototype.getColor = function (data) {
/// <summary>
/// 	绘制图表上指定数据的颜色，它取的是data中的chart.color值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="String">颜色值</returns>
}

twaver.charts.ChartBase.prototype.getDataAt = function () {
/// <summary>
/// 	获取指定坐标点上的数据对象。参数可以为1个或2个。当参数为一个时，可以是包含x，y坐标值的对象，也可以是鼠标事件对象；当参数为两个时，必须是x，y坐标
/// </summary>
/// <returns type="twaver.Data">数据对象</returns>
}

twaver.charts.ChartBase.prototype.getDataBox = function () {
/// <summary>
/// 	获取和这个图表绑定的数据容器
/// </summary>
/// <returns type="twaver.DataBox"></returns>
}

twaver.charts.ChartBase.prototype.getLogicalPoint = function (e) {
/// <summary>
/// 	通过鼠标事件获取当前鼠标点的逻辑坐标
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件对象</param>
/// <returns type="Object">包含x，y的坐标点的对象</returns>
}

twaver.charts.ChartBase.prototype.getMaxZoom = function () {
/// <summary>
/// 	获取最大的缩放比例值，默认为twaver.Defaults.ZOOM_MAX
/// </summary>
/// <returns type="Number">缩放比例值</returns>
}

twaver.charts.ChartBase.prototype.getMinZoom = function () {
/// <summary>
/// 	获取最小的缩放比例值，默认为twaver.Defaults.ZOOM_MIN
/// </summary>
/// <returns type="Number">缩放比例值</returns>
}

twaver.charts.ChartBase.prototype.getName = function (data) {
/// <summary>
/// 	获取指定数据的名称
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="String">数据的名称</returns>
}

twaver.charts.ChartBase.prototype.getOuterZoom = function () {
/// <summary>
/// 	获取外部缩放级别
/// </summary>
/// <returns type="Number">返回外部缩放级别</returns>
}

twaver.charts.ChartBase.prototype.getPublishedDatas = function () {
/// <summary>
/// 	获取显示在图表上的数据
/// </summary>
/// <returns type="twaver.List">所有发布的数据</returns>
}

twaver.charts.ChartBase.prototype.getSelectTolerance = function () {
/// <summary>
/// 	获取Chart上选择网元时的公差。默认值为twaver.Defaults.CHART_SELECT_TOLERANCE。当设置了这个值后，点击图表上的网元在这个偏差的范围值之内都能选中这个网元
/// </summary>
/// <returns type="Number">选择网元时的公差</returns>
}

twaver.charts.ChartBase.prototype.getSortFunction = function () {
/// <summary>
/// 	获取图表上排序的函数，默认为空
/// </summary>
/// <returns type="Function">排序的函数</returns>
}

twaver.charts.ChartBase.prototype.getTextSize = function (font, text) {
/// <summary>
/// 	获取图表上显示文本的大小
/// </summary>
/// <param name="font" type="Object">显示的字体</param>
/// <param name="text" type="String">文本值</param>
/// <returns type="Number">显示文本的大小，是一个包含width，height的对象</returns>
}

twaver.charts.ChartBase.prototype.getToolTipByData = function (data, info) {
/// <summary>
/// 	获取指定数据显示的提示信息
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="info" type="Object">关联信息</param>
/// <returns type="String">返回提示信息</returns>
}

twaver.charts.ChartBase.prototype.getUnfilteredDatas = function () {
/// <summary>
/// 	获取图表上所有显示的数据
/// </summary>
/// <returns type="twaver.List">显示的数据的集合</returns>
}

twaver.charts.ChartBase.prototype.getUniqueColor = function (color, data) {
/// <summary>
/// 	通过指定的对象和颜色值获取唯一的对象颜色值，用于区分不同的网元设置相同的颜色。如果对象设置了相同的颜色值，调用此方法可以对其中的一个颜色值做一些偏移
/// </summary>
/// <param name="color" type="String"></param>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="String">颜色值对象</returns>
}

twaver.charts.ChartBase.prototype.getValue = function (data) {
/// <summary>
/// 	获取指定的数据在图表上的值，默认取的是Style上的'chart.value'的值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="Object">指定的数据在图表上的值</returns>
}

twaver.charts.ChartBase.prototype.getValueColor = function (data) {
/// <summary>
/// 	获取指定的数据在图表上值的颜色，默认取的是Style上的'chart.value.color'的值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="String">指定的数据在图表上值的颜色</returns>
}

twaver.charts.ChartBase.prototype.getValueFont = function (data) {
/// <summary>
/// 	获取指定的数据在图表上值的字体，默认取的是Style上的'chart.value.font'的值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="String">指定的数据在图表上值的字体</returns>
}

twaver.charts.ChartBase.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取图表上是否可见的函数，这个函数可以过滤哪些网元显示，哪些不显示
/// </summary>
/// <returns type="Function">是否可见的过滤器函数</returns>
}

twaver.charts.ChartBase.prototype.getXGap = function () {
/// <summary>
/// 	获取水平方向的间距，默认为
/// 	twaver.Defaults.CHART_XGAP
/// 	
/// </summary>
/// <returns type="Number">水平方向的间距</returns>
}

twaver.charts.ChartBase.prototype.getXTranslate = function () {
/// <summary>
/// 	获取图表上X轴方向的偏移值，默认为0
/// 	
/// </summary>
/// <returns type="Number">X轴方向的偏移值</returns>
}

twaver.charts.ChartBase.prototype.getXZoom = function () {
/// <summary>
/// 	获取图表的X轴方向的缩放值，默认为1
/// </summary>
/// <returns type="Number">图表上X轴方向的缩放值</returns>
}

twaver.charts.ChartBase.prototype.getYGap = function () {
/// <summary>
/// 	获取垂直方向的间距，默认为
/// 	twaver.Defaults.CHART_YGAP
/// </summary>
/// <returns type="Number">垂直方向的间距</returns>
}

twaver.charts.ChartBase.prototype.getYTranslate = function () {
/// <summary>
/// 	获取图表上Y轴方向的偏移值，默认为0
/// </summary>
/// <returns type="Number">Y轴方向的偏移值</returns>
}

twaver.charts.ChartBase.prototype.getYZoom = function () {
/// <summary>
/// 	获取图表的Y轴方向的缩放值，默认为1
/// </summary>
/// <returns type="Number">Y轴方向的缩放值</returns>
}

twaver.charts.ChartBase.prototype.handleDataBoxChange = function (e) {
/// <summary>
/// 	当数据容器中数据发生变化时，TWaver内部会调用此方法，同步图表的显示。
/// </summary>
/// <param name="e" type="Object">数据容器更改的事件</param>
}

twaver.charts.ChartBase.prototype.handleHierarchyChange = function (e) {
/// <summary>
/// 	当数据的层次关系发生变化时，TWaver内部会调用此方法来更新图表的显示
/// </summary>
/// <param name="e" type="Object">层次关系变化的事件</param>
}

twaver.charts.ChartBase.prototype.handlePropertyChange = function (e) {
/// <summary>
/// 	当数据容器中的数据发生变化时，TWaver内部会调用此方法来更新图表的显示
/// </summary>
/// <param name="e" type="Object">数据更改事件</param>
}

twaver.charts.ChartBase.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	当选择容器中的数据发生变化时，TWaver内部会调用此方法来更新图表的显示
/// </summary>
/// <param name="e" type="Object">选择数据变化的事件</param>
}

twaver.charts.ChartBase.prototype.invalidateModel = function () {
/// <summary>
/// 	刷新和图表绑定的数据容器，当数据容器发生变化时，TWaver内部会调用此方法。用户不需要直接调用此方法，可以重载这个方法做自己的处理
/// </summary>
}

twaver.charts.ChartBase.prototype.isBackgroundVisible = function () {
/// <summary>
/// 	判断图表的背景是否可见，默认为twaver.Defaults.CHART_BACKGROUND_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，false不可见</returns>
}

twaver.charts.ChartBase.prototype.isDoubleClickToReset = function () {
/// <summary>
/// 	判断双击是否还原成默认的初始状态，默认为
/// 	twaver.Defaults.CHART_DOUBLE_CLICK_TO_RESET
/// </summary>
/// <returns type="Boolean"></returns>
}

twaver.charts.ChartBase.prototype.isToolTipEnabled = function () {
/// <summary>
/// 	判断悬浮信息框是否生效
/// </summary>
/// <returns type="Boolean">true为生效，否则为false</returns>
}

twaver.charts.ChartBase.prototype.isValueVisible = function () {
/// <summary>
/// 	判断图表上网元的值是否可见，默认为twaver.Defaults.CHART_VALUE_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.ChartBase.prototype.isVisible = function (data) {
/// <summary>
/// 	判断图表上指定的数据是否可见
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.ChartBase.prototype.isXTranslateEnabled = function () {
/// <summary>
/// 	是否允许X轴进行偏移，默认为twaver.Defaults.CHART_XTRANSLATE_ENABLED
/// </summary>
/// <returns type="Boolean"></returns>
}

twaver.charts.ChartBase.prototype.isXZoomEnabled = function () {
/// <summary>
/// 	判断X轴方向是否允许缩放，默认为 twaver.Defaults.CHART_XZOOM_ENABLED
/// </summary>
/// <returns type="Boolean"></returns>
}

twaver.charts.ChartBase.prototype.isYTranslateEnabled = function () {
/// <summary>
/// 	是否允许Y轴进行偏移，默认为twaver.Defaults.CHART_YTRANSLATE_ENABLED
/// </summary>
/// <returns type="Boolean"></returns>
}

twaver.charts.ChartBase.prototype.isYZoomEnabled = function () {
/// <summary>
/// 	判断Y轴方向是否允许缩放，默认为 twaver.Defaults.CHART_YZOOM_ENABLED
/// </summary>
/// <returns type="Boolean"></returns>
}

twaver.charts.ChartBase.prototype.onXZoomChanged = function (oldZoom, newZoom) {
/// <summary>
/// 	当X轴的缩放比例变化时，回调此方法。默认实现为空，用户可以重写这个方法进行自己的处理
/// </summary>
/// <param name="oldZoom" type="Number">X轴缩放的原值</param>
/// <param name="newZoom" type="Number">X轴缩放的新值</param>
}

twaver.charts.ChartBase.prototype.onYZoomChanged = function (oldZoom, newZoom) {
/// <summary>
/// 	当Y轴的缩放比例变化时，回调此方法。默认实现为空，用户可以重写这个方法进行自己的处理
/// </summary>
/// <param name="oldZoom" type="Number">Y轴缩放的原值</param>
/// <param name="newZoom" type="Number">Y轴缩放的新值</param>
}

twaver.charts.ChartBase.prototype.setBackgroundFill = function (v) {
/// <summary>
/// 	设置图表的背景是否填充，默认为twaver.Defaults.CHART_BACKGROUND_FILL
/// </summary>
/// <param name="v" type="Boolean">true为填充背景，否则为false</param>
}

twaver.charts.ChartBase.prototype.setBackgroundFillColor = function (v) {
/// <summary>
/// 	设置图表背景的填充色，默认为twaver.Defaults.CHART_BACKGROUND_FILL_COLOR
/// </summary>
/// <param name="v" type="String">背景的填充色</param>
}

twaver.charts.ChartBase.prototype.setBackgroundGradient = function (v) {
/// <summary>
/// 	设置背景的渐变类型，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT。
/// 	渐变类型的可选值为：
/// 	'linear.southwest'：线性.南西
/// 	'linear.southeast'：线性.南东
/// 	'linear.northwest'：线性.北西
/// 	'linear.northeast'：线性.北东
/// 	'linear.north'：线性.北
/// 	'linear.south'：线性.南
/// 	'linear.west'：线性.西
/// 	'linear.east'：线性.东
/// 	'radial.center'：放射.中
/// 	'radial.southwest'：放射.南西
/// 	'radial.southeast'：放射.南东
/// 	'radial.northwest'：放射.北西
/// 	'radial.northeast'：放射.北东
/// 	'radial.north'：放射.北
/// 	'radial.south'：放射.南
/// 	'radial.west'：放射.西
/// 	'radial.east'：放射.东
/// 	'spread.horizontal':扩展.水平
/// 	'spread.vertical':扩展.垂直
/// 	'spread.diagonal':扩展.对角线
/// 	'spread.antidiagonal':扩展.反对角线
/// 	'spread.north':扩展.北
/// 	'spread.south':扩展.南
/// 	'spread.west':扩展.西
/// 	'spread.east':扩展.东
/// 	
/// </summary>
/// <param name="v" type="String">渐变类型</param>
}

twaver.charts.ChartBase.prototype.setBackgroundGradientColor = function (v) {
/// <summary>
/// 	设置背景的渐变颜色，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT_COLOR
/// </summary>
/// <param name="v" type="String">渐变颜色</param>
}

twaver.charts.ChartBase.prototype.setBackgroundOutlineColor = function (v) {
/// <summary>
/// 	设置背景的外边框颜色，默认为twaver.Defaults.CHART_BACKGROUND_OUTLINE_COLOR
/// </summary>
/// <param name="v" type="String">外边框颜色</param>
}

twaver.charts.ChartBase.prototype.setBackgroundOutlineWidth = function (v) {
/// <summary>
/// 	设置背景的外边框宽度，默认为 twaver.Defaults.CHART_BACKGROUND_OUTLINE_WIDTH
/// </summary>
/// <param name="v" type="Number">外边框的宽度</param>
}

twaver.charts.ChartBase.prototype.setBackgroundVisible = function (v) {
/// <summary>
/// 	设置图表的背景是否可见，默认为twaver.Defaults.CHART_BACKGROUND_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，false不可见</param>
}

twaver.charts.ChartBase.prototype.setDataBox = function (dataBox) {
/// <summary>
/// 	设置和这个图表绑定的数据容器
/// </summary>
/// <param name="dataBox" type="twaver.DataBox"></param>
}

twaver.charts.ChartBase.prototype.setDoubleClickToReset = function (v) {
/// <summary>
/// 	设置双击是否还原的默认的初始状态，默认为
/// 	twaver.Defaults.CHART_DOUBLE_CLICK_TO_RESET
/// </summary>
/// <param name="v" type="Boolean"></param>
}

twaver.charts.ChartBase.prototype.setMaxZoom = function (value) {
/// <summary>
/// 	设置最大的缩放比例值，默认为twaver.Defaults.ZOOM_MAX
/// </summary>
/// <param name="value" type="Number">缩放比例值</param>
}

twaver.charts.ChartBase.prototype.setMinZoom = function (value) {
/// <summary>
/// 	设置最小的缩放比例值，默认为twaver.Defaults.ZOOM_MIN
/// </summary>
/// <param name="value" type="Number">缩放比例值</param>
}

twaver.charts.ChartBase.prototype.setOuterZoom = function (v) {
/// <summary>
/// 	设置外部缩放级别
/// </summary>
/// <param name="v" type="Number">外部缩放级别</param>
}

twaver.charts.ChartBase.prototype.setSelectTolerance = function (v) {
/// <summary>
/// 	设置Chart上选择网元时的公差。默认值为twaver.Defaults.CHART_SELECT_TOLERANCE。当设置了这个值后，点击图表上的网元在这个偏差的范围值之内都能选中这个网元
/// </summary>
/// <param name="v" type="Number">选择网元时的公差</param>
}

twaver.charts.ChartBase.prototype.setSortFunction = function (v) {
/// <summary>
/// 	设置图表上排序的函数，默认为空
/// </summary>
/// <param name="v" type="Function">排序的函数</param>
}

twaver.charts.ChartBase.prototype.setToolTipEnabled = function (value) {
/// <summary>
/// 	设置悬浮信息框是否生效
/// </summary>
/// <param name="value" type="Boolean">true为生效，否则为false</param>
}

twaver.charts.ChartBase.prototype.setValueFont = function (value) {
/// <summary>
/// 	设置指定的数据在图表上显示值的字体
/// </summary>
/// <param name="value" type="String">指定的数据在图表上值的字体</param>
}

twaver.charts.ChartBase.prototype.setValueVisible = function (v) {
/// <summary>
/// 	设置图表上网元的值是否可见，默认为twaver.Defaults.CHART_VALUE_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.ChartBase.prototype.setVisibleFunction = function (v) {
/// <summary>
/// 	设置图表上是否可见的函数，这个函数可以过滤哪些网元显示，哪些不显示
/// </summary>
/// <param name="v" type="Function">是否可见的过滤器函数</param>
}

twaver.charts.ChartBase.prototype.setXGap = function (v) {
/// <summary>
/// 	设置水平方向的间距，默认为twaver.Defaults.CHART_XGAP
/// </summary>
/// <param name="v" type="Number">水平方向的间距</param>
}

twaver.charts.ChartBase.prototype.setXTranslate = function (v) {
/// <summary>
/// 	设置图表上X轴方向的偏移值，默认为0
/// </summary>
/// <param name="v" type="Number">X轴方向的偏移值</param>
}

twaver.charts.ChartBase.prototype.setXTranslateEnabled = function (v) {
/// <summary>
/// 	设置是否允许X轴进行偏移，默认为twaver.Defaults.CHART_XTRANSLATE_ENABLED
/// </summary>
/// <param name="v" type="Boolean"></param>
}

twaver.charts.ChartBase.prototype.setXZoom = function (value, animate) {
/// <summary>
/// 	设置图表的X轴方向的缩放值，默认为1
/// </summary>
/// <param name="value" type="Number">X轴方向的缩放值</param>
/// <param name="animate" type="Boolean">true为需要动画，false不需要动画</param>
}

twaver.charts.ChartBase.prototype.setXZoomEnabled = function (v) {
/// <summary>
/// 	设置X轴方向是否允许缩放，默认为 twaver.Defaults.CHART_XZOOM_ENABLED
/// </summary>
/// <param name="v" type="Boolean"></param>
}

twaver.charts.ChartBase.prototype.setYGap = function (v) {
/// <summary>
/// 	设置垂直方向的间距，默认为twaver.Defaults.CHART_YGAP
/// </summary>
/// <param name="v" type="Number">垂直方向的间距</param>
}

twaver.charts.ChartBase.prototype.setYTranslate = function (v) {
/// <summary>
/// 	设置图表上Y轴方向的偏移值，默认为0
/// </summary>
/// <param name="v" type="Number">Y轴方向的偏移值</param>
}

twaver.charts.ChartBase.prototype.setYTranslateEnabled = function (v) {
/// <summary>
/// 	设置是否允许Y轴进行偏移，默认为twaver.Defaults.CHART_YTRANSLATE_ENABLED
/// </summary>
/// <param name="v" type="Boolean"></param>
}

twaver.charts.ChartBase.prototype.setYZoom = function (value, animate) {
/// <summary>
/// 	设置图表的Y轴方向的缩放值，默认为1
/// </summary>
/// <param name="value" type="Number">Y轴方向的缩放值</param>
/// <param name="animate" type="Boolean">true为需要动画，false不需要动画</param>
}

twaver.charts.ChartBase.prototype.setYZoomEnabled = function (v) {
/// <summary>
/// 	设置Y轴方向是否允许缩放，默认为 twaver.Defaults.CHART_YZOOM_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为允许缩放，否则为false</param>
}

twaver.charts.ChartBase.prototype.tryGetDataAt = function (point, tolerance) {
/// <summary>
/// 	通过指定的鼠标点和公差来获取当前鼠标下的数据，如果当前鼠标点下没有网元，但是在公差的范围值下有网元存在，也会将这个网元返回
/// </summary>
/// <param name="point" type="Object">鼠标点对象，是一个包含target,x,y的对象</param>
/// <param name="tolerance" type="Number">公差的范围值</param>
/// <returns type="twaver.Data"></returns>
}

twaver.charts.ChartBase.prototype.validateDisplay = function (g, width, height) {
/// <summary>
/// 	刷新图表的显示界面，当图表发生变化时或数据模型更改时，TWaver会自动调用此方法，用户不需要直接调用此方法，可以重载这个方法做自己的处理
/// </summary>
/// <param name="g" type="Object">绘制图表的画笔</param>
/// <param name="width" type="Number">刷新显示区域的宽度</param>
/// <param name="height" type="String">刷新显示区域的高度</param>
}

twaver.charts.ChartBase.prototype.validateModel = function () {
/// <summary>
/// 	重画视图组件，当视图组件中绑定的数据发生变化时，须调用此方法，让组件重画
/// </summary>
}

twaver.charts.ChartBase.prototype.xZoomIn = function (animate) {
/// <summary>
/// 	对图表的X轴方向进行放大
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.xZoomOut = function (animate) {
/// <summary>
/// 	对图表的X轴方向进行缩小
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.xZoomReset = function (animate) {
/// <summary>
/// 	对图表的X轴方向还原至默认的缩放状态
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.yZoomIn = function (animate) {
/// <summary>
/// 	对图表的Y轴方向进行放大
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.yZoomOut = function (animate) {
/// <summary>
/// 	对图表的Y轴方向进行缩小
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.yZoomReset = function (animate) {
/// <summary>
/// 	对图表的Y轴方向还原至默认的缩放状态
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.zoomIn = function (animate) {
/// <summary>
/// 	对图表进行整体放大
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.zoomOut = function (animate) {
/// <summary>
/// 	对图表进行整体缩小
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}

twaver.charts.ChartBase.prototype.zoomReset = function (animate) {
/// <summary>
/// 	将图表的整体还原至默认的缩放状态
/// </summary>
/// <param name="animate" type="Boolean">是否需要动画效果</param>
}


twaver.controls.View = function () {
/// <summary>
/// 	可缩放的视图基类
/// </summary>
/// <returns type="twaver.controls.View"></returns>
}

twaver.controls.View.prototype = new twaver.controls.ViewBase()

twaver.controls.View.prototype.centerByLogicalPoint = function (x, y, animate) {
/// <summary>
/// 	将视图的中心点滚动到指定的逻辑坐标
/// </summary>
/// <param name="x" type="Number">视图中心点x坐标</param>
/// <param name="y" type="Number">视图中心点y坐标</param>
/// <param name="animate" type="Boolean">可选，如果为true，则有动画效果，否者没有，默认为false</param>
}

twaver.controls.View.prototype.checkZoom = function (value) {
/// <summary>
/// 	如果缩放级别大于maxZoom，则返回maxZoom；如果小于minZoom，则返回minZoom
/// </summary>
/// <param name="value" type="Number">缩放级别</param>
/// <returns type="Number">返回修正后的缩放级别</returns>
}

twaver.controls.View.prototype.getAlarmFillColor = function (data) {
/// <summary>
/// 	获取指定数据元的告警填充色，默认如果数据元是网元，则返回网元的最高新发告警颜色，否则返回null
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="String">返回指定数据元的告警填充色</returns>
}

twaver.controls.View.prototype.getInnerColor = function (data) {
/// <summary>
/// 	获取指定数据元的填充颜色，默认如果数据元是网元，而且有新发告警，则返回最高级别新发告警的颜色，否则返回样式属性inner.color的值
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="String">返回指定数据元的填充颜色</returns>
}

twaver.controls.View.prototype.getLogicalPoint = function (e) {
/// <summary>
/// 	获取鼠标所在的逻辑坐标，包含x，y属性
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Object">返回鼠标所在的逻辑坐标，包含x，y属性</returns>
/// <example>
/// 	network.getView().addEventListener('mousedown', function (e) {
/// 	    var point = network.getLogicalPoint(e);
/// 	    console.log(point.x, point.y);
/// 	});
/// </example>
}

twaver.controls.View.prototype.getMaxZoom = function () {
/// <summary>
/// 	获取最大缩放级别
/// </summary>
/// <returns type="Number">返回最大缩放级别</returns>
}

twaver.controls.View.prototype.getMinZoom = function () {
/// <summary>
/// 	获取最小缩放级别
/// </summary>
/// <returns type="Number">返回最小缩放级别</returns>
}

twaver.controls.View.prototype.getOuterColor = function (data) {
/// <summary>
/// 	获取指定数据元的边框颜色，默认情况下，如果数据元是网元，而且有传播告警，则返回传播告警的颜色，否者返回属性为outer.color的style值
/// </summary>
/// <param name="data" type="twaver.Data">数据元</param>
/// <returns type="String">返回指定数据元的边框颜色</returns>
}

twaver.controls.View.prototype.getRootDiv = function () {
/// <summary>
/// 	获取根div元素
/// </summary>
/// <returns type="HTMLDivElement">返回根div元素</returns>
}

twaver.controls.View.prototype.getZoom = function () {
/// <summary>
/// 	获取当前缩放级别
/// </summary>
/// <returns type="Number">返回当前缩放级别</returns>
}

twaver.controls.View.prototype.isValidEvent = function (e) {
/// <summary>
/// 	获取指定鼠标事件是否合法，如果鼠标所在的位置在滚动条上，则不合法，否则合法
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Boolean">如果指定鼠标事件是合法的，则返回true，否则返回false</returns>
}

twaver.controls.View.prototype.onZoomChanged = function (oldZoom, newZoom) {
/// <summary>
/// 	缩放级别变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
/// </summary>
/// <param name="oldZoom" type="Number">旧缩放级别</param>
/// <param name="newZoom" type="Number">新缩放级别</param>
}

twaver.controls.View.prototype.panByOffset = function (xoffset, yoffset) {
/// <summary>
/// 	滚动水平和垂直滚动条指定偏移量
/// </summary>
/// <param name="xoffset" type="Number">x坐标偏移量</param>
/// <param name="yoffset" type="Number">y坐标偏移量</param>
/// <returns type="Object">返回实际偏移量，为包含x和y属性的对象</returns>
}

twaver.controls.View.prototype.setMaxZoom = function (value) {
/// <summary>
/// 	设置最大缩放级别
/// </summary>
/// <param name="value" type="Number">缩放级别</param>
}

twaver.controls.View.prototype.setMinZoom = function (value) {
/// <summary>
/// 	设置最小缩放级别
/// </summary>
/// <param name="value" type="Number">缩放级别</param>
}

twaver.controls.View.prototype.setTouchZoom = function (z) {
/// <summary>
/// 	触摸模式下设置缩放级别
/// </summary>
/// <param name="z" type="Number">缩放级别</param>
}

twaver.controls.View.prototype.setZoom = function (value, animate) {
/// <summary>
/// 	设置当前缩放级别
/// </summary>
/// <param name="value" type="Number">缩放级别</param>
/// <param name="animate" type="Boolean">缩放时，是否有动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE</param>
}

twaver.controls.View.prototype.zoomIn = function (animate) {
/// <summary>
/// 	将视图放大twaver.Defaults.ZOOM_INCREMENT倍
/// </summary>
/// <param name="animate" type="Boolean">是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE</param>
}

twaver.controls.View.prototype.zoomOut = function (animate) {
/// <summary>
/// 	将视图缩小twaver.Defaults.ZOOM_INCREMENT倍
/// </summary>
/// <param name="animate" type="Boolean">是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE</param>
}

twaver.controls.View.prototype.zoomOverview = function (animate) {
/// <summary>
/// 	将视图缩放到让所有数据元可见
/// </summary>
/// <param name="animate" type="Boolean">是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE</param>
}

twaver.controls.View.prototype.zoomReset = function (animate) {
/// <summary>
/// 	还原缩放级别为1
/// </summary>
/// <param name="animate" type="Boolean">是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE</param>
}


twaver.Dummy = function (id) {
/// <summary>
/// 	哑节点是一种在network视图中不可见的网元。哑节点虽然不显示在network上，但是在DataBox中是实际存在的，并且它可以有自己的孩子和父亲节点。
/// 	哑节点可以在tree，table或其他组件中显示，通常哑节点是用于组织数据的，比如在tree上管理网元的层次关系
/// </summary>
/// <param name="id" type="Object">哑节点ID，用于唯一标识网元。如果为空，TWaver会按照默认的规则给哑节点ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是哑节点的ID，如果为Object类型，可以传入一个带哑节点属性的对象，比如： var dummy = new twaver.Dummy({     name:'dummy',      clients:{'bussinessID':125} });</param>
/// <returns type="twaver.Dummy">哑节点对象本身</returns>
}

twaver.Dummy.prototype = new twaver.Element()

twaver.Dummy.prototype.IDummy = function () {
/// <field type="Boolean">是否为哑节点的标识</field>
}


twaver.Link = function (id, fromNode, toNode) {
/// <summary>
/// 	Link是一种网元，它表现为Network上的连线。它在电信拓扑中用于展示链路或基于数据的连线。比如带有物理或逻辑意义的电缆，电路,路由线路，环路等。
/// 	
/// 	连线是和节点一起使用的。一条连线必须有起始、结束节点，起始节点和结束节点不能为空。
/// 	
/// 	当起始节点和结束节点相同时，这种连线成为自环连线。自环连线可以展示为半矩形或半圆形。当两个节点之间有多条连线时，默认可以双击绑定。TWaver会根据默认的规则选定一条连线做为代理连线，其他的连线都会隐藏。当然，也可以更改TWaver的这种代理的规则。
/// 	
/// 	连线和一般网元类似，也可以进行序列化和反序列化。
/// 	
/// 		 
/// </summary>
/// <param name="id" type="Object">连线ID，用于唯一标识网元。如果为空，TWaver会按照默认的规则给连线ID赋值。ID可以为string，number类型，可以为Node类型，也可以为Object类型。为string或number类型时指的是连线的ID，为Node类型时，fromNode和toNode相同，都为ID参数传入的Node对象。如果为Object类型，可以传入一个带连线属性的对象，比如： var link = new twaver.Link({     name:'linkname',     fromNode: twNode,   toNode:bbNode });</param>
/// <param name="fromNode" type="twaver.Node">起始节点</param>
/// <param name="toNode" type="twaver.Node">结束节点</param>
/// <returns type="twaver.Link">连线对象本身</returns>
}

twaver.Link.prototype = new twaver.Element()

twaver.Link.IS_INTERESTED_BUNDLE_STYLE = function () {
/// <field type="Object">触发连线捆绑更改的相关属性样式。默认有：'link.bundle.enable'，'link.bundle.id'，'link.bundle.independent'</field>
}

twaver.Link.prototype.getBundleCount = function () {
/// <summary>
/// 	获取和这条连线捆绑的连线数量
/// </summary>
/// <returns type="Number">捆绑数量</returns>
}

twaver.Link.prototype.getBundleIndex = function () {
/// <summary>
/// 	得到捆绑的顺序号
/// </summary>
/// <returns type="Number">捆绑的顺序号</returns>
}

twaver.Link.prototype.getBundleLinks = function () {
/// <summary>
/// 	获取和这条连线捆绑的所有连线集合
/// </summary>
/// <returns type="twaver.List">连线集合</returns>
}

twaver.Link.prototype.getFromAgent = function () {
/// <summary>
/// 	获取连线的起始节点的代理
/// </summary>
/// <returns type="twaver.Node">起始节点代理</returns>
}

twaver.Link.prototype.getFromNode = function () {
/// <summary>
/// 	获取连线的起始节点
/// </summary>
/// <returns type="twaver.Node">起始节点</returns>
}

twaver.Link.prototype.getToAgent = function () {
/// <summary>
/// 	获取连线的结束节点代理
/// </summary>
/// <returns type="twaver.Node">结束节点的代理</returns>
}

twaver.Link.prototype.getToNode = function () {
/// <summary>
/// 	获取连线的结束节点
/// </summary>
/// <returns type="twaver.Node">结束节点</returns>
}

twaver.Link.prototype.isBundleAgent = function () {
/// <summary>
/// 	判断是否为绑定连线的代理
/// </summary>
/// <returns type="Boolean">绑定连线的代理</returns>
}

twaver.Link.prototype.isLooped = function () {
/// <summary>
/// 	判断是否为自环连线
/// </summary>
/// <returns type="Boolean">true为自环，否则为false。</returns>
}

twaver.Link.prototype.reverseBundleExpanded = function () {
/// <summary>
/// 	反转连线捆绑的状态。如果这条link处于展开状态，调用这个方法，就会将所有和这条连线捆绑的links都合并，反之亦然。
/// </summary>
/// <returns type="Boolean">true为反转成功，否则为false</returns>
}

twaver.Link.prototype.setFromNode = function (fromNode) {
/// <summary>
/// 	设置连线的起始节点
/// </summary>
/// <param name="fromNode" type="twaver.Node">起始节点</param>
}

twaver.Link.prototype.setToNode = function (toNode) {
/// <summary>
/// 	设置连线的结束节点
/// </summary>
/// <param name="toNode" type="Boolean">结束节点</param>
}


twaver.Node = function (id) {
/// <summary>
/// 	构造函数。
/// 	节点是TWaver HTML5中最常见的一种网元。它在电信网络拓扑中表现为一种虚拟节点。节点上可以设置图片，标签，告警，附件等信息。电信拓扑中的任意网元都可以用节点来表示，比如说服务器，电脑，路由器，交换机等
/// </summary>
/// <param name="id" type="Object">节点ID，用于唯一标识这个节点。如果为空，TWaver会按照默认的规则给节点ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是节点的ID，如果为Object类型，可以传入一个带节点属性的对象，比如： var node = new twaver.Node({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.Node">节点对象本身</returns>
}

twaver.Node.prototype = new twaver.Element()

twaver.Node.IS_INTERESTED_NODE_PROPERTY = function () {
/// <field type="Object">触发网元更改的相关属性</field>
}

twaver.Node.prototype.getAgentLinks = function () {
/// <summary>
/// 	获取这个节点上所有代理连线的集合
/// </summary>
/// <returns type="twaver.List">代理连线的集合</returns>
}

twaver.Node.prototype.getAngle = function () {
/// <summary>
/// 	获取节点的旋转角度，单位为度
/// </summary>
/// <returns type="Number">返回节点的旋转角度，单位为度</returns>
}

twaver.Node.prototype.getCenterLocation = function () {
/// <summary>
/// 	得到这个节点的中心位置。如果想获取左上角的位置，需使用getLocation
/// </summary>
/// <returns type="Object">节点的中心位置。是一个包含x，y值的对象，比如{x:10,y:10}</returns>
}

twaver.Node.prototype.getFollowers = function () {
/// <summary>
/// 	获取这个节点的所有跟随者。若想了解跟随者的概念，可参考跟随者类
/// </summary>
/// <returns type="twaver.List">跟随者的集合</returns>
}

twaver.Node.prototype.getFromAgentLinks = function () {
/// <summary>
/// 	获取从这个节点出发的所有代理连线的集合
/// </summary>
/// <returns type="twaver.List">代理连线的集合</returns>
}

twaver.Node.prototype.getFromLinks = function () {
/// <summary>
/// 	获取以这个节点为起始节点的所有连线的集合
/// </summary>
/// <returns type="twaver.List">连线的集合</returns>
}

twaver.Node.prototype.getHeight = function () {
/// <summary>
/// 	获取网元的高度。若网元上设置了高度，则返回设置的高度值。否则如果网元上设置了图片，那么高度就是网元图片的高度。如果什么都没设置，则会返回默认的高度，默认高度为50像素
/// </summary>
/// <returns type="Number">节点的高度</returns>
}

twaver.Node.prototype.getImage = function () {
/// <summary>
/// 	获取网元上图片的名称
/// </summary>
/// <returns type="String">网元图片的名称</returns>
}

twaver.Node.prototype.getLinks = function () {
/// <summary>
/// 	获取和这个网元相连的所有连线
/// </summary>
/// <returns type="twaver.List">连线的集合</returns>
}

twaver.Node.prototype.getLocation = function () {
/// <summary>
/// 	获取网元的位置。网元的位置指的是网元左上角的位置
/// </summary>
/// <returns type="Object">节点网元的位置。是一个包含x，y值的对象，比如{x:10,y:10}</returns>
}

twaver.Node.prototype.getLoopedLinks = function () {
/// <summary>
/// 	获取这个节点上所有自环的连线
/// </summary>
/// <returns type="twaver.List">自环连线的集合</returns>
}

twaver.Node.prototype.getOriginalRect = function () {
/// <summary>
/// 	获取节点未旋转前的矩形区域
/// </summary>
/// <returns type="Object">返回节点未旋转前的矩形区域</returns>
}

twaver.Node.prototype.getRect = function () {
/// <summary>
/// 	获取网元的形状
/// </summary>
/// <returns type="Object">网元形状。是一个包含网元下x,y坐标以及宽高的对象。例如：{x:200,y:200,width:50,height:50}</returns>
}

twaver.Node.prototype.getSize = function () {
/// <summary>
/// 	获取网元的大小
/// </summary>
/// <returns type="String">是一个包含节点宽高的对象。例如：{width:50,height:50}</returns>
}

twaver.Node.prototype.getToAgentLinks = function () {
/// <summary>
/// 	获取到这个节点的所有代理连线的集合
/// </summary>
/// <returns type="twaver.List">代理连线的集合</returns>
}

twaver.Node.prototype.getToLinks = function () {
/// <summary>
/// 	获取到这个节点的所有连线的集合
/// </summary>
/// <returns type="twaver.List">连线的集合</returns>
}

twaver.Node.prototype.getWidth = function () {
/// <summary>
/// 	获取网元的宽度。若网元上设置了宽度，则返回设置的宽度值。否则如果网元上设置了图片，宽度就是网元图片的宽度。如果什么都没设置，则会返回默认的宽度，默认宽度为50像素
/// </summary>
/// <returns type="Number">节点的宽度</returns>
}

twaver.Node.prototype.getX = function () {
/// <summary>
/// 	获取网元的X坐标。X坐标为网元坐上角的坐标
/// </summary>
/// <returns type="Number">网元的X坐标</returns>
}

twaver.Node.prototype.getY = function () {
/// <summary>
/// 	获取网元的Y坐标。Y坐标为网元左上角的坐标
/// </summary>
/// <returns type="Number">网元的Y坐标</returns>
}

twaver.Node.prototype.hasAgentLinks = function () {
/// <summary>
/// 	判断这个节点上是否有代理的连线
/// </summary>
/// <returns type="Boolean">true为节点上有代理连线，否则为false</returns>
}

twaver.Node.prototype.setAngle = function (angle) {
/// <summary>
/// 	设置节点的旋转角度，单位为度
/// </summary>
/// <param name="angle" type="Number">节点的旋转角度，单位为度</param>
}

twaver.Node.prototype.setCenterLocation = function (x, y) {
/// <summary>
/// 	设置这个节点的中心位置。如果想设置左上角的位置，需使用setLocation。参数可以为一个或两个。如果是一个，则传入的必须是一个带x，y坐标的对象，例如：{x:100,y:100}；如果传入的是两个，第一个参数为x坐标，第二个参数为y坐标
/// </summary>
/// <param name="x" type="Object">x坐标或者包含x和y属性的Object对象</param>
/// <param name="y" type="Number">y坐标, 如果第一个参数为包含x和y属性的Object对象, 则此参数忽略</param>
}

twaver.Node.prototype.setHeight = function (height) {
/// <summary>
/// 	设置网元的高度
/// </summary>
/// <param name="height" type="Number">网元高度值</param>
}

twaver.Node.prototype.setImage = function (image) {
/// <summary>
/// 	设置网元上图片的名称。图片名称需要先注册后才可以使用
/// </summary>
/// <param name="image" type="String">网元图片的名称</param>
}

twaver.Node.prototype.setLocation = function (x, y) {
/// <summary>
/// 	设置网元的位置。网元的位置指的是网元左上角的位置。参数可以为一个或两个。如果是一个，则传入的必须是一个带x，y坐标的对象，例如：{x:100,y:100}；如果传入的是两个，第一个参数为x坐标，第二个参数为y坐标
/// </summary>
/// <param name="x" type="Object">x坐标或者包含x和y属性的Object对象</param>
/// <param name="y" type="Number">y坐标, 如果第一个参数为包含x和y属性的Object对象, 则此参数忽略</param>
}

twaver.Node.prototype.setSize = function () {
/// <summary>
/// 	设置网元的大小。网元的大小指的是网元宽高。参数可以为一个或两个。如果是一个，则传入的必须是一个带width，height坐标的对象，例如：{width:100,height:100}；如果传入的是两个，第一个参数为宽度，第二个参数为高度
/// </summary>
}

twaver.Node.prototype.setWidth = function (width) {
/// <summary>
/// 	设置网元的宽度
/// </summary>
/// <param name="width" type="Number">网元的宽度</param>
}

twaver.Node.prototype.setX = function (x) {
/// <summary>
/// 	设置X坐标。Z坐标指的是网元左上角X的值
/// </summary>
/// <param name="x" type="Number">X坐标</param>
}

twaver.Node.prototype.setY = function (y) {
/// <summary>
/// 	设置Y坐标。Y坐标指的是网元左上角Y的值
/// </summary>
/// <param name="y" type="Number">Y坐标值</param>
}

twaver.Node.prototype.translate = function (x, y) {
/// <summary>
/// 	设置网元相对于原来的位置偏移一定的值
/// </summary>
/// <param name="x" type="Number">偏移X个像素</param>
/// <param name="y" type="Number">偏移Y个像素</param>
}


twaver.canvas.Network = function (elementBox) {
/// <summary>
/// 	用指定的ElementBox构造Network，ElementBox是Network的数据容器，如果为null则twaver内部会创建一个新的ElementBox；而且在构造Network后，也可以用Network#setElementBox方法重新绑定一个新的ElementBox
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">可选，默认为null，和Network关联的数据容器</param>
/// <returns type="twaver.network.Network"></returns>
/// <example>
/// 	var box = new twaver.ElementBox();
/// 	var tree = new twaver.controls.Tree(box);
/// 	var network = new twaver.network.Network(box);
/// </example>
}

twaver.canvas.Network.prototype = new twaver.controls.View()

twaver.canvas.Network.prototype.addElementByInteraction = function (element) {
/// <summary>
/// 	添加网元，并派发createElement类型的事件。CreateElementInteraction、CreateLinkInteraction、CreateShapeLinkInteraction和CreateShapeNodeInteraction会调用此方法
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.canvas.Network.prototype.addMarker = function (marker) {
/// <summary>
/// 	添加标记
/// </summary>
/// <param name="marker" type="Object">带paint方法的对象</param>
}

twaver.canvas.Network.prototype.clearMarker = function () {
/// <summary>
/// 	清空标记
/// </summary>
}

twaver.canvas.Network.prototype.createElementUI = function (element) {
/// <summary>
/// 	创建和指定Element关联的ElementUI，添加网元到和Network关联的ElementBox时会触发调用此方法，用户不需要调用此方法，但可以重载此方法
/// </summary>
/// <param name="element" type="twaver.Element">用于创建和网元关联的ElementUI</param>
}

twaver.canvas.Network.prototype.dispose = function () {
/// <summary>
/// 	销毁拓扑图
/// </summary>
}

twaver.canvas.Network.prototype.getAlarmLabel = function (element) {
/// <summary>
/// 	获取指定网元的告警冒泡文字内容，默认返回网元的最高新发告警数和别名，如果还有低级别的新发告警则前面带一个+号（比如+3C代表有3个严重告警，并且还有其他低级别新发告警），如果没有新发告警，则返回null
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="String">返回指定网元的告警冒泡文字内容</returns>
}

twaver.canvas.Network.prototype.getBackgroundImage = function () {
/// <summary>
/// 	获取背景图片
/// </summary>
/// <returns type="HTMLImageElement">返回背景图片</returns>
}

twaver.canvas.Network.prototype.getBackgroundImageRect = function () {
/// <summary>
/// 	获取背景图片边界
/// </summary>
/// <returns type="Object">返回背景图片边界</returns>
}

twaver.canvas.Network.prototype.getCanvasSize = function () {
/// <summary>
/// 	获取拓扑图大小
/// </summary>
/// <returns type="Object">返回拓扑图大小</returns>
}

twaver.canvas.Network.prototype.getCurrentSubNetwork = function () {
/// <summary>
/// 	获取当前子网，如果是最顶层子网则返回null
/// </summary>
/// <returns type="twaver.SubNetwork">返回当前子网，如果是最顶层子网则返回null</returns>
}

twaver.canvas.Network.prototype.getEditableFunction = function () {
/// <summary>
/// 	获取网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
/// </summary>
/// <returns type="Function">返回网元可编辑过滤器</returns>
}

twaver.canvas.Network.prototype.getEditLineColor = function () {
/// <summary>
/// 	获取创建连线时连线的颜色，默认值为twaver.Defaults.NETWORK_EDIT_LINE_COLOR
/// </summary>
/// <returns type="String">返回创建连线时连线的颜色</returns>
}

twaver.canvas.Network.prototype.getEditLineWidth = function () {
/// <summary>
/// 	获取创建连线时连线的宽度，默认值为twaver.Defaults.NETWORK_EDIT_LINE_WIDTH
/// </summary>
/// <returns type="Number">返回创建连线时连线的宽度</returns>
}

twaver.canvas.Network.prototype.getEditPointFillColor = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的填充色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR
/// </summary>
/// <returns type="String">返回编辑ShapeNode或ShapeLink时控制点的填充色</returns>
}

twaver.canvas.Network.prototype.getEditPointOutlineColor = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回编辑ShapeNode或ShapeLink时控制点的边框颜色</returns>
}

twaver.canvas.Network.prototype.getEditPointOutlineWidth = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回编辑ShapeNode或ShapeLink时控制点的边框宽度</returns>
}

twaver.canvas.Network.prototype.getEditPointSize = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的大小，默认值为twaver.Defaults.NETWORK_EDIT_POINT_SIZE
/// </summary>
/// <returns type="Number">返回编辑ShapeNode或ShapeLink时控制点的大小</returns>
}

twaver.canvas.Network.prototype.getElementAt = function (point, selectable) {
/// <summary>
/// 	获取指定坐标点或者当前鼠标下的网元
/// </summary>
/// <param name="point" type="Object">可以为坐标点或者鼠标事件</param>
/// <param name="selectable" type="Boolean">如果为true，则只返回可以被选择的网元，否则不可选中的网元也可以返回，可选，默认值为true</param>
/// <returns type="twaver.Element">返回坐标点或者当前鼠标下的网元</returns>
/// <example>
/// 	network.getView().addEventListener('mousedown', function (e) {
/// 	    var point = network.getLogicalPoint(e);
/// 	    console.log(network.getElementAt(e));
/// 	    console.log(network.getElementAt(point));
/// 	});
/// </example>
}

twaver.canvas.Network.prototype.getElementBox = function () {
/// <summary>
/// 	获取和Network绑定的ElementBox网元容器
/// </summary>
/// <returns type="twaver.ElementBox">返回和Network绑定的ElementBox网元容器</returns>
}

twaver.canvas.Network.prototype.getElementsAtRect = function (rect, intersectMode, filter, selectable) {
/// <summary>
/// 	获取矩形区域包含或相交网元
/// </summary>
/// <param name="rect" type="Object">矩形区域</param>
/// <param name="intersectMode" type="Boolean">如果为true则只要和矩形区域相交的网元都返回，否则只返回矩形区域包含的网元，可选，默认值为false</param>
/// <param name="filter" type="Function">过滤器, 可选, 默认值为null</param>
/// <param name="selectable" type="Boolean">网元是否可选择，默认为true</param>
/// <returns type="twaver.List">返回矩形区域包含或相交网元</returns>
/// <example>
/// 	var elements = network.getElementsAtRect({x:0, y:0, width:100, height:100});
/// </example>
}

twaver.canvas.Network.prototype.getElementUI = function (element) {
/// <summary>
/// 	获取和网元关联的视图对象
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.network.ElementUI">返回和网元关联的视图对象</returns>
}

twaver.canvas.Network.prototype.getElementUIFunction = function () {
/// <summary>
/// 	获取网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
/// 	twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
/// 	    var clazz = element.getElementUIClass();
/// 	    if (clazz) {
/// 	         return new clazz(network, element);
/// 	    }
/// 	    return null;
/// 	 }
/// </summary>
/// <returns type="Function">返回网元视图生成器</returns>
}

twaver.canvas.Network.prototype.getGroupChildrenRects = function (group) {
/// <summary>
/// 	返回包含分组孩子视图区域的集合
/// </summary>
/// <param name="group" type="twaver.Group">分组对象</param>
/// <returns type="twaver.List">返回包含孩子视图区域的集合</returns>
}

twaver.canvas.Network.prototype.getIconsColors = function (element) {
/// <summary>
/// 	获取指定网元的图标颜色数组，默认返回element#getStyle('icons.colors')
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Array">返回指定网元的图标颜色数组</returns>
}

twaver.canvas.Network.prototype.getIconsNames = function (element) {
/// <summary>
/// 	获取指定网元的图标名称数组，默认返回element#getStyle('icons.names')
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Array">返回指定网元的图标名称数组</returns>
}

twaver.canvas.Network.prototype.getInteractions = function () {
/// <summary>
/// 	获取交互处理器集合，交互处理器用于设置Network相应哪些键盘和鼠标事件。
/// </summary>
/// <returns type="Array">返回交互处理器集合</returns>
}

twaver.canvas.Network.prototype.getLayerByElement = function (element) {
/// <summary>
/// 	获取指定网元所在的层，默认为'default'层
/// </summary>
/// <param name="element" type="twaver.Element">用于返回层的网元</param>
/// <returns type="twaver.Layer">返回指定网元所在的层</returns>
}

twaver.canvas.Network.prototype.getLazyMoveFillColor = function () {
/// <summary>
/// 	获取延迟移动网元时网元的填充色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR
/// </summary>
/// <returns type="String">返回延迟移动网元时网元的填充色</returns>
}

twaver.canvas.Network.prototype.getLazyMoveOutlineColor = function () {
/// <summary>
/// 	获取延迟移动网元时网元的边框颜色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回延迟移动网元时网元的边框颜色</returns>
}

twaver.canvas.Network.prototype.getLazyMoveOutlineWidth = function () {
/// <summary>
/// 	获取延迟移动网元时网元的边框宽度，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回延迟移动网元时网元的边框宽度</returns>
}

twaver.canvas.Network.prototype.getLinkableFunction = function () {
/// <summary>
/// 	获取节点是否可以连线的过滤器
/// </summary>
/// <returns type="Function">返回节点是否可以连线的过滤器</returns>
}

twaver.canvas.Network.prototype.getLinkFlowInterval = function () {
/// <summary>
/// 	获得LINK的流动间隔时间
/// </summary>
/// <returns type="String">返回Link的流动间隔时间</returns>
}

twaver.canvas.Network.prototype.getLinkFlowOffset = function (link) {
/// <summary>
/// 	获得Link流动时的偏移量
/// </summary>
/// <param name="link" type="String">Link实例</param>
/// <returns type="String">返回Link流动时的偏移量</returns>
}

twaver.canvas.Network.prototype.getLinkFlowStepping = function (link) {
/// <summary>
/// 	获得Link流动时的步进量
/// </summary>
/// <param name="link" type="String">Link实例</param>
/// <returns type="String">返回Link流动时的步进量</returns>
}

twaver.canvas.Network.prototype.getLinkHandlerLabel = function (link) {
/// <summary>
/// 	获取指定连线捆绑后的标签，默认如果指定的连线是捆绑代理，则返回"+(" + link.getBundleCount() + ")"，否则返回null
/// </summary>
/// <param name="link" type="twaver.Link">连线</param>
/// <returns type="String">返回指定连线捆绑后的标签</returns>
}

twaver.canvas.Network.prototype.getLinkPathFunction = function () {
/// <summary>
/// 	获取连线路径生成函数
/// </summary>
/// <returns type="Function">返回连线路径生成函数</returns>
}

twaver.canvas.Network.prototype.getMovableFunction = function () {
/// <summary>
/// 	获取网元可移动过滤器
/// </summary>
/// <returns type="Function">返回网元可移动过滤器</returns>
}

twaver.canvas.Network.prototype.getMovableSelectedElements = function () {
/// <summary>
/// 	获取可移动的被选中的网元集合
/// </summary>
/// <returns type="twaver.List">返回可移动的被选中的网元集合</returns>
}

twaver.canvas.Network.prototype.getMovableSelectedElementsRect = function () {
/// <summary>
/// 	获取可移动的网元的区域
/// </summary>
/// <returns type="Object">返回可移动的网元的区域</returns>
}

twaver.canvas.Network.prototype.getPaddingBottom = function () {
/// <summary>
/// 	获取下方内边距
/// </summary>
/// <returns type="Number">返回下方内边距，默认为0</returns>
}

twaver.canvas.Network.prototype.getPaddingRight = function () {
/// <summary>
/// 	获取右边内边距
/// </summary>
/// <returns type="Number">返回右边内编辑，默认为0</returns>
}

twaver.canvas.Network.prototype.getPosition = function (position, obj, tarSize, xoffset, yoffset) {
/// <summary>
/// 	获取相对于网元指定位置的坐标，此方法常用于定位和网元相关的附件的位置
/// </summary>
/// <param name="position" type="String">相对位置</param>
/// <param name="obj" type="Object">获取位置时的相对网元或网元视图，类型为twaver.Element或者twaver.network.ElementUI</param>
/// <param name="tarSize" type="Object">目标的大小，类型为包含width和height属性的Object对象</param>
/// <param name="xoffset" type="String">x坐标偏移量</param>
/// <param name="yoffset" type="String">y坐标偏移量</param>
/// <returns type="Object">返回包含x坐标和y坐标的Object对象</returns>
/// <example>
/// 	var node = new twaver.Node({name:'Node', location: {x:100, y:100}});
/// 	box.add(node);
/// 	var position = network.getPosition('top.top', node, {width:10, height:10}, 0, 0);
/// 	console.log(position.x, position.y);
/// 	// output: 110 90
/// 	
/// 	position可以为：
/// 	hotspot
/// 	from
/// 	to
/// 	topleft.topleft
/// 	topleft.topright
/// 	top.top
/// 	topright.topleft
/// 	topright.topright
/// 	topleft
/// 	top
/// 	topright
/// 	topleft.bottomleft
/// 	topleft.bottomright
/// 	top.bottom
/// 	topright.bottomleft
/// 	topright.bottomright
/// 	left.left
/// 	left
/// 	left.right
/// 	center
/// 	right.left
/// 	right
/// 	right.right
/// 	bottomleft.topleft
/// 	bottomleft.topright
/// 	bottom.top
/// 	bottomright.topleft
/// 	bottomright.topright
/// 	bottomleft
/// 	bottom
/// 	bottomright
/// 	bottomleft.bottomleft
/// 	bottomleft.bottomright
/// 	bottom.bottom
/// 	bottomright.bottomleft
/// 	bottomright.bottomright
/// </example>
}

twaver.canvas.Network.prototype.getRectSelectFilter = function () {
/// <summary>
/// 	获取框选网元过滤器
/// </summary>
/// <returns type="Function">返回框选网元过滤器</returns>
}

twaver.canvas.Network.prototype.getResizeLineColor = function () {
/// <summary>
/// 	获取延迟改变网元大小时网元边框的颜色，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_COLOR
/// </summary>
/// <returns type="String">返回延迟改变网元大小时网元边框的颜色</returns>
}

twaver.canvas.Network.prototype.getResizeLineWidth = function () {
/// <summary>
/// 	获取延迟改变网元大小时网元边框的宽度，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH
/// </summary>
/// <returns type="Number">返回延迟改变网元大小时网元边框的宽度</returns>
}

twaver.canvas.Network.prototype.getResizePointFillColor = function () {
/// <summary>
/// 	获取改变网元大小时控制点的填充色，默认为twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR
/// </summary>
/// <returns type="String">返回改变网元大小时控制点的填充色</returns>
}

twaver.canvas.Network.prototype.getResizePointOutlineColor = function () {
/// <summary>
/// 	获取改变网元大小时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回改变网元大小时控制点的边框颜色</returns>
}

twaver.canvas.Network.prototype.getResizePointOutlineWidth = function () {
/// <summary>
/// 	获取改变网元大小时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回改变网元大小时控制点的边框宽度</returns>
}

twaver.canvas.Network.prototype.getResizePointSize = function () {
/// <summary>
/// 	获取更改网元大小的控制点的大小
/// </summary>
/// <returns type="Number">返回更改网元大小的控制点的大小</returns>
}

twaver.canvas.Network.prototype.getRootCanvas = function () {
/// <summary>
/// 	获取主画布，网元视图绘制在主画布上
/// </summary>
/// <returns type="HTMLCanvasElement">返回主画布</returns>
}

twaver.canvas.Network.prototype.getRotatableFunction = function () {
/// <summary>
/// 	获取网元是否可旋转过滤器
/// </summary>
/// <returns type="Function">网元是否可旋转过滤器</returns>
}

twaver.canvas.Network.prototype.getRotatePointFillColor = function () {
/// <summary>
/// 	获取旋转控制点的填充色
/// </summary>
/// <returns type="String">返回旋转控制点的填充色</returns>
}

twaver.canvas.Network.prototype.getRotatePointOffset = function () {
/// <summary>
/// 	获取旋转控制点的偏移量
/// </summary>
/// <returns type="Number">返回旋转控制点的偏移量</returns>
}

twaver.canvas.Network.prototype.getRotatePointOutlineColor = function () {
/// <summary>
/// 	获取旋转控制点的边框颜色
/// </summary>
/// <returns type="String">返回旋转控制点的边框颜色</returns>
}

twaver.canvas.Network.prototype.getRotatePointOutlineWidth = function () {
/// <summary>
/// 	获取旋转控制点的边框宽度
/// </summary>
/// <returns type="Number">返回旋转控制点的边框宽度</returns>
}

twaver.canvas.Network.prototype.getRotatePointSize = function () {
/// <summary>
/// 	返回旋转控制点的大小
/// </summary>
/// <returns type="Number">旋转控制点的大小</returns>
}

twaver.canvas.Network.prototype.getRotateScaleFillColor = function () {
/// <summary>
/// 	获取旋转刻度填充色
/// </summary>
/// <returns type="String">返回旋转刻度填充色</returns>
}

twaver.canvas.Network.prototype.getRotateScaleFontColor = function () {
/// <summary>
/// 	获取旋转刻度文字字体颜色
/// </summary>
/// <returns type="String">旋转刻度文字字体颜色</returns>
}

twaver.canvas.Network.prototype.getRotateScaleHeight = function () {
/// <summary>
/// 	获取旋转刻度高度
/// </summary>
/// <returns type="Number">旋转刻度高度</returns>
}

twaver.canvas.Network.prototype.getRotateScaleWidth = function () {
/// <summary>
/// 	获取旋转刻度宽度
/// </summary>
/// <returns type="Number">返回旋转刻度宽度</returns>
}

twaver.canvas.Network.prototype.getScrollBarWidth = function () {
/// <summary>
/// 	获取滚动条宽度
/// </summary>
/// <returns type="Number">返回滚动条宽度，默认为10</returns>
}

twaver.canvas.Network.prototype.getSelectFillColor = function () {
/// <summary>
/// 	获取框选时矩形框的填充色，默认值为twaver.Defaults.NETWORK_SELECT_FILL_COLOR
/// </summary>
/// <returns type="String">返回框选时矩形框的填充色</returns>
}

twaver.canvas.Network.prototype.getSelectMode = function () {
/// <summary>
/// 	获取选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <returns type="String">返回选择模式</returns>
}

twaver.canvas.Network.prototype.getSelectOutlineColor = function () {
/// <summary>
/// 	获取框选时矩形框的边框颜色，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回框选时矩形框的边框颜色</returns>
}

twaver.canvas.Network.prototype.getSelectOutlineWidth = function () {
/// <summary>
/// 	获取框选时矩形框的边框宽度，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH
/// </summary>
/// <returns type="String">返回框选时矩形框的边框宽度</returns>
}

twaver.canvas.Network.prototype.getShadowColor = function (element) {
/// <summary>
/// 	获得指定网元选中时的阴影颜色，如果网元的style属性shadow.color不为空，则返回style属性shadow.color的值，否则返回style属性select.color的值
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="String">返回指定网元选中时的阴影颜色</returns>
}

twaver.canvas.Network.prototype.getTopCanvas = function () {
/// <summary>
/// 	获取上层画布，默认告警等附件画在上层画布上
/// </summary>
/// <returns type="HTMLCanvasElement">返回上层画布</returns>
}

twaver.canvas.Network.prototype.getViewRect = function () {
/// <summary>
/// 	获取Network可见网元所占的区域
/// </summary>
/// <returns type="Object">返回包含x、y、width和height属性的Object对象</returns>
}

twaver.canvas.Network.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取网元可见过滤器，Network通过可见过滤器判断每个网元是否可见
/// </summary>
/// <returns type="Function">返回网元可见过滤器</returns>
}

twaver.canvas.Network.prototype.handleElementBoxChange = function (e) {
/// <summary>
/// 	ElementBox里网元添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox里网元变化事件，包含kind和data属性</param>
}

twaver.canvas.Network.prototype.handleElementBoxPropertyChange = function (e) {
/// <summary>
/// 	ElementBox里网元的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox里网元属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.canvas.Network.prototype.handleElementPropertyChange = function (e) {
/// <summary>
/// 	ElementBox的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.canvas.Network.prototype.handleIndexChange = function (e) {
/// <summary>
/// 	ElementBox里网元的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">网元顺序变化事件，包含element、oldIndex和newIndex属性</param>
}

twaver.canvas.Network.prototype.handleLayerBoxChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer变化事件，包含kind和data属性</param>
}

twaver.canvas.Network.prototype.handleLayerHierarchyChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer层次变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer层次变化事件，包含kind和data属性</param>
}

twaver.canvas.Network.prototype.handleLayerPropertyChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer属性变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer属性变化事件，包含kind和data属性</param>
}

twaver.canvas.Network.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	SelectionModel选择变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">选择变化事件，包含kind和data属性</param>
}

twaver.canvas.Network.prototype.hasEditInteraction = function () {
/// <summary>
/// 	获取是否包含编辑交互处理器
/// </summary>
/// <returns type="Boolean">如果包含编辑交互处理器，则返回ture，否则返回false</returns>
}

twaver.canvas.Network.prototype.hasMovableSelectedElements = function () {
/// <summary>
/// 	判断是否包含选中的并且可移动的网元
/// </summary>
/// <returns type="Boolean">如果包含选中的并且可移动的网元，则返回true，否则返回false</returns>
}

twaver.canvas.Network.prototype.hitTest = function (point) {
/// <summary>
/// 	获取鼠标下或指定坐标下的网元视图对象或附件对象
/// </summary>
/// <param name="point" type="Object">鼠标事件或坐标点</param>
/// <returns type="Object">返回鼠标下或指定坐标下的网元视图对象或附件对象</returns>
}

twaver.canvas.Network.prototype.invalidateBundleLink = function (element) {
/// <summary>
/// 	使指定连线的捆绑连线无效
/// </summary>
/// <param name="element" type="twaver.Link">连线</param>
}

twaver.canvas.Network.prototype.invalidateCanvasSize = function (delay) {
/// <summary>
/// 	无效画布大小
/// </summary>
/// <param name="delay" type="Number">延迟时间，默认为300ms</param>
}

twaver.canvas.Network.prototype.invalidateElementUI = function (element, checkAttachments) {
/// <summary>
/// 	使指定网元的视图无效
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <param name="checkAttachments" type="Boolean">如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false</param>
}

twaver.canvas.Network.prototype.invalidateElementUIs = function (checkAttachments) {
/// <summary>
/// 	使所有网元的视图无效
/// </summary>
/// <param name="checkAttachments" type="Boolean">如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false</param>
}

twaver.canvas.Network.prototype.invalidateElementVisibility = function () {
/// <summary>
/// 	无效所有网元的可见性，当设置了visibleFunction，并且外部条件变动后，可以用此方法强制刷新所有网元是否可见
/// </summary>
}

twaver.canvas.Network.prototype.invalidateSelectedElementUIs = function (checkAttachments) {
/// <summary>
/// 	无效所有选中网元的视图
/// </summary>
/// <param name="checkAttachments" type="Boolean">如果为true，则无效网元的同时无效附件，否则不无效附件，可选，默认为false</param>
}

twaver.canvas.Network.prototype.isAutoValidateCanvasSize = function () {
/// <summary>
/// 	获取是否自动计算画布大小
/// </summary>
/// <returns type="Boolean">返回是否自动计算画布大小</returns>
}

twaver.canvas.Network.prototype.isDoubleClickToEmptySubNetwork = function () {
/// <summary>
/// 	获取是否能双击进入空的子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否能双击进入空的子网</returns>
}

twaver.canvas.Network.prototype.isDoubleClickToGroupExpand = function () {
/// <summary>
/// 	获取是否双击展开组，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND
/// </summary>
/// <returns type="Boolean">返回是否双击展开组</returns>
}

twaver.canvas.Network.prototype.isDoubleClickToLinkBundle = function () {
/// <summary>
/// 	获取是否双击捆绑连线，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE
/// </summary>
/// <returns type="Boolean">返回是否双击捆绑连线</returns>
}

twaver.canvas.Network.prototype.isDoubleClickToSubNetwork = function () {
/// <summary>
/// 	获取是否双击子网时进入子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否双击子网时进入子网</returns>
}

twaver.canvas.Network.prototype.isDoubleClickToUpSubNetwork = function () {
/// <summary>
/// 	获取是否双击背景返回上一层子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否双击背景返回上一层子网</returns>
}

twaver.canvas.Network.prototype.isEditable = function (element) {
/// <summary>
/// 	判断指定网元是否可编辑，如果editableFunction返回false，则不可编辑；如果网元所在的层不可编辑，则不可编辑；否则可编辑
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元可编辑，则返回true，否则返回false</returns>
}

twaver.canvas.Network.prototype.isEditingElement = function () {
/// <summary>
/// 	获取是否正在编辑网元
/// </summary>
/// <returns type="Boolean">返回是否正在编辑网元</returns>
}

twaver.canvas.Network.prototype.isHScrollBarVisible = function () {
/// <summary>
/// 	获取水平滚动条是否可见
/// </summary>
/// <returns type="Boolean">返回水平滚动条是否可见</returns>
}

twaver.canvas.Network.prototype.isKeyboardRemoveEnabled = function () {
/// <summary>
/// 	获取是否允许用键盘Delete键删除选中网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否允许用键盘Delete键删除选中网元</returns>
}

twaver.canvas.Network.prototype.isKeyboardSelectEnabled = function () {
/// <summary>
/// 	获取是否允许用键盘Ctrl+A键选择所有网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否允许用键盘Ctrl+A键选择所有网元</returns>
}

twaver.canvas.Network.prototype.isLazyMoveAnimate = function () {
/// <summary>
/// 	获取延迟移动网元时是否有动画效果，默认值为twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE
/// </summary>
/// <returns type="Boolean">返回延迟移动网元时是否有动画效果</returns>
}

twaver.canvas.Network.prototype.isLazyMoveFill = function () {
/// <summary>
/// 	获取延迟移动网元时轮廓是否填充，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL
/// </summary>
/// <returns type="Boolean">返回延迟移动网元时轮廓是否填充</returns>
}

twaver.canvas.Network.prototype.isLimitElementInPositiveLocation = function () {
/// <summary>
/// 	获取是否限制网元坐标不能为负
/// </summary>
/// <returns type="Boolean">返回是否限制网元坐标不能为负</returns>
}

twaver.canvas.Network.prototype.isLimitViewInCanvas = function () {
/// <summary>
/// 	获取是否限制左上角，如果限制左上角，不能看到左上角以外的区域
/// </summary>
/// <returns type="Boolean">返回是否限制左上角，默认为true</returns>
}

twaver.canvas.Network.prototype.isLinkable = function (node) {
/// <summary>
/// 	获取指定节点是否可以创建连线
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <returns type="Boolean">返回指定节点是否可以创建连线</returns>
}

twaver.canvas.Network.prototype.isLinkFlowEnabled = function () {
/// <summary>
/// 	返回是否启用流动Link，默认是false
/// </summary>
/// <returns type="String">是否启用流动Link</returns>
}

twaver.canvas.Network.prototype.isMakeVisibleOnSelected = function () {
/// <summary>
/// 	获取网元被选择时是否让其可见，默认值为twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <returns type="Boolean">返回网元被选择时是否让其可见</returns>
}

twaver.canvas.Network.prototype.isMovable = function (element) {
/// <summary>
/// 	判断指定网元是否可移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元可移动，则返回true，否则返回false</returns>
}

twaver.canvas.Network.prototype.isMovingElement = function () {
/// <summary>
/// 	获取是否正在移动网元
/// </summary>
/// <returns type="Boolean">返回是否正在移动网元</returns>
}

twaver.canvas.Network.prototype.isNoAgentLinkVisible = function () {
/// <summary>
/// 	获取不是代理的连线是否可见，默认值为twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE
/// </summary>
/// <returns type="Boolean">返回不是代理的连线是否可见</returns>
}

twaver.canvas.Network.prototype.isRectSelectEnabled = function () {
/// <summary>
/// 	获取是否允许框选网元
/// </summary>
/// <returns type="Boolean">如果允许框选网元, 返回true, 否则返回false</returns>
}

twaver.canvas.Network.prototype.isResizeAnimate = function () {
/// <summary>
/// 	获取改变网元大小时是否有动画效果，默认值为twaver.Defaults.NETWORK_RESIZE_ANIMATE
/// </summary>
/// <returns type="Boolean">返回改变网元大小时是否有动画效果</returns>
}

twaver.canvas.Network.prototype.isRotatable = function (element) {
/// <summary>
/// 	获取指定网元是否可旋转
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">返回指定网元是否可旋转</returns>
}

twaver.canvas.Network.prototype.isRotatingElement = function () {
/// <summary>
/// 	获取是否正在旋转网元
/// </summary>
/// <returns type="Boolean">返回是否正在旋转网元</returns>
}

twaver.canvas.Network.prototype.isScrollBarVisible = function () {
/// <summary>
/// 	获取滚动条是否可见
/// </summary>
/// <returns type="Boolean">返回滚动条是否可见</returns>
}

twaver.canvas.Network.prototype.isSelectingElement = function () {
/// <summary>
/// 	获取是否正在选择网元
/// </summary>
/// <returns type="Boolean">返回是否正在选择网元</returns>
}

twaver.canvas.Network.prototype.isSendToTopOnSelected = function () {
/// <summary>
/// 	获取网元被选中后是否置顶，默认值为twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED
/// </summary>
/// <returns type="Boolean">返回网元被选中后是否置顶</returns>
}

twaver.canvas.Network.prototype.isShowRotateScale = function () {
/// <summary>
/// 	获取是否显示旋转网元时的刻度
/// </summary>
/// <returns type="Boolean">返回是否显示旋转网元时的刻度</returns>
}

twaver.canvas.Network.prototype.isSubNetworkAnimate = function () {
/// <summary>
/// 	获取进入下一层子网或返回上一层子网时是否有动画效果，默认值为twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE
/// </summary>
/// <returns type="Boolean">返回进入下一层子网或返回上一层子网时是否有动画效果</returns>
}

twaver.canvas.Network.prototype.isToolTipEnabled = function () {
/// <summary>
/// 	获取是否让提示信息生效，默认值为twaver.Defaults.NETWORK_TOOLTIP_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否让提示信息生效</returns>
}

twaver.canvas.Network.prototype.isVisible = function (element) {
/// <summary>
/// 	获取指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果指定网元可见，则返回true，否则返回false</returns>
}

twaver.canvas.Network.prototype.isVScrollBarVisible = function () {
/// <summary>
/// 	获取垂直滚动条是否可见
/// </summary>
/// <returns type="Boolean">返回垂直滚动条是否可见，默认为true</returns>
}

twaver.canvas.Network.prototype.makeVisible = function (element) {
/// <summary>
/// 	滚动水平和垂直滚动条，让指定网元可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.canvas.Network.prototype.moveSelectedElements = function (xoffset, yoffset, animate, finishFunction) {
/// <summary>
/// 	将选中的网元移动指定偏移量，移动时可以设置是否有动画效果，而且能指定移动结束后执行的动作
/// </summary>
/// <param name="xoffset" type="Number">x坐标偏移量</param>
/// <param name="yoffset" type="Number">y坐标偏移量</param>
/// <param name="animate" type="Boolean">移动时是否有动画效果，可选，默认为false</param>
/// <param name="finishFunction" type="Function">回调函数，移动结束后执行的动作，可选，默认为null</param>
}

twaver.canvas.Network.prototype.onShareSelectionModelChanged = function () {
/// <summary>
/// 	shareSelectionModel属性变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
/// </summary>
}

twaver.canvas.Network.prototype.paintBottom = function (ctx) {
/// <summary>
/// 	绘制最底层元素
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.canvas.Network.prototype.paintMarker = function (ctx) {
/// <summary>
/// 	回去标记
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.canvas.Network.prototype.paintRoot = function () {
/// <summary>
/// 	绘制所有网元视图
/// </summary>
}

twaver.canvas.Network.prototype.paintTopCanvas = function () {
/// <summary>
/// 	绘制上层画布
/// </summary>
}

twaver.canvas.Network.prototype.removeMarker = function (marker) {
/// <summary>
/// 	删除标记
/// </summary>
/// <param name="marker" type="Object">带paint方法的对象</param>
}

twaver.canvas.Network.prototype.repaintTopCanvas = function () {
/// <summary>
/// 	重绘上层画布
/// </summary>
}

twaver.canvas.Network.prototype.sendToTop = function (element) {
/// <summary>
/// 	将指定网元置顶，显示在所有网元的最上面，遮盖其他网元，但也受网元所在的层的制约，还有父子关系以及跟随关系的制约；如果sendToTopOnSelected为true，则点击网元时会调用此方法
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.canvas.Network.prototype.setAutoValidateCanvasSize = function (v) {
/// <summary>
/// 	设置是否自动计算画布大小
/// </summary>
/// <param name="v" type="Boolean">是否自动计算画布大小</param>
}

twaver.canvas.Network.prototype.setBackgroundImage = function (backgroundImage) {
/// <summary>
/// 	设置背景图片
/// </summary>
/// <param name="backgroundImage" type="HTMLImageElement">背景图片</param>
}

twaver.canvas.Network.prototype.setCreateElementInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建网元模式，在Network上单击时，会创建指定类型的网元
/// </summary>
/// <param name="type" type="Function">网元类型，可选，默认值为twaver.Node</param>
}

twaver.canvas.Network.prototype.setCreateLinkInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建连线模式，在Network上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点
/// </summary>
/// <param name="type" type="Function">连线类型，可选，默认值为twaver.Link</param>
}

twaver.canvas.Network.prototype.setCreateShapeLinkInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建折线模式，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点
/// </summary>
/// <param name="type" type="Function">折线类型，可选，默认值为twaver.ShapeLink</param>
}

twaver.canvas.Network.prototype.setCreateShapeNodeInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建多边形模式，在Network上多次点击不同位置设置多边形的points属性，最后双击结束
/// </summary>
/// <param name="type" type="Function">多边形类型，可选，默认值为twaver.ShapeNode</param>
}

twaver.canvas.Network.prototype.setCurrentSubNetwork = function (currentSubNetwork, animate, finishFunction) {
/// <summary>
/// 	将当前子网设置为指定子网，并且可以设置是否有动画效果，而且能指定设置当前子网结束后执行的动作
/// </summary>
/// <param name="currentSubNetwork" type="twaver.SubNetwork">子网</param>
/// <param name="animate" type="Boolean">是否有动画效果</param>
/// <param name="finishFunction" type="Function">设置当前子网结束后的回调函数，可选，默认为null</param>
}

twaver.canvas.Network.prototype.setDefaultInteractions = function (lazyMode) {
/// <summary>
/// 	设置交互模式为默认交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选、默认为false</param>
}

twaver.canvas.Network.prototype.setDoubleClickToEmptySubNetwork = function (v) {
/// <summary>
/// 	设置是否能双击进入空的子网
/// </summary>
/// <param name="v" type="Boolean">是否能双击进入空的子网</param>
}

twaver.canvas.Network.prototype.setDoubleClickToGroupExpand = function (v) {
/// <summary>
/// 	设置是否双击展开组
/// </summary>
/// <param name="v" type="Boolean">是否能双击展开组</param>
}

twaver.canvas.Network.prototype.setDoubleClickToLinkBundle = function (v) {
/// <summary>
/// 	设置是否双击捆绑连线
/// </summary>
/// <param name="v" type="Boolean">是否双击捆绑连线</param>
}

twaver.canvas.Network.prototype.setDoubleClickToSubNetwork = function (v) {
/// <summary>
/// 	设置是否双击子网时进入子网
/// </summary>
/// <param name="v" type="Boolean">是否双击子网时进入子网</param>
}

twaver.canvas.Network.prototype.setDoubleClickToUpSubNetwork = function (v) {
/// <summary>
/// 	设置是否双击背景返回上一层子网
/// </summary>
/// <param name="v" type="Boolean">是否双击背景返回上一层子网</param>
}

twaver.canvas.Network.prototype.setEditableFunction = function (value) {
/// <summary>
/// 	设置网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
/// </summary>
/// <param name="value" type="Function">网元可编辑过滤器</param>
/// <example>
/// 	network.setEditInteractions();
/// 	network.setEditableFunction(function (element) {
/// 	    return element.getName() === 'From';
/// 	});
/// </example>
}

twaver.canvas.Network.prototype.setEditingElement = function (v) {
/// <summary>
/// 	设置是否正在编辑网元
/// </summary>
/// <param name="v" type="Boolean">是否正在编辑网元</param>
}

twaver.canvas.Network.prototype.setEditInteractions = function (lazyMode) {
/// <summary>
/// 	设置交互模式为编辑交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、编辑处理器EditInteraction（处理改变网元大小）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选、默认为false</param>
}

twaver.canvas.Network.prototype.setEditLineColor = function (v) {
/// <summary>
/// 	设置创建连线时连线的颜色
/// </summary>
/// <param name="v" type="String">创建连线时连线的颜色</param>
}

twaver.canvas.Network.prototype.setEditLineWidth = function (v) {
/// <summary>
/// 	设置创建连线时连线的宽度
/// </summary>
/// <param name="v" type="Number">创建连线时连线的宽度</param>
}

twaver.canvas.Network.prototype.setEditPointFillColor = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的填充色
/// </summary>
/// <param name="v" type="String">编辑ShapeNode或ShapeLink时控制点的填充色</param>
}

twaver.canvas.Network.prototype.setEditPointOutlineColor = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的边框颜色
/// </summary>
/// <param name="v" type="String">编辑ShapeNode或ShapeLink时控制点的边框颜色</param>
}

twaver.canvas.Network.prototype.setEditPointOutlineWidth = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">编辑ShapeNode或ShapeLink时控制点的边框宽度</param>
}

twaver.canvas.Network.prototype.setEditPointSize = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的大小
/// </summary>
/// <param name="v" type="Number">编辑ShapeNode或ShapeLink时控制点的大小</param>
}

twaver.canvas.Network.prototype.setElementBox = function (elementBox) {
/// <summary>
/// 	设置和Network绑定的ElementBox网元容器，Network构造时可以设置ElementBox（内部创建一个新的ElementBox），也可以构造完后再设置ElementBox
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">网元容器</param>
}

twaver.canvas.Network.prototype.setElementUIFunction = function (value) {
/// <summary>
/// 	设置网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
/// 	twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
/// 	    var clazz = element.getElementUIClass();
/// 	    if (clazz) {
/// 	         return new clazz(network, element);
/// 	    }
/// 	    return null;
/// 	 }
/// </summary>
/// <param name="value" type="Function">网元视图生成器</param>
}

twaver.canvas.Network.prototype.setHasEditInteraction = function (value) {
/// <summary>
/// 	设置是否包含编辑交互处理器
/// </summary>
/// <param name="value" type="Boolean">是否包含编辑交互处理器</param>
}

twaver.canvas.Network.prototype.setHScrollBarVisible = function (v) {
/// <summary>
/// 	设置水平滚动条是否可见
/// </summary>
/// <param name="v" type="Boolean">水平滚动条是否可见</param>
}

twaver.canvas.Network.prototype.setInteractions = function (interactions) {
/// <summary>
/// 	设置交互处理器，交互处理器用于设置Network相应哪些键盘和鼠标事件。
/// </summary>
/// <param name="interactions" type="twaver.List">包含交互处理器的集合</param>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.SelectInteraction(network),
/// 	    new twaver.network.interaction.EditInteraction(network),
/// 	    new twaver.network.interaction.MoveInteraction(network),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.canvas.Network.prototype.setKeyboardRemoveEnabled = function (v) {
/// <summary>
/// 	设置是否允许用键盘Delete键删除选中网元
/// </summary>
/// <param name="v" type="Boolean">是否允许用键盘Delete键删除选中网元</param>
}

twaver.canvas.Network.prototype.setKeyboardSelectEnabled = function (v) {
/// <summary>
/// 	设置是否允许用键盘Ctrl+A键选择所有网元
/// </summary>
/// <param name="v" type="Boolean">是否允许用键盘Ctrl+A键选择所有网元</param>
}

twaver.canvas.Network.prototype.setLazyMoveAnimate = function (v) {
/// <summary>
/// 	设置延迟移动网元时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">延迟移动网元时是否有动画效果</param>
}

twaver.canvas.Network.prototype.setLazyMoveFill = function (v) {
/// <summary>
/// 	设置延迟移动网元时轮廓是否填充
/// </summary>
/// <param name="v" type="Boolean">延迟移动网元时轮廓是否填充</param>
}

twaver.canvas.Network.prototype.setLazyMoveFillColor = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的填充色
/// </summary>
/// <param name="v" type="String">延迟移动网元时网元的填充色</param>
}

twaver.canvas.Network.prototype.setLazyMoveOutlineColor = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的填充色
/// </summary>
/// <param name="v" type="String">延迟移动网元时网元的填充色</param>
}

twaver.canvas.Network.prototype.setLazyMoveOutlineWidth = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的边框宽度
/// </summary>
/// <param name="v" type="Number">延迟移动网元时网元的边框宽度</param>
}

twaver.canvas.Network.prototype.setLimitElementInPositiveLocation = function (v) {
/// <summary>
/// 	设置是否限制网元坐标不能为负
/// </summary>
/// <param name="v" type="Boolean">是否限制网元坐标不能为负</param>
}

twaver.canvas.Network.prototype.setLimitViewInCanvas = function (v) {
/// <summary>
/// 	设置是否限制左上角
/// </summary>
/// <param name="v" type="Boolean">是否限制左上角</param>
}

twaver.canvas.Network.prototype.setLinkableFunction = function (value) {
/// <summary>
/// 	设置节点是否可以连线的过滤器
/// </summary>
/// <param name="value" type="Function">节点是否可以连线的过滤器</param>
}

twaver.canvas.Network.prototype.setLinkFlowEnabled = function (value) {
/// <summary>
/// 	设置是否启用流动Link，默认是false
/// </summary>
/// <param name="value" type="String">是否启用流动Link</param>
}

twaver.canvas.Network.prototype.setLinkFlowInterval = function (value) {
/// <summary>
/// 	设置LINK的流动间隔时间
/// </summary>
/// <param name="value" type="String">Link的流动间隔时间(毫秒)</param>
}

twaver.canvas.Network.prototype.setLinkPathFunction = function (value) {
/// <summary>
/// 	设置连线路径生成函数function (linkUI, defaultPoints)
/// </summary>
/// <param name="value" type="Function">连线路径生成函数</param>
}

twaver.canvas.Network.prototype.setMagnifyInteractions = function () {
/// <summary>
/// 	设置交互模式为放大镜模式
/// </summary>
}

twaver.canvas.Network.prototype.setMakeVisibleOnSelected = function (v) {
/// <summary>
/// 	设置网元被选择时是否让其可见
/// </summary>
/// <param name="v" type="Boolean">网元被选择时是否让其可见</param>
}

twaver.canvas.Network.prototype.setMovableFunction = function (v) {
/// <summary>
/// 	设置网元可移动过滤器，用于判断网元是否可以移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
/// </summary>
/// <param name="v" type="Function">网元可移动过滤器</param>
/// <example>
/// 	network.setMovableFunction(function (element) {
/// 	    return element.getName() === 'From';
/// 	});
/// </example>
}

twaver.canvas.Network.prototype.setMovingElement = function (v) {
/// <summary>
/// 	设置是否正在移动网元
/// </summary>
/// <param name="v" type="Boolean">是否正在移动网元</param>
}

twaver.canvas.Network.prototype.setMSTouchInteractions = function () {
/// <summary>
/// 	设置交互模式为微软触摸交互模式
/// </summary>
}

twaver.canvas.Network.prototype.setNoAgentLinkVisible = function (v) {
/// <summary>
/// 	设置不是代理的连线是否可见
/// </summary>
/// <param name="v" type="Boolean">不是代理的连线是否可见</param>
}

twaver.canvas.Network.prototype.setPaddingBottom = function (v) {
/// <summary>
/// 	设置下方内边距
/// </summary>
/// <param name="v" type="Number">下方内边距</param>
}

twaver.canvas.Network.prototype.setPaddingRight = function (v) {
/// <summary>
/// 	设置右边内边距
/// </summary>
/// <param name="v" type="Number">右边内边距</param>
}

twaver.canvas.Network.prototype.setPanInteractions = function () {
/// <summary>
/// 	设置交互模式为手抓图交互模式，包含手抓图交互处理器PanInteraction（处理垂直或水平滚动滚动条）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
}

twaver.canvas.Network.prototype.setRectSelectEnabled = function (v) {
/// <summary>
/// 	设置是否允许框选网元
/// </summary>
/// <param name="v" type="Boolean">是否允许框选网元</param>
}

twaver.canvas.Network.prototype.setRectSelectFilter = function (v) {
/// <summary>
/// 	设置框选网元过滤器
/// </summary>
/// <param name="v" type="Function">框选网元过滤器</param>
}

twaver.canvas.Network.prototype.setResizeAnimate = function (v) {
/// <summary>
/// 	设置改变网元大小时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">改变网元大小时是否有动画效果</param>
}

twaver.canvas.Network.prototype.setResizeLineColor = function (v) {
/// <summary>
/// 	设置延迟改变网元大小时网元边框的颜色
/// </summary>
/// <param name="v" type="String">延迟改变网元大小时网元边框的颜色</param>
}

twaver.canvas.Network.prototype.setResizeLineWidth = function (v) {
/// <summary>
/// 	设置延迟改变网元大小时网元边框的宽度
/// </summary>
/// <param name="v" type="Number">延迟改变网元大小时网元边框的宽度</param>
}

twaver.canvas.Network.prototype.setResizePointFillColor = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的填充色
/// </summary>
/// <param name="v" type="String">改变网元大小时控制点的填充色</param>
}

twaver.canvas.Network.prototype.setResizePointOutlineColor = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的边框颜色
/// </summary>
/// <param name="v" type="String">改变网元大小时控制点的边框颜色</param>
}

twaver.canvas.Network.prototype.setResizePointOutlineWidth = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">改变网元大小时控制点的边框宽度</param>
}

twaver.canvas.Network.prototype.setResizePointSize = function (v) {
/// <summary>
/// 	设置更改网元大小的控制点的大小
/// </summary>
/// <param name="v" type="Number">更改网元大小的控制点的大小</param>
}

twaver.canvas.Network.prototype.setRotatableFunction = function (value) {
/// <summary>
/// 	设置网元是否可旋转过滤器
/// </summary>
/// <param name="value" type="Function">网元是否可旋转过滤器</param>
}

twaver.canvas.Network.prototype.setRotatePointFillColor = function (v) {
/// <summary>
/// 	设置旋转控制点的填充色
/// </summary>
/// <param name="v" type="String">旋转控制点的填充色</param>
}

twaver.canvas.Network.prototype.setRotatePointOffset = function (v) {
/// <summary>
/// 	设置旋转控制点的偏移量
/// </summary>
/// <param name="v" type="Number">旋转控制点的偏移量</param>
}

twaver.canvas.Network.prototype.setRotatePointOutlineColor = function (v) {
/// <summary>
/// 	设置旋转控制点的边框颜色
/// </summary>
/// <param name="v" type="String">旋转控制点的边框颜色</param>
}

twaver.canvas.Network.prototype.setRotatePointOutlineWidth = function (v) {
/// <summary>
/// 	设置旋转控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">旋转控制点的边框宽度</param>
}

twaver.canvas.Network.prototype.setRotatePointSize = function (v) {
/// <summary>
/// 	设置旋转控制点的大小
/// </summary>
/// <param name="v" type="Number">旋转控制点的大小</param>
}

twaver.canvas.Network.prototype.setRotateScaleFillColor = function (v) {
/// <summary>
/// 	设置旋转刻度填充色
/// </summary>
/// <param name="v" type="String">旋转刻度填充色</param>
}

twaver.canvas.Network.prototype.setRotateScaleFontColor = function (v) {
/// <summary>
/// 	设置旋转刻度文字字体颜色
/// </summary>
/// <param name="v" type="String">旋转刻度文字字体颜色</param>
}

twaver.canvas.Network.prototype.setRotateScaleHeight = function (v) {
/// <summary>
/// 	设置旋转刻度高度
/// </summary>
/// <param name="v" type="Number">旋转刻度高度</param>
}

twaver.canvas.Network.prototype.setRotateScaleWidth = function (v) {
/// <summary>
/// 	设置旋转刻度宽度
/// </summary>
/// <param name="v" type="Number">旋转刻度宽度</param>
}

twaver.canvas.Network.prototype.setRotatingElement = function (v) {
/// <summary>
/// 	设置正在旋转的节点
/// </summary>
/// <param name="v" type="twaver.Node">节点</param>
}

twaver.canvas.Network.prototype.setScrollBarVisible = function (v) {
/// <summary>
/// 	设置滚动条是否可见
/// </summary>
/// <param name="v" type="Number">滚动条是否可见</param>
}

twaver.canvas.Network.prototype.setScrollBarWidth = function (v) {
/// <summary>
/// 	设置滚动条宽度
/// </summary>
/// <param name="v" type="Number">滚动条宽度</param>
}

twaver.canvas.Network.prototype.setSelectFillColor = function (v) {
/// <summary>
/// 	设置框选时矩形框的填充色
/// </summary>
/// <param name="v" type="String">框选时矩形框的填充色</param>
}

twaver.canvas.Network.prototype.setSelectingElement = function (v) {
/// <summary>
/// 	设置是否正在框选网元
/// </summary>
/// <param name="v" type="Boolean">是否正在框选网元</param>
}

twaver.canvas.Network.prototype.setSelectMode = function (v) {
/// <summary>
/// 	设置选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <param name="v" type="String">选择模式</param>
}

twaver.canvas.Network.prototype.setSelectOutlineColor = function (v) {
/// <summary>
/// 	设置框选时矩形框的边框颜色
/// </summary>
/// <param name="v" type="String">框选时矩形框的边框颜色</param>
}

twaver.canvas.Network.prototype.setSelectOutlineWidth = function (v) {
/// <summary>
/// 	设置框选时矩形框的边框宽度
/// </summary>
/// <param name="v" type="String">框选时矩形框的边框宽度</param>
}

twaver.canvas.Network.prototype.setSendToTopOnSelected = function (v) {
/// <summary>
/// 	设置网元被选中后是否置顶
/// </summary>
/// <param name="v" type="Boolean">网元被选中后是否置顶</param>
}

twaver.canvas.Network.prototype.setShowRotateScale = function (v) {
/// <summary>
/// 	设置是否显示旋转网元时的刻度
/// </summary>
/// <param name="v" type="Boolean">是否显示旋转网元时的刻度</param>
}

twaver.canvas.Network.prototype.setSubNetworkAnimate = function (v) {
/// <summary>
/// 	设置进入下一层子网或返回上一层子网时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">进入下一层子网或返回上一层子网时是否有动画效果</param>
}

twaver.canvas.Network.prototype.setToolTipEnabled = function (value) {
/// <summary>
/// 	设置是否让提示信息生效
/// </summary>
/// <param name="value" type="Boolean">是否让提示信息生效</param>
}

twaver.canvas.Network.prototype.setTouchInteractions = function () {
/// <summary>
/// 	设置当前交互模式为触摸模式，只响应触摸事件，包含触摸交互处理器TouchInteraction（处理触摸事件）
/// </summary>
}

twaver.canvas.Network.prototype.setViewOffSet = function (xoff, yoff) {
/// <summary>
/// 	设置视图偏移量
/// </summary>
/// <param name="xoff" type="Number">x坐标</param>
/// <param name="yoff" type="Number">y坐标</param>
}

twaver.canvas.Network.prototype.setViewRect = function (x, y, w, h) {
/// <summary>
/// 	设置视图区域
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <param name="w" type="Number">宽度</param>
/// <param name="h" type="Number">高度</param>
}

twaver.canvas.Network.prototype.setVisibleFunction = function (value) {
/// <summary>
/// 	设置网元可见过滤器，用于判断指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
/// </summary>
/// <param name="value" type="Function">网元可见过滤器</param>
/// <example>
/// 	network.setVisibleFunction(function (element) {
/// 	    return !(element instanceof twaver.Link);
/// 	});
/// </example>
}

twaver.canvas.Network.prototype.setVScrollBarVisible = function (v) {
/// <summary>
/// 	设置垂直滚动条是否可见
/// </summary>
/// <param name="v" type="Boolean">垂直滚动条是否可见</param>
}

twaver.canvas.Network.prototype.toCanvas = function (w, h, c) {
/// <summary>
/// 	从Network生成指定大小的Canvas元素，用于生成缩略图
/// </summary>
/// <param name="w" type="Number">要生成的Canvas元素的宽度</param>
/// <param name="h" type="Number">要生成的Canvas元素的高度</param>
/// <param name="c" type="HTMLCanvasElement">目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素</param>
/// <returns type="HTMLCanvasElement">返回Canvas元素</returns>
}

twaver.canvas.Network.prototype.toCanvasByRegion = function (rect, scale, c) {
/// <summary>
/// 	从Network的指定区域生成指定比例的Canvas元素，用于生成缩略图
/// </summary>
/// <param name="rect" type="Object">包含x、y、width和height属性的Object对象</param>
/// <param name="scale" type="Number">缩放比例</param>
/// <param name="c" type="HTMLCanvasElement">目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素</param>
/// <returns type="HTMLCanvasElement">返回Canvas元素</returns>
}

twaver.canvas.Network.prototype.upSubNetwork = function (animate, finishFunction) {
/// <summary>
/// 	返回上一层子网，可以设置是否使用动画效果，还可以指定返回结束后执行的动作
/// </summary>
/// <param name="animate" type="Boolean">是否使用动画效果，可选，默认为false</param>
/// <param name="finishFunction" type="Function">返回上一层子网结束后执行的回调函数，可选，默认为null</param>
}

twaver.canvas.Network.prototype.validateCanvasSize = function () {
/// <summary>
/// 	计算画布大小
/// </summary>
}


twaver.charts.DialChart = function (dataBox) {
/// <summary>
/// 	仪表盘图，它是以表盘的形式来展示数据模型中的数据,是处于TWaver的MVC框架中的V(视图)层。
/// 	表盘图支持3D的显示效果，仪表盘图主要分为三部分的设置：表盘的设置，表盘轴心的设置以及指针的设置
/// 	
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据模型</param>
/// <returns type="twaver.charts.DialChart">仪表盘对象本身</returns>
}

twaver.charts.DialChart.prototype = new twaver.charts.ChartBase()

twaver.charts.DialChart.prototype.formatScaleText = function (value) {
/// <summary>
/// 	对表盘的刻度值进行格式化，默认是保留两位小数。用户可以重写此方法进行自己的格式化
/// </summary>
/// <param name="value" type="Number">格式化的数据对象</param>
/// <returns type="Number">格式化后的值</returns>
}

twaver.charts.DialChart.prototype.getColorRangeFillColor = function () {
/// <summary>
/// 	获取表盘的填充颜色，默认为twaver.Defaults.DIALCHART_COLOR_RANGE_FILL_COLOR。
/// 	当ColorRangeList没有赋值时，这个参数才生效
/// </summary>
/// <returns type="String">表盘的填充颜色</returns>
}

twaver.charts.DialChart.prototype.getColorRangeList = function () {
/// <summary>
/// 	获取表盘的填充颜色列表，如果设置了仪表盘的填充颜色列表，TWaver会使用这几个颜色值平分显示在表盘上
/// </summary>
/// <returns type="twaver.List">表盘的填充颜色列表</returns>
}

twaver.charts.DialChart.prototype.getEndAngle = function () {
/// <summary>
/// 	获取表盘图结束时的角度，默认为 twaver.Defaults.DIALCHART_END_ANGLE
/// </summary>
/// <returns type="Number">表盘图结束时的角度</returns>
}

twaver.charts.DialChart.prototype.getInnerDarkerRadius = function () {
/// <summary>
/// 	获取表盘内圈深色部分的半径值。表盘的内圈深色部分用户绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_INNER_DARKER_RADIUS
/// </summary>
/// <returns type="Number">表盘内圈深色部分的半径值</returns>
}

twaver.charts.DialChart.prototype.getInnerRadius = function () {
/// <summary>
/// 	获取表盘内圈的半径值，取值范围为0-1，默认为 twaver.Defaults.DIALCHART_INNER_RADIUS
/// </summary>
/// <returns type="Number">表盘内圈的半径值</returns>
}

twaver.charts.DialChart.prototype.getLowerLimit = function () {
/// <summary>
/// 	获取表盘上限制的最小刻度值，默认为 twaver.Defaults.DIALCHART_LOWER_LIMIT
/// </summary>
/// <returns type="Number">表盘上限制的最小刻度值</returns>
}

twaver.charts.DialChart.prototype.getMajorScaleCount = function () {
/// <summary>
/// 	获取表盘上主要的刻度值数量，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_COUNT
/// </summary>
/// <returns type="Number">表盘上主要的刻度值数量</returns>
}

twaver.charts.DialChart.prototype.getMajorScaleLineColor = function () {
/// <summary>
/// 	获取表盘上主要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_COLOR
/// </summary>
/// <returns type="String">表盘上主要的刻度线的颜色</returns>
}

twaver.charts.DialChart.prototype.getMajorScaleLineLength = function () {
/// <summary>
/// 	获取表盘上主要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_LENGTH
/// </summary>
/// <returns type="Number">表盘上主要的刻度线的长度</returns>
}

twaver.charts.DialChart.prototype.getMajorScaleLineWidth = function () {
/// <summary>
/// 	获取表盘上主要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_WIDTH
/// </summary>
/// <returns type="Number">表盘上主要的刻度线的宽度</returns>
}

twaver.charts.DialChart.prototype.getMinorScaleCount = function () {
/// <summary>
/// 	获取表盘上次要的刻度值数量，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_COUNT
/// </summary>
/// <returns type="Number">表盘上次要的刻度值数量</returns>
}

twaver.charts.DialChart.prototype.getMinorScaleLineColor = function () {
/// <summary>
/// 	获取表盘上次要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_COLOR
/// </summary>
/// <returns type="String">表盘上次要的刻度线的颜色</returns>
}

twaver.charts.DialChart.prototype.getMinorScaleLineLength = function () {
/// <summary>
/// 	获取表盘上次要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_LENGTH
/// </summary>
/// <returns type="Number">表盘上次要的刻度线的长度</returns>
}

twaver.charts.DialChart.prototype.getMinorScaleLineWidth = function () {
/// <summary>
/// 	获取表盘上次要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_WIDTH
/// </summary>
/// <returns type="Number">表盘上次要的刻度线的宽度</returns>
}

twaver.charts.DialChart.prototype.getOuterBrighterRadius = function () {
/// <summary>
/// 	获取表盘外圈浅色部分的半径值。表盘的外圈浅色部分用于绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_OUTER_BRIGHTER_RADIUS
/// </summary>
/// <returns type="Number">表盘外圈浅色部分的半径值</returns>
}

twaver.charts.DialChart.prototype.getOutlineColor = function () {
/// <summary>
/// 	获取表盘外边框的颜色，默认为 twaver.Defaults.DIALCHART_OUTLINE_COLOR
/// </summary>
/// <returns type="String">表盘外边框的颜色</returns>
}

twaver.charts.DialChart.prototype.getOutlineWidth = function () {
/// <summary>
/// 	获取表盘外边框的宽度，默认为 twaver.Defaults.DIALCHART_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">表盘外边框的宽度</returns>
}

twaver.charts.DialChart.prototype.getPivotFillColor = function () {
/// <summary>
/// 	获取仪表盘图上中心轴的填充颜色，默认为twaver.Defaults.DIALCHART_PIVOT_FILL_COLOR
/// </summary>
/// <returns type="String">中心轴的填充颜色</returns>
}

twaver.charts.DialChart.prototype.getPivotGradient = function () {
/// <summary>
/// 	获取仪表盘图上中心轴的渐变类型。默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT。
/// 	渐变类型的可选值为：
/// 	'linear.southwest'：线性.南西
/// 	'linear.southeast'：线性.南东
/// 	'linear.northwest'：线性.北西
/// 	'linear.northeast'：线性.北东
/// 	'linear.north'：线性.北
/// 	'linear.south'：线性.南
/// 	'linear.west'：线性.西
/// 	'linear.east'：线性.东
/// 	'radial.center'：放射.中
/// 	'radial.southwest'：放射.南西
/// 	'radial.southeast'：放射.南东
/// 	'radial.northwest'：放射.北西
/// 	'radial.northeast'：放射.北东
/// 	'radial.north'：放射.北
/// 	'radial.south'：放射.南
/// 	'radial.west'：放射.西
/// 	'radial.east'：放射.东
/// 	'spread.horizontal':扩展.水平
/// 	'spread.vertical':扩展.垂直
/// 	'spread.diagonal':扩展.对角线
/// 	'spread.antidiagonal':扩展.反对角线
/// 	'spread.north':扩展.北
/// 	'spread.south':扩展.南
/// 	'spread.west':扩展.西
/// 	'spread.east':扩展.东
/// 	
/// </summary>
/// <returns type="String">渐变类型</returns>
}

twaver.charts.DialChart.prototype.getPivotGradientColor = function () {
/// <summary>
/// 	获取仪表盘图上中心轴的渐变颜色，默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT_COLOR
/// </summary>
/// <returns type="String">中心轴的渐变颜色</returns>
}

twaver.charts.DialChart.prototype.getPivotOutlineColor = function () {
/// <summary>
/// 	获取仪表盘图上中心轴的外边框颜色，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">中心轴的外边框颜色</returns>
}

twaver.charts.DialChart.prototype.getPivotOutlineWidth = function () {
/// <summary>
/// 	获取仪表盘图上中心轴的外边框宽度，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">中心轴的外边框宽度</returns>
}

twaver.charts.DialChart.prototype.getPivotRadius = function () {
/// <summary>
/// 	获取仪表盘图上中心轴的半径值，默认为twaver.Defaults.DIALCHART_PIVOT_RADIUS
/// </summary>
/// <returns type="Number">中心轴的半径值</returns>
}

twaver.charts.DialChart.prototype.getScaleTextColor = function () {
/// <summary>
/// 	获取表盘上刻度值的颜色，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_COLOR
/// </summary>
/// <returns type="String">表盘上刻度值的颜色</returns>
}

twaver.charts.DialChart.prototype.getScaleTextFont = function () {
/// <summary>
/// 	获取表盘上刻度值的字体，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_FONT
/// </summary>
/// <returns type="String">表盘上刻度值的字体</returns>
}

twaver.charts.DialChart.prototype.getScaleTextPosition = function (angle, cx, cy, width, height) {
/// <summary>
/// 	取表盘上刻度值的显示位置。TWaver内部会调用此方法，用户不需调用，但可以重写此方法增加自己的逻辑
/// </summary>
/// <param name="angle" type="Number">刻度值显示的角度</param>
/// <param name="cx" type="Number">刻度值显示区域的x坐标值</param>
/// <param name="cy" type="Number">刻度值显示区域的y坐标值</param>
/// <param name="width" type="Number">刻度值显示区域的宽度</param>
/// <param name="height" type="Number">刻度值显示区域的高度</param>
/// <returns type="Object">返回刻度值的位置对象，它是一个包含x，y坐标的对象</returns>
}

twaver.charts.DialChart.prototype.getSelectShadowColor = function () {
/// <summary>
/// 	获取选中网元时的阴影的颜色，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_COLOR
/// </summary>
/// <returns type="String">选中网元时的阴影的颜色</returns>
}

twaver.charts.DialChart.prototype.getSelectShadowOffset = function () {
/// <summary>
/// 	获取选中网元时的阴影的偏移值，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_OFFSET
/// </summary>
/// <returns type="Number">选中网元时的阴影的偏移值</returns>
}

twaver.charts.DialChart.prototype.getStartAngle = function () {
/// <summary>
/// 	获取表盘图开始时的角度，默认为 twaver.Defaults.DIALCHART_START_ANGLE
/// </summary>
/// <returns type="Number">表盘图开始时的角度</returns>
}

twaver.charts.DialChart.prototype.getUpperLimit = function () {
/// <summary>
/// 	获取表盘上限制的最大刻度值
/// </summary>
/// <returns type="Number">表盘上限制的最大刻度值</returns>
}

twaver.charts.DialChart.prototype.getValuePosition = function () {
/// <summary>
/// 	获取仪表盘图上网元的值在指针上显示的位置比例，即在指针上的百分比，默认为twaver.Defaults.DIALCHART_VALUE_POSITION
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.DialChart.prototype.isPivotFill = function () {
/// <summary>
/// 	判断仪表盘图上中心轴是否需要填充，默认为twaver.Defaults.DIALCHART_PIVOT_FILL
/// </summary>
/// <returns type="Boolean">true为需要填充，否则为false</returns>
}

twaver.charts.DialChart.prototype.isScaleInside = function () {
/// <summary>
/// 	判断仪表盘度上的刻度值是否显示在内部，默认为twaver.Defaults.DIALCHART_SCALE_INSIDE
/// </summary>
/// <returns type="Boolean">true为显示在内部，否则为false</returns>
}

twaver.charts.DialChart.prototype.isScaleLowerLimitTextVisible = function () {
/// <summary>
/// 	获取表盘上限制的最小刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_LOWER_LIMIT_TEXT_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.DialChart.prototype.isScaleTextVisible = function () {
/// <summary>
/// 	判断仪表盘图上的刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.DialChart.prototype.isScaleUpperLimitTextVisible = function () {
/// <summary>
/// 	获取表盘上限制的最大刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_UPPER_LIMIT_TEXT_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见 ，否则为false</returns>
}

twaver.charts.DialChart.prototype.setColorRangeFillColor = function (v) {
/// <summary>
/// 	设置表盘的填充颜色，默认为twaver.Defaults.DIALCHART_COLOR_RANGE_FILL_COLOR。
/// 	当ColorRangeList没有赋值时，这个参数才生效
/// </summary>
/// <param name="v" type="String">表盘的填充颜色</param>
}

twaver.charts.DialChart.prototype.setColorRangeList = function (v) {
/// <summary>
/// 	设置表盘的填充颜色列表，如果设置了仪表盘的填充颜色列表，TWaver会使用这几个颜色值平分显示在表盘上
/// </summary>
/// <param name="v" type="twaver.List">表盘的填充颜色列表</param>
}

twaver.charts.DialChart.prototype.setEndAngle = function (v) {
/// <summary>
/// 	设置表盘图结束时的角度，默认为 twaver.Defaults.DIALCHART_END_ANGLE
/// </summary>
/// <param name="v" type="Number">表盘图结束时的角度</param>
}

twaver.charts.DialChart.prototype.setInnerDarkerRadius = function (v) {
/// <summary>
/// 	设置表盘内圈深色部分的半径值。表盘的内圈深色部分用户绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_INNER_DARKER_RADIUS
/// </summary>
/// <param name="v" type="Number">表盘内圈深色部分的半径值</param>
}

twaver.charts.DialChart.prototype.setInnerRadius = function (v) {
/// <summary>
/// 	设置表盘内圈的半径值，取值范围为0-1，默认为 twaver.Defaults.DIALCHART_INNER_RADIUS
/// </summary>
/// <param name="v" type="Number">表盘内圈的半径值</param>
}

twaver.charts.DialChart.prototype.setLowerLimit = function (v) {
/// <summary>
/// 	设置表盘上限制的最小刻度值，默认为 twaver.Defaults.DIALCHART_LOWER_LIMIT
/// </summary>
/// <param name="v" type="Number">表盘上限制的最小刻度值</param>
}

twaver.charts.DialChart.prototype.setMajorScaleCount = function (v) {
/// <summary>
/// 	设置表盘上主要的刻度值数量，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_COUNT
/// </summary>
/// <param name="v" type="Number">表盘上主要的刻度值数量</param>
}

twaver.charts.DialChart.prototype.setMajorScaleLineColor = function (v) {
/// <summary>
/// 	获取表盘上主要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_COLOR
/// </summary>
/// <param name="v" type="String">表盘上主要的刻度线的颜色</param>
}

twaver.charts.DialChart.prototype.setMajorScaleLineLength = function (v) {
/// <summary>
/// 	设置表盘上主要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_LENGTH
/// </summary>
/// <param name="v" type="Number">表盘上主要的刻度线的长度</param>
}

twaver.charts.DialChart.prototype.setMajorScaleLineWidth = function (v) {
/// <summary>
/// 	设置表盘上主要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">表盘上主要的刻度线的宽度</param>
}

twaver.charts.DialChart.prototype.setMinorScaleCount = function (v) {
/// <summary>
/// 	设置表盘上次要的刻度值数量，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_COUNT
/// </summary>
/// <param name="v" type="Number">表盘上次要的刻度值数量</param>
}

twaver.charts.DialChart.prototype.setMinorScaleLineColor = function (v) {
/// <summary>
/// 	设置表盘上次要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_COLOR
/// </summary>
/// <param name="v" type="String">表盘上次要的刻度线的颜色</param>
}

twaver.charts.DialChart.prototype.setMinorScaleLineLength = function (v) {
/// <summary>
/// 	设置表盘上次要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_LENGTH
/// </summary>
/// <param name="v" type="Number">表盘上次要的刻度线的长度</param>
}

twaver.charts.DialChart.prototype.setMinorScaleLineWidth = function (v) {
/// <summary>
/// 	设置表盘上次要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">表盘上次要的刻度线的宽度</param>
}

twaver.charts.DialChart.prototype.setOuterBrighterRadius = function (v) {
/// <summary>
/// 	设置表盘外圈浅色部分的半径值。表盘的外圈浅色部分用于绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_OUTER_BRIGHTER_RADIUS
/// </summary>
/// <param name="v" type="Number">表盘外圈浅色部分的半径值</param>
}

twaver.charts.DialChart.prototype.setOutlineColor = function (v) {
/// <summary>
/// 	设置表盘外边框的颜色，默认为 twaver.Defaults.DIALCHART_OUTLINE_COLOR
/// </summary>
/// <param name="v" type="String">表盘外边框的颜色</param>
}

twaver.charts.DialChart.prototype.setOutlineWidth = function (v) {
/// <summary>
/// 	设置表盘外边框的宽度，默认为 twaver.Defaults.DIALCHART_OUTLINE_WIDTH
/// </summary>
/// <param name="v" type="Number">表盘外边框的宽度</param>
}

twaver.charts.DialChart.prototype.setPivotFill = function (v) {
/// <summary>
/// 	设置仪表盘图上中心轴是否需要填充，默认为twaver.Defaults.DIALCHART_PIVOT_FILL
/// </summary>
/// <param name="v" type="Boolean">true为需要填充，否则为false</param>
}

twaver.charts.DialChart.prototype.setPivotFillColor = function (v) {
/// <summary>
/// 	设置仪表盘图上中心轴的填充颜色，默认为twaver.Defaults.DIALCHART_PIVOT_FILL_COLOR
/// </summary>
/// <param name="v" type="String">仪表盘图上中心轴的填充颜色</param>
}

twaver.charts.DialChart.prototype.setPivotGradient = function (v) {
/// <summary>
/// 	设置仪表盘图上中心轴的渐变类型，默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT。
/// 	渐变类型的可选值为：
/// 	'linear.southwest'：线性.南西
/// 	'linear.southeast'：线性.南东
/// 	'linear.northwest'：线性.北西
/// 	'linear.northeast'：线性.北东
/// 	'linear.north'：线性.北
/// 	'linear.south'：线性.南
/// 	'linear.west'：线性.西
/// 	'linear.east'：线性.东
/// 	'radial.center'：放射.中
/// 	'radial.southwest'：放射.南西
/// 	'radial.southeast'：放射.南东
/// 	'radial.northwest'：放射.北西
/// 	'radial.northeast'：放射.北东
/// 	'radial.north'：放射.北
/// 	'radial.south'：放射.南
/// 	'radial.west'：放射.西
/// 	'radial.east'：放射.东
/// 	'spread.horizontal':扩展.水平
/// 	'spread.vertical':扩展.垂直
/// 	'spread.diagonal':扩展.对角线
/// 	'spread.antidiagonal':扩展.反对角线
/// 	'spread.north':扩展.北
/// 	'spread.south':扩展.南
/// 	'spread.west':扩展.西
/// 	'spread.east':扩展.东
/// 	
/// </summary>
/// <param name="v" type="String">渐变类型</param>
}

twaver.charts.DialChart.prototype.setPivotGradientColor = function (v) {
/// <summary>
/// 	设置仪表盘图上中心轴的渐变颜色，默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT_COLOR
/// </summary>
/// <param name="v" type="String">中心轴的渐变颜色</param>
}

twaver.charts.DialChart.prototype.setPivotOutlineColor = function (v) {
/// <summary>
/// 	获取仪表盘图上中心轴的外边框颜色，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_COLOR
/// </summary>
/// <param name="v" type="String">中心轴的外边框颜色</param>
}

twaver.charts.DialChart.prototype.setPivotOutlineWidth = function (v) {
/// <summary>
/// 	设置仪表盘图上中心轴的外边框宽度，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_WIDTH
/// </summary>
/// <param name="v" type="Number">仪表盘图上中心轴的外边框宽度</param>
}

twaver.charts.DialChart.prototype.setPivotRadius = function (v) {
/// <summary>
/// 	设置仪表盘图上中心轴的半径值，默认为twaver.Defaults.DIALCHART_PIVOT_RADIUS
/// </summary>
/// <param name="v" type="Number">仪表盘图上中心轴的半径值</param>
}

twaver.charts.DialChart.prototype.setScaleInside = function (v) {
/// <summary>
/// 	设置仪表盘度上的刻度值是否显示在内部，默认为twaver.Defaults.DIALCHART_SCALE_INSIDE
/// </summary>
/// <param name="v" type="Boolean">true为显示在内部，否则为false</param>
}

twaver.charts.DialChart.prototype.setScaleLowerLimitTextVisible = function (v) {
/// <summary>
/// 	设置表盘上限制的最小刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_LOWER_LIMIT_TEXT_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.DialChart.prototype.setScaleTextColor = function (v) {
/// <summary>
/// 	设置表盘上刻度值的颜色，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_COLOR
/// </summary>
/// <param name="v" type="String">表盘上刻度值的颜色</param>
}

twaver.charts.DialChart.prototype.setScaleTextFont = function (v) {
/// <summary>
/// 	设置表盘上刻度值的字体，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_FONT
/// </summary>
/// <param name="v" type="String">表盘上刻度值的字体</param>
}

twaver.charts.DialChart.prototype.setScaleTextVisible = function (v) {
/// <summary>
/// 	设置仪表盘图上的刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.DialChart.prototype.setScaleUpperLimitTextVisible = function (v) {
/// <summary>
/// 	设置表盘上限制的最大刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_UPPER_LIMIT_TEXT_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见 ，否则为false</param>
}

twaver.charts.DialChart.prototype.setSelectShadowColor = function (v) {
/// <summary>
/// 	设置选中网元时的阴影的颜色，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_COLOR
/// </summary>
/// <param name="v" type="String">选中网元时的阴影的颜色</param>
}

twaver.charts.DialChart.prototype.setSelectShadowOffset = function (v) {
/// <summary>
/// 	设置选中网元时的阴影的偏移值，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_OFFSET
/// </summary>
/// <param name="v" type="Number">选中网元时的阴影的偏移值</param>
}

twaver.charts.DialChart.prototype.setStartAngle = function (v) {
/// <summary>
/// 	设置表盘图开始时的角度，默认为 twaver.Defaults.DIALCHART_START_ANGLE
/// </summary>
/// <param name="v" type="Number">表盘图开始时的角度</param>
}

twaver.charts.DialChart.prototype.setUpperLimit = function (v) {
/// <summary>
/// 	设置表盘上限制的最大刻度值，默认为twaver.Defaults.DIALCHART_UPPER_LIMIT
/// </summary>
/// <param name="v" type="Number">表盘上限制的最大刻度值</param>
}

twaver.charts.DialChart.prototype.setValuePosition = function (v) {
/// <summary>
/// 	设置仪表盘图上网元的值在指针上显示的位置比例，即在指针上的百分比，默认为twaver.Defaults.DIALCHART_VALUE_POSITION
/// </summary>
/// <param name="v" type="Number"></param>
}


twaver.charts.PieChart = function (dataBox) {
/// <summary>
/// 	饼图，它是以图表的形式来展示数据模型中的数据,是处于TWaver的MVC框架中的V(视图)层。
/// 	饼图支持多种显示的类型，比如圆形、椭圆形、环形、线形、椭圆环形等。
/// 	
/// </summary>
/// <param name="dataBox" type="String"></param>
/// <returns type="twaver.charts.PieChart"></returns>
}

twaver.charts.PieChart.prototype = new twaver.charts.ChartBase()

twaver.charts.PieChart.prototype.getDonutRate = function () {
/// <summary>
/// 	获取环形饼图内圈的百分比值，取值范围0-1，默认值为twaver.Defaults.PIECHART_DONUT_RATE。当饼图的类型为donut或ovalDonut时，这个参数才生效。
/// </summary>
/// <returns type="Number">环形饼图内圈的百分比值</returns>
}

twaver.charts.PieChart.prototype.getLineRate = function () {
/// <summary>
/// 	获取线形饼图显示的百分比值，取值范围在0-1之间，默认值为twaver.Defaults.PIECHART_LINE_RATE。当饼图的类型为line时，这个参数才生效。
/// 	
/// 	
/// </summary>
/// <returns type="Number">线形饼图显示的百分比值</returns>
}

twaver.charts.PieChart.prototype.getSelectOffset = function () {
/// <summary>
/// 	获取饼图上选择网元时网元的偏移值，默认为twaver.Defaults.PIECHART_SELECT_OFFSET
/// </summary>
/// <returns type="Number">选择网元时网元的偏移值</returns>
}

twaver.charts.PieChart.prototype.getShadowColor = function () {
/// <summary>
/// 	设置饼图阴影的颜色，默认值为twaver.Defaults.PIECHART_SHADOW_COLOR
/// </summary>
/// <returns type="String">饼图阴影的颜色</returns>
}

twaver.charts.PieChart.prototype.getShadowOffset = function () {
/// <summary>
/// 	设置饼图阴影的偏移值，默认值为twaver.Defaults.PIECHART_SHADOW_OFFSET
/// </summary>
/// <returns type="Number">饼图阴影的偏移值</returns>
}

twaver.charts.PieChart.prototype.getStartAngle = function () {
/// <summary>
/// 	获取饼图上起始值显示的角度，取值范围为0-3.141592653589793，默认值为twaver.Defaults.PIECHART_START_ANGLE
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.PieChart.prototype.getSum = function () {
/// <summary>
/// 	获取饼图上所有显示的网元值的总和
/// </summary>
/// <returns type="Number">显示的网元值的总和</returns>
}

twaver.charts.PieChart.prototype.getType = function () {
/// <summary>
/// 	获取饼图的类型，默认为twaver.Defaults.PIECHART_TYPE。类型的可选值有：
/// 	'oval'：椭圆形
/// 	'circle'：圆形
/// 	'line'：直线型
/// 	'donut'：环线
/// 	'ovalDonut'：椭圆环型
/// </summary>
/// <returns type="String">饼图的类型</returns>
}

twaver.charts.PieChart.prototype.getValuePosition = function () {
/// <summary>
/// 	获取网元的值到中心的距离与饼图半径的位置百分比，默认为twaver.Defaults.PIECHART_VALUE_POSITION
/// </summary>
/// <returns type="Number">网元的值到中心的距离与饼图半径的位置百分比</returns>
}

twaver.charts.PieChart.prototype.setDonutRate = function (v) {
/// <summary>
/// 	设置环形饼图内圈的百分比值，取值范围0-1，默认值为twaver.Defaults.PIECHART_DONUT_RATE。当饼图的类型为donut或ovalDonut时，这个参数才生效。
/// </summary>
/// <param name="v" type="Number">环形饼图内圈的百分比值</param>
}

twaver.charts.PieChart.prototype.setLineRate = function (v) {
/// <summary>
/// 	设置线形饼图显示的百分比值，取值范围在0-1之间，默认值为twaver.Defaults.PIECHART_LINE_RATE。当饼图的类型为line时，这个参数才生效。
/// </summary>
/// <param name="v" type="Number">线形饼图显示的百分比值</param>
}

twaver.charts.PieChart.prototype.setSelectOffset = function (v) {
/// <summary>
/// 	设置饼图上选择网元时网元的偏移值，默认为twaver.Defaults.PIECHART_SELECT_OFFSET
/// </summary>
/// <param name="v" type="Number">饼图上选择网元时网元的偏移值</param>
}

twaver.charts.PieChart.prototype.setShadowColor = function (v) {
/// <summary>
/// 	获取当选中饼图时其阴影的颜色，默认值为twaver.Defaults.PIECHART_SHADOW_COLOR
/// </summary>
/// <param name="v" type="String">当选中饼图时其阴影的颜色</param>
}

twaver.charts.PieChart.prototype.setShadowOffset = function (v) {
/// <summary>
/// 	获取选中饼图时其阴影的偏移值，默认值为twaver.Defaults.PIECHART_SHADOW_OFFSET
/// </summary>
/// <param name="v" type="Number">选中饼图时其阴影的偏移值</param>
}

twaver.charts.PieChart.prototype.setStartAngle = function (v) {
/// <summary>
/// 	设置饼图上起始值显示的角度，取值范围为0-3.141592653589793，默认值为twaver.Defaults.PIECHART_START_ANGLE
/// </summary>
/// <param name="v" type="Number"></param>
}

twaver.charts.PieChart.prototype.setType = function (v) {
/// <summary>
/// 	设置饼图的类型，默认为twaver.Defaults.PIECHART_TYPE。类型的可选值有：
/// 	'oval'：椭圆形
/// 	'circle'：圆形
/// 	'line'：线形
/// 	'donut'：环形
/// 	'ovalDonut'：椭圆环形
/// </summary>
/// <param name="v" type="String">饼图的类型</param>
}

twaver.charts.PieChart.prototype.setValuePosition = function (v) {
/// <summary>
/// 	设置饼图上网元的值显示的位置百分比，默认为twaver.Defaults.PIECHART_VALUE_POSITION
/// </summary>
/// <param name="v" type="Number">网元的值显示的位置百分比</param>
}


twaver.charts.RadarChart = function (dataBox) {
/// <summary>
/// 	雷达图，也称为螂蛛网图或戴布拉图。它是一个以多个坐标表示网元上'chart.values'值的图。它是处于TWaver的MVC框架中的V(视图)层。
/// 	雷达图通常是用来描述多个实体之间在不同坐标集上的比较。雷达图可以很清晰的显示同一个实体上几个不同因素的值，也可以呈现多个不同实体在同一个坐标上值的比较
/// 	
/// 	
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据模型</param>
/// <returns type="twaver.charts.RadarChart">雷达图对象本身</returns>
}

twaver.charts.RadarChart.prototype = new twaver.charts.ChartBase()

twaver.charts.RadarChart.prototype.formatScaleText = function (value, axisIndex) {
/// <summary>
/// 	格式化雷达图上刻度数据显示的格式，默认是保留两位小数
/// </summary>
/// <param name="value" type="Number">雷达图上的刻度值</param>
/// <param name="axisIndex" type="String">雷达图上坐标轴的次序</param>
/// <returns type="Number">格式化后的数据</returns>
}

twaver.charts.RadarChart.prototype.getAnchorShape = function (data) {
/// <summary>
/// 	获取指定数据在雷达图上显示的瞄点的形状，默认为圆形。TWaver中瞄点的形状支持：
/// 	'rectangle'：矩形，
/// 	'oval'：椭圆形，
/// 	'roundrect'：圆角矩形，
/// 	'star'：星形，
/// 	'triangle'：三角形，
/// 	'circle'：圆形，
/// 	'hexagon'：六角形，
/// 	'pentagon'：五角形，
/// 	'diamond'：菱形
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="String">瞄点显示的形状</returns>
}

twaver.charts.RadarChart.prototype.getAnchorSize = function (data) {
/// <summary>
/// 	获取指定数据在雷达图上显示的瞄点的大小。默认为6
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="String">瞄点的大小</returns>
}

twaver.charts.RadarChart.prototype.getAreaFillAlpha = function () {
/// <summary>
/// 	获取网元在雷达图上显示区域的透明度，默认为twaver.Defaults.RADARCHART_AREA_FILL_ALPHA
/// </summary>
/// <returns type="Number">显示区域的透明度，取值范围0-1</returns>
}

twaver.charts.RadarChart.prototype.getAreaSelectFillAlpha = function () {
/// <summary>
/// 	获取当选择网元时，网元在雷达图上显示区域的透明度，默认为
/// 	twaver.Defaults.RADARCHART_AREA_SELECT_FILL_ALPHA
/// </summary>
/// <returns type="Number">透明度值的取值范围0-1</returns>
}

twaver.charts.RadarChart.prototype.getAxisCount = function () {
/// <summary>
/// 	获取雷达图上坐标轴的数量
/// </summary>
/// <returns type="Number">雷达图上坐标轴的数量</returns>
}

twaver.charts.RadarChart.prototype.getAxisLineColor = function () {
/// <summary>
/// 	获取雷达图上坐标轴的颜色，默认为twaver.Defaults.RADARCHART_AXIS_LINE_COLOR
/// </summary>
/// <returns type="String">雷达图上坐标轴的颜色</returns>
}

twaver.charts.RadarChart.prototype.getAxisLineWidth = function () {
/// <summary>
/// 	获取雷达图上坐标轴的宽度，默认为twaver.Defaults.RADARCHART_AXIS_LINE_WIDTH
/// </summary>
/// <returns type="Number">雷达图上坐标轴的宽度</returns>
}

twaver.charts.RadarChart.prototype.getAxisList = function () {
/// <summary>
/// 	获取雷达图上坐标轴的集合，坐标轴的集合设置成如下的格式：
/// 	new twaver.List([
/// 		{ text: 'Inflation', min: -5, max: 15 },
/// 		{ text: 'Area(Millions)', min: 0, max: 20000000 / 1000000 },
/// 		{ text: 'Population(Millions)', min: 0, max: 2000000000 / 1000000 },
/// 		{ text: 'GDP(Thousands)', min: 0, max: 8000000 / 1000000 },
/// 		{ text: 'Growth', min: 0, max: 2 }
/// 	]);
/// </summary>
/// <returns type="twaver.List">雷达图上坐标轴的集合</returns>
}

twaver.charts.RadarChart.prototype.getAxisStartAngle = function () {
/// <summary>
/// 	获取雷达图上起始轴的显示角度。默认为twaver.Defaults.RADARCHART_AXIS_START_ANGLE
/// </summary>
/// <returns type="Number">雷达图上起始轴的显示角度</returns>
}

twaver.charts.RadarChart.prototype.getAxisTextColor = function () {
/// <summary>
/// 	获取雷达图上坐标轴文字的显示颜色。默认为 twaver.Defaults.RADARCHART_AXIS_TEXT_COLOR
/// </summary>
/// <returns type="String">雷达图上坐标轴文字的显示颜色</returns>
}

twaver.charts.RadarChart.prototype.getAxisTextFont = function () {
/// <summary>
/// 	获取雷达图坐标轴上文字的字体。默认为twaver.Defaults.RADARCHART_AXIS_TEXT_FONT
/// </summary>
/// <returns type="String">雷达图坐标轴上文字的字体</returns>
}

twaver.charts.RadarChart.prototype.getAxisTextPosition = function (angle, cx, cy, width, height) {
/// <summary>
/// 	获取雷达图上坐标轴文字显示的位置，TWaver内部调用，用户可以重写此方法更改文字显示的位置
/// </summary>
/// <param name="angle" type="Number">坐标轴的角度</param>
/// <param name="cx" type="Number">坐标轴文字显示区域的x点</param>
/// <param name="cy" type="Number">坐标轴文字显示区域的y点</param>
/// <param name="width" type="Number">坐标轴文字显示区域的宽度</param>
/// <param name="height" type="Number">坐标轴文字显示区域的高度</param>
/// <returns type="Object">坐标轴文字显示的位置，是一个带x，y的对象，例如{x:200,y:300}</returns>
}

twaver.charts.RadarChart.prototype.getLineWidth = function (data) {
/// <summary>
/// 	获取指定的数据在雷达图上显示的线的宽度，默认为2个像素
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Number">数据在雷达图上显示的线的宽度</returns>
}

twaver.charts.RadarChart.prototype.getRingLineColor = function () {
/// <summary>
/// 	获取雷达图上坐标轴之间环形线的颜色，默认为twaver.Defaults.RADARCHART_RING_LINE_COLOR
/// </summary>
/// <returns type="String">环形线的颜色</returns>
}

twaver.charts.RadarChart.prototype.getRingLineWidth = function () {
/// <summary>
/// 	获取雷达图上坐标轴之间环形线的宽度，默认为twaver.Defaults.RADARCHART_RING_LINE_WIDTH
/// </summary>
/// <returns type="Number">环形线的宽度</returns>
}

twaver.charts.RadarChart.prototype.getRingType = function () {
/// <summary>
/// 	获取雷达图上坐标轴之间环形线的类型，默认为
/// 	twaver.Defaults.RADARCHART_RING_TYPE，可选值有：
/// 	'line'：直线, 
/// 	'arc'：弧形线
/// </summary>
/// <returns type="String">环形线的类型</returns>
}

twaver.charts.RadarChart.prototype.getScaleCount = function () {
/// <summary>
/// 	获取雷达图上坐标轴刻度的数量，默认为twaver.Defaults.RADARCHART_SCALE_COUNT
/// </summary>
/// <returns type="Number">刻度的数量</returns>
}

twaver.charts.RadarChart.prototype.getScaleMaxValue = function () {
/// <summary>
/// 	获取雷达图上坐标轴刻度的最大值，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_MAXVALUE
/// </summary>
/// <returns type="Number">坐标轴刻度的最大值</returns>
}

twaver.charts.RadarChart.prototype.getScaleMinValue = function () {
/// <summary>
/// 	获取雷达图上坐标轴刻度的最小值，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_MINVALUE
/// </summary>
/// <returns type="String">坐标轴刻度的最小值</returns>
}

twaver.charts.RadarChart.prototype.getScaleTextColor = function () {
/// <summary>
/// 	获取雷达图上坐标轴刻度尺文字的颜色，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_TEXT_COLOR
/// </summary>
/// <returns type="String">坐标轴刻度尺文字的颜色</returns>
}

twaver.charts.RadarChart.prototype.getScaleTextFont = function () {
/// <summary>
/// 	获取雷达图上坐标轴刻度尺文字的字体，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_TEXT_FONT
/// </summary>
/// <returns type="String">坐标轴刻度尺文字的字体</returns>
}

twaver.charts.RadarChart.prototype.getScaleTextPosition = function (angle, cx, cy, width, height) {
/// <summary>
/// 	获取雷达图上坐标轴刻度尺文字的显示位置，TWaver内部调用，用户可以重写此方法更改文字显示的位置
/// </summary>
/// <param name="angle" type="Number">坐标轴的角度</param>
/// <param name="cx" type="Number">坐标轴刻度尺文字显示区域的x点</param>
/// <param name="cy" type="Number">坐标轴刻度尺文字显示区域的y点</param>
/// <param name="width" type="Number">坐标轴刻度尺文字显示区域的宽度</param>
/// <param name="height" type="Number">坐标轴刻度尺文字显示区域的高度</param>
/// <returns type="Object">坐标轴刻度文字显示的位置，是一个带x，y的对象，例如{x:200,y:300}</returns>
}

twaver.charts.RadarChart.prototype.getValues = function (data) {
/// <summary>
/// 	获取指定的数据在雷达图上显示值的集合
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="twaver.List">数据在雷达图上显示值的集合</returns>
}

twaver.charts.RadarChart.prototype.isAnchorVisible = function () {
/// <summary>
/// 	判断雷达图上的网元瞄点是否可见，默认为twaver.Defaults.RADARCHART_ANCHOR_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，false不可见</returns>
}

twaver.charts.RadarChart.prototype.isAreaFill = function () {
/// <summary>
/// 	获取网元在雷达图上显示区域的是否需要填充，默认为twaver.Defaults.RADARCHART_AREA_FILL
/// </summary>
/// <returns type="Boolean">true为需要填充，否则为false</returns>
}

twaver.charts.RadarChart.prototype.isAxisTextVisible = function () {
/// <summary>
/// 	判读雷达图上坐标轴的文字是否可见，默认为
/// 	twaver.Defaults.RADARCHART_AXIS_TEXT_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.RadarChart.prototype.isAxisVisible = function () {
/// <summary>
/// 	判断雷达图上坐标轴是否可见，默认为twaver.Defaults.RADARCHART_AXIS_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.RadarChart.prototype.isRingVisible = function () {
/// <summary>
/// 	判断雷达图上坐标轴之间环形线的是否可见，默认为twaver.Defaults.RADARCHART_RING_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.RadarChart.prototype.isScaleTextVisible = function () {
/// <summary>
/// 	判断雷达图上坐标轴刻度尺上的文字是否可见，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_TEXT_VISIBLE
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.RadarChart.prototype.setAnchorVisible = function (v) {
/// <summary>
/// 	设置雷达图上的网元瞄点是否可见，默认为twaver.Defaults.RADARCHART_ANCHOR_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，false不可见</param>
}

twaver.charts.RadarChart.prototype.setAreaFill = function (v) {
/// <summary>
/// 	设置网元在雷达图上显示区域的是否需要填充，默认为twaver.Defaults.RADARCHART_AREA_FILL
/// </summary>
/// <param name="v" type="Boolean">true为需要填充，否则为false</param>
}

twaver.charts.RadarChart.prototype.setAreaFillAlpha = function (v) {
/// <summary>
/// 	设置网元在雷达图上显示区域的透明度，默认为twaver.Defaults.RADARCHART_AREA_FILL_ALPHA
/// </summary>
/// <param name="v" type="Number">显示区域的透明度，取值范围0-1</param>
}

twaver.charts.RadarChart.prototype.setAreaSelectFillAlpha = function (v) {
/// <summary>
/// 	设置当选择网元时，网元在雷达图上显示区域的透明度，默认为
/// 	twaver.Defaults.RADARCHART_AREA_SELECT_FILL_ALPHA
/// </summary>
/// <param name="v" type="Number">透明度值的取值范围0-1</param>
}

twaver.charts.RadarChart.prototype.setAxisLineColor = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴的颜色，默认为twaver.Defaults.RADARCHART_AXIS_LINE_COLOR
/// </summary>
/// <param name="v" type="String">雷达图上坐标轴的颜色</param>
}

twaver.charts.RadarChart.prototype.setAxisLineWidth = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴的宽度，默认为twaver.Defaults.RADARCHART_AXIS_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">雷达图上坐标轴的宽度</param>
}

twaver.charts.RadarChart.prototype.setAxisList = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴的集合，坐标轴的集合设置成如下的格式：
/// 	new twaver.List([
/// 		{ text: 'Inflation', min: -5, max: 15 },
/// 		{ text: 'Area(Millions)', min: 0, max: 20000000 / 1000000 },
/// 		{ text: 'Population(Millions)', min: 0, max: 2000000000 / 1000000 },
/// 		{ text: 'GDP(Thousands)', min: 0, max: 8000000 / 1000000 },
/// 		{ text: 'Growth', min: 0, max: 2 }
/// 	]);
/// </summary>
/// <param name="v" type="twaver.List">雷达图上坐标轴的集合</param>
}

twaver.charts.RadarChart.prototype.setAxisStartAngle = function (v) {
/// <summary>
/// 	设置雷达图上起始轴的显示角度。默认为twaver.Defaults.RADARCHART_AXIS_START_ANGLE
/// </summary>
/// <param name="v" type="Number">雷达图上起始轴的显示角度</param>
}

twaver.charts.RadarChart.prototype.setAxisTextColor = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴文字的显示颜色。默认为 twaver.Defaults.RADARCHART_AXIS_TEXT_COLOR
/// </summary>
/// <param name="v" type="String">雷达图上坐标轴文字的显示颜色</param>
}

twaver.charts.RadarChart.prototype.setAxisTextFont = function (v) {
/// <summary>
/// 	设置雷达图坐标轴上文字的字体。默认为twaver.Defaults.RADARCHART_AXIS_TEXT_FONT
/// </summary>
/// <param name="v" type="String">雷达图坐标轴上文字的字体</param>
}

twaver.charts.RadarChart.prototype.setAxisTextVisible = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴的文字是否可见，默认为
/// 	twaver.Defaults.RADARCHART_AXIS_TEXT_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.RadarChart.prototype.setAxisVisible = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴是否可见，默认为twaver.Defaults.RADARCHART_AXIS_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.RadarChart.prototype.setRingLineColor = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴之间环形线的颜色，默认为twaver.Defaults.RADARCHART_RING_LINE_COLOR
/// </summary>
/// <param name="v" type="String">环形线的颜色</param>
}

twaver.charts.RadarChart.prototype.setRingLineWidth = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴之间环形线的宽度，默认为twaver.Defaults.RADARCHART_RING_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">环形线的宽度</param>
}

twaver.charts.RadarChart.prototype.setRingType = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴之间环形线的类型，默认为
/// 	twaver.Defaults.RADARCHART_RING_TYPE，可选值有：
/// 	'line'：直线, 
/// 	'arc'：弧形线
/// </summary>
/// <param name="v" type="String">环形线的类型</param>
}

twaver.charts.RadarChart.prototype.setRingVisible = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴之间环形线的是否可见，默认为twaver.Defaults.RADARCHART_RING_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.RadarChart.prototype.setScaleCount = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴刻度的数量，默认为twaver.Defaults.RADARCHART_SCALE_COUNT
/// </summary>
/// <param name="v" type="Number">刻度的数量</param>
}

twaver.charts.RadarChart.prototype.setScaleMaxValue = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴刻度的最大值，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_MAXVALUE
/// </summary>
/// <param name="v" type="Number">坐标轴刻度的最大值</param>
}

twaver.charts.RadarChart.prototype.setScaleMinValue = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴刻度的最小值，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_MINVALUE
/// </summary>
/// <param name="v" type="Number">坐标轴刻度的最小值</param>
}

twaver.charts.RadarChart.prototype.setScaleTextColor = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴刻度尺文字的颜色，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_TEXT_COLOR
/// </summary>
/// <param name="v" type="String">坐标轴刻度尺文字的颜色</param>
}

twaver.charts.RadarChart.prototype.setScaleTextFont = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴刻度尺文字的字体，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_TEXT_FONT
/// </summary>
/// <param name="v" type="String">坐标轴刻度尺文字的字体</param>
}

twaver.charts.RadarChart.prototype.setScaleTextVisible = function (v) {
/// <summary>
/// 	设置雷达图上坐标轴刻度尺上的文字是否可见，默认为
/// 	twaver.Defaults.RADARCHART_SCALE_TEXT_VISIBLE
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}


twaver.charts.ScaleChart = function (dataBox) {
/// <summary>
/// 	刻度比例图，它是棒图、气泡图、曲线图的基类。这类图的特征是有X、Y坐标轴。它提供了坐标轴上一系列的参数设置
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.charts.ScaleChart"></returns>
}

twaver.charts.ScaleChart.prototype = new twaver.charts.ChartBase()

twaver.charts.ScaleChart.prototype.formatYScaleText = function (value) {
/// <summary>
/// 	格式化Y轴上的刻度尺的文字，默认保留两位小数。用户可以重写这个方法来对文字进行格式化
/// </summary>
/// <param name="value" type="Number">指定的数据值</param>
/// <returns type="Number">格式化后的数据</returns>
}

twaver.charts.ScaleChart.prototype.getColumnCount = function () {
/// <summary>
/// 	获取显示的列数，TWaver内部会调用此方法。
/// </summary>
/// <returns type="Number">显示的列数</returns>
}

twaver.charts.ScaleChart.prototype.getColumnWidth = function () {
/// <summary>
/// 	获取显示的列的宽度，TWaver内部会调用此方法。
/// </summary>
/// <returns type="Number">列的宽度</returns>
}

twaver.charts.ScaleChart.prototype.getLowerLimit = function () {
/// <summary>
/// 	获取图表上限制的最小值
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.ScaleChart.prototype.getMax = function () {
/// <summary>
/// 	获取图表上网元的最大值
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.ScaleChart.prototype.getMin = function () {
/// <summary>
/// 	获取图表上网元的最小值
/// </summary>
/// <returns type="Number"></returns>
}

twaver.charts.ScaleChart.prototype.getRange = function () {
/// <summary>
/// 	最大、最小值之间的差值，取的是Max-Min
/// </summary>
/// <returns type="String"></returns>
}

twaver.charts.ScaleChart.prototype.getUpperLimit = function () {
/// <summary>
/// 	获取图表上限制显示的最大值
/// </summary>
/// <returns type="String"></returns>
}

twaver.charts.ScaleChart.prototype.getValues = function (data) {
/// <summary>
/// 	获取指定数据值的集合，取的是data中的chart.values的样式值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="twaver.List">数据对象图表上值的集合</returns>
}

twaver.charts.ScaleChart.prototype.getXAxisLineColor = function () {
/// <summary>
/// 	获取图表上X轴线的颜色
/// </summary>
/// <returns type="String">X轴线的颜色</returns>
}

twaver.charts.ScaleChart.prototype.getXAxisLineWidth = function () {
/// <summary>
/// 	获取图表上X轴线的宽度
/// </summary>
/// <returns type="Number">X轴线的宽度</returns>
}

twaver.charts.ScaleChart.prototype.getXAxisText = function () {
/// <summary>
/// 	获取图表上X轴的显示文字
/// </summary>
/// <returns type="String">X轴的显示文字</returns>
}

twaver.charts.ScaleChart.prototype.getXAxisTextColor = function () {
/// <summary>
/// 	获取图表上X轴的显示文字的颜色
/// </summary>
/// <returns type="String">X轴显示文字的颜色</returns>
}

twaver.charts.ScaleChart.prototype.getXAxisTextFont = function () {
/// <summary>
/// 	获取图表上X轴的显示文字的字体
/// </summary>
/// <returns type="String">X轴的显示文字的字体</returns>
}

twaver.charts.ScaleChart.prototype.getXScaleTextColor = function () {
/// <summary>
/// 	获取图表上X轴刻度尺上的文字显示的颜色
/// </summary>
/// <returns type="String">X轴刻度尺上文字显示颜色</returns>
}

twaver.charts.ScaleChart.prototype.getXScaleTextFont = function () {
/// <summary>
/// 	获取图表上X轴刻度尺上的文字显示的字体
/// </summary>
/// <returns type="String">X轴刻度尺上的文字的字体</returns>
}

twaver.charts.ScaleChart.prototype.getXScaleTextOrientation = function () {
/// <summary>
/// 	获取图表上X轴刻度尺上的文字显示的方向，可选值为
/// 	'horizontal'：水平
/// 	'vertical'：垂直
/// </summary>
/// <returns type="String">X轴刻度尺上的文字显示的方向</returns>
}

twaver.charts.ScaleChart.prototype.getXScaleTexts = function () {
/// <summary>
/// 	获取X轴上刻度尺的文字显示的内容
/// 	
/// </summary>
/// <returns type="twaver.List">刻度尺的文字显示的内容集合</returns>
}

twaver.charts.ScaleChart.prototype.getYAxisLineColor = function () {
/// <summary>
/// 	获取图表上Y轴线的颜色
/// </summary>
/// <returns type="String">Y轴线的颜色</returns>
}

twaver.charts.ScaleChart.prototype.getYAxisLineWidth = function () {
/// <summary>
/// 	获取图表上Y轴线的宽度
/// </summary>
/// <returns type="Number">Y轴线的宽度</returns>
}

twaver.charts.ScaleChart.prototype.getYAxisText = function () {
/// <summary>
/// 	获取图表上Y轴的显示文字
/// </summary>
/// <returns type="String">Y轴的显示文字</returns>
}

twaver.charts.ScaleChart.prototype.getYAxisTextColor = function () {
/// <summary>
/// 	获取图表上Y轴的文字显示的颜色
/// </summary>
/// <returns type="String">Y轴的文字显示的颜色</returns>
}

twaver.charts.ScaleChart.prototype.getYAxisTextFont = function () {
/// <summary>
/// 	获取图表上Y轴的文字显示的字体
/// </summary>
/// <returns type="String">Y轴的文字显示的字体</returns>
}

twaver.charts.ScaleChart.prototype.getYScaleLineColor = function () {
/// <summary>
/// 	获取图表上Y轴刻度线的颜色
/// </summary>
/// <returns type="String">Y轴刻度线的颜色</returns>
}

twaver.charts.ScaleChart.prototype.getYScaleLineWidth = function () {
/// <summary>
/// 	获取图表上Y轴刻度线的宽度
/// </summary>
/// <returns type="Number">Y轴刻度线的宽度</returns>
}

twaver.charts.ScaleChart.prototype.getYScalePixelGap = function () {
/// <summary>
/// 	获取图表上Y轴刻度之间的间隙像素值，当没有设置Y轴刻度值之间的间距时，这个参数生效
/// </summary>
/// <returns type="Number">Y轴刻度之间的间隙像素值</returns>
}

twaver.charts.ScaleChart.prototype.getYScaleTextColor = function () {
/// <summary>
/// 	获取图表上Y轴刻度尺上的文字显示的颜色
/// </summary>
/// <returns type="String">Y轴刻度尺上的文字显示的颜色</returns>
}

twaver.charts.ScaleChart.prototype.getYScaleTextFont = function () {
/// <summary>
/// 	获取图表上Y轴刻度尺上的文字显示的字体
/// </summary>
/// <returns type="String">Y轴刻度尺上的文字显示的字体</returns>
}

twaver.charts.ScaleChart.prototype.getYScaleValueGap = function () {
/// <summary>
/// 	获取图表上Y轴刻度值之间的间距
/// </summary>
/// <returns type="Number">Y轴刻度值之间的间距</returns>
}

twaver.charts.ScaleChart.prototype.isYScaleMinTextVisible = function () {
/// <summary>
/// 	判断图表上Y轴上最小刻度值是否可见
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.ScaleChart.prototype.isYScaleTextVisible = function () {
/// <summary>
/// 	判断图表上Y轴上的刻度值是否可见
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.charts.ScaleChart.prototype.setLowerLimit = function (v) {
/// <summary>
/// 	设置图表上限制显示的最小值
/// </summary>
/// <param name="v" type="Number"></param>
}

twaver.charts.ScaleChart.prototype.setUpperLimit = function (v) {
/// <summary>
/// 	设置图表上限制显示的最大值
/// </summary>
/// <param name="v" type="Number"></param>
}

twaver.charts.ScaleChart.prototype.setXAxisLineColor = function (v) {
/// <summary>
/// 	设置图表上X轴线的颜色
/// </summary>
/// <param name="v" type="String">X轴线的颜色</param>
}

twaver.charts.ScaleChart.prototype.setXAxisLineWidth = function (v) {
/// <summary>
/// 	设置图表上X轴线的宽度
/// </summary>
/// <param name="v" type="Number">X轴线的宽度</param>
}

twaver.charts.ScaleChart.prototype.setXAxisText = function (v) {
/// <summary>
/// 	设置图表上X轴的显示文字
/// </summary>
/// <param name="v" type="String">X轴的显示文字</param>
}

twaver.charts.ScaleChart.prototype.setXAxisTextColor = function (v) {
/// <summary>
/// 	设置图表上X轴的显示文字的颜色
/// </summary>
/// <param name="v" type="String">X轴显示文字的颜色</param>
}

twaver.charts.ScaleChart.prototype.setXAxisTextFont = function (v) {
/// <summary>
/// 	设置图表上X轴的显示文字的字体
/// </summary>
/// <param name="v" type="String">X轴的显示文字的字体</param>
}

twaver.charts.ScaleChart.prototype.setXScaleTextColor = function (v) {
/// <summary>
/// 	设置图表上X轴刻度尺上的文字显示的颜色
/// </summary>
/// <param name="v" type="String">X轴刻度尺上文字显示颜色</param>
}

twaver.charts.ScaleChart.prototype.setXScaleTextFont = function (v) {
/// <summary>
/// 	设置图表上X轴刻度尺上的文字显示的字体
/// </summary>
/// <param name="v" type="String">X轴刻度尺上的文字的字体</param>
}

twaver.charts.ScaleChart.prototype.setXScaleTextOrientation = function (v) {
/// <summary>
/// 	设置图表上X轴刻度尺上的文字显示的方向，可选值为
/// 	'horizontal'：水平
/// 	'vertical'：垂直
/// </summary>
/// <param name="v" type="String">X轴刻度尺上的文字显示的方向</param>
}

twaver.charts.ScaleChart.prototype.setXScaleTexts = function (v) {
/// <summary>
/// 	设置X轴上刻度尺的文字显示的内容
/// 	
/// </summary>
/// <param name="v" type="twaver.List">刻度尺的文字显示的内容集合</param>
}

twaver.charts.ScaleChart.prototype.setYAxisLineColor = function (v) {
/// <summary>
/// 	设置图表上Y轴线的颜色
/// </summary>
/// <param name="v" type="String">Y轴线的颜色</param>
}

twaver.charts.ScaleChart.prototype.setYAxisLineWidth = function (v) {
/// <summary>
/// 	设置图表上Y轴线的宽度
/// </summary>
/// <param name="v" type="Number">Y轴线的宽度</param>
}

twaver.charts.ScaleChart.prototype.setYAxisText = function (v) {
/// <summary>
/// 	设置图表上Y轴的显示文字
/// </summary>
/// <param name="v" type="String">Y轴的显示文字</param>
}

twaver.charts.ScaleChart.prototype.setYAxisTextColor = function (v) {
/// <summary>
/// 	设置图表上Y轴的文字显示的颜色
/// </summary>
/// <param name="v" type="String">Y轴的文字显示的颜色</param>
}

twaver.charts.ScaleChart.prototype.setYAxisTextFont = function (v) {
/// <summary>
/// 	设置图表上Y轴的文字显示的字体
/// </summary>
/// <param name="v" type="String">Y轴的文字显示的字体</param>
}

twaver.charts.ScaleChart.prototype.setYScaleLineColor = function (v) {
/// <summary>
/// 	设置图表上Y轴刻度线的颜色
/// </summary>
/// <param name="v" type="String">Y轴刻度线的颜色</param>
}

twaver.charts.ScaleChart.prototype.setYScaleLineWidth = function (v) {
/// <summary>
/// 	设置图表上Y轴刻度线的宽度
/// </summary>
/// <param name="v" type="Number">Y轴刻度线的宽度</param>
}

twaver.charts.ScaleChart.prototype.setYScaleMinTextVisible = function (v) {
/// <summary>
/// 	设置图表上Y轴上最小刻度值是否可见
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.ScaleChart.prototype.setYScalePixelGap = function (v) {
/// <summary>
/// 	设置图表上Y轴刻度之间的间隙像素值，当没有设置Y轴刻度值之间的间距时，这个参数生效
/// </summary>
/// <param name="v" type="Number">Y轴刻度之间的间隙像素值</param>
}

twaver.charts.ScaleChart.prototype.setYScaleTextColor = function (v) {
/// <summary>
/// 	设置图表上Y轴刻度尺上的文字显示的颜色
/// </summary>
/// <param name="v" type="String">Y轴刻度尺上的文字显示的颜色</param>
}

twaver.charts.ScaleChart.prototype.setYScaleTextFont = function (v) {
/// <summary>
/// 	设置图表上Y轴刻度尺上的文字显示的字体
/// </summary>
/// <param name="v" type="String">Y轴刻度尺上的文字显示的字体</param>
}

twaver.charts.ScaleChart.prototype.setYScaleTextVisible = function (v) {
/// <summary>
/// 	设置图表上Y轴上的刻度值是否可见
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.charts.ScaleChart.prototype.setYScaleValueGap = function (v) {
/// <summary>
/// 	设置图表上Y轴刻度值之间的间距
/// </summary>
/// <param name="v" type="Number">Y轴刻度值之间的间距</param>
}


twaver.controls.ListBase = function (dataBox) {
/// <summary>
/// 	构造函数
/// 	这个类定义了列表、表格、树中通用的方法，它是这些类的基类。它和数据容器绑定，以图形化的方式展示数据容器中的数据
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.controls.ListBase">ListBase对象本身</returns>
}

twaver.controls.ListBase.prototype = new twaver.controls.View()

twaver.controls.ListBase.prototype.adjustRowSize = function () {
/// <summary>
/// 	调整行的大小
/// </summary>
}

twaver.controls.ListBase.prototype.getCurrentSortFunction = function () {
/// <summary>
/// 	获取当前排序的函数
/// </summary>
/// <returns type="Function">排序的函数</returns>
}

twaver.controls.ListBase.prototype.getDataAt = function (e) {
/// <summary>
/// 	获取鼠标点击的数据
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Data">鼠标事件下的数据</returns>
}

twaver.controls.ListBase.prototype.getDataBox = function () {
/// <summary>
/// 	获取绑定的数据容器
/// </summary>
/// <returns type="twaver.DataBox">绑定的数据容器</returns>
}

twaver.controls.ListBase.prototype.getDataDiv = function () {
/// <summary>
/// 	获得所有数据的div
/// </summary>
/// <returns type="HTMLDivElement">数据div对象</returns>
}

twaver.controls.ListBase.prototype.getEndRowIndex = function () {
/// <summary>
/// 	获取可见区域结束的行号
/// </summary>
/// <returns type="Number">结束的行号</returns>
}

twaver.controls.ListBase.prototype.getRowDatas = function () {
/// <summary>
/// 	获取所有的行数据
/// </summary>
/// <returns type="twaver.List">所有行的数据</returns>
}

twaver.controls.ListBase.prototype.getRowIndexAt = function (e) {
/// <summary>
/// 	获取鼠标下数据的行号
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Number">数据的行号</returns>
}

twaver.controls.ListBase.prototype.getRowIndexByData = function (data) {
/// <summary>
/// 	获取指定数据的行号
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="Number">行号</returns>
}

twaver.controls.ListBase.prototype.getRowIndexById = function (id) {
/// <summary>
/// 	通过指定数据的ID编号获取数据所在行的行号
/// </summary>
/// <param name="id" type="Object">指定数据的ID编号</param>
/// <returns type="Number">行的Index值</returns>
}

twaver.controls.ListBase.prototype.getRowSize = function () {
/// <summary>
/// 	获取列表上行的数量
/// </summary>
/// <returns type="Number">行的数量</returns>
}

twaver.controls.ListBase.prototype.getStartRowIndex = function () {
/// <summary>
/// 	获取可见区域开始的行号，当列表的滚动条滚动时，开始的行号是随之变化的
/// </summary>
/// <returns type="Number">开始的行号</returns>
}

twaver.controls.ListBase.prototype.handleChange = function (e) {
/// <summary>
/// 	当视图组件发生更改时，twaver会调用此方法。用户不需要直接调用此方法，但是可以重载此方法来实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">视图更改事件</param>
}

twaver.controls.ListBase.prototype.handleDataBoxChange = function (e) {
/// <summary>
/// 	当DataBox中的数据发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">数据发生变化的事件</param>
}

twaver.controls.ListBase.prototype.handleHierarchyChange = function (e) {
/// <summary>
/// 	当DataBox中的数据的层次发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">数据的层次发生变化的事件</param>
}

twaver.controls.ListBase.prototype.handlePropertyChange = function (e) {
/// <summary>
/// 	当DataBox中的数据的属性发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">数据的属性发生变化的事件</param>
}

twaver.controls.ListBase.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	当DataBox中的选择的数据发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">DataBox中的选择的数据发生变化的事件</param>
}

twaver.controls.ListBase.prototype.invalidateData = function (data) {
/// <summary>
/// 	无效视图中的指定的数据，在等待数毫秒后刷新视图，当视图数据容器中指定的数据发生变化时，须调用此方法，让组件重画
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
}

twaver.controls.ListBase.prototype.invalidateDisplay = function () {
/// <summary>
/// 	无效视图的组件，在等待数毫秒后刷新视图组件，当视图发生变化时，须调用此方法，让组件重画
/// </summary>
}

twaver.controls.ListBase.prototype.invalidateModel = function () {
/// <summary>
/// 	无效视图的模型，当视图模型中的数据发生变化时，调用此方法，在等待数毫秒数后刷新视图组件
/// </summary>
}

twaver.controls.ListBase.prototype.isInnerText = function () {
/// <summary>
/// 	获取列表列内容是否为纯文本
/// </summary>
/// <returns type="Boolean">返回列表列内容是否为纯文本</returns>
}

twaver.controls.ListBase.prototype.isVisible = function (data) {
/// <summary>
/// 	判断指定的数据在视图上是否可见
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.controls.ListBase.prototype.makeVisible = function (data) {
/// <summary>
/// 	让指定的数据处于可见区域
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
}

twaver.controls.ListBase.prototype.onDataRendered = function (div, data, row, selected) {
/// <summary>
/// 	当调用renderData时，会调用此方法。用户不需要直接调用此方法，但是可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="div" type="HTMLDivElement">包含数据的div</param>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="row" type="Number">数据所在的行</param>
/// <param name="selected" type="Boolean">是否为选中状态</param>
}

twaver.controls.ListBase.prototype.onSelectionChanged = function (e) {
/// <summary>
/// 	当数据容器中选择的数据发生变化时，会调用此方法。用户不需要直接调用此方法，但可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">DataBox中选择的数据发生变化的事件</param>
}

twaver.controls.ListBase.prototype.onShareSelectionModelChanged = function () {
/// <summary>
/// 	当共享选择模型发生更改时调用此方法
/// </summary>
}

twaver.controls.ListBase.prototype.onValidated = function () {
/// <summary>
/// 	当调用validate后，twaver会调用此方法，用户不需自己调用此方法，但可以重载此方法，实现自己的逻辑
/// </summary>
}

twaver.controls.ListBase.prototype.scrollToData = function (data) {
/// <summary>
/// 	让滚动条滚动到指定的数据，让指定的数据可见
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
}

twaver.controls.ListBase.prototype.setDataBox = function (dataBox) {
/// <summary>
/// 	设置绑定的数据容器
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
}

twaver.controls.ListBase.prototype.setInnerText = function (v) {
/// <summary>
/// 	设置列表列内容是否为纯文本
/// </summary>
/// <param name="v" type="Boolean">列表列内容是否为纯文本</param>
}

twaver.controls.ListBase.prototype.validateModel = function () {
/// <summary>
/// 	重画组件，调用validate方法后，此方法会被调用
/// </summary>
}


twaver.controls.PropertySheet = function (dataBox) {
/// <summary>
/// 	构造函数
/// 	属性表是TWaver视图组件中的一种，它和数据容器绑定，并显示数据容器中当前选中的网元属性。
/// 	属性表是只有两列的表格，以键、值这样的对应关系来显示属性，并可以对属性进行分组
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.controls.PropertySheet"></returns>
}

twaver.controls.PropertySheet.prototype = new twaver.controls.View()

twaver.controls.PropertySheet.prototype.adjustWidth = function () {
/// <summary>
/// 	调整属性表的宽度
/// </summary>
}

twaver.controls.PropertySheet.prototype.cancelEditing = function () {
/// <summary>
/// 	取消当前编辑器的编辑状态
/// </summary>
}

twaver.controls.PropertySheet.prototype.collapse = function (categoryName) {
/// <summary>
/// 	合并属性表上的指定的类别
/// </summary>
/// <param name="categoryName" type="String">类别的名称</param>
}

twaver.controls.PropertySheet.prototype.collapseAll = function () {
/// <summary>
/// 	合并属性表上所有的类别
/// </summary>
}

twaver.controls.PropertySheet.prototype.commitEditValue = function (editInfo, target) {
/// <summary>
/// 	提交单元格中编辑的值，将这个值回写到Data的属性中
/// </summary>
/// <param name="editInfo" type="Object">指定的单元格编辑器的信息，它是一个包含column和data的对象</param>
/// <param name="target" type="Object">编辑器所对应的对象，它是一个包含type的对象，用于判断编辑器的类型</param>
}

twaver.controls.PropertySheet.prototype.expand = function (categoryName) {
/// <summary>
/// 	展开属性表上的指定的类别
/// </summary>
/// <param name="categoryName" type="String">类别的名称</param>
}

twaver.controls.PropertySheet.prototype.expandAll = function () {
/// <summary>
/// 	展开属性表上所有的类别
/// </summary>
}

twaver.controls.PropertySheet.prototype.getBorderColor = function () {
/// <summary>
/// 	获取属性表所有边框的颜色，默认为 twaver.Defaults.PROPERTYSHEET_BORDER_COLOR
/// </summary>
/// <returns type="String">边框的颜色</returns>
}

twaver.controls.PropertySheet.prototype.getCategoryName = function (property) {
/// <summary>
/// 	获取指定属性的类别名称
/// </summary>
/// <param name="property" type="twaver.Property">指定的属性对象</param>
/// <returns type="String">属性所对应的类别名称</returns>
}

twaver.controls.PropertySheet.prototype.getCollapseIcon = function () {
/// <summary>
/// 	获取类别合并时的图标，默认为twaver.Defaults.PROPERTYSHEET_COLLAPSE_ICON
/// </summary>
/// <returns type="String">合并的图标</returns>
}

twaver.controls.PropertySheet.prototype.getColumnLineWidth = function () {
/// <summary>
/// 	获取属性表上列的线宽，默认为 twaver.Defaults.PROPERTYSHEET_COLUMN_LINE_WIDTH
/// </summary>
/// <returns type="Number">列的线宽</returns>
}

twaver.controls.PropertySheet.prototype.getCurrentData = function () {
/// <summary>
/// 	获取属性表上当前显示的数据，默认为数据容器中最后一个选中的数据
/// </summary>
/// <returns type="twaver.Data">当前显示的数据</returns>
}

twaver.controls.PropertySheet.prototype.getDataBox = function () {
/// <summary>
/// 	获取绑定的数据容器
/// </summary>
/// <returns type="twaver.DataBox">指定的数据容器</returns>
}

twaver.controls.PropertySheet.prototype.getDataDiv = function () {
/// <summary>
/// 	获取属性表上数据所在的DIV
/// </summary>
/// <returns type="HTMLDivElement">包含数据的DIV</returns>
}

twaver.controls.PropertySheet.prototype.getExpandIcon = function () {
/// <summary>
/// 	获取属性表的类别展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
/// </summary>
/// <returns type="String">属性表的类别展开时的图标</returns>
}

twaver.controls.PropertySheet.prototype.getIndent = function () {
/// <summary>
/// 	获取属性表上父亲和孩子之间的缩进，默认为twaver.Defaults.PROPERTYSHEET_INDENT
/// </summary>
/// <returns type="Number">属性表上父亲和孩子之间的缩进值</returns>
}

twaver.controls.PropertySheet.prototype.getPropertyBox = function () {
/// <summary>
/// 	获取属性数据容器
/// </summary>
/// <returns type="twaver.PropertyBox">包含属性的容器</returns>
}

twaver.controls.PropertySheet.prototype.getPropertyNameHorizontalAlign = function () {
/// <summary>
/// 	获取属性名的水平对齐方式，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_HORIZONTAL_ALIGN
/// 	水平对齐方式的可选值为：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// </summary>
/// <returns type="String">属性名的水平对齐方式</returns>
}

twaver.controls.PropertySheet.prototype.getPropertyNameWidth = function () {
/// <summary>
/// 	获取属性名所在的列所占的宽度，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_WIDTH
/// </summary>
/// <returns type="Number">属性名所在的列所占的宽度</returns>
}

twaver.controls.PropertySheet.prototype.getResizeTolerance = function () {
/// <summary>
/// 	获取当鼠标靠近分隔条时可以改变列宽的像素数。默认为twaver.Defaults.PROPERTYSHEET_RESIZE_TOLERANCE
/// </summary>
/// <returns type="Number">当鼠标靠近分隔条时可以改变列宽的像素数</returns>
}

twaver.controls.PropertySheet.prototype.getRowHeight = function () {
/// <summary>
/// 	获取属性表的行高。默认为 twaver.Defaults.PROPERTYSHEET_ROW_HEIGHT
/// </summary>
/// <returns type="Number">属性表的行高</returns>
}

twaver.controls.PropertySheet.prototype.getRowIndexAt = function (e) {
/// <summary>
/// 	获取鼠标下的数据在属性表上的行数
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="Number">数据的行数</returns>
}

twaver.controls.PropertySheet.prototype.getRowLineWidth = function () {
/// <summary>
/// 	设置属性表每行线的宽度，默认为twaver.Defaults.PROPERTYSHEET_ROW_LINE_WIDTH
/// </summary>
/// <returns type="Number">行之间线的宽度</returns>
}

twaver.controls.PropertySheet.prototype.getSortFunction = function () {
/// <summary>
/// 	获取属性表排序的函数
/// </summary>
/// <returns type="Function">排序的函数</returns>
}

twaver.controls.PropertySheet.prototype.getSumWidth = function () {
/// <summary>
/// 	获取属性表的总宽度，默认为twaver.Defaults.PROPERTYSHEET_SUM_WIDTH
/// </summary>
/// <returns type="Number">属性表的宽度</returns>
}

twaver.controls.PropertySheet.prototype.getValue = function (data, property) {
/// <summary>
/// 	获取属性表上指定的属性所对应的数据值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <param name="property" type="twaver.Property">指定的属性对象</param>
/// <returns type="Object">数据的属性值</returns>
}

twaver.controls.PropertySheet.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取属性表上可见过滤器，用于过滤某个属性获取某些网元在属性表上是否可见
/// 	
/// 	
/// 	
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
/// <example>
/// 	sheet.setVisibleFunction(function (property) {
/// 	     return       box.getSelectionModel().getLastData() instanceof twaver.Link;
/// 	});
/// </example>
}

twaver.controls.PropertySheet.prototype.handleChange = function (e) {
/// <summary>
/// 	处理更新
/// </summary>
/// <param name="e" type="Event">更新事件</param>
}

twaver.controls.PropertySheet.prototype.handlePropertyChange = function (e) {
/// <summary>
/// 	当数据容器中数据的属性发生变化时调用此方法，用于更新属性表的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">数据容器的属性更改事件</param>
}

twaver.controls.PropertySheet.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	当数据容器中数据的选择状态发生变化时调用此方法，用于刷新属性表显示的内容，用户不需要调用此方法，但可以重写此方式实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">数据选择状态更改的事件</param>
}

twaver.controls.PropertySheet.prototype.invalidatePropertyBox = function () {
/// <summary>
/// 	无效属性容器，当属性容器中的数据或数据的属性发生变化时，调用此方法。在等待指定的毫秒数后刷新属性表界面，让属性表重画
/// </summary>
}

twaver.controls.PropertySheet.prototype.isAutoAdjustable = function () {
/// <summary>
/// 	判断是否需要自动调整属性表的宽度
/// 	默认为twaver.Defaults.PROPERTYSHEET_AUTO_ADJUSTABLE
/// </summary>
/// <returns type="Boolean">true为自动调整，否则为false</returns>
}

twaver.controls.PropertySheet.prototype.isCategorizable = function () {
/// <summary>
/// 	判断是否显示类别分组。默认为twaver.Defaults.PROPERTYSHEET_CATEGORIZABLE
/// </summary>
/// <returns type="Boolean">true为显示，否则为false</returns>
}

twaver.controls.PropertySheet.prototype.isCellEditable = function (data, property) {
/// <summary>
/// 	获取数据中指定的属性单元格是否可编辑
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <param name="property" type="twaver.Property">指定的属性</param>
/// <returns type="Boolean">true为可编辑，否则为false</returns>
}

twaver.controls.PropertySheet.prototype.isEditable = function () {
/// <summary>
/// 	属性表是否可编辑
/// </summary>
/// <returns type="Boolean">true为可编辑，否则为false</returns>
}

twaver.controls.PropertySheet.prototype.isExpanded = function (categoryName) {
/// <summary>
/// 	判断指定的类别是否是展开状态
/// </summary>
/// <param name="categoryName" type="String">指定的类别名称</param>
/// <returns type="Boolean">true为展开，否则为false</returns>
}

twaver.controls.PropertySheet.prototype.isVisible = function (property) {
/// <summary>
/// 	判断指定的属性是否可见
/// </summary>
/// <param name="property" type="String">指定的属性</param>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.controls.PropertySheet.prototype.onCategoryRendered = function (div, categoryName) {
/// <summary>
/// 	当绘制属性表的类别时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="div" type="HTMLDivElement">类别对应的Div元素</param>
/// <param name="categoryName" type="String">类别名</param>
}

twaver.controls.PropertySheet.prototype.onNameRendered = function (params) {
/// <summary>
/// 	当调用绘制属性表的属性名称时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="params" type="Object">行信息的对象，它是一个包含view,data,property,value的对象</param>
}

twaver.controls.PropertySheet.prototype.onValueRendered = function (params) {
/// <summary>
/// 	当绘制属性表的属性值时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="params" type="Object">行信息的对象，它是一个包含view,data,property,value的对象</param>
}

twaver.controls.PropertySheet.prototype.renderCategory = function (div, categoryName) {
/// <summary>
/// 	绘制属性表的类别。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="div" type="HTMLDivElement">包含指定的类别的DIV</param>
/// <param name="categoryName" type="String">指定的类别名称</param>
}

twaver.controls.PropertySheet.prototype.renderName = function (params) {
/// <summary>
/// 	绘制属性表的属性名称。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="params" type="Object">它是一个包含view,data,property,value和nameRender div的对象</param>
}

twaver.controls.PropertySheet.prototype.renderValue = function (params) {
/// <summary>
/// 	绘制属性表的属性值。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="params" type="Object">它是一个包含view,data,property,value和nameRender div的对象</param>
}

twaver.controls.PropertySheet.prototype.setAutoAdjustable = function (v) {
/// <summary>
/// 	是否需要自动调整属性表的大小，默认为twaver.Defaults.PROPERTYSHEET_AUTO_ADJUSTABLE
/// </summary>
/// <param name="v" type="Boolean">是否自动调整</param>
}

twaver.controls.PropertySheet.prototype.setBorderColor = function (v) {
/// <summary>
/// 	设置属性表所有边框的颜色，默认为 twaver.Defaults.PROPERTYSHEET_BORDER_COLOR
/// </summary>
/// <param name="v" type="String">边框的颜色</param>
}

twaver.controls.PropertySheet.prototype.setCategorizable = function (v) {
/// <summary>
/// 	设置是否显示类别分组。默认为twaver.Defaults.PROPERTYSHEET_CATEGORIZABLE
/// </summary>
/// <param name="v" type="Boolean">true为显示，否则为false</param>
}

twaver.controls.PropertySheet.prototype.setCollapseIcon = function (v) {
/// <summary>
/// 	设置类别合并时的图标，默认为twaver.Defaults.PROPERTYSHEET_COLLAPSE_ICON
/// </summary>
/// <param name="v" type="String">合并的图标</param>
}

twaver.controls.PropertySheet.prototype.setColumnLineWidth = function (v) {
/// <summary>
/// 	设置属性表上列的线宽，默认为 twaver.Defaults.PROPERTYSHEET_COLUMN_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">列的线宽</param>
}

twaver.controls.PropertySheet.prototype.setDataBox = function (dataBox) {
/// <summary>
/// 	设置绑定的数据容器
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">指定的数据容器</param>
}

twaver.controls.PropertySheet.prototype.setEditable = function (v) {
/// <summary>
/// 	设置属性表是否可编辑，默认为twaver.Defaults.PROPERTYSHEET_EDITABLE
/// </summary>
/// <param name="v" type="Boolean">true为可编辑，否则为false</param>
}

twaver.controls.PropertySheet.prototype.setExpandIcon = function (v) {
/// <summary>
/// 	设置属性表的Category展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
/// </summary>
/// <param name="v" type="String">属性表的Category展开时的图标</param>
}

twaver.controls.PropertySheet.prototype.setIndent = function (v) {
/// <summary>
/// 	设置属性表上父亲和孩子之间的缩进，默认为twaver.Defaults.PROPERTYSHEET_INDENT
/// </summary>
/// <param name="v" type="Number">属性表上父亲和孩子之间的缩进值</param>
}

twaver.controls.PropertySheet.prototype.setPropertyNameHorizontalAlign = function (v) {
/// <summary>
/// 	设置属性名的水平对齐方式，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_HORIZONTAL_ALIGN
/// 	水平对齐方式的可选值为：
/// 	left：左对齐。
/// 	right：右对齐。	
/// 	center：中间对齐。	
/// 	justify: 填充对齐，使得一行上每个文字的间隔相同。	
/// 	inherit：继承于父亲的对齐方式。
/// 	更多的对齐方式可以参考CSS中的text-align样式
/// </summary>
/// <param name="v" type="String">属性名的水平对齐方式</param>
}

twaver.controls.PropertySheet.prototype.setPropertyNameWidth = function (v) {
/// <summary>
/// 	设置属性名所在的列所占的宽度，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_WIDTH
/// </summary>
/// <param name="v" type="Number">属性名所在的列所占的宽度</param>
}

twaver.controls.PropertySheet.prototype.setResizeTolerance = function (v) {
/// <summary>
/// 	设置当鼠标靠近分隔条多少像素时即可以改变列宽。默认为twaver.Defaults.PROPERTYSHEET_RESIZE_TOLERANCE
/// </summary>
/// <param name="v" type="Number">当鼠标靠近分隔条多少像素时可以改变列宽的像素数</param>
}

twaver.controls.PropertySheet.prototype.setRowHeight = function (v) {
/// <summary>
/// 	设置属性表的行高。默认为 twaver.Defaults.PROPERTYSHEET_ROW_HEIGHT
/// </summary>
/// <param name="v" type="Number">属性表的行高</param>
}

twaver.controls.PropertySheet.prototype.setRowLineWidth = function (v) {
/// <summary>
/// 	设置属性表每行线的宽度，默认为twaver.Defaults.PROPERTYSHEET_ROW_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">行之间线的宽度</param>
}

twaver.controls.PropertySheet.prototype.setSelectColor = function (v) {
/// <summary>
/// 	设置选中属性表上的行的颜色，默认为 twaver.Defaults.SELECT_COLOR
/// </summary>
/// <param name="v" type="String">选中行的颜色</param>
}

twaver.controls.PropertySheet.prototype.setSortFunction = function (v) {
/// <summary>
/// 	设置属性表排序的函数
/// </summary>
/// <param name="v" type="Object">排序的函数</param>
}

twaver.controls.PropertySheet.prototype.setSumWidth = function (v) {
/// <summary>
/// 	设置属性表的总宽度，默认为twaver.Defaults.PROPERTYSHEET_SUM_WIDTH
/// </summary>
/// <param name="v" type="Number">属性表的宽度</param>
}

twaver.controls.PropertySheet.prototype.setValue = function (data, property, value) {
/// <summary>
/// 	将属性页上指定的属性值设置到数据对象上，TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="property" type="twaver.Property">指定的属性表上的属性</param>
/// <param name="value" type="Object">属性的值</param>
}

twaver.controls.PropertySheet.prototype.setVisibleFunction = function (v) {
/// <summary>
/// 	设置属性表上可见过滤器，用于过滤某个属性获取某些网元在属性表上是否可见
/// 	
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
/// <example>
/// 	sheet.setVisibleFunction(function (property) {
/// 	     return       box.getSelectionModel().getLastData() instanceof twaver.Link;
/// 	});
/// </example>
}

twaver.controls.PropertySheet.prototype.updateCurrentData = function () {
/// <summary>
/// 	更新属性表中当前显示的数据，默认显示的是最后一个选中的网元
/// </summary>
}

twaver.controls.PropertySheet.prototype.updateCurrentRowIndex = function (newIndex) {
/// <summary>
/// 	更新当前的行号
/// </summary>
/// <param name="newIndex" type="Number">指定的行号</param>
}

twaver.controls.PropertySheet.prototype.validateDisplay = function () {
/// <summary>
/// 	当属性表发生变化时，调用此方法，让属性表重画
/// </summary>
}

twaver.controls.PropertySheet.prototype.validateModel = function () {
/// <summary>
/// 	当属性表中的数据发生变化时，调用此方法，让属性面板重画
/// </summary>
}


twaver.Follower = function (id) {
/// <summary>
/// 	构造函数。
/// 	跟随者是一种特殊的网元，它可以设置宿主节点，当宿主节点移动时，跟随者也会移动
/// 	
/// </summary>
/// <param name="id" type="Object">跟随者ID，用于唯一标识这个跟随者。如果为空，TWaver会按照默认的规则给跟随者ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是跟随者的ID，如果为Object类型，可以传入一个带跟随者属性的对象，比如： var follow = new twaver.Follow({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} }); </param>
/// <returns type="twaver.Follower"></returns>
}

twaver.Follower.prototype = new twaver.Node()

twaver.Follower.IS_INTERESTED_FOLLOWER_STYLE = function () {
/// <field type="Object">触发跟随者变化的相关样式</field>
}

twaver.Follower.IS_INTERESTED_HOST_GRID_PROPERTY = function () {
/// <field type="Object">触发宿主网格变化的相关属性</field>
}

twaver.Follower.prototype.getHost = function () {
/// <summary>
/// 	获取宿主节点
/// </summary>
/// <returns type="twaver.Node">宿主节点</returns>
}

twaver.Follower.prototype.handleHostPropertyChange = function (e) {
/// <summary>
/// 	当host上的属性发生变化时，调用此方法，更新这个跟随者
/// </summary>
/// <param name="e" type="Object">包含peoperty，newValue,oldValue属性的事件对象</param>
}

twaver.Follower.prototype.isHostOn = function (node) {
/// <summary>
/// 	判断当前的跟随者是否跟随着指定的网元，即为宿主节点或宿主节点链
/// </summary>
/// <param name="node" type="twaver.Node">宿主节点</param>
/// <returns type="Boolean">如果指定网元是宿主节点则为true，否则为false</returns>
}

twaver.Follower.prototype.isLoopedHostOn = function (follower) {
/// <summary>
/// 	检查传入的网元是否在当前跟随者链中。比如传入的网元跟着当前跟随者移动，或当前跟随者跟着传入的网元移动
/// </summary>
/// <param name="follower" type="twaver.Follower">跟着移动的网元对象</param>
/// <returns type="Boolean">如果跟着移动则为true，否则为false</returns>
}

twaver.Follower.prototype.onHostChanged = function (oldHost, newHost) {
/// <summary>
/// 	当host变化时回调此方法，比如setHost
/// </summary>
/// <param name="oldHost" type="twaver.Node">旧host</param>
/// <param name="newHost" type="twaver.Node">新的host</param>
}

twaver.Follower.prototype.setHost = function (host) {
/// <summary>
/// 	设置宿主节点
/// </summary>
/// <param name="host" type="twaver.Node">宿主节点</param>
}

twaver.Follower.prototype.updateFollower = function (e) {
/// <summary>
/// 	更新跟随者的属性。TWaver内部使用
/// </summary>
/// <param name="e" type="Object">包含peoperty，newValue,oldValue属性的事件对象</param>
}

twaver.Follower.prototype.updateFollowerImpl = function (e) {
/// <summary>
/// 	更新跟随者属性的具体实现，TWaver内部使用
/// </summary>
/// <param name="e" type="Object">包含peoperty，newValue,oldValue属性的事件对象</param>
}


twaver.LinkSubNetwork = function (id) {
/// <summary>
/// 	子网连线，具有连线和子网的双重特性，它和普通连线的区别在于可以双击进入/退出子网，进入子网时可以展现出这个子网连线下所有的孩子网元
/// </summary>
/// <param name="id" type="String">连线子网ID，用于唯一标识子网连线。如果为空，TWaver会按照默认的规则给子网连线ID赋值。ID可以为string，number类型，可以为Node类型，也可以为Object类型。为string或number类型时指的是连线子网的ID，为Node类型时，fromNode和toNode相同，都为ID参数传入的Node对象，如果为Object类型，可以传入一个带连线子网属性的对象，比如： var linkSubNetwork = new twaver.LinkSubNetwork({     name:'linksubnetworkname',     fromNode: twNode,   toNode:bbNode });</param>
/// <returns type="twaver.LinkSubNetwork">子网连线本身</returns>
}

twaver.LinkSubNetwork.prototype = new twaver.Link()

twaver.LinkSubNetwork.prototype.ISubNetwork = function () {
/// <field type="Boolean">是否为子网的标识，默认为true</field>
}


twaver.network.Network = function (elementBox) {
/// <summary>
/// 	用指定的ElementBox构造Network，ElementBox是Network的数据容器，如果为null则twaver内部会创建一个新的ElementBox；而且在构造Network后，也可以用Network#setElementBox方法重新绑定一个新的ElementBox
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">可选，默认为null，和Network关联的数据容器</param>
/// <returns type="twaver.network.Network"></returns>
/// <example>
/// 	var box = new twaver.ElementBox();
/// 	var tree = new twaver.controls.Tree(box);
/// 	var network = new twaver.network.Network(box);
/// </example>
}

twaver.network.Network.prototype = new twaver.controls.View()

twaver.network.Network.prototype.addElementByInteraction = function (element) {
/// <summary>
/// 	添加网元，并派发createElement类型的事件。CreateElementInteraction、CreateLinkInteraction、CreateShapeLinkInteraction和CreateShapeNodeInteraction会调用此方法
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.network.Network.prototype.createElementUI = function (element) {
/// <summary>
/// 	创建和指定Element关联的ElementUI，添加网元到和Network关联的ElementBox时会触发调用此方法，用户不需要调用此方法，但可以重载此方法
/// </summary>
/// <param name="element" type="twaver.Element">用于创建和网元关联的ElementUI</param>
}

twaver.network.Network.prototype.findFirstElement = function (matchFunction, scope) {
/// <summary>
/// 	按layer从上到下的顺序查找第一个满足条件的网元
/// </summary>
/// <param name="matchFunction" type="Function">过滤器</param>
/// <param name="scope" type="Object">过滤器的作用域，可选，默认为null</param>
/// <returns type="twaver.Element">返回第一个满足条件的网元</returns>
/// <example>
/// 	 network.getView().addEventListener('mousedown', function(e){
/// 	    var point = network.getLogicalPoint(e);
/// 	    var node = network.findFirstElement(function(element){
/// 	        return !!network.getElementUI(element).hitTest(point.x, point.y);
/// 	    });
/// 	    console.log(node && node.getName());
/// 	});
/// </example>
}

twaver.network.Network.prototype.forEachElementUI = function (callbackFunction, layer, scope) {
/// <summary>
/// 	遍历所有网元视图，可以指定要遍历的层，如果不指定，则遍历所有层
/// </summary>
/// <param name="callbackFunction" type="Function">回调函数</param>
/// <param name="layer" type="twaver.Layer">要遍历的层，可选，默认为null，表示遍历所有层</param>
/// <param name="scope" type="Object">回调函数的作用域，可选，默认为null</param>
/// <example>
/// 	network.forEachElementUI(function(ui){
/// 	    console.log(ui.getElement().getName());
/// 	});
/// </example>
}

twaver.network.Network.prototype.getAlarmLabel = function (element) {
/// <summary>
/// 	获取指定网元的告警冒泡文字内容，默认返回网元的最高新发告警数和别名，如果还有低级别的新发告警则前面带一个+号（比如+3C代表有3个严重告警，并且还有其他低级别新发告警），如果没有新发告警，则返回null
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="String">返回指定网元的告警冒泡文字内容</returns>
}

twaver.network.Network.prototype.getAttachmentDiv = function () {
/// <summary>
/// 	获取附件div
/// 	Network的层次关系为：
/// 	view
/// 	->rootDiv
/// 	->->bottomDiv
/// 	->->layersDiv
/// 	->->->layer n
/// 	->->->layer ...
/// 	->->->default layer
/// 	->->attachmentDiv
/// 	->->topDiv
/// </summary>
/// <returns type="HTMLDivElement">返回HTML div元素</returns>
}

twaver.network.Network.prototype.getBottomDiv = function () {
/// <summary>
/// 	获取底层div
/// 	Network的层次关系为：
/// 	view
/// 	->rootDiv
/// 	->->bottomDiv
/// 	->->layersDiv
/// 	->->->layer n
/// 	->->->layer ...
/// 	->->->default layer
/// 	->->attachmentDiv
/// 	->->topDiv
/// </summary>
/// <returns type="HTMLDivElement">返回HTML div元素</returns>
}

twaver.network.Network.prototype.getCurrentSubNetwork = function () {
/// <summary>
/// 	获取当前子网，如果是最顶层子网则返回null
/// </summary>
/// <returns type="twaver.SubNetwork">返回当前子网，如果是最顶层子网则返回null</returns>
}

twaver.network.Network.prototype.getEditableFunction = function () {
/// <summary>
/// 	获取网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
/// </summary>
/// <returns type="Function">返回网元可编辑过滤器</returns>
}

twaver.network.Network.prototype.getEditLineColor = function () {
/// <summary>
/// 	获取创建连线时连线的颜色，默认值为twaver.Defaults.NETWORK_EDIT_LINE_COLOR
/// </summary>
/// <returns type="String">返回创建连线时连线的颜色</returns>
}

twaver.network.Network.prototype.getEditLineWidth = function () {
/// <summary>
/// 	获取创建连线时连线的宽度，默认值为twaver.Defaults.NETWORK_EDIT_LINE_WIDTH
/// </summary>
/// <returns type="Number">返回创建连线时连线的宽度</returns>
}

twaver.network.Network.prototype.getEditPointFillColor = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的填充色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR
/// </summary>
/// <returns type="String">返回编辑ShapeNode或ShapeLink时控制点的填充色</returns>
}

twaver.network.Network.prototype.getEditPointOutlineColor = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回编辑ShapeNode或ShapeLink时控制点的边框颜色</returns>
}

twaver.network.Network.prototype.getEditPointOutlineWidth = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回编辑ShapeNode或ShapeLink时控制点的边框宽度</returns>
}

twaver.network.Network.prototype.getEditPointSize = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的大小，默认值为twaver.Defaults.NETWORK_EDIT_POINT_SIZE
/// </summary>
/// <returns type="Number">返回编辑ShapeNode或ShapeLink时控制点的大小</returns>
}

twaver.network.Network.prototype.getElementAt = function (point, selectable) {
/// <summary>
/// 	获取指定坐标点或者当前鼠标下的网元
/// </summary>
/// <param name="point" type="Object">可以为坐标点或者鼠标事件</param>
/// <param name="selectable" type="Boolean">如果为true，则只返回可以被选择的网元，否则不可选中的网元也可以返回，可选，默认值为true</param>
/// <returns type="twaver.Element">返回坐标点或者当前鼠标下的网元</returns>
/// <example>
/// 	network.getView().addEventListener('mousedown', function (e) {
/// 	    var point = network.getLogicalPoint(e);
/// 	    console.log(network.getElementAt(e));
/// 	    console.log(network.getElementAt(point));
/// 	});
/// </example>
}

twaver.network.Network.prototype.getElementBox = function () {
/// <summary>
/// 	获取和Network绑定的ElementBox网元容器
/// </summary>
/// <returns type="twaver.ElementBox">返回和Network绑定的ElementBox网元容器</returns>
}

twaver.network.Network.prototype.getElementsAtRect = function (rect, intersectMode, filter, selectable) {
/// <summary>
/// 	获取矩形区域包含或相交网元
/// </summary>
/// <param name="rect" type="Object">矩形区域</param>
/// <param name="intersectMode" type="Boolean">如果为true则只要和矩形区域相交的网元都返回，否则只返回矩形区域包含的网元，可选，默认值为false</param>
/// <param name="filter" type="Function">过滤器, 可选, 默认值为null</param>
/// <param name="selectable" type="Boolean">网元是否可选择，默认为true</param>
/// <returns type="twaver.List">返回矩形区域包含或相交网元</returns>
/// <example>
/// 	var elements = network.getElementsAtRect({x:0, y:0, width:100, height:100});
/// </example>
}

twaver.network.Network.prototype.getElementUI = function (element) {
/// <summary>
/// 	获取和网元关联的视图对象
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.network.ElementUI">返回和网元关联的视图对象</returns>
}

twaver.network.Network.prototype.getElementUIFunction = function () {
/// <summary>
/// 	获取网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
/// 	twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
/// 	    var clazz = element.getElementUIClass();
/// 	    if (clazz) {
/// 	         return new clazz(network, element);
/// 	    }
/// 	    return null;
/// 	 }
/// </summary>
/// <returns type="Function">返回网元视图生成器</returns>
}

twaver.network.Network.prototype.getGroupChildrenRects = function (group) {
/// <summary>
/// 	返回包含分组孩子视图区域的集合
/// </summary>
/// <param name="group" type="twaver.Group">分组对象</param>
/// <returns type="twaver.List">返回包含孩子视图区域的集合</returns>
}

twaver.network.Network.prototype.getIconsColors = function (element) {
/// <summary>
/// 	获取指定网元的图标颜色数组，默认返回element#getStyle('icons.colors')
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Array">返回指定网元的图标颜色数组</returns>
}

twaver.network.Network.prototype.getIconsNames = function (element) {
/// <summary>
/// 	获取指定网元的图标名称数组，默认返回element#getStyle('icons.names')
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Array">返回指定网元的图标名称数组</returns>
}

twaver.network.Network.prototype.getInteractions = function () {
/// <summary>
/// 	获取交互处理器集合，交互处理器用于设置Network相应哪些键盘和鼠标事件。
/// </summary>
/// <returns type="Array">返回交互处理器集合</returns>
}

twaver.network.Network.prototype.getLayerByElement = function (element) {
/// <summary>
/// 	获取指定网元所在的层，默认为'default'层
/// </summary>
/// <param name="element" type="twaver.Element">用于返回层的网元</param>
/// <returns type="twaver.Layer">返回指定网元所在的层</returns>
}

twaver.network.Network.prototype.getLayerDivByElement = function (element) {
/// <summary>
/// 	获取指定网元所在的层的div元素
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="HTMLDivElement">返回指定网元所在的层的div元素</returns>
}

twaver.network.Network.prototype.getLayersDiv = function () {
/// <summary>
/// 	获取层div元素
/// 	Network的层次关系为：
/// 	view
/// 	->rootDiv
/// 	->->bottomDiv
/// 	->->layersDiv
/// 	->->->layer n
/// 	->->->layer ...
/// 	->->->default layer
/// 	->->attachmentDiv
/// 	->->topDiv
/// </summary>
/// <returns type="HTMLDivElement">返回层div元素</returns>
}

twaver.network.Network.prototype.getLazyMoveFillColor = function () {
/// <summary>
/// 	获取延迟移动网元时网元的填充色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR
/// </summary>
/// <returns type="String">返回延迟移动网元时网元的填充色</returns>
}

twaver.network.Network.prototype.getLazyMoveOutlineColor = function () {
/// <summary>
/// 	获取延迟移动网元时网元的边框颜色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回延迟移动网元时网元的边框颜色</returns>
}

twaver.network.Network.prototype.getLazyMoveOutlineWidth = function () {
/// <summary>
/// 	获取延迟移动网元时网元的边框宽度，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回延迟移动网元时网元的边框宽度</returns>
}

twaver.network.Network.prototype.getLinkableFunction = function () {
/// <summary>
/// 	获取节点是否可以连线的过滤器
/// </summary>
/// <returns type="Function">返回节点是否可以连线的过滤器</returns>
}

twaver.network.Network.prototype.getLinkFlowInterval = function () {
/// <summary>
/// 	获得LINK的流动间隔时间
/// </summary>
/// <returns type="String">返回Link的流动间隔时间</returns>
}

twaver.network.Network.prototype.getLinkFlowOffset = function (link) {
/// <summary>
/// 	获得Link流动时的偏移量
/// </summary>
/// <param name="link" type="String">Link实例</param>
/// <returns type="String">返回Link流动时的偏移量</returns>
}

twaver.network.Network.prototype.getLinkFlowStepping = function (link) {
/// <summary>
/// 	获得Link流动时的步进量
/// </summary>
/// <param name="link" type="String">Link实例</param>
/// <returns type="String">返回Link流动时的步进量</returns>
}

twaver.network.Network.prototype.getLinkHandlerLabel = function (link) {
/// <summary>
/// 	获取指定连线捆绑后的标签，默认如果指定的连线是捆绑代理，则返回"+(" + link.getBundleCount() + ")"，否则返回null
/// </summary>
/// <param name="link" type="twaver.Link">连线</param>
/// <returns type="String">返回指定连线捆绑后的标签</returns>
}

twaver.network.Network.prototype.getLinkPathFunction = function () {
/// <summary>
/// 	获取连线路径生成函数
/// </summary>
/// <returns type="Function">返回连线路径生成函数</returns>
}

twaver.network.Network.prototype.getMovableFunction = function () {
/// <summary>
/// 	获取网元可移动过滤器
/// </summary>
/// <returns type="Function">返回网元可移动过滤器</returns>
}

twaver.network.Network.prototype.getMovableSelectedElements = function () {
/// <summary>
/// 	获取可移动的被选中的网元集合
/// </summary>
/// <returns type="twaver.List">返回可移动的被选中的网元集合</returns>
}

twaver.network.Network.prototype.getMovableSelectedElementsRect = function () {
/// <summary>
/// 	获取可移动的网元的区域
/// </summary>
/// <returns type="Object">返回可移动的网元的区域</returns>
}

twaver.network.Network.prototype.getPosition = function (position, obj, tarSize, xoffset, yoffset) {
/// <summary>
/// 	获取相对于网元指定位置的坐标，此方法常用于定位和网元相关的附件的位置
/// </summary>
/// <param name="position" type="String">相对位置</param>
/// <param name="obj" type="Object">获取位置时的相对网元或网元视图，类型为twaver.Element或者twaver.network.ElementUI</param>
/// <param name="tarSize" type="Object">目标的大小，类型为包含width和height属性的Object对象</param>
/// <param name="xoffset" type="String">x坐标偏移量</param>
/// <param name="yoffset" type="String">y坐标偏移量</param>
/// <returns type="Object">返回包含x坐标和y坐标的Object对象</returns>
/// <example>
/// 	var node = new twaver.Node({name:'Node', location: {x:100, y:100}});
/// 	box.add(node);
/// 	var position = network.getPosition('top.top', node, {width:10, height:10}, 0, 0);
/// 	console.log(position.x, position.y);
/// 	// output: 110 90
/// 	
/// 	position可以为：
/// 	hotspot
/// 	from
/// 	to
/// 	topleft.topleft
/// 	topleft.topright
/// 	top.top
/// 	topright.topleft
/// 	topright.topright
/// 	topleft
/// 	top
/// 	topright
/// 	topleft.bottomleft
/// 	topleft.bottomright
/// 	top.bottom
/// 	topright.bottomleft
/// 	topright.bottomright
/// 	left.left
/// 	left
/// 	left.right
/// 	center
/// 	right.left
/// 	right
/// 	right.right
/// 	bottomleft.topleft
/// 	bottomleft.topright
/// 	bottom.top
/// 	bottomright.topleft
/// 	bottomright.topright
/// 	bottomleft
/// 	bottom
/// 	bottomright
/// 	bottomleft.bottomleft
/// 	bottomleft.bottomright
/// 	bottom.bottom
/// 	bottomright.bottomleft
/// 	bottomright.bottomright
/// </example>
}

twaver.network.Network.prototype.getRectSelectFilter = function () {
/// <summary>
/// 	获取框选网元过滤器
/// </summary>
/// <returns type="Function">返回框选网元过滤器</returns>
}

twaver.network.Network.prototype.getResizeLineColor = function () {
/// <summary>
/// 	获取延迟改变网元大小时网元边框的颜色，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_COLOR
/// </summary>
/// <returns type="String">返回延迟改变网元大小时网元边框的颜色</returns>
}

twaver.network.Network.prototype.getResizeLineWidth = function () {
/// <summary>
/// 	获取延迟改变网元大小时网元边框的宽度，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH
/// </summary>
/// <returns type="Number">返回延迟改变网元大小时网元边框的宽度</returns>
}

twaver.network.Network.prototype.getResizePointFillColor = function () {
/// <summary>
/// 	获取改变网元大小时控制点的填充色，默认为twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR
/// </summary>
/// <returns type="String">返回改变网元大小时控制点的填充色</returns>
}

twaver.network.Network.prototype.getResizePointOutlineColor = function () {
/// <summary>
/// 	获取改变网元大小时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回改变网元大小时控制点的边框颜色</returns>
}

twaver.network.Network.prototype.getResizePointOutlineWidth = function () {
/// <summary>
/// 	获取改变网元大小时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回改变网元大小时控制点的边框宽度</returns>
}

twaver.network.Network.prototype.getResizePointSize = function () {
/// <summary>
/// 	获取更改网元大小的控制点的大小
/// </summary>
/// <returns type="Number">返回更改网元大小的控制点的大小</returns>
}

twaver.network.Network.prototype.getRotatableFunction = function () {
/// <summary>
/// 	获取网元是否可旋转过滤器
/// </summary>
/// <returns type="Function">网元是否可旋转过滤器</returns>
}

twaver.network.Network.prototype.getRotatePointFillColor = function () {
/// <summary>
/// 	获取旋转控制点的填充色
/// </summary>
/// <returns type="String">返回旋转控制点的填充色</returns>
}

twaver.network.Network.prototype.getRotatePointOffset = function () {
/// <summary>
/// 	获取旋转控制点的偏移量
/// </summary>
/// <returns type="Number">返回旋转控制点的偏移量</returns>
}

twaver.network.Network.prototype.getRotatePointOutlineColor = function () {
/// <summary>
/// 	获取旋转控制点的边框颜色
/// </summary>
/// <returns type="String">返回旋转控制点的边框颜色</returns>
}

twaver.network.Network.prototype.getRotatePointOutlineWidth = function () {
/// <summary>
/// 	获取旋转控制点的边框宽度
/// </summary>
/// <returns type="Number">返回旋转控制点的边框宽度</returns>
}

twaver.network.Network.prototype.getRotatePointSize = function () {
/// <summary>
/// 	返回旋转控制点的大小
/// </summary>
/// <returns type="Number">旋转控制点的大小</returns>
}

twaver.network.Network.prototype.getRotateScaleFillColor = function () {
/// <summary>
/// 	获取旋转刻度填充色
/// </summary>
/// <returns type="String">返回旋转刻度填充色</returns>
}

twaver.network.Network.prototype.getRotateScaleFontColor = function () {
/// <summary>
/// 	获取旋转刻度文字字体颜色
/// </summary>
/// <returns type="String">旋转刻度文字字体颜色</returns>
}

twaver.network.Network.prototype.getRotateScaleHeight = function () {
/// <summary>
/// 	获取旋转刻度高度
/// </summary>
/// <returns type="Number">旋转刻度高度</returns>
}

twaver.network.Network.prototype.getRotateScaleWidth = function () {
/// <summary>
/// 	获取旋转刻度宽度
/// </summary>
/// <returns type="Number">返回旋转刻度宽度</returns>
}

twaver.network.Network.prototype.getSelectFillColor = function () {
/// <summary>
/// 	获取框选时矩形框的填充色，默认值为twaver.Defaults.NETWORK_SELECT_FILL_COLOR
/// </summary>
/// <returns type="String">返回框选时矩形框的填充色</returns>
}

twaver.network.Network.prototype.getSelectionTolerance = function () {
/// <summary>
/// 	获得选择时容差像素数
/// </summary>
/// <returns type="String">返回选择容差像素数</returns>
}

twaver.network.Network.prototype.getSelectMode = function () {
/// <summary>
/// 	获取选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <returns type="String">返回选择模式</returns>
}

twaver.network.Network.prototype.getSelectOutlineColor = function () {
/// <summary>
/// 	获取框选时矩形框的边框颜色，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回框选时矩形框的边框颜色</returns>
}

twaver.network.Network.prototype.getSelectOutlineWidth = function () {
/// <summary>
/// 	获取框选时矩形框的边框宽度，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH
/// </summary>
/// <returns type="String">返回框选时矩形框的边框宽度</returns>
}

twaver.network.Network.prototype.getShadowColor = function (element) {
/// <summary>
/// 	获得指定网元选中时的阴影颜色，如果网元的style属性shadow.color不为空，则返回style属性shadow.color的值，否则返回style属性select.color的值
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="String">返回指定网元选中时的阴影颜色</returns>
}

twaver.network.Network.prototype.getTopDiv = function () {
/// <summary>
/// 	获取顶层div元素
/// 	Network的层次关系为：
/// 	view
/// 	->rootDiv
/// 	->->bottomDiv
/// 	->->layersDiv
/// 	->->->layer n
/// 	->->->layer ...
/// 	->->->default layer
/// 	->->attachmentDiv
/// 	->->topDiv
/// </summary>
/// <returns type="HTMLDivElement">返回顶层div元素</returns>
}

twaver.network.Network.prototype.getViewRect = function () {
/// <summary>
/// 	获取Network可见网元所占的区域
/// </summary>
/// <returns type="Object">返回包含x、y、width和height属性的Object对象</returns>
}

twaver.network.Network.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取网元可见过滤器，Network通过可见过滤器判断每个网元是否可见
/// </summary>
/// <returns type="Function">返回网元可见过滤器</returns>
}

twaver.network.Network.prototype.handleElementBoxChange = function (e) {
/// <summary>
/// 	ElementBox里网元添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox里网元变化事件，包含kind和data属性</param>
}

twaver.network.Network.prototype.handleElementBoxPropertyChange = function (e) {
/// <summary>
/// 	ElementBox里网元的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox里网元属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.network.Network.prototype.handleElementPropertyChange = function (e) {
/// <summary>
/// 	ElementBox的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.network.Network.prototype.handleIndexChange = function (e) {
/// <summary>
/// 	ElementBox里网元的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">网元顺序变化事件，包含element、oldIndex和newIndex属性</param>
}

twaver.network.Network.prototype.handleLayerBoxChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer变化事件，包含kind和data属性</param>
}

twaver.network.Network.prototype.handleLayerHierarchyChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer层次变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer层次变化事件，包含kind和data属性</param>
}

twaver.network.Network.prototype.handleLayerPropertyChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer属性变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer属性变化事件，包含kind和data属性</param>
}

twaver.network.Network.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	SelectionModel选择变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">选择变化事件，包含kind和data属性</param>
}

twaver.network.Network.prototype.hasEditInteraction = function () {
/// <summary>
/// 	获取是否包含编辑交互处理器
/// </summary>
/// <returns type="Boolean">如果包含编辑交互处理器，则返回ture，否则返回false</returns>
}

twaver.network.Network.prototype.hasMovableSelectedElements = function () {
/// <summary>
/// 	判断是否包含选中的并且可移动的网元
/// </summary>
/// <returns type="Boolean">如果包含选中的并且可移动的网元，则返回true，否则返回false</returns>
}

twaver.network.Network.prototype.hitTest = function (point) {
/// <summary>
/// 	获取鼠标下或指定坐标下的网元视图对象或附件对象
/// </summary>
/// <param name="point" type="Object">鼠标事件或坐标点</param>
/// <returns type="Object">返回鼠标下或指定坐标下的网元视图对象或附件对象</returns>
}

twaver.network.Network.prototype.invalidateBundleLink = function (element) {
/// <summary>
/// 	使指定连线的捆绑连线无效
/// </summary>
/// <param name="element" type="twaver.Link">连线</param>
}

twaver.network.Network.prototype.invalidateElementIndex = function () {
/// <summary>
/// 	使网元顺序无效
/// </summary>
}

twaver.network.Network.prototype.invalidateElementUI = function (element, checkAttachments) {
/// <summary>
/// 	使指定网元的视图无效
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <param name="checkAttachments" type="Boolean">如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false</param>
}

twaver.network.Network.prototype.invalidateElementUIs = function (checkAttachments) {
/// <summary>
/// 	使所有网元的视图无效
/// </summary>
/// <param name="checkAttachments" type="Boolean">如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false</param>
}

twaver.network.Network.prototype.invalidateElementVisibility = function () {
/// <summary>
/// 	无效所有网元的可见性，当设置了visibleFunction，并且外部条件变动后，可以用此方法强制刷新所有网元是否可见
/// </summary>
}

twaver.network.Network.prototype.invalidateSelectedElementUIs = function (checkAttachments) {
/// <summary>
/// 	无效所有选中网元的视图
/// </summary>
/// <param name="checkAttachments" type="Boolean">如果为true，则无效网元的同时无效附件，否则不无效附件，可选，默认为false</param>
}

twaver.network.Network.prototype.isDoubleClickToEmptySubNetwork = function () {
/// <summary>
/// 	获取是否能双击进入空的子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否能双击进入空的子网</returns>
}

twaver.network.Network.prototype.isDoubleClickToGroupExpand = function () {
/// <summary>
/// 	获取是否双击展开组，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND
/// </summary>
/// <returns type="Boolean">返回是否双击展开组</returns>
}

twaver.network.Network.prototype.isDoubleClickToLinkBundle = function () {
/// <summary>
/// 	获取是否双击捆绑连线，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE
/// </summary>
/// <returns type="Boolean">返回是否双击捆绑连线</returns>
}

twaver.network.Network.prototype.isDoubleClickToSubNetwork = function () {
/// <summary>
/// 	获取是否双击子网时进入子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否双击子网时进入子网</returns>
}

twaver.network.Network.prototype.isDoubleClickToUpSubNetwork = function () {
/// <summary>
/// 	获取是否双击背景返回上一层子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否双击背景返回上一层子网</returns>
}

twaver.network.Network.prototype.isEditable = function (element) {
/// <summary>
/// 	判断指定网元是否可编辑，如果editableFunction返回false，则不可编辑；如果网元所在的层不可编辑，则不可编辑；否则可编辑
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元可编辑，则返回true，否则返回false</returns>
}

twaver.network.Network.prototype.isEditingElement = function () {
/// <summary>
/// 	获取是否正在编辑网元
/// </summary>
/// <returns type="Boolean">返回是否正在编辑网元</returns>
}

twaver.network.Network.prototype.isKeyboardRemoveEnabled = function () {
/// <summary>
/// 	获取是否允许用键盘Delete键删除选中网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否允许用键盘Delete键删除选中网元</returns>
}

twaver.network.Network.prototype.isKeyboardSelectEnabled = function () {
/// <summary>
/// 	获取是否允许用键盘Ctrl+A键选择所有网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否允许用键盘Ctrl+A键选择所有网元</returns>
}

twaver.network.Network.prototype.isLazyMoveAnimate = function () {
/// <summary>
/// 	获取延迟移动网元时是否有动画效果，默认值为twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE
/// </summary>
/// <returns type="Boolean">返回延迟移动网元时是否有动画效果</returns>
}

twaver.network.Network.prototype.isLazyMoveFill = function () {
/// <summary>
/// 	获取延迟移动网元时轮廓是否填充，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL
/// </summary>
/// <returns type="Boolean">返回延迟移动网元时轮廓是否填充</returns>
}

twaver.network.Network.prototype.isLimitElementInPositiveLocation = function () {
/// <summary>
/// 	获取是否限制网元坐标不能为负
/// </summary>
/// <returns type="Boolean">返回是否限制网元坐标不能为负</returns>
}

twaver.network.Network.prototype.isLinkable = function (node) {
/// <summary>
/// 	获取指定节点是否可以创建连线
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <returns type="Boolean">返回指定节点是否可以创建连线</returns>
}

twaver.network.Network.prototype.isLinkFlowEnabled = function () {
/// <summary>
/// 	返回是否启用流动Link，默认是false
/// </summary>
/// <returns type="String">是否启用流动Link</returns>
}

twaver.network.Network.prototype.isMakeVisibleOnSelected = function () {
/// <summary>
/// 	获取网元被选择时是否让其可见，默认值为twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <returns type="Boolean">返回网元被选择时是否让其可见</returns>
}

twaver.network.Network.prototype.isMovable = function (element) {
/// <summary>
/// 	判断指定网元是否可移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元可移动，则返回true，否则返回false</returns>
}

twaver.network.Network.prototype.isMovingElement = function () {
/// <summary>
/// 	获取是否正在移动网元
/// </summary>
/// <returns type="Boolean">返回是否正在移动网元</returns>
}

twaver.network.Network.prototype.isNoAgentLinkVisible = function () {
/// <summary>
/// 	获取不是代理的连线是否可见，默认值为twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE
/// </summary>
/// <returns type="Boolean">返回不是代理的连线是否可见</returns>
}

twaver.network.Network.prototype.isRectSelectEnabled = function () {
/// <summary>
/// 	获取是否允许框选网元
/// </summary>
/// <returns type="Boolean">如果允许框选网元, 返回true, 否则返回false</returns>
}

twaver.network.Network.prototype.isRemoveElementUIOnInvisible = function () {
/// <summary>
/// 	获取不可见的网元视图是否被删除，默认值为twaver.Defaults.NETWORK_REMOVE_ELEMENTUI_ON_INVISIBLE
/// </summary>
/// <returns type="Boolean">返回不可见的网元视图是否被删除</returns>
}

twaver.network.Network.prototype.isResizeAnimate = function () {
/// <summary>
/// 	获取改变网元大小时是否有动画效果，默认值为twaver.Defaults.NETWORK_RESIZE_ANIMATE
/// </summary>
/// <returns type="Boolean">返回改变网元大小时是否有动画效果</returns>
}

twaver.network.Network.prototype.isRotatable = function (element) {
/// <summary>
/// 	获取指定网元是否可旋转
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">返回指定网元是否可旋转</returns>
}

twaver.network.Network.prototype.isRotatingElement = function () {
/// <summary>
/// 	获取是否正在旋转网元
/// </summary>
/// <returns type="Boolean">返回是否正在旋转网元</returns>
}

twaver.network.Network.prototype.isSelectingElement = function () {
/// <summary>
/// 	获取是否正在选择网元
/// </summary>
/// <returns type="Boolean">返回是否正在选择网元</returns>
}

twaver.network.Network.prototype.isSendToTopOnSelected = function () {
/// <summary>
/// 	获取网元被选中后是否置顶，默认值为twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED
/// </summary>
/// <returns type="Boolean">返回网元被选中后是否置顶</returns>
}

twaver.network.Network.prototype.isShowRotateScale = function () {
/// <summary>
/// 	获取是否显示旋转网元时的刻度
/// </summary>
/// <returns type="Boolean">返回是否显示旋转网元时的刻度</returns>
}

twaver.network.Network.prototype.isSubNetworkAnimate = function () {
/// <summary>
/// 	获取进入下一层子网或返回上一层子网时是否有动画效果，默认值为twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE
/// </summary>
/// <returns type="Boolean">返回进入下一层子网或返回上一层子网时是否有动画效果</returns>
}

twaver.network.Network.prototype.isToolTipEnabled = function () {
/// <summary>
/// 	获取是否让提示信息生效，默认值为twaver.Defaults.NETWORK_TOOLTIP_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否让提示信息生效</returns>
}

twaver.network.Network.prototype.isVisible = function (element) {
/// <summary>
/// 	获取指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果指定网元可见，则返回true，否则返回false</returns>
}

twaver.network.Network.prototype.makeVisible = function (element) {
/// <summary>
/// 	滚动水平和垂直滚动条，让指定网元可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.network.Network.prototype.moveSelectedElements = function (xoffset, yoffset, animate, finishFunction) {
/// <summary>
/// 	将选中的网元移动指定偏移量，移动时可以设置是否有动画效果，而且能指定移动结束后执行的动作
/// </summary>
/// <param name="xoffset" type="Number">x坐标偏移量</param>
/// <param name="yoffset" type="Number">y坐标偏移量</param>
/// <param name="animate" type="Boolean">移动时是否有动画效果，可选，默认为false</param>
/// <param name="finishFunction" type="Function">回调函数，移动结束后执行的动作，可选，默认为null</param>
}

twaver.network.Network.prototype.onShareSelectionModelChanged = function () {
/// <summary>
/// 	shareSelectionModel属性变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
/// </summary>
}

twaver.network.Network.prototype.sendToTop = function (element) {
/// <summary>
/// 	将指定网元置顶，显示在所有网元的最上面，遮盖其他网元，但也受网元所在的层的制约，还有父子关系以及跟随关系的制约；如果sendToTopOnSelected为true，则点击网元时会调用此方法
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.network.Network.prototype.setCreateElementInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建网元模式，在Network上单击时，会创建指定类型的网元
/// </summary>
/// <param name="type" type="Function">网元类型，可选，默认值为twaver.Node</param>
}

twaver.network.Network.prototype.setCreateLinkInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建连线模式，在Network上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点
/// </summary>
/// <param name="type" type="Function">连线类型，可选，默认值为twaver.Link</param>
}

twaver.network.Network.prototype.setCreateShapeLinkInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建折线模式，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点
/// </summary>
/// <param name="type" type="Function">折线类型，可选，默认值为twaver.ShapeLink</param>
}

twaver.network.Network.prototype.setCreateShapeNodeInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建多边形模式，在Network上多次点击不同位置设置多边形的points属性，最后双击结束
/// </summary>
/// <param name="type" type="Function">多边形类型，可选，默认值为twaver.ShapeNode</param>
}

twaver.network.Network.prototype.setCurrentSubNetwork = function (currentSubNetwork, animate, finishFunction) {
/// <summary>
/// 	将当前子网设置为指定子网，并且可以设置是否有动画效果，而且能指定设置当前子网结束后执行的动作
/// </summary>
/// <param name="currentSubNetwork" type="twaver.SubNetwork">子网</param>
/// <param name="animate" type="Boolean">是否有动画效果</param>
/// <param name="finishFunction" type="Function">设置当前子网结束后的回调函数，可选，默认为null</param>
}

twaver.network.Network.prototype.setDefaultInteractions = function (lazyMode) {
/// <summary>
/// 	设置交互模式为默认交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选、默认为false</param>
}

twaver.network.Network.prototype.setDoubleClickToEmptySubNetwork = function (v) {
/// <summary>
/// 	设置是否能双击进入空的子网
/// </summary>
/// <param name="v" type="Boolean">是否能双击进入空的子网</param>
}

twaver.network.Network.prototype.setDoubleClickToGroupExpand = function (v) {
/// <summary>
/// 	设置是否双击展开组
/// </summary>
/// <param name="v" type="Boolean">是否能双击展开组</param>
}

twaver.network.Network.prototype.setDoubleClickToLinkBundle = function (v) {
/// <summary>
/// 	设置是否双击捆绑连线
/// </summary>
/// <param name="v" type="Boolean">是否双击捆绑连线</param>
}

twaver.network.Network.prototype.setDoubleClickToSubNetwork = function (v) {
/// <summary>
/// 	设置是否双击子网时进入子网
/// </summary>
/// <param name="v" type="Boolean">是否双击子网时进入子网</param>
}

twaver.network.Network.prototype.setDoubleClickToUpSubNetwork = function (v) {
/// <summary>
/// 	设置是否双击背景返回上一层子网
/// </summary>
/// <param name="v" type="Boolean">是否双击背景返回上一层子网</param>
}

twaver.network.Network.prototype.setEditableFunction = function (value) {
/// <summary>
/// 	设置网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
/// </summary>
/// <param name="value" type="Function">网元可编辑过滤器</param>
/// <example>
/// 	network.setEditInteractions();
/// 	network.setEditableFunction(function (element) {
/// 	    return element.getName() === 'From';
/// 	});
/// </example>
}

twaver.network.Network.prototype.setEditingElement = function (v) {
/// <summary>
/// 	设置是否正在编辑网元
/// </summary>
/// <param name="v" type="Boolean">是否正在编辑网元</param>
}

twaver.network.Network.prototype.setEditInteractions = function (lazyMode) {
/// <summary>
/// 	设置交互模式为编辑交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、编辑处理器EditInteraction（处理改变网元大小）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选、默认为false</param>
}

twaver.network.Network.prototype.setEditLineColor = function (v) {
/// <summary>
/// 	设置创建连线时连线的颜色
/// </summary>
/// <param name="v" type="String">创建连线时连线的颜色</param>
}

twaver.network.Network.prototype.setEditLineWidth = function (v) {
/// <summary>
/// 	设置创建连线时连线的宽度
/// </summary>
/// <param name="v" type="Number">创建连线时连线的宽度</param>
}

twaver.network.Network.prototype.setEditPointFillColor = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的填充色
/// </summary>
/// <param name="v" type="String">编辑ShapeNode或ShapeLink时控制点的填充色</param>
}

twaver.network.Network.prototype.setEditPointOutlineColor = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的边框颜色
/// </summary>
/// <param name="v" type="String">编辑ShapeNode或ShapeLink时控制点的边框颜色</param>
}

twaver.network.Network.prototype.setEditPointOutlineWidth = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">编辑ShapeNode或ShapeLink时控制点的边框宽度</param>
}

twaver.network.Network.prototype.setEditPointSize = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的大小
/// </summary>
/// <param name="v" type="Number">编辑ShapeNode或ShapeLink时控制点的大小</param>
}

twaver.network.Network.prototype.setElementBox = function (elementBox) {
/// <summary>
/// 	设置和Network绑定的ElementBox网元容器，Network构造时可以设置ElementBox（内部创建一个新的ElementBox），也可以构造完后再设置ElementBox
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">网元容器</param>
}

twaver.network.Network.prototype.setElementUIFunction = function (value) {
/// <summary>
/// 	设置网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
/// 	twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
/// 	    var clazz = element.getElementUIClass();
/// 	    if (clazz) {
/// 	         return new clazz(network, element);
/// 	    }
/// 	    return null;
/// 	 }
/// </summary>
/// <param name="value" type="Function">网元视图生成器</param>
}

twaver.network.Network.prototype.setHasEditInteraction = function (value) {
/// <summary>
/// 	设置是否包含编辑交互处理器
/// </summary>
/// <param name="value" type="Boolean">是否包含编辑交互处理器</param>
}

twaver.network.Network.prototype.setInteractions = function (interactions) {
/// <summary>
/// 	设置交互处理器，交互处理器用于设置Network相应哪些键盘和鼠标事件。
/// </summary>
/// <param name="interactions" type="twaver.List">包含交互处理器的集合</param>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.SelectInteraction(network),
/// 	    new twaver.network.interaction.EditInteraction(network),
/// 	    new twaver.network.interaction.MoveInteraction(network),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.network.Network.prototype.setKeyboardRemoveEnabled = function (v) {
/// <summary>
/// 	设置是否允许用键盘Delete键删除选中网元
/// </summary>
/// <param name="v" type="Boolean">是否允许用键盘Delete键删除选中网元</param>
}

twaver.network.Network.prototype.setKeyboardSelectEnabled = function (v) {
/// <summary>
/// 	设置是否允许用键盘Ctrl+A键选择所有网元
/// </summary>
/// <param name="v" type="Boolean">是否允许用键盘Ctrl+A键选择所有网元</param>
}

twaver.network.Network.prototype.setLazyMoveAnimate = function (v) {
/// <summary>
/// 	设置延迟移动网元时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">延迟移动网元时是否有动画效果</param>
}

twaver.network.Network.prototype.setLazyMoveFill = function (v) {
/// <summary>
/// 	设置延迟移动网元时轮廓是否填充
/// </summary>
/// <param name="v" type="Boolean">延迟移动网元时轮廓是否填充</param>
}

twaver.network.Network.prototype.setLazyMoveFillColor = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的填充色
/// </summary>
/// <param name="v" type="String">延迟移动网元时网元的填充色</param>
}

twaver.network.Network.prototype.setLazyMoveOutlineColor = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的填充色
/// </summary>
/// <param name="v" type="String">延迟移动网元时网元的填充色</param>
}

twaver.network.Network.prototype.setLazyMoveOutlineWidth = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的边框宽度
/// </summary>
/// <param name="v" type="Number">延迟移动网元时网元的边框宽度</param>
}

twaver.network.Network.prototype.setLimitElementInPositiveLocation = function (v) {
/// <summary>
/// 	设置是否限制网元坐标不能为负
/// </summary>
/// <param name="v" type="Boolean">是否限制网元坐标不能为负</param>
}

twaver.network.Network.prototype.setLinkableFunction = function (value) {
/// <summary>
/// 	设置节点是否可以连线的过滤器
/// </summary>
/// <param name="value" type="Function">节点是否可以连线的过滤器</param>
}

twaver.network.Network.prototype.setLinkFlowEnabled = function (value) {
/// <summary>
/// 	设置是否启用流动Link，默认是false
/// </summary>
/// <param name="value" type="String">是否启用流动Link</param>
}

twaver.network.Network.prototype.setLinkFlowInterval = function (value) {
/// <summary>
/// 	设置LINK的流动间隔时间
/// </summary>
/// <param name="value" type="String">Link的流动间隔时间(毫秒)</param>
}

twaver.network.Network.prototype.setLinkPathFunction = function (value) {
/// <summary>
/// 	设置连线路径生成函数function (linkUI, defaultPoints)
/// </summary>
/// <param name="value" type="Function">连线路径生成函数</param>
}

twaver.network.Network.prototype.setMagnifyInteractions = function () {
/// <summary>
/// 	设置交互模式为放大镜模式
/// </summary>
}

twaver.network.Network.prototype.setMakeVisibleOnSelected = function (v) {
/// <summary>
/// 	设置网元被选择时是否让其可见
/// </summary>
/// <param name="v" type="Boolean">网元被选择时是否让其可见</param>
}

twaver.network.Network.prototype.setMovableFunction = function (v) {
/// <summary>
/// 	设置网元可移动过滤器，用于判断网元是否可以移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
/// </summary>
/// <param name="v" type="Function">网元可移动过滤器</param>
/// <example>
/// 	network.setMovableFunction(function (element) {
/// 	    return element.getName() === 'From';
/// 	});
/// </example>
}

twaver.network.Network.prototype.setMovingElement = function (v) {
/// <summary>
/// 	设置是否正在移动网元
/// </summary>
/// <param name="v" type="Boolean">是否正在移动网元</param>
}

twaver.network.Network.prototype.setMSTouchInteractions = function () {
/// <summary>
/// 	设置交互模式为微软触摸交互模式
/// </summary>
}

twaver.network.Network.prototype.setNoAgentLinkVisible = function (v) {
/// <summary>
/// 	设置不是代理的连线是否可见
/// </summary>
/// <param name="v" type="Boolean">不是代理的连线是否可见</param>
}

twaver.network.Network.prototype.setPanInteractions = function () {
/// <summary>
/// 	设置交互模式为手抓图交互模式，包含手抓图交互处理器PanInteraction（处理垂直或水平滚动滚动条）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
}

twaver.network.Network.prototype.setRectSelectEnabled = function (v) {
/// <summary>
/// 	设置是否允许框选网元
/// </summary>
/// <param name="v" type="Boolean">是否允许框选网元</param>
}

twaver.network.Network.prototype.setRectSelectFilter = function (v) {
/// <summary>
/// 	设置框选网元过滤器
/// </summary>
/// <param name="v" type="Function">框选网元过滤器</param>
}

twaver.network.Network.prototype.setRemoveElementUIOnInvisible = function (value) {
/// <summary>
/// 	设置不可见的网元视图是否被删除
/// </summary>
/// <param name="value" type="Boolean">不可见的网元视图是否被删除</param>
}

twaver.network.Network.prototype.setResizeAnimate = function (v) {
/// <summary>
/// 	设置改变网元大小时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">改变网元大小时是否有动画效果</param>
}

twaver.network.Network.prototype.setResizeLineColor = function (v) {
/// <summary>
/// 	设置延迟改变网元大小时网元边框的颜色
/// </summary>
/// <param name="v" type="String">延迟改变网元大小时网元边框的颜色</param>
}

twaver.network.Network.prototype.setResizeLineWidth = function (v) {
/// <summary>
/// 	设置延迟改变网元大小时网元边框的宽度
/// </summary>
/// <param name="v" type="Number">延迟改变网元大小时网元边框的宽度</param>
}

twaver.network.Network.prototype.setResizePointFillColor = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的填充色
/// </summary>
/// <param name="v" type="String">改变网元大小时控制点的填充色</param>
}

twaver.network.Network.prototype.setResizePointOutlineColor = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的边框颜色
/// </summary>
/// <param name="v" type="String">改变网元大小时控制点的边框颜色</param>
}

twaver.network.Network.prototype.setResizePointOutlineWidth = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">改变网元大小时控制点的边框宽度</param>
}

twaver.network.Network.prototype.setResizePointSize = function (v) {
/// <summary>
/// 	设置更改网元大小的控制点的大小
/// </summary>
/// <param name="v" type="Number">更改网元大小的控制点的大小</param>
}

twaver.network.Network.prototype.setRotatableFunction = function (value) {
/// <summary>
/// 	设置网元是否可旋转过滤器
/// </summary>
/// <param name="value" type="Function">网元是否可旋转过滤器</param>
}

twaver.network.Network.prototype.setRotatePointFillColor = function (v) {
/// <summary>
/// 	设置旋转控制点的填充色
/// </summary>
/// <param name="v" type="String">旋转控制点的填充色</param>
}

twaver.network.Network.prototype.setRotatePointOffset = function (v) {
/// <summary>
/// 	设置旋转控制点的偏移量
/// </summary>
/// <param name="v" type="Number">旋转控制点的偏移量</param>
}

twaver.network.Network.prototype.setRotatePointOutlineColor = function (v) {
/// <summary>
/// 	设置旋转控制点的边框颜色
/// </summary>
/// <param name="v" type="String">旋转控制点的边框颜色</param>
}

twaver.network.Network.prototype.setRotatePointOutlineWidth = function (v) {
/// <summary>
/// 	设置旋转控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">旋转控制点的边框宽度</param>
}

twaver.network.Network.prototype.setRotatePointSize = function (v) {
/// <summary>
/// 	设置旋转控制点的大小
/// </summary>
/// <param name="v" type="Number">旋转控制点的大小</param>
}

twaver.network.Network.prototype.setRotateScaleFillColor = function (v) {
/// <summary>
/// 	设置旋转刻度填充色
/// </summary>
/// <param name="v" type="String">旋转刻度填充色</param>
}

twaver.network.Network.prototype.setRotateScaleFontColor = function (v) {
/// <summary>
/// 	设置旋转刻度文字字体颜色
/// </summary>
/// <param name="v" type="String">旋转刻度文字字体颜色</param>
}

twaver.network.Network.prototype.setRotateScaleHeight = function (v) {
/// <summary>
/// 	设置旋转刻度高度
/// </summary>
/// <param name="v" type="Number">旋转刻度高度</param>
}

twaver.network.Network.prototype.setRotateScaleWidth = function (v) {
/// <summary>
/// 	设置旋转刻度宽度
/// </summary>
/// <param name="v" type="Number">旋转刻度宽度</param>
}

twaver.network.Network.prototype.setRotatingElement = function (v) {
/// <summary>
/// 	设置正在旋转的节点
/// </summary>
/// <param name="v" type="twaver.Node">节点</param>
}

twaver.network.Network.prototype.setSelectFillColor = function (v) {
/// <summary>
/// 	设置框选时矩形框的填充色
/// </summary>
/// <param name="v" type="String">框选时矩形框的填充色</param>
}

twaver.network.Network.prototype.setSelectingElement = function (v) {
/// <summary>
/// 	设置是否正在框选网元
/// </summary>
/// <param name="v" type="Boolean">是否正在框选网元</param>
}

twaver.network.Network.prototype.setSelectionTolerance = function (v) {
/// <summary>
/// 	返回选择容差像素数
/// </summary>
/// <param name="v" type="String">选择容差像素数</param>
}

twaver.network.Network.prototype.setSelectMode = function (v) {
/// <summary>
/// 	设置选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <param name="v" type="String">选择模式</param>
}

twaver.network.Network.prototype.setSelectOutlineColor = function (v) {
/// <summary>
/// 	设置框选时矩形框的边框颜色
/// </summary>
/// <param name="v" type="String">框选时矩形框的边框颜色</param>
}

twaver.network.Network.prototype.setSelectOutlineWidth = function (v) {
/// <summary>
/// 	设置框选时矩形框的边框宽度
/// </summary>
/// <param name="v" type="String">框选时矩形框的边框宽度</param>
}

twaver.network.Network.prototype.setSendToTopOnSelected = function (v) {
/// <summary>
/// 	设置网元被选中后是否置顶
/// </summary>
/// <param name="v" type="Boolean">网元被选中后是否置顶</param>
}

twaver.network.Network.prototype.setShowRotateScale = function (v) {
/// <summary>
/// 	设置是否显示旋转网元时的刻度
/// </summary>
/// <param name="v" type="Boolean">是否显示旋转网元时的刻度</param>
}

twaver.network.Network.prototype.setSubNetworkAnimate = function (v) {
/// <summary>
/// 	设置进入下一层子网或返回上一层子网时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">进入下一层子网或返回上一层子网时是否有动画效果</param>
}

twaver.network.Network.prototype.setToolTipEnabled = function (value) {
/// <summary>
/// 	设置是否让提示信息生效
/// </summary>
/// <param name="value" type="Boolean">是否让提示信息生效</param>
}

twaver.network.Network.prototype.setTouchInteractions = function () {
/// <summary>
/// 	设置当前交互模式为触摸模式，只响应触摸事件，包含触摸交互处理器TouchInteraction（处理触摸事件）
/// </summary>
}

twaver.network.Network.prototype.setVisibleFunction = function (value) {
/// <summary>
/// 	设置网元可见过滤器，用于判断指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
/// </summary>
/// <param name="value" type="Function">网元可见过滤器</param>
/// <example>
/// 	network.setVisibleFunction(function (element) {
/// 	    return !(element instanceof twaver.Link);
/// 	});
/// </example>
}

twaver.network.Network.prototype.toCanvas = function (w, h, c) {
/// <summary>
/// 	从Network生成指定大小的Canvas元素，用于生成缩略图
/// </summary>
/// <param name="w" type="Number">要生成的Canvas元素的宽度</param>
/// <param name="h" type="Number">要生成的Canvas元素的高度</param>
/// <param name="c" type="HTMLCanvasElement">目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素</param>
/// <returns type="HTMLCanvasElement">返回Canvas元素</returns>
}

twaver.network.Network.prototype.toCanvasByRegion = function (rect, scale, c) {
/// <summary>
/// 	从Network的指定区域生成指定比例的Canvas元素，用于生成缩略图
/// </summary>
/// <param name="rect" type="Object">包含x、y、width和height属性的Object对象</param>
/// <param name="scale" type="Number">缩放比例</param>
/// <param name="c" type="HTMLCanvasElement">目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素</param>
/// <returns type="HTMLCanvasElement">返回Canvas元素</returns>
}

twaver.network.Network.prototype.updateLayers = function () {
/// <summary>
/// 	更新Network的层div视图，当和Network关联的ElementBox的LayerBox里Layer变化时，会调用此方法
/// </summary>
}

twaver.network.Network.prototype.upSubNetwork = function (animate, finishFunction) {
/// <summary>
/// 	返回上一层子网，可以设置是否使用动画效果，还可以指定返回结束后执行的动作
/// </summary>
/// <param name="animate" type="Boolean">是否使用动画效果，可选，默认为false</param>
/// <param name="finishFunction" type="Function">返回上一层子网结束后执行的回调函数，可选，默认为null</param>
}


twaver.ShapeLink = function (id, fromNode, toNode) {
/// <summary>
/// 	它是由一系列的点决定线路走向的一种连线。可以用于展示一些复杂线路的连线。通过添加、删除点可以更改连线的形状
/// </summary>
/// <param name="id" type="Object">折线ID，用于唯一标识折线对象。如果为空，TWaver会按照默认的规则给折线ID赋值。ID可以为string，number类型，可以为Node类型，也可以为Object类型。为string或number类型时指的是折线的ID，为Node类型时，fromNode和toNode相同，都为ID参数传入的Node对象，如果为Object类型，可以传入一个带折线属性的对象，比如： var shapeLink = new twaver.ShapeLink({     name:'shapelinkname',     fromNode: twNode,   toNode:bbNode });</param>
/// <param name="fromNode" type="twaver.Node">起始节点</param>
/// <param name="toNode" type="twaver.Node">结束节点</param>
/// <returns type="twaver.ShapeLink">折线对象本身</returns>
}

twaver.ShapeLink.prototype = new twaver.Link()

twaver.ShapeLink.prototype.addPoint = function (point, index) {
/// <summary>
/// 	在折线上添加一点，更改折线的走向
/// </summary>
/// <param name="point" type="Object">包含x，y属性的对象。例如：var point = {x:10,y:10}</param>
/// <param name="index" type="Number">添加点的次序，如果为空，则添加在最后一个位置。</param>
}

twaver.ShapeLink.prototype.firePointsChange = function () {
/// <summary>
/// 	派发点的更改事件，当折线上的点发生变化时，会调用此方法。此方法用于TWaver内部调用的
/// </summary>
}

twaver.ShapeLink.prototype.getPoints = function () {
/// <summary>
/// 	获取折线上所有点的集合
/// </summary>
/// <returns type="twaver.List">折线点的集合</returns>
}

twaver.ShapeLink.prototype.removeAt = function (index) {
/// <summary>
/// 	移除指定序号上的点，更改折线的走向
/// </summary>
/// <param name="index" type="Number">移除点的指定序号</param>
}

twaver.ShapeLink.prototype.removePoint = function (point) {
/// <summary>
/// 	移除指定点，用于更改折线的走向
/// </summary>
/// <param name="point" type="Object">移除的点。例如：var point = {x:10,y:10}</param>
}

twaver.ShapeLink.prototype.setPoint = function (index, point) {
/// <summary>
/// 	设置某个序号上的点，用于更改折线的走向
/// </summary>
/// <param name="index" type="Number">折线上点的序号</param>
/// <param name="point" type="Object">包含x，y属性的点对象。例如：var point = {x:10,y:10}</param>
}

twaver.ShapeLink.prototype.setPoints = function (value) {
/// <summary>
/// 	设置折线上点的集合
/// </summary>
/// <param name="value" type="twaver.List">折线上点的集合</param>
}


twaver.vector.Network = function (elementBox) {
/// <summary>
/// 	用指定的ElementBox构造Network，ElementBox是Network的数据容器，如果为null则twaver内部会创建一个新的ElementBox；而且在构造Network后，也可以用Network#setElementBox方法重新绑定一个新的ElementBox
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">可选，默认为null，和Network关联的数据容器</param>
/// <returns type="twaver.network.Network"></returns>
/// <example>
/// 	var box = new twaver.ElementBox();
/// 	var tree = new twaver.controls.Tree(box);
/// 	var network = new twaver.network.Network(box);
/// </example>
}

twaver.vector.Network.prototype = new twaver.controls.View()

twaver.vector.Network.prototype.addElementByInteraction = function (element) {
/// <summary>
/// 	添加网元，并派发createElement类型的事件。CreateElementInteraction、CreateLinkInteraction、CreateShapeLinkInteraction和CreateShapeNodeInteraction会调用此方法
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.vector.Network.prototype.addMarker = function (marker) {
/// <summary>
/// 	添加标记
/// </summary>
/// <param name="marker" type="Object">带paint方法的对象</param>
}

twaver.vector.Network.prototype.clearMarker = function () {
/// <summary>
/// 	清空标记
/// </summary>
}

twaver.vector.Network.prototype.convertPointFromView = function (p) {
/// <summary>
/// 	把屏幕坐标点转换为拓扑组件的逻辑坐标点
/// </summary>
/// <param name="p" type="Object">坐标点</param>
/// <returns type="Object">坐标点</returns>
}

twaver.vector.Network.prototype.createElementUI = function (data) {
/// <summary>
/// 	创建和指定Element关联的ElementUI，添加网元到和Network关联的ElementBox时会触发调用此方法，用户不需要调用此方法，但可以重载此方法
/// </summary>
/// <param name="data" type="twaver.Element">用于创建和网元关联的ElementUI</param>
/// <returns type="String"></returns>
}

twaver.vector.Network.prototype.getAlarmLabel = function (element) {
/// <summary>
/// 	获取指定网元的告警冒泡文字内容，默认返回网元的最高新发告警数和别名，如果还有低级别的新发告警则前面带一个+号（比如+3C代表有3个严重告警，并且还有其他低级别新发告警），如果没有新发告警，则返回null
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="String">返回指定网元的告警冒泡文字内容</returns>
}

twaver.vector.Network.prototype.getBackgroundImage = function () {
/// <summary>
/// 	获取背景图片
/// </summary>
/// <returns type="HTMLImageElement">返回背景图片</returns>
}

twaver.vector.Network.prototype.getCanvasSize = function () {
/// <summary>
/// 	获取拓扑图大小
/// </summary>
/// <returns type="Object">返回拓扑图大小</returns>
}

twaver.vector.Network.prototype.getCurrentSubNetwork = function () {
/// <summary>
/// 	获取当前子网，如果是最顶层子网则返回null
/// </summary>
/// <returns type="twaver.SubNetwork">返回当前子网，如果是最顶层子网则返回null</returns>
}

twaver.vector.Network.prototype.getEditableFunction = function () {
/// <summary>
/// 	获取网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
/// </summary>
/// <returns type="Function">返回网元可编辑过滤器</returns>
}

twaver.vector.Network.prototype.getEditLineColor = function () {
/// <summary>
/// 	获取创建连线时连线的颜色，默认值为twaver.Defaults.NETWORK_EDIT_LINE_COLOR
/// </summary>
/// <returns type="String">返回创建连线时连线的颜色</returns>
}

twaver.vector.Network.prototype.getEditLineWidth = function () {
/// <summary>
/// 	获取创建连线时连线的宽度，默认值为twaver.Defaults.NETWORK_EDIT_LINE_WIDTH
/// </summary>
/// <returns type="Number">返回创建连线时连线的宽度</returns>
}

twaver.vector.Network.prototype.getEditPointFillColor = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的填充色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR
/// </summary>
/// <returns type="String">返回编辑ShapeNode或ShapeLink时控制点的填充色</returns>
}

twaver.vector.Network.prototype.getEditPointOutlineColor = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回编辑ShapeNode或ShapeLink时控制点的边框颜色</returns>
}

twaver.vector.Network.prototype.getEditPointOutlineWidth = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回编辑ShapeNode或ShapeLink时控制点的边框宽度</returns>
}

twaver.vector.Network.prototype.getEditPointSize = function () {
/// <summary>
/// 	获取编辑ShapeNode或ShapeLink时控制点的大小，默认值为twaver.Defaults.NETWORK_EDIT_POINT_SIZE
/// </summary>
/// <returns type="Number">返回编辑ShapeNode或ShapeLink时控制点的大小</returns>
}

twaver.vector.Network.prototype.getElementAt = function (point, selectable) {
/// <summary>
/// 	获取指定坐标点或者当前鼠标下的网元
/// </summary>
/// <param name="point" type="Object">可以为坐标点或者鼠标事件</param>
/// <param name="selectable" type="Boolean">如果为true，则只返回可以被选择的网元，否则不可选中的网元也可以返回，可选，默认值为true</param>
/// <returns type="twaver.Element">返回坐标点或者当前鼠标下的网元</returns>
/// <example>
/// 	network.getView().addEventListener('mousedown', function (e) {
/// 	    var point = network.getLogicalPoint(e);
/// 	    console.log(network.getElementAt(e));
/// 	    console.log(network.getElementAt(point));
/// 	});
/// </example>
}

twaver.vector.Network.prototype.getElementBox = function () {
/// <summary>
/// 	获取和Network绑定的ElementBox网元容器
/// </summary>
/// <returns type="twaver.ElementBox">返回和Network绑定的ElementBox网元容器</returns>
}

twaver.vector.Network.prototype.getElementsAtRect = function (rect, intersectMode, filter, selectable) {
/// <summary>
/// 	获取矩形区域包含或相交网元
/// </summary>
/// <param name="rect" type="Object">矩形区域</param>
/// <param name="intersectMode" type="Boolean">如果为true则只要和矩形区域相交的网元都返回，否则只返回矩形区域包含的网元，可选，默认值为false</param>
/// <param name="filter" type="Function">过滤器, 可选, 默认值为null</param>
/// <param name="selectable" type="Boolean">网元是否可选择，默认为true</param>
/// <returns type="twaver.List">返回矩形区域包含或相交网元</returns>
/// <example>
/// 	var elements = network.getElementsAtRect({x:0, y:0, width:100, height:100});
/// </example>
}

twaver.vector.Network.prototype.getElementUI = function (element) {
/// <summary>
/// 	获取和网元关联的视图对象
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="twaver.network.ElementUI">返回和网元关联的视图对象</returns>
}

twaver.vector.Network.prototype.getElementUIFunction = function () {
/// <summary>
/// 	获取网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
/// 	twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
/// 	    var clazz = element.getElementUIClass();
/// 	    if (clazz) {
/// 	         return new clazz(network, element);
/// 	    }
/// 	    return null;
/// 	 }
/// </summary>
/// <returns type="Function">返回网元视图生成器</returns>
}

twaver.vector.Network.prototype.getGraphicsZoom = function () {
/// <summary>
/// 	获取拓扑组件当前的Graphics缩放值
/// </summary>
/// <returns type="Number">数值</returns>
}

twaver.vector.Network.prototype.getGroupChildrenRects = function (group) {
/// <summary>
/// 	返回包含分组孩子视图区域的集合
/// </summary>
/// <param name="group" type="twaver.Group">分组对象</param>
/// <returns type="twaver.List">返回包含孩子视图区域的集合</returns>
}

twaver.vector.Network.prototype.getIconsColors = function (element) {
/// <summary>
/// 	获取指定网元的图标颜色数组，默认返回element#getStyle('icons.colors')
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Array">返回指定网元的图标颜色数组</returns>
}

twaver.vector.Network.prototype.getIconsNames = function (element) {
/// <summary>
/// 	获取指定网元的图标名称数组，默认返回element#getStyle('icons.names')
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Array">返回指定网元的图标名称数组</returns>
}

twaver.vector.Network.prototype.getInteractions = function () {
/// <summary>
/// 	获取交互处理器集合，交互处理器用于设置Network相应哪些键盘和鼠标事件。
/// </summary>
/// <returns type="Array">返回交互处理器集合</returns>
}

twaver.vector.Network.prototype.getLabel2 = function (element) {
/// <param name="element" type="String"></param>
/// <returns type="String"></returns>
}

twaver.vector.Network.prototype.getLayerByElement = function (element) {
/// <summary>
/// 	获取指定网元所在的层，默认为'default'层
/// </summary>
/// <param name="element" type="twaver.Element">用于返回层的网元</param>
/// <returns type="twaver.Layer">返回指定网元所在的层</returns>
}

twaver.vector.Network.prototype.getLazyMoveFillColor = function () {
/// <summary>
/// 	获取延迟移动网元时网元的填充色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR
/// </summary>
/// <returns type="String">返回延迟移动网元时网元的填充色</returns>
}

twaver.vector.Network.prototype.getLazyMoveOutlineColor = function () {
/// <summary>
/// 	获取延迟移动网元时网元的边框颜色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回延迟移动网元时网元的边框颜色</returns>
}

twaver.vector.Network.prototype.getLazyMoveOutlineWidth = function () {
/// <summary>
/// 	获取延迟移动网元时网元的边框宽度，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回延迟移动网元时网元的边框宽度</returns>
}

twaver.vector.Network.prototype.getLinkableFunction = function () {
/// <summary>
/// 	获取节点是否可以连线的过滤器
/// </summary>
/// <returns type="Function">返回节点是否可以连线的过滤器</returns>
}

twaver.vector.Network.prototype.getLinkFlowInterval = function () {
/// <summary>
/// 	获得LINK的流动间隔时间
/// </summary>
/// <returns type="String">返回Link的流动间隔时间</returns>
}

twaver.vector.Network.prototype.getLinkFlowOffset = function (link) {
/// <summary>
/// 	获得Link流动时的偏移量
/// </summary>
/// <param name="link" type="String">Link实例</param>
/// <returns type="String">返回Link流动时的偏移量</returns>
}

twaver.vector.Network.prototype.getLinkFlowStepping = function (link) {
/// <summary>
/// 	获得Link流动时的步进量
/// </summary>
/// <param name="link" type="String">Link实例</param>
/// <returns type="String">返回Link流动时的步进量</returns>
}

twaver.vector.Network.prototype.getLinkHandlerLabel = function (link) {
/// <summary>
/// 	获取指定连线捆绑后的标签，默认如果指定的连线是捆绑代理，则返回"+(" + link.getBundleCount() + ")"，否则返回null
/// </summary>
/// <param name="link" type="twaver.Link">连线</param>
/// <returns type="String">返回指定连线捆绑后的标签</returns>
}

twaver.vector.Network.prototype.getLinkPathFunction = function () {
/// <summary>
/// 	获取连线路径生成函数
/// </summary>
/// <returns type="Function">返回连线路径生成函数</returns>
}

twaver.vector.Network.prototype.getLocationZoom = function () {
/// <summary>
/// 	获取拓扑组件当前的位置缩放值
/// </summary>
/// <returns type="Number">数值</returns>
}

twaver.vector.Network.prototype.getMovableFunction = function () {
/// <summary>
/// 	获取网元可移动过滤器
/// </summary>
/// <returns type="Function">返回网元可移动过滤器</returns>
}

twaver.vector.Network.prototype.getMovableSelectedElements = function () {
/// <summary>
/// 	获取可移动的被选中的网元集合
/// </summary>
/// <returns type="twaver.List">返回可移动的被选中的网元集合</returns>
}

twaver.vector.Network.prototype.getMovableSelectedElementsRect = function () {
/// <summary>
/// 	获取可移动的网元的区域
/// </summary>
/// <returns type="Object">返回可移动的网元的区域</returns>
}

twaver.vector.Network.prototype.getOffset = function (newPoint, lastPoint) {
/// <summary>
/// 	获取两个坐标点得偏移量，考虑了缩放的影响
/// </summary>
/// <param name="newPoint" type="Object">坐标点</param>
/// <param name="lastPoint" type="Object">坐标点</param>
/// <returns type="Object">坐标点</returns>
}

twaver.vector.Network.prototype.getPosition = function (position, obj, tarSize, xoffset, yoffset) {
/// <summary>
/// 	获取相对于网元指定位置的坐标，此方法常用于定位和网元相关的附件的位置
/// </summary>
/// <param name="position" type="String">相对位置</param>
/// <param name="obj" type="Object">获取位置时的相对网元或网元视图，类型为twaver.Element或者twaver.network.ElementUI</param>
/// <param name="tarSize" type="Object">目标的大小，类型为包含width和height属性的Object对象</param>
/// <param name="xoffset" type="String">x坐标偏移量</param>
/// <param name="yoffset" type="String">y坐标偏移量</param>
/// <returns type="Object">返回包含x坐标和y坐标的Object对象</returns>
/// <example>
/// 	var node = new twaver.Node({name:'Node', location: {x:100, y:100}});
/// 	box.add(node);
/// 	var position = network.getPosition('top.top', node, {width:10, height:10}, 0, 0);
/// 	console.log(position.x, position.y);
/// 	// output: 110 90
/// 	
/// 	position可以为：
/// 	hotspot
/// 	from
/// 	to
/// 	topleft.topleft
/// 	topleft.topright
/// 	top.top
/// 	topright.topleft
/// 	topright.topright
/// 	topleft
/// 	top
/// 	topright
/// 	topleft.bottomleft
/// 	topleft.bottomright
/// 	top.bottom
/// 	topright.bottomleft
/// 	topright.bottomright
/// 	left.left
/// 	left
/// 	left.right
/// 	center
/// 	right.left
/// 	right
/// 	right.right
/// 	bottomleft.topleft
/// 	bottomleft.topright
/// 	bottom.top
/// 	bottomright.topleft
/// 	bottomright.topright
/// 	bottomleft
/// 	bottom
/// 	bottomright
/// 	bottomleft.bottomleft
/// 	bottomleft.bottomright
/// 	bottom.bottom
/// 	bottomright.bottomleft
/// 	bottomright.bottomright
/// </example>
}

twaver.vector.Network.prototype.getRectSelectFilter = function () {
/// <summary>
/// 	获取框选网元过滤器
/// </summary>
/// <returns type="Function">返回框选网元过滤器</returns>
}

twaver.vector.Network.prototype.getResizeLineColor = function () {
/// <summary>
/// 	获取延迟改变网元大小时网元边框的颜色，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_COLOR
/// </summary>
/// <returns type="String">返回延迟改变网元大小时网元边框的颜色</returns>
}

twaver.vector.Network.prototype.getResizeLineWidth = function () {
/// <summary>
/// 	获取延迟改变网元大小时网元边框的宽度，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH
/// </summary>
/// <returns type="Number">返回延迟改变网元大小时网元边框的宽度</returns>
}

twaver.vector.Network.prototype.getResizePointFillColor = function () {
/// <summary>
/// 	获取改变网元大小时控制点的填充色，默认为twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR
/// </summary>
/// <returns type="String">返回改变网元大小时控制点的填充色</returns>
}

twaver.vector.Network.prototype.getResizePointOutlineColor = function () {
/// <summary>
/// 	获取改变网元大小时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回改变网元大小时控制点的边框颜色</returns>
}

twaver.vector.Network.prototype.getResizePointOutlineWidth = function () {
/// <summary>
/// 	获取改变网元大小时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH
/// </summary>
/// <returns type="Number">返回改变网元大小时控制点的边框宽度</returns>
}

twaver.vector.Network.prototype.getResizePointSize = function () {
/// <summary>
/// 	获取更改网元大小的控制点的大小
/// </summary>
/// <returns type="Number">返回更改网元大小的控制点的大小</returns>
}

twaver.vector.Network.prototype.getRootCanvas = function () {
/// <summary>
/// 	获取主画布，网元视图绘制在主画布上
/// </summary>
/// <returns type="HTMLCanvasElement">返回主画布</returns>
}

twaver.vector.Network.prototype.getRotatableFunction = function () {
/// <summary>
/// 	获取网元是否可旋转过滤器
/// </summary>
/// <returns type="Function">网元是否可旋转过滤器</returns>
}

twaver.vector.Network.prototype.getRotatePointFillColor = function () {
/// <summary>
/// 	获取旋转控制点的填充色
/// </summary>
/// <returns type="String">返回旋转控制点的填充色</returns>
}

twaver.vector.Network.prototype.getRotatePointOffset = function () {
/// <summary>
/// 	获取旋转控制点的偏移量
/// </summary>
/// <returns type="Number">返回旋转控制点的偏移量</returns>
}

twaver.vector.Network.prototype.getRotatePointOutlineColor = function () {
/// <summary>
/// 	获取旋转控制点的边框颜色
/// </summary>
/// <returns type="String">返回旋转控制点的边框颜色</returns>
}

twaver.vector.Network.prototype.getRotatePointOutlineWidth = function () {
/// <summary>
/// 	获取旋转控制点的边框宽度
/// </summary>
/// <returns type="Number">返回旋转控制点的边框宽度</returns>
}

twaver.vector.Network.prototype.getRotatePointSize = function () {
/// <summary>
/// 	返回旋转控制点的大小
/// </summary>
/// <returns type="Number">旋转控制点的大小</returns>
}

twaver.vector.Network.prototype.getRotateScaleFillColor = function () {
/// <summary>
/// 	获取旋转刻度填充色
/// </summary>
/// <returns type="String">返回旋转刻度填充色</returns>
}

twaver.vector.Network.prototype.getRotateScaleFontColor = function () {
/// <summary>
/// 	获取旋转刻度文字字体颜色
/// </summary>
/// <returns type="String">旋转刻度文字字体颜色</returns>
}

twaver.vector.Network.prototype.getRotateScaleHeight = function () {
/// <summary>
/// 	获取旋转刻度高度
/// </summary>
/// <returns type="Number">旋转刻度高度</returns>
}

twaver.vector.Network.prototype.getRotateScaleWidth = function () {
/// <summary>
/// 	获取旋转刻度宽度
/// </summary>
/// <returns type="Number">返回旋转刻度宽度</returns>
}

twaver.vector.Network.prototype.getScrollBarWidth = function () {
/// <summary>
/// 	获取滚动条宽度
/// </summary>
/// <returns type="Number">返回滚动条宽度，默认为10</returns>
}

twaver.vector.Network.prototype.getSelectFillColor = function () {
/// <summary>
/// 	获取框选时矩形框的填充色，默认值为twaver.Defaults.NETWORK_SELECT_FILL_COLOR
/// </summary>
/// <returns type="String">返回框选时矩形框的填充色</returns>
}

twaver.vector.Network.prototype.getSelectMode = function () {
/// <summary>
/// 	获取选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <returns type="String">返回选择模式</returns>
}

twaver.vector.Network.prototype.getSelectOutlineColor = function () {
/// <summary>
/// 	获取框选时矩形框的边框颜色，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR
/// </summary>
/// <returns type="String">返回框选时矩形框的边框颜色</returns>
}

twaver.vector.Network.prototype.getSelectOutlineWidth = function () {
/// <summary>
/// 	获取框选时矩形框的边框宽度，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH
/// </summary>
/// <returns type="String">返回框选时矩形框的边框宽度</returns>
}

twaver.vector.Network.prototype.getShadowColor = function (element) {
/// <summary>
/// 	获得指定网元选中时的阴影颜色，如果网元的style属性shadow.color不为空，则返回style属性shadow.color的值，否则返回style属性select.color的值
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="String">返回指定网元选中时的阴影颜色</returns>
}

twaver.vector.Network.prototype.getShapeNodeZoomPoints = function (shapeNode, reverseZoom) {
/// <summary>
/// 	返回缩放后多边形节点的所有顶点，逻辑缩放下，这些顶点会和本身的顶点不一样，物理缩放下，这些顶点和本身的顶点一样。
/// </summary>
/// <param name="shapeNode" type="twaver.ShapeNode">多边形节点</param>
/// <param name="reverseZoom" type="Boolean">是否反转缩放值，如果是计算过程中缩放值用1/缩放值代替</param>
/// <returns type="Object">返回缩放后多边形节点的所有顶点</returns>
}

twaver.vector.Network.prototype.getSizeZoom = function () {
/// <returns type="String"></returns>
}

twaver.vector.Network.prototype.getTopCanvas = function () {
/// <summary>
/// 	获取上层画布，默认告警等附件画在上层画布上
/// </summary>
/// <returns type="HTMLCanvasElement">返回上层画布</returns>
}

twaver.vector.Network.prototype.getViewRect = function () {
/// <summary>
/// 	获取Network可见网元所占的区域
/// </summary>
/// <returns type="Object">返回包含x、y、width和height属性的Object对象</returns>
}

twaver.vector.Network.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取网元可见过滤器，Network通过可见过滤器判断每个网元是否可见
/// </summary>
/// <returns type="Function">返回网元可见过滤器</returns>
}

twaver.vector.Network.prototype.getZoomBodyRect = function (data) {
/// <param name="data" type="String"></param>
/// <returns type="String"></returns>
}

twaver.vector.Network.prototype.getZoomManager = function () {
/// <summary>
/// 	获取缩放管理器
/// </summary>
/// <returns type="twaver.vector.BaseZoomManager">返回缩放管理器</returns>
}

twaver.vector.Network.prototype.getZoomVisibilityThresholds = function () {
/// <summary>
/// 	返回一个对象，这个对象标示在特定缩放值下，那些元素不可见。比如：
/// 	{
/// 	
/// 		link : 0.5,
/// 		label : 0.8,
/// 		alarmBallon : 0.5,
/// 	} 标示在缩放值小于0.5的时候，link不可见,告警冒泡不可见，缩放值小于0.8时，标签不可见。
/// </summary>
/// <returns type="Object">返回一个对象，这个对象标示在特定缩放值下，那些元素不可见</returns>
/// <example>
/// 						network.setZoomVisibilityThresholds({
/// 							zoomName : 'zoom',
/// 							link : 0.5,
/// 							label : 0.8,
/// 							alarmBallon : 0.5,
/// 						});
/// </example>
}

twaver.vector.Network.prototype.handleElementBoxChange = function (e) {
/// <summary>
/// 	ElementBox里网元添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox里网元变化事件，包含kind和data属性</param>
}

twaver.vector.Network.prototype.handleElementBoxPropertyChange = function (e) {
/// <summary>
/// 	ElementBox里网元的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox里网元属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.vector.Network.prototype.handleElementPropertyChange = function (e) {
/// <summary>
/// 	ElementBox的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">ElementBox属性变化事件，包含property、oldValue和newValue属性</param>
}

twaver.vector.Network.prototype.handleIndexChange = function (e) {
/// <summary>
/// 	ElementBox里网元的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">网元顺序变化事件，包含element、oldIndex和newIndex属性</param>
}

twaver.vector.Network.prototype.handleLayerBoxChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer变化事件，包含kind和data属性</param>
}

twaver.vector.Network.prototype.handleLayerHierarchyChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer层次变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer层次变化事件，包含kind和data属性</param>
}

twaver.vector.Network.prototype.handleLayerPropertyChange = function (e) {
/// <summary>
/// 	ElementBox的LayerBox里Layer属性变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">LayerBox里Layer属性变化事件，包含kind和data属性</param>
}

twaver.vector.Network.prototype.handleSelectionChange = function (e) {
/// <summary>
/// 	SelectionModel选择变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
/// </summary>
/// <param name="e" type="Object">选择变化事件，包含kind和data属性</param>
}

twaver.vector.Network.prototype.hasEditInteraction = function () {
/// <summary>
/// 	获取是否包含编辑交互处理器
/// </summary>
/// <returns type="Boolean">如果包含编辑交互处理器，则返回ture，否则返回false</returns>
}

twaver.vector.Network.prototype.hasMovableSelectedElements = function () {
/// <summary>
/// 	判断是否包含选中的并且可移动的网元
/// </summary>
/// <returns type="Boolean">如果包含选中的并且可移动的网元，则返回true，否则返回false</returns>
}

twaver.vector.Network.prototype.hitTest = function (point) {
/// <summary>
/// 	获取鼠标下或指定坐标下的网元视图对象或附件对象
/// </summary>
/// <param name="point" type="Object">鼠标事件或坐标点</param>
/// <returns type="Object">返回鼠标下或指定坐标下的网元视图对象或附件对象</returns>
}

twaver.vector.Network.prototype.invalidateBundleLink = function (element) {
/// <summary>
/// 	使指定连线的捆绑连线无效
/// </summary>
/// <param name="element" type="twaver.Link">连线</param>
}

twaver.vector.Network.prototype.invalidateCanvasSize = function (delay) {
/// <summary>
/// 	无效画布大小
/// </summary>
/// <param name="delay" type="Number">延迟时间，默认为300ms</param>
}

twaver.vector.Network.prototype.invalidateElementUI = function (element, checkAttachments) {
/// <summary>
/// 	使指定网元的视图无效
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <param name="checkAttachments" type="Boolean">如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false</param>
}

twaver.vector.Network.prototype.invalidateElementUIs = function (checkAttachments) {
/// <summary>
/// 	使所有网元的视图无效
/// </summary>
/// <param name="checkAttachments" type="Boolean">如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false</param>
}

twaver.vector.Network.prototype.invalidateElementVisibility = function () {
/// <summary>
/// 	无效所有网元的可见性，当设置了visibleFunction，并且外部条件变动后，可以用此方法强制刷新所有网元是否可见
/// </summary>
}

twaver.vector.Network.prototype.invalidateSelectedElementUIs = function (checkAttachments) {
/// <summary>
/// 	无效所有选中网元的视图
/// </summary>
/// <param name="checkAttachments" type="Boolean">如果为true，则无效网元的同时无效附件，否则不无效附件，可选，默认为false</param>
}

twaver.vector.Network.prototype.isAutoValidateCanvasSize = function () {
/// <summary>
/// 	获取是否自动计算画布大小
/// </summary>
/// <returns type="Boolean">返回是否自动计算画布大小</returns>
}

twaver.vector.Network.prototype.isDoubleClickToEmptySubNetwork = function () {
/// <summary>
/// 	获取是否能双击进入空的子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否能双击进入空的子网</returns>
}

twaver.vector.Network.prototype.isDoubleClickToGroupExpand = function () {
/// <summary>
/// 	获取是否双击展开组，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND
/// </summary>
/// <returns type="Boolean">返回是否双击展开组</returns>
}

twaver.vector.Network.prototype.isDoubleClickToLinkBundle = function () {
/// <summary>
/// 	获取是否双击捆绑连线，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE
/// </summary>
/// <returns type="Boolean">返回是否双击捆绑连线</returns>
}

twaver.vector.Network.prototype.isDoubleClickToSubNetwork = function () {
/// <summary>
/// 	获取是否双击子网时进入子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否双击子网时进入子网</returns>
}

twaver.vector.Network.prototype.isDoubleClickToUpSubNetwork = function () {
/// <summary>
/// 	获取是否双击背景返回上一层子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK
/// </summary>
/// <returns type="Boolean">返回是否双击背景返回上一层子网</returns>
}

twaver.vector.Network.prototype.isEditable = function (element) {
/// <summary>
/// 	判断指定网元是否可编辑，如果editableFunction返回false，则不可编辑；如果网元所在的层不可编辑，则不可编辑；否则可编辑
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元可编辑，则返回true，否则返回false</returns>
}

twaver.vector.Network.prototype.isEditingElement = function () {
/// <summary>
/// 	获取是否正在编辑网元
/// </summary>
/// <returns type="Boolean">返回是否正在编辑网元</returns>
}

twaver.vector.Network.prototype.isHScrollBarVisible = function () {
/// <summary>
/// 	获取水平滚动条是否可见
/// </summary>
/// <returns type="Boolean">返回水平滚动条是否可见</returns>
}

twaver.vector.Network.prototype.isKeyboardRemoveEnabled = function () {
/// <summary>
/// 	获取是否允许用键盘Delete键删除选中网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否允许用键盘Delete键删除选中网元</returns>
}

twaver.vector.Network.prototype.isKeyboardSelectEnabled = function () {
/// <summary>
/// 	获取是否允许用键盘Ctrl+A键选择所有网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否允许用键盘Ctrl+A键选择所有网元</returns>
}

twaver.vector.Network.prototype.isLazyMoveAnimate = function () {
/// <summary>
/// 	获取延迟移动网元时是否有动画效果，默认值为twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE
/// </summary>
/// <returns type="Boolean">返回延迟移动网元时是否有动画效果</returns>
}

twaver.vector.Network.prototype.isLazyMoveFill = function () {
/// <summary>
/// 	获取延迟移动网元时轮廓是否填充，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL
/// </summary>
/// <returns type="Boolean">返回延迟移动网元时轮廓是否填充</returns>
}

twaver.vector.Network.prototype.isLimitElementInPositiveLocation = function () {
/// <summary>
/// 	获取是否限制网元坐标不能为负
/// </summary>
/// <returns type="Boolean">返回是否限制网元坐标不能为负</returns>
}

twaver.vector.Network.prototype.isLimitViewInCanvas = function () {
/// <summary>
/// 	获取是否限制左上角，如果限制左上角，不能看到左上角以外的区域
/// </summary>
/// <returns type="Boolean">返回是否限制左上角，默认为true</returns>
}

twaver.vector.Network.prototype.isLinkable = function (node) {
/// <summary>
/// 	获取指定节点是否可以创建连线
/// </summary>
/// <param name="node" type="twaver.Node">节点</param>
/// <returns type="Boolean">返回指定节点是否可以创建连线</returns>
}

twaver.vector.Network.prototype.isLinkFlowEnabled = function () {
/// <summary>
/// 	返回是否启用流动Link，默认是false
/// </summary>
/// <returns type="String">是否启用流动Link</returns>
}

twaver.vector.Network.prototype.isMakeVisibleOnSelected = function () {
/// <summary>
/// 	获取网元被选择时是否让其可见，默认值为twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <returns type="Boolean">返回网元被选择时是否让其可见</returns>
}

twaver.vector.Network.prototype.isMovable = function (element) {
/// <summary>
/// 	判断指定网元是否可移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">如果网元可移动，则返回true，否则返回false</returns>
}

twaver.vector.Network.prototype.isMovingElement = function () {
/// <summary>
/// 	获取是否正在移动网元
/// </summary>
/// <returns type="Boolean">返回是否正在移动网元</returns>
}

twaver.vector.Network.prototype.isNoAgentLinkVisible = function () {
/// <summary>
/// 	获取不是代理的连线是否可见，默认值为twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE
/// </summary>
/// <returns type="Boolean">返回不是代理的连线是否可见</returns>
}

twaver.vector.Network.prototype.isRectSelectEnabled = function () {
/// <summary>
/// 	获取是否允许框选网元
/// </summary>
/// <returns type="Boolean">如果允许框选网元, 返回true, 否则返回false</returns>
}

twaver.vector.Network.prototype.isResizeAnimate = function () {
/// <summary>
/// 	获取改变网元大小时是否有动画效果，默认值为twaver.Defaults.NETWORK_RESIZE_ANIMATE
/// </summary>
/// <returns type="Boolean">返回改变网元大小时是否有动画效果</returns>
}

twaver.vector.Network.prototype.isRotatable = function (element) {
/// <summary>
/// 	获取指定网元是否可旋转
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <returns type="Boolean">返回指定网元是否可旋转</returns>
}

twaver.vector.Network.prototype.isRotatingElement = function () {
/// <summary>
/// 	获取是否正在旋转网元
/// </summary>
/// <returns type="Boolean">返回是否正在旋转网元</returns>
}

twaver.vector.Network.prototype.isScrollBarVisible = function () {
/// <summary>
/// 	获取滚动条是否可见
/// </summary>
/// <returns type="Boolean">返回滚动条是否可见</returns>
}

twaver.vector.Network.prototype.isSelectingElement = function () {
/// <summary>
/// 	获取是否正在选择网元
/// </summary>
/// <returns type="Boolean">返回是否正在选择网元</returns>
}

twaver.vector.Network.prototype.isSendToTopOnSelected = function () {
/// <summary>
/// 	获取网元被选中后是否置顶，默认值为twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED
/// </summary>
/// <returns type="Boolean">返回网元被选中后是否置顶</returns>
}

twaver.vector.Network.prototype.isShowRotateScale = function () {
/// <summary>
/// 	获取是否显示旋转网元时的刻度
/// </summary>
/// <returns type="Boolean">返回是否显示旋转网元时的刻度</returns>
}

twaver.vector.Network.prototype.isSubNetworkAnimate = function () {
/// <summary>
/// 	获取进入下一层子网或返回上一层子网时是否有动画效果，默认值为twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE
/// </summary>
/// <returns type="Boolean">返回进入下一层子网或返回上一层子网时是否有动画效果</returns>
}

twaver.vector.Network.prototype.isToolTipEnabled = function () {
/// <summary>
/// 	获取是否让提示信息生效，默认值为twaver.Defaults.NETWORK_TOOLTIP_ENABLED
/// </summary>
/// <returns type="Boolean">返回是否让提示信息生效</returns>
}

twaver.vector.Network.prototype.isTransparentSelectionEnable = function () {
/// <summary>
/// 	点击网元的透明部分网元是否能被选中，默认为false
/// </summary>
/// <returns type="Boolean">点击网元的透明部分网元是否能被选中，默认为false</returns>
}

twaver.vector.Network.prototype.isVisible = function (element, visibleFunction, defaultLayer) {
/// <summary>
/// 	获取指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
/// <param name="visibleFunction" type="String"></param>
/// <param name="defaultLayer" type="String"></param>
/// <returns type="Boolean">如果指定网元可见，则返回true，否则返回false</returns>
}

twaver.vector.Network.prototype.isVScrollBarVisible = function () {
/// <summary>
/// 	获取垂直滚动条是否可见
/// </summary>
/// <returns type="Boolean">返回垂直滚动条是否可见，默认为true</returns>
}

twaver.vector.Network.prototype.isWheelToZoom = function () {
/// <summary>
/// 	滚动滚轮是否缩放界面，默认值为true
/// </summary>
/// <returns type="Boolean">滚动滚轮是否缩放界面，默认值为true</returns>
}

twaver.vector.Network.prototype.isZoomDivVisible = function () {
/// <summary>
/// 	返回是否显示缩放提示，默认为true
/// </summary>
/// <returns type="Boolean">返回是否显示缩放提示，默认为true</returns>
}

twaver.vector.Network.prototype.makeVisible = function (element) {
/// <summary>
/// 	滚动水平和垂直滚动条，让指定网元可见
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.vector.Network.prototype.moveSelectedElements = function (xoffset, yoffset, animate, finishFunction) {
/// <summary>
/// 	将选中的网元移动指定偏移量，移动时可以设置是否有动画效果，而且能指定移动结束后执行的动作
/// </summary>
/// <param name="xoffset" type="Number">x坐标偏移量</param>
/// <param name="yoffset" type="Number">y坐标偏移量</param>
/// <param name="animate" type="Boolean">移动时是否有动画效果，可选，默认为false</param>
/// <param name="finishFunction" type="Function">回调函数，移动结束后执行的动作，可选，默认为null</param>
}

twaver.vector.Network.prototype.onShareSelectionModelChanged = function () {
/// <summary>
/// 	shareSelectionModel属性变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
/// </summary>
}

twaver.vector.Network.prototype.paintBottom = function (ctx) {
/// <summary>
/// 	绘制最底层元素
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.vector.Network.prototype.paintMarker = function (ctx) {
/// <summary>
/// 	回去标记
/// </summary>
/// <param name="ctx" type="CanvasRenderingContext2D">画布上下文</param>
}

twaver.vector.Network.prototype.paintRoot = function () {
/// <summary>
/// 	绘制所有网元视图
/// </summary>
}

twaver.vector.Network.prototype.paintTopCanvas = function () {
/// <summary>
/// 	绘制上层画布
/// </summary>
}

twaver.vector.Network.prototype.panToCenter = function () {
/// <summary>
/// 	居中显示拓扑图
/// </summary>
}

twaver.vector.Network.prototype.removeMarker = function (marker) {
/// <summary>
/// 	删除标记
/// </summary>
/// <param name="marker" type="Object">带paint方法的对象</param>
}

twaver.vector.Network.prototype.repaintTopCanvas = function () {
/// <summary>
/// 	重绘上层画布
/// </summary>
}

twaver.vector.Network.prototype.sendToTop = function (element) {
/// <summary>
/// 	将指定网元置顶，显示在所有网元的最上面，遮盖其他网元，但也受网元所在的层的制约，还有父子关系以及跟随关系的制约；如果sendToTopOnSelected为true，则点击网元时会调用此方法
/// </summary>
/// <param name="element" type="twaver.Element">网元</param>
}

twaver.vector.Network.prototype.setAutoValidateCanvasSize = function (v) {
/// <summary>
/// 	设置是否自动计算画布大小
/// </summary>
/// <param name="v" type="Boolean">是否自动计算画布大小</param>
}

twaver.vector.Network.prototype.setBackgroundImage = function (backgroundImage) {
/// <summary>
/// 	设置背景图片
/// </summary>
/// <param name="backgroundImage" type="HTMLImageElement">背景图片</param>
}

twaver.vector.Network.prototype.setCreateElementInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建网元模式，在Network上单击时，会创建指定类型的网元
/// </summary>
/// <param name="type" type="Function">网元类型，可选，默认值为twaver.Node</param>
}

twaver.vector.Network.prototype.setCreateLinkInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建连线模式，在Network上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点
/// </summary>
/// <param name="type" type="Function">连线类型，可选，默认值为twaver.Link</param>
}

twaver.vector.Network.prototype.setCreateShapeLinkInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建折线模式，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点
/// </summary>
/// <param name="type" type="Function">折线类型，可选，默认值为twaver.ShapeLink</param>
}

twaver.vector.Network.prototype.setCreateShapeNodeInteractions = function (type) {
/// <summary>
/// 	设置当前交互模式为创建多边形模式，在Network上多次点击不同位置设置多边形的points属性，最后双击结束
/// </summary>
/// <param name="type" type="Function">多边形类型，可选，默认值为twaver.ShapeNode</param>
}

twaver.vector.Network.prototype.setCurrentSubNetwork = function (currentSubNetwork, animate, finishFunction) {
/// <summary>
/// 	将当前子网设置为指定子网，并且可以设置是否有动画效果，而且能指定设置当前子网结束后执行的动作
/// </summary>
/// <param name="currentSubNetwork" type="twaver.SubNetwork">子网</param>
/// <param name="animate" type="Boolean">是否有动画效果</param>
/// <param name="finishFunction" type="Function">设置当前子网结束后的回调函数，可选，默认为null</param>
}

twaver.vector.Network.prototype.setDefaultInteractions = function (lazyMode) {
/// <summary>
/// 	设置交互模式为默认交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选、默认为false</param>
}

twaver.vector.Network.prototype.setDoubleClickToEmptySubNetwork = function (v) {
/// <summary>
/// 	设置是否能双击进入空的子网
/// </summary>
/// <param name="v" type="Boolean">是否能双击进入空的子网</param>
}

twaver.vector.Network.prototype.setDoubleClickToGroupExpand = function (v) {
/// <summary>
/// 	设置是否双击展开组
/// </summary>
/// <param name="v" type="Boolean">是否能双击展开组</param>
}

twaver.vector.Network.prototype.setDoubleClickToLinkBundle = function (v) {
/// <summary>
/// 	设置是否双击捆绑连线
/// </summary>
/// <param name="v" type="Boolean">是否双击捆绑连线</param>
}

twaver.vector.Network.prototype.setDoubleClickToSubNetwork = function (v) {
/// <summary>
/// 	设置是否双击子网时进入子网
/// </summary>
/// <param name="v" type="Boolean">是否双击子网时进入子网</param>
}

twaver.vector.Network.prototype.setDoubleClickToUpSubNetwork = function (v) {
/// <summary>
/// 	设置是否双击背景返回上一层子网
/// </summary>
/// <param name="v" type="Boolean">是否双击背景返回上一层子网</param>
}

twaver.vector.Network.prototype.setEditableFunction = function (value) {
/// <summary>
/// 	设置网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
/// </summary>
/// <param name="value" type="Function">网元可编辑过滤器</param>
/// <example>
/// 	network.setEditInteractions();
/// 	network.setEditableFunction(function (element) {
/// 	    return element.getName() === 'From';
/// 	});
/// </example>
}

twaver.vector.Network.prototype.setEditingElement = function (v) {
/// <summary>
/// 	设置是否正在编辑网元
/// </summary>
/// <param name="v" type="Boolean">是否正在编辑网元</param>
}

twaver.vector.Network.prototype.setEditInteractions = function (lazyMode) {
/// <summary>
/// 	设置交互模式为编辑交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、编辑处理器EditInteraction（处理改变网元大小）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
/// </summary>
/// <param name="lazyMode" type="Boolean">是否使用延迟模式，可选、默认为false</param>
}

twaver.vector.Network.prototype.setEditLineColor = function (v) {
/// <summary>
/// 	设置创建连线时连线的颜色
/// </summary>
/// <param name="v" type="String">创建连线时连线的颜色</param>
}

twaver.vector.Network.prototype.setEditLineWidth = function (v) {
/// <summary>
/// 	设置创建连线时连线的宽度
/// </summary>
/// <param name="v" type="Number">创建连线时连线的宽度</param>
}

twaver.vector.Network.prototype.setEditPointFillColor = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的填充色
/// </summary>
/// <param name="v" type="String">编辑ShapeNode或ShapeLink时控制点的填充色</param>
}

twaver.vector.Network.prototype.setEditPointOutlineColor = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的边框颜色
/// </summary>
/// <param name="v" type="String">编辑ShapeNode或ShapeLink时控制点的边框颜色</param>
}

twaver.vector.Network.prototype.setEditPointOutlineWidth = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">编辑ShapeNode或ShapeLink时控制点的边框宽度</param>
}

twaver.vector.Network.prototype.setEditPointSize = function (v) {
/// <summary>
/// 	设置编辑ShapeNode或ShapeLink时控制点的大小
/// </summary>
/// <param name="v" type="Number">编辑ShapeNode或ShapeLink时控制点的大小</param>
}

twaver.vector.Network.prototype.setElementBox = function (elementBox) {
/// <summary>
/// 	设置和Network绑定的ElementBox网元容器，Network构造时可以设置ElementBox（内部创建一个新的ElementBox），也可以构造完后再设置ElementBox
/// </summary>
/// <param name="elementBox" type="twaver.ElementBox">网元容器</param>
}

twaver.vector.Network.prototype.setElementUIFunction = function (value) {
/// <summary>
/// 	设置网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
/// 	twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
/// 	    var clazz = element.getElementUIClass();
/// 	    if (clazz) {
/// 	         return new clazz(network, element);
/// 	    }
/// 	    return null;
/// 	 }
/// </summary>
/// <param name="value" type="Function">网元视图生成器</param>
}

twaver.vector.Network.prototype.setHasEditInteraction = function (value) {
/// <summary>
/// 	设置是否包含编辑交互处理器
/// </summary>
/// <param name="value" type="Boolean">是否包含编辑交互处理器</param>
}

twaver.vector.Network.prototype.setHScrollBarVisible = function (v) {
/// <summary>
/// 	设置水平滚动条是否可见
/// </summary>
/// <param name="v" type="Boolean">水平滚动条是否可见</param>
}

twaver.vector.Network.prototype.setInteractions = function (interactions) {
/// <summary>
/// 	设置交互处理器，交互处理器用于设置Network相应哪些键盘和鼠标事件。
/// </summary>
/// <param name="interactions" type="twaver.List">包含交互处理器的集合</param>
/// <example>
/// 	network.setInteractions([
/// 	    new twaver.network.interaction.SelectInteraction(network),
/// 	    new twaver.network.interaction.EditInteraction(network),
/// 	    new twaver.network.interaction.MoveInteraction(network),
/// 	    new twaver.network.interaction.DefaultInteraction(network)
/// 	]);
/// </example>
}

twaver.vector.Network.prototype.setKeyboardRemoveEnabled = function (v) {
/// <summary>
/// 	设置是否允许用键盘Delete键删除选中网元
/// </summary>
/// <param name="v" type="Boolean">是否允许用键盘Delete键删除选中网元</param>
}

twaver.vector.Network.prototype.setKeyboardSelectEnabled = function (v) {
/// <summary>
/// 	设置是否允许用键盘Ctrl+A键选择所有网元
/// </summary>
/// <param name="v" type="Boolean">是否允许用键盘Ctrl+A键选择所有网元</param>
}

twaver.vector.Network.prototype.setLazyMoveAnimate = function (v) {
/// <summary>
/// 	设置延迟移动网元时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">延迟移动网元时是否有动画效果</param>
}

twaver.vector.Network.prototype.setLazyMoveFill = function (v) {
/// <summary>
/// 	设置延迟移动网元时轮廓是否填充
/// </summary>
/// <param name="v" type="Boolean">延迟移动网元时轮廓是否填充</param>
}

twaver.vector.Network.prototype.setLazyMoveFillColor = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的填充色
/// </summary>
/// <param name="v" type="String">延迟移动网元时网元的填充色</param>
}

twaver.vector.Network.prototype.setLazyMoveOutlineColor = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的填充色
/// </summary>
/// <param name="v" type="String">延迟移动网元时网元的填充色</param>
}

twaver.vector.Network.prototype.setLazyMoveOutlineWidth = function (v) {
/// <summary>
/// 	设置延迟移动网元时网元的边框宽度
/// </summary>
/// <param name="v" type="Number">延迟移动网元时网元的边框宽度</param>
}

twaver.vector.Network.prototype.setLimitElementInPositiveLocation = function (v) {
/// <summary>
/// 	设置是否限制网元坐标不能为负
/// </summary>
/// <param name="v" type="Boolean">是否限制网元坐标不能为负</param>
}

twaver.vector.Network.prototype.setLimitViewInCanvas = function (v) {
/// <summary>
/// 	设置是否限制左上角
/// </summary>
/// <param name="v" type="Boolean">是否限制左上角</param>
}

twaver.vector.Network.prototype.setLinkableFunction = function (value) {
/// <summary>
/// 	设置节点是否可以连线的过滤器
/// </summary>
/// <param name="value" type="Function">节点是否可以连线的过滤器</param>
}

twaver.vector.Network.prototype.setLinkFlowEnabled = function (value) {
/// <summary>
/// 	设置是否启用流动Link，默认是false
/// </summary>
/// <param name="value" type="String">是否启用流动Link</param>
}

twaver.vector.Network.prototype.setLinkFlowInterval = function (value) {
/// <summary>
/// 	设置LINK的流动间隔时间
/// </summary>
/// <param name="value" type="String">Link的流动间隔时间(毫秒)</param>
}

twaver.vector.Network.prototype.setLinkPathFunction = function (value) {
/// <summary>
/// 	设置连线路径生成函数function (linkUI, defaultPoints)
/// </summary>
/// <param name="value" type="Function">连线路径生成函数</param>
}

twaver.vector.Network.prototype.setMakeVisibleOnSelected = function (v) {
/// <summary>
/// 	设置网元被选择时是否让其可见
/// </summary>
/// <param name="v" type="Boolean">网元被选择时是否让其可见</param>
}

twaver.vector.Network.prototype.setMovableFunction = function (v) {
/// <summary>
/// 	设置网元可移动过滤器，用于判断网元是否可以移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
/// </summary>
/// <param name="v" type="Function">网元可移动过滤器</param>
/// <example>
/// 	network.setMovableFunction(function (element) {
/// 	    return element.getName() === 'From';
/// 	});
/// </example>
}

twaver.vector.Network.prototype.setMovingElement = function (v) {
/// <summary>
/// 	设置是否正在移动网元
/// </summary>
/// <param name="v" type="Boolean">是否正在移动网元</param>
}

twaver.vector.Network.prototype.setMSTouchInteractions = function () {
/// <summary>
/// 	设置交互模式为微软触摸交互模式
/// </summary>
}

twaver.vector.Network.prototype.setNoAgentLinkVisible = function (v) {
/// <summary>
/// 	设置不是代理的连线是否可见
/// </summary>
/// <param name="v" type="Boolean">不是代理的连线是否可见</param>
}

twaver.vector.Network.prototype.setRectSelectEnabled = function (v) {
/// <summary>
/// 	设置是否允许框选网元
/// </summary>
/// <param name="v" type="Boolean">是否允许框选网元</param>
}

twaver.vector.Network.prototype.setRectSelectFilter = function (v) {
/// <summary>
/// 	设置框选网元过滤器
/// </summary>
/// <param name="v" type="Function">框选网元过滤器</param>
}

twaver.vector.Network.prototype.setResizeAnimate = function (v) {
/// <summary>
/// 	设置改变网元大小时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">改变网元大小时是否有动画效果</param>
}

twaver.vector.Network.prototype.setResizeLineColor = function (v) {
/// <summary>
/// 	设置延迟改变网元大小时网元边框的颜色
/// </summary>
/// <param name="v" type="String">延迟改变网元大小时网元边框的颜色</param>
}

twaver.vector.Network.prototype.setResizeLineWidth = function (v) {
/// <summary>
/// 	设置延迟改变网元大小时网元边框的宽度
/// </summary>
/// <param name="v" type="Number">延迟改变网元大小时网元边框的宽度</param>
}

twaver.vector.Network.prototype.setResizePointFillColor = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的填充色
/// </summary>
/// <param name="v" type="String">改变网元大小时控制点的填充色</param>
}

twaver.vector.Network.prototype.setResizePointOutlineColor = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的边框颜色
/// </summary>
/// <param name="v" type="String">改变网元大小时控制点的边框颜色</param>
}

twaver.vector.Network.prototype.setResizePointOutlineWidth = function (v) {
/// <summary>
/// 	设置改变网元大小时控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">改变网元大小时控制点的边框宽度</param>
}

twaver.vector.Network.prototype.setResizePointSize = function (v) {
/// <summary>
/// 	设置更改网元大小的控制点的大小
/// </summary>
/// <param name="v" type="Number">更改网元大小的控制点的大小</param>
}

twaver.vector.Network.prototype.setRotatableFunction = function (value) {
/// <summary>
/// 	设置网元是否可旋转过滤器
/// </summary>
/// <param name="value" type="Function">网元是否可旋转过滤器</param>
}

twaver.vector.Network.prototype.setRotatePointFillColor = function (v) {
/// <summary>
/// 	设置旋转控制点的填充色
/// </summary>
/// <param name="v" type="String">旋转控制点的填充色</param>
}

twaver.vector.Network.prototype.setRotatePointOffset = function (v) {
/// <summary>
/// 	设置旋转控制点的偏移量
/// </summary>
/// <param name="v" type="Number">旋转控制点的偏移量</param>
}

twaver.vector.Network.prototype.setRotatePointOutlineColor = function (v) {
/// <summary>
/// 	设置旋转控制点的边框颜色
/// </summary>
/// <param name="v" type="String">旋转控制点的边框颜色</param>
}

twaver.vector.Network.prototype.setRotatePointOutlineWidth = function (v) {
/// <summary>
/// 	设置旋转控制点的边框宽度
/// </summary>
/// <param name="v" type="Number">旋转控制点的边框宽度</param>
}

twaver.vector.Network.prototype.setRotatePointSize = function (v) {
/// <summary>
/// 	设置旋转控制点的大小
/// </summary>
/// <param name="v" type="Number">旋转控制点的大小</param>
}

twaver.vector.Network.prototype.setRotateScaleFillColor = function (v) {
/// <summary>
/// 	设置旋转刻度填充色
/// </summary>
/// <param name="v" type="String">旋转刻度填充色</param>
}

twaver.vector.Network.prototype.setRotateScaleFontColor = function (v) {
/// <summary>
/// 	设置旋转刻度文字字体颜色
/// </summary>
/// <param name="v" type="String">旋转刻度文字字体颜色</param>
}

twaver.vector.Network.prototype.setRotateScaleHeight = function (v) {
/// <summary>
/// 	设置旋转刻度高度
/// </summary>
/// <param name="v" type="Number">旋转刻度高度</param>
}

twaver.vector.Network.prototype.setRotateScaleWidth = function (v) {
/// <summary>
/// 	设置旋转刻度宽度
/// </summary>
/// <param name="v" type="Number">旋转刻度宽度</param>
}

twaver.vector.Network.prototype.setRotatingElement = function (v) {
/// <summary>
/// 	设置正在旋转的节点
/// </summary>
/// <param name="v" type="twaver.Node">节点</param>
}

twaver.vector.Network.prototype.setScrollBarVisible = function (v) {
/// <summary>
/// 	设置滚动条是否可见
/// </summary>
/// <param name="v" type="Number">滚动条是否可见</param>
}

twaver.vector.Network.prototype.setScrollBarWidth = function (v) {
/// <summary>
/// 	设置滚动条宽度
/// </summary>
/// <param name="v" type="Number">滚动条宽度</param>
}

twaver.vector.Network.prototype.setSelectFillColor = function (v) {
/// <summary>
/// 	设置框选时矩形框的填充色
/// </summary>
/// <param name="v" type="String">框选时矩形框的填充色</param>
}

twaver.vector.Network.prototype.setSelectingElement = function (v) {
/// <summary>
/// 	设置是否正在框选网元
/// </summary>
/// <param name="v" type="Boolean">是否正在框选网元</param>
}

twaver.vector.Network.prototype.setSelectMode = function (v) {
/// <summary>
/// 	设置选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
/// 	可选值为：
/// 	mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
/// 	intersect 相交模式（只要和选择区域相交的网元都会被选中）
/// 	contain 包含模式（只有完全被选择区域包含的网元会被选中）
/// </summary>
/// <param name="v" type="String">选择模式</param>
}

twaver.vector.Network.prototype.setSelectOutlineColor = function (v) {
/// <summary>
/// 	设置框选时矩形框的边框颜色
/// </summary>
/// <param name="v" type="String">框选时矩形框的边框颜色</param>
}

twaver.vector.Network.prototype.setSelectOutlineWidth = function (v) {
/// <summary>
/// 	设置框选时矩形框的边框宽度
/// </summary>
/// <param name="v" type="String">框选时矩形框的边框宽度</param>
}

twaver.vector.Network.prototype.setSendToTopOnSelected = function (v) {
/// <summary>
/// 	设置网元被选中后是否置顶
/// </summary>
/// <param name="v" type="Boolean">网元被选中后是否置顶</param>
}

twaver.vector.Network.prototype.setShowRotateScale = function (v) {
/// <summary>
/// 	设置是否显示旋转网元时的刻度
/// </summary>
/// <param name="v" type="Boolean">是否显示旋转网元时的刻度</param>
}

twaver.vector.Network.prototype.setSubNetworkAnimate = function (v) {
/// <summary>
/// 	设置进入下一层子网或返回上一层子网时是否有动画效果
/// </summary>
/// <param name="v" type="Boolean">进入下一层子网或返回上一层子网时是否有动画效果</param>
}

twaver.vector.Network.prototype.setToolTipEnabled = function (value) {
/// <summary>
/// 	设置是否让提示信息生效
/// </summary>
/// <param name="value" type="Boolean">是否让提示信息生效</param>
}

twaver.vector.Network.prototype.setTouchInteractions = function () {
/// <summary>
/// 	设置当前交互模式为触摸模式，只响应触摸事件，包含触摸交互处理器TouchInteraction（处理触摸事件）
/// </summary>
}

twaver.vector.Network.prototype.setTransparentSelectionEnable = function (v) {
/// <summary>
/// 	设置点击网元的透明部分网元是否能被选中
/// </summary>
/// <param name="v" type="Boolean">设置点击网元的透明部分网元是否能被选中</param>
}

twaver.vector.Network.prototype.setViewOffSet = function (xoff, yoff) {
/// <summary>
/// 	设置视图偏移量
/// </summary>
/// <param name="xoff" type="Number">x坐标</param>
/// <param name="yoff" type="Number">y坐标</param>
}

twaver.vector.Network.prototype.setViewRect = function (x, y, w, h) {
/// <summary>
/// 	设置视图区域
/// </summary>
/// <param name="x" type="Number">x坐标</param>
/// <param name="y" type="Number">y坐标</param>
/// <param name="w" type="Number">宽度</param>
/// <param name="h" type="Number">高度</param>
}

twaver.vector.Network.prototype.setVisibleFunction = function (value) {
/// <summary>
/// 	设置网元可见过滤器，用于判断指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
/// </summary>
/// <param name="value" type="Function">网元可见过滤器</param>
/// <example>
/// 	network.setVisibleFunction(function (element) {
/// 	    return !(element instanceof twaver.Link);
/// 	});
/// </example>
}

twaver.vector.Network.prototype.setVScrollBarVisible = function (v) {
/// <summary>
/// 	设置垂直滚动条是否可见
/// </summary>
/// <param name="v" type="Boolean">垂直滚动条是否可见</param>
}

twaver.vector.Network.prototype.setWheelToZoom = function (v) {
/// <summary>
/// 	设置滚动滚轮是否缩放界面
/// </summary>
/// <param name="v" type="Boolean">设置滚动滚轮是否缩放界面</param>
}

twaver.vector.Network.prototype.setZoomDivVisible = function (v) {
/// <summary>
/// 	缩放的时候是否显示左上角的提示按钮
/// </summary>
/// <param name="v" type="Boolean">缩放的时候是否显示左上角的提示按钮</param>
}

twaver.vector.Network.prototype.setZoomManager = function (zoomManager) {
/// <summary>
/// 	设置拓扑组件的缩放管理器
/// </summary>
/// <param name="zoomManager" type="twaver.vector.BaseZoomManager">缩放管理器</param>
}

twaver.vector.Network.prototype.setZoomVisibilityThresholds = function (value) {
/// <summary>
/// 	设置缩放可见标示对象
/// </summary>
/// <param name="value" type="Object">缩放可见标示对象</param>
}

twaver.vector.Network.prototype.toCanvas = function (w, h, c) {
/// <summary>
/// 	从Network生成指定大小的Canvas元素，用于生成缩略图
/// </summary>
/// <param name="w" type="Number">要生成的Canvas元素的宽度</param>
/// <param name="h" type="Number">要生成的Canvas元素的高度</param>
/// <param name="c" type="HTMLCanvasElement">目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素</param>
/// <returns type="HTMLCanvasElement">返回Canvas元素</returns>
}

twaver.vector.Network.prototype.toCanvasByRegion = function (rect, scale, c) {
/// <summary>
/// 	从Network的指定区域生成指定比例的Canvas元素，用于生成缩略图
/// </summary>
/// <param name="rect" type="Object">包含x、y、width和height属性的Object对象</param>
/// <param name="scale" type="Number">缩放比例</param>
/// <param name="c" type="HTMLCanvasElement">目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素</param>
/// <returns type="HTMLCanvasElement">返回Canvas元素</returns>
}

twaver.vector.Network.prototype.upSubNetwork = function (animate, finishFunction) {
/// <summary>
/// 	返回上一层子网，可以设置是否使用动画效果，还可以指定返回结束后执行的动作
/// </summary>
/// <param name="animate" type="Boolean">是否使用动画效果，可选，默认为false</param>
/// <param name="finishFunction" type="Function">返回上一层子网结束后执行的回调函数，可选，默认为null</param>
}

twaver.vector.Network.prototype.validateCanvasSize = function () {
/// <summary>
/// 	计算画布大小
/// </summary>
}


twaver.charts.BarChart = function (dataBox) {
/// <summary>
/// 	棒图是TWaver图表中的一种，它是以条形柱状的形式展示数据。它支持多种类型的呈现方式，通过setType方法设置。
/// 	棒图是和DataBox绑定的，它呈现的是DataBox中Data的chart.values的值。
/// 	
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.charts.BarChart"></returns>
}

twaver.charts.BarChart.prototype = new twaver.charts.ScaleChart()

twaver.charts.BarChart.prototype.defaultValidateModel = function () {
/// <summary>
/// 	刷新棒图为默认类型时的数据模型
/// </summary>
}

twaver.charts.BarChart.prototype.drawContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制棒图显示的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制棒图内容的区域</param>
/// <param name="validHeight" type="Number">棒图上显示柱子的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.BarChart.prototype.drawDefaultContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制棒图为默认类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制棒图内容的区域</param>
/// <param name="validHeight" type="Number">棒图上显示柱子的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.BarChart.prototype.drawGroupContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制棒图为组类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制棒图内容的区域</param>
/// <param name="validHeight" type="Number">棒图上显示柱子的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.BarChart.prototype.drawLayerContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制棒图为层次类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制棒图内容的区域</param>
/// <param name="validHeight" type="Number">棒图上显示柱子的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.BarChart.prototype.drawPercentContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制棒图为百分比类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制棒图内容的区域</param>
/// <param name="validHeight" type="Number">棒图上显示柱子的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.BarChart.prototype.drawRect = function (g, color, selected, x, y, w, h) {
/// <summary>
/// 	绘制一个矩形区域
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="color" type="String">图表绘制的颜色</param>
/// <param name="selected" type="Boolean">是否选中当前的矩形区域</param>
/// <param name="x" type="Number">矩形区域的X坐标</param>
/// <param name="y" type="Number">矩形区域的Y坐标</param>
/// <param name="w" type="Number">矩形区域的宽度</param>
/// <param name="h" type="Number">矩形区域的高度</param>
}

twaver.charts.BarChart.prototype.drawStackContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制棒图为叠加类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制棒图内容的区域</param>
/// <param name="validHeight" type="Number">棒图上显示柱子的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.BarChart.prototype.getType = function () {
/// <summary>
/// 	获取棒图的显示类型，默认为twaver.Defaults.BARCHART_TYPE
/// 	支持的类型有：
/// 	'default','group','stack','layer','percent'
/// </summary>
/// <returns type="String">棒图的显示类型</returns>
}

twaver.charts.BarChart.prototype.groupValidateModel = function () {
/// <summary>
/// 	刷新棒图为组类型时的数据模型
/// </summary>
}

twaver.charts.BarChart.prototype.layerValidateModel = function () {
/// <summary>
/// 	刷新棒图为层次类型时的数据模型
/// </summary>
}

twaver.charts.BarChart.prototype.percentValidateModel = function () {
/// <summary>
/// 	刷新棒图为百分比类型时的数据模型
/// </summary>
}

twaver.charts.BarChart.prototype.setType = function (v) {
/// <summary>
/// 	设置棒图的显示类型，默认为twaver.Defaults.BARCHART_TYPE
/// 	支持的类型有：
/// 	'default','group','stack','layer','percent'
/// </summary>
/// <param name="v" type="String">棒图的显示类型</param>
}

twaver.charts.BarChart.prototype.stackValidateModel = function () {
/// <summary>
/// 	刷新棒图为叠加类型时的数据模型
/// </summary>
}


twaver.charts.BubbleChart = function (dataBox) {
/// <summary>
/// 	气泡图属于分散图的一种，它是用气泡来绘制数据的。在一个气泡图中，x轴，y轴以及气泡值本身分别代表了一个事件的三个值的变化，而气泡值的大小又取决于x轴与y轴上值的大小。
/// 	气泡图支持多种形状的呈现，它取决于网元上chart.bubble.shape的值
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.charts.BubbleChart"></returns>
}

twaver.charts.BubbleChart.prototype = new twaver.charts.ScaleChart()

twaver.charts.BubbleChart.prototype.drawContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制气泡图的显示内容，用户不需要调用此方法，但是可以重写此方法来绘制气泡显示的内容
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制气泡图内容的区域</param>
/// <param name="validHeight" type="Number">气泡图上显示气泡的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.BubbleChart.prototype.getNames = function (data) {
/// <summary>
/// 	获取指定数据在气泡上显示的名称，默认取值于data.getStyle('chart.names')
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="twaver.List">返回一个包含Stirng类型的List对象</returns>
}

twaver.charts.BubbleChart.prototype.getSelectShadowColor = function () {
/// <summary>
/// 	获取选中网元时阴影的颜色，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_COLOR
/// </summary>
/// <returns type="String">选中网元时阴影的颜色</returns>
}

twaver.charts.BubbleChart.prototype.getSelectShadowOffset = function () {
/// <summary>
/// 	获取选中网元时阴影的偏移量，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_OFFSET
/// </summary>
/// <returns type="Number">选中网元时阴影的偏移量</returns>
}

twaver.charts.BubbleChart.prototype.getShape = function (data) {
/// <summary>
/// 	获取指定的网元在气泡图上气泡显示的形状，取的是网元上chart.bubble.shape样式的值。
/// 	TWaver中气泡支持的形状有：
/// 	'rectangle'：矩形，
/// 	'oval'：椭圆形，
/// 	'roundrect'：圆角矩形，
/// 	'star'：星形，
/// 	'triangle'：三角形，
/// 	'circle'：圆形，
/// 	'hexagon'：六角形，
/// 	'pentagon'：五角形，
/// 	'diamond'：菱形
/// 	
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="String">气泡的形状</returns>
}

twaver.charts.BubbleChart.prototype.getSize = function (data, value) {
/// <summary>
/// 	获取指定的网元在气泡图上显示的大小，默认为data.getStyle('chart.values')的值。
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <param name="value" type="Number">指定数据显示在图表上的值</param>
/// <returns type="Number">返回指定数据显示在图表上气泡值的大小</returns>
}

twaver.charts.BubbleChart.prototype.getXAxisLowerLimit = function () {
/// <summary>
/// 	获取X轴限制的最小值，默认为twaver.Defaults.BUBBLECHART_XAXIS_LOWER_LIMIT
/// </summary>
/// <returns type="Number">X轴限制的最小值</returns>
}

twaver.charts.BubbleChart.prototype.getXAxisUpperLimit = function () {
/// <summary>
/// 	获取X轴限制的最大值，默认为twaver.Defaults.BUBBLECHART_XAXIS_UPPER_LIMIT
/// </summary>
/// <returns type="Number">X轴限制的最大值</returns>
}

twaver.charts.BubbleChart.prototype.getXAxisValues = function (data) {
/// <summary>
/// 	获取指定的数据在气泡图上显示的X轴的坐标值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Number">X轴的坐标值</returns>
}

twaver.charts.BubbleChart.prototype.getXMax = function () {
/// <summary>
/// 	获取气泡图上显示网元的X坐标的最大的值
/// </summary>
/// <returns type="Number">X坐标的最大的值</returns>
}

twaver.charts.BubbleChart.prototype.getXMin = function () {
/// <summary>
/// 	获取气泡图上显示网元的X坐标的最小的值
/// </summary>
/// <returns type="Number">X坐标的最小的值</returns>
}

twaver.charts.BubbleChart.prototype.getXRange = function () {
/// <summary>
/// 	获取X轴上显示的值的范围，值等于XMax-XMin
/// </summary>
/// <returns type="Number">X轴上显示的值的范围</returns>
}

twaver.charts.BubbleChart.prototype.getXScaleLineColor = function () {
/// <summary>
/// 	获取气泡图上平行于X轴的刻度线的显示颜色，默认为
/// 	twaver.Defaults.BUBBLECHART_XSCALE_LINE_COLOR
/// </summary>
/// <returns type="String">刻度线的显示颜色</returns>
}

twaver.charts.BubbleChart.prototype.getXScaleLineWidth = function () {
/// <summary>
/// 	获取气泡图上平行于X轴的刻度线的宽度，默认为
/// 	twaver.Defaults.BUBBLECHART_XSCALE_LINE_WIDTH
/// </summary>
/// <returns type="Number">刻度线的宽度</returns>
}

twaver.charts.BubbleChart.prototype.getYAxisValues = function (data) {
/// <summary>
/// 	获取指定的数据在气泡图上显示的Y轴的坐标值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="Number">Y轴的坐标值</returns>
}

twaver.charts.BubbleChart.prototype.setSelectShadowColor = function (v) {
/// <summary>
/// 	设置选中网元时阴影的颜色，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_COLOR
/// </summary>
/// <param name="v" type="String">选中网元时阴影的颜色</param>
}

twaver.charts.BubbleChart.prototype.setSelectShadowOffset = function (v) {
/// <summary>
/// 	设置选中网元时阴影的偏移量，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_OFFSET
/// </summary>
/// <param name="v" type="Number">选中网元时阴影的偏移量</param>
}

twaver.charts.BubbleChart.prototype.setXAxisLowerLimit = function (v) {
/// <summary>
/// 	设置X轴限制的最小值，默认为twaver.Defaults.BUBBLECHART_XAXIS_LOWER_LIMIT
/// </summary>
/// <param name="v" type="Number">X轴限制的最小值</param>
}

twaver.charts.BubbleChart.prototype.setXAxisUpperLimit = function (v) {
/// <summary>
/// 	设置X轴限制的最大值，默认为twaver.Defaults.BUBBLECHART_XAXIS_UPPER_LIMIT
/// </summary>
/// <param name="v" type="Number">X轴限制的最大值</param>
}

twaver.charts.BubbleChart.prototype.setXScaleLineColor = function (v) {
/// <summary>
/// 	设置气泡图上平行于X轴的刻度线的显示颜色，默认为
/// 	twaver.Defaults.BUBBLECHART_XSCALE_LINE_COLOR
/// </summary>
/// <param name="v" type="String">刻度线的显示颜色</param>
}

twaver.charts.BubbleChart.prototype.setXScaleLineWidth = function (v) {
/// <summary>
/// 	设置气泡图上平行于X轴的刻度线的宽度，默认为
/// 	twaver.Defaults.BUBBLECHART_XSCALE_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">刻度线的宽度</param>
}


twaver.charts.LineChart = function (dataBox) {
/// <summary>
/// 	曲线图是图表组件中的一种。它是以曲线的形式展示数据。曲线图展示的是数据容器的网元中chart.values的值
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.charts.LineChart"></returns>
}

twaver.charts.LineChart.prototype = new twaver.charts.ScaleChart()

twaver.charts.LineChart.prototype.drawContent = function (g, rect, validHeight, skyline) {
/// <summary>
/// 	绘制曲线图显示的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
/// </summary>
/// <param name="g" type="CanvasRenderingContext2D">绘制图表的画笔</param>
/// <param name="rect" type="Object">绘制图表内容的区域</param>
/// <param name="validHeight" type="Number">曲线图上显示曲线的有效高度</param>
/// <param name="skyline" type="Number">Y轴刻度的最小值</param>
}

twaver.charts.LineChart.prototype.getLineWidth = function (data) {
/// <summary>
/// 	获取指定的网元在曲线图上显示的线的宽度，取的是网元上'chart.line.width'的样式值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Number">线的宽度</returns>
}

twaver.charts.LineChart.prototype.getMarkerShape = function (data) {
/// <summary>
/// 	获取指定数据在曲线图上显示的瞄点的形状，默认为圆形。TWaver中瞄点的形状支持：
/// 	'rectangle'：矩形，
/// 	'oval'：椭圆形，
/// 	'roundrect'：圆角矩形，
/// 	'star'：星形，
/// 	'triangle'：三角形，
/// 	'circle'：圆形，
/// 	'hexagon'：六角形，
/// 	'pentagon'：五角形，
/// 	'diamond'：菱形
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="String">瞄点的形状</returns>
}

twaver.charts.LineChart.prototype.getMarkerSize = function (data) {
/// <summary>
/// 	获取指定数据在曲线图上显示的瞄点的大小
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Number">瞄点的大小</returns>
}

twaver.charts.LineChart.prototype.getPointIndexAt = function () {
/// <summary>
/// 	获取鼠标位置所在的点索引
/// </summary>
/// <returns type="Number">返回鼠标位置所在的点索引</returns>
}

twaver.charts.LineChart.prototype.getXScaleLineColor = function () {
/// <summary>
/// 	获取曲线图上平行于X轴的刻度线的显示颜色，默认为
/// 	twaver.Defaults.LINECHART_YSCALE_LINE_COLOR
/// </summary>
/// <returns type="String">平行于X轴的刻度线的显示颜色</returns>
}

twaver.charts.LineChart.prototype.getXScaleLineWidth = function () {
/// <summary>
/// 	设置曲线图上平行于X轴的刻度线的宽度，默认为
/// 	twaver.Defaults.LINECHART_YSCALE_LINE_WIDTH
/// </summary>
/// <returns type="Number">刻度线的宽度</returns>
}

twaver.charts.LineChart.prototype.isInterruptable = function () {
/// <summary>
/// 	当设置网元的图表显示值的集合不连续时，比如中间有Number.NaN，判断是否需要在曲线图上显示不连续的效果
/// 	
/// </summary>
/// <returns type="Boolean">true为显示不连续的效果，否则为false</returns>
}

twaver.charts.LineChart.prototype.setInterruptable = function (v) {
/// <summary>
/// 	当设置网元的图表显示值的集合不连续时，比如中间有Number.NaN，设置是否需要在曲线图上显示不连续的效果
/// </summary>
/// <param name="v" type="Boolean">true为显示不连续的效果，否则为false</param>
}

twaver.charts.LineChart.prototype.setXScaleLineColor = function (v) {
/// <summary>
/// 	设置曲线图上平行于X轴的刻度线的显示颜色，默认为
/// 	twaver.Defaults.LINECHART_YSCALE_LINE_COLOR
/// </summary>
/// <param name="v" type="String">平行于X轴的刻度线的显示颜色</param>
}

twaver.charts.LineChart.prototype.setXScaleLineWidth = function (v) {
/// <summary>
/// 	设置曲线图上平行于X轴的刻度线的宽度，默认为
/// 	twaver.Defaults.LINECHART_YSCALE_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">平行于X轴的刻度线的宽度</param>
}


twaver.controls.List = function (dataBox) {
/// <summary>
/// 	构造函数
/// 	它是以列表的形式来展示数据容器中的数据
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">指定的数据容器</param>
/// <returns type="twaver.controls.List"></returns>
}

twaver.controls.List.prototype = new twaver.controls.ListBase()

twaver.controls.List.prototype.getIndent = function () {
/// <summary>
/// 	获取列表上父亲和孩子之间的缩进，默认为twaver.Defaults.LIST_INDENT
/// </summary>
/// <returns type="Number">父子之间的缩进</returns>
}

twaver.controls.List.prototype.getRowHeight = function () {
/// <summary>
/// 	获取列表的行高，默认为
/// 	twaver.Defaults.LIST_ROW_HEIGHT
/// </summary>
/// <returns type="Number">列表的行高</returns>
}

twaver.controls.List.prototype.getRowLineColor = function () {
/// <summary>
/// 	获取列表上行之间线的颜色，默认为 twaver.Defaults.LIST_ROW_LINE_COLOR
/// </summary>
/// <returns type="String">列表上行之间线的颜色</returns>
}

twaver.controls.List.prototype.getRowLineWidth = function () {
/// <summary>
/// 	获取列表上行之间线的宽度，默认为twaver.Defaults.LIST_ROW_LINE_WIDTH
/// </summary>
/// <returns type="Number">列表上行之间线的宽度</returns>
}

twaver.controls.List.prototype.getSortFunction = function () {
/// <summary>
/// 	获取列表上的数据排序的函数
/// </summary>
/// <returns type="Function">排序的函数</returns>
/// <example>
/// 	list.setSortFunction(function (d1, d2) {
/// 	         if (d1.getName() < d2.getName()) {
/// 	             return 1;
/// 	         } else if (d1.getName() == d2.getName()) {
/// 	              return 0;
/// 	         } else {
/// 	              return -1;
/// 	         }
/// 	});
/// </example>
}

twaver.controls.List.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取列表上的数据是否可见的过滤器
/// </summary>
/// <returns type="Function">是否可见的过滤器</returns>
/// <example>
/// 	list.setVisibleFunction(function (element) {
/// 	     return element instanceof twaver.Node;
/// 	});
/// </example>
}

twaver.controls.List.prototype.isCheckable = function (data) {
/// <summary>
/// 	获取指定的列表上行的数据是否可勾选
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <returns type="Boolean">是否可勾选，true为可勾选，否则为false</returns>
}

twaver.controls.List.prototype.isCheckMode = function () {
/// <summary>
/// 	是否为勾选模型
/// </summary>
/// <returns type="Boolean">true为勾选模型，否则为false</returns>
}

twaver.controls.List.prototype.isKeyboardRemoveEnabled = function () {
/// <summary>
/// 	判断列表是否支持键盘删除数据的操作，默认为 
/// 	twaver.Defaults.LIST_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <returns type="Boolean">true为可以键盘删除，否则为false</returns>
}

twaver.controls.List.prototype.isKeyboardSelectEnabled = function () {
/// <summary>
/// 	判断列表上是否支持键盘选择数据的操作，默认为twaver.Defaults.LIST_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <returns type="Boolean">true为可以键盘选择数据，否则为false</returns>
}

twaver.controls.List.prototype.isMakeVisibleOnSelected = function () {
/// <summary>
/// 	判断当选中某个列表上数据时，是否处于可见区域，默认为
/// 	twaver.Defaults.LIST_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <returns type="Boolean">true为处于可见区域，否则为false</returns>
}

twaver.controls.List.prototype.onLabelRendered = function (span, data, label, row, selected) {
/// <summary>
/// 	调用renderData时会调用此方法，用户不需要直接调用此方法，可以重载此方法实现自己的逻辑
/// </summary>
/// <param name="span" type="HTMLSpanElement">包含数据元标签的Span</param>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="label" type="String">显示的标签值</param>
/// <param name="row" type="Number">指定的行号</param>
/// <param name="selected" type="Boolean">是否为选中状态</param>
}

twaver.controls.List.prototype.renderData = function (div, data, row, selected) {
/// <summary>
/// 	绘制列表中指定的数据
/// </summary>
/// <param name="div" type="HTMLDivElement">包含数据的div</param>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="row" type="Number">指定数据的行号</param>
/// <param name="selected" type="Boolean">是否为选中状态</param>
}

twaver.controls.List.prototype.setCheckMode = function (v) {
/// <summary>
/// 	设置是否为勾选模型
/// </summary>
/// <param name="v" type="Boolean">true为勾选模型，否则为false</param>
}

twaver.controls.List.prototype.setIndent = function (v) {
/// <summary>
/// 	设置列表上父亲和孩子之间的缩进，默认为twaver.Defaults.LIST_INDENT
/// </summary>
/// <param name="v" type="Number">列表的缩进</param>
}

twaver.controls.List.prototype.setKeyboardRemoveEnabled = function (v) {
/// <summary>
/// 	设置列表是否支持键盘删除数据的操作，默认为 
/// 	twaver.Defaults.LIST_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为可以键盘删除，否则为false</param>
}

twaver.controls.List.prototype.setKeyboardSelectEnabled = function (v) {
/// <summary>
/// 	设置列表上是否支持键盘选择数据的操作，默认为twaver.Defaults.LIST_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为可以键盘选择数据，否则为false</param>
}

twaver.controls.List.prototype.setMakeVisibleOnSelected = function (v) {
/// <summary>
/// 	设置当选中某个列表上数据时，是否处于可见区域，默认为
/// 	twaver.Defaults.LIST_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <param name="v" type="Boolean">true为处于可见区域，否则为false</param>
}

twaver.controls.List.prototype.setRowHeight = function (v) {
/// <summary>
/// 	获取列表的行高，默认为
/// 	twaver.Defaults.LIST_ROW_HEIGHT
/// </summary>
/// <param name="v" type="Number">列表的行高</param>
}

twaver.controls.List.prototype.setRowLineColor = function (v) {
/// <summary>
/// 	设置列表上行之间线的颜色，默认为 twaver.Defaults.LIST_ROW_LINE_COLOR
/// </summary>
/// <param name="v" type="String">列表上行之间线的颜色</param>
}

twaver.controls.List.prototype.setRowLineWidth = function (v) {
/// <summary>
/// 	设置列表上行之间线的宽度，默认为twaver.Defaults.LIST_ROW_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">列表上行之间线的宽度</param>
}

twaver.controls.List.prototype.setSortFunction = function (v) {
/// <summary>
/// 	设置列表上的数据排序的函数
/// </summary>
/// <param name="v" type="Function">排序的函数</param>
/// <example>
/// 	list.setSortFunction(function (d1, d2) {
/// 	         if (d1.getName() < d2.getName()) {
/// 	             return 1;
/// 	         } else if (d1.getName() == d2.getName()) {
/// 	              return 0;
/// 	         } else {
/// 	              return -1;
/// 	         }
/// 	});
/// </example>
}

twaver.controls.List.prototype.setVisibleFunction = function (v) {
/// <summary>
/// 	设置列表上的数据是否可见的过滤器
/// </summary>
/// <param name="v" type="Function">是否可见的过滤器</param>
/// <example>
/// 	list.setVisibleFunction(function (element) {
/// 	     return element instanceof twaver.Node;
/// 	});
/// </example>
}


twaver.controls.TableBase = function (dataBox) {
/// <summary>
/// 	构造函数
/// 	它是表格和树表的基类，定义了表格和树表类中通用的方法，它是和DataBox绑定的，以图表的形式显示DataBox中的数据
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">指定的数据模型</param>
/// <returns type="twaver.controls.TableBase"></returns>
}

twaver.controls.TableBase.prototype = new twaver.controls.ListBase()

twaver.controls.TableBase.prototype.cancelEditing = function () {
/// <summary>
/// 	取消当前编辑器的编辑状态
/// </summary>
}

twaver.controls.TableBase.prototype.commitEditValue = function (editInfo, target) {
/// <summary>
/// 	提交单元格中编辑的值，将这个值回写到Data的属性中
/// </summary>
/// <param name="editInfo" type="Object">指定的单元格编辑器的信息，它是一个包含column和data的对象</param>
/// <param name="target" type="Object">编辑器所对应的对象类型，它是一个包含type的对象类型，用于判断编辑器的类型</param>
}

twaver.controls.TableBase.prototype.getColumnAt = function (e) {
/// <summary>
/// 	获取鼠标位置所在的列
/// </summary>
/// <param name="e" type="MouseEvent">鼠标事件</param>
/// <returns type="twaver.Column">返回鼠标位置所在的列</returns>
}

twaver.controls.TableBase.prototype.getColumnBox = function () {
/// <summary>
/// 	获取表格上列的数据容器
/// </summary>
/// <returns type="twaver.ColumnBox">列数据容器</returns>
}

twaver.controls.TableBase.prototype.getCurrentEditor = function () {
/// <summary>
/// 	获取当前编辑器
/// </summary>
/// <returns type="HTMLElement">返回当前编辑器</returns>
}

twaver.controls.TableBase.prototype.getValue = function (data, column) {
/// <summary>
/// 	从Data中获取对应的表格列的值，TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">表格或树表格绑定的数据对象</param>
/// <param name="column" type="twaver.Column">指定的列对象</param>
/// <returns type="Object">返回表格列的值</returns>
}

twaver.controls.TableBase.prototype.handleColumnBoxChange = function (e) {
/// <summary>
/// 	当列的容器中列发生变化时调用此方法，用于更新表格的显示内容。用户不需要调用此方法，但可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">列容器发生变化的事件</param>
}

twaver.controls.TableBase.prototype.handleColumnHierarchyChange = function (e) {
/// <summary>
/// 	当列的容器中列的顺序关系发生变化时调用此方法，用于更新表格的显示内容。用户不需要调用此方法，但可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">列容器中列的顺序发生变化的事件</param>
}

twaver.controls.TableBase.prototype.handleColumnPropertyChange = function (e) {
/// <summary>
/// 	当列的容器中列的属性发生变化时调用此方法，用于更新表格的显示内容。用户不需要调用此方法，但可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="e" type="Object">ColumnBox中列的属性变化事件</param>
}

twaver.controls.TableBase.prototype.isCellEditable = function (data, column) {
/// <summary>
/// 	判断指定的表格列的单元格是否可编辑
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <param name="column" type="twaver.Column">指定的列</param>
/// <returns type="Boolean">true为可编辑，否则为false</returns>
}

twaver.controls.TableBase.prototype.onCellRendered = function (params) {
/// <summary>
/// 	当绘制表格单元格时调用此方法，用户不需要自己调用此方法，但可以重载这个方法实现自己的逻辑处理
/// </summary>
/// <param name="params" type="Object">params是一个包含多个数据的对象，params的格式为： params = {data: data, value: this.getValue(data, column), div: cell, view: this, column: column, rowIndex: row, selected: selected}</param>
}

twaver.controls.TableBase.prototype.onColumnSorted = function (column) {
/// <summary>
/// 	排序列时的回调函数
/// </summary>
/// <param name="column" type="twaver.Column">列对象</param>
}

twaver.controls.TableBase.prototype.renderCell = function (params) {
/// <summary>
/// 	渲染表格的单元格
/// </summary>
/// <param name="params" type="Object">params是一个包含多个数据的对象，params的格式为： params = {data: data, value: this.getValue(data, column), div: cell, view: this, column: column, rowIndex: row, selected: selected}</param>
}

twaver.controls.TableBase.prototype.renderData = function (div, data, row, selected) {
/// <summary>
/// 	绘制表格中的数据，用户可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="div" type="HTMLDivElement">包含指定表格上行数据的DIV</param>
/// <param name="data" type="twaver.Data">指定的数据对象</param>
/// <param name="row" type="Number">表格指定的行</param>
/// <param name="selected" type="Boolean">表格数据是否是选中状态</param>
}

twaver.controls.TableBase.prototype.setValue = function (data, column, value) {
/// <summary>
/// 	设置表格上的值回写到data中，TWaver内部使用
/// </summary>
/// <param name="data" type="twaver.Data">表格或树表格绑定的数据对象</param>
/// <param name="column" type="twaver.Column">表格列对象</param>
/// <param name="value" type="Object">表格列的值</param>
}

twaver.controls.TableBase.prototype.updateCurrentEditor = function (e) {
/// <summary>
/// 	当鼠标点击到某个单元格上时，更新当前单元格的编辑器
/// </summary>
/// <param name="e" type="MouseEvent">鼠标的点击事件</param>
}


twaver.controls.Tree = function (dataBox) {
/// <summary>
/// 	TWaver HTML5的树是图形组件的一种，它是和DataBox绑定的，以树的形式展示DataBox中的数据以及数据之间的层次关系。
/// 	TWaver HTML5的Tree采用了一种新的机制，只展示可见部分的数据，因此它的性能很高，能承载上万的数据
/// 	
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.controls.Tree"></returns>
}

twaver.controls.Tree.prototype = new twaver.controls.ListBase()

twaver.controls.Tree.prototype.collapse = function (data) {
/// <summary>
/// 	合并指定的树节点
/// </summary>
/// <param name="data" type="twaver.Data">指定的树节点的数据</param>
}

twaver.controls.Tree.prototype.collapseAll = function () {
/// <summary>
/// 	合并所有的树节点对象，调用这个方法后，所有的孩子都会处于合并状态
/// </summary>
}

twaver.controls.Tree.prototype.expand = function (data) {
/// <summary>
/// 	展开指定的树节点对象
/// </summary>
/// <param name="data" type="twaver.Data">指定的树节点的数据</param>
}

twaver.controls.Tree.prototype.expandAll = function () {
/// <summary>
/// 	展开所有的树节点对象，调用这个方法后，所有的孩子都会处于打开状态
/// </summary>
}

twaver.controls.Tree.prototype.getCheckMode = function () {
/// <summary>
/// 	获取树的勾选方式。勾选方式的可选值有：
/// 	'default'：默认
/// 	'children':勾选父亲时，会将孩子也勾选上
/// 	'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
/// 	'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
/// </summary>
/// <returns type="String">树上的勾选方式</returns>
}

twaver.controls.Tree.prototype.getCollapseIcon = function () {
/// <summary>
/// 	获取树合并的图标，默认为twaver.Defaults.TREE_COLLAPSE_ICON
/// </summary>
/// <returns type="String">树合并的图标</returns>
}

twaver.controls.Tree.prototype.getExpandIcon = function () {
/// <summary>
/// 	获取树展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
/// </summary>
/// <returns type="String">树展开的图标</returns>
}

twaver.controls.Tree.prototype.getIndent = function () {
/// <summary>
/// 	获取树上父亲和孩子之间的缩进，默认为twaver.Defaults.TREE_INDENT
/// </summary>
/// <returns type="Number">树的缩进</returns>
}

twaver.controls.Tree.prototype.getLevel = function (data) {
/// <summary>
/// 	获取指定的节点数据所在的层次
/// </summary>
/// <param name="data" type="twaver.Data">指定的节点数据</param>
/// <returns type="Number">节点的层次数</returns>
}

twaver.controls.Tree.prototype.getRootData = function () {
/// <summary>
/// 	获取根节点数据
/// </summary>
/// <returns type="twaver.Data">树的根节点</returns>
}

twaver.controls.Tree.prototype.getRowHeight = function () {
/// <summary>
/// 	获取树的行高，默认为twaver.Defaults.TREE_ROW_HEIGHT
/// </summary>
/// <returns type="Number">树的行高</returns>
}

twaver.controls.Tree.prototype.getRowLineColor = function () {
/// <summary>
/// 	获取树上行之间线的颜色，默认为twaver.Defaults.TREE_ROW_LINE_COLOR
/// </summary>
/// <returns type="String">树上行之间线的颜色</returns>
}

twaver.controls.Tree.prototype.getRowLineWidth = function () {
/// <summary>
/// 	获取树上行之间线的宽度，默认为twaver.Defaults.TREE_ROW_LINE_WIDTH
/// </summary>
/// <returns type="Number">树上行之间线的宽度</returns>
}

twaver.controls.Tree.prototype.getSortFunction = function () {
/// <summary>
/// 	获取树节点排序的函数
/// </summary>
/// <returns type="Function">排序的函数</returns>
/// <example>
/// 	tree.setSortFunction(function (d1, d2) {
/// 	         if (d1.getName() < d2.getName()) {
/// 	             return 1;
/// 	         } else if (d1.getName() == d2.getName()) {
/// 	              return 0;
/// 	         } else {
/// 	              return -1;
/// 	         }
/// 	});
/// </example>
}

twaver.controls.Tree.prototype.getToggleImage = function (data) {
/// <summary>
/// 	获取指定数据当前显示的图标，如果指定的数据是处于合并状态，就返回合并时的图标；如果是展开状态，返回的是展开的图标
/// </summary>
/// <param name="data" type="twaver.Data">指定的树节点</param>
/// <returns type="String">树节点当前显示的图标</returns>
}

twaver.controls.Tree.prototype.getUncheckableStyle = function () {
/// <summary>
/// 	获取树节点不可勾选时的样式，默认为'none'。可选值有：
/// 	'none'：没有任何样式
/// 	'disabled':不可用
/// </summary>
/// <returns type="String">树节点不可勾选时的样式</returns>
}

twaver.controls.Tree.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取树上的节点是否可见的过滤器
/// </summary>
/// <returns type="Function">是否可见的过滤器</returns>
/// <example>
/// 	tree.setVisibleFunction(function (element) {
/// 	     return element instanceof twaver.Node;
/// 	});
/// </example>
}

twaver.controls.Tree.prototype.isCheckable = function (data) {
/// <summary>
/// 	获取指定的树节点是否可勾选
/// </summary>
/// <param name="data" type="twaver.Data">指定的树节点对象</param>
/// <returns type="Boolean">是否可勾选，true为可勾选，否则为false</returns>
}

twaver.controls.Tree.prototype.isCheckMode = function () {
/// <summary>
/// 	是否为勾选模型
/// </summary>
/// <returns type="Boolean">true为勾选模型，否则为false</returns>
}

twaver.controls.Tree.prototype.isChildrenSortable = function (parent) {
/// <summary>
/// 	判断指定的节点数据下的孩子是否可以排序。默认实现为可排序，用户可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="parent" type="twaver.Data">指定的数据</param>
/// <returns type="Boolean">true为可排序，否则为false</returns>
}

twaver.controls.Tree.prototype.isExpanded = function (data) {
/// <summary>
/// 	指定的树节点是否处于展开状态
/// </summary>
/// <param name="data" type="twaver.Data">指定的树节点对象</param>
/// <returns type="Boolean">true为展开状态，否则为false</returns>
}

twaver.controls.Tree.prototype.isKeyboardRemoveEnabled = function () {
/// <summary>
/// 	判断树是否支持键盘删除节点的操作，默认为 twaver.Defaults.TREE_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <returns type="Boolean">true为可以键盘删除，否则为false</returns>
}

twaver.controls.Tree.prototype.isKeyboardSelectEnabled = function () {
/// <summary>
/// 	判断树是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <returns type="Boolean">true为可以键盘选择节点，否则为false</returns>
}

twaver.controls.Tree.prototype.isMakeVisibleOnSelected = function () {
/// <summary>
/// 	判断当选中某个树节点时，是否处于可见区域，默认为twaver.Defaults.TREE_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <returns type="Boolean">true为处于可见区域，否则为false</returns>
}

twaver.controls.Tree.prototype.isRootVisible = function () {
/// <summary>
/// 	判断根节点是否可见
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.controls.Tree.prototype.onLabelRendered = function (span, data, label, row, level, selected) {
/// <summary>
/// 	当绘制树上的标签时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="span" type="HTMLSpanElement">包含数据元标签的Span</param>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="label" type="String">显示的标签值</param>
/// <param name="row" type="Number">指定的行号</param>
/// <param name="level" type="Number">指定数据的层次数</param>
/// <param name="selected" type="Boolean">是否为选中状态</param>
}

twaver.controls.Tree.prototype.renderData = function (div, data, row, selected) {
/// <summary>
/// 	渲染树上显示的数据
/// </summary>
/// <param name="div" type="HTMLDivElement">包含指定数据的div</param>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="row" type="Number">指定数据所在的行号</param>
/// <param name="selected" type="Boolean">是否为选中状态</param>
}

twaver.controls.Tree.prototype.setCheckMode = function (v) {
/// <summary>
/// 	设置树的勾选方式。勾选方式的可选值有：
/// 	'default'：默认
/// 	'children':勾选父亲时，会将孩子也勾选上
/// 	'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
/// 	'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
/// </summary>
/// <param name="v" type="String">树上的勾选方式</param>
}

twaver.controls.Tree.prototype.setCollapseIcon = function (v) {
/// <summary>
/// 	获取树合并的图标，默认为twaver.Defaults.TREE_COLLAPSE_ICON
/// </summary>
/// <param name="v" type="String">树合并的图标</param>
}

twaver.controls.Tree.prototype.setExpandIcon = function (v) {
/// <summary>
/// 	设置树展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
/// </summary>
/// <param name="v" type="String">树展开的图标</param>
}

twaver.controls.Tree.prototype.setIndent = function (v) {
/// <summary>
/// 	设置树上父亲和孩子之间的缩进，默认为twaver.Defaults.TREE_INDENT
/// </summary>
/// <param name="v" type="Number">树上孩子和父亲之间的缩进值</param>
}

twaver.controls.Tree.prototype.setKeyboardRemoveEnabled = function (v) {
/// <summary>
/// 	设置树是否支持键盘删除节点的操作，默认为 twaver.Defaults.TREE_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为可以键盘删除，否则为false</param>
}

twaver.controls.Tree.prototype.setKeyboardSelectEnabled = function (v) {
/// <summary>
/// 	设置树是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为可以键盘选择节点，否则为false</param>
}

twaver.controls.Tree.prototype.setMakeVisibleOnSelected = function (v) {
/// <summary>
/// 	设置选中某个树节点时，让其处于可见区域，默认为twaver.Defaults.TREE_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <param name="v" type="Boolean">true为处于可见区域，否则为false</param>
}

twaver.controls.Tree.prototype.setRootData = function (v) {
/// <summary>
/// 	获取根节点数据
/// </summary>
/// <param name="v" type="twaver.Data">树的根节点</param>
}

twaver.controls.Tree.prototype.setRootVisible = function (v) {
/// <summary>
/// 	设置根节点是否可见
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.controls.Tree.prototype.setRowHeight = function (v) {
/// <summary>
/// 	设置树的行高，默认为twaver.Defaults.TREE_ROW_HEIGHT
/// </summary>
/// <param name="v" type="Number">树的行高</param>
}

twaver.controls.Tree.prototype.setRowLineColor = function (v) {
/// <summary>
/// 	设置树上行之间线的颜色，默认为twaver.Defaults.TREE_ROW_LINE_COLOR
/// </summary>
/// <param name="v" type="String">树上行之间线的颜色</param>
}

twaver.controls.Tree.prototype.setRowLineWidth = function (v) {
/// <summary>
/// 	设置树上行之间线的宽度，默认为twaver.Defaults.TREE_ROW_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">树上行之间线的宽度</param>
}

twaver.controls.Tree.prototype.setSortFunction = function (v) {
/// <summary>
/// 	设置树节点排序的函数
/// </summary>
/// <param name="v" type="Function">排序的函数</param>
/// <example>
/// 	tree.setSortFunction(function (d1, d2) {
/// 	         if (d1.getName() < d2.getName()) {
/// 	             return 1;
/// 	         } else if (d1.getName() == d2.getName()) {
/// 	              return 0;
/// 	         } else {
/// 	              return -1;
/// 	         }
/// 	});
/// </example>
}

twaver.controls.Tree.prototype.setUncheckableStyle = function (v) {
/// <summary>
/// 	设置树节点不可勾选时的样式，默认为'none'。可选值有：
/// 	'none'：没有任何样式
/// 	'disabled':不可用
/// </summary>
/// <param name="v" type="String">树节点不可勾选时的样式</param>
}

twaver.controls.Tree.prototype.setVisibleFunction = function (v) {
/// <summary>
/// 	设置树上的节点是否可见的过滤器
/// </summary>
/// <param name="v" type="Function">是否可见的过滤器</param>
/// <example>
/// 	tree.setVisibleFunction(function (element) {
/// 	     return element instanceof twaver.Node;
/// 	});
/// </example>
}


twaver.Grid = function (id) {
/// <summary>
/// 	构造函数
/// 	网格是由行和列组成的一种网元。网格是单元格的集合，每个单元格上可以附上网格。
/// 	网格可以指定其行和列的数量，也可以设置行和列的宽高。
/// 	Grid的具体用法可以参考GridEditorDemo。
/// </summary>
/// <param name="id" type="Object">网格ID，用于唯一标识这个网格对象。如果为空，TWaver会按照默认的规则给连线网格ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是网格的ID，如果为Object类型，可以传入一个带网格属性的对象，比如： var grid = new twaver.Grid({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.Grid"></returns>
}

twaver.Grid.prototype = new twaver.Follower()

twaver.Grid.prototype.getCellObject = function (x, y) {
/// <summary>
/// 	获取某个点上单元格的对象
/// </summary>
/// <param name="x" type="Object">x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为Object时，需要传入的一个带x，y变量的对象，例如：{x:10,y:10}</param>
/// <param name="y" type="Number">y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值</param>
/// <returns type="Object">包含行列索引的单元格对象</returns>
}

twaver.Grid.prototype.getCellRect = function (rowIndex, columnIndex) {
/// <summary>
/// 	获取某个行、列上单元格的位置和大小
/// </summary>
/// <param name="rowIndex" type="Number">行的索引号</param>
/// <param name="columnIndex" type="Number">列的索引号</param>
/// <returns type="Object">单元格的位置和大小。包含单元格的x,y坐标，以及单元格的宽高。例如：{x:100,Y:100,width:50,height:50}</returns>
}


twaver.Group = function (id) {
/// <summary>
/// 	组是一种特殊的网元。它在某个区域形状中展示其孩子网元。组可以进行展开，合并。当组展开时，它的孩子网元都会在network上显示出来；合并组时，孩子网元都会隐藏。
/// 	组和子网不同，组是在同一层展示它的孩子，而子网是需要进入下一层展示它的孩子网元
/// </summary>
/// <param name="id" type="Object">组ID，用于唯一标识这个组对象。如果为空，TWaver会按照默认的规则给组ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是组的ID，如果为Object类型，可以传入一个带组属性的对象，比如： var group = new twaver.Group({      image:'tw130',      name:'TWaver Router',      expanded:true,   styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.Group"></returns>
}

twaver.Group.prototype = new twaver.Follower()

twaver.Group.prototype.getChildRect = function (child) {
/// <summary>
/// 	获取孩子网元的边界
/// </summary>
/// <param name="child" type="twaver.Element">孩子网元</param>
/// <returns type="Object">返回孩子网元的边界</returns>
}

twaver.Group.prototype.isExpanded = function () {
/// <summary>
/// 	判断组是否处于展开状态
/// </summary>
/// <returns type="Boolean">true为展开，false为合并</returns>
}

twaver.Group.prototype.reverseExpanded = function () {
/// <summary>
/// 	反向设置组的展开状态。当组展开时，调用此方法，组变成合并状态；当组合并时，调用此方法，组变成展开状态
/// </summary>
}

twaver.Group.prototype.setExpanded = function (expanded) {
/// <summary>
/// 	设置组的展开状态
/// </summary>
/// <param name="expanded" type="Boolean">true为展开，false为合并</param>
}

twaver.Group.prototype.updateLocationFromChildren = function () {
/// <summary>
/// 	根据所有孩子坐标来更新组的位置
/// </summary>
}


twaver.RotatableNode = function (id) {
/// <summary>
/// 	可旋转节点, 设置以度为单位的旋转角度后, 节点的图片会旋转相应角度
/// </summary>
/// <param name="id" type="Object">网元ID，用于唯一标识网元对象。如果为空，TWaver会在内部构造唯一ID. 如果参数id为string或number类型, 则参数id将直接作为网元id; 如果为Object类型, 则将其属性赋值给网元</param>
/// <returns type="twaver.RotatableNode"></returns>
/// <example>
/// 	var rotatableNode = new twaver.RotatableNode({
/// 	    image: 'tw130',
/// 	    name: 'TWaver Router',
/// 	    expanded: true,
/// 	    styles: {
/// 	        'lable.yoffset': -75
/// 	    }
/// 	});
/// </example>
}

twaver.RotatableNode.prototype = new twaver.Follower()


twaver.ShapeNode = function (id) {
/// <summary>
/// 	构造函数
/// 	多边形节点是一种特殊的网元。普通网元在network上是通过图片来展示的，而多边形节点网元是通过多边形来代替图片呈现的。
/// 	
/// 	多边形网元是由一系列的点组成的多边形形状的网元，可以通过增加、删除点来更改其形状，多边形的点之间可以通过line （直线），move（移动），quad（曲线）来连接。
/// 	
/// 	多边形可以通过各种颜色，渐变色来填充绘制，也可以设置其外边框。
/// 	
/// 	多边形网元和折线都是通过一系列的点来绘制的网元，但是不同的是折线它是一条Link，必须有起始和结束节点，而且必须是一条连续的路径。而多边形网元的点之间可以move to，这样可以是一条不连续的路径。
/// 	
/// 	多边形网元的应用可以参考States Map Demo，它是一系列的点来绘制各个州
/// 	
/// </summary>
/// <param name="id" type="Object">多边形节点ID，用于唯一标识这个多边形节点对象。如果为空，twaver会按照默认的规则给连线多边形节点ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是多边形节点的ID，如果为Object类型，可以传入一个带多边形节点属性的对象，比如： var shapeNode = new twaver.ShapeNode({      name:'TWaver Router',      styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.ShapeNode"></returns>
}

twaver.ShapeNode.prototype = new twaver.Follower()

twaver.ShapeNode.prototype.addPoint = function (point, index) {
/// <summary>
/// 	在多边形节点上添加点，更改多边形的走向。
/// </summary>
/// <param name="point" type="Object">包含x，y属性的对象。例如：var point = {x:10,y:10};</param>
/// <param name="index" type="Number">添加点的次序，如果为空，则添加在最后一个位置。</param>
}

twaver.ShapeNode.prototype.firePointsChange = function () {
/// <summary>
/// 	派发点的更改事件，当多边形上的点发生变化时，会调用此方法。此方法用于TWaver内部调用的
/// </summary>
}

twaver.ShapeNode.prototype.getLineLength = function () {
/// <summary>
/// 	获取ShapeNode的周长
/// </summary>
/// <returns type="Number">返回ShapeNode的周长</returns>
}

twaver.ShapeNode.prototype.getPoints = function () {
/// <summary>
/// 	获取多边形节点上所有点的集合
/// </summary>
/// <returns type="twaver.List">多边形网元上点的集合</returns>
}

twaver.ShapeNode.prototype.getSegments = function () {
/// <summary>
/// 	获取多边形节点上所有连线段的集合
/// </summary>
/// <returns type="twaver.List">多边形节点网元上连线段的集合</returns>
}

twaver.ShapeNode.prototype.removeAt = function (index) {
/// <summary>
/// 	移除参数指定的某个点，更改多边形节点的形状
/// </summary>
/// <param name="index" type="Number">移除参数所指定的某个点</param>
}

twaver.ShapeNode.prototype.removePoint = function (point) {
/// <summary>
/// 	移除指定的点，用于更改多边形网元的形状
/// </summary>
/// <param name="point" type="Object">移除的点对象，例如：var point = {x:10,y:10}</param>
}

twaver.ShapeNode.prototype.setPoint = function (index, point) {
/// <summary>
/// 	设置指定序号上的点，用于更改多边形网元的形状
/// </summary>
/// <param name="index" type="Number">多边形网元上的序号</param>
/// <param name="point" type="Object">包含x，y属性的点对象。例如：var point = {x:10,y:10}</param>
}

twaver.ShapeNode.prototype.setPoints = function (value) {
/// <summary>
/// 	设置多边形上点的集合
/// </summary>
/// <param name="value" type="twaver.List">多边形节点上点的集合</param>
}

twaver.ShapeNode.prototype.setSegments = function (v) {
/// <summary>
/// 	设置多边形网元上所有连线段的集合
/// </summary>
/// <param name="v" type="twaver.List">多边形节点上连线段的集合</param>
}


twaver.SubNetwork = function (id) {
/// <summary>
/// 	子网是TWaver中的一种网元，子网可以进行钻取。在network上用于分层展现。默认双击可以进入下一层，展示子网的所有孩子。
/// 	子网可以设置自己的背景色和图片。子网中可以嵌入子网，这样在network上展示网元时可以进行分层呈现
/// 	
/// 	
/// </summary>
/// <param name="id" type="Object">子网ID，用于唯一标识这个子网对象。如果为空，twaver会按照默认的规则给连线子网ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是子网的ID，如果为Object类型，可以传入一个带子网属性的对象，比如： var subnetwork = new twaver.Subnetwork({      name:'TWaver Router',      styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.SubNetwork"></returns>
}

twaver.SubNetwork.prototype = new twaver.Follower()

twaver.SubNetwork.prototype.ISubNetwork = function () {
/// <field type="Boolean">子否为子网的标志</field>
}


twaver.Bus = function (id) {
/// <summary>
/// 	总线是一种特殊的网元，它和shapeNode类似，也是由一系列的点组成的，但是它是不闭合的，也没有内部填充色。
/// 	总线可以随着network的宽度更改而更改。总线上可以连接多个网元，来进行总线布局。
/// 	总线的具体用法可以参考Bus Layout Demo
/// </summary>
/// <param name="id" type="Object">总线ID，用于唯一标识这个多总线对象。如果为空，TWaver会按照默认的规则给总线ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是总线的ID，如果为Object类型，可以传入一个带总线属性的对象，比如： var bus = new twaver.Bus({      name:'TWaver Router',      styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.Bus"></returns>
}

twaver.Bus.prototype = new twaver.ShapeNode()


twaver.controls.Table = function (dataBox) {
/// <summary>
/// 	表格是TWaver HTML5中提供的视图组件的一种，它是和DataBox绑定的，以表格的形式呈现出DataBox中的数据。TWaver HTML5中表格能承载万级别的数据，它采用了一种新的机制来绘制表格，极大地提高了传统的表格性能。
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.controls.Table"></returns>
}

twaver.controls.Table.prototype = new twaver.controls.TableBase()

twaver.controls.Table.prototype.getCheckColumn = function () {
/// <summary>
/// 	获取表格上勾选的列，表格上自带了勾选的列，默认是隐藏的
/// </summary>
/// <returns type="twaver.Column">勾选的列对象</returns>
}

twaver.controls.Table.prototype.getColumnLineColor = function () {
/// <summary>
/// 	获取表格上每列线的颜色，默认为twaver.Defaults.TABLE_COLUMN_LINE_COLOR
/// </summary>
/// <returns type="String">每列线的颜色</returns>
}

twaver.controls.Table.prototype.getColumnLineWidth = function () {
/// <summary>
/// 	获取表格上每列线的宽度，默认为twaver.Defaults.TABLE_COLUMN_LINE_WIDTH
/// </summary>
/// <returns type="Number">列的线宽</returns>
}

twaver.controls.Table.prototype.getRowHeight = function () {
/// <summary>
/// 	获取表格的行高，默认为twaver.Defaults.TABLE_ROW_HEIGHT
/// </summary>
/// <returns type="Number">表格的行高</returns>
}

twaver.controls.Table.prototype.getRowLineColor = function () {
/// <summary>
/// 	获取表格上每行线的颜色，默认为twaver.Defaults.TABLE_ROW_LINE_COLOR
/// </summary>
/// <returns type="String">每行线的颜色</returns>
}

twaver.controls.Table.prototype.getRowLineWidth = function () {
/// <summary>
/// 	获取表格上每行线的宽度，默认为twaver.Defaults.TABLE_ROW_LINE_WIDTH
/// </summary>
/// <returns type="Number">每行的线宽</returns>
}

twaver.controls.Table.prototype.getSortColumn = function () {
/// <summary>
/// 	获取表格上排序的列
/// </summary>
/// <returns type="twaver.Column">排序的列</returns>
}

twaver.controls.Table.prototype.getSortFunction = function () {
/// <summary>
/// 	获取表格上排序的函数
/// </summary>
/// <returns type="Function">表格上排序的函数</returns>
}

twaver.controls.Table.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取表格上是否可见的过滤器，用于过滤哪些网元可见，哪些不可见
/// </summary>
/// <returns type="Function">是否可见的过滤器</returns>
/// <example>
/// 	table.setVisibleFunction(function (element) {
/// 	     return element instanceof twaver.Node;
/// 	});
/// </example>
}

twaver.controls.Table.prototype.isCheckMode = function () {
/// <summary>
/// 	判断表格是否带勾选的功能
/// </summary>
/// <returns type="Boolean">true为可勾选，否则为false</returns>
}

twaver.controls.Table.prototype.isEditable = function () {
/// <summary>
/// 	判断表格是否可编辑，默认为twaver.Defaults.TABLE_EDITABLE
/// </summary>
/// <returns type="Boolean">true为可编辑，否则为false</returns>
}

twaver.controls.Table.prototype.isKeyboardRemoveEnabled = function () {
/// <summary>
/// 	判断表格上是否支持键盘删除数据，默认为
/// 	twaver.Defaults.TABLE_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <returns type="Boolean">是否支持键盘删除，true为可以删除，否则为false</returns>
}

twaver.controls.Table.prototype.isKeyboardSelectEnabled = function () {
/// <summary>
/// 	判断表格上是否支持键盘选择数据，默认为
/// 	twaver.Defaults.TABLE_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <returns type="Boolean">true为可以使用键盘来选择数据，否则为false</returns>
}

twaver.controls.Table.prototype.isMakeVisibleOnSelected = function () {
/// <summary>
/// 	判断当选中某条数据时，是否让其处于表格上可见的区域，默认为：twaver.Defaults.TABLE_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.controls.Table.prototype.renderCheckCell = function (params) {
/// <summary>
/// 	渲染勾选那一列的单元格
/// </summary>
/// <param name="params" type="Object">它是一个带view，selected，div，data属性的对象</param>
}

twaver.controls.Table.prototype.setCheckMode = function (value) {
/// <summary>
/// 	设置表格是否可勾选，如果为true，那么就会在表格的第一列加上勾选列
/// </summary>
/// <param name="value" type="Boolean">true为可勾选，否则为false</param>
}

twaver.controls.Table.prototype.setColumnLineColor = function (v) {
/// <summary>
/// 	设置表格上每列线的颜色，默认为twaver.Defaults.TABLE_COLUMN_LINE_COLOR
/// </summary>
/// <param name="v" type="String">每列线的颜色</param>
}

twaver.controls.Table.prototype.setColumnLineWidth = function (v) {
/// <summary>
/// 	设置表格上每列线的宽度，默认为twaver.Defaults.TABLE_COLUMN_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">每列的线宽</param>
}

twaver.controls.Table.prototype.setEditable = function (v) {
/// <summary>
/// 	设置表格是否可编辑，默认为twaver.Defaults.TABLE_EDITABLE
/// </summary>
/// <param name="v" type="Boolean">true为可编辑，否则为false</param>
}

twaver.controls.Table.prototype.setKeyboardRemoveEnabled = function (v) {
/// <summary>
/// 	设置表格上是否支持键盘删除数据，默认为
/// 	twaver.Defaults.TABLE_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <param name="v" type="Boolean">是否支持键盘删除，true为可以删除，否则为false</param>
}

twaver.controls.Table.prototype.setKeyboardSelectEnabled = function (v) {
/// <summary>
/// 	设置表格上是否支持键盘选择数据，默认为
/// 	twaver.Defaults.TABLE_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为可以使用键盘来选择数据，否则为false</param>
}

twaver.controls.Table.prototype.setMakeVisibleOnSelected = function (v) {
/// <summary>
/// 	设置当选中某条数据时，是否让其处于表格上可见的区域，默认为：twaver.Defaults.TABLE_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.controls.Table.prototype.setRowHeight = function (v) {
/// <summary>
/// 	设置表格的行高，默认为twaver.Defaults.TABLE_ROW_HEIGHT
/// </summary>
/// <param name="v" type="Number">表格的行高</param>
}

twaver.controls.Table.prototype.setRowLineColor = function (v) {
/// <summary>
/// 	设置表格上每行线的颜色，默认为twaver.Defaults.TABLE_ROW_LINE_COLOR
/// </summary>
/// <param name="v" type="String">每行线的颜色</param>
}

twaver.controls.Table.prototype.setRowLineWidth = function (v) {
/// <summary>
/// 	设置表格上每行线的宽度，默认为twaver.Defaults.TABLE_ROW_LINE_WIDTH
/// </summary>
/// <param name="v" type="String">每行的线宽</param>
}

twaver.controls.Table.prototype.setSortColumn = function (v) {
/// <summary>
/// 	设置让表格上指定的列排序
/// </summary>
/// <param name="v" type="twaver.Column">指定排序的列</param>
}

twaver.controls.Table.prototype.setSortFunction = function (v) {
/// <summary>
/// 	设置表格上排序的函数
/// </summary>
/// <param name="v" type="Function">排序的函数</param>
/// <example>
/// 	this.table.setSortFunction(function (node1, node2) {
/// 		var name1 = node1.getClient("STATE_NAME");
/// 		var name2 = node2.getClient("STATE_NAME");
/// 		if (name1 > name2) {
/// 		    return 1;
/// 		} else if (name1 == name2) {
/// 		    return 0;
/// 		} else {
/// 		    return -1;
/// 		}
/// 	    };
/// 	);
/// 	
/// </example>
}

twaver.controls.Table.prototype.setVisibleFunction = function (v) {
/// <summary>
/// 	设置表格上是否可见的过滤器，用于过滤哪些网元可见，哪些不可见
/// </summary>
/// <param name="v" type="Function">是否可见的过滤器</param>
/// <example>
/// 	table.setVisibleFunction(function (element) {
/// 	     return element instanceof twaver.Node;
/// 	});
/// </example>
}


twaver.controls.TreeTable = function (dataBox) {
/// <summary>
/// 	TreeTable是结合了Tree和Table特性的一种视图组件，它既有树的展开、合并功能，也有表格那种能呈现多列数据的功能。
/// 	TreeTable是和数据容器一起工作的，它以图形的方式显示数据容器中的数据
/// </summary>
/// <param name="dataBox" type="twaver.DataBox">绑定的数据容器</param>
/// <returns type="twaver.controls.TreeTable"></returns>
}

twaver.controls.TreeTable.prototype = new twaver.controls.TableBase()

twaver.controls.TreeTable.prototype.collapse = function (data) {
/// <summary>
/// 	合并指定的节点
/// </summary>
/// <param name="data" type="twaver.Data">指定的节点数据</param>
}

twaver.controls.TreeTable.prototype.collapseAll = function () {
/// <summary>
/// 	合并所有的树节点对象，调用这个方法后，所有的孩子都会处于合并状态
/// </summary>
}

twaver.controls.TreeTable.prototype.expand = function (data) {
/// <summary>
/// 	展开指定的树节点对象
/// </summary>
/// <param name="data" type="twaver.Data">指定的树节点的数据</param>
}

twaver.controls.TreeTable.prototype.expandAll = function () {
/// <summary>
/// 	展开所有的树节点对象，调用这个方法后，所有的孩子都会处于打开状态
/// </summary>
}

twaver.controls.TreeTable.prototype.getCheckMode = function () {
/// <summary>
/// 	获取TreeTable的勾选方式。勾选方式的可选值有：
/// 	'default'：默认
/// 	'children':勾选父亲时，会将孩子也勾选上
/// 	'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
/// 	'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
/// </summary>
/// <returns type="String">TreeTable的勾选模式</returns>
}

twaver.controls.TreeTable.prototype.getCollapseIcon = function () {
/// <summary>
/// 	获取TreeTable节点合并的图标，默认为twaver.Defaults.TREETABLE_COLLAPSE_ICON
/// </summary>
/// <returns type="String">TreeTable节点合并的图标</returns>
}

twaver.controls.TreeTable.prototype.getColumnLineColor = function () {
/// <summary>
/// 	获取TreeTable中每列的线的颜色，默认为
/// 	twaver.Defaults.TREETABLE_COLUMN_LINE_COLOR
/// </summary>
/// <returns type="String">每列线的颜色</returns>
}

twaver.controls.TreeTable.prototype.getColumnLineWidth = function () {
/// <summary>
/// 	获取TreeTable上每列线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
/// </summary>
/// <returns type="Number">列的线宽</returns>
}

twaver.controls.TreeTable.prototype.getExpandIcon = function () {
/// <summary>
/// 	获取TreeTable展开的图标，默认为twaver.Defaults.TREETABLE_EXPAND_ICON
/// </summary>
/// <returns type="String">TreeTable展开的图标</returns>
}

twaver.controls.TreeTable.prototype.getIndent = function () {
/// <summary>
/// 	获取TreeTable上父亲和孩子之间的缩进，默认为twaver.Defaults.TREETABLE_INDENT
/// </summary>
/// <returns type="Number">树节点的缩进</returns>
}

twaver.controls.TreeTable.prototype.getLevel = function (data) {
/// <summary>
/// 	获取指定的节点数据所在的层次
/// </summary>
/// <param name="data" type="twaver.Data">指定的节点数据</param>
/// <returns type="Number">节点的层次数</returns>
}

twaver.controls.TreeTable.prototype.getRootData = function () {
/// <summary>
/// 	获取根节点数据
/// </summary>
/// <returns type="twaver.Data">TreeTable的根节点</returns>
}

twaver.controls.TreeTable.prototype.getRowHeight = function () {
/// <summary>
/// 	获取TreeTable的行高，默认为twaver.Defaults.TREETABLE_ROW_HEIGHT
/// </summary>
/// <returns type="Number">TreeTable的行高</returns>
}

twaver.controls.TreeTable.prototype.getRowLineColor = function () {
/// <summary>
/// 	获取TreeTable上行之间线的颜色，默认为twaver.Defaults.TREETABLE_ROW_LINE_COLOR
/// </summary>
/// <returns type="String">TreeTable上行之间线的颜色</returns>
}

twaver.controls.TreeTable.prototype.getRowLineWidth = function () {
/// <summary>
/// 	获取TreeTable上行之间线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
/// </summary>
/// <returns type="Number">TreeTable上行之间线的宽度</returns>
}

twaver.controls.TreeTable.prototype.getSortColumn = function () {
/// <summary>
/// 	获取TreeTable上排序的列
/// </summary>
/// <returns type="twaver.Column">排序的列</returns>
}

twaver.controls.TreeTable.prototype.getSortFunction = function () {
/// <summary>
/// 	获取TreeTable上排序的函数
/// </summary>
/// <returns type="Function">排序的函数</returns>
}

twaver.controls.TreeTable.prototype.getToggleImage = function (data) {
/// <summary>
/// 	获取指定数据当前显示的图标，如果指定的数据是处于合并状态，就返回合并时的图标；如果是展开状态，返回的是展开的图标
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="String">TreeTable上指定的节点当前显示的图标</returns>
}

twaver.controls.TreeTable.prototype.getTreeColumn = function () {
/// <summary>
/// 	获取TreeTable上树的那一列
/// </summary>
/// <returns type="twaver.Column">包含树的那一列</returns>
}

twaver.controls.TreeTable.prototype.getTreeValue = function (data, table) {
/// <summary>
/// 	获取指定的数据在TreeTable上显示的标签值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="table" type="twaver.controls.Table">TreeTable上的表格</param>
/// <returns type="String">标签值</returns>
}

twaver.controls.TreeTable.prototype.getUncheckableStyle = function () {
/// <summary>
/// 	获取TreeTable的树节点不可勾选时的样式，默认为'none'。可选值有：
/// 	'none'：没有任何样式
/// 	'disabled':不可用
/// </summary>
/// <returns type="String">树节点不可勾选时的样式</returns>
}

twaver.controls.TreeTable.prototype.getVisibleFunction = function () {
/// <summary>
/// 	获取TreeTable上是否可见的过滤器，用于过滤哪些网元可见，哪些不可见
/// </summary>
/// <returns type="Function">是否可见的过滤器</returns>
}

twaver.controls.TreeTable.prototype.isCheckable = function (data) {
/// <summary>
/// 	获取指定的数据是否可勾选
/// </summary>
/// <param name="data" type="twaver.Data">指定的节点对象</param>
/// <returns type="Boolean">是否可勾选，true为可勾选，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isCheckMode = function () {
/// <summary>
/// 	是否为勾选模型
/// </summary>
/// <returns type="Boolean">true为勾选模型，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isChildrenSortable = function (parent) {
/// <summary>
/// 	判断指定的节点数据下的孩子是否可以排序。默认实现为可排序，用户可以重写此方法实现自己的逻辑
/// </summary>
/// <param name="parent" type="twaver.Data">指定的数据</param>
/// <returns type="Boolean">true为可排序，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isEditable = function () {
/// <summary>
/// 	判断树表是否可编辑，默认为twaver.Defaults.TREETABLE_EDITABLE
/// </summary>
/// <returns type="Boolean">true为可编辑，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isExpanded = function (data) {
/// <summary>
/// 	判断指定的TreeTable上的节点是否处于展开状态
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <returns type="Boolean">true为展开状态，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isKeyboardRemoveEnabled = function () {
/// <summary>
/// 	判断TreeTable上是否支持键盘删除数据的操作，默认为 twaver.Defaults.TREETABLE_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <returns type="Boolean">true为支持键盘删除，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isKeyboardSelectEnabled = function () {
/// <summary>
/// 	判断TreeTable上是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <returns type="Boolean">true为可以键盘选择节点，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isMakeVisibleOnSelected = function () {
/// <summary>
/// 	判断当选中TreeTable中某个节点时，是否让其处于可见区域，默认为twaver.Defaults.TREETABLE_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <returns type="Boolean">true为处于可见区域，否则为false</returns>
}

twaver.controls.TreeTable.prototype.isRootVisible = function () {
/// <summary>
/// 	判断TreeTable的根节点是否可见
/// </summary>
/// <returns type="Boolean">true为可见，否则为false</returns>
}

twaver.controls.TreeTable.prototype.onLabelRendered = function (span, data, label, row, level, selected) {
/// <summary>
/// 	当渲染TreeTable上的标签时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
/// </summary>
/// <param name="span" type="HTMLSpanElement">包含数据元标签的Span</param>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="label" type="String">显示的标签值</param>
/// <param name="row" type="Number">指定的行号</param>
/// <param name="level" type="Number">指定数据的层次数</param>
/// <param name="selected" type="Boolean">是否为选中状态</param>
}

twaver.controls.TreeTable.prototype.renderTreeCell = function (params) {
/// <summary>
/// 	渲染树这一列的单元格显示样式
/// 	
/// </summary>
/// <param name="params" type="Object">参数的格式为 {div：div, data:data, rowIndex:index, selected:selected}的对象</param>
}

twaver.controls.TreeTable.prototype.setCheckMode = function (v) {
/// <summary>
/// 	设置TreeTable的勾选方式。勾选方式的可选值有：
/// 	'default'：默认
/// 	'children':勾选父亲时，会将孩子也勾选上
/// 	'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
/// 	'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
/// </summary>
/// <param name="v" type="String">TreeTable的勾选模式</param>
}

twaver.controls.TreeTable.prototype.setCollapseIcon = function (v) {
/// <summary>
/// 	设置TreeTable节点合并的图标，默认为twaver.Defaults.TREETABLE_COLLAPSE_ICON
/// </summary>
/// <param name="v" type="String">TreeTable节点合并的图标</param>
}

twaver.controls.TreeTable.prototype.setColumnLineColor = function (v) {
/// <summary>
/// 	设置TreeTable中每列的线的颜色，默认为
/// 	twaver.Defaults.TREETABLE_COLUMN_LINE_COLOR
/// </summary>
/// <param name="v" type="String">每列线的颜色</param>
}

twaver.controls.TreeTable.prototype.setColumnLineWidth = function (v) {
/// <summary>
/// 	获取TreeTable上每列线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">列的线宽</param>
}

twaver.controls.TreeTable.prototype.setEditable = function (v) {
/// <summary>
/// 	设置树表是否可编辑，默认为twaver.Defaults.TREETABLE_EDITABLE
/// </summary>
/// <param name="v" type="Boolean">true为可编辑，否则为false</param>
}

twaver.controls.TreeTable.prototype.setExpandIcon = function (v) {
/// <summary>
/// 	设置TreeTable展开的图标，默认为twaver.Defaults.TREETABLE_EXPAND_ICON
/// </summary>
/// <param name="v" type="String">TreeTable展开的图标</param>
}

twaver.controls.TreeTable.prototype.setIndent = function (v) {
/// <summary>
/// 	设置TreeTable上父亲和孩子之间的缩进，默认为twaver.Defaults.TREETABLE_INDENT
/// </summary>
/// <param name="v" type="Number">树节点的缩进</param>
}

twaver.controls.TreeTable.prototype.setKeyboardRemoveEnabled = function (v) {
/// <summary>
/// 	设置TreeTable上是否支持键盘删除数据的操作，默认为 twaver.Defaults.TREETABLE_KEYBOARD_REMOVE_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为支持键盘删除，否则为false</param>
}

twaver.controls.TreeTable.prototype.setKeyboardSelectEnabled = function (v) {
/// <summary>
/// 	设置TreeTable上是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
/// </summary>
/// <param name="v" type="Boolean">true为可以键盘选择节点，否则为false</param>
}

twaver.controls.TreeTable.prototype.setMakeVisibleOnSelected = function (v) {
/// <summary>
/// 	设置当选中TreeTable中某个节点时，是否让其处于可见区域，默认为twaver.Defaults.TREETABLE_MAKE_VISIBLE_ON_SELECTED
/// </summary>
/// <param name="v" type="Boolean">true为处于可见区域，否则为false</param>
}

twaver.controls.TreeTable.prototype.setRootData = function (v) {
/// <summary>
/// 	设置根节点数据
/// </summary>
/// <param name="v" type="twaver.Data">TreeTable的根节点</param>
}

twaver.controls.TreeTable.prototype.setRootVisible = function (v) {
/// <summary>
/// 	设置TreeTable的根节点是否可见
/// </summary>
/// <param name="v" type="Boolean">true为可见，否则为false</param>
}

twaver.controls.TreeTable.prototype.setRowHeight = function (v) {
/// <summary>
/// 	设置TreeTable的行高，默认为twaver.Defaults.TREETABLE_ROW_HEIGHT
/// </summary>
/// <param name="v" type="Number">TreeTable的行高</param>
}

twaver.controls.TreeTable.prototype.setRowLineColor = function (v) {
/// <summary>
/// 	设置TreeTable上行之间线的颜色，默认为twaver.Defaults.TREETABLE_ROW_LINE_COLOR
/// </summary>
/// <param name="v" type="String">TreeTable上行之间线的颜色</param>
}

twaver.controls.TreeTable.prototype.setRowLineWidth = function (v) {
/// <summary>
/// 	设置TreeTable上行之间线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
/// </summary>
/// <param name="v" type="Number">TreeTable上行之间线的宽度</param>
}

twaver.controls.TreeTable.prototype.setSortColumn = function (v) {
/// <summary>
/// 	设置TreeTable上排序的列
/// </summary>
/// <param name="v" type="twaver.Column">排序的列</param>
}

twaver.controls.TreeTable.prototype.setSortFunction = function (v) {
/// <summary>
/// 	设置TreeTable排序的函数
/// </summary>
/// <param name="v" type="Function">排序的函数</param>
/// <example>
/// 	treetable.setSortFunction(function (d1, d2) {
/// 	         if (d1.getName() < d2.getName()) {
/// 	             return 1;
/// 	         } else if (d1.getName() == d2.getName()) {
/// 	              return 0;
/// 	         } else {
/// 	              return -1;
/// 	         }
/// 	});
/// </example>
}

twaver.controls.TreeTable.prototype.setTreeValue = function (data, value, table) {
/// <summary>
/// 	设置指定的数据在TreeTable上显示的标签值
/// </summary>
/// <param name="data" type="twaver.Data">指定的数据</param>
/// <param name="value" type="String">显示的标签值</param>
/// <param name="table" type="twaver.controls.Table">TreeTable包含的表格</param>
}

twaver.controls.TreeTable.prototype.setUncheckableStyle = function (v) {
/// <summary>
/// 	设置TreeTable的树节点不可勾选时的样式，默认为'none'。可选值有：
/// 	'none'：没有任何样式
/// 	'disabled':不可用
/// </summary>
/// <param name="v" type="String">树节点不可勾选时的样式</param>
}

twaver.controls.TreeTable.prototype.setVisibleFunction = function (v) {
/// <summary>
/// 	设置TreeTable上的节点是否可见的过滤器
/// </summary>
/// <param name="v" type="Function">是否可见的过滤器</param>
/// <example>
/// 	tree.setVisibleFunction(function (element) {
/// 	     return element instanceof twaver.Node;
/// 	});
/// </example>
}


twaver.ShapeSubNetwork = function (id) {
/// <summary>
/// 	多边形子网是一种子网网元，它是有一系列的点组成的多边形形状的子网。它继承于ShapeNode，和ShapeNode的区别在于它可以双击进入/退出下一层
/// </summary>
/// <param name="id" type="Object">多边形子网ID，用于唯一标识这个多边形子网对象。如果为空，TWaver会按照默认的规则给多边形子网ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是多边形子网的ID，如果为Object类型，可以传入一个带多边形子网属性的对象，比如： var shapeSubNetwork = new twaver.ShapeSubNetwork({  name:'TWaver Router',      styles:{'lable.yoffset':-75} });</param>
/// <returns type="twaver.ShapeSubNetwork"></returns>
}

twaver.ShapeSubNetwork.prototype = new twaver.ShapeNode()

twaver.ShapeSubNetwork.prototype.ISubNetwork = function () {
/// <field type="Boolean">是否为子网的标志</field>
}

