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


/**
 * 这个类定义了告警网元之间的映射关系。一般告警和网元是一对一的关系，但有时如果想要达到一对多或多对一的关系时，就需要使用这个类来定义。一旦定义了告警和网元的关系后，当告警发生时，所有符合条件的网元上都会产生告警。
 * 想要更详细的了解告警网元映射这个类的使用，可以参考TWaver HTML5的Alarm Mapping Demo
 * 
 * @class twaver.AlarmElementMapping
 * @constructor
 * @param {twaver.AlarmBox} alarmBox 告警容器的对象
 * @param {twaver.ElementBox} elementBox 网元容器对象
 * @return {twaver.AlarmElementMapping} 告警网元映射对象本身
 */
twaver.AlarmElementMapping = function (alarmBox, elementBox) {}

/**
 * 释放告警网元映射中的所有资源，包括告警容器，网元容器等
 * @method twaver.AlarmElementMapping.dispose
 */
twaver.AlarmElementMapping.prototype.dispose = function () {}

/**
 * 获取类的名称
 * @method twaver.AlarmElementMapping.getClassName
 * @return {String} 类名
 */
twaver.AlarmElementMapping.prototype.getClassName = function () {}

/**
 * 通过网元获取相关联的告警对象
 * @method twaver.AlarmElementMapping.getCorrespondingAlarms
 * @param {twaver.Element} element 网元对象
 * @return {twaver.List} 告警对象集合
 */
twaver.AlarmElementMapping.prototype.getCorrespondingAlarms = function (element) {}

/**
 * 通过告警获取发生这个告警的网元对象
 * @method twaver.AlarmElementMapping.getCorrespondingElements
 * @param {twaver.Alarm} alarm 告警对象
 * @return {twaver.List} 发生告警的网元对象集合
 */
twaver.AlarmElementMapping.prototype.getCorrespondingElements = function (alarm) {}


/**
 * 这个类定义了电信拓扑中所有的告警级别。在TWaver中，当发生一个告警时，需要附带着告警的级别。告警级别的等级预示着告警的严重性。TWaver在这个类中预定义了六种告警级别，用户可以直接使用，也可以添加自己的告警级别。
 * 每一种告警级别都有一个昵称，通常昵称是用一个简短的字母来表示，用于显示在告警冒泡中。每种告警级别还定义了告警颜色，用户可以更改默认告警级别的颜色。一旦告警级别的颜色发生改变时，所有显示这种告警的视图都会随之更改
 * @class twaver.AlarmSeverity
 * @constructor
 * @param {String} value 告警级别的值，值越大，告警级别越高
 * @param {String} name 告警级别的名称
 * @param {String} nickName 告警级别的昵称，用于显示在告警冒泡中
 * @param {String} color 告警级别的颜色
 * @param {String} [displayName] 告警级别显示的名称
 * @return {twaver.AlarmSeverity} 告警级别对象本身
 */
twaver.AlarmSeverity = function (value, name, nickName, color, displayName) {}

/**
 * 添加一个告警级别
 * @method twaver.AlarmSeverity.add
 * @param {Number} value 告警级别的值，值越大，告警级别越高
 * @param {String} name 告警级别的名称
 * @param {String} nickName 告警级别的昵称，用于显示在告警冒泡中
 * @param {String} color 告警级别的颜色
 * @param {String} [displayName] 告警级别显示的名称
 * @return {twaver.AlarmSeverity} 告警级别对象本身
 * @static
 */
twaver.AlarmSeverity.add = function (value, name, nickName, color, displayName) {}

/**
 * 清除所有的告警级别
 * @method twaver.AlarmSeverity.clear
 * @static
 */
twaver.AlarmSeverity.clear = function () {}

/**
 * 清除告警:告警级别中的一种，告警级别的值为0，默认是最低的告警级别
 * @property CLEARED
 * @type twaver.AlarmSeverity
 * @static
 */
twaver.AlarmSeverity.CLEARED = function () {}

/**
 * 比较两种指定的告警级别的值:如果告警级别1大于告警级别2，返回1；如果告警级别1小于告警级别2，返回-1；如果相等，返回0
 * @method twaver.AlarmSeverity.compare
 * @param {twaver.AlarmSeverity} severity1 
 * @param {twaver.AlarmSeverity} severity2 
 * @return {Number} 如果告警级别1大于告警级别2，返回1；如果告警级别1小于告警级别2，返回-1；如果相等，返回0
 * @static
 */
twaver.AlarmSeverity.compare = function (severity1, severity2) {}

/**
 * 严重告警。告警级别中的一种，告警级别的值为500，默认是最高的告警级别
 * @property CRITICAL
 * @type twaver.AlarmSeverity
 * @static
 */
twaver.AlarmSeverity.CRITICAL = function () {}

/**
 * 覆盖所有的告警级别
 * @method twaver.AlarmSeverity.forEach
 * @param {Function} callbackFunction 回调函数
 * @param {Object} [scope] 回调函数的作用域，为空时指的是window
 * @static
 */
twaver.AlarmSeverity.forEach = function (callbackFunction, scope) {}

/**
 * 通过告警级别的名称获取告警级别
 * @method twaver.AlarmSeverity.getByName
 * @param {String} name 告警级别的名称
 * @return {twaver.AlarmSeverity} 告警级别对象
 * @static
 */
twaver.AlarmSeverity.getByName = function (name) {}

/**
 * 通过告警级别的值获取告警级别。
 * 告警级别的值越大，告警级别越高。告警级别的值是不可以重复的
 * @method twaver.AlarmSeverity.getByValue
 * @param {Number} value 告警级别的值
 * @return {twaver.AlarmSeverity} 告警级别对象
 * @static
 */
twaver.AlarmSeverity.getByValue = function (value) {}

/**
 * 获取排序的函数。默认是按照告警级别的值来排序的
 * @method twaver.AlarmSeverity.getSortFunction
 * @return {Function} 告警级别排序的函数
 * @static
 */
twaver.AlarmSeverity.getSortFunction = function () {}

/**
 * 不确定告警。告警级别的值为100
 * @property INDETERMINATE
 * @type twaver.AlarmSeverity
 * @static
 */
twaver.AlarmSeverity.INDETERMINATE = function () {}

/**
 * 判断是否是清除告警
 * @method twaver.AlarmSeverity.isClearedAlarmSeverity
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @return {Boolean} true为清除告警，否则为false
 * @static
 */
twaver.AlarmSeverity.isClearedAlarmSeverity = function (severity) {}

/**
 * 主要告警。告警级别的值为400
 * @property MAJOR
 * @type twaver.AlarmSeverity
 * @static
 */
twaver.AlarmSeverity.MAJOR = function () {}

/**
 * 次要告警。告警级别的值为300
 * @property MINOR
 * @type twaver.AlarmSeverity
 * @static
 */
twaver.AlarmSeverity.MINOR = function () {}

/**
 * 获取类名
 * @method twaver.AlarmSeverity.getClassName
 * @return {String} 类名
 */
twaver.AlarmSeverity.prototype.getClassName = function () {}

/**
 * 删除一个告警级别
 * @method twaver.AlarmSeverity.remove
 * @param {String} name 告警级别的名称
 * @return {twaver.AlarmSeverity} 删除了的告警级别对象
 * @static
 */
twaver.AlarmSeverity.remove = function (name) {}

/**
 * 设置排序的函数。默认是按照告警级别的值来排序的
 * @method twaver.AlarmSeverity.setSortFunction
 * @param {Function} sortFunction 告警级别排序的函数
 * @static
 */
twaver.AlarmSeverity.setSortFunction = function (sortFunction) {}

/**
 * 所有的告警级别
 * @property severities
 * @type twaver.List
 * @static
 */
twaver.AlarmSeverity.severities = function () {}

/**
 * 警告告警。告警级别的值为200
 * @property WARNING
 * @type twaver.AlarmSeverity
 * @static
 */
twaver.AlarmSeverity.WARNING = function () {}


/**
 * 该类是用于描述网元告警状态的数据模型，包含该网元上的最高告警级别，最高传递告警级别，有多少个新发告警，多个确认告警等信息。
 * 在TWaver，如果想添加告警，可以通过在AlarmBox中添加一个Alarm或者可以在AlarmState上添加告警。两者都会达到添加告警的效果，但是需要注意的是使用Alarm对象会更改并存储关于告警的信息，而AlarmState上只是存储了告警的级别和数量。
 * 一般AlarmState用于存储已发生的历史告警。
 * @class twaver.AlarmState
 * @constructor
 * @param {twaver.Element} element 发生告警的网元对象
 * @return {twaver.AlarmState} 告警级别对象本身
 */
twaver.AlarmState = function (element) {}

/**
 * 确认某个告警级别的一个告警，调用这个方法后，网元上的新发告警数量会减一，确认告警的数量会加一
 * @method twaver.AlarmState.acknowledgeAlarm
 * @param {twaver.AlarmSeverity} severity 告警级别
 */
twaver.AlarmState.prototype.acknowledgeAlarm = function (severity) {}

/**
 * 确认网元上某个告警级别的所有告警，调用这个方法后，网元上这种告警级别的所有新发告警数量都增加到确认告警的数量上，新发告警的数量则变为零
 * @method twaver.AlarmState.acknowledgeAllAlarms
 * @param {twaver.AlarmSeverity} severity 告警级别
 */
twaver.AlarmState.prototype.acknowledgeAllAlarms = function (severity) {}

/**
 * 清除所有的告警状态
 * @method twaver.AlarmState.clear
 */
twaver.AlarmState.prototype.clear = function () {}

/**
 * 减少指定告警级别的确认告警的数量
 * @method twaver.AlarmState.decreaseAcknowledgedAlarm
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @param {Number} [decrement] 减少了的确认告警的数量，为空时数量为1
 */
twaver.AlarmState.prototype.decreaseAcknowledgedAlarm = function (severity, decrement) {}

/**
 * 减少指定告警级别的新发告警的数量
 * @method twaver.AlarmState.decreaseNewAlarm
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @param {Number} [decrement] 减少的新发告警的数量，为空时数量为1
 */
twaver.AlarmState.prototype.decreaseNewAlarm = function (severity, decrement) {}

/**
 * 获取指定级别的确认告警的数量
 * @method twaver.AlarmState.getAcknowledgedAlarmCount
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @return {Number} 指定级别的确认告警的数量
 */
twaver.AlarmState.prototype.getAcknowledgedAlarmCount = function (severity) {}

/**
 * 获取指定告警级别的数量，包括新发告警和确认告警
 * @method twaver.AlarmState.getAlarmCount
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @return {Number} 告警级别的数量
 */
twaver.AlarmState.prototype.getAlarmCount = function (severity) {}

/**
 * 获取告警状态类的名称
 * @method twaver.AlarmState.getClassName
 * @return {String} 类名
 */
twaver.AlarmState.prototype.getClassName = function () {}

/**
 * 获取最高级别的确认告警
 * @method twaver.AlarmState.getHighestAcknowledgedAlarmSeverity
 * @return {twaver.AlarmSeverity} 告警级别
 */
twaver.AlarmState.prototype.getHighestAcknowledgedAlarmSeverity = function () {}

/**
 * 获取本地告警中最高级别的告警，包括新发告警和确认告警
 * @method twaver.AlarmState.getHighestNativeAlarmSeverity
 * @return {twaver.AlarmSeverity} 最高级别的告警
 */
twaver.AlarmState.prototype.getHighestNativeAlarmSeverity = function () {}

/**
 * 获取最高级别的新发告警
 * @method twaver.AlarmState.getHighestNewAlarmSeverity
 * @return {twaver.AlarmSeverity} 告警级别
 */
twaver.AlarmState.prototype.getHighestNewAlarmSeverity = function () {}

/**
 * 获取最高级别的告警。包括新发告警，确认告警和传递告警之间的比较
 * @method twaver.AlarmState.getHighestOverallAlarmSeverity
 * @return {twaver.AlarmSeverity} 告警级别
 */
twaver.AlarmState.prototype.getHighestOverallAlarmSeverity = function () {}

/**
 * 获取指定告警级别新发告警的数量
 * @method twaver.AlarmState.getNewAlarmCount
 * @param {twaver.AlarmSeverity} [severity] 告警级别，为空时获取的是所有的告警级别
 * @return {Number} 告警级别的数量
 */
twaver.AlarmState.prototype.getNewAlarmCount = function (severity) {}

/**
 * 获取传播告警的级别。网元上的传播告警级别默认是取的孩子上的最高告警级别
 * @method twaver.AlarmState.getPropagateSeverity
 * @return {twaver.AlarmSeverity} 传播告警的级别
 */
twaver.AlarmState.prototype.getPropagateSeverity = function () {}

/**
 * 是否显示告警级别较低的新发告警:TWaver是对最高级别的新发告警的网元进行渲染。如果返回值为true，告警冒泡中将会在文本最后显示"+"，来表示还有更多的告警级别较低的新发告警
 * @method twaver.AlarmState.hasLessSevereNewAlarms
 * @return {Boolean} 如果返回值为true，告警冒泡中将会在文本最后显示"+"，表示还有更多的告警级别较低的新发告警。返回flase，告警冒泡中只显示最高级别的告警信息
 */
twaver.AlarmState.prototype.hasLessSevereNewAlarms = function () {}

/**
 * 增加指定告警级别的确认告警的数量
 * @method twaver.AlarmState.increaseAcknowledgedAlarm
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @param {Number} increment 告警级别增加的数量
 */
twaver.AlarmState.prototype.increaseAcknowledgedAlarm = function (severity, increment) {}

/**
 * 增加指定告警级别的新发告警的数量
 * @method twaver.AlarmState.increaseNewAlarm
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @param {Number} [increment] 增加的新发告警的数量，为空时数量为1
 */
twaver.AlarmState.prototype.increaseNewAlarm = function (severity, increment) {}

/**
 * 判断告警状态是否为空，为空代表没有任何告警
 * @method twaver.AlarmState.isEmpty
 * @return {Boolean} true为没有任何告警，否则为false
 */
twaver.AlarmState.prototype.isEmpty = function () {}

/**
 * 是否允许传播告警
 * @method twaver.AlarmState.isEnablePropagation
 * @return {Boolean} 如果孩子的告警可以传播到父亲上，返回true；否则为false
 */
twaver.AlarmState.prototype.isEnablePropagation = function () {}

/**
 * 删除指定告警级别的所有确认告警
 * @method twaver.AlarmState.removeAllAcknowledgedAlarms
 * @param {twaver.AlarmSeverity} severity 指定的告警级别
 */
twaver.AlarmState.prototype.removeAllAcknowledgedAlarms = function (severity) {}

/**
 * 删除指定告警级别的所有新发告警
 * @method twaver.AlarmState.removeAllNewAlarms
 * @param {twaver.AlarmSeverity} severity 指定的告警级别
 */
twaver.AlarmState.prototype.removeAllNewAlarms = function (severity) {}

/**
 * 设置指定级别的确认告警的数量
 * @method twaver.AlarmState.setAcknowledgedAlarmCount
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @param {Number} count 告警级别的数量
 */
twaver.AlarmState.prototype.setAcknowledgedAlarmCount = function (severity, count) {}

/**
 * 设置是否允许传播告警
 * @method twaver.AlarmState.setEnablePropagation
 * @param {Boolean} enablePropagation 如果孩子的告警可以传播到父亲上，则为true，否则为false
 */
twaver.AlarmState.prototype.setEnablePropagation = function (enablePropagation) {}

/**
 * 设置指定级别的新发告警的数量
 * @method twaver.AlarmState.setNewAlarmCount
 * @param {twaver.AlarmSeverity} severity 告警级别
 * @param {Number} count 告警级别的数量
 */
twaver.AlarmState.prototype.setNewAlarmCount = function (severity, count) {}

/**
 * 设置传播告警的级别。网元上的传播告警级别默认是取的孩子上的最高告警级别
 * @method twaver.AlarmState.setPropagateSeverity
 * @param {twaver.AlarmSeverity} propagateSeverity 传播告警级别的值
 */
twaver.AlarmState.prototype.setPropagateSeverity = function (propagateSeverity) {}


/**
 * 动画处理基类，用于渐变地改变网元位置、大小，组件的滚动条位置、缩放比例等
 * @class twaver.animate.Animate
 * @constructor
 * @return {twaver.animate.Animate}
 */
twaver.animate.Animate = function () {}

/**
 * 动画每帧执行的动作，子类重载此方法实现自定义动画效果
 * @method twaver.animate.Animate.action
 * @param {Number} rate 动画完成进度
 */
twaver.animate.Animate.prototype.action = function (rate) {}

/**
 * 当前帧索引
 * @property current
 * @type Number
 */
twaver.animate.Animate.prototype.current = function () {}

/**
 * 动画的每一帧之间等待时间，默认值为4毫秒
 * @property delay
 * @type Number
 */
twaver.animate.Animate.prototype.delay = function () {}

/**
 * 回调函数:动画结束后执行的动作
 * @property finishFunction
 * @type Function
 */
twaver.animate.Animate.prototype.finishFunction = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.animate.Animate.getClassName
 * @return {String} 返回此类的字符串类名
 */
twaver.animate.Animate.prototype.getClassName = function () {}

/**
 * 获取当前帧的延迟毫秒数，默认实现为每帧延迟毫秒数乘以当前帧索引，动画表现出由快到慢的渐变过程
 * @method twaver.animate.Animate.getCurrentDelay
 * @return {Number} 返回当前帧的延迟毫秒数
 */
twaver.animate.Animate.prototype.getCurrentDelay = function () {}

/**
 * 下一个动画是否等待当前动画结束，默认值为false
 * @property shouldBeFinished
 * @type Boolean
 */
twaver.animate.Animate.prototype.shouldBeFinished = function () {}

/**
 * 动画帧数，默认值为8
 * @property step
 * @type Number
 */
twaver.animate.Animate.prototype.step = function () {}


/**
 * 这个类是用于管理绑定链路的集合
 * @class twaver.BundleLinks
 * @constructor
 * @param {twaver.List} links 绑定链路的集合
 * @param {twaver.List} siblings 所有的兄弟链路
 * @return {twaver.BundleLinks} 绑定链路对象本身
 */
twaver.BundleLinks = function (links, siblings) {}

/**
 * 遍历所有的兄弟链路。
 * @method twaver.BundleLinks.forEachSiblingLink
 * @param {Function} f 遍历链路时的回调函数
 * @param {Object} [scope] 回调函数的作用域。为空时指的是window
 */
twaver.BundleLinks.prototype.forEachSiblingLink = function (f, scope) {}

/**
 * 获取类的名称
 * @method twaver.BundleLinks.getClassName
 * @return {String} 类名
 */
twaver.BundleLinks.prototype.getClassName = function () {}

/**
 * 获取所有绑定的链路
 * @method twaver.BundleLinks.getLinks
 * @return {twaver.List} 绑定链路的集合
 */
twaver.BundleLinks.prototype.getLinks = function () {}

/**
 * 获取所有的兄弟链路
 * @method twaver.BundleLinks.getSiblings
 * @return {twaver.List} 兄弟链路的集合
 */
twaver.BundleLinks.prototype.getSiblings = function () {}


/**
 * 所有附件的基类，附件是和网元视图关联的视图对象，用于显示网元的附属信息，例如告警、名称标签、图标等。可以定义附件是否显示在最上层，也即会遮挡网元；为了让告警信息不被其他网元遮挡，告警等附件默认显示在最上层，也即告警显示在所有网元的上面
 * @class twaver.canvas.Attachment
 * @constructor
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInTop] 附件是否显示在最上层, 可选, 默认值为false
 * @return {twaver.canvas.Attachment}
 */
twaver.canvas.Attachment = function (elementUI, showInTop) {}

/**
 * 获取附件透明度，默认值为1
 * @method twaver.canvas.Attachment.getAlpha
 * @return {String}
 */
twaver.canvas.Attachment.prototype.getAlpha = function () {}

/**
 * 获取字符串类名
 * @method twaver.canvas.Attachment.getClassName
 * @return {String} 返回类名
 */
twaver.canvas.Attachment.prototype.getClassName = function () {}

/**
 * 获取和附件关联的网元
 * @method twaver.canvas.Attachment.getElement
 * @return {twaver.Element} 返回和附件关联的网元
 */
twaver.canvas.Attachment.prototype.getElement = function () {}

/**
 * 获取和附件关联的网元视图
 * @method twaver.canvas.Attachment.getElementUI
 * @return {twaver.canvas.ElementUI} 返回和附件关联的网元视图
 */
twaver.canvas.Attachment.prototype.getElementUI = function () {}

/**
 * 获取附件的字体
 * @method twaver.canvas.Attachment.getFont
 * @param {String} styleProp 样式名称
 * @return {String} 返回附件的字体
 */
twaver.canvas.Attachment.prototype.getFont = function (styleProp) {}

/**
 * 获取和附件关联的拓扑
 * @method twaver.canvas.Attachment.getNetwork
 * @return {twaver.canvas.Network} 返回和附件关联的拓扑
 */
twaver.canvas.Attachment.prototype.getNetwork = function () {}

/**
 * 获取指定样式的值，封装了Element#getStyle方法
 * @method twaver.canvas.Attachment.getStyle
 * @param {String} styleProp 样式名称
 * @return {Object} 返回指定样式的值
 */
twaver.canvas.Attachment.prototype.getStyle = function (styleProp) {}

/**
 * 获取附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
 * @method twaver.canvas.Attachment.getViewRect
 * @return {Object} 返回附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.Attachment.prototype.getViewRect = function () {}

/**
 * 命中测试，判断点击指定坐标点是否能选中附件
 * @method twaver.canvas.Attachment.hit
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 如果点击指定坐标能选中附件，则返回true，否者返回false
 */
twaver.canvas.Attachment.prototype.hit = function (x, y) {}

/**
 * 命中测试，判断附件是否包含指定区域
 * @method twaver.canvas.Attachment.hitCanvasRect
 * @param {Object} rect 区域
 * @return {Boolean} 返回附件是否包含指定区域
 */
twaver.canvas.Attachment.prototype.hitCanvasRect = function (rect) {}

/**
 * 获取附件是否显示在最上层
 * @method twaver.canvas.Attachment.isShowOnTop
 * @return {Boolean} 返回附件是否显示在最上层
 */
twaver.canvas.Attachment.prototype.isShowOnTop = function () {}

/**
 * 绘制附件, 子类重载此方法绘制子类自己
 * @method twaver.canvas.Attachment.paint
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.Attachment.prototype.paint = function (ctx) {}

/**
 * 设置附件是否显示在最上层
 * @method twaver.canvas.Attachment.setShowOnTop
 * @param {Boolean} t 附件是否显示在最上层
 */
twaver.canvas.Attachment.prototype.setShowOnTop = function (t) {}

/**
 * 更新属性, 并重新计算附件大小和位置
 * @method twaver.canvas.Attachment.validate
 */
twaver.canvas.Attachment.prototype.validate = function () {}


/**
 * 网元对应的视图对象，是所有网元视图（LinkUI、NodeUI等）的基类，代表网元在拓扑视图上的可视实体
 * @class twaver.canvas.ElementUI
 * @constructor
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Element} element 网元
 * @return {twaver.network.ElementUI}
 */
twaver.canvas.ElementUI = function (network, element) {}

/**
 * 添加附件，如果showInAttachmentDiv为true，则附件被添加到拓扑的附件层（attachmentDiv），否则附件被添加到网元视图上
 * @method twaver.canvas.ElementUI.addAttachment
 * @param {twaver.network.Attachment} attachment 附件
 */
twaver.canvas.ElementUI.prototype.addAttachment = function (attachment) {}

/**
 * 添加内容区域，所有内容区域合并后构成unionBodyBounds
 * @method twaver.canvas.ElementUI.addBodyBounds
 * @param {Object} rect 区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.ElementUI.prototype.addBodyBounds = function (rect) {}

/**
 * 给指定区域添加阴影区域
 * @method twaver.canvas.ElementUI.appendShadowBound
 * @param {Object} part 要添加阴影的对象
 * @param {Object} rect 区域
 * @return {Object} 添加阴影后的区域
 */
twaver.canvas.ElementUI.prototype.appendShadowBound = function (part, rect) {}

/**
 * 检查是否显示告警附件，如果Network#getAlarmLabel(element)返回null或空字符串，则不显示
 * @method twaver.canvas.ElementUI.checkAlarmAttachment
 */
twaver.canvas.ElementUI.prototype.checkAlarmAttachment = function () {}

/**
 * 检查所有附件是否显示，网元刷新时（validate）被调用，包括告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
 * @method twaver.canvas.ElementUI.checkAttachments
 */
twaver.canvas.ElementUI.prototype.checkAttachments = function () {}

/**
 * 检查是否显示编辑附件，如果此网元可选中（Network#isSelected(element)返回true），而且可编辑（Network#isEditable(element)返回true），而且此网元视图可编辑（isEditable()返回true），则显示，否则不显示
 * @method twaver.canvas.ElementUI.checkEditAttachment
 */
twaver.canvas.ElementUI.prototype.checkEditAttachment = function () {}

/**
 * 检查是否显示图标组附件，如果Network#getIconsNames(element)返回null或者length为0，则不显示
 * @method twaver.canvas.ElementUI.checkIconsAttachment
 */
twaver.canvas.ElementUI.prototype.checkIconsAttachment = function () {}

/**
 * 检查是否显示标签附件，如果Network#getLabel(element)返回null或空字符串，则不显示
 * @method twaver.canvas.ElementUI.checkLabelAttachment
 */
twaver.canvas.ElementUI.prototype.checkLabelAttachment = function () {}

/**
 * 清除阴影
 * @method twaver.canvas.ElementUI.clearShadow
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.ElementUI.prototype.clearShadow = function (ctx) {}

/**
 * 获取告警附件
 * @method twaver.canvas.ElementUI.getAlarmAttachment
 * @return {twaver.network.AlarmAttachment} 返回告警附件
 */
twaver.canvas.ElementUI.prototype.getAlarmAttachment = function () {}

/**
 * 获取所有附件集合，包含告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
 * @method twaver.canvas.ElementUI.getAttachments
 * @return {twaver.List} 返回所有附件集合
 */
twaver.canvas.ElementUI.prototype.getAttachments = function () {}

/**
 * 获得内容区域，默认为createBodyRect返回的结果
 * @method twaver.canvas.ElementUI.getBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.ElementUI.prototype.getBodyRect = function () {}

/**
 * 获取该类字符串类名
 * @method twaver.canvas.ElementUI.getClassName
 * @return {String} 返回类名
 */
twaver.canvas.ElementUI.prototype.getClassName = function () {}

/**
 * 获取指定样式的渲染颜色，如果innerColor不为空则返回innerColor，否则返回指定样式的值
 * @method twaver.canvas.ElementUI.getDyeColor
 * @param {String} styleProp 样式属性
 * @return {String} 返回渲染颜色
 */
twaver.canvas.ElementUI.prototype.getDyeColor = function (styleProp) {}

/**
 * 获取编辑附件
 * @method twaver.canvas.ElementUI.getEditAttachment
 * @return {twaver.network.EditAttachment} 返回编辑附件
 */
twaver.canvas.ElementUI.prototype.getEditAttachment = function () {}

/**
 * 获取和网元视图关联的网元
 * @method twaver.canvas.ElementUI.getElement
 * @return {twaver.Element} 返回和网元视图关联的网元
 */
twaver.canvas.ElementUI.prototype.getElement = function () {}

/**
 * 获取给定样式属性的值作为字体，如果指定样式的值是null，则返回twaver.Defaults.FONT
 * @method twaver.canvas.ElementUI.getFont
 * @param {String} styleProp 样式属性
 * @return {String} 返回字体
 */
twaver.canvas.ElementUI.prototype.getFont = function (styleProp) {}

/**
 * 获取热点，用于定位附件等的位置
 * @method twaver.canvas.ElementUI.getHotSpot
 * @return {Object} 返回热点，值为包含x和y属性的Object对象
 */
twaver.canvas.ElementUI.prototype.getHotSpot = function () {}

/**
 * 获取图标组附件
 * @method twaver.canvas.ElementUI.getIconsAttachment
 * @return {twaver.network.IconsAttachment} 返回图标组附件
 */
twaver.canvas.ElementUI.prototype.getIconsAttachment = function () {}

/**
 * 获取网元填充色
 * @method twaver.canvas.ElementUI.getInnerColor
 * @return {String} 返回网元填充色
 */
twaver.canvas.ElementUI.prototype.getInnerColor = function () {}

/**
 * 获取标签附件
 * @method twaver.canvas.ElementUI.getLabelAttachment
 * @return {twaver.network.LabelAttachment} 返回标签附件
 */
twaver.canvas.ElementUI.prototype.getLabelAttachment = function () {}

/**
 * 获取和网元视图关联的拓扑
 * @method twaver.canvas.ElementUI.getNetwork
 * @return {twaver.network.Network} 返回和网元视图关联的拓扑
 */
twaver.canvas.ElementUI.prototype.getNetwork = function () {}

/**
 * 获取网元边框颜色
 * @method twaver.canvas.ElementUI.getOuterColor
 * @return {String} 返回网元边框颜色
 */
twaver.canvas.ElementUI.prototype.getOuterColor = function () {}

/**
 * 获取网元选中后阴影颜色
 * @method twaver.canvas.ElementUI.getShadowColor
 * @return {String} 返回网元选中后阴影颜色
 */
twaver.canvas.ElementUI.prototype.getShadowColor = function () {}

/**
 * 获取指定样式属性的值，封装了Element.getStyle
 * @method twaver.canvas.ElementUI.getStyle
 * @param {String} styleProp 样式属性
 * @return {Object} 返回指定样式属性的值
 */
twaver.canvas.ElementUI.prototype.getStyle = function (styleProp) {}

/**
 * 获取合并的内容区域
 * @method twaver.canvas.ElementUI.getUnionBodyBounds
 * @return {Object} 返回合并的内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.ElementUI.prototype.getUnionBodyBounds = function () {}

/**
 * 获取视图内容区域，包括unionBodyBounds和所有附件的区域
 * @method twaver.canvas.ElementUI.getViewRect
 * @return {Object} 返回视图内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.ElementUI.prototype.getViewRect = function () {}

/**
 * 和网元视图关联的网元属性变化时的处理函数，默认实现为调用invalidate方法让网元视图刷新
 * @method twaver.canvas.ElementUI.handlePropertyChange
 * @param {Object} e 属性变化事件，包含property、oldValue和newValue属性
 */
twaver.canvas.ElementUI.prototype.handlePropertyChange = function (e) {}

/**
 * 和网元视图关联的网元被选中或取消选中时的处理函数，默认实现为调用invalidate方法让网元视图刷新
 * @method twaver.canvas.ElementUI.handleSelectionChange
 * @param {Object} e 选择变化事件，包含kind和data属性
 */
twaver.canvas.ElementUI.prototype.handleSelectionChange = function (e) {}

/**
 * 命中测试，判断网元视图是否包含指定坐标
 * @method twaver.canvas.ElementUI.hit
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 网元视图是否包含指定坐标，则返回true，否者返回false
 */
twaver.canvas.ElementUI.prototype.hit = function (x, y) {}

/**
 * 网元是否包含指定坐标点
 * @method twaver.canvas.ElementUI.hitCanvasPoint
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 返回网元是否包含指定坐标点
 */
twaver.canvas.ElementUI.prototype.hitCanvasPoint = function (x, y) {}

/**
 * 网元是否包含指定区域
 * @method twaver.canvas.ElementUI.hitCanvasRect
 * @param {Object} r 区域
 * @return {Boolean} 返回网元是否包含指定区域
 */
twaver.canvas.ElementUI.prototype.hitCanvasRect = function (r) {}

/**
 * 网元附件是否包含指定区域
 * @method twaver.canvas.ElementUI.hitCanvasRectAtAttachments
 * @param {Object} rect 区域
 * @return {Boolean} 返回网元附件是否包含指定区域
 */
twaver.canvas.ElementUI.prototype.hitCanvasRectAtAttachments = function (rect) {}

/**
 * 网元主体是否包含指定区域
 * @method twaver.canvas.ElementUI.hitCanvasRectAtBody
 * @param {Object} rect 区域
 * @return {Boolean} 返回网元主体是否包含指定区域
 */
twaver.canvas.ElementUI.prototype.hitCanvasRectAtBody = function (rect) {}

/**
 * 获取指定坐标下的视图对象，为附件或者网元视图本身
 * @method twaver.canvas.ElementUI.hitTest
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Object} 返回指定坐标下的视图对象，为附件或者网元视图本身
 */
twaver.canvas.ElementUI.prototype.hitTest = function (x, y) {}

/**
 * 判断网元视图是否和指定区域相交
 * @method twaver.canvas.ElementUI.intersects
 * @param {Object} rect 矩形区域，值为包含x、y、width和height属性的Object对象
 * @return {Boolean} 如果网元视图包含指定矩形区域，则返回true，否则返回false
 */
twaver.canvas.ElementUI.prototype.intersects = function (rect) {}

/**
 * @method twaver.canvas.ElementUI.invalidate
 * @param {String} checkAttachments 
 */
twaver.canvas.ElementUI.prototype.invalidate = function (checkAttachments) {}

/**
 * 获取网元视图是否可编辑，默认值为true
 * @method twaver.canvas.ElementUI.isEditable
 * @return {Boolean} 如果网元视图可编辑，则返回true，否则返回false
 */
twaver.canvas.ElementUI.prototype.isEditable = function () {}

/**
 * 判断是否需要设置阴影，默认实现是如果设置了阴影颜色，而且网元被被选中，而且select.style样式为shadow，则返回true，否则返回false
 * @method twaver.canvas.ElementUI.isShadowable
 * @return {Boolean} 如果需要设置阴影，则返回true，否则返回false
 */
twaver.canvas.ElementUI.prototype.isShadowable = function () {}

/**
 * 绘制网元视图
 * @method twaver.canvas.ElementUI.paint
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.ElementUI.prototype.paint = function (ctx) {}

/**
 * 绘制网元附件
 * @method twaver.canvas.ElementUI.paintAttachment
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 * @param {twaver.canvas.Attachment} att 附件
 */
twaver.canvas.ElementUI.prototype.paintAttachment = function (ctx, att) {}

/**
 * 绘制网元所有附件
 * @method twaver.canvas.ElementUI.paintAttachments
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.ElementUI.prototype.paintAttachments = function (ctx) {}

/**
 * 绘制网元主体
 * @method twaver.canvas.ElementUI.paintBody
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.ElementUI.prototype.paintBody = function (ctx) {}

/**
 * 删除指定附件
 * @method twaver.canvas.ElementUI.removeAttachment
 * @param {twaver.network.Attachment} attachment 附件
 */
twaver.canvas.ElementUI.prototype.removeAttachment = function (attachment) {}

/**
 * 设置热点，用于定位附件等的位置
 * @method twaver.canvas.ElementUI.setHotSpot
 * @param {Object} value 热点，值为包含x和y属性的Object对象
 */
twaver.canvas.ElementUI.prototype.setHotSpot = function (value) {}

/**
 * 给指定画布元素设置阴影效果
 * @method twaver.canvas.ElementUI.setShadow
 * @param {Object} part 网元视图（ElementUI）或者附件（Attachment）
 * @param {HTMLCanvasElement} canvas 画布元素
 * @param {Object} rect 画图大小及位置，值为包含x、y、width和height属性的Object对象
 * @return {CanvasRenderingContext2D} 画布渲染内容
 */
twaver.canvas.ElementUI.prototype.setShadow = function (part, canvas, rect) {}

/**
 * 更新样式
 * @method twaver.canvas.ElementUI.updateStyle
 */
twaver.canvas.ElementUI.prototype.updateStyle = function () {}

/**
 * 此方法被Network调用，用以重画网元视图内容，此内部检查所有附件是否可见（checkAttachments），并调用updateMeasure方法重画网元内容，最后调用附件的updateMeasure方法，让附件重画
 * @method twaver.canvas.ElementUI.validate
 */
twaver.canvas.ElementUI.prototype.validate = function () {}

/**
 * 更新视图
 * @method twaver.canvas.ElementUI.validateImpl
 */
twaver.canvas.ElementUI.prototype.validateImpl = function () {}


/**
 * 所有拓扑交互处理器的基类，响应鼠标、键盘以及触摸事件；交互处理器封装了原始鼠标、键盘以及触摸事件，并派发了更加方便易用的交互事件（包含当前事件的数据源（一般为网元或者网元集合）以及动作（比如单击网元、双击网元、双击背景等等））。使用Network#addInteractionListener添加交互处理监听器。用户也可以继承此类实现自定义交互处理器，并通过Network#setInteractions加载交互处理器
 * @class twaver.canvas.interaction.BaseInteraction
 * @constructor
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.BaseInteraction}
 */
twaver.canvas.interaction.BaseInteraction = function (network) {}

/**
 * 批量添加事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会查找函数名为"handle_"加"事件类型"（handle_mousedown，handle_mousedown）的函数，作为指定事件类型的回调函数。此方法一般在setUp方法里被调用
 * @method twaver.canvas.interaction.BaseInteraction.addListener
 */
twaver.canvas.interaction.BaseInteraction.prototype.addListener = function () {}

/**
 * 获取缩放和便宜后的矩形对象
 * @method twaver.canvas.interaction.BaseInteraction.convertFromUIToMarkerRect
 * @param {Object} vr 矩形对象
 * @param {Number} xoff x轴偏移量
 * @param {Number} yoff y轴偏移量
 * @return {Object} 返回缩放和便宜后的矩形对象
 */
twaver.canvas.interaction.BaseInteraction.prototype.convertFromUIToMarkerRect = function (vr, xoff, yoff) {}

/**
 * 获取缩放和平移后的坐标点
 * @method twaver.canvas.interaction.BaseInteraction.convertPointFromView
 * @param {Object} p 坐标点
 * @return {Object} 返回缩放和平移后的坐标点
 */
twaver.canvas.interaction.BaseInteraction.prototype.convertPointFromView = function (p) {}

/**
 * 获取此类的字符串类名
 * @method twaver.canvas.interaction.BaseInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.canvas.interaction.BaseInteraction.prototype.getClassName = function () {}

/**
 * 获取鼠标点所在的位置
 * @method twaver.canvas.interaction.BaseInteraction.getMarkerPoint
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回鼠标点所在的位置
 */
twaver.canvas.interaction.BaseInteraction.prototype.getMarkerPoint = function (e) {}

/**
 * 绘制交互模式
 * @method twaver.canvas.interaction.BaseInteraction.paint
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.interaction.BaseInteraction.prototype.paint = function (ctx) {}

/**
 * 批量删除事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会删除指定事件类型的函数名为"hanle_"加"事件类型"（handle_mousedown，handle_mousedown）的监听器。此方法一般在tearDown方法里被调用
 * @method twaver.canvas.interaction.BaseInteraction.removeListener
 */
twaver.canvas.interaction.BaseInteraction.prototype.removeListener = function () {}

/**
 * 重绘交互模式
 * @method twaver.canvas.interaction.BaseInteraction.repaint
 */
twaver.canvas.interaction.BaseInteraction.prototype.repaint = function () {}

/**
 * 初始化交互处理器，一般调用addListener方法添加鼠标、键盘以及触摸事件监听器；Network#setInteractions会调用此方法
 * @method twaver.canvas.interaction.BaseInteraction.setUp
 */
twaver.canvas.interaction.BaseInteraction.prototype.setUp = function () {}

/**
 * 销毁交互处理器，一般调用removeListener方法删除鼠标、键盘以及触摸事件监听器；使用Network#setInteractions切换交互处理器时会调用此方法撤销旧的交互处理器
 * @method twaver.canvas.interaction.BaseInteraction.tearDown
 */
twaver.canvas.interaction.BaseInteraction.prototype.tearDown = function () {}


/**
 * 鹰眼交互处理器
 * @class twaver.canvas.OverviewInteraction
 * @constructor
 * @param {twaver.network.Overview} overview 鹰眼
 * @return {twaver.network.OverviewInteraction}
 */
twaver.canvas.OverviewInteraction = function (overview) {}

/**
 * 清除拖动鼠标和松开鼠标监听
 * @method twaver.canvas.OverviewInteraction.clear
 */
twaver.canvas.OverviewInteraction.prototype.clear = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.canvas.OverviewInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.canvas.OverviewInteraction.prototype.getClassName = function () {}

/**
 * 按下鼠标时执行的处理函数
 * @method twaver.canvas.OverviewInteraction.handleMousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.OverviewInteraction.prototype.handleMousedown = function (e) {}

/**
 * 拖动鼠标时执行的处理函数
 * @method twaver.canvas.OverviewInteraction.handleMousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.OverviewInteraction.prototype.handleMousemove = function (e) {}

/**
 * 松开鼠标时执行的处理函数
 * @method twaver.canvas.OverviewInteraction.handleMouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.OverviewInteraction.prototype.handleMouseup = function (e) {}


/**
 * 鹰眼触摸交互处理器
 * @class twaver.canvas.OverviewMSTouchInteraction
 * @constructor
 * @param {twaver.canvas.Overview} overview 鹰眼
 * @return {twaver.canvas.OverviewMSTouchInteraction}
 */
twaver.canvas.OverviewMSTouchInteraction = function (overview) {}

/**
 * 获取此类的字符串类名
 * @method twaver.canvas.OverviewMSTouchInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.canvas.OverviewMSTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.canvas.OverviewMSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.OverviewMSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.canvas.OverviewMSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.OverviewMSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.canvas.OverviewMSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.OverviewMSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 鹰眼触摸交互处理器
 * @class twaver.canvas.OverviewTouchInteraction
 * @constructor
 * @param {twaver.network.Overview} overview 鹰眼
 * @return {twaver.network.OverviewTouchInteraction}
 */
twaver.canvas.OverviewTouchInteraction = function (overview) {}

/**
 * 清除拖动鼠标和松开鼠标监听
 * @method twaver.canvas.OverviewTouchInteraction.clear
 */
twaver.canvas.OverviewTouchInteraction.prototype.clear = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.canvas.OverviewTouchInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.canvas.OverviewTouchInteraction.prototype.getClassName = function () {}

/**
 * 触摸结束时执行的处理函数
 * @method twaver.canvas.OverviewTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.OverviewTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 触摸移动时执行的处理函数
 * @method twaver.canvas.OverviewTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.OverviewTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 触摸开始时执行的处理函数
 * @method twaver.canvas.OverviewTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.OverviewTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 图表交互处理器
 * @class twaver.charts.ChartInteraction
 * @constructor
 * @param {twaver.charts.ChartBase} chart 图表
 * @return {twaver.charts.ChartInteraction}
 */
twaver.charts.ChartInteraction = function (chart) {}

/**
 * 获取此类字符串类名
 * @method twaver.charts.ChartInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.charts.ChartInteraction.prototype.getClassName = function () {}

/**
 * 处理鼠标按下事件
 * @method twaver.charts.ChartInteraction.handleMouseDown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.ChartInteraction.prototype.handleMouseDown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.charts.ChartInteraction.handleMouseMove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.ChartInteraction.prototype.handleMouseMove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.charts.ChartInteraction.handleMouseUp
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.ChartInteraction.prototype.handleMouseUp = function (e) {}

/**
 * 处理鼠标滚轮事件
 * @method twaver.charts.ChartInteraction.handleMouseWheel
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.ChartInteraction.prototype.handleMouseWheel = function (e) {}


/**
 * 图表触摸交互处理器
 * @class twaver.charts.ChartMSTouchInteraction
 * @constructor
 * @param {twaver.charts.ChartBase} chart 图表
 * @return {twaver.charts.ChartMSTouchInteraction}
 */
twaver.charts.ChartMSTouchInteraction = function (chart) {}

/**
 * 获取此类字符串类名
 * @method twaver.charts.ChartMSTouchInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.charts.ChartMSTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理鼠标移动事件
 * @method twaver.charts.ChartMSTouchInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.ChartMSTouchInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.charts.ChartMSTouchInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.ChartMSTouchInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 处理鼠标滚轮事件
 * @method twaver.charts.ChartMSTouchInteraction.handleMouseWheel
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.ChartMSTouchInteraction.prototype.handleMouseWheel = function (e) {}

/**
 * 处理触摸结束事件
 * @method twaver.charts.ChartMSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.charts.ChartMSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.charts.ChartMSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.charts.ChartMSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.charts.ChartMSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.charts.ChartMSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 图表触摸交互处理器
 * @class twaver.charts.ChartTouchInteraction
 * @constructor
 * @param {twaver.charts.ChartBase} chart 图表
 * @return {twaver.charts.ChartTouchInteraction}
 */
twaver.charts.ChartTouchInteraction = function (chart) {}

/**
 * 获取此类字符串类名
 * @method twaver.charts.ChartTouchInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.charts.ChartTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.charts.ChartTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.charts.ChartTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.charts.ChartTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.charts.ChartTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.charts.ChartTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.charts.ChartTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 图表图例交互处理器
 * @class twaver.charts.LegendPaneInteraction
 * @constructor
 * @param {twaver.charts.LegendPane} legendPane 图表图例
 * @return {twaver.charts.LegendPaneInteraction}
 */
twaver.charts.LegendPaneInteraction = function (legendPane) {}

/**
 * 获取此类字符串类名
 * @method twaver.charts.LegendPaneInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.charts.LegendPaneInteraction.prototype.getClassName = function () {}

/**
 * 处理鼠标按下事件
 * @method twaver.charts.LegendPaneInteraction.handleMouseDown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.charts.LegendPaneInteraction.prototype.handleMouseDown = function (e) {}


/**
 * 图表图例触摸交互处理器
 * @class twaver.charts.LegendPaneTouchInteraction
 * @constructor
 * @param {twaver.charts.LegendPane} legendPane 图表图例
 * @return {twaver.charts.LegendPaneTouchInteraction}
 */
twaver.charts.LegendPaneTouchInteraction = function (legendPane) {}

/**
 * 获取此类字符串类名
 * @method twaver.charts.LegendPaneTouchInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.charts.LegendPaneTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理触摸开始事件
 * @method twaver.charts.LegendPaneTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.charts.LegendPaneTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 列表控件交互处理器
 * @class twaver.controls.ListBaseInteraction
 * @constructor
 * @param {twaver.controls.ListBase} listBase 列表基类
 * @return {twaver.controls.ListBaseInteraction}
 */
twaver.controls.ListBaseInteraction = function (listBase) {}

/**
 * 获取此类的字符串类名
 * @method twaver.controls.ListBaseInteraction.getClassName
 * @return {String} 返回此类的字符串类名
 */
twaver.controls.ListBaseInteraction.prototype.getClassName = function () {}

/**
 * 处理键盘按下事件
 * @method twaver.controls.ListBaseInteraction.handleKeyDown
 * @param {KeyEvent} e 键盘事件
 */
twaver.controls.ListBaseInteraction.prototype.handleKeyDown = function (e) {}

/**
 * 处理鼠标按下事件
 * @method twaver.controls.ListBaseInteraction.handleMouseDown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.ListBaseInteraction.prototype.handleMouseDown = function (e) {}

/**
 * 处理滚动事件
 * @method twaver.controls.ListBaseInteraction.handleScroll
 * @param {Event} e 滚动事件
 */
twaver.controls.ListBaseInteraction.prototype.handleScroll = function (e) {}


/**
 * 列表控件触摸交互处理器
 * @class twaver.controls.ListBaseTouchInteraction
 * @constructor
 * @param {twaver.controls.ListBase} listBase 列表基类
 * @return {twaver.controls.ListBaseTouchInteraction}
 */
twaver.controls.ListBaseTouchInteraction = function (listBase) {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.ListBaseTouchInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.ListBaseTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.controls.ListBaseTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.ListBaseTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.controls.ListBaseTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.ListBaseTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.controls.ListBaseTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.ListBaseTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 创建右键菜单
 * @class twaver.controls.PopupMenu
 * @constructor
 * @param {Object} contextView HTML元素或者twaver.controles.ControlBase对象
 * @return {twaver.controls.PopupMenu} 返回右键菜单对象
 */
twaver.controls.PopupMenu = function (contextView) {}

/**
 * 添加菜单项
 * @method twaver.controls.PopupMenu.addMenuItem
 * @param {Object} menuItem 包含id, type, icon, label, visible, enabled, separator, action, items, selected, groupName属性的对象
 */
twaver.controls.PopupMenu.prototype.addMenuItem = function (menuItem) {}

/**
 * 添加分隔条
 * @method twaver.controls.PopupMenu.addSeparator
 */
twaver.controls.PopupMenu.prototype.addSeparator = function () {}

/**
 * 销毁右键菜单对象，删除关联的视图的右键事件
 * @method twaver.controls.PopupMenu.dispose
 */
twaver.controls.PopupMenu.prototype.dispose = function () {}

/**
 * 获取背景颜色
 * @method twaver.controls.PopupMenu.getBackground
 * @return {String} 返回背景颜色
 */
twaver.controls.PopupMenu.prototype.getBackground = function () {}

/**
 * 获取边框颜色
 * @method twaver.controls.PopupMenu.getBorder
 * @return {String} 返回边框颜色
 */
twaver.controls.PopupMenu.prototype.getBorder = function () {}

/**
 * 返回勾选框在选中状态时的图标名称
 * @method twaver.controls.PopupMenu.getCheckboxSelectedIcon
 * @return {String} 获取勾选框在选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.getCheckboxSelectedIcon = function () {}

/**
 * 获取勾选框在未选中状态时的图标名称
 * @method twaver.controls.PopupMenu.getCheckboxUnselectedIcon
 * @return {String} 返回勾选框在未选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.getCheckboxUnselectedIcon = function () {}

/**
 * 获取类名
 * @method twaver.controls.PopupMenu.getClassName
 * @return {String} 返回类名
 */
twaver.controls.PopupMenu.prototype.getClassName = function () {}

/**
 * 获取右键菜单关联的视图对象
 * @method twaver.controls.PopupMenu.getContextView
 * @return {Object} 返回视图对象
 */
twaver.controls.PopupMenu.prototype.getContextView = function () {}

/**
 * 获取菜单项不可用时的文字颜色
 * @method twaver.controls.PopupMenu.getDisabledColor
 * @return {String} 返回菜单项不可用时的文字颜色
 */
twaver.controls.PopupMenu.prototype.getDisabledColor = function () {}

/**
 * 获取菜单项高亮背景颜色
 * @method twaver.controls.PopupMenu.getFocusColor
 * @return {String} 返回菜单项高亮背景颜色
 */
twaver.controls.PopupMenu.prototype.getFocusColor = function () {}

/**
 * 根据编号返回菜单项
 * @method twaver.controls.PopupMenu.getMenuItem
 * @param {String} id 编号
 * @return {Object} 返回菜单项
 */
twaver.controls.PopupMenu.prototype.getMenuItem = function (id) {}

/**
 * 根据编号返回菜单项
 * @method twaver.controls.PopupMenu.getMenuItemById
 * @param {String} id 编号
 * @return {Object} 返回菜单项
 */
twaver.controls.PopupMenu.prototype.getMenuItemById = function (id) {}

/**
 * 获取菜单项高度
 * @method twaver.controls.PopupMenu.getMenuItemHeight
 * @return {Number} 返回菜单项高度
 */
twaver.controls.PopupMenu.prototype.getMenuItemHeight = function () {}

/**
 * 获取菜单项数组
 * @method twaver.controls.PopupMenu.getMenuItems
 * @return {Array} 返回菜单项数组
 */
twaver.controls.PopupMenu.prototype.getMenuItems = function () {}

/**
 * 获取单选框在选中状态时的图标名称
 * @method twaver.controls.PopupMenu.getRadiobuttonSelectedIcon
 * @return {String} 返回单选框在选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.getRadiobuttonSelectedIcon = function () {}

/**
 * 获取单选框在未选中状态时的图标名称
 * @method twaver.controls.PopupMenu.getRadiobuttonUnselectedIcon
 * @return {String} 返回单选框在未选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.getRadiobuttonUnselectedIcon = function () {}

/**
 * 获取子菜单项不可用时的图标名称
 * @method twaver.controls.PopupMenu.getSubMenuDisableIcon
 * @return {String} 返回子菜单项不可用时的图标名称
 */
twaver.controls.PopupMenu.prototype.getSubMenuDisableIcon = function () {}

/**
 * 获取子菜单项可用时的图标名称
 * @method twaver.controls.PopupMenu.getSubMenuEnableIcon
 * @return {String} 返回子菜单项可用时的图标名称
 */
twaver.controls.PopupMenu.prototype.getSubMenuEnableIcon = function () {}

/**
 * 获取右键菜单div元素
 * @method twaver.controls.PopupMenu.getView
 * @return {HTMLElement} 返回右键菜单div元素
 */
twaver.controls.PopupMenu.prototype.getView = function () {}

/**
 * 获取右键菜单宽度
 * @method twaver.controls.PopupMenu.getWidth
 * @return {Number} 返回右键菜单宽度
 */
twaver.controls.PopupMenu.prototype.getWidth = function () {}

/**
 * 隐藏右键菜单
 * @method twaver.controls.PopupMenu.hide
 */
twaver.controls.PopupMenu.prototype.hide = function () {}

/**
 * 获取菜单项是否可用，默认菜单项的enable属性不为false时可用
 * @method twaver.controls.PopupMenu.isEnabled
 * @param {Object} menuItem 菜单项
 * @return {Boolean} 返回菜单项是否可用
 */
twaver.controls.PopupMenu.prototype.isEnabled = function (menuItem) {}

/**
 * 获取菜单项是否可见，默认菜单项的visible属性不为false时可用
 * @method twaver.controls.PopupMenu.isVisible
 * @param {Object} menuItem 菜单项
 * @return {Boolean} 返回菜单项是否可见
 */
twaver.controls.PopupMenu.prototype.isVisible = function (menuItem) {}

/**
 * 菜单点击时的回调函数
 * @method twaver.controls.PopupMenu.onAction
 * @param {Object} menuItem 菜单项
 */
twaver.controls.PopupMenu.prototype.onAction = function (menuItem) {}

/**
 * 菜单项绘制后的回调函数
 * @method twaver.controls.PopupMenu.onMenuItemRendered
 * @param {HTMLDivElement} div div元素
 * @param {Object} menuItem 菜单项
 */
twaver.controls.PopupMenu.prototype.onMenuItemRendered = function (div, menuItem) {}

/**
 * 菜单显示前的回调函数，如果返回false，则右键菜单不显示
 * @method twaver.controls.PopupMenu.onMenuShowing
 * @param {MouseEvent} e 鼠标事件
 * @return {Boolean} 返回值决定右键菜单是否显示
 */
twaver.controls.PopupMenu.prototype.onMenuShowing = function (e) {}

/**
 * 绘制菜单
 * @method twaver.controls.PopupMenu.renderMenu
 * @param {HTMLDivElement} view HTML元素
 * @param {Array} menuItems 菜单项数组
 */
twaver.controls.PopupMenu.prototype.renderMenu = function (view, menuItems) {}

/**
 * 绘制菜单项
 * @method twaver.controls.PopupMenu.renderMenuItem
 * @param {HTMLDivElement} div div元素
 * @param {Object} menuItem 菜单项
 */
twaver.controls.PopupMenu.prototype.renderMenuItem = function (div, menuItem) {}

/**
 * 设置背景色
 * @method twaver.controls.PopupMenu.setBackground
 * @param {String} value 背景色
 */
twaver.controls.PopupMenu.prototype.setBackground = function (value) {}

/**
 * 设置边框颜色
 * @method twaver.controls.PopupMenu.setBorder
 * @param {String} value 颜色
 */
twaver.controls.PopupMenu.prototype.setBorder = function (value) {}

/**
 * 设置勾选框在选中状态时的图标名称
 * @method twaver.controls.PopupMenu.setCheckboxSelectedIcon
 * @param {String} value 勾选框在选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.setCheckboxSelectedIcon = function (value) {}

/**
 * 设置勾选框在未选中状态时的图标名称
 * @method twaver.controls.PopupMenu.setCheckboxUnselectedIcon
 * @param {String} value 勾选框在未选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.setCheckboxUnselectedIcon = function (value) {}

/**
 * 设置右键菜单关联的视图对象
 * @method twaver.controls.PopupMenu.setContextView
 * @param {Object} contextView 右键菜单关联的视图对象
 */
twaver.controls.PopupMenu.prototype.setContextView = function (contextView) {}

/**
 * 设置菜单项不可用时的文字颜色
 * @method twaver.controls.PopupMenu.setDisabledColor
 * @param {String} value 菜单项不可用时的文字颜色
 */
twaver.controls.PopupMenu.prototype.setDisabledColor = function (value) {}

/**
 * 设置菜单项高亮背景颜色
 * @method twaver.controls.PopupMenu.setFocusColor
 * @param {String} value 菜单项高亮背景颜色
 */
twaver.controls.PopupMenu.prototype.setFocusColor = function (value) {}

/**
 * 设置菜单项高度
 * @method twaver.controls.PopupMenu.setMenuItemHeight
 * @param {Number} value 菜单项高度
 */
twaver.controls.PopupMenu.prototype.setMenuItemHeight = function (value) {}

/**
 * 设置菜单项数组
 * @method twaver.controls.PopupMenu.setMenuItems
 * @param {Array} menuItems 菜单项数组
 */
twaver.controls.PopupMenu.prototype.setMenuItems = function (menuItems) {}

/**
 * 设置单选框在选中状态时的图标名称
 * @method twaver.controls.PopupMenu.setRadiobuttonSelectedIcon
 * @param {String} value 单选框在选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.setRadiobuttonSelectedIcon = function (value) {}

/**
 * 设置单选框在未选中状态时的图标名称
 * @method twaver.controls.PopupMenu.setRadiobuttonUnselectedIcon
 * @param {String} value 单选框在未选中状态时的图标名称
 */
twaver.controls.PopupMenu.prototype.setRadiobuttonUnselectedIcon = function (value) {}

/**
 * 设置子菜单项不可用时的图标名称
 * @method twaver.controls.PopupMenu.setSubMenuDisableIcon
 * @param {String} value 子菜单项不可用时的图标名称
 */
twaver.controls.PopupMenu.prototype.setSubMenuDisableIcon = function (value) {}

/**
 * 设置子菜单项可用时的图标名称
 * @method twaver.controls.PopupMenu.setSubMenuEnableIcon
 * @param {String} value 子菜单项可用时的图标名称
 */
twaver.controls.PopupMenu.prototype.setSubMenuEnableIcon = function (value) {}

/**
 * 设置右键菜单宽度
 * @method twaver.controls.PopupMenu.setWidth
 * @param {Number} value 宽度
 */
twaver.controls.PopupMenu.prototype.setWidth = function (value) {}

/**
 * 显示右键菜单
 * @method twaver.controls.PopupMenu.show
 * @param {Object} e 鼠标事件
 */
twaver.controls.PopupMenu.prototype.show = function (e) {}


/**
 * 属性页交互处理器
 * @class twaver.controls.PropertySheetInteraction
 * @constructor
 * @param {twaver.controls.PropertySheet} propertySheet 属性页
 * @return {twaver.controls.PropertySheetInteraction}
 */
twaver.controls.PropertySheetInteraction = function (propertySheet) {}

/**
 * 鼠标移动到列分割线时，更改鼠标样式
 * @method twaver.controls.PropertySheetInteraction.changeCursor
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.PropertySheetInteraction.prototype.changeCursor = function (e) {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.PropertySheetInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.PropertySheetInteraction.prototype.getClassName = function () {}

/**
 * 获取当前鼠标相对于属性页的x坐标值
 * @method twaver.controls.PropertySheetInteraction.getX
 * @param {MouseEvent} e 鼠标事件
 * @return {Number} 返回当前鼠标相对于属性页的x坐标值
 */
twaver.controls.PropertySheetInteraction.prototype.getX = function (e) {}

/**
 * 处理鼠标按下事件
 * @method twaver.controls.PropertySheetInteraction.handleMouseDown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.PropertySheetInteraction.prototype.handleMouseDown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.controls.PropertySheetInteraction.handleMouseMove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.PropertySheetInteraction.prototype.handleMouseMove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.controls.PropertySheetInteraction.handleMouseUp
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.PropertySheetInteraction.prototype.handleMouseUp = function (e) {}

/**
 * 属性页属性和值的最小列宽
 * @property minGap
 * @type Number
 */
twaver.controls.PropertySheetInteraction.prototype.minGap = function () {}


/**
 * 属性页触摸交互处理器
 * @class twaver.controls.PropertySheetTouchInteraction
 * @constructor
 * @param {twaver.controls.PropertySheet} propertySheet 属性页
 * @return {twaver.controls.PropertySheetTouchInteraction}
 */
twaver.controls.PropertySheetTouchInteraction = function (propertySheet) {}

/**
 * 返回此类的字符串类名
 * @method twaver.controls.PropertySheetTouchInteraction.getClassName
 * @return {String} 获取此类的字符串类名
 */
twaver.controls.PropertySheetTouchInteraction.prototype.getClassName = function () {}

/**
 * 获取当前触摸点相对于属性页的x坐标值
 * @method twaver.controls.PropertySheetTouchInteraction.getX
 * @param {TouchEvent} e 触摸事件
 * @return {Number} 返回当前触摸点相对于属性页的x坐标值
 */
twaver.controls.PropertySheetTouchInteraction.prototype.getX = function (e) {}

/**
 * 处理触摸结束事件
 * @method twaver.controls.PropertySheetTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.PropertySheetTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.controls.PropertySheetTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.PropertySheetTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.controls.PropertySheetTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.PropertySheetTouchInteraction.prototype.handleTouchstart = function (e) {}

/**
 * 属性页属性和值的最小列宽
 * @property minGap
 * @type Number
 */
twaver.controls.PropertySheetTouchInteraction.prototype.minGap = function () {}


/**
 * 分割面板控件交互处理器
 * @class twaver.controls.SplitPaneInteraction
 * @constructor
 * @param {twaver.controls.SplitPane} splitPane 分割面板控件
 * @return {twaver.controls.SplitPaneInteraction}
 */
twaver.controls.SplitPaneInteraction = function (splitPane) {}

/**
 * 清除临时状态，并设置分割线位置
 * @method twaver.controls.SplitPaneInteraction.clear
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.SplitPaneInteraction.prototype.clear = function (e) {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.SplitPaneInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.SplitPaneInteraction.prototype.getClassName = function () {}

/**
 * 处理鼠标按下事件
 * @method twaver.controls.SplitPaneInteraction.handleMouseDown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.SplitPaneInteraction.prototype.handleMouseDown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.controls.SplitPaneInteraction.handleMouseMove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.SplitPaneInteraction.prototype.handleMouseMove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.controls.SplitPaneInteraction.handleMouseUp
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.SplitPaneInteraction.prototype.handleMouseUp = function (e) {}


/**
 * 分割面板触摸交互处理器
 * @class twaver.controls.SplitPaneTouchInteraction
 * @constructor
 * @param {twaver.controls.SplitPane} splitPane 分割面板控件
 * @return {twaver.controls.SplitPaneTouchInteraction}
 */
twaver.controls.SplitPaneTouchInteraction = function (splitPane) {}

/**
 * 清除临时状态，并设置分割线位置
 * @method twaver.controls.SplitPaneTouchInteraction.clear
 * @param {TouchEvent} e 
 */
twaver.controls.SplitPaneTouchInteraction.prototype.clear = function (e) {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.SplitPaneTouchInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.SplitPaneTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.controls.SplitPaneTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.SplitPaneTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.controls.SplitPaneTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.SplitPaneTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.controls.SplitPaneTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.SplitPaneTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 表头控件交互处理器
 * @class twaver.controls.TableHeaderInteraction
 * @constructor
 * @param {twaver.controls.TableHeader} tableHeader 表头控件
 * @return {twaver.controls.TableHeaderInteraction}
 */
twaver.controls.TableHeaderInteraction = function (tableHeader) {}

/**
 * 根据当前操作，更改鼠标样式
 * @method twaver.controls.TableHeaderInteraction.changeCursor
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TableHeaderInteraction.prototype.changeCursor = function (e) {}

/**
 * 清除临时状态，而且如果当前操作是移动列，则执行移动列动作
 * @method twaver.controls.TableHeaderInteraction.clear
 */
twaver.controls.TableHeaderInteraction.prototype.clear = function () {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.TableHeaderInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.TableHeaderInteraction.prototype.getClassName = function () {}

/**
 * 获取当前鼠标下的列
 * @method twaver.controls.TableHeaderInteraction.getColumnAt
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Column} 返回当前鼠标下的列
 */
twaver.controls.TableHeaderInteraction.prototype.getColumnAt = function (e) {}

/**
 * 获取当前鼠标下的列信息
 * @method twaver.controls.TableHeaderInteraction.getColumnInfoAt
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回当前鼠标下的列信息
 */
twaver.controls.TableHeaderInteraction.prototype.getColumnInfoAt = function (e) {}

/**
 * 获取当前鼠标下可移动列的HTML元素
 * @method twaver.controls.TableHeaderInteraction.getMovableDivAt
 * @param {MouseEvent} e 鼠标事件
 * @return {HTMLDivElement} 返回当前鼠标下可移动列的HTML元素
 */
twaver.controls.TableHeaderInteraction.prototype.getMovableDivAt = function (e) {}

/**
 * 获取当前鼠标相对于表头的x坐标值
 * @method twaver.controls.TableHeaderInteraction.getX
 * @param {MouseEvent} e 鼠标事件
 * @return {Number} 返回当前鼠标相对于表头的x坐标值
 */
twaver.controls.TableHeaderInteraction.prototype.getX = function (e) {}

/**
 * 处理鼠标按下事件
 * @method twaver.controls.TableHeaderInteraction.handleMouseDown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TableHeaderInteraction.prototype.handleMouseDown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.controls.TableHeaderInteraction.handleMouseMove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TableHeaderInteraction.prototype.handleMouseMove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.controls.TableHeaderInteraction.handleMouseUp
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TableHeaderInteraction.prototype.handleMouseUp = function (e) {}


/**
 * 表头控件触摸交互处理器
 * @class twaver.controls.TableHeaderTouchInteraction
 * @constructor
 * @param {twaver.controls.TableHeader} tableHeader 表头控件
 * @return {twaver.controls.TableHeaderTouchInteraction}
 */
twaver.controls.TableHeaderTouchInteraction = function (tableHeader) {}

/**
 * 清除零时状态，而且如果当前操作是移动列，则执行移动列动作
 * @method twaver.controls.TableHeaderTouchInteraction.clear
 */
twaver.controls.TableHeaderTouchInteraction.prototype.clear = function () {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.TableHeaderTouchInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.TableHeaderTouchInteraction.prototype.getClassName = function () {}

/**
 * 获取当前触摸点下的列
 * @method twaver.controls.TableHeaderTouchInteraction.getColumnAt
 * @param {TouchEvent} e 触摸事件
 * @return {twaver.Column} 返回当前触摸点下的列
 */
twaver.controls.TableHeaderTouchInteraction.prototype.getColumnAt = function (e) {}

/**
 * 获取当前触摸点下的列信息
 * @method twaver.controls.TableHeaderTouchInteraction.getColumnInfoAt
 * @param {TouchEvent} e 触摸事件
 * @return {Object} 返回当前触摸点下的列信息
 */
twaver.controls.TableHeaderTouchInteraction.prototype.getColumnInfoAt = function (e) {}

/**
 * 获取当前触摸点下可移动列的HTML元素
 * @method twaver.controls.TableHeaderTouchInteraction.getMovableDivAt
 * @param {TouchEvent} e 触摸事件
 * @return {HTMLDivElement} 返回当前触摸点下可移动列的HTML元素
 */
twaver.controls.TableHeaderTouchInteraction.prototype.getMovableDivAt = function (e) {}

/**
 * 获取当前触摸点相对于表头的x坐标值
 * @method twaver.controls.TableHeaderTouchInteraction.getX
 * @param {TouchEvent} e 触摸事件
 * @return {Number} 返回当前触摸点相对于表头的x坐标值
 */
twaver.controls.TableHeaderTouchInteraction.prototype.getX = function (e) {}

/**
 * 处理触摸结束事件
 * @method twaver.controls.TableHeaderTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.TableHeaderTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.controls.TableHeaderTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.TableHeaderTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.controls.TableHeaderTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.TableHeaderTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 选项卡面板交互处理器
 * @class twaver.controls.TabPaneInteraction
 * @constructor
 * @param {twaver.controls.TabPane} tabPane 选项卡面板控件
 * @return {twaver.controls.TabPaneInteraction}
 */
twaver.controls.TabPaneInteraction = function (tabPane) {}

/**
 * 根据当前操作，更改鼠标样式
 * @method twaver.controls.TabPaneInteraction.changeCursor
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TabPaneInteraction.prototype.changeCursor = function (e) {}

/**
 * 清除临时状态，而且如果当前操作是移动选项卡，则执行移动选项卡动作
 * @method twaver.controls.TabPaneInteraction.clear
 */
twaver.controls.TabPaneInteraction.prototype.clear = function () {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.TabPaneInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.TabPaneInteraction.prototype.getClassName = function () {}

/**
 * 获取当前鼠标下可移动选项卡的HTML元素
 * @method twaver.controls.TabPaneInteraction.getMovableDivAt
 * @param {MouseEvent} e 鼠标事件
 * @return {HTMLDivElement} 返回当前鼠标下可移动选项卡的HTML元素
 */
twaver.controls.TabPaneInteraction.prototype.getMovableDivAt = function (e) {}

/**
 * 获取当前鼠标下的选项卡
 * @method twaver.controls.TabPaneInteraction.getTabAt
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Tab} 返回当前鼠标下的选项卡
 */
twaver.controls.TabPaneInteraction.prototype.getTabAt = function (e) {}

/**
 * 获取当前鼠标下的选项卡信息
 * @method twaver.controls.TabPaneInteraction.getTabInfoAt
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回当前鼠标下的选项卡信息
 */
twaver.controls.TabPaneInteraction.prototype.getTabInfoAt = function (e) {}

/**
 * 获取当前鼠标相对于选项卡的x坐标值
 * @method twaver.controls.TabPaneInteraction.getX
 * @param {MouseEvent} e 鼠标事件
 * @return {Number} 返回当前鼠标相对于选项卡的x坐标值
 */
twaver.controls.TabPaneInteraction.prototype.getX = function (e) {}

/**
 * 处理鼠标按下事件
 * @method twaver.controls.TabPaneInteraction.handleMouseDown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TabPaneInteraction.prototype.handleMouseDown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.controls.TabPaneInteraction.handleMouseMove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TabPaneInteraction.prototype.handleMouseMove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.controls.TabPaneInteraction.handleMouseUp
 * @param {MouseEvent} e 鼠标事件
 */
twaver.controls.TabPaneInteraction.prototype.handleMouseUp = function (e) {}


/**
 * 选项卡面板触摸交互处理器
 * @class twaver.controls.TabPaneTouchInteraction
 * @constructor
 * @param {twaver.controls.TabPane} tabPane 选项卡面板控件
 * @return {twaver.controls.TabPaneTouchInteraction}
 */
twaver.controls.TabPaneTouchInteraction = function (tabPane) {}

/**
 * 清除临时状态，而且如果当前操作是移动选项卡，则执行移动选项卡动作
 * @method twaver.controls.TabPaneTouchInteraction.clear
 */
twaver.controls.TabPaneTouchInteraction.prototype.clear = function () {}

/**
 * 获取此类字符串类名
 * @method twaver.controls.TabPaneTouchInteraction.getClassName
 * @return {String} 返回此类字符串类名
 */
twaver.controls.TabPaneTouchInteraction.prototype.getClassName = function () {}

/**
 * 获取当前触摸点下可移动选项卡的HTML元素
 * @method twaver.controls.TabPaneTouchInteraction.getMovableDivAt
 * @param {TouchEvent} e 触摸事件
 * @return {HTMLDivElement} 返回当前触摸点下可移动选项卡的HTML元素
 */
twaver.controls.TabPaneTouchInteraction.prototype.getMovableDivAt = function (e) {}

/**
 * 获取当前触摸点下的选项卡
 * @method twaver.controls.TabPaneTouchInteraction.getTabAt
 * @param {TouchEvent} e 触摸事件
 * @return {twaver.Tab} 返回当前触摸点下的选项卡
 */
twaver.controls.TabPaneTouchInteraction.prototype.getTabAt = function (e) {}

/**
 * 获取当前触摸点下的选项卡信息
 * @method twaver.controls.TabPaneTouchInteraction.getTabInfoAt
 * @param {TouchEvent} e 触摸事件
 * @return {Object} 返回当前触摸点下的选项卡信息
 */
twaver.controls.TabPaneTouchInteraction.prototype.getTabInfoAt = function (e) {}

/**
 * 获取当前触摸点相对于选项卡面板的x坐标值
 * @method twaver.controls.TabPaneTouchInteraction.getX
 * @param {TouchEvent} e 触摸事件
 * @return {Number} 返回当前触摸点相对于选项卡面板的x坐标值
 */
twaver.controls.TabPaneTouchInteraction.prototype.getX = function (e) {}

/**
 * 处理触摸结束事件
 * @method twaver.controls.TabPaneTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.TabPaneTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.controls.TabPaneTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.TabPaneTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.controls.TabPaneTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.TabPaneTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 
 * @property constructor
 * @type Object
 */
twaver.Defaults = function () {}

/**
 * 可折叠面板的底部边框颜色, 默认值为lightgray
 * @property ACCORDION_BORDER_BOTTOM_COLOR
 * @type String
 * @static
 */
twaver.Defaults.ACCORDION_BORDER_BOTTOM_COLOR = function () {}

/**
 * 可折叠面板收缩后的图标, 默认为collapse_icon
 * @property ACCORDION_COLLAPSE_ICON
 * @type String
 * @static
 */
twaver.Defaults.ACCORDION_COLLAPSE_ICON = function () {}

/**
 * 可折叠面板展开后的图标, 默认值为expand_icon
 * @property ACCORDION_EXPAND_ICON
 * @type String
 * @static
 */
twaver.Defaults.ACCORDION_EXPAND_ICON = function () {}

/**
 * 可折叠面板图标位置，默认为'left'，可选值为'left', 'right'
 * @property ACCORDION_ICON_POSITION
 * @type String
 * @static
 */
twaver.Defaults.ACCORDION_ICON_POSITION = function () {}

/**
 * 可折叠面板标题背景颜色, 默认值为#EBEBEB
 * @property ACCORDION_TITLE_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.ACCORDION_TITLE_BACKGROUND = function () {}

/**
 * 可折叠面板的标题高度, 默认值为20
 * @property ACCORDION_TITLE_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.ACCORDION_TITLE_HEIGHT = function () {}

/**
 * 附件画连线时, 线条两端的样式, 默认值为butt
 * @property ATTACHMENT_CAP
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_CAP = function () {}

/**
 * 附件内容高度, 默认值为20
 * @property ATTACHMENT_CONTENT_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT = function () {}

/**
 * 附件内容宽度, 默认值为30
 * @property ATTACHMENT_CONTENT_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_CONTENT_WIDTH = function () {}

/**
 * 附件圆角半径, 默认值为5
 * @property ATTACHMENT_CORNER_RADIUS
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_CORNER_RADIUS = function () {}

/**
 * 附件显示的方向, 默认值为right
 * @property ATTACHMENT_DIRECTION
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_DIRECTION = function () {}

/**
 * 附件是否填充, 默认值为false
 * @property ATTACHMENT_FILL
 * @type Boolean
 * @static
 */
twaver.Defaults.ATTACHMENT_FILL = function () {}

/**
 * 附件填充颜色, 默认值为#000000
 * @property ATTACHMENT_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_FILL_COLOR = function () {}

/**
 * 附件渐变色填充样式, 默认值为null, 表示不用渐变色填充
 * @property ATTACHMENT_GRADIENT
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_GRADIENT = function () {}

/**
 * 附件渐变填充颜色, 默认值为#FFFFFF
 * @property ATTACHMENT_GRADIENT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_GRADIENT_COLOR = function () {}

/**
 * 附件画线时，线条连接点样式, 默认值为miter
 * @property ATTACHMENT_JOIN
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_JOIN = function () {}

/**
 * 附件边框颜色, 默认值为#000000
 * @property ATTACHMENT_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_OUTLINE_COLOR = function () {}

/**
 * 附件边框宽度, 默认值为-1
 * @property ATTACHMENT_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH = function () {}

/**
 * 附件内容和边界之间的间距, 默认值为0
 * @property ATTACHMENT_PADDING
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_PADDING = function () {}

/**
 * 附件内容和下边界之间的间距, 默认值为0
 * @property ATTACHMENT_PADDING_BOTTOM
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_PADDING_BOTTOM = function () {}

/**
 * 附件内容和左边界之间的间距, 默认值为0
 * @property ATTACHMENT_PADDING_LEFT
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_PADDING_LEFT = function () {}

/**
 * 附件内容和右边界之间的间距, 默认值为0
 * @property ATTACHMENT_PADDING_RIGHT
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_PADDING_RIGHT = function () {}

/**
 * 附件内容和上边界之间的间距, 默认值为0
 * @property ATTACHMENT_PADDING_TOP
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_PADDING_TOP = function () {}

/**
 * 附件箭头长度, 默认值为10
 * @property ATTACHMENT_POINTER_LENGTH
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_POINTER_LENGTH = function () {}

/**
 * 附件箭头宽度, 默认值为8
 * @property ATTACHMENT_POINTER_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_POINTER_WIDTH = function () {}

/**
 * 附件相对于网元位置, 默认值为topright.topright
 * @property ATTACHMENT_POSITION
 * @type String
 * @static
 */
twaver.Defaults.ATTACHMENT_POSITION = function () {}

/**
 * 附件选中时是否有阴影效果, 默认值为true
 * @property ATTACHMENT_SHADOWABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.ATTACHMENT_SHADOWABLE = function () {}

/**
 * 附件x轴偏移量, 默认值为0
 * @property ATTACHMENT_XOFFSET
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_XOFFSET = function () {}

/**
 * 附件y轴偏移量, 默认值为0
 * @property ATTACHMENT_YOFFSET
 * @type Number
 * @static
 */
twaver.Defaults.ATTACHMENT_YOFFSET = function () {}

/**
 * 柱状图y轴最小值, 默认值为0
 * @property BARCHART_LOWER_LIMIT
 * @type Number
 * @static
 */
twaver.Defaults.BARCHART_LOWER_LIMIT = function () {}

/**
 * 柱状图类型, 默认值为default
 * @property BARCHART_TYPE
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_TYPE = function () {}

/**
 * 柱状图y轴最大值, 默认值为null, 表示未设置
 * @property BARCHART_UPPER_LIMIT
 * @type Object
 * @static
 */
twaver.Defaults.BARCHART_UPPER_LIMIT = function () {}

/**
 * 柱状图x轴线条颜色, 默认值为#808080
 * @property BARCHART_XAXIS_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_XAXIS_LINE_COLOR = function () {}

/**
 * 柱状图x轴线条宽度, 默认值为1
 * @property BARCHART_XAXIS_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.BARCHART_XAXIS_LINE_WIDTH = function () {}

/**
 * 柱状图x轴文字颜色, 默认值为#000000
 * @property BARCHART_XAXIS_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_XAXIS_TEXT_COLOR = function () {}

/**
 * 柱状图x轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica
 * @property BARCHART_XAXIS_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_XAXIS_TEXT_FONT = function () {}

/**
 * 柱状图x轴刻度文字颜色, 默认值为#000000
 * @property BARCHART_XSCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_XSCALE_TEXT_COLOR = function () {}

/**
 * 柱状图x轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property BARCHART_XSCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_XSCALE_TEXT_FONT = function () {}

/**
 * 柱状图x轴刻度文字方向, 默认值为horizontal
 * @property BARCHART_XSCALE_TEXT_ORIENTATION
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_XSCALE_TEXT_ORIENTATION = function () {}

/**
 * 柱状图y轴线条颜色, 默认值为#808080
 * @property BARCHART_YAXIS_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_YAXIS_LINE_COLOR = function () {}

/**
 * 柱状图y轴线条宽度, 默认值为1
 * @property BARCHART_YAXIS_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.BARCHART_YAXIS_LINE_WIDTH = function () {}

/**
 * 柱状图y轴文字颜色, 默认值为#000000
 * @property BARCHART_YAXIS_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_YAXIS_TEXT_COLOR = function () {}

/**
 * 柱状图y轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica
 * @property BARCHART_YAXIS_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_YAXIS_TEXT_FONT = function () {}

/**
 * 柱状图y轴刻度线条颜色, 默认值为#808080
 * @property BARCHART_YSCALE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_LINE_COLOR = function () {}

/**
 * 柱状图y轴刻度线条宽度, 默认值为0.3
 * @property BARCHART_YSCALE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_LINE_WIDTH = function () {}

/**
 * 柱状图y轴最小刻度文字是否可见, 默认值为false
 * @property BARCHART_YSCALE_MIN_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_MIN_TEXT_VISIBLE = function () {}

/**
 * 柱状图y轴刻度线间隔(按像素), 默认值为20
 * @property BARCHART_YSCALE_PIXEL_GAP
 * @type Number
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_PIXEL_GAP = function () {}

/**
 * 柱状图y轴刻度文字颜色, 默认值为#000000
 * @property BARCHART_YSCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_TEXT_COLOR = function () {}

/**
 * 柱状图y轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property BARCHART_YSCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_TEXT_FONT = function () {}

/**
 * 柱状图y轴刻度文字是否可见, 默认值为true
 * @property BARCHART_YSCALE_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_TEXT_VISIBLE = function () {}

/**
 * 柱状图y轴刻度线间隔(按值), 默认值为0
 * @property BARCHART_YSCALE_VALUE_GAP
 * @type Number
 * @static
 */
twaver.Defaults.BARCHART_YSCALE_VALUE_GAP = function () {}

/**
 * 布局面板水平间距, 默认值为0
 * @property BORDERPANE_HGAP
 * @type Number
 * @static
 */
twaver.Defaults.BORDERPANE_HGAP = function () {}

/**
 * 布局面板垂直间距, 默认值为0
 * @property BORDERPANE_VGAP
 * @type Number
 * @static
 */
twaver.Defaults.BORDERPANE_VGAP = function () {}

/**
 * 气泡图y轴最小值, 默认值为null, 表示没有最小值
 * @property BUBBLECHART_LOWER_LIMIT
 * @type Object
 * @static
 */
twaver.Defaults.BUBBLECHART_LOWER_LIMIT = function () {}

/**
 * 气泡图选中阴影颜色, 默认值为#000000
 * @property BUBBLECHART_SELECT_SHADOW_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_SELECT_SHADOW_COLOR = function () {}

/**
 * 气泡图选中阴影偏移量, 默认值为3
 * @property BUBBLECHART_SELECT_SHADOW_OFFSET
 * @type Number
 * @static
 */
twaver.Defaults.BUBBLECHART_SELECT_SHADOW_OFFSET = function () {}

/**
 * 气泡图y轴最大值, 默认值为null, 表示没有最大值
 * @property BUBBLECHART_UPPER_LIMIT
 * @type Object
 * @static
 */
twaver.Defaults.BUBBLECHART_UPPER_LIMIT = function () {}

/**
 * 气泡图x轴线条颜色, 默认值为#808080
 * @property BUBBLECHART_XAXIS_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_XAXIS_LINE_COLOR = function () {}

/**
 * 气泡图x轴线条宽度, 默认值为1
 * @property BUBBLECHART_XAXIS_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.BUBBLECHART_XAXIS_LINE_WIDTH = function () {}

/**
 * 气泡图x轴最小值, 默认值为null, 表示无最小值
 * @property BUBBLECHART_XAXIS_LOWER_LIMIT
 * @type Object
 * @static
 */
twaver.Defaults.BUBBLECHART_XAXIS_LOWER_LIMIT = function () {}

/**
 * 气泡图x轴文字颜色, 默认值为#000000
 * @property BUBBLECHART_XAXIS_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_XAXIS_TEXT_COLOR = function () {}

/**
 * 气泡图x轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica
 * @property BUBBLECHART_XAXIS_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_XAXIS_TEXT_FONT = function () {}

/**
 * 气泡图x轴最大值, 默认值为null, 表示无最大值
 * @property BUBBLECHART_XAXIS_UPPER_LIMIT
 * @type Object
 * @static
 */
twaver.Defaults.BUBBLECHART_XAXIS_UPPER_LIMIT = function () {}

/**
 * 气泡图x轴刻度线条颜色, 默认值为#808080
 * @property BUBBLECHART_XSCALE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_XSCALE_LINE_COLOR = function () {}

/**
 * 气泡图x轴刻度线条宽度, 默认值为0.3
 * @property BUBBLECHART_XSCALE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.BUBBLECHART_XSCALE_LINE_WIDTH = function () {}

/**
 * 气泡图x轴刻度文字颜色, 默认值为#000000
 * @property BUBBLECHART_XSCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_XSCALE_TEXT_COLOR = function () {}

/**
 * 气泡图x轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property BUBBLECHART_XSCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_XSCALE_TEXT_FONT = function () {}

/**
 * 气泡图x轴刻度文字方向, 默认值为horizontal
 * @property BUBBLECHART_XSCALE_TEXT_ORIENTATION
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_XSCALE_TEXT_ORIENTATION = function () {}

/**
 * 气泡图y轴线条颜色, 默认值为#808080
 * @property BUBBLECHART_YAXIS_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_YAXIS_LINE_COLOR = function () {}

/**
 * 气泡图y轴线条宽度, 默认值为1
 * @property BUBBLECHART_YAXIS_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.BUBBLECHART_YAXIS_LINE_WIDTH = function () {}

/**
 * 气泡图y轴文字颜色, 默认值为#000000
 * @property BUBBLECHART_YAXIS_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_YAXIS_TEXT_COLOR = function () {}

/**
 * 气泡图y轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica
 * @property BUBBLECHART_YAXIS_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_YAXIS_TEXT_FONT = function () {}

/**
 * 气泡图y轴刻度线条颜色, 默认值为#808080
 * @property BUBBLECHART_YSCALE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_LINE_COLOR = function () {}

/**
 * 气泡图y轴刻度线条宽度, 默认值为0.3
 * @property BUBBLECHART_YSCALE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_LINE_WIDTH = function () {}

/**
 * 气泡图y轴刻度最小值是否可见, 默认值为false
 * @property BUBBLECHART_YSCALE_MIN_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_MIN_TEXT_VISIBLE = function () {}

/**
 * 气泡图y轴刻度间距(按像素), 默认值为20
 * @property BUBBLECHART_YSCALE_PIXEL_GAP
 * @type Number
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_PIXEL_GAP = function () {}

/**
 * 气泡图y轴刻度文字颜色, 默认值为#000000
 * @property BUBBLECHART_YSCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_TEXT_COLOR = function () {}

/**
 * 气泡图y轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property BUBBLECHART_YSCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_TEXT_FONT = function () {}

/**
 * 气泡图y轴刻度文字是否可见, 默认值为true
 * @property BUBBLECHART_YSCALE_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_TEXT_VISIBLE = function () {}

/**
 * 气泡图y轴刻度间距(按值), 默认值为0
 * @property BUBBLECHART_YSCALE_VALUE_GAP
 * @type Number
 * @static
 */
twaver.Defaults.BUBBLECHART_YSCALE_VALUE_GAP = function () {}

/**
 * 调用延迟时的延迟时间(单位ms), 默认值为17
 * @property CALL_LATER_DELAY
 * @type Number
 * @static
 */
twaver.Defaults.CALL_LATER_DELAY = function () {}

/**
 * 网元UI对象生成器, 用于twaver.canvas.Network
 * @method twaver.Defaults.CANVASUI_FUNCTION
 * @param {twaver.canvas.Network} network 拓扑
 * @param {twaver.Element} element 网元
 * @return {twaver.canvas.ElementUI} 返回指定网元对应的UI对象
 * @example 默认实现为:
 * function (network, element) {
 *     var clazz = element.getCanvasUIClass();
 *     if (clazz) {
 *         return new clazz(network, element);
 *     }
 *     return null;
 * }
 * @static
 */
twaver.Defaults.CANVASUI_FUNCTION = function (network, element) {}

/**
 * 图表的背景是否填充, 默认值为true
 * @property CHART_BACKGROUND_FILL
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_BACKGROUND_FILL = function () {}

/**
 * 图表的背景填充色, 默认值为rgba(50,50,50,0.11)
 * @property CHART_BACKGROUND_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.CHART_BACKGROUND_FILL_COLOR = function () {}

/**
 * 图表背景渐进色样式, 默认值为linear.north
 * @property CHART_BACKGROUND_GRADIENT
 * @type String
 * @static
 */
twaver.Defaults.CHART_BACKGROUND_GRADIENT = function () {}

/**
 * 图表背景渐进色, 默认值为#FFFFFF
 * @property CHART_BACKGROUND_GRADIENT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.CHART_BACKGROUND_GRADIENT_COLOR = function () {}

/**
 * 图表背景边框颜色, 默认值为rgba(50,50,50,0.11)
 * @property CHART_BACKGROUND_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.CHART_BACKGROUND_OUTLINE_COLOR = function () {}

/**
 * 图表背景边框宽度, 默认值为1
 * @property CHART_BACKGROUND_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.CHART_BACKGROUND_OUTLINE_WIDTH = function () {}

/**
 * 图表背景是否可见, 默认值为false
 * @property CHART_BACKGROUND_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_BACKGROUND_VISIBLE = function () {}

/**
 * 双击图表是否还原至原始比例, 默认值为true
 * @property CHART_DOUBLE_CLICK_TO_RESET
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_DOUBLE_CLICK_TO_RESET = function () {}

/**
 * 图表选中误差, 当点击鼠标位置和图表的距离在指定范围内时, 认为图表被选中了, 默认值为0
 * @property CHART_SELECT_TOLERANCE
 * @type Number
 * @static
 */
twaver.Defaults.CHART_SELECT_TOLERANCE = function () {}

/**
 * 图表是否启用提示信息, 默认值为true
 * @property CHART_TOOLTIP_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_TOOLTIP_ENABLED = function () {}

/**
 * 图表值字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property CHART_VALUE_FONT
 * @type String
 * @static
 */
twaver.Defaults.CHART_VALUE_FONT = function () {}

/**
 * 图表值是否可见, 默认值为true
 * @property CHART_VALUE_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_VALUE_VISIBLE = function () {}

/**
 * 图表水平边距, 默认值为6
 * @property CHART_XGAP
 * @type Number
 * @static
 */
twaver.Defaults.CHART_XGAP = function () {}

/**
 * 图表x轴方向是否可移动, 默认值为true
 * @property CHART_XTRANSLATE_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_XTRANSLATE_ENABLED = function () {}

/**
 * 图表x轴方向是否可缩放, 默认值为true
 * @property CHART_XZOOM_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_XZOOM_ENABLED = function () {}

/**
 * 图表垂直边距, 默认值为6
 * @property CHART_YGAP
 * @type Number
 * @static
 */
twaver.Defaults.CHART_YGAP = function () {}

/**
 * 图表y轴方向是否可移动, 默认值为true
 * @property CHART_YTRANSLATE_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_YTRANSLATE_ENABLED = function () {}

/**
 * 图表y轴方向是否可缩放, 默认值为true
 * @property CHART_YZOOM_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.CHART_YZOOM_ENABLED = function () {}

/**
 * 图表面板图例位置, 默认值为bottom
 * @property CHARTPANE_LEGEND_ORIENTATION
 * @type String
 * @static
 */
twaver.Defaults.CHARTPANE_LEGEND_ORIENTATION = function () {}

/**
 * 图表面板图例宽度, 默认值为80
 * @property CHARTPANE_LEGEND_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.CHARTPANE_LEGEND_WIDTH = function () {}

/**
 * 图表面板标题栏高度, 默认值为20
 * @property CHARTPANE_TITLE_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.CHARTPANE_TITLE_HEIGHT = function () {}

/**
 * 图表面板标题栏水平对齐方式, 默认值为center
 * @property CHARTPANE_TITLE_HORIZONTAL_ALIGN
 * @type String
 * @static
 */
twaver.Defaults.CHARTPANE_TITLE_HORIZONTAL_ALIGN = function () {}

/**
 * 可选颜色数组
 * @property COLORS
 * @type Array
 * @static
 */
twaver.Defaults.COLORS = function () {}

/**
 * 表格列是否可编辑, 默认值为false
 * @property COLUMN_EDITABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.COLUMN_EDITABLE = function () {}

/**
 * 表格列水平对齐方式, 默认值为null
 * @property COLUMN_HORIZONTAL_ALIGN
 * @type String
 * @static
 */
twaver.Defaults.COLUMN_HORIZONTAL_ALIGN = function () {}

/**
 * 表格列内容是否为纯文本，默认为true
 * @property COLUMN_INNER_TEXT
 * @type Boolean
 * @static
 */
twaver.Defaults.COLUMN_INNER_TEXT = function () {}

/**
 * 表格列是否可移动, 默认值为true
 * @property COLUMN_MOVABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.COLUMN_MOVABLE = function () {}

/**
 * 表格列属性类型, 默认值为accessor
 * @property COLUMN_PROPERTY_TYPE
 * @type String
 * @static
 */
twaver.Defaults.COLUMN_PROPERTY_TYPE = function () {}

/**
 * 表格列渲染器, 默认值为null
 * @property COLUMN_RENDER_CELL
 * @type Function
 * @static
 */
twaver.Defaults.COLUMN_RENDER_CELL = function () {}

/**
 * 表格列头渲染器, 默认值为null
 * @property COLUMN_RENDER_HEADER
 * @type Object
 * @static
 */
twaver.Defaults.COLUMN_RENDER_HEADER = function () {}

/**
 * 表格列是否可改变大小, 默认值为true
 * @property COLUMN_RESIZABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.COLUMN_RESIZABLE = function () {}

/**
 * 表格列是否可排序, 默认值为true
 * @property COLUMN_SORTABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.COLUMN_SORTABLE = function () {}

/**
 * 表格列值类型, 默认值为string
 * @property COLUMN_VALUE_TYPE
 * @type String
 * @static
 */
twaver.Defaults.COLUMN_VALUE_TYPE = function () {}

/**
 * 表格列是否可见, 默认值为true
 * @property COLUMN_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.COLUMN_VISIBLE = function () {}

/**
 * 表格列宽度, 默认值为80
 * @property COLUMN_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.COLUMN_WIDTH = function () {}

/**
 * 仪表盘外圈填充颜色, 默认值为#808080
 * @property DIALCHART_COLOR_RANGE_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_COLOR_RANGE_FILL_COLOR = function () {}

/**
 * 仪表盘结束角度, 默认值为360
 * @property DIALCHART_END_ANGLE
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_END_ANGLE = function () {}

/**
 * 仪表盘内圈偏暗半径, 默认值为10
 * @property DIALCHART_INNER_DARKER_RADIUS
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_INNER_DARKER_RADIUS = function () {}

/**
 * 仪表盘内圈所占比例, 默认值为0.8
 * @property DIALCHART_INNER_RADIUS
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_INNER_RADIUS = function () {}

/**
 * 仪表盘最小值, 默认值为0
 * @property DIALCHART_LOWER_LIMIT
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_LOWER_LIMIT = function () {}

/**
 * 仪表盘大刻度数量, 默认值为11
 * @property DIALCHART_MAJOR_SCALE_COUNT
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_MAJOR_SCALE_COUNT = function () {}

/**
 * 仪表盘大刻度颜色, 默认值为#000000
 * @property DIALCHART_MAJOR_SCALE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_COLOR = function () {}

/**
 * 仪表盘大刻度长度, 默认值为8
 * @property DIALCHART_MAJOR_SCALE_LINE_LENGTH
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_LENGTH = function () {}

/**
 * 仪表盘大刻度宽度, 默认值为2
 * @property DIALCHART_MAJOR_SCALE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_WIDTH = function () {}

/**
 * 仪表盘小刻度数量, 默认值为4
 * @property DIALCHART_MINOR_SCALE_COUNT
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_MINOR_SCALE_COUNT = function () {}

/**
 * 仪表盘小刻度颜色, 默认值为#000000
 * @property DIALCHART_MINOR_SCALE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_COLOR = function () {}

/**
 * 仪表盘小刻度长度, 默认值为4
 * @property DIALCHART_MINOR_SCALE_LINE_LENGTH
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_LENGTH = function () {}

/**
 * 仪表盘小刻度宽度, 默认值为1
 * @property DIALCHART_MINOR_SCALE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_WIDTH = function () {}

/**
 * 仪表盘外圈偏亮半径, 默认值为10
 * @property DIALCHART_OUTER_BRIGHTER_RADIUS
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_OUTER_BRIGHTER_RADIUS = function () {}

/**
 * 仪表盘边框颜色, 默认值为#808080
 * @property DIALCHART_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_OUTLINE_COLOR = function () {}

/**
 * 仪表盘边框宽度, 默认值为0
 * @property DIALCHART_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_OUTLINE_WIDTH = function () {}

/**
 * 仪表盘轴是否填充, 默认值为true
 * @property DIALCHART_PIVOT_FILL
 * @type Boolean
 * @static
 */
twaver.Defaults.DIALCHART_PIVOT_FILL = function () {}

/**
 * 仪表盘轴填充颜色, 默认值为#808080
 * @property DIALCHART_PIVOT_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_PIVOT_FILL_COLOR = function () {}

/**
 * 仪表盘轴边框颜色, 默认值为#808080
 * @property DIALCHART_PIVOT_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_PIVOT_OUTLINE_COLOR = function () {}

/**
 * 仪表盘轴边框宽度, 默认值为0
 * @property DIALCHART_PIVOT_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_PIVOT_OUTLINE_WIDTH = function () {}

/**
 * 仪表盘轴半径, 默认值为10
 * @property DIALCHART_PIVOT_RADIUS
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_PIVOT_RADIUS = function () {}

/**
 * 仪表盘刻度是否在内部, 默认值为true
 * @property DIALCHART_SCALE_INSIDE
 * @type Boolean
 * @static
 */
twaver.Defaults.DIALCHART_SCALE_INSIDE = function () {}

/**
 * 仪表盘最小刻度值是否可见, 默认值为true
 * @property DIALCHART_SCALE_LOWER_LIMIT_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.DIALCHART_SCALE_LOWER_LIMIT_TEXT_VISIBLE = function () {}

/**
 * 仪表盘刻度字体颜色, 默认值为#000000
 * @property DIALCHART_SCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_SCALE_TEXT_COLOR = function () {}

/**
 * 仪表盘刻度字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property DIALCHART_SCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_SCALE_TEXT_FONT = function () {}

/**
 * 仪表盘刻度文字是否可见, 默认值为true
 * @property DIALCHART_SCALE_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.DIALCHART_SCALE_TEXT_VISIBLE = function () {}

/**
 * 仪表盘最小刻度值是否可见, 默认值为true
 * @property DIALCHART_SCALE_UPPER_LIMIT_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.DIALCHART_SCALE_UPPER_LIMIT_TEXT_VISIBLE = function () {}

/**
 * 仪表盘选中时阴影颜色, 默认值为#000000
 * @property DIALCHART_SELECT_SHADOW_COLOR
 * @type String
 * @static
 */
twaver.Defaults.DIALCHART_SELECT_SHADOW_COLOR = function () {}

/**
 * 仪表盘选中时阴影偏移量, 默认值为3
 * @property DIALCHART_SELECT_SHADOW_OFFSET
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_SELECT_SHADOW_OFFSET = function () {}

/**
 * 仪表盘起始角度, 默认值为0
 * @property DIALCHART_START_ANGLE
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_START_ANGLE = function () {}

/**
 * 仪表盘最大值, 默认值为100
 * @property DIALCHART_UPPER_LIMIT
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_UPPER_LIMIT = function () {}

/**
 * 仪表盘值位置, 默认值为0.5
 * @property DIALCHART_VALUE_POSITION
 * @type Number
 * @static
 */
twaver.Defaults.DIALCHART_VALUE_POSITION = function () {}

/**
 * 网元UI对象生成器
 * @method twaver.Defaults.ELEMENTUI_FUNCTION
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Element} element 网元
 * @return {twaver.network.ElementUI} 返回指定网元对应的UI对象
 * @static
 */
twaver.Defaults.ELEMENTUI_FUNCTION = function (network, element) {}

/**
 * 点击视图时, 是否让视图获得焦点, 默认值为true
 * @property FOCUS_ON_CLICK
 * @type Boolean
 * @static
 */
twaver.Defaults.FOCUS_ON_CLICK = function () {}

/**
 * 默认字体样式(12px arial, tahoma, sans-serif, helvetica)
 * @property FONT
 * @type String
 * @static
 */
twaver.Defaults.FONT = function () {}

/**
 * 总线网元图标, 默认值为bus_icon
 * @property ICON_BUS
 * @type String
 * @static
 */
twaver.Defaults.ICON_BUS = function () {}

/**
 * 数据的图标, 默认值为data_icon
 * @property ICON_DATA
 * @type String
 * @static
 */
twaver.Defaults.ICON_DATA = function () {}

/**
 * 数据容器的图标,默认值为databox_icon
 * @property ICON_DATABOX
 * @type String
 * @static
 */
twaver.Defaults.ICON_DATABOX = function () {}

/**
 * 网格图标, 默认值为grid_icon
 * @property ICON_GRID
 * @type String
 * @static
 */
twaver.Defaults.ICON_GRID = function () {}

/**
 * 组图标, 默认值为group_icon
 * @property ICON_GROUP
 * @type String
 * @static
 */
twaver.Defaults.ICON_GROUP = function () {}

/**
 * 连线图标, 默认值为link_icon
 * @property ICON_LINK
 * @type String
 * @static
 */
twaver.Defaults.ICON_LINK = function () {}

/**
 * 子网连线图标, 默认值为linksubnetwork_icon
 * @property ICON_LINKSUBNETWORK
 * @type String
 * @static
 */
twaver.Defaults.ICON_LINKSUBNETWORK = function () {}

/**
 * 节点图标, 默认值为node_icon
 * @property ICON_NODE
 * @type String
 * @static
 */
twaver.Defaults.ICON_NODE = function () {}

/**
 * 折线图标, 默认值为shapelink_icon
 * @property ICON_SHAPELINK
 * @type String
 * @static
 */
twaver.Defaults.ICON_SHAPELINK = function () {}

/**
 * 多边形节点图标, 默认值为shapenode_icon
 * @property ICON_SHAPENODE
 * @type String
 * @static
 */
twaver.Defaults.ICON_SHAPENODE = function () {}

/**
 * 多边形子网图标, 默认值为shapesubnetwork_icon
 * @property ICON_SHAPESUBNETWORK
 * @type String
 * @static
 */
twaver.Defaults.ICON_SHAPESUBNETWORK = function () {}

/**
 * 子网图标, 默认值为network_icon
 * @property ICON_SUBNETWORK
 * @type String
 * @static
 */
twaver.Defaults.ICON_SUBNETWORK = function () {}

/**
 * 组图片, 默认值为group_image
 * @property IMAGE_GROUP
 * @type String
 * @static
 */
twaver.Defaults.IMAGE_GROUP = function () {}

/**
 * 节点图片, 默认值为node_image
 * @property IMAGE_NODE
 * @type String
 * @static
 */
twaver.Defaults.IMAGE_NODE = function () {}

/**
 * 子网图片, 默认值为subnetwork_image
 * @property IMAGE_SUBNETWORK
 * @type String
 * @static
 */
twaver.Defaults.IMAGE_SUBNETWORK = function () {}

/**
 * 连线是否调整到节点下面，默认为false
 * @property IS_LINK_ADJUSTED_TO_BOTTOM
 * @type Boolean
 * @static
 */
twaver.Defaults.IS_LINK_ADJUSTED_TO_BOTTOM = function () {}

/**
 * 是否不调用e.preventDefault方法
 * @method twaver.Defaults.KEEP_DEFAULT_FUNCTION
 * @param {Event} e 鼠标或键盘事件
 * @return {Boolean} 返回是否不调用e.preventDefault方法
 * @static
 */
twaver.Defaults.KEEP_DEFAULT_FUNCTION = function (e) {}

/**
 * 默认层ID(default)
 * @property LAYER_DEFAULT_ID
 * @type String
 * @static
 */
twaver.Defaults.LAYER_DEFAULT_ID = function () {}

/**
 * 默认层名称(default)
 * @property LAYER_DEFAULT_NAME
 * @type String
 * @static
 */
twaver.Defaults.LAYER_DEFAULT_NAME = function () {}

/**
 * 图表图例隐藏颜色, 默认值为#BABBBC
 * @property LEGENDPANE_HIDDEN_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LEGENDPANE_HIDDEN_COLOR = function () {}

/**
 * 图表图例图标高度, 默认值为10
 * @property LEGENDPANE_ICON_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.LEGENDPANE_ICON_HEIGHT = function () {}

/**
 * 图表图例图标圆角半径, 默认值为0
 * @property LEGENDPANE_ICON_RADIUS
 * @type Number
 * @static
 */
twaver.Defaults.LEGENDPANE_ICON_RADIUS = function () {}

/**
 * 图表图例图标宽度, 默认值为10
 * @property LEGENDPANE_ICON_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.LEGENDPANE_ICON_WIDTH = function () {}

/**
 * 图表图例方向, 默认值为horizontal
 * @property LEGENDPANE_ORIENTATION
 * @type String
 * @static
 */
twaver.Defaults.LEGENDPANE_ORIENTATION = function () {}

/**
 * 图表图例行高, 默认值为20
 * @property LEGENDPANE_ROW_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.LEGENDPANE_ROW_HEIGHT = function () {}

/**
 * 图表图例选中背景色, 默认值为#00007D
 * @property LEGENDPANE_SELECT_BACKGROUND_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LEGENDPANE_SELECT_BACKGROUND_COLOR = function () {}

/**
 * 图表图例选中前景色, 默认值为#FFFFFF
 * @property LEGENDPANE_SELECT_FOREGROUND_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LEGENDPANE_SELECT_FOREGROUND_COLOR = function () {}

/**
 * 曲线图上值为空时, 是否不画线, 默认值为true
 * @property LINECHART_INTERRUPTABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.LINECHART_INTERRUPTABLE = function () {}

/**
 * 曲线图y轴最小值, 默认值为null, 表示没有最小值
 * @property LINECHART_LOWER_LIMIT
 * @type Object
 * @static
 */
twaver.Defaults.LINECHART_LOWER_LIMIT = function () {}

/**
 * 曲线图y轴最大值, 默认值为null, 表示没有最大值
 * @property LINECHART_UPPER_LIMIT
 * @type Object
 * @static
 */
twaver.Defaults.LINECHART_UPPER_LIMIT = function () {}

/**
 * 曲线图x轴线条颜色, 默认值为#808080
 * @property LINECHART_XAXIS_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_XAXIS_LINE_COLOR = function () {}

/**
 * 曲线图x轴线条宽度, 默认值为1
 * @property LINECHART_XAXIS_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.LINECHART_XAXIS_LINE_WIDTH = function () {}

/**
 * 曲线图x轴文字颜色, 默认值为#000000
 * @property LINECHART_XAXIS_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_XAXIS_TEXT_COLOR = function () {}

/**
 * 曲线图x轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica
 * @property LINECHART_XAXIS_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_XAXIS_TEXT_FONT = function () {}

/**
 * 曲线图x轴刻度线条颜色, 默认值为#808080
 * @property LINECHART_XSCALE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_XSCALE_LINE_COLOR = function () {}

/**
 * 曲线图x轴刻度线条宽度, 默认值为0.3
 * @property LINECHART_XSCALE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.LINECHART_XSCALE_LINE_WIDTH = function () {}

/**
 * 曲线图x轴刻度文字颜色, 默认值为#000000
 * @property LINECHART_XSCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_XSCALE_TEXT_COLOR = function () {}

/**
 * 曲线图x轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property LINECHART_XSCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_XSCALE_TEXT_FONT = function () {}

/**
 * 曲线图x轴刻度文字方向, 默认值为horizontal
 * @property LINECHART_XSCALE_TEXT_ORIENTATION
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_XSCALE_TEXT_ORIENTATION = function () {}

/**
 * 曲线图y轴线条颜色, 默认值为#808080
 * @property LINECHART_YAXIS_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_YAXIS_LINE_COLOR = function () {}

/**
 * 曲线图y轴线条宽度, 默认值为1
 * @property LINECHART_YAXIS_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.LINECHART_YAXIS_LINE_WIDTH = function () {}

/**
 * 曲线图y轴文字颜色, 默认值为#000000
 * @property LINECHART_YAXIS_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_YAXIS_TEXT_COLOR = function () {}

/**
 * 曲线图y轴文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica
 * @property LINECHART_YAXIS_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_YAXIS_TEXT_FONT = function () {}

/**
 * 曲线图y轴刻度线条颜色, 默认值为#808080
 * @property LINECHART_YSCALE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_LINE_COLOR = function () {}

/**
 * 曲线图y轴刻度线条宽度, 默认值为0.3
 * @property LINECHART_YSCALE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_LINE_WIDTH = function () {}

/**
 * 曲线图y轴刻度最小值是否可见, 默认值为false
 * @property LINECHART_YSCALE_MIN_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_MIN_TEXT_VISIBLE = function () {}

/**
 * 曲线图y轴刻度间距(按像素), 默认值为20
 * @property LINECHART_YSCALE_PIXEL_GAP
 * @type Number
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_PIXEL_GAP = function () {}

/**
 * 曲线图y轴刻度文字颜色, 默认值为#000000
 * @property LINECHART_YSCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_TEXT_COLOR = function () {}

/**
 * 曲线图y轴刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property LINECHART_YSCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_TEXT_FONT = function () {}

/**
 * 曲线图y轴刻度文字是否可见, 默认值为true
 * @property LINECHART_YSCALE_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_TEXT_VISIBLE = function () {}

/**
 * 曲线图y轴刻度间距(按值), 默认值为0
 * @property LINECHART_YSCALE_VALUE_GAP
 * @type Number
 * @static
 */
twaver.Defaults.LINECHART_YSCALE_VALUE_GAP = function () {}

/**
 * 获取连线捆绑时, 作为代理的连线的回调函数, 默认值为null
 * @property LINK_BUNDLE_AGENT_FUNCTION
 * @type Function
 * @static
 */
twaver.Defaults.LINK_BUNDLE_AGENT_FUNCTION = function () {}

/**
 * 列表缩进量, 默认值为2
 * @property LIST_INDENT
 * @type Number
 * @static
 */
twaver.Defaults.LIST_INDENT = function () {}

/**
 * 列表上键盘DELETE键是否可以删除行，默认值为true
 * @property LIST_KEYBOARD_REMOVE_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.LIST_KEYBOARD_REMOVE_ENABLED = function () {}

/**
 * 列表上键盘CTRL+A键是否可以选中所有行，默认值为true
 * @property LIST_KEYBOARD_SELECT_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.LIST_KEYBOARD_SELECT_ENABLED = function () {}

/**
 * 列表上数据被选中时, 列表是否自动滚动到被选中数据可见的区域, 默认值为true
 * @property LIST_MAKE_VISIBLE_ON_SELECTED
 * @type Boolean
 * @static
 */
twaver.Defaults.LIST_MAKE_VISIBLE_ON_SELECTED = function () {}

/**
 * 列表行号, 默认值为19
 * @property LIST_ROW_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.LIST_ROW_HEIGHT = function () {}

/**
 * 列表行线条颜色, 默认值为#DDD
 * @property LIST_ROW_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.LIST_ROW_LINE_COLOR = function () {}

/**
 * 列表行线条宽度, 默认值为0
 * @property LIST_ROW_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.LIST_ROW_LINE_WIDTH = function () {}

/**
 * 列表内容是否为纯文本，默认为true
 * @property LISTBASE_INNER_TEXT
 * @type Boolean
 * @static
 */
twaver.Defaults.LISTBASE_INNER_TEXT = function () {}

/**
 * 拓扑上双击空子网是否进入空子网, 默认值为true
 * @property NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK = function () {}

/**
 * 拓扑上双击组是否展开或合并组, 默认值为true
 * @property NETWORK_DOUBLECLICK_TO_GROUPEXPAND
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND = function () {}

/**
 * 拓扑上双击连线是否合并或展开连线分组, 默认值为true
 * @property NETWORK_DOUBLECLICK_TO_LINKBUNDLE
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE = function () {}

/**
 * 拓扑上双击子网是否进入子网, 默认值为true
 * @property NETWORK_DOUBLECLICK_TO_SUBNETWORK
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK = function () {}

/**
 * 拓扑上双击背景是否返回上一级子网, 默认值为true
 * @property NETWORK_DOUBLECLICK_TO_UPSUBNETWORK
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK = function () {}

/**
 * 拓扑上创建Link时, 鼠标移动到起始或结束节点上时, 节点周围的边框颜色, 默认值为rgba(184,211,240,0.7)
 * @property NETWORK_EDIT_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_EDIT_LINE_COLOR = function () {}

/**
 * 拓扑上创建Link时, 鼠标移动到起始或结束节点上时, 节点周围的边框宽度, 默认值为2
 * @property NETWORK_EDIT_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_EDIT_LINE_WIDTH = function () {}

/**
 * 拓扑上更改ShapeLink或ShapeNode时, 控制点的填充颜色, 默认值为#FFFF00
 * @property NETWORK_EDIT_POINT_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR = function () {}

/**
 * 拓扑上更改ShapeLink或ShapeNode时, 控制点的边框颜色, 默认值为#000000
 * @property NETWORK_EDIT_POINT_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR = function () {}

/**
 * 拓扑上更改ShapeLink或ShapeNode时, 控制点的边框宽度, 默认值为1
 * @property NETWORK_EDIT_POINT_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH = function () {}

/**
 * 拓扑上更改ShapeLink或ShapeNode时, 控制点的大小, 默认值为3
 * @property NETWORK_EDIT_POINT_SIZE
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_EDIT_POINT_SIZE = function () {}

/**
 * 拓扑上是否能用键盘Delete键删除选中网元, 默认值为true
 * @property NETWORK_KEYBOARD_REMOVE_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED = function () {}

/**
 * 拓扑上是否能用键盘CTRL+A键选中全部网元, 默认值为true
 * @property NETWORK_KEYBOARD_SELECT_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED = function () {}

/**
 * 拓扑上延迟移动网元时, 是否有动画效果
 * @property NETWORK_LAZYMOVE_ANIMATE
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE = function () {}

/**
 * 拓扑上延迟移动网元时, 是否填充被移动网元的标示框, 默认值为true
 * @property NETWORK_LAZYMOVE_FILL
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_LAZYMOVE_FILL = function () {}

/**
 * 拓扑上延迟移动网元时, 被移动网元的标示框的填充色, 默认值为rgba(184,211,240,0.4)
 * @property NETWORK_LAZYMOVE_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR = function () {}

/**
 * 拓扑上延迟移动网元时, 被移动网元的标示框的边框颜色, 默认值为#2877A8
 * @property NETWORK_LAZYMOVE_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR = function () {}

/**
 * 拓扑上延迟移动网元时, 被移动网元的标示框的边框宽度, 默认值为1
 * @property NETWORK_LAZYMOVE_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH = function () {}

/**
 * 是否限制拓扑原始位置不能为负坐标，默认为true
 * @property NETWORK_LIMIT_ELEMENT_INPOSITIVE_LOCATION
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_LIMIT_ELEMENT_INPOSITIVE_LOCATION = function () {}

/**
 * LINK的流动颜色
 * @property NETWORK_LINK_FLOW_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_LINK_FLOW_COLOR = function () {}

/**
 * LINK的流动间隔时间
 * @property NETWORK_LINK_FLOW_INTERVAL
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_LINK_FLOW_INTERVAL = function () {}

/**
 * LINK的流动步进
 * @property NETWORK_LINK_FLOW_STEPPING
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_LINK_FLOW_STEPPING = function () {}

/**
 * 拓扑上网元被选中时, 拓扑是否滚动到网元可见区域, 默认值为true
 * @property NETWORK_MAKE_VISIBLE_ON_SELECTED
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED = function () {}

/**
 * 拓扑图上非代理的连线是否可见, 默认值为false
 * @property NETWORK_NO_AGENT_LINK_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE = function () {}

/**
 * 拓扑图上是否启用框选，默认为true
 * @property NETWORK_RECT_SELECT_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_RECT_SELECT_ENABLED = function () {}

/**
 * 拓扑上网元不可见时, 是否删除对应的视图组件, 默认值为false
 * @property NETWORK_REMOVE_ELEMENTUI_ON_INVISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_REMOVE_ELEMENTUI_ON_INVISIBLE = function () {}

/**
 * 拓扑上延迟更改网元大小时, 是否有动画效果, 默认值为true
 * @property NETWORK_RESIZE_ANIMATE
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_RESIZE_ANIMATE = function () {}

/**
 * 拓扑上延迟更改网元大小时网元边框颜色, 默认值为#000000
 * @property NETWORK_RESIZE_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_RESIZE_LINE_COLOR = function () {}

/**
 * 拓扑上延迟更改网元大小时网元边框的宽度, 默认值为1
 * @property NETWORK_RESIZE_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH = function () {}

/**
 * 拓扑上更改网元大小时, 控制点的填充色, 默认值为#FFFFFF
 * @property NETWORK_RESIZE_POINT_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR = function () {}

/**
 * 拓扑上更改网元大小时, 控制点的边框颜色, 默认值为#000000
 * @property NETWORK_RESIZE_POINT_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR = function () {}

/**
 * 拓扑上更改网元大小时, 控制点的边框宽度, 默认值为1
 * @property NETWORK_RESIZE_POINT_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH = function () {}

/**
 * 更改网元大小的控制点的大小，默认为3
 * @property NETWORK_RESIZE_POINT_SIZE
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_RESIZE_POINT_SIZE = function () {}

/**
 * 旋转控制点的填充色，默认为#FFFF00
 * @property NETWORK_ROTATE_POINT_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_POINT_FILL_COLOR = function () {}

/**
 * 旋转控制点的偏移量，默认为15
 * @property NETWORK_ROTATE_POINT_OFFSET
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_POINT_OFFSET = function () {}

/**
 * 旋转控制点的边框颜色，默认为rgba(0,0,0,1)
 * @property NETWORK_ROTATE_POINT_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_POINT_OUTLINE_COLOR = function () {}

/**
 * 旋转控制点的边框宽度，默认为1
 * @property NETWORK_ROTATE_POINT_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_POINT_OUTLINE_WIDTH = function () {}

/**
 * 旋转控制点的大小，默认为5
 * @property NETWORK_ROTATE_POINT_SIZE
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_POINT_SIZE = function () {}

/**
 * 旋转刻度填充色，默认为rgb(227,166,103)
 * @property NETWORK_ROTATE_SCALE_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_SCALE_FILL_COLOR = function () {}

/**
 * 旋转刻度文字字体颜色，默认为#FFFFFF
 * @property NETWORK_ROTATE_SCALE_FONT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_SCALE_FONT_COLOR = function () {}

/**
 * 旋转刻度高度，默认为20
 * @property NETWORK_ROTATE_SCALE_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_SCALE_HEIGHT = function () {}

/**
 * 旋转刻度宽度，默认为30
 * @property NETWORK_ROTATE_SCALE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_ROTATE_SCALE_WIDTH = function () {}

/**
 * 拓扑上框选网元时, 框选框的填充色, 默认值为rgba(184,211,240,0.4)
 * @property NETWORK_SELECT_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_SELECT_FILL_COLOR = function () {}

/**
 * 拓扑选中模式, 默认值为mix
 * @property NETWORK_SELECT_MODE
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_SELECT_MODE = function () {}

/**
 * 拓扑上框选网元时, 框选框的边框颜色, 默认值为@2877A8
 * @property NETWORK_SELECT_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR = function () {}

/**
 * 拓扑上框选网元时, 框选框的边框宽度, 默认值为1
 * @property NETWORK_SELECT_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH = function () {}

/**
 * 容差选中像素数
 * @property NETWORK_SELECTION_TOLERANCE
 * @type Number
 * @static
 */
twaver.Defaults.NETWORK_SELECTION_TOLERANCE = function () {}

/**
 * 拓扑上选中网元时, 是否将网元置顶, 默认值为true
 * @property NETWORK_SENDTOTOP_ON_SELECTED
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED = function () {}

/**
 * 拓扑上进入子网时是否有动画效果, 默认值为true
 * @property NETWORK_SUBNETWORK_ANIMATE
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE = function () {}

/**
 * 是否启用拓扑上网元的提示信息, 默认值为true
 * @property NETWORK_TOOLTIP_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.NETWORK_TOOLTIP_ENABLED = function () {}

/**
 * 默认网元高度(50)
 * @property NODE_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.NODE_HEIGHT = function () {}

/**
 * 默认网元宽度(50)
 * @property NODE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.NODE_WIDTH = function () {}

/**
 * 鹰眼是否有动画效果, 默认值为true
 * @property OVERVIEW_ANIMATE
 * @type Boolean
 * @static
 */
twaver.Defaults.OVERVIEW_ANIMATE = function () {}

/**
 * 鹰眼背景填充色, 默认值为rgba(184,211,240,0.4)
 * @property OVERVIEW_FILL_COLOR
 * @type String
 * @static
 */
twaver.Defaults.OVERVIEW_FILL_COLOR = function () {}

/**
 * 鹰眼最大高度, 默认值为-1
 * @property OVERVIEW_MAX_PACKING_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT = function () {}

/**
 * 鹰眼最大宽度, 默认值为-1
 * @property OVERVIEW_MAX_PACKING_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH = function () {}

/**
 * 鹰眼边框颜色, 默认值为#BBD3F0
 * @property OVERVIEW_OUTLINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.OVERVIEW_OUTLINE_COLOR = function () {}

/**
 * 鹰眼边框宽度, 默认值为1
 * @property OVERVIEW_OUTLINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.OVERVIEW_OUTLINE_WIDTH = function () {}

/**
 * 鹰眼边距, 默认值为1
 * @property OVERVIEW_PADDING
 * @type Number
 * @static
 */
twaver.Defaults.OVERVIEW_PADDING = function () {}

/**
 * 在鹰眼上框选时, 选择框边框颜色, 默认值为#00000FF
 * @property OVERVIEW_SELECT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.OVERVIEW_SELECT_COLOR = function () {}

/**
 * 在鹰眼上框选时, 选择框边框宽度, 默认值为1
 * @property OVERVIEW_SELECT_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.OVERVIEW_SELECT_WIDTH = function () {}

/**
 * 饼图内环所占比例, 默认值为0.5
 * @property PIECHART_DONUT_RATE
 * @type Number
 * @static
 */
twaver.Defaults.PIECHART_DONUT_RATE = function () {}

/**
 * 线形饼图高度占宽度的比例, 默认值为0.5
 * @property PIECHART_LINE_RATE
 * @type Number
 * @static
 */
twaver.Defaults.PIECHART_LINE_RATE = function () {}

/**
 * 饼图选中后的偏移量, 默认值为5
 * @property PIECHART_SELECT_OFFSET
 * @type Number
 * @static
 */
twaver.Defaults.PIECHART_SELECT_OFFSET = function () {}

/**
 * 饼图选中时阴影颜色, 默认值为#C2CFF1
 * @property PIECHART_SHADOW_COLOR
 * @type String
 * @static
 */
twaver.Defaults.PIECHART_SHADOW_COLOR = function () {}

/**
 * 饼图选中时阴影偏移量, 默认值为1
 * @property PIECHART_SHADOW_OFFSET
 * @type Number
 * @static
 */
twaver.Defaults.PIECHART_SHADOW_OFFSET = function () {}

/**
 * 饼图起始角度, 默认值为0
 * @property PIECHART_START_ANGLE
 * @type Number
 * @static
 */
twaver.Defaults.PIECHART_START_ANGLE = function () {}

/**
 * 饼图类型, 默认值为oval
 * @property PIECHART_TYPE
 * @type String
 * @static
 */
twaver.Defaults.PIECHART_TYPE = function () {}

/**
 * 饼图值标签位置, 默认值为0.5
 * @property PIECHART_VALUE_POSITION
 * @type Number
 * @static
 */
twaver.Defaults.PIECHART_VALUE_POSITION = function () {}

/**
 * 右键菜单上勾选框在选中状态时的图标名称，默认为checkbox_selected_icon
 * @property POPUPMENU_CHECKBOX_SELECTED_ICON
 * @type String
 * @static
 */
twaver.Defaults.POPUPMENU_CHECKBOX_SELECTED_ICON = function () {}

/**
 * 右键菜单勾选框在未选中状态时的图标名称，默认为checkbox_unselected_icon
 * @property POPUPMENU_CHECKBOX_UNSELECTED_ICON
 * @type String
 * @static
 */
twaver.Defaults.POPUPMENU_CHECKBOX_UNSELECTED_ICON = function () {}

/**
 * 右键菜单单选框在选中状态时的图标名称，默认为radiobutton_selected_icon
 * @property POPUPMENU_RADIOBUTTON_SELECTED_ICON
 * @type String
 * @static
 */
twaver.Defaults.POPUPMENU_RADIOBUTTON_SELECTED_ICON = function () {}

/**
 * 右键菜单单选框在未选中状态时的图标名称，默认为radiobutton_unselected_icon
 * @property POPUPMENU_RADIOBUTTON_UNSELECTED_ICON
 * @type String
 * @static
 */
twaver.Defaults.POPUPMENU_RADIOBUTTON_UNSELECTED_ICON = function () {}

/**
 * 右键菜单子菜单项不可用时的图标名称，默认为submenu_disable_icon
 * @property POPUPMENU_SUBNENU_DISABLE_ICON
 * @type String
 * @static
 */
twaver.Defaults.POPUPMENU_SUBNENU_DISABLE_ICON = function () {}

/**
 * 右键菜单子菜单项可用时的图标名称，默认为submenu_enable_icon
 * @property POPUPMENU_SUBNENU_ENABLE_ICON
 * @type String
 * @static
 */
twaver.Defaults.POPUPMENU_SUBNENU_ENABLE_ICON = function () {}

/**
 * 默认属性页属性类别名, 默认值为null
 * @property PROPERTY_CATEGORY_NAME
 * @type Object
 * @static
 */
twaver.Defaults.PROPERTY_CATEGORY_NAME = function () {}

/**
 * 默认属性页属性是否可编辑(false)
 * @property PROPERTY_EDITABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.PROPERTY_EDITABLE = function () {}

/**
 * 默认属性页属性文字水平对齐方式(null)
 * @property PROPERTY_HORIZONTAL_ALIGN
 * @type String
 * @static
 */
twaver.Defaults.PROPERTY_HORIZONTAL_ALIGN = function () {}

/**
 * 属性页列内容是否为纯文本，默认为true
 * @property PROPERTY_INNER_TEXT
 * @type Boolean
 * @static
 */
twaver.Defaults.PROPERTY_INNER_TEXT = function () {}

/**
 * 默认属性页属性类型(accessor)
 * @property PROPERTY_PROPERTY_TYPE
 * @type String
 * @static
 */
twaver.Defaults.PROPERTY_PROPERTY_TYPE = function () {}

/**
 * 属性页属性列渲染器, 默认值为null
 * @property PROPERTY_RENDER_NAME
 * @type Object
 * @static
 */
twaver.Defaults.PROPERTY_RENDER_NAME = function () {}

/**
 * 属性页属性值列渲染器, 默认值为null
 * @property PROPERTY_RENDER_VALUE
 * @type Object
 * @static
 */
twaver.Defaults.PROPERTY_RENDER_VALUE = function () {}

/**
 * 属性页属性值类型, 默认值为string
 * @property PROPERTY_VALUE_TYPE
 * @type String
 * @static
 */
twaver.Defaults.PROPERTY_VALUE_TYPE = function () {}

/**
 * 
 * @property PROPERTYSHEET_AUTO_ADJUSTABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.PROPERTYSHEET_AUTO_ADJUSTABLE = function () {}

/**
 * 属性页边框颜色, 默认值为#EBEBEB
 * @property PROPERTYSHEET_BORDER_COLOR
 * @type String
 * @static
 */
twaver.Defaults.PROPERTYSHEET_BORDER_COLOR = function () {}

/**
 * 属性页是否允许分组, 默认值为true
 * @property PROPERTYSHEET_CATEGORIZABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.PROPERTYSHEET_CATEGORIZABLE = function () {}

/**
 * 属性页类别合并时的图标, 默认值为collapse_icon
 * @property PROPERTYSHEET_COLLAPSE_ICON
 * @type String
 * @static
 */
twaver.Defaults.PROPERTYSHEET_COLLAPSE_ICON = function () {}

/**
 * 属性页列分隔线宽度, 默认值为1
 * @property PROPERTYSHEET_COLUMN_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.PROPERTYSHEET_COLUMN_LINE_WIDTH = function () {}

/**
 * 属性页是否可编辑, 默认值为false
 * @property PROPERTYSHEET_EDITABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.PROPERTYSHEET_EDITABLE = function () {}

/**
 * 默认属性页是否展开分组(true)
 * @property PROPERTYSHEET_EXPAND_CATEGORY
 * @type Boolean
 * @static
 */
twaver.Defaults.PROPERTYSHEET_EXPAND_CATEGORY = function () {}

/**
 * 属性页类别展开时的图标, 默认值为expand_icon
 * @property PROPERTYSHEET_EXPAND_ICON
 * @type String
 * @static
 */
twaver.Defaults.PROPERTYSHEET_EXPAND_ICON = function () {}

/**
 * 属性页缩进量, 默认值为16
 * @property PROPERTYSHEET_INDENT
 * @type Number
 * @static
 */
twaver.Defaults.PROPERTYSHEET_INDENT = function () {}

/**
 * 属性页属性名列文字水平对齐方式, 默认值为null
 * @property PROPERTYSHEET_PROPERTY_NAME_HORIZONTAL_ALIGN
 * @type String
 * @static
 */
twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_HORIZONTAL_ALIGN = function () {}

/**
 * 属性页属性名列宽度, 默认值为100
 * @property PROPERTYSHEET_PROPERTY_NAME_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_WIDTH = function () {}

/**
 * 属性页更改属性名列和值列宽度时, 鼠标离分隔线的距离, 默认值为3
 * @property PROPERTYSHEET_RESIZE_TOLERANCE
 * @type Number
 * @static
 */
twaver.Defaults.PROPERTYSHEET_RESIZE_TOLERANCE = function () {}

/**
 * 属性页行高, 默认值为19
 * @property PROPERTYSHEET_ROW_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.PROPERTYSHEET_ROW_HEIGHT = function () {}

/**
 * 属性页行线条宽度, 默认值为1
 * @property PROPERTYSHEET_ROW_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.PROPERTYSHEET_ROW_LINE_WIDTH = function () {}

/**
 * 属性页总宽度, 默认值为200
 * @property PROPERTYSHEET_SUM_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.PROPERTYSHEET_SUM_WIDTH = function () {}

/**
 * @method twaver.Defaults.getClassName
 * @return {String}
 */
twaver.Defaults.prototype.getClassName = function () {}

/**
 * 雷达图锚点是否可见, 默认值为true
 * @property RADARCHART_ANCHOR_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.RADARCHART_ANCHOR_VISIBLE = function () {}

/**
 * 雷达图是否填充背景色, 默认值为true
 * @property RADARCHART_AREA_FILL
 * @type Boolean
 * @static
 */
twaver.Defaults.RADARCHART_AREA_FILL = function () {}

/**
 * 雷达图背景透明度, 默认值为0.2
 * @property RADARCHART_AREA_FILL_ALPHA
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_AREA_FILL_ALPHA = function () {}

/**
 * 雷达图选中元素填充透明图, 默认值为0.5
 * @property RADARCHART_AREA_SELECT_FILL_ALPHA
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_AREA_SELECT_FILL_ALPHA = function () {}

/**
 * 雷达图轴线颜色, 默认值为#808080
 * @property RADARCHART_AXIS_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.RADARCHART_AXIS_LINE_COLOR = function () {}

/**
 * 雷达图轴线宽度, 默认值为3
 * @property RADARCHART_AXIS_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_AXIS_LINE_WIDTH = function () {}

/**
 * 雷达图起始角度, 默认值为0
 * @property RADARCHART_AXIS_START_ANGLE
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_AXIS_START_ANGLE = function () {}

/**
 * 雷达图轴线文字颜色, 默认值为#000000
 * @property RADARCHART_AXIS_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.RADARCHART_AXIS_TEXT_COLOR = function () {}

/**
 * 雷达图轴线文字字体样式, 默认值为12px arial, tahoma, sans-serif, helvetica
 * @property RADARCHART_AXIS_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.RADARCHART_AXIS_TEXT_FONT = function () {}

/**
 * 雷达图轴线文字是否可见, 默认值为true
 * @property RADARCHART_AXIS_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.RADARCHART_AXIS_TEXT_VISIBLE = function () {}

/**
 * 雷达图轴线是否可见, 默认值为true
 * @property RADARCHART_AXIS_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.RADARCHART_AXIS_VISIBLE = function () {}

/**
 * 雷达图轴线之间的连线颜色, 默认值为#808080
 * @property RADARCHART_RING_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.RADARCHART_RING_LINE_COLOR = function () {}

/**
 * 雷达图轴线之间的连线宽度, 默认值为1
 * @property RADARCHART_RING_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_RING_LINE_WIDTH = function () {}

/**
 * 雷达图轴线之间的连线类型, 默认值为line
 * @property RADARCHART_RING_TYPE
 * @type String
 * @static
 */
twaver.Defaults.RADARCHART_RING_TYPE = function () {}

/**
 * 雷达图轴线之间的连线是否可见, 默认值为true
 * @property RADARCHART_RING_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.RADARCHART_RING_VISIBLE = function () {}

/**
 * 雷达图刻度个数, 默认值为5
 * @property RADARCHART_SCALE_COUNT
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_SCALE_COUNT = function () {}

/**
 * 雷达图刻度最大值, 默认值为1
 * @property RADARCHART_SCALE_MAXVALUE
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_SCALE_MAXVALUE = function () {}

/**
 * 雷达图刻度最小值, 默认值为0
 * @property RADARCHART_SCALE_MINVALUE
 * @type Number
 * @static
 */
twaver.Defaults.RADARCHART_SCALE_MINVALUE = function () {}

/**
 * 雷达图刻度文字颜色, 默认值为#000000
 * @property RADARCHART_SCALE_TEXT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.RADARCHART_SCALE_TEXT_COLOR = function () {}

/**
 * 雷达图刻度文字字体样式, 默认值为10px arial, tahoma, sans-serif, helvetica
 * @property RADARCHART_SCALE_TEXT_FONT
 * @type String
 * @static
 */
twaver.Defaults.RADARCHART_SCALE_TEXT_FONT = function () {}

/**
 * 雷达图刻度文字是可见, 默认值为true
 * @property RADARCHART_SCALE_TEXT_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.RADARCHART_SCALE_TEXT_VISIBLE = function () {}

/**
 * 滚动条宽度, 默认值为17
 * @property SCROLL_BAR_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.SCROLL_BAR_WIDTH = function () {}

/**
 * 默认选中颜色(#C2CFF1)
 * @property SELECT_COLOR
 * @type String
 * @static
 */
twaver.Defaults.SELECT_COLOR = function () {}

/**
 * 告警是否显示在告警div中，默认为true
 * @property SHOW_ALARM_IN_ATTACHMENT_DIV
 * @type Boolean
 * @static
 */
twaver.Defaults.SHOW_ALARM_IN_ATTACHMENT_DIV = function () {}

/**
 * 默认的排序方法
 * @method twaver.Defaults.SORT_FUNCTION
 * @param {Object} v1 第一个值
 * @param {Object} v2 第二个值
 * @return {Number} 返回两个值的比较结果
 * @static
 */
twaver.Defaults.SORT_FUNCTION = function (v1, v2) {}

/**
 * 分割面板分隔栏背景色, 默认值为#CCCCFF
 * @property SPLITPANE_DIVIDER_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.SPLITPANE_DIVIDER_BACKGROUND = function () {}

/**
 * 移动分割面板分隔栏时, 分隔栏的透明度, 默认值为0.5
 * @property SPLITPANE_DIVIDER_OPACITY
 * @type Number
 * @static
 */
twaver.Defaults.SPLITPANE_DIVIDER_OPACITY = function () {}

/**
 * 分割面板分隔栏宽度, 默认值为6
 * @property SPLITPANE_DIVIDER_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.SPLITPANE_DIVIDER_WIDTH = function () {}

/**
 * 移动分割面板分隔条时, 分隔栏背景色
 * @property SPLITPANE_MASK_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.SPLITPANE_MASK_BACKGROUND = function () {}

/**
 * 分割面板默认分割方式, 默认值为horizontal
 * @property SPLITPANE_ORIENTATION
 * @type String
 * @static
 */
twaver.Defaults.SPLITPANE_ORIENTATION = function () {}

/**
 * 分割面板默认分割比例, 默认值为0.5
 * @property SPLITPANE_POSITION
 * @type Number
 * @static
 */
twaver.Defaults.SPLITPANE_POSITION = function () {}

/**
 * 页签是否可关闭, 默认值为true
 * @property TAB_CLOSABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.TAB_CLOSABLE = function () {}

/**
 * 页签是否被禁用, 默认值为false
 * @property TAB_DISABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.TAB_DISABLED = function () {}

/**
 * 是否可移动页签, 默认值为true
 * @property TAB_MOVABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.TAB_MOVABLE = function () {}

/**
 * 是否可以更改页签大小, 默认值为true
 * @property TAB_RESIZABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.TAB_RESIZABLE = function () {}

/**
 * 页签是否可见, 默认值为true
 * @property TAB_VISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.TAB_VISIBLE = function () {}

/**
 * 页签宽度, 默认值为100
 * @property TAB_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.TAB_WIDTH = function () {}

/**
 * 表格列线条颜色的默认值(#DDD)
 * @property TABLE_COLUMN_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TABLE_COLUMN_LINE_COLOR = function () {}

/**
 * 表格列线条宽度的默认值(1)
 * @property TABLE_COLUMN_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.TABLE_COLUMN_LINE_WIDTH = function () {}

/**
 * 默认表格是否可编辑(false)
 * @property TABLE_EDITABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.TABLE_EDITABLE = function () {}

/**
 * 默认是否可以用键盘DELETE键删除表格行(true)
 * @property TABLE_KEYBOARD_REMOVE_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.TABLE_KEYBOARD_REMOVE_ENABLED = function () {}

/**
 * 默认是否可以用键盘CTRL+A键选中表格所有行(true)
 * @property TABLE_KEYBOARD_SELECT_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.TABLE_KEYBOARD_SELECT_ENABLED = function () {}

/**
 * 表格模型数据被选中时, 表格是否自动滚动到被选中行, 默认值为true
 * @property TABLE_MAKE_VISIBLE_ON_SELECTED
 * @type Boolean
 * @static
 */
twaver.Defaults.TABLE_MAKE_VISIBLE_ON_SELECTED = function () {}

/**
 * 表格行高, 默认值为19
 * @property TABLE_ROW_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.TABLE_ROW_HEIGHT = function () {}

/**
 * 表格行线条颜色, 默认值为#DDDD
 * @property TABLE_ROW_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TABLE_ROW_LINE_COLOR = function () {}

/**
 * 表格行线条宽度, 默认值为1
 * @property TABLE_ROW_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.TABLE_ROW_LINE_WIDTH = function () {}

/**
 * 表头背景色, 默认值为#EBEBEB
 * @property TABLEHEADER_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TABLEHEADER_BACKGROUND = function () {}

/**
 * 表头列线条颜色, 默认值为#DDD
 * @property TABLEHEADER_COLUMN_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TABLEHEADER_COLUMN_LINE_COLOR = function () {}

/**
 * 表头高度, 默认值为24
 * @property TABLEHEADER_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.TABLEHEADER_HEIGHT = function () {}

/**
 * 移动表头时, 新插入位置颜色, 默认值为orange
 * @property TABLEHEADER_INSERT_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TABLEHEADER_INSERT_BACKGROUND = function () {}

/**
 * 移动表头时, 表头背景色, 默认值为rgba(184,211,240,0.7)
 * @property TABLEHEADER_MOVE_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TABLEHEADER_MOVE_BACKGROUND = function () {}

/**
 * 更改表头大小时, 鼠标距离表头边界值, 默认值为3
 * @property TABLEHEADER_RESIZE_TOLERANCE
 * @type Number
 * @static
 */
twaver.Defaults.TABLEHEADER_RESIZE_TOLERANCE = function () {}

/**
 * 表头升序排序图标, 默认值为sort_asc
 * @property TABLEHEADER_SORT_ASC_ICON
 * @type String
 * @static
 */
twaver.Defaults.TABLEHEADER_SORT_ASC_ICON = function () {}

/**
 * 表头降序排序图标, 默认值为sort_desc
 * @property TABLEHEADER_SORT_DESC_ICON
 * @type String
 * @static
 */
twaver.Defaults.TABLEHEADER_SORT_DESC_ICON = function () {}

/**
 * 表头排序图标位置, 默认值为98% 50%
 * @property TABLEHEADER_SORT_ICON_POSITION
 * @type String
 * @static
 */
twaver.Defaults.TABLEHEADER_SORT_ICON_POSITION = function () {}

/**
 * 页签面板关闭图标, 默认值为close_icon
 * @property TABPANE_CLOSE_ICON
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_CLOSE_ICON = function () {}

/**
 * 页签面板禁用颜色, 默认值为#BABBBC
 * @property TABPANE_DISABLED_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_DISABLED_COLOR = function () {}

/**
 * 页签面板的标签文字水平对齐方式, 默认值为center
 * @property TABPANE_HORIZONTAL_ALIGN
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_HORIZONTAL_ALIGN = function () {}

/**
 * 拖拽页签面板时新插入位置信息的背景色
 * @property TABPANE_INSERT_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_INSERT_BACKGROUND = function () {}

/**
 * 拖拽页签面板时, 页签的背景颜色, 默认值为rgba(184,211,240,0.7)
 * @property TABPANE_MOVE_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_MOVE_BACKGROUND = function () {}

/**
 * 更改页签面板页签大小时, 鼠标离页签边界的距离, 默认值为3
 * @property TABPANE_RESIZE_TOLERANCE
 * @type Number
 * @static
 */
twaver.Defaults.TABPANE_RESIZE_TOLERANCE = function () {}

/**
 * 页签面板被选中页签的背景色, 默认值为white
 * @property TABPANE_SELECT_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_SELECT_BACKGROUND = function () {}

/**
 * 页签面板页签被关闭时, 是否自动选中下一个页签, 默认值为true
 * @property TABPANE_SELECT_NEXT_ON_CLOSE
 * @type Boolean
 * @static
 */
twaver.Defaults.TABPANE_SELECT_NEXT_ON_CLOSE = function () {}

/**
 * 选项卡面板上选中的选项卡消失时，是否选中下一个选项卡，默认为true
 * @property TABPANE_SELECT_NEXT_ON_INVISIBLE
 * @type Boolean
 * @static
 */
twaver.Defaults.TABPANE_SELECT_NEXT_ON_INVISIBLE = function () {}

/**
 * 页签面板中页签的背景色, 默认值为#EBEBEB
 * @property TABPANE_TAB_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_TAB_BACKGROUND = function () {}

/**
 * 页签面板页签之间的间距, 默认值为1
 * @property TABPANE_TAB_GAP
 * @type Number
 * @static
 */
twaver.Defaults.TABPANE_TAB_GAP = function () {}

/**
 * 页签面板页签高度, 默认值为24
 * @property TABPANE_TAB_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.TABPANE_TAB_HEIGHT = function () {}

/**
 * 页签面板页签的方位, 默认值为top
 * @property TABPANE_TAB_ORIENTATION
 * @type String
 * @static
 */
twaver.Defaults.TABPANE_TAB_ORIENTATION = function () {}

/**
 * 页签面板页签圆角半径, 默认值为0
 * @property TABPANE_TAB_RADIUS
 * @type Number
 * @static
 */
twaver.Defaults.TABPANE_TAB_RADIUS = function () {}

/**
 * 标题面板标题栏背景色, 默认值为#DDD
 * @property TITLEPANE_TITLE_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TITLEPANE_TITLE_BACKGROUND = function () {}

/**
 * 标题面板标题栏高度, 默认值为20
 * @property TITLEPANE_TITLE_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.TITLEPANE_TITLE_HEIGHT = function () {}

/**
 * 标题面板标题栏水平对齐方式, 默认值为left
 * @property TITLEPANE_TITLE_HORIZONTAL_ALIGN
 * @type String
 * @static
 */
twaver.Defaults.TITLEPANE_TITLE_HORIZONTAL_ALIGN = function () {}

/**
 * 提示信息背景色, 默认值为lightyellow
 * @property TOOLTIP_BACKGROUND
 * @type String
 * @static
 */
twaver.Defaults.TOOLTIP_BACKGROUND = function () {}

/**
 * 提示信息边框样式, 默认值为1px solid gray
 * @property TOOLTIP_BORDER
 * @type String
 * @static
 */
twaver.Defaults.TOOLTIP_BORDER = function () {}

/**
 * 提示信息边框圆角半径, 默认值为6px
 * @property TOOLTIP_BORDER_RADIUS
 * @type String
 * @static
 */
twaver.Defaults.TOOLTIP_BORDER_RADIUS = function () {}

/**
 * 提示信息阴影样式, 默认值为0px 0px 3px #AAA
 * @property TOOLTIP_BOX_SHADOW
 * @type String
 * @static
 */
twaver.Defaults.TOOLTIP_BOX_SHADOW = function () {}

/**
 * 提示信息字体颜色, 默认值为black
 * @property TOOLTIP_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TOOLTIP_COLOR = function () {}

/**
 * 提示信息消失延迟事件，默认为4000ms
 * @property TOOLTIP_DISMISS_DELAY
 * @type Number
 * @static
 */
twaver.Defaults.TOOLTIP_DISMISS_DELAY = function () {}

/**
 * 提示信息字体大小, 默认值为12px
 * @property TOOLTIP_FONT_SIZE
 * @type String
 * @static
 */
twaver.Defaults.TOOLTIP_FONT_SIZE = function () {}

/**
 * 提示信息显示前的延迟时间，默认为750ms
 * @property TOOLTIP_INITIAL_DELAY
 * @type Number
 * @static
 */
twaver.Defaults.TOOLTIP_INITIAL_DELAY = function () {}

/**
 * 提示信息内容边距, 默认值为4px 8px
 * @property TOOLTIP_PADDING
 * @type String
 * @static
 */
twaver.Defaults.TOOLTIP_PADDING = function () {}

/**
 * 提示信息重新显示延迟时间，默认为500ms
 * @property TOOLTIP_RESHOW_DELAY
 * @type Number
 * @static
 */
twaver.Defaults.TOOLTIP_RESHOW_DELAY = function () {}

/**
 * 提示信息x轴偏移量, 默认值为12
 * @property TOOLTIP_XOFFSET
 * @type Number
 * @static
 */
twaver.Defaults.TOOLTIP_XOFFSET = function () {}

/**
 * 提示信息y轴偏移量, 默认值为12
 * @property TOOLTIP_YOFFSET
 * @type Number
 * @static
 */
twaver.Defaults.TOOLTIP_YOFFSET = function () {}

/**
 * 提示信息zIndex值，默认为100000
 * @property TOOLTIP_ZINDEX
 * @type Number
 * @static
 */
twaver.Defaults.TOOLTIP_ZINDEX = function () {}

/**
 * 触摸交互时，手指移动阀值，默认为5
 * @property TOUCH_MOVE_THRESHOLD
 * @type Number
 * @static
 */
twaver.Defaults.TOUCH_MOVE_THRESHOLD = function () {}

/**
 * 触摸交互时，选中阀值，默认为20
 * @property TOUCH_RECT_SELECT_THRESHOLD
 * @type Number
 * @static
 */
twaver.Defaults.TOUCH_RECT_SELECT_THRESHOLD = function () {}

/**
 * 触摸交互时，缩放阀值，默认为30
 * @property TOUCH_ZOOM_THRESHOLD
 * @type Number
 * @static
 */
twaver.Defaults.TOUCH_ZOOM_THRESHOLD = function () {}

/**
 * 树节点折叠图标, 默认值为collapse_icon
 * @property TREE_COLLAPSE_ICON
 * @type String
 * @static
 */
twaver.Defaults.TREE_COLLAPSE_ICON = function () {}

/**
 * 树节点展开图标, 默认值为expand_icon
 * @property TREE_EXPAND_ICON
 * @type String
 * @static
 */
twaver.Defaults.TREE_EXPAND_ICON = function () {}

/**
 * 树节点缩进量, 默认值为16
 * @property TREE_INDENT
 * @type Number
 * @static
 */
twaver.Defaults.TREE_INDENT = function () {}

/**
 * 是否允许在树上用DELETE键删除选中节点, 默认值为true
 * @property TREE_KEYBOARD_REMOVE_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.TREE_KEYBOARD_REMOVE_ENABLED = function () {}

/**
 * 是否允许在树上用CTRL+A键选中全部节点, 默认值为true
 * @property TREE_KEYBOARD_SELECT_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED = function () {}

/**
 * 树模型数据被选中时, 树表是否自动滚动到让选中项可见的位置, 默认值为true
 * @property TREE_MAKE_VISIBLE_ON_SELECTED
 * @type Boolean
 * @static
 */
twaver.Defaults.TREE_MAKE_VISIBLE_ON_SELECTED = function () {}

/**
 * 树节点行高, 默认值为19
 * @property TREE_ROW_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.TREE_ROW_HEIGHT = function () {}

/**
 * 树节点行线条颜色, 默认值为#DDD
 * @property TREE_ROW_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TREE_ROW_LINE_COLOR = function () {}

/**
 * 树节点行线条宽度, 默认值为0
 * @property TREE_ROW_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.TREE_ROW_LINE_WIDTH = function () {}

/**
 * 树表节点折叠图标, 默认值为collapse_icon
 * @property TREETABLE_COLLAPSE_ICON
 * @type String
 * @static
 */
twaver.Defaults.TREETABLE_COLLAPSE_ICON = function () {}

/**
 * 树表列线条颜色, 默认值为#DDD
 * @property TREETABLE_COLUMN_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TREETABLE_COLUMN_LINE_COLOR = function () {}

/**
 * 树表列线条宽度, 默认值为1
 * @property TREETABLE_COLUMN_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH = function () {}

/**
 * 树表是否可编辑, 默认值为false
 * @property TREETABLE_EDITABLE
 * @type Boolean
 * @static
 */
twaver.Defaults.TREETABLE_EDITABLE = function () {}

/**
 * 树表节点展开图标, 默认值为expand_icon
 * @property TREETABLE_EXPAND_ICON
 * @type String
 * @static
 */
twaver.Defaults.TREETABLE_EXPAND_ICON = function () {}

/**
 * 树表节点缩进值, 默认值为16
 * @property TREETABLE_INDENT
 * @type Number
 * @static
 */
twaver.Defaults.TREETABLE_INDENT = function () {}

/**
 * 是否允许在树表上用delete键删除选中节点, 默认值为true
 * @property TREETABLE_KEYBOARD_REMOVE_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.TREETABLE_KEYBOARD_REMOVE_ENABLED = function () {}

/**
 * 是否允许在树表上用CTRL+A键选中全部节点, 默认值为true
 * @property TREETABLE_KEYBOARD_SELECT_ENABLED
 * @type Boolean
 * @static
 */
twaver.Defaults.TREETABLE_KEYBOARD_SELECT_ENABLED = function () {}

/**
 * 树表模型数据被选中时, 树表是否自动滚动到让选中项可见的位置, 默认值为true
 * @property TREETABLE_MAKE_VISIBLE_ON_SELECTED
 * @type Boolean
 * @static
 */
twaver.Defaults.TREETABLE_MAKE_VISIBLE_ON_SELECTED = function () {}

/**
 * 树表行高, 默认值为19
 * @property TREETABLE_ROW_HEIGHT
 * @type Number
 * @static
 */
twaver.Defaults.TREETABLE_ROW_HEIGHT = function () {}

/**
 * 树表行线条颜色, 默认值为#DDD
 * @property TREETABLE_ROW_LINE_COLOR
 * @type String
 * @static
 */
twaver.Defaults.TREETABLE_ROW_LINE_COLOR = function () {}

/**
 * 树表行线条宽度, 默认值为1
 * @property TREETABLE_ROW_LINE_WIDTH
 * @type Number
 * @static
 */
twaver.Defaults.TREETABLE_ROW_LINE_WIDTH = function () {}

/**
 * 矢量拓扑图上的网元UI对象生成器
 * @method twaver.Defaults.VECTORUI_FUNCTION
 * @param {twaver.vector.Network} network 拓扑图
 * @param {twaver.Element} element 网元
 * @return {twaver.vector.ElementUI} 返回网元视图对象
 * @static
 */
twaver.Defaults.VECTORUI_FUNCTION = function (network, element) {}

/**
 * 视图字体样式, 默认值为arial, tahoma, sans-serif, helvetica
 * @property VIEW_FONT_FAMILY
 * @type String
 * @static
 */
twaver.Defaults.VIEW_FONT_FAMILY = function () {}

/**
 * 视图字体大小, 默认值为12px
 * @property VIEW_FONT_SIZE
 * @type String
 * @static
 */
twaver.Defaults.VIEW_FONT_SIZE = function () {}

/**
 * 视图位置样式, 默认值为absolute
 * @property VIEW_POSITION
 * @type String
 * @static
 */
twaver.Defaults.VIEW_POSITION = function () {}

/**
 * 缩放时是否有动画效果, 默认值为true
 * @property ZOOM_ANIMATE
 * @type Boolean
 * @static
 */
twaver.Defaults.ZOOM_ANIMATE = function () {}

/**
 * 缩放比例系数, 默认值为1.3
 * @property ZOOM_INCREMENT
 * @type Number
 * @static
 */
twaver.Defaults.ZOOM_INCREMENT = function () {}

/**
 * 最大缩放比例, 默认值为5
 * @property ZOOM_MAX
 * @type Number
 * @static
 */
twaver.Defaults.ZOOM_MAX = function () {}

/**
 * 最小缩放比例, 默认值为0.1
 * @property ZOOM_MIN
 * @type Number
 * @static
 */
twaver.Defaults.ZOOM_MIN = function () {}


/**
 * 添加指定的事件监听器
 * @method twaver.EventDispatcher.add
 * @param {Function} l 指定的事件监听器
 * @param {Object} [s] 监听器的作用域，为空时指的是window
 * @param {Boolean} [a] 是否添加在监听器列表的最前方，如果为空，则添加在最后一个位置
 */
twaver.EventDispatcher.prototype.add = function (l, s, a) {}

/**
 * 判断是否包含指定的事件
 * @method twaver.EventDispatcher.contains
 * @param {Function} l 指定的事件监听器
 * @param {Object} [s] 监听器的作用域，为空时指的是window
 * @return {Boolean} 如果包含返回true，否则返回false
 */
twaver.EventDispatcher.prototype.contains = function (l, s) {}

/**
 * 派发指定的事件
 * @method twaver.EventDispatcher.fire
 * @param {Object} e 指定的事件
 */
twaver.EventDispatcher.prototype.fire = function (e) {}

/**
 * 获取类的名称
 * @method twaver.EventDispatcher.getClassName
 * @return {String} 类名
 */
twaver.EventDispatcher.prototype.getClassName = function () {}

/**
 * 移除指定的事件监听器
 * @method twaver.EventDispatcher.remove
 * @param {Function} l 指定的事件监听器
 * @param {Object} [s] 监听器的作用域，为空时指的是window
 */
twaver.EventDispatcher.prototype.remove = function (l, s) {}


/**
 * @class twaver.ImageAsset
 * @constructor
 * @param {String} name 
 * @param {String} source 
 * @param {String} width 
 * @param {String} height 
 * @return {twaver.ImageAsset}
 */
twaver.ImageAsset = function (name, source, width, height) {}

/**
 * 获取类的名称
 * @method twaver.ImageAsset.getClassName
 * @return {String} 类名
 */
twaver.ImageAsset.prototype.getClassName = function () {}

/**
 * @method twaver.ImageAsset.getFunction
 * @return {String}
 */
twaver.ImageAsset.prototype.getFunction = function () {}

/**
 * 获取图片的高度
 * @method twaver.ImageAsset.getHeight
 * @return {Number} 图片的高度
 */
twaver.ImageAsset.prototype.getHeight = function () {}

/**
 * 获取指定渲染色的图片对象
 * @method twaver.ImageAsset.getImage
 * @param {Object} [color] 图片渲染的颜色
 * @return {twaver.ImageAsset}
 */
twaver.ImageAsset.prototype.getImage = function (color) {}

/**
 * 获取图片的名称
 * @method twaver.ImageAsset.getName
 * @return {String} 图片的名称
 */
twaver.ImageAsset.prototype.getName = function () {}

/**
 * 获取图片的路径
 * @method twaver.ImageAsset.getSrc
 * @return {String} 图片的路径
 */
twaver.ImageAsset.prototype.getSrc = function () {}

/**
 * 获取图片的宽度
 * @method twaver.ImageAsset.getWidth
 * @return {Number} 图片的宽度
 */
twaver.ImageAsset.prototype.getWidth = function () {}

/**
 * 获取是否是SVG图片
 * @method twaver.ImageAsset.isSvg
 * @return {Boolean} 返回是否是SVG图片
 */
twaver.ImageAsset.prototype.isSvg = function () {}


/**
 * JsonSerializer是用于对数据容器中的数据进行序列化和反序列化的。
 * DataBox上提供了一种功能，可以直接从JSON文件中导入数据，或将DataBox中的数据导出到JSON文件。它是通过JsonSerializer这个类来实现的。
 * JsonSerializer是数据容器上的一种功能，可以在序列化时进行一些设置来更改导出时的规则
 * @class twaver.JsonSerializer
 * @constructor
 * @param {twaver.DataBox} dataBox 进行序列化的数据容器
 * @param {twaver.SerializationSettings} [settings] 序列化设置的对象
 * @param {Function} [filterFunction] 序列化时的过滤函数
 * @return {twaver.JsonSerializer} 序列化对象本身
 */
twaver.JsonSerializer = function (dataBox, settings, filterFunction) {}

/**
 * 将JSON数据序列化到数据容器中的某个对象上，如果rootParent为空，则序列化到数据容器中。
 * @method twaver.JsonSerializer.deserialize
 * @param {String} jsonString JSON数据
 * @param {twaver.Data} [rootParent] 反序列化时的根对象，如果为空，则序列化到数据容器中。
 */
twaver.JsonSerializer.prototype.deserialize = function (jsonString, rootParent) {}

/**
 * 从指定的JSON字符串中反序列化某个对象的Client属性
 * @method twaver.JsonSerializer.deserializeClientJson
 * @param {Object} instance 反序列化的对象
 * @param {String} json JSON字符串
 * @param {String} property 反序列化的属性名
 */
twaver.JsonSerializer.prototype.deserializeClientJson = function (instance, json, property) {}

/**
 * 从指定的JSON字符串中反序列化某个对象的Property属性
 * @method twaver.JsonSerializer.deserializePropertyJson
 * @param {Object} instance 反序列化的对象
 * @param {String} json JSON字符串
 * @param {String} property 反序列化的属性名
 */
twaver.JsonSerializer.prototype.deserializePropertyJson = function (instance, json, property) {}

/**
 * 从指定的JSON字符串中反序列化某个对象的Style属性
 * @method twaver.JsonSerializer.deserializeStyleJson
 * @param {Object} instance 反序列化的对象
 * @param {String} json JSON字符串
 * @param {String} property 反序列化的属性名
 */
twaver.JsonSerializer.prototype.deserializeStyleJson = function (instance, json, property) {}

/**
 * 从JSON字符串中反序列化属性值
 * @method twaver.JsonSerializer.deserializeValue
 * @param {String} json JSON字符串
 * @param {String} type 属性的类型
 * @return {String} 属性值
 */
twaver.JsonSerializer.prototype.deserializeValue = function (json, type) {}

/**
 * 获取类的名称
 * @method twaver.JsonSerializer.getClassName
 * @return {String}
 */
twaver.JsonSerializer.prototype.getClassName = function () {}

/**
 * 初始化数据容器中数据对象的ref值，ref值是TWaver导出时内部使用的属性
 * @method twaver.JsonSerializer.initRefs
 * @param {twaver.Data} data 数据对象
 */
twaver.JsonSerializer.prototype.initRefs = function (data) {}

/**
 * 是否需要序列化指定的对象
 * @method twaver.JsonSerializer.isSerializable
 * @param {twaver.Data} data 数据对象
 * @return {Boolean} true为序列化，否则为false
 */
twaver.JsonSerializer.prototype.isSerializable = function (data) {}

/**
 * 序列化相关的数据容器
 * @method twaver.JsonSerializer.serialize
 * @return {String} JSON字符串
 */
twaver.JsonSerializer.prototype.serialize = function () {}

/**
 * 序列化数据容器的主体部分，TWaver内部使用
 * @method twaver.JsonSerializer.serializeBody
 */
twaver.JsonSerializer.prototype.serializeBody = function () {}

/**
 * 将对象的Client属性序列化成JSON字符串
 * @method twaver.JsonSerializer.serializeClientJson
 * @param {Object} instance 序列化的对象
 * @param {String} client Client属性名称
 * @param {Object} newInstance 新的对象。用于和instance对象比较，如果序列化的Client属性值相等，就不需要序列化这个属性
 * @param {Object} dataObject JSON数据对象
 */
twaver.JsonSerializer.prototype.serializeClientJson = function (instance, client, newInstance, dataObject) {}

/**
 * 序列化数据对象
 * @method twaver.JsonSerializer.serializeData
 * @param {twaver.Data} data 序列化的数据对象
 */
twaver.JsonSerializer.prototype.serializeData = function (data) {}

/**
 * 将对象的Property属性序列化成JSON字符串
 * @method twaver.JsonSerializer.serializePropertyJson
 * @param {Object} instance 序列化的对象
 * @param {String} property Property属性名称
 * @param {Object} newInstance 新的对象。用于和instance对象比较，如果序列化的Property属性值相等，就不需要序列化这个属性
 * @param {Object} dataObject JSON数据对象
 */
twaver.JsonSerializer.prototype.serializePropertyJson = function (instance, property, newInstance, dataObject) {}

/**
 * 将数据对象的Style属性序列化成JSON数据
 * @method twaver.JsonSerializer.serializeStyleJson
 * @param {Object} instance 序列化的对象
 * @param {String} style Style属性名称
 * @param {Object} newInstance 新的实例化对象。用于和instance对象比较，如果序列化的Style属性值相等，就不需要序列化这个属性
 * @param {Object} dataObject JSON数据对象
 */
twaver.JsonSerializer.prototype.serializeStyleJson = function (instance, style, newInstance, dataObject) {}

/**
 * 序列化对象的某个属性
 * @method twaver.JsonSerializer.serializeValue
 * @param {String} property 序列化的属性名称
 * @param {String} value 序列化的属性值
 * @param {Object} newInstanceValue 新的实例化对象的属性值
 * @param {String} type 序列化属性的类型。可选值为：'cdata','data','point','list.point','list.string','list.number','rectangle'
 * @param {Object} dataObject JSON数据对象
 */
twaver.JsonSerializer.prototype.serializeValue = function (property, value, newInstanceValue, type, dataObject) {}


/**
 * 对指定网元容器的网元进行自动布局，使网元按一定的规则自动排列，预定义的布局类型有如下几种：
 * round 圆形布局
 * symmetry 对称布局
 * hierarchic 层次布局
 * topbottom 从上到下布局
 * bottomtop 从下到上布局
 * rightleft 从右到左布局
 * leftright 从左到右布局
 * @class twaver.layout.AutoLayouter
 * @constructor
 * @param {twaver.ElementBox} elementBox 网元容器
 * @return {twaver.layout.AutoLayouter}
 * @example var autoLayouter = new twaver.layout.AutoLayouter(box);
 * autoLayouter.doLayout('round');
 */
twaver.layout.AutoLayouter = function (elementBox) {}

/**
 * 对拓扑按指定布局类型布局。
 * 布局类型有如下几种：
 * round 圆形布局
 * symmetry 对称布局
 * hierarchic 层次布局
 * topbottom 从上到下布局
 * bottomtop 从下到上布局
 * rightleft 从右到左布局
 * leftright 从左到右布局
 * @method twaver.layout.AutoLayouter.doLayout
 * @param {String} type 布局类型
 * @param {Function} [finishFunction] 布局完后，执行的回调函数，可选，默认值为null
 * @return {Boolean} 如果布局成功，则返回true，否者返回false
 * @example var autoLayouter = new twaver.layout.AutoLayouter(network);
 * autoLayouter.doLayout('round', function(){
 *     network.zoomOverview();
 * });
 */
twaver.layout.AutoLayouter.prototype.doLayout = function (type, finishFunction) {}

/**
 * 调用doLayout或getLayoutResult方法时，内部调用此方法，用指定布局类型对拓扑布局，或者根据指定布局类型获取布局后网元新的中心点
 * 布局类型有如下几种：
 * round 圆形布局
 * symmetry 对称布局
 * hierarchic 层次布局
 * topbottom 从上到下布局
 * bottomtop 从下到上布局
 * rightleft 从右到左布局
 * leftright 从左到右布局
 * @method twaver.layout.AutoLayouter.doLayoutImpl
 * @param {String} type 布局类型
 * @param {Function} [finishFunction] 布局完后，执行的回调函数，可选，默认值为null
 * @param {Object} [result] 空对象，用于保存布局结果（key为网元id，值为网元的新中心位置），可选，默认值为null
 * @return {Boolean} 如果布局成功，则返回true，否者返回false
 */
twaver.layout.AutoLayouter.prototype.doLayoutImpl = function (type, finishFunction, result) {}

/**
 * 返回字符串类名
 * @method twaver.layout.AutoLayouter.getClassName
 * @return {String} 返回类名
 */
twaver.layout.AutoLayouter.prototype.getClassName = function () {}

/**
 * 获取指定节点的大小，默认如果accountAttachments为true则返回网元视图的viewRect大小，否则返回网元的rect大小
 * @method twaver.layout.AutoLayouter.getDimension
 * @param {twaver.Node} node 节点
 * @return {Object} 返回指定节点的大小，值为包含width和height属性的Object对象
 */
twaver.layout.AutoLayouter.prototype.getDimension = function (node) {}

/**
 * 获取网元容器
 * @method twaver.layout.AutoLayouter.getElementBox
 * @return {twaver.ElementBox} 返回网元容器
 */
twaver.layout.AutoLayouter.prototype.getElementBox = function () {}

/**
 * 获取参与自动布局的网元，默认不可见，不可移动的网元不参与布局
 * @method twaver.layout.AutoLayouter.getElements
 * @return {twaver.List} 返回参与自动布局的网元
 */
twaver.layout.AutoLayouter.prototype.getElements = function () {}

/**
 * 获取x轴偏移量，布局后，所有网元x坐标将偏移指定像素值，默认值为50
 * @method twaver.layout.AutoLayouter.getExplicitXOffset
 * @return {Number} 返回x轴偏移量
 */
twaver.layout.AutoLayouter.prototype.getExplicitXOffset = function () {}

/**
 * 获取y轴偏移量，布局后，所有网元y坐标将偏移指定像素值，默认值为50
 * @method twaver.layout.AutoLayouter.getExplicitYOffset
 * @return {Number} 返回y轴偏移量
 */
twaver.layout.AutoLayouter.prototype.getExplicitYOffset = function () {}

/**
 * 获取指定组的布局类型, 默认为自动布局的布局类型, 可以重写此方法对指定的组用特殊的布局类型布局
 * @method twaver.layout.AutoLayouter.getGroupLayoutType
 * @param {twaver.Group} group 组
 * @return {String} 返回指定组的布局类型
 */
twaver.layout.AutoLayouter.prototype.getGroupLayoutType = function (group) {}

/**
 * 根据指定布局类型，获取布局后网元新的中心位置
 * 布局类型有如下几种：
 * round 圆形布局
 * symmetry 对称布局
 * hierarchic 层次布局
 * topbottom 从上到下布局
 * bottomtop 从下到上布局
 * rightleft 从右到左布局
 * leftright 从左到右布局
 * @method twaver.layout.AutoLayouter.getLayoutResult
 * @param {String} type 布局类型
 * @return {Object} 返回key为网元id，值为新中心位置的对象
 * @example var autoLayouter = new twaver.layout.AutoLayouter(network);
 * var result = autoLayouter.getLayoutResult('round');
 * for(var id in result){
 *     console.log(id, result[id].x, result[id].y);
 * }
 */
twaver.layout.AutoLayouter.prototype.getLayoutResult = function (type) {}

/**
 * 获取网元之间的排斥系数，默认值为1，排斥系数越大，布局后网元之间的间距越大，反之越小
 * @method twaver.layout.AutoLayouter.getRepulsion
 * @return {Number} 返回网元之间的排斥系数
 */
twaver.layout.AutoLayouter.prototype.getRepulsion = function () {}

/**
 * 获取布局类型
 * @method twaver.layout.AutoLayouter.getType
 * @return {String} 返回布局类型
 */
twaver.layout.AutoLayouter.prototype.getType = function () {}

/**
 * 获取自动布局是否有动画效果，默认值为true
 * @method twaver.layout.AutoLayouter.isAnimate
 * @return {Boolean} 返回自动布局是否有动画效果
 */
twaver.layout.AutoLayouter.prototype.isAnimate = function () {}

/**
 * 获取自动布局是否展开组，默认值为false
 * @method twaver.layout.AutoLayouter.isExpandGroup
 * @return {Boolean} 返回自动布局是否展开组
 */
twaver.layout.AutoLayouter.prototype.isExpandGroup = function () {}

/**
 * 判断指定网元是否可移动, 也即是否参与自动布局
 * @method twaver.layout.AutoLayouter.isMovable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元可移动, 也即参与自动布局, 则返回true, 否则返回false
 */
twaver.layout.AutoLayouter.prototype.isMovable = function (element) {}

/**
 * 判断指定网元是否可见, 不可见的网元不参与自动布局
 * @method twaver.layout.AutoLayouter.isVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果指定网元可见, 则返回true, 否则返回false
 */
twaver.layout.AutoLayouter.prototype.isVisible = function (element) {}

/**
 * 设置自动布局是否有动画效果，默认值为true
 * @method twaver.layout.AutoLayouter.setAnimate
 * @param {Boolean} value 是否有动画效果
 */
twaver.layout.AutoLayouter.prototype.setAnimate = function (value) {}

/**
 * 设置自动布局是否展开组，默认值为false
 * @method twaver.layout.AutoLayouter.setExpandGroup
 * @param {Boolean} value 返回自动布局是否展开组
 */
twaver.layout.AutoLayouter.prototype.setExpandGroup = function (value) {}

/**
 * 设置x轴偏移量，布局后，所有网元x坐标将偏移指定像素值，默认值为50
 * @method twaver.layout.AutoLayouter.setExplicitXOffset
 * @param {Number} value x轴偏移量
 */
twaver.layout.AutoLayouter.prototype.setExplicitXOffset = function (value) {}

/**
 * 设置y轴偏移量，布局后，所有网元y坐标将偏移指定像素值，默认值为50
 * @method twaver.layout.AutoLayouter.setExplicitYOffset
 * @param {Number} value y轴偏移量
 */
twaver.layout.AutoLayouter.prototype.setExplicitYOffset = function (value) {}

/**
 * 设置网元之间的排斥系数，默认值为1，排斥系数越大，布局后网元之间的间距越大，反之越小
 * @method twaver.layout.AutoLayouter.setRepulsion
 * @param {Number} value 网元之间的排斥系数
 */
twaver.layout.AutoLayouter.prototype.setRepulsion = function (value) {}


/**
 * 对指定的拓扑进行弹簧布局，自动将网元根据连线关系分开，最终根据网元之间的排斥力趋于平衡，适用于所有节点相互有连线的拓扑结构
 * @class twaver.layout.SpringLayouter
 * @constructor
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.layout.SpringLayouter}
 * @example var springLayouter = new twaver.layout.SpringLayouter(network);
 * springLayouter.start();
 */
twaver.layout.SpringLayouter = function (network) {}

/**
 * 获取此类的字符串类名
 * @method twaver.layout.SpringLayouter.getClassName
 * @return {String} 返回类名
 */
twaver.layout.SpringLayouter.prototype.getClassName = function () {}

/**
 * 获取两次自动布局之间的时间间隔，单位为毫秒，默认值为50ms
 * @method twaver.layout.SpringLayouter.getInterval
 * @return {Number} 返回两次自动布局之间的时间间隔，单位为毫秒
 */
twaver.layout.SpringLayouter.prototype.getInterval = function () {}

/**
 * 获取布局界限，布局时网元不能超出此界限，默认值为null，表示布局时网元没有区域限制
 * @method twaver.layout.SpringLayouter.getLimitBounds
 * @return {Object} 布局界限，包含x、y、width和height属性的Object对象
 */
twaver.layout.SpringLayouter.prototype.getLimitBounds = function () {}

/**
 * 获取连线排斥力系数，值越大，网元和连线之间的距离越大，默认值为0.6
 * @method twaver.layout.SpringLayouter.getLinkRepulsionFactor
 * @return {Number} 连线排斥力系数
 */
twaver.layout.SpringLayouter.prototype.getLinkRepulsionFactor = function () {}

/**
 * 获取和弹簧布局绑定的拓扑
 * @method twaver.layout.SpringLayouter.getNetwork
 * @return {twaver.network.Network} 和弹簧布局绑定的拓扑
 */
twaver.layout.SpringLayouter.prototype.getNetwork = function () {}

/**
 * 获取节点排斥力系数，值越大，网元之间的距离越大，默认值为0.6
 * @method twaver.layout.SpringLayouter.getNodeRepulsionFactor
 * @return {Number} 节点排斥力系数
 */
twaver.layout.SpringLayouter.prototype.getNodeRepulsionFactor = function () {}

/**
 * 获取步进，即每次布局时网元重新计算位置的次数，值越大，布局越快趋于平衡，默认值为10
 * @method twaver.layout.SpringLayouter.getStepCount
 * @return {Number} 步进
 */
twaver.layout.SpringLayouter.prototype.getStepCount = function () {}

/**
 * 判断指定节点是否可以移动，如果不可以移动，则在弹簧布局时，此节点将固定不动，否则网元位置会自动改变
 * @method twaver.layout.SpringLayouter.isMovable
 * @param {twaver.Node} node 节点
 * @return {Boolean} 如果节点可以移动，则返回true，否则返回false
 */
twaver.layout.SpringLayouter.prototype.isMovable = function (node) {}

/**
 * 判断弹簧布局是否正在运行
 * @method twaver.layout.SpringLayouter.isRunning
 * @return {Boolean} 如果布局正在运行，则返回true，否则返回false
 */
twaver.layout.SpringLayouter.prototype.isRunning = function () {}

/**
 * 判断指定网元是否参与布局
 * @method twaver.layout.SpringLayouter.isVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元参与布局，则返回true，否则返回false
 */
twaver.layout.SpringLayouter.prototype.isVisible = function (element) {}

/**
 * 调用此方法进行一次布局，弹簧布局以一定时间间隔调用此方法对网元进行自动布局
 * @method twaver.layout.SpringLayouter.relax
 */
twaver.layout.SpringLayouter.prototype.relax = function () {}

/**
 * 设置两次自动布局之间的时间间隔，单位为毫秒，默认值为50ms
 * @method twaver.layout.SpringLayouter.setInterval
 * @param {Number} interval 两次自动布局之间的时间间隔，单位为毫秒
 */
twaver.layout.SpringLayouter.prototype.setInterval = function (interval) {}

/**
 * 设置布局界限，布局时网元不能超出此界限，默认值为null，表示布局时网元没有区域限制
 * @method twaver.layout.SpringLayouter.setLimitBounds
 * @param {Object} limitBounds 布局界限，包含x、y、width和height属性的Object对象
 */
twaver.layout.SpringLayouter.prototype.setLimitBounds = function (limitBounds) {}

/**
 * 设置连线排斥力系数，值越大，网元和连线之间的距离越大，默认值为0.6
 * @method twaver.layout.SpringLayouter.setLinkRepulsionFactor
 * @param {Number} linkRepulsionFactor 连线排斥力系数
 */
twaver.layout.SpringLayouter.prototype.setLinkRepulsionFactor = function (linkRepulsionFactor) {}

/**
 * 设置节点排斥力系数，值越大，网元之间的距离越大，默认值为0.6
 * @method twaver.layout.SpringLayouter.setNodeRepulsionFactor
 * @param {Number} nodeRepulsionFactor 节点排斥力系数
 */
twaver.layout.SpringLayouter.prototype.setNodeRepulsionFactor = function (nodeRepulsionFactor) {}

/**
 * 设置步进，即每次布局时网元重新计算位置的次数，值越大，布局越快趋于平衡，默认值为10
 * @method twaver.layout.SpringLayouter.setStepCount
 * @param {Number} stepCount 步进
 */
twaver.layout.SpringLayouter.prototype.setStepCount = function (stepCount) {}

/**
 * 开始布局
 * @method twaver.layout.SpringLayouter.start
 */
twaver.layout.SpringLayouter.prototype.start = function () {}

/**
 * 停止布局
 * @method twaver.layout.SpringLayouter.stop
 */
twaver.layout.SpringLayouter.prototype.stop = function () {}


/**
 * 构造函数
 * @class twaver.List
 * @constructor
 * @return {twaver.List}
 */
twaver.List = function () {}

/**
 * 在指定的序号上添加一个子项
 * @method twaver.List.add
 * @param {Object} item 添加的数据对象
 * @param {Number} [index] 添加的数据对象的序号，如果序号为空，则添加在队列的最后一个位置
 * @return {Number} 返回list的长度
 */
twaver.List.prototype.add = function (item, index) {}

/**
 * 在列表的末尾添加多个元素，并返回它的长度
 * @method twaver.List.addAll
 * @param {Object} array 添加的子项
 */
twaver.List.prototype.addAll = function (array) {}

/**
 * 清空列表中的内容
 * @method twaver.List.clear
 * @return {Array} 返回含有被删除的元素的数组
 */
twaver.List.prototype.clear = function () {}

/**
 * 判断列表中是否包含指定的项
 * @method twaver.List.contains
 * @param {Object} item 指定的子项
 * @return {Boolean} true为包含，否则为false
 */
twaver.List.prototype.contains = function (item) {}

/**
 * 循环遍历列表中所有的数据
 * @method twaver.List.forEach
 * @param {Function} f 遍历时的回调函数
 * @param {Object} [scope] 回调函数的作用域，为空时，指的是window
 */
twaver.List.prototype.forEach = function (f, scope) {}

/**
 * 反向循环遍历列表中所有的数据
 * @method twaver.List.forEachReverse
 * @param {Function} f 遍历时的回调函数
 * @param {Object} [scope] 回调函数的作用域，为空时，指的是window
 */
twaver.List.prototype.forEachReverse = function (f, scope) {}

/**
 * 获取指定序号上的数据项
 * @method twaver.List.get
 * @param {Number} index 指定的序号
 * @return {Object} 指定序号上的数据项
 */
twaver.List.prototype.get = function (index) {}

/**
 * 获取类的名称
 * @method twaver.List.getClassName
 * @return {String} 类名
 */
twaver.List.prototype.getClassName = function () {}

/**
 * @method twaver.List.indexOf
 * @param {String} item 
 * @return {String}
 */
twaver.List.prototype.indexOf = function (item) {}

/**
 * 判断列表是否为空
 * @method twaver.List.isEmpty
 * @return {Boolean} 如果为空返回true，否则返回false
 */
twaver.List.prototype.isEmpty = function () {}

/**
 * 移除列表上指定的项
 * @method twaver.List.remove
 * @param {Object} item 移除的列表项
 * @return {Number} 数据项的序号
 */
twaver.List.prototype.remove = function (item) {}

/**
 * 移除列表上指定的序号上的数据项
 * @method twaver.List.removeAt
 * @param {Number} index 指定的序号值
 * @return {String}
 */
twaver.List.prototype.removeAt = function (index) {}

/**
 * 给指定的序号上设置数据项
 * @method twaver.List.set
 * @param {Number} index 指定的序号值
 * @param {Object} item 指定的数据项
 * @return {String}
 */
twaver.List.prototype.set = function (index, item) {}

/**
 * 列表的长度
 * @method twaver.List.size
 * @return {Number} 列表的长度
 */
twaver.List.prototype.size = function () {}

/**
 * 按照指定的排序方法排序
 * @method twaver.List.sort
 * @param {Function} [sortFunction] 可选，排序的函数
 * @return {twaver.List}
 */
twaver.List.prototype.sort = function (sortFunction) {}

/**
 * 根据指定的函数将列表转成数组
 * @method twaver.List.toArray
 * @param {Function} matchFunction 转化时的条件函数
 * @param {Object} [scope] 条件函数的作用域，为空时指的是window
 * @return {Array}
 */
twaver.List.prototype.toArray = function (matchFunction, scope) {}

/**
 * @method twaver.List.toList
 * @param {String} matchFunction 
 * @param {String} scope 
 * @return {String}
 */
twaver.List.prototype.toList = function (matchFunction, scope) {}


/**
 * 所有附件的基类，附件是和网元视图关联的视图对象，用于显示网元的附属信息，例如告警、名称标签、图标等。可以定义附件是否显示在附件层，附件层在网元层的上面，所以会遮挡网元；为了让告警信息不被其他网元遮挡，告警等附件默认显示在附件层，也即告警显示在所有网元的上面
 * @class twaver.network.Attachment
 * @constructor
 * @param {twaver.network.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在附件层，可选，默认为false
 * @return {twaver.network.Attachment}
 */
twaver.network.Attachment = function (elementUI, showInAttachmentDiv) {}

/**
 * 销毁附件
 * @method twaver.network.Attachment.dispose
 */
twaver.network.Attachment.prototype.dispose = function () {}

/**
 * 获取附件透明度，默认值为1
 * @method twaver.network.Attachment.getAlpha
 * @return {Number} 返回附件透明度，默认值为1
 */
twaver.network.Attachment.prototype.getAlpha = function () {}

/**
 * 获取字符串类名
 * @method twaver.network.Attachment.getClassName
 * @return {String} 返回类名
 */
twaver.network.Attachment.prototype.getClassName = function () {}

/**
 * 获取和附件关联的网元
 * @method twaver.network.Attachment.getElement
 * @return {twaver.Element} 返回和附件关联的网元
 */
twaver.network.Attachment.prototype.getElement = function () {}

/**
 * 获取和附件关联的网元视图
 * @method twaver.network.Attachment.getElementUI
 * @return {twaver.network.ElementUI} 返回和附件关联的网元视图
 */
twaver.network.Attachment.prototype.getElementUI = function () {}

/**
 * 获取附件的字体
 * @method twaver.network.Attachment.getFont
 * @param {String} styleProp 样式名称
 * @return {String} 返回附件的字体
 */
twaver.network.Attachment.prototype.getFont = function (styleProp) {}

/**
 * 获取和附件关联的拓扑
 * @method twaver.network.Attachment.getNetwork
 * @return {twaver.network.Network} 返回和附件关联的拓扑
 */
twaver.network.Attachment.prototype.getNetwork = function () {}

/**
 * 获取指定样式的值，封装了Element#getStyle方法
 * @method twaver.network.Attachment.getStyle
 * @param {String} styleProp 样式名称
 * @return {Object} 返回指定样式的值
 */
twaver.network.Attachment.prototype.getStyle = function (styleProp) {}

/**
 * 获取附件的视图div元素
 * @method twaver.network.Attachment.getView
 * @return {HTMLDivElement} 返回附件的视图div元素
 */
twaver.network.Attachment.prototype.getView = function () {}

/**
 * 获取附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
 * @method twaver.network.Attachment.getViewRect
 * @return {Object} 返回附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
 */
twaver.network.Attachment.prototype.getViewRect = function () {}

/**
 * 命中测试，判断点击指定坐标点是否能选中附件
 * @method twaver.network.Attachment.hit
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 如果点击指定坐标能选中附件，则返回true，否者返回false
 */
twaver.network.Attachment.prototype.hit = function (x, y) {}

/**
 * 判断附件视图区域是否包含指定区域
 * @method twaver.network.Attachment.intersects
 * @param {Object} rect 指定区域，值为包含x、y、width和height属性的Object对象
 * @return {Boolean} 如果附件视图区域包含指定区域，则返回true，否者返回false
 */
twaver.network.Attachment.prototype.intersects = function (rect) {}

/**
 * 获取附件视图是否显示在附件层中
 * @method twaver.network.Attachment.isShowInAttachmentDiv
 * @return {Boolean} 返回附件视图是否显示在附件层中
 */
twaver.network.Attachment.prototype.isShowInAttachmentDiv = function () {}

/**
 * 更新附件视图，一般子类会重载此方法，以更新附件视图
 * @method twaver.network.Attachment.updateMeasure
 */
twaver.network.Attachment.prototype.updateMeasure = function () {}


/**
 * 网元对应的视图对象，是所有网元视图（LinkUI、NodeUI等）的基类，代表网元在拓扑视图上的可视实体
 * @class twaver.network.ElementUI
 * @constructor
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Element} element 网元
 * @return {twaver.network.ElementUI}
 */
twaver.network.ElementUI = function (network, element) {}

/**
 * 添加附件，如果showInAttachmentDiv为true，则附件被添加到拓扑的附件层（attachmentDiv），否则附件被添加到网元视图上
 * @method twaver.network.ElementUI.addAttachment
 * @param {twaver.network.Attachment} attachment 附件
 */
twaver.network.ElementUI.prototype.addAttachment = function (attachment) {}

/**
 * 添加内容区域，所有内容区域合并后构成unionBodyBounds
 * @method twaver.network.ElementUI.addBodyBounds
 * @param {Object} rect 区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.ElementUI.prototype.addBodyBounds = function (rect) {}

/**
 * 添加HTML元素到网元内容视图(bodyView)
 * @method twaver.network.ElementUI.addComponent
 * @param {HTMLElement} component HTML元素
 */
twaver.network.ElementUI.prototype.addComponent = function (component) {}

/**
 * 检查是否显示告警附件，如果Network#getAlarmLabel(element)返回null或空字符串，则不显示
 * @method twaver.network.ElementUI.checkAlarmAttachment
 */
twaver.network.ElementUI.prototype.checkAlarmAttachment = function () {}

/**
 * 检查所有附件是否显示，网元刷新时（validate）被调用，包括告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
 * @method twaver.network.ElementUI.checkAttachments
 */
twaver.network.ElementUI.prototype.checkAttachments = function () {}

/**
 * 检查是否显示编辑附件，如果此网元可选中（Network#isSelected(element)返回true），而且可编辑（Network#isEditable(element)返回true），而且此网元视图可编辑（isEditable()返回true），则显示，否则不显示
 * @method twaver.network.ElementUI.checkEditAttachment
 */
twaver.network.ElementUI.prototype.checkEditAttachment = function () {}

/**
 * 检查是否显示图标组附件，如果Network#getIconsNames(element)返回null或者length为0，则不显示
 * @method twaver.network.ElementUI.checkIconsAttachment
 */
twaver.network.ElementUI.prototype.checkIconsAttachment = function () {}

/**
 * 检查是否显示标签附件，如果Network#getLabel(element)返回null或空字符串，则不显示
 * @method twaver.network.ElementUI.checkLabelAttachment
 */
twaver.network.ElementUI.prototype.checkLabelAttachment = function () {}

/**
 * 清除未添加到视图中的对象，比如告警消失后，告警附件需要被清除
 * @method twaver.network.ElementUI.cleanUp
 * @param {Array} names 需要被删除属性名称数组
 */
twaver.network.ElementUI.prototype.cleanUp = function (names) {}

/**
 * 销毁网元视图，网元从拓扑关联的网元容器中删除时被调用，用于从拓扑视图中删除网元视图及其附件视图
 * @method twaver.network.ElementUI.dispose
 */
twaver.network.ElementUI.prototype.dispose = function () {}

/**
 * 获取告警附件
 * @method twaver.network.ElementUI.getAlarmAttachment
 * @return {twaver.network.AlarmAttachment} 返回告警附件
 */
twaver.network.ElementUI.prototype.getAlarmAttachment = function () {}

/**
 * 获取所有附件集合，包含告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
 * @method twaver.network.ElementUI.getAttachments
 * @return {twaver.List} 返回所有附件集合
 */
twaver.network.ElementUI.prototype.getAttachments = function () {}

/**
 * 获得内容区域，默认为createBodyRect返回的结果
 * @method twaver.network.ElementUI.getBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.ElementUI.prototype.getBodyRect = function () {}

/**
 * 获取网元内容视图
 * @method twaver.network.ElementUI.getBodyView
 * @return {HTMLDivElement} 返回网元内容视图
 */
twaver.network.ElementUI.prototype.getBodyView = function () {}

/**
 * 获取该类字符串类名
 * @method twaver.network.ElementUI.getClassName
 * @return {String} 返回类名
 */
twaver.network.ElementUI.prototype.getClassName = function () {}

/**
 * 获取指定样式的渲染颜色，如果innerColor不为空则返回innerColor，否则返回指定样式的值
 * @method twaver.network.ElementUI.getDyeColor
 * @param {String} styleProp 样式属性
 * @return {String} 返回渲染颜色
 */
twaver.network.ElementUI.prototype.getDyeColor = function (styleProp) {}

/**
 * 获取编辑附件
 * @method twaver.network.ElementUI.getEditAttachment
 * @return {twaver.network.EditAttachment} 返回编辑附件
 */
twaver.network.ElementUI.prototype.getEditAttachment = function () {}

/**
 * 获取和网元视图关联的网元
 * @method twaver.network.ElementUI.getElement
 * @return {twaver.Element} 返回和网元视图关联的网元
 */
twaver.network.ElementUI.prototype.getElement = function () {}

/**
 * 获取给定样式属性的值作为字体，如果指定样式的值是null，则返回twaver.Defaults.FONT
 * @method twaver.network.ElementUI.getFont
 * @param {String} styleProp 样式属性
 * @return {String} 返回字体
 */
twaver.network.ElementUI.prototype.getFont = function (styleProp) {}

/**
 * 获取热点，用于定位附件等的位置
 * @method twaver.network.ElementUI.getHotSpot
 * @return {Object} 返回热点，值为包含x和y属性的Object对象
 */
twaver.network.ElementUI.prototype.getHotSpot = function () {}

/**
 * 获取图标组附件
 * @method twaver.network.ElementUI.getIconsAttachment
 * @return {twaver.network.IconsAttachment} 返回图标组附件
 */
twaver.network.ElementUI.prototype.getIconsAttachment = function () {}

/**
 * 获取网元填充色
 * @method twaver.network.ElementUI.getInnerColor
 * @return {String} 返回网元填充色
 */
twaver.network.ElementUI.prototype.getInnerColor = function () {}

/**
 * 获取标签附件
 * @method twaver.network.ElementUI.getLabelAttachment
 * @return {twaver.network.LabelAttachment} 返回标签附件
 */
twaver.network.ElementUI.prototype.getLabelAttachment = function () {}

/**
 * 获取和网元视图关联的拓扑
 * @method twaver.network.ElementUI.getNetwork
 * @return {twaver.network.Network} 返回和网元视图关联的拓扑
 */
twaver.network.ElementUI.prototype.getNetwork = function () {}

/**
 * 获取网元边框颜色
 * @method twaver.network.ElementUI.getOuterColor
 * @return {String} 返回网元边框颜色
 */
twaver.network.ElementUI.prototype.getOuterColor = function () {}

/**
 * 获取网元选中后阴影颜色
 * @method twaver.network.ElementUI.getShadowColor
 * @return {String} 返回网元选中后阴影颜色
 */
twaver.network.ElementUI.prototype.getShadowColor = function () {}

/**
 * 获取指定样式属性的值，封装了Element.getStyle
 * @method twaver.network.ElementUI.getStyle
 * @param {String} styleProp 样式属性
 * @return {Object} 返回指定样式属性的值
 */
twaver.network.ElementUI.prototype.getStyle = function (styleProp) {}

/**
 * 获取合并的内容区域
 * @method twaver.network.ElementUI.getUnionBodyBounds
 * @return {Object} 返回合并的内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.ElementUI.prototype.getUnionBodyBounds = function () {}

/**
 * 获取网元视图，网元视图包含内容视图（bodyview）和附件（告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment）
 * @method twaver.network.ElementUI.getView
 * @return {HTMLDivElement} 返回网元视图
 */
twaver.network.ElementUI.prototype.getView = function () {}

/**
 * 获取视图内容区域，包括unionBodyBounds和所有附件的区域
 * @method twaver.network.ElementUI.getViewRect
 * @return {Object} 返回视图内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.ElementUI.prototype.getViewRect = function () {}

/**
 * 和网元视图关联的网元属性变化时的处理函数，默认实现为调用invalidate方法让网元视图刷新
 * @method twaver.network.ElementUI.handlePropertyChange
 * @param {Object} e 属性变化事件，包含property、oldValue和newValue属性
 */
twaver.network.ElementUI.prototype.handlePropertyChange = function (e) {}

/**
 * 和网元视图关联的网元被选中或取消选中时的处理函数，默认实现为调用invalidate方法让网元视图刷新
 * @method twaver.network.ElementUI.handleSelectionChange
 * @param {Object} e 选择变化事件，包含kind和data属性
 */
twaver.network.ElementUI.prototype.handleSelectionChange = function (e) {}

/**
 * 命中测试，判断网元视图是否包含指定坐标
 * @method twaver.network.ElementUI.hit
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 网元视图是否包含指定坐标，则返回true，否者返回false
 */
twaver.network.ElementUI.prototype.hit = function (x, y) {}

/**
 * 对网元视图中的画布元素进行命中测试，判断网元视图中的画布元素是否包含指定坐标
 * @method twaver.network.ElementUI.hitCanvas
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Array} names 画布元素名称数组
 * @return {Boolean} 网元视图中的画布元素是否包含指定坐标，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.hitCanvas = function (x, y, names) {}

/**
 * 对网元视图中的html元素进行命中测试，判断网元视图中的html元素是否包含指定坐标
 * @method twaver.network.ElementUI.hitComponent
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Array} names html元素名称数组
 * @return {Boolean} 如果网元视图中的html元素包含指定坐标，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.hitComponent = function (x, y, names) {}

/**
 * 获取指定坐标下的视图对象，为附件或者网元视图本身
 * @method twaver.network.ElementUI.hitTest
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Object} 返回指定坐标下的视图对象，为附件或者网元视图本身
 */
twaver.network.ElementUI.prototype.hitTest = function (x, y) {}

/**
 * 判断网元视图是否和指定区域相交
 * @method twaver.network.ElementUI.intersects
 * @param {Object} rect 矩形区域，值为包含x、y、width和height属性的Object对象
 * @return {Boolean} 如果网元视图包含指定矩形区域，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.intersects = function (rect) {}

/**
 * 对网元视图中的html元素进行命中测试，判断网元视图中的画布元素是否包含指定区域
 * @method twaver.network.ElementUI.intersectsCanvas
 * @param {Object} rect 矩形区域，包含x、y、width和height属性的Object对象
 * @param {Array} names 画布元素名称数组
 * @return {Boolean} 如果网元视图中的画布元素包含指定区域，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.intersectsCanvas = function (rect, names) {}

/**
 * 对网元视图中的html元素进行命中测试，判断网元视图中的html元素是否包含指定区域
 * @method twaver.network.ElementUI.intersectsComponent
 * @param {Object} rect 矩形区域，包含x、y、width和height属性的Object对象
 * @param {Array} names html元素名称数组
 * @return {Boolean} 如果网元视图中的html元素包含指定区域，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.intersectsComponent = function (rect, names) {}

/**
 * 获取指定矩形区域的视图对象，为附件或者网元视图本身
 * @method twaver.network.ElementUI.intersectsTest
 * @param {Object} rect 矩形区域，包含x、y、width和height属性的Object对象
 * @return {Object} 返回指定矩形区域的对象，为附件或者网元视图本身
 */
twaver.network.ElementUI.prototype.intersectsTest = function (rect) {}

/**
 * @method twaver.network.ElementUI.invalidate
 * @param {String} checkAttachments 
 */
twaver.network.ElementUI.prototype.invalidate = function (checkAttachments) {}

/**
 * 获取网元视图是否可编辑，默认值为true
 * @method twaver.network.ElementUI.isEditable
 * @return {Boolean} 如果网元视图可编辑，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.isEditable = function () {}

/**
 * 判断是否需要设置阴影，默认实现是如果设置了阴影颜色，而且网元被被选中，而且select.style样式为shadow，则返回true，否则返回false
 * @method twaver.network.ElementUI.isShadowable
 * @return {Boolean} 如果需要设置阴影，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.isShadowable = function () {}

/**
 * 判断网元视图是否可见
 * @method twaver.network.ElementUI.isVisible
 * @return {Boolean} 如果网元视图可见，则返回true，否则返回false
 */
twaver.network.ElementUI.prototype.isVisible = function () {}

/**
 * 删除指定附件
 * @method twaver.network.ElementUI.removeAttachment
 * @param {twaver.network.Attachment} attachment 附件
 */
twaver.network.ElementUI.prototype.removeAttachment = function (attachment) {}

/**
 * 设置热点，用于定位附件等的位置
 * @method twaver.network.ElementUI.setHotSpot
 * @param {Object} value 热点，值为包含x和y属性的Object对象
 */
twaver.network.ElementUI.prototype.setHotSpot = function (value) {}

/**
 * 给指定画布元素设置阴影效果
 * @method twaver.network.ElementUI.setShadow
 * @param {Object} part 网元视图（ElementUI）或者附件（Attachment）
 * @param {HTMLCanvasElement} canvas 画布元素
 * @param {Object} rect 画图大小及位置，值为包含x、y、width和height属性的Object对象
 * @return {CanvasRenderingContext2D} 画布渲染内容
 */
twaver.network.ElementUI.prototype.setShadow = function (part, canvas, rect) {}

/**
 * 设置网元视图是否可见
 * @method twaver.network.ElementUI.setVisible
 * @param {Boolean} value 是否可见
 */
twaver.network.ElementUI.prototype.setVisible = function (value) {}

/**
 * 更新网元视图内容，被validate方法调用，一般子类重载此方法，往网元视图添加HTML元素
 * @method twaver.network.ElementUI.updateMeasure
 */
twaver.network.ElementUI.prototype.updateMeasure = function () {}

/**
 * 此方法被Network调用，用以重画网元视图内容，此内部检查所有附件是否可见（checkAttachments），并调用updateMeasure方法重画网元内容，最后调用附件的updateMeasure方法，让附件重画
 * @method twaver.network.ElementUI.validate
 */
twaver.network.ElementUI.prototype.validate = function () {}


/**
 * 所有拓扑交互处理器的基类，响应鼠标、键盘以及触摸事件；交互处理器封装了原始鼠标、键盘以及触摸事件，并派发了更加方便易用的交互事件（包含当前事件的数据源（一般为网元或者网元集合）以及动作（比如单击网元、双击网元、双击背景等等））。使用Network#addInteractionListener添加交互处理监听器。用户也可以继承此类实现自定义交互处理器，并通过Network#setInteractions加载交互处理器
 * @class twaver.network.interaction.BaseInteraction
 * @constructor
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.BaseInteraction}
 */
twaver.network.interaction.BaseInteraction = function (network) {}

/**
 * 批量添加事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会查找函数名为"handle_"加"事件类型"（handle_mousedown，handle_mousedown）的函数，作为指定事件类型的回调函数。此方法一般在setUp方法里被调用
 * @method twaver.network.interaction.BaseInteraction.addListener
 */
twaver.network.interaction.BaseInteraction.prototype.addListener = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.network.interaction.BaseInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.network.interaction.BaseInteraction.prototype.getClassName = function () {}

/**
 * 批量删除事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会删除指定事件类型的函数名为"hanle_"加"事件类型"（handle_mousedown，handle_mousedown）的监听器。此方法一般在tearDown方法里被调用
 * @method twaver.network.interaction.BaseInteraction.removeListener
 */
twaver.network.interaction.BaseInteraction.prototype.removeListener = function () {}

/**
 * 初始化交互处理器，一般调用addListener方法添加鼠标、键盘以及触摸事件监听器；Network#setInteractions会调用此方法
 * @method twaver.network.interaction.BaseInteraction.setUp
 */
twaver.network.interaction.BaseInteraction.prototype.setUp = function () {}

/**
 * 销毁交互处理器，一般调用removeListener方法删除鼠标、键盘以及触摸事件监听器；使用Network#setInteractions切换交互处理器时会调用此方法撤销旧的交互处理器
 * @method twaver.network.interaction.BaseInteraction.tearDown
 */
twaver.network.interaction.BaseInteraction.prototype.tearDown = function () {}


/**
 * 鹰眼交互处理器
 * @class twaver.network.OverviewInteraction
 * @constructor
 * @param {twaver.network.Overview} overview 鹰眼
 * @return {twaver.network.OverviewInteraction}
 */
twaver.network.OverviewInteraction = function (overview) {}

/**
 * 清除拖动鼠标和松开鼠标监听
 * @method twaver.network.OverviewInteraction.clear
 */
twaver.network.OverviewInteraction.prototype.clear = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.network.OverviewInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.network.OverviewInteraction.prototype.getClassName = function () {}

/**
 * 按下鼠标时执行的处理函数
 * @method twaver.network.OverviewInteraction.handleMousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.OverviewInteraction.prototype.handleMousedown = function (e) {}

/**
 * 拖动鼠标时执行的处理函数
 * @method twaver.network.OverviewInteraction.handleMousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.OverviewInteraction.prototype.handleMousemove = function (e) {}

/**
 * 松开鼠标时执行的处理函数
 * @method twaver.network.OverviewInteraction.handleMouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.OverviewInteraction.prototype.handleMouseup = function (e) {}


/**
 * 鹰眼触摸交互处理器
 * @class twaver.network.OverviewMSTouchInteraction
 * @constructor
 * @param {twaver.network.Overview} overview 鹰眼
 * @return {twaver.network.OverviewMSTouchInteraction}
 */
twaver.network.OverviewMSTouchInteraction = function (overview) {}

/**
 * 获取类名
 * @method twaver.network.OverviewMSTouchInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.network.OverviewMSTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.network.OverviewMSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.OverviewMSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.network.OverviewMSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.OverviewMSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.network.OverviewMSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.OverviewMSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 鹰眼触摸交互处理器
 * @class twaver.network.OverviewTouchInteraction
 * @constructor
 * @param {twaver.network.Overview} overview 鹰眼
 * @return {twaver.network.OverviewTouchInteraction}
 */
twaver.network.OverviewTouchInteraction = function (overview) {}

/**
 * 清除拖动鼠标和松开鼠标监听
 * @method twaver.network.OverviewTouchInteraction.clear
 */
twaver.network.OverviewTouchInteraction.prototype.clear = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.network.OverviewTouchInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.network.OverviewTouchInteraction.prototype.getClassName = function () {}

/**
 * 触摸结束时执行的处理函数
 * @method twaver.network.OverviewTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.OverviewTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 触摸移动时执行的处理函数
 * @method twaver.network.OverviewTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.OverviewTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 触摸开始时执行的处理函数
 * @method twaver.network.OverviewTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.OverviewTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * HTML元素缓存池，根据需要动态创建HTML元素，并重复使用
 * @class twaver.Pool
 * @constructor
 * @param {String} tagName 缓存的HTML元素标签
 * @param {Number} [redundancy] 冗余HTML元素缓存数，可选，默认值为2
 * @return {twaver.Pool}
 */
twaver.Pool = function (tagName, redundancy) {}

/**
 * 清除未使用的缓存项
 * @method twaver.Pool.clear
 */
twaver.Pool.prototype.clear = function () {}

/**
 * 当前HTML元素索引，初始值为-1，调用get方法后索引加一，调用release方法后，索引减一
 * @property currentIndex
 * @type Number
 */
twaver.Pool.prototype.currentIndex = function () {}

/**
 * @method twaver.Pool.get
 * @return {HTMLElement} 返回下一个可用的HTML元素
 */
twaver.Pool.prototype.get = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.Pool.getClassName
 * @return {String} 返回此类的字符串类名
 */
twaver.Pool.prototype.getClassName = function () {}

/**
 * 冗余HTML元素缓存数，默认值为2
 * @property redundancy
 * @type Number
 */
twaver.Pool.prototype.redundancy = function () {}

/**
 * 释放指定HTML元素
 * @method twaver.Pool.release
 * @param {HTMLElement} html HTML元素
 */
twaver.Pool.prototype.release = function (html) {}

/**
 * 重置缓存池
 * @method twaver.Pool.reset
 */
twaver.Pool.prototype.reset = function () {}

/**
 * 获取当前缓存池大小
 * @method twaver.Pool.size
 * @return {Number} 返回当前缓存池大小
 */
twaver.Pool.prototype.size = function () {}


/**
 * 属性变化事件派发器，继承了twaver.EventDispatcher，用于派发属性变化事件
 * @class twaver.PropertyChangeDispatcher
 * @constructor
 * @return {twaver.PropertyChangeDispatcher}
 */
twaver.PropertyChangeDispatcher = function () {}

/**
 * 添加属性变化监听器，用于监听属性变化
 * @method twaver.PropertyChangeDispatcher.addPropertyChangeListener
 * @param {Function} listener 属性变化监听器
 * @param {Object} [scope] 可选，属性变化监听器的作用域，默认为null，即全局
 * @param {Boolean} [ahead] 可选，是否将此监听放在最前面，默认为false
 * @example var dispatcher = new twaver.PropertyChangeDispatcher();
 * dispatcher.addPropertyChangeListener(function (e) {
 *     console.log(e.property, e.newValue, e.oldValue);
 * });
 */
twaver.PropertyChangeDispatcher.prototype.addPropertyChangeListener = function (listener, scope, ahead) {}

/**
 * 派发属性变化事件，属性变化时调用此方法
 * @method twaver.PropertyChangeDispatcher.firePropertyChange
 * @param {String} property 发生变化的属性
 * @param {Object} oldValue 和此属性相关的旧值
 * @param {Object} newValue 和此属性相关的新值
 * @return {Boolean} 如果新值和旧值相等则返回false，否则返回true
 */
twaver.PropertyChangeDispatcher.prototype.firePropertyChange = function (property, oldValue, newValue) {}

/**
 * 获取此类的字符串类名
 * @method twaver.PropertyChangeDispatcher.getClassName
 * @return {String} 返回此类的字符串类名
 */
twaver.PropertyChangeDispatcher.prototype.getClassName = function () {}

/**
 * 属性变化时（firePropertyChange）触发的动作，不需要调用此方法，但可以重载此方法执行自定义逻辑
 * @method twaver.PropertyChangeDispatcher.onPropertyChanged
 * @param {Object} e 属性变化事件，包含property、oldValue和newValue的Object对象
 */
twaver.PropertyChangeDispatcher.prototype.onPropertyChanged = function (e) {}

/**
 * 删除指定作用域的属性变化监听器，作用域必须和添加监听器时的作用域一致，相同的作用域的相同监听器只能成功添加一次
 * @method twaver.PropertyChangeDispatcher.removePropertyChangeListener
 * @param {Function} listener 属性变化监听器
 * @param {Object} [scope] 属性变化监听器的作用域，可选，默认为null，代表全局
 */
twaver.PropertyChangeDispatcher.prototype.removePropertyChangeListener = function (listener, scope) {}


/**
 * 属性传播定义了传播的一种规则，当一个属性值发生更改时，它会传播到相关的对象上。当然你可以定义传播的方向，哪些属性需要传播，哪些网元可以传播。
 * 属性传播是和数据容器一起工作的
 * @class twaver.PropertyPropagator
 * @constructor
 * @param {twaver.DataBox} dataBox 绑定的数据容器
 * @param {String} propertyName 属性名
 * @param {String} propertyType 属性类型
 * @return {twaver.PropertyPropagator} 属性传播对象
 */
twaver.PropertyPropagator = function (dataBox, propertyName, propertyType) {}

/**
 * 获取类的名称
 * @method twaver.PropertyPropagator.getClassName
 * @return {String} 类名
 */
twaver.PropertyPropagator.prototype.getClassName = function () {}

/**
 * 获取绑定的数据容器
 * @method twaver.PropertyPropagator.getDataBox
 * @return {twaver.DataBox} 数据容器对象
 */
twaver.PropertyPropagator.prototype.getDataBox = function () {}

/**
 * 获取传递的属性名称
 * @method twaver.PropertyPropagator.getPropertyName
 * @return {String} 属性名称
 */
twaver.PropertyPropagator.prototype.getPropertyName = function () {}

/**
 * 获取传递的属性类型
 * @method twaver.PropertyPropagator.getPropertyType
 * @return {Object} 传递的属性类型
 */
twaver.PropertyPropagator.prototype.getPropertyType = function () {}

/**
 * 当数据容器更改时调用此方法，默认将会传递更改的数据。可以重写这个方法更改默认的规则
 * @method twaver.PropertyPropagator.handleDataBoxChange
 * @param {Object} e 数据容器更改的事件
 */
twaver.PropertyPropagator.prototype.handleDataBoxChange = function (e) {}

/**
 * 当数据容器中数据的属性更改时调用此方法，默认将会传递更改的数据。可以重写这个方法更改默认的规则
 * @method twaver.PropertyPropagator.handleDataPropertyChange
 * @param {Object} e 数据容器中数据属性更改的事件
 */
twaver.PropertyPropagator.prototype.handleDataPropertyChange = function (e) {}

/**
 * 返回属性传递规则是否生效
 * @method twaver.PropertyPropagator.isEnable
 * @return {Boolean} 如果为true，传播生效，如果为false，传播将会停止
 */
twaver.PropertyPropagator.prototype.isEnable = function () {}

/**
 * 是否是需要响应的类型，TWaver内部使用
 * @method twaver.PropertyPropagator.isInterestedProperty
 * @param {Object} e 属性更改的事件
 * @return {Boolean} true为符合条件，否则为false
 */
twaver.PropertyPropagator.prototype.isInterestedProperty = function (e) {}

/**
 * 传播数据中指定的属性
 * @method twaver.PropertyPropagator.propagate
 * @param {twaver.Data} data 传播属性值的数据对象
 */
twaver.PropertyPropagator.prototype.propagate = function (data) {}

/**
 * 当需要传递属性值到指定父亲的属性时，调用这个方法
 * @method twaver.PropertyPropagator.propagateToParent
 * @param {twaver.Data} child 孩子对象
 * @param {twaver.Data} parent 父亲对象
 */
twaver.PropertyPropagator.prototype.propagateToParent = function (child, parent) {}

/**
 * 将网元对象的属性值传递到上一级的数据上。"上一级"在TWaver中默认为父亲节点。用户可以重写这个方法去更改默认的传播规则
 * @method twaver.PropertyPropagator.propagateToTop
 * @param {twaver.Data} data 传递属性的数据对象
 */
twaver.PropertyPropagator.prototype.propagateToTop = function (data) {}

/**
 * 设置属性传递规则是否生效
 * @method twaver.PropertyPropagator.setEnable
 * @param {Boolean} enable 如果为true，传播生效，如果为false，传播将会停止
 */
twaver.PropertyPropagator.prototype.setEnable = function (enable) {}


/**
 * 快速查找这个类提供了一种快速搜索DataBox的功能，用户可以通过这个类中提供的方法来根据数据上的某个属性快速地查询出匹配的数据。当然用户也可以通过遍历Databox实现查找的功能，但是如果是频繁的遍历和循环，会对性能有一定的影响。而且它没有快速查找这个类的效率高。
 * 
 * 快速查找通过构造函数来绑定数据容器和需要进行索引的属性，一旦绑定之后，当数据容器中索引的属性值发生变化时，快速查找中数据也会进行相应的修改。
 * 
 * @class twaver.QuickFinder
 * @constructor
 * @param {twaver.DataBox} dataBox 绑定的数据容器对象
 * @param {String} propertyName 索引的属性名称
 * @param {String} [propertyType] 索引的属性类型，属性类型的可选值为： 'accessor':get/set方法的属性 'style'：样式属性 'client'：自定义的属性。默认为‘accessor’
 * @param {Function} [valueFunction] 需要包含在返回结果中值的函数
 * @param {Function} [filterFunction] 过滤出不包含在返回结果中的值的过滤器
 * @return {twaver.QuickFinder} 快速查找对象本身
 */
twaver.QuickFinder = function (dataBox, propertyName, propertyType, valueFunction, filterFunction) {}

/**
 * 释放所有绑定的资源。当调用这个方法时，绑定在快速查找上的数据容器将被释放
 * @method twaver.QuickFinder.dispose
 */
twaver.QuickFinder.prototype.dispose = function () {}

/**
 * 通过指定的值查询出所有匹配的数据
 * @method twaver.QuickFinder.find
 * @param {String} value 指定查询的值
 * @return {twaver.List} 匹配的数据集合
 */
twaver.QuickFinder.prototype.find = function (value) {}

/**
 * 通过给定的值查询出匹配数据集合的第一个数据
 * @method twaver.QuickFinder.findFirst
 * @param {Object} value 给定查询的值
 * @return {twaver.Data} 数据集合的第一个数据
 */
twaver.QuickFinder.prototype.findFirst = function (value) {}

/**
 * 获取这个类的类名
 * @method twaver.QuickFinder.getClassName
 * @return {String} 类名
 */
twaver.QuickFinder.prototype.getClassName = function () {}

/**
 * 获取绑定的数据容器
 * @method twaver.QuickFinder.getDataBox
 * @return {twaver.DataBox} 数据容器对象
 */
twaver.QuickFinder.prototype.getDataBox = function () {}

/**
 * 获取过滤的方法
 * @method twaver.QuickFinder.getFilterFunction
 * @return {Function} 过滤的方法
 */
twaver.QuickFinder.prototype.getFilterFunction = function () {}

/**
 * 获取绑定的属性名称
 * @method twaver.QuickFinder.getPropertyName
 * @return {String} 绑定的属性名称
 */
twaver.QuickFinder.prototype.getPropertyName = function () {}

/**
 * 获取绑定的属性类型。属性类型的可选值为：
 * 'accessor':get/set方法的属性
 * 'style'：样式属性
 * 'client：自定义的属性
 * @method twaver.QuickFinder.getPropertyType
 * @return {String} 属性类型
 */
twaver.QuickFinder.prototype.getPropertyType = function () {}

/**
 * 获取对象的属性值。TWaver内部使用
 * @method twaver.QuickFinder.getValue
 * @param {twaver.Data} data 数据对象
 * @return {String} 数据对象的属性值
 */
twaver.QuickFinder.prototype.getValue = function (data) {}

/**
 * 获取返回值的方法。这个方法用于指出哪些值应该包含在返回的值中。
 * @method twaver.QuickFinder.getValueFunction
 * @return {Function} 返回值的方法
 */
twaver.QuickFinder.prototype.getValueFunction = function () {}

/**
 * 当数据容器发生变化时，调用此方法。TWaver内部使用
 * @method twaver.QuickFinder.handleDataBoxChange
 * @param {Object} e 数据发生变化的事件
 */
twaver.QuickFinder.prototype.handleDataBoxChange = function (e) {}

/**
 * 当数据容器中数据的属性发生变化时调用此方法
 * @method twaver.QuickFinder.handleDataPropertyChange
 * @param {Object} e 数据属性发生变化的事件
 */
twaver.QuickFinder.prototype.handleDataPropertyChange = function (e) {}

/**
 * 指定的数据是否符合当前的快速查找类的条件
 * @method twaver.QuickFinder.isInterested
 * @param {twaver.Data} data 数据对象
 * @return {Boolean} true为符合，否则为false
 */
twaver.QuickFinder.prototype.isInterested = function (data) {}


/**
 * 选择容器是包含在数据容器中的。选择容器用于管理数据容器中所有选中的对象。例如当选中某个对象时，它将会同时添加到选择容器中，当取消选中某个对象时，便会从选择容器中删除。
 * 通过选择容器，可以更方便的访问或遍历所有选中的数据，也可以更方便地选中和取消某个数据
 * 
 * 
 * @class twaver.SelectionModel
 * @constructor
 * @param {twaver.DataBox} dataBox 绑定的数据容器
 * @return {twaver.SelectionModel} 选择容器对象本身
 */
twaver.SelectionModel = function (dataBox) {}

/**
 * 添加网元选中更改事件的监听器，当网元的选中状态发生变化时可以通过此监听器监听
 * @method twaver.SelectionModel.addSelectionChangeListener
 * @param {Function} listener 选中更改的监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 * @param {Boolean} [ahead] 是否添加在监听器列表的最前方，如果为空，则添加在最后一个位置
 */
twaver.SelectionModel.prototype.addSelectionChangeListener = function (listener, scope, ahead) {}

/**
 * 追加指定的选中数据
 * @method twaver.SelectionModel.appendSelection
 * @param {twaver.List} datas 追加的选中数据的集合
 */
twaver.SelectionModel.prototype.appendSelection = function (datas) {}

/**
 * 清空所有选中的数据
 * @method twaver.SelectionModel.clearSelection
 */
twaver.SelectionModel.prototype.clearSelection = function () {}

/**
 * 判断是否包含某个数据
 * @method twaver.SelectionModel.contains
 * @param {twaver.Data} data 指定的数据
 * @return {Boolean} true为包含，否则为false
 */
twaver.SelectionModel.prototype.contains = function (data) {}

/**
 * 释放选择容器中所有的资源。包括选择容器上的监听器和选择容器中的数据
 * @method twaver.SelectionModel.dispose
 */
twaver.SelectionModel.prototype.dispose = function () {}

/**
 * 派发出选中数据更改的事件
 * @method twaver.SelectionModel.fireSelectionChange
 * @param {String} kind 数据更改的类型
 * @param {twaver.List} datas 选中数据集合的新值
 * @param {twaver.List} oldSelection 选中数据集合的老值
 */
twaver.SelectionModel.prototype.fireSelectionChange = function (kind, datas, oldSelection) {}

/**
 * 获取绑定的数据容器
 * @method twaver.SelectionModel.getDataBox
 * @return {twaver.DataBox} 绑定的数据容器
 */
twaver.SelectionModel.prototype.getDataBox = function () {}

/**
 * 获取选择过滤器，它是用于过滤哪些数据可以选择，哪些数据不可以选择。如果想要使某些数据一直处于不可选中的状态，可以使用此过滤器。
 * @method twaver.SelectionModel.getFilterFunction
 * @return {Function} 选择过滤器
 */
twaver.SelectionModel.prototype.getFilterFunction = function () {}

/**
 * 获取第一个选中的数据
 * @method twaver.SelectionModel.getFirstData
 * @return {twaver.Data} 第一个选中的数据对象
 */
twaver.SelectionModel.prototype.getFirstData = function () {}

/**
 * 获取最后一个选中的数据
 * @method twaver.SelectionModel.getLastData
 * @return {twaver.Data} 最后一个选中的数据对象
 */
twaver.SelectionModel.prototype.getLastData = function () {}

/**
 * 获取数据容器中所有选中的数据
 * @method twaver.SelectionModel.getSelection
 * @return {twaver.List} 选中数据的集合
 */
twaver.SelectionModel.prototype.getSelection = function () {}

/**
 * 获取选择模型的类型，默认是多选。
 * 选择模型的类型可选值：
 * noneSelection:不可选中
 * singleSelection:单选
 * multipleSelection:多选
 * 
 * @method twaver.SelectionModel.getSelectionMode
 * @return {String} 选择模型的类型
 */
twaver.SelectionModel.prototype.getSelectionMode = function () {}

/**
 * 处理数据容器更改的事件的方法。TWaver内部使用
 * @method twaver.SelectionModel.handleDataBoxChange
 * @param {Object} e 数据容器更改的事件
 */
twaver.SelectionModel.prototype.handleDataBoxChange = function (e) {}

/**
 * 判断某个数据是否是选中状态
 * @method twaver.SelectionModel.isSelectable
 * @param {twaver.Data} data 数据对象
 * @return {Boolean} true为选中，否则为false
 */
twaver.SelectionModel.prototype.isSelectable = function (data) {}

/**
 * 删除指定选中的数据
 * @method twaver.SelectionModel.removeSelection
 * @param {twaver.Data} datas 删除选中数据的集合
 */
twaver.SelectionModel.prototype.removeSelection = function (datas) {}

/**
 * 删除网元选中更改事件的监听器，当网元的选中状态发生变化时可以通过此监听器监听
 * @method twaver.SelectionModel.removeSelectionChangeListener
 * @param {Function} listener 网元选中更改事件的监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 */
twaver.SelectionModel.prototype.removeSelectionChangeListener = function (listener, scope) {}

/**
 * 选中数据容器中所有的数据
 * @method twaver.SelectionModel.selectAll
 */
twaver.SelectionModel.prototype.selectAll = function () {}

/**
 * 设置选择过滤器，它是用于过滤哪些数据可以选择，哪些数据不可以选择。如果想要使某些数据一直处于不可选中的状态，可以使用此过滤器。
 * @method twaver.SelectionModel.setFilterFunction
 * @param {Function} filterFunction 选择过滤器
 */
twaver.SelectionModel.prototype.setFilterFunction = function (filterFunction) {}

/**
 * 将某些数据设置为选中状态
 * @method twaver.SelectionModel.setSelection
 * @param {twaver.List} datas 选中的数据集合
 */
twaver.SelectionModel.prototype.setSelection = function (datas) {}

/**
 * 设置选择模型的类型。
 * 选择模型的类型可选值：
 * noneSelection:不可选中
 * singleSelection:单选
 * multipleSelection:多选
 * 
 * @method twaver.SelectionModel.setSelectionMode
 * @param {String} selectionMode 选择模型的类型
 */
twaver.SelectionModel.prototype.setSelectionMode = function (selectionMode) {}

/**
 * 选中数据的大小
 * @method twaver.SelectionModel.size
 * @return {Number} 选中数据的大小
 */
twaver.SelectionModel.prototype.size = function () {}

/**
 * 将选择容器中的数据转换成List
 * @method twaver.SelectionModel.toSelection
 * @param {Function} matchFunction 转换集合时的过滤器
 * @param {Object} [scope] 过滤器的作用域。为空时值为window
 * @return {twaver.List} 数据集合
 */
twaver.SelectionModel.prototype.toSelection = function (matchFunction, scope) {}


/**
 * 这个类是一个序列化时参数的设置类。当数据容器或数据进行序列化时，可以进行一些参数的设置
 * @class twaver.SerializationSettings
 * @constructor
 * @return {twaver.SerializationSettings} 序列化设置对象本身
 */
twaver.SerializationSettings = function () {}

/**
 * 获取指定Client属性的数据类型
 * @method twaver.SerializationSettings.getClientType
 * @param {String} client Client属性名称
 * @return {String} 返回指定Client属性的数据类型
 * @static
 */
twaver.SerializationSettings.getClientType = function (client) {}

/**
 * 获取指定Property属性的数据类型
 * @method twaver.SerializationSettings.getPropertyType
 * @param {String} property Property属性名称
 * @return {String} 返回指定Property属性的数据类型
 * @static
 */
twaver.SerializationSettings.getPropertyType = function (property) {}

/**
 * 获取指定Style属性的数据类型
 * @method twaver.SerializationSettings.getStyleType
 * @param {String} style Style属性名称
 * @return {String} 返回指定Style属性的数据类型
 * @static
 */
twaver.SerializationSettings.getStyleType = function (style) {}

/**
 * 数据容器中所有数据的Client属性是否需要序列化，true为序列化，否则为false
 * @property isClientSerializable
 * @type Boolean
 * @static
 */
twaver.SerializationSettings.isClientSerializable = function () {}

/**
 * 数据容器是否需要进行序列化。true为序列化，否则为false
 * @property isDataBoxSerializable
 * @type Boolean
 * @static
 */
twaver.SerializationSettings.isDataBoxSerializable = function () {}

/**
 * 图层容器是否需要序列化，true为需要序列化，否则为false
 * @property isLayerBoxSerializable
 * @type Boolean
 * @static
 */
twaver.SerializationSettings.isLayerBoxSerializable = function () {}

/**
 * 数据容器中所有数据的Style属性是否需要序列化，true为序列化，否则为false
 * @property isStyleSerializable
 * @type Boolean
 * @static
 */
twaver.SerializationSettings.isStyleSerializable = function () {}

/**
 * 获取这个类的名称
 * @method twaver.SerializationSettings.getClassName
 * @return {String} 类名
 */
twaver.SerializationSettings.prototype.getClassName = function () {}

/**
 * 获取指定Client属性的数据类型
 * @method twaver.SerializationSettings.getClientType
 * @param {String} client Client属性名称
 * @return {String} 返回指定Client属性的数据类型
 */
twaver.SerializationSettings.prototype.getClientType = function (client) {}

/**
 * 获取指定Property属性的数据类型
 * @method twaver.SerializationSettings.getPropertyType
 * @param {String} property Property属性名称
 * @return {String} 返回指定Property属性的数据类型
 */
twaver.SerializationSettings.prototype.getPropertyType = function (property) {}

/**
 * 获取指定Style属性的数据类型
 * @method twaver.SerializationSettings.getStyleType
 * @param {String} style Style属性名称
 * @return {String} 返回指定Style属性的数据类型
 */
twaver.SerializationSettings.prototype.getStyleType = function (style) {}

/**
 * 设置指定Client属性的数据类型
 * @method twaver.SerializationSettings.setClientType
 * @param {String} client Client属性名称
 * @param {String} type 数据类型
 */
twaver.SerializationSettings.prototype.setClientType = function (client, type) {}

/**
 * 设置指定Property属性的数据类型
 * @method twaver.SerializationSettings.setPropertyType
 * @param {String} property Property属性名称
 * @param {String} type 数据类型
 */
twaver.SerializationSettings.prototype.setPropertyType = function (property, type) {}

/**
 * 设置指定Style属性的数据类型
 * @method twaver.SerializationSettings.setStyleType
 * @param {String} style Style属性名称
 * @param {String} type 数据类型
 */
twaver.SerializationSettings.prototype.setStyleType = function (style, type) {}

/**
 * 设置指定Client属性的数据类型
 * @method twaver.SerializationSettings.setClientType
 * @param {String} client Client属性名称
 * @param {String} type 数据类型
 * @static
 */
twaver.SerializationSettings.setClientType = function (client, type) {}

/**
 * 设置指定Property属性的数据类型
 * @method twaver.SerializationSettings.setPropertyType
 * @param {String} property Property属性名称
 * @param {String} type 数据类型
 * @static
 */
twaver.SerializationSettings.setPropertyType = function (property, type) {}

/**
 * 设置指定Style属性的数据类型
 * @method twaver.SerializationSettings.setStyleType
 * @param {String} style Style属性名称
 * @param {String} type 数据类型
 * @static
 */
twaver.SerializationSettings.setStyleType = function (style, type) {}


/**
 * 这个类中定义了TWaver中所有对象的样式
 * @property constructor
 * @type Object
 */
twaver.Styles = function () {}

/**
 * 获取指定Style属性的值
 * @method twaver.Styles.getStyle
 * @param {String} styleProp Style属性名称
 * @return {String} 返回指定Style属性的值
 * @static
 */
twaver.Styles.getStyle = function (styleProp) {}

/**
 * 获取所有Style属性名称的集合
 * @method twaver.Styles.getStyleProperties
 * @return {twaver.List} 返回所有Style属性名称的集合
 * @static
 */
twaver.Styles.getStyleProperties = function () {}

/**
 * 获取类的名称
 * @method twaver.Styles.getClassName
 * @return {String} 类名
 */
twaver.Styles.prototype.getClassName = function () {}

/**
 * 设置指定Style属性的值
 * @method twaver.Styles.setStyle
 * @param {String} styleProp Style属性名称
 * @param {Object} newValue Style属性值
 * @static
 */
twaver.Styles.setStyle = function (styleProp, newValue) {}


/**
 * 这是一个工具类，提供了TWaver中常用的方法
 * @property constructor
 * @type Object
 */
twaver.Util = function () {}

/**
 * 给HTML元素添加事件监听器
 * @method twaver.Util.addEventListener
 * @param {String} type 事件类型
 * @param {Function} handler 回调函数
 * @param {HTMLElement} view HTML元素
 * @param {Object} [scope] 可选，回调函数的作用域，默认为null，即全局
 * @static
 */
twaver.Util.addEventListener = function (type, handler, view, scope) {}

/**
 * 计算线条上指定偏移量的点的坐标和角度
 * @method twaver.Util.calculatePointAngleAlongLine
 * @param {twaver.List} points 点的集合
 * @param {twaver.List} segments 点与点之间连线类型的集合, 可选值为lineto, 
 * @param {Boolean} isSource 是否在连线的起始端, 为true则为连线的起始端, 否则为连线的结束端
 * @param {Number} xOffset x轴偏移量
 * @param {Number} yOffset y轴偏移量
 * @return {Object} 返回包含point(包含x和y属性的Object对象)和angle属性的Object对象
 * @static
 */
twaver.Util.calculatePointAngleAlongLine = function (points, segments, isSource, xOffset, yOffset) {}

/**
 * 判断传入的X，Y坐标是否在rect的范围之内。
 * @method twaver.Util.containsPoint
 * @param {Object} rect 一个包含左上角的坐标点以及宽高的矩形对象。比如{x:10,y:10,width:100,height:100}
 * @param {Object} x x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为object时，需要传入的一个{x:10,y:10}带x，y变量的对象
 * @param {Number} [y] y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值
 * @return {Object} 如果rect包含x，y坐标，返回true，否则返回false
 * @static
 */
twaver.Util.containsPoint = function (rect, x, y) {}

/**
 * 创建一个画布对象
 * @method twaver.Util.createCanvas
 * @return {Object} 画布对象
 * @static
 */
twaver.Util.createCanvas = function () {}

/**
 * 创建一个DIV对象
 * @method twaver.Util.createDiv
 * @return {Object} DIV对象
 * @static
 */
twaver.Util.createDiv = function () {}

/**
 * 用指定样式画连线的箭头, 连线样式可以为:
 * arrow.standard    标准样式
 * arrow.delta          三角形
 * arrow.diamond    菱形
 * arrow.short         短小形
 * arrow.slant          斜角
 * @method twaver.Util.drawArrow
 * @param {CanvasRenderingContext2D} g 画布
 * @param {Number} arrowWidth 箭头宽度
 * @param {Number} arrowHeight 箭头高度
 * @param {twaver.List} linePaths 构成连线的点的集合
 * @param {Boolean} isSrouce 箭头是否在连线的起始端, 为true则为连线的起始端, 否则为连线的结束点
 * @param {String} arrowStyle 箭头样式
 * @param {Boolean} drawBody 箭头是否填充, 为true则填充, 否则不填充
 * @param {String} arrowColor 箭头填充颜色
 * @param {Number} arrowXOffset 箭头X坐标偏移量
 * @param {Number} arrowYOffset 箭头Y坐标偏移量
 * @param {Number} lineWidth 箭头边框宽度
 * @param {String} arrowOutlineColor 箭头边框颜色
 * @static
 */
twaver.Util.drawArrow = function (g, arrowWidth, arrowHeight, linePaths, isSrouce, arrowStyle, drawBody, arrowColor, arrowXOffset, arrowYOffset, lineWidth, arrowOutlineColor) {}

/**
 * 在给定的矩形范围中绘制指定的图形。指定图形形状的可选值为：
 * 'rectangle'：矩形，
 * 'oval'：椭圆形,
 * 'roundrect'：圆角矩形,
 * 'star'：星形,
 * 'triangle'：三角形, 
 * 'circle'：圆形,
 * 'hexagon'：六边形,
 * 'pentagon'：五角形,
 * 'diamond'：菱形
 * @method twaver.Util.drawVector
 * @param {Object} g CanvasRenderingContext2D对象，用于在canvas上绘图
 * @param {String} shape 指定的图形形状。
 * @param {Object} x x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为object时，需要传入的一个带x，y，width，height变量的对象，例如{x:10,y:10,width:100,height:100}
 * @param {Number} [y] y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值
 * @param {Number} [w] 矩形的宽度。可选，当x为object时w不需要赋值；当x为Number时，w必须要赋值
 * @param {Number} [h] 矩形的高度。可选，当x为object时，h不需要赋值；当x为Number时，h必须要赋值
 * @static
 */
twaver.Util.drawVector = function (g, shape, x, y, w, h) {}

/**
 * 指定的子类继承于父类
 * @method twaver.Util.ext
 * @param {Object} subClass 子类
 * @param {Object} superClass 父类
 * @param {Object} o 子类中重写或扩展的属性和方法
 * @static
 */
twaver.Util.ext = function (subClass, superClass, o) {}

/**
 * 给指定的矩形填充颜色，填充的颜色可以为渐变色，并可以指定渐变的类型。渐变类型的可选值为：
 * 'linear.southwest'：线性.南西
 * 'linear.southeast'：线性.南东
 * 'linear.northwest'：线性.北西
 * 'linear.northeast'：线性.北东
 * 'linear.north'：线性.北
 * 'linear.south'：线性.南
 * 'linear.west'：线性.西
 * 'linear.east'：线性.东
 * 'radial.center'：放射.中
 * 'radial.southwest'：放射.南西
 * 'radial.southeast'：放射.南东
 * 'radial.northwest'：放射.北西
 * 'radial.northeast'：放射.北东
 * 'radial.north'：放射.北
 * 'radial.south'：放射.南
 * 'radial.west'：放射.西
 * 'radial.east'：放射.东
 * 'spread.horizontal':扩展.水平
 * 'spread.vertical':扩展.垂直
 * 'spread.diagonal':扩展.对角线
 * 'spread.antidiagonal':扩展.反对角线
 * 'spread.north':扩展.北
 * 'spread.south':扩展.南
 * 'spread.west':扩展.西
 * 'spread.east':扩展.东
 * @method twaver.Util.fill
 * @param {Object} g CanvasRenderingContext2D对象，用于在canvas上绘图
 * @param {String} fillColor 填充的颜色值
 * @param {String} [gradient] 渐变类型
 * @param {String} [gradientColor] 渐变颜色值
 * @param {Object} x x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为object时，需要传入的一个带x，y，width，height变量的对象，例如{x:10,y:10,width:100,height:100}
 * @param {Number} [y] y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值
 * @param {Number} [w] 矩形的宽度。可选，当x为object时w不需要赋值；当x为Number时，w必须要赋值
 * @param {Number} [h] 矩形的高度。可选，当x为object时，h不需要赋值；当x为Number时，h必须要赋值
 * @static
 */
twaver.Util.fill = function (g, fillColor, gradient, gradientColor, x, y, w, h) {}

/**
 * 获取所有类名
 * @method twaver.Util.getAllClassNames
 * @return {Array} 返回所有类名
 * @static
 */
twaver.Util.getAllClassNames = function () {}

/**
 * 通过类名来获取类对象
 * @method twaver.Util.getClass
 * @param {String} className 类名
 * @return {Object} 类的对象
 * @static
 */
twaver.Util.getClass = function (className) {}

/**
 * 获取指定HTML元素的指定样式的值
 * @method twaver.Util.getCSSStyle
 * @param {HTMLElement} domObject HTML对象
 * @param {String} styleName 样式名称
 * @return {String} 返回指定样式值
 * @static
 */
twaver.Util.getCSSStyle = function (domObject, styleName) {}

/**
 * 获取网元所占的区域
 * @method twaver.Util.getElementsBounds
 * @param {twaver.List} elements 网元集合
 * @param {twaver.network.Network} network 拓扑图
 * @return {Object} 返回指定网元所占的区域
 * @static
 */
twaver.Util.getElementsBounds = function (elements, network) {}

/**
 * 获取渲染后的颜色
 * @method twaver.Util.getFilterColor
 * @param {String} sourceColor 原始颜色
 * @param {String} filterColor 渲染色
 * @return {Object} 返回染色后的颜色，包含r,g,b,a的对象
 * @static
 */
twaver.Util.getFilterColor = function (sourceColor, filterColor) {}

/**
 * 通过图片的名称来获取图片对象
 * @method twaver.Util.getImageAsset
 * @param {String} name 图片的名称
 * @return {twaver.ImageAsset} 图片对象
 * @static
 */
twaver.Util.getImageAsset = function (name) {}

/**
 * 获取指定点所在的边
 * @method twaver.Util.getPointIndex
 * @param {twaver.List} points 包含点的集合
 * @param {Object} point 点
 * @param {Number} tolerance 误差值
 * @return {Number} 返回指定点所在的边
 * @static
 */
twaver.Util.getPointIndex = function (points, point, tolerance) {}

/**
 * 获取两点之间的角度
 * @method twaver.Util.getRadiansBetweenLines
 * @param {Object} from 起始点
 * @param {Object} to 结束点
 * @return {Number} 返回两点之间的角度，单位为弧度
 * @static
 */
twaver.Util.getRadiansBetweenLines = function (from, to) {}

/**
 * 返回包含指定点的矩形
 * @method twaver.Util.getRect
 * @param {Array} points "点"的数组
 * @return {Object} 返回包含指定点的矩形
 * @static
 */
twaver.Util.getRect = function (points) {}

/**
 * 获取所有注册名图片名称
 * @method twaver.Util.getRegisteredImageNames
 * @return {Array} 返回所有注册的图片名称
 * @static
 */
twaver.Util.getRegisteredImageNames = function () {}

/**
 * 获取网元所在的子网
 * @method twaver.Util.getSubNetwork
 * @param {twaver.Element} element 网元
 * @return {twaver.SubNetwork} 返回网元所在的子网
 * @static
 */
twaver.Util.getSubNetwork = function (element) {}

/**
 * 返回ToolTip所在的DIV
 * @method twaver.Util.getToolTipDiv
 * @return {String} 返回ToolTip所在的DIV
 * @static
 */
twaver.Util.getToolTipDiv = function () {}

/**
 * 返回网元的某个属性值
 * @method twaver.Util.getValue
 * @param {String} instance 网元实例
 * @param {String} property 属性名
 * @param {String} type 属性类型
 * @return {String} 返回属性值
 * @static
 */
twaver.Util.getValue = function (instance, property, type) {}

/**
 * 获取TWaver的版本号
 * @method twaver.Util.getVersion
 * @return {String} TWaver的版本号
 * @static
 */
twaver.Util.getVersion = function () {}

/**
 * 将指定的矩形扩大一定的宽高值。这种扩大是矩形的中心点保持不变，像四周扩大指定值的宽度、高度。
 * 比如指定的矩形为{x:20,y:20,width:100;height:100},如果扩大的width为10，height为10，那么扩大后的矩形变为{x:10,y:10,width:120,height:120}
 * @method twaver.Util.grow
 * @param {Object} rect 指定扩大的矩形
 * @param {Number} width 扩大的宽度值
 * @param {Number} height 扩大的高度值
 * @static
 */
twaver.Util.grow = function (rect, width, height) {}

/**
 * 隐藏Tooltip
 * @method twaver.Util.hideToolTip
 * @static
 */
twaver.Util.hideToolTip = function () {}

/**
 * 判断指定的矩形区域是否相交
 * @method twaver.Util.intersects
 * @param {Object} srcRect 矩形区域, 包含x, y, width和height属性的Object对象
 * @param {Object} dstRect 矩形区域, 包含x, y, width和height属性的Object对象
 * @return {Boolean} 如果指定的区域相交, 则返回true, 否则返回false
 * @static
 */
twaver.Util.intersects = function (srcRect, dstRect) {}

/**
 * 是否为Android，true为是Android，否则为false
 * @property isAndroid
 * @type Boolean
 * @static
 */
twaver.Util.isAndroid = function () {}

/**
 * 是否是Chrome浏览器，true为是Chrome浏览器，否则为false
 * @property isChrome
 * @type Boolean
 * @static
 */
twaver.Util.isChrome = function () {}

/**
 * 是否正在进行反序列化操作，默认为false
 * @method twaver.Util.isDeserializing
 * @return {Boolean} 如果正在进行反序列化，返回true；否则返回false
 * @static
 */
twaver.Util.isDeserializing = function () {}

/**
 * 是否是Firefox浏览器，true为是Firefox浏览器，否则为false
 * @property isFirefox
 * @type Boolean
 * @static
 */
twaver.Util.isFirefox = function () {}

/**
 * 是否是IE浏览器，true为是IE浏览器，否则为false
 * @property isIE
 * @type Boolean
 * @static
 */
twaver.Util.isIE = function () {}

/**
 * 是否为IPad，true为是IPad,否则为false
 * @property isIPad
 * @type Boolean
 * @static
 */
twaver.Util.isIPad = function () {}

/**
 * 是否为IPhone，true为是IPhone,否则为false
 * @property isIPhone
 * @type Boolean
 * @static
 */
twaver.Util.isIPhone = function () {}

/**
 * 是否为IPod，true为是IPod,否则为false
 * @property isIPod
 * @type Boolean
 * @static
 */
twaver.Util.isIPod = function () {}

/**
 * 是否是Opera浏览器，true为是Opera浏览器，否则为false
 * @property isOpera
 * @type Boolean
 * @static
 */
twaver.Util.isOpera = function () {}

/**
 * 是否是Safari浏览器，true为是Safari浏览器，否则为false
 * @property isSafari
 * @type Boolean
 * @static
 */
twaver.Util.isSafari = function () {}

/**
 * 是否是可触摸的，true为是可触摸的，否则为false
 * @property isTouchable
 * @type Boolean
 * @static
 */
twaver.Util.isTouchable = function () {}

/**
 * 判断是否是某个类的子类
 * @method twaver.Util.isTypeOf
 * @param {Object} type 父类
 * @param {Object} base 基类
 * @return {Boolean} 如果是子类则返回true，否则为false
 * @static
 */
twaver.Util.isTypeOf = function (type, base) {}

/**
 * 是否是WebOS，true为是WebOS，否则为false
 * @property isWebOS
 * @type Boolean
 * @static
 */
twaver.Util.isWebOS = function () {}

/**
 * 偏移指定的一批网元
 * @method twaver.Util.moveElements
 * @param {twaver.List} elements 需要偏移的网元集合
 * @param {Number} xoffset 偏移的X坐标值
 * @param {Number} yoffset 偏移的Y坐标值
 * @param {Boolean} animate 是否需要动画
 * @param {Function} [finishFunction] 偏移完成时回调的函数
 * @static
 */
twaver.Util.moveElements = function (elements, xoffset, yoffset, animate, finishFunction) {}

/**
 * 通过类名来实例化一个对象
 * @method twaver.Util.newInstance
 * @param {String} className 类名
 * @return {Object} 实例化的对象
 * @static
 */
twaver.Util.newInstance = function (className) {}

/**
 * 获取类的名称
 * @method twaver.Util.getClassName
 * @return {String} 类名
 */
twaver.Util.prototype.getClassName = function () {}

/**
 * 注册自定义矢量绘制函数
 * @method twaver.Util.registerDraw
 * @param {String} name 自定义矢量绘制函数名称
 * @param {Function} draw 绘制函数：function (vector, g, data, view)
 * @static
 */
twaver.Util.registerDraw = function (name, draw) {}

/**
 * 注册图片。当给网元设置图片时，需要先进行注册后才能使用
 * @method twaver.Util.registerImage
 * @param {String} name 注册图片的名称
 * @param {Object} source 注册的图片对象
 * @param {Number} width 图片的宽度
 * @param {Number} height 图片的高度
 * @param {Boolean} svg 是否为SVG图片
 * @static
 */
twaver.Util.registerImage = function (name, source, width, height, svg) {}

/**
 * 注册自定义矢量图形
 * @method twaver.Util.registerShape
 * @param {String} name 矢量图形名称
 * @param {Function} shapeFunc 绘制函数：function (g, shapeData, data, view)
 * @static
 */
twaver.Util.registerShape = function (name, shapeFunc) {}

/**
 * 注册样式'vector.shape'的可选值
 * @method twaver.Util.registerVectorShape
 * @param {String} name 矢量图形名称
 * @param {Function} func 绘制函数：function (g, x, y, w, h)
 * @static
 */
twaver.Util.registerVectorShape = function (name, func) {}

/**
 * 移除HTML样式
 * @method twaver.Util.removeCSSStyle
 * @param {HTMLElement} domObject HTML对象
 * @param {String} styleName 样式名称
 * @static
 */
twaver.Util.removeCSSStyle = function (domObject, styleName) {}

/**
 * 删除HTML元素的事件监听器
 * @method twaver.Util.removeEventListener
 * @param {String} type 事件类型
 * @param {HTMLElement} view HTML元素
 * @param {Object} [scope] 可选，回调函数的作用域，默认为null，即全局
 * @static
 */
twaver.Util.removeEventListener = function (type, view, scope) {}

/**
 * 重置Tooltip
 * @method twaver.Util.resetToolTip
 * @static
 */
twaver.Util.resetToolTip = function () {}

/**
 * 将画布以制定的区域的中心为原点，旋转指定的角度
 * @method twaver.Util.rotateCanvas
 * @param {CanvasRenderingContext2D} g 画布渲染上下文对象
 * @param {Object} rect 矩形区域
 * @param {Number} angle 旋转角度，单位为度
 * @static
 */
twaver.Util.rotateCanvas = function (g, rect, angle) {}

/**
 * 设置指定Canvas的位置和宽高
 * @method twaver.Util.setCanvas
 * @param {HTMLCanvasElement} c 指定的Canvas对象
 * @param {Number} x 画布的左边距像素值
 * @param {Number} y 画布的上边距像素值
 * @param {Number} w 画布的宽度
 * @param {Number} h 画布的高度
 * @return {CanvasRenderingContext2D} 返回一个CanvasRenderingContext2D对象用于在canvas上绘图
 * @static
 */
twaver.Util.setCanvas = function (c, x, y, w, h) {}

/**
 * 设置指定HTML对象的样式
 * @method twaver.Util.setCSSStyle
 * @param {HTMLElement} domObject HTML对象
 * @param {String} styleName 样式名称
 * @param {String} styleValue 样式值
 * @static
 */
twaver.Util.setCSSStyle = function (domObject, styleName, styleValue) {}

/**
 * 将焦点设置到指定的对象上
 * @method twaver.Util.setFocus
 * @param {HTMLElement} e 设置焦点的对象
 * @static
 */
twaver.Util.setFocus = function (e) {}

/**
 * 设置数据对象指定属性的值
 * @method twaver.Util.setValue
 * @param {twaver.Data} instance 数据对象实例
 * @param {String} property 属性名
 * @param {Object} value 属性值
 * @static
 */
twaver.Util.setValue = function (instance, property, value) {}

/**
 * 显示Tooltip
 * @method twaver.Util.showToolTip
 * @param {Object} eorp 坐标或事件对象
 * @param {String} innerHTML tooltip内容
 * @static
 */
twaver.Util.showToolTip = function (eorp, innerHTML) {}

/**
 * 转换度为弧度
 * @method twaver.Util.toDegrees
 * @param {Number} radian 单位为弧度的角度
 * @return {Number} 返回单位为度的角度
 * @static
 */
twaver.Util.toDegrees = function (radian) {}

/**
 * 将角度转换为弧度
 * @method twaver.Util.toRadians
 * @param {Number} degree 单位为度的角度
 * @return {Number} 返回单位为弧度的角度
 * @static
 */
twaver.Util.toRadians = function (degree) {}

/**
 * 以指定的偏移量，旋转角度，转换给定的坐标
 * @method twaver.Util.transformPoint
 * @param {Object} point 要转换的坐标，为包含x和y属性的对象
 * @param {Number} angle 旋转角度，单位为弧度
 * @param {Number} xOffset 水平偏移量
 * @param {Number} yOffset 垂直偏移量
 * @return {Object} 转换后的坐标
 * @static
 */
twaver.Util.transformPoint = function (point, angle, xOffset, yOffset) {}

/**
 * 获取包含指定的两个矩形区域的矩形
 * @method twaver.Util.unionRect
 * @param {Object} srcRect 源矩形
 * @param {Object} dstRect 目标矩形
 * @return {Object} 返回包含指定的两个矩形区域的矩形
 * @static
 */
twaver.Util.unionRect = function (srcRect, dstRect) {}

/**
 * 卸载注册的图片
 * @method twaver.Util.unregisterImage
 * @param {String} name 图片的名称
 * @static
 */
twaver.Util.unregisterImage = function (name) {}

/**
 * 验证license信息
 * @method twaver.Util.validateLicense
 * @param {String} license license的信息
 * @static
 */
twaver.Util.validateLicense = function (license) {}


/**
 * 所有附件的基类，附件是和网元视图关联的视图对象，用于显示网元的附属信息，例如告警、名称标签、图标等。可以定义附件是否显示在最上层，也即会遮挡网元；为了让告警信息不被其他网元遮挡，告警等附件默认显示在最上层，也即告警显示在所有网元的上面
 * @class twaver.vector.Attachment
 * @constructor
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInTop] 附件是否显示在最上层, 可选, 默认值为false
 * @return {twaver.canvas.Attachment}
 */
twaver.vector.Attachment = function (elementUI, showInTop) {}

/**
 * 获取附件透明度，默认值为1
 * @method twaver.vector.Attachment.getAlpha
 * @return {String}
 */
twaver.vector.Attachment.prototype.getAlpha = function () {}

/**
 * 获取字符串类名
 * @method twaver.vector.Attachment.getClassName
 * @return {String} 返回类名
 */
twaver.vector.Attachment.prototype.getClassName = function () {}

/**
 * 获取和附件关联的网元
 * @method twaver.vector.Attachment.getElement
 * @return {twaver.Element} 返回和附件关联的网元
 */
twaver.vector.Attachment.prototype.getElement = function () {}

/**
 * 获取和附件关联的网元视图
 * @method twaver.vector.Attachment.getElementUI
 * @return {twaver.canvas.ElementUI} 返回和附件关联的网元视图
 */
twaver.vector.Attachment.prototype.getElementUI = function () {}

/**
 * 获取附件的字体
 * @method twaver.vector.Attachment.getFont
 * @param {String} styleProp 样式名称
 * @return {String} 返回附件的字体
 */
twaver.vector.Attachment.prototype.getFont = function (styleProp) {}

/**
 * 获取和附件关联的拓扑
 * @method twaver.vector.Attachment.getNetwork
 * @return {twaver.canvas.Network} 返回和附件关联的拓扑
 */
twaver.vector.Attachment.prototype.getNetwork = function () {}

/**
 * 获取指定样式的值，封装了Element#getStyle方法
 * @method twaver.vector.Attachment.getStyle
 * @param {String} styleProp 样式名称
 * @return {Object} 返回指定样式的值
 */
twaver.vector.Attachment.prototype.getStyle = function (styleProp) {}

/**
 * 获取附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
 * @method twaver.vector.Attachment.getViewRect
 * @return {Object} 返回附件视图的位置及大小，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.Attachment.prototype.getViewRect = function () {}

/**
 * 返回告警对象在缩放情况下的所占空间的大小的矩形
 * @method twaver.vector.Attachment.getZoomViewRect
 * @return {Object} 矩形
 */
twaver.vector.Attachment.prototype.getZoomViewRect = function () {}

/**
 * 命中测试，判断点击指定坐标点是否能选中附件
 * @method twaver.vector.Attachment.hit
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 如果点击指定坐标能选中附件，则返回true，否者返回false
 */
twaver.vector.Attachment.prototype.hit = function (x, y) {}

/**
 * 命中测试，判断附件是否包含指定区域
 * @method twaver.vector.Attachment.hitCanvasRect
 * @param {Object} rect 区域
 * @return {Boolean} 返回附件是否包含指定区域
 */
twaver.vector.Attachment.prototype.hitCanvasRect = function (rect) {}

/**
 * 获取附件是否显示在最上层
 * @method twaver.vector.Attachment.isShowOnTop
 * @return {Boolean} 返回附件是否显示在最上层
 */
twaver.vector.Attachment.prototype.isShowOnTop = function () {}

/**
 * 绘制附件, 子类重载此方法绘制子类自己
 * @method twaver.vector.Attachment.paint
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.Attachment.prototype.paint = function (ctx) {}

/**
 * 设置附件是否显示在最上层
 * @method twaver.vector.Attachment.setShowOnTop
 * @param {Boolean} t 附件是否显示在最上层
 */
twaver.vector.Attachment.prototype.setShowOnTop = function (t) {}

/**
 * 更新属性, 并重新计算附件大小和位置
 * @method twaver.vector.Attachment.validate
 */
twaver.vector.Attachment.prototype.validate = function () {}


/**
 * 基本缩放管理器构造函数
 * @class twaver.vector.BaseZoomManager
 * @constructor
 * @param {twaver.vector.Network} network 拓扑组件
 * @return {twaver.vector.BaseZoomManager} 基本缩放管理器
 */
twaver.vector.BaseZoomManager = function (network) {}

/**
 * 获取拓扑组件特定附件的尺寸缩放值
 * @method twaver.vector.BaseZoomManager.getAttachmentSizeZoom
 * @param {twaver.vector.Attachment} attachment 附件
 * @return {Number} 数值
 */
twaver.vector.BaseZoomManager.prototype.getAttachmentSizeZoom = function (attachment) {}

/**
 * 获取类名
 * @method twaver.vector.BaseZoomManager.getClassName
 * @return {String} 字符
 */
twaver.vector.BaseZoomManager.prototype.getClassName = function () {}

/**
 * 获取拓扑组件当前的Graphics缩放值
 * @method twaver.vector.BaseZoomManager.getGraphicsZoom
 * @return {Number} 数值
 */
twaver.vector.BaseZoomManager.prototype.getGraphicsZoom = function () {}

/**
 * 获取拓扑组件当前的位置缩放值
 * @method twaver.vector.BaseZoomManager.getLocationZoom
 * @return {Number} 数值
 */
twaver.vector.BaseZoomManager.prototype.getLocationZoom = function () {}

/**
 * 获取拓扑组件特定UI的尺寸缩放值
 * @method twaver.vector.BaseZoomManager.getSizeZoom
 * @param {twaver.vector.ElementUI} ui 网元UI
 * @return {Number} 数值
 */
twaver.vector.BaseZoomManager.prototype.getSizeZoom = function (ui) {}

/**
 * 获取拓扑组件的当前缩放值
 * @method twaver.vector.BaseZoomManager.getZoom
 * @return {Number} 数值
 */
twaver.vector.BaseZoomManager.prototype.getZoom = function () {}

/**
 * 判断网元的告警附件在特定zoom值下是否可见
 * @method twaver.vector.BaseZoomManager.isAlarmBalloonVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 布尔值
 */
twaver.vector.BaseZoomManager.prototype.isAlarmBalloonVisible = function (element) {}

/**
 * 判断网元的所有附件在特定zoom值下是否可见
 * @method twaver.vector.BaseZoomManager.isAttachmentVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 布尔值
 */
twaver.vector.BaseZoomManager.prototype.isAttachmentVisible = function (element) {}

/**
 * 判断网元在特定zoom值下是否可见
 * @method twaver.vector.BaseZoomManager.isElementVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 布尔值
 */
twaver.vector.BaseZoomManager.prototype.isElementVisible = function (element) {}

/**
 * 判断网元的标签附件在特定zoom值下是否可见
 * @method twaver.vector.BaseZoomManager.isLabelVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 布尔值
 */
twaver.vector.BaseZoomManager.prototype.isLabelVisible = function (element) {}

/**
 * 判断连线在特定zoom值下是否可见
 * @method twaver.vector.BaseZoomManager.isLinkVisible
 * @param {twaver.Link} link 连线
 * @return {Boolean} 布尔值
 */
twaver.vector.BaseZoomManager.prototype.isLinkVisible = function (link) {}

/**
 * @method twaver.vector.BaseZoomManager.limitZoom
 * @param {String} zoom 
 * @return {String}
 */
twaver.vector.BaseZoomManager.prototype.limitZoom = function (zoom) {}


/**
 * 网元对应的视图对象，是所有网元视图（LinkUI、NodeUI等）的基类，代表网元在拓扑视图上的可视实体
 * @class twaver.vector.ElementUI
 * @constructor
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Element} element 网元
 * @return {twaver.network.ElementUI}
 */
twaver.vector.ElementUI = function (network, element) {}

/**
 * 添加附件，如果showInAttachmentDiv为true，则附件被添加到拓扑的附件层（attachmentDiv），否则附件被添加到网元视图上
 * @method twaver.vector.ElementUI.addAttachment
 * @param {twaver.network.Attachment} attachment 附件
 */
twaver.vector.ElementUI.prototype.addAttachment = function (attachment) {}

/**
 * 添加内容区域，所有内容区域合并后构成unionBodyBounds
 * @method twaver.vector.ElementUI.addBodyBounds
 * @param {Object} rect 区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.ElementUI.prototype.addBodyBounds = function (rect) {}

/**
 * 给指定区域添加阴影区域
 * @method twaver.vector.ElementUI.appendShadowBound
 * @param {Object} part 要添加阴影的对象
 * @param {Object} rect 区域
 * @return {Object} 添加阴影后的区域
 */
twaver.vector.ElementUI.prototype.appendShadowBound = function (part, rect) {}

/**
 * 检查是否显示告警附件，如果Network#getAlarmLabel(element)返回null或空字符串，则不显示
 * @method twaver.vector.ElementUI.checkAlarmAttachment
 */
twaver.vector.ElementUI.prototype.checkAlarmAttachment = function () {}

/**
 * 检查所有附件是否显示，网元刷新时（validate）被调用，包括告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
 * @method twaver.vector.ElementUI.checkAttachments
 */
twaver.vector.ElementUI.prototype.checkAttachments = function () {}

/**
 * 检查是否显示编辑附件，如果此网元可选中（Network#isSelected(element)返回true），而且可编辑（Network#isEditable(element)返回true），而且此网元视图可编辑（isEditable()返回true），则显示，否则不显示
 * @method twaver.vector.ElementUI.checkEditAttachment
 */
twaver.vector.ElementUI.prototype.checkEditAttachment = function () {}

/**
 * 检查是否显示图标组附件，如果Network#getIconsNames(element)返回null或者length为0，则不显示
 * @method twaver.vector.ElementUI.checkIconsAttachment
 */
twaver.vector.ElementUI.prototype.checkIconsAttachment = function () {}

/**
 * 检查是否显示标签二附件，如果Network#getLabel2(element)返回null或空字符串，则不显示
 * @method twaver.vector.ElementUI.checkLabel2Attachment
 */
twaver.vector.ElementUI.prototype.checkLabel2Attachment = function () {}

/**
 * 检查是否显示标签附件，如果Network#getLabel(element)返回null或空字符串，则不显示
 * @method twaver.vector.ElementUI.checkLabelAttachment
 */
twaver.vector.ElementUI.prototype.checkLabelAttachment = function () {}

/**
 * 清除阴影
 * @method twaver.vector.ElementUI.clearShadow
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.ElementUI.prototype.clearShadow = function (ctx) {}

/**
 * 获取告警附件
 * @method twaver.vector.ElementUI.getAlarmAttachment
 * @return {twaver.network.AlarmAttachment} 返回告警附件
 */
twaver.vector.ElementUI.prototype.getAlarmAttachment = function () {}

/**
 * 获取所有附件集合，包含告警AlarmAttachment、标签附件LabelAttachement、编辑附件EditAttachment和图标组附件IconsAttachment
 * @method twaver.vector.ElementUI.getAttachments
 * @return {twaver.List} 返回所有附件集合
 */
twaver.vector.ElementUI.prototype.getAttachments = function () {}

/**
 * 获得内容区域，默认为createBodyRect返回的结果
 * @method twaver.vector.ElementUI.getBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.ElementUI.prototype.getBodyRect = function () {}

/**
 * 获取该类字符串类名
 * @method twaver.vector.ElementUI.getClassName
 * @return {String} 返回类名
 */
twaver.vector.ElementUI.prototype.getClassName = function () {}

/**
 * 获取指定样式的渲染颜色，如果innerColor不为空则返回innerColor，否则返回指定样式的值
 * @method twaver.vector.ElementUI.getDyeColor
 * @param {String} styleProp 样式属性
 * @return {String} 返回渲染颜色
 */
twaver.vector.ElementUI.prototype.getDyeColor = function (styleProp) {}

/**
 * 获取编辑附件
 * @method twaver.vector.ElementUI.getEditAttachment
 * @return {twaver.network.EditAttachment} 返回编辑附件
 */
twaver.vector.ElementUI.prototype.getEditAttachment = function () {}

/**
 * 获取和网元视图关联的网元
 * @method twaver.vector.ElementUI.getElement
 * @return {twaver.Element} 返回和网元视图关联的网元
 */
twaver.vector.ElementUI.prototype.getElement = function () {}

/**
 * 获取给定样式属性的值作为字体，如果指定样式的值是null，则返回twaver.Defaults.FONT
 * @method twaver.vector.ElementUI.getFont
 * @param {String} styleProp 样式属性
 * @return {String} 返回字体
 */
twaver.vector.ElementUI.prototype.getFont = function (styleProp) {}

/**
 * 获取热点，用于定位附件等的位置
 * @method twaver.vector.ElementUI.getHotSpot
 * @return {Object} 返回热点，值为包含x和y属性的Object对象
 */
twaver.vector.ElementUI.prototype.getHotSpot = function () {}

/**
 * 获取图标组附件
 * @method twaver.vector.ElementUI.getIconsAttachment
 * @return {twaver.network.IconsAttachment} 返回图标组附件
 */
twaver.vector.ElementUI.prototype.getIconsAttachment = function () {}

/**
 * 获取网元填充色
 * @method twaver.vector.ElementUI.getInnerColor
 * @return {String} 返回网元填充色
 */
twaver.vector.ElementUI.prototype.getInnerColor = function () {}

/**
 * 获取标签附件
 * @method twaver.vector.ElementUI.getLabelAttachment
 * @return {twaver.network.LabelAttachment} 返回标签附件
 */
twaver.vector.ElementUI.prototype.getLabelAttachment = function () {}

/**
 * 获取和网元视图关联的拓扑
 * @method twaver.vector.ElementUI.getNetwork
 * @return {twaver.network.Network} 返回和网元视图关联的拓扑
 */
twaver.vector.ElementUI.prototype.getNetwork = function () {}

/**
 * 获取网元边框颜色
 * @method twaver.vector.ElementUI.getOuterColor
 * @return {String} 返回网元边框颜色
 */
twaver.vector.ElementUI.prototype.getOuterColor = function () {}

/**
 * 获取网元选中后阴影颜色
 * @method twaver.vector.ElementUI.getShadowColor
 * @return {String} 返回网元选中后阴影颜色
 */
twaver.vector.ElementUI.prototype.getShadowColor = function () {}

/**
 * 获取指定样式属性的值，封装了Element.getStyle
 * @method twaver.vector.ElementUI.getStyle
 * @param {String} styleProp 样式属性
 * @return {Object} 返回指定样式属性的值
 */
twaver.vector.ElementUI.prototype.getStyle = function (styleProp) {}

/**
 * 获取合并的内容区域
 * @method twaver.vector.ElementUI.getUnionBodyBounds
 * @return {Object} 返回合并的内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.ElementUI.prototype.getUnionBodyBounds = function () {}

/**
 * 获取视图内容区域，包括unionBodyBounds和所有附件的区域
 * @method twaver.vector.ElementUI.getViewRect
 * @return {Object} 返回视图内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.ElementUI.prototype.getViewRect = function () {}

/**
 * 和网元视图关联的网元属性变化时的处理函数，默认实现为调用invalidate方法让网元视图刷新
 * @method twaver.vector.ElementUI.handlePropertyChange
 * @param {Object} e 属性变化事件，包含property、oldValue和newValue属性
 */
twaver.vector.ElementUI.prototype.handlePropertyChange = function (e) {}

/**
 * 和网元视图关联的网元被选中或取消选中时的处理函数，默认实现为调用invalidate方法让网元视图刷新
 * @method twaver.vector.ElementUI.handleSelectionChange
 * @param {Object} e 选择变化事件，包含kind和data属性
 */
twaver.vector.ElementUI.prototype.handleSelectionChange = function (e) {}

/**
 * 命中测试，判断网元视图是否包含指定坐标
 * @method twaver.vector.ElementUI.hit
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 网元视图是否包含指定坐标，则返回true，否者返回false
 */
twaver.vector.ElementUI.prototype.hit = function (x, y) {}

/**
 * 网元是否包含指定坐标点
 * @method twaver.vector.ElementUI.hitCanvasPoint
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Boolean} 返回网元是否包含指定坐标点
 */
twaver.vector.ElementUI.prototype.hitCanvasPoint = function (x, y) {}

/**
 * 网元是否包含指定区域
 * @method twaver.vector.ElementUI.hitCanvasRect
 * @param {Object} r 区域
 * @return {Boolean} 返回网元是否包含指定区域
 */
twaver.vector.ElementUI.prototype.hitCanvasRect = function (r) {}

/**
 * 网元附件是否包含指定区域
 * @method twaver.vector.ElementUI.hitCanvasRectAtAttachments
 * @param {Object} rect 区域
 * @return {Boolean} 返回网元附件是否包含指定区域
 */
twaver.vector.ElementUI.prototype.hitCanvasRectAtAttachments = function (rect) {}

/**
 * 网元主体是否包含指定区域
 * @method twaver.vector.ElementUI.hitCanvasRectAtBody
 * @param {Object} rect 区域
 * @return {Boolean} 返回网元主体是否包含指定区域
 */
twaver.vector.ElementUI.prototype.hitCanvasRectAtBody = function (rect) {}

/**
 * 获取指定坐标下的视图对象，为附件或者网元视图本身
 * @method twaver.vector.ElementUI.hitTest
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @return {Object} 返回指定坐标下的视图对象，为附件或者网元视图本身
 */
twaver.vector.ElementUI.prototype.hitTest = function (x, y) {}

/**
 * 判断网元视图是否和指定区域相交
 * @method twaver.vector.ElementUI.intersects
 * @param {Object} rect 矩形区域，值为包含x、y、width和height属性的Object对象
 * @return {Boolean} 如果网元视图包含指定矩形区域，则返回true，否则返回false
 */
twaver.vector.ElementUI.prototype.intersects = function (rect) {}

/**
 * @method twaver.vector.ElementUI.invalidate
 * @param {String} checkAttachments 
 */
twaver.vector.ElementUI.prototype.invalidate = function (checkAttachments) {}

/**
 * 获取网元视图是否可编辑，默认值为true
 * @method twaver.vector.ElementUI.isEditable
 * @return {Boolean} 如果网元视图可编辑，则返回true，否则返回false
 */
twaver.vector.ElementUI.prototype.isEditable = function () {}

/**
 * 判断是否需要设置阴影，默认实现是如果设置了阴影颜色，而且网元被被选中，而且select.style样式为shadow，则返回true，否则返回false
 * @method twaver.vector.ElementUI.isShadowable
 * @return {Boolean} 如果需要设置阴影，则返回true，否则返回false
 */
twaver.vector.ElementUI.prototype.isShadowable = function () {}

/**
 * 绘制网元视图
 * @method twaver.vector.ElementUI.paint
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.ElementUI.prototype.paint = function (ctx) {}

/**
 * 绘制网元附件
 * @method twaver.vector.ElementUI.paintAttachment
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 * @param {twaver.canvas.Attachment} att 附件
 */
twaver.vector.ElementUI.prototype.paintAttachment = function (ctx, att) {}

/**
 * 绘制网元所有附件
 * @method twaver.vector.ElementUI.paintAttachments
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.ElementUI.prototype.paintAttachments = function (ctx) {}

/**
 * 绘制网元主体
 * @method twaver.vector.ElementUI.paintBody
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.ElementUI.prototype.paintBody = function (ctx) {}

/**
 * 删除指定附件
 * @method twaver.vector.ElementUI.removeAttachment
 * @param {twaver.network.Attachment} attachment 附件
 */
twaver.vector.ElementUI.prototype.removeAttachment = function (attachment) {}

/**
 * 设置热点，用于定位附件等的位置
 * @method twaver.vector.ElementUI.setHotSpot
 * @param {Object} value 热点，值为包含x和y属性的Object对象
 */
twaver.vector.ElementUI.prototype.setHotSpot = function (value) {}

/**
 * 给指定画布元素设置阴影效果
 * @method twaver.vector.ElementUI.setShadow
 * @param {Object} part 网元视图（ElementUI）或者附件（Attachment）
 * @param {HTMLCanvasElement} canvas 画布元素
 * @param {Object} rect 画图大小及位置，值为包含x、y、width和height属性的Object对象
 * @return {CanvasRenderingContext2D} 画布渲染内容
 */
twaver.vector.ElementUI.prototype.setShadow = function (part, canvas, rect) {}

/**
 * 更新样式
 * @method twaver.vector.ElementUI.updateStyle
 */
twaver.vector.ElementUI.prototype.updateStyle = function () {}

/**
 * 此方法被Network调用，用以重画网元视图内容，此内部检查所有附件是否可见（checkAttachments），并调用updateMeasure方法重画网元内容，最后调用附件的updateMeasure方法，让附件重画
 * @method twaver.vector.ElementUI.validate
 */
twaver.vector.ElementUI.prototype.validate = function () {}

/**
 * 更新视图
 * @method twaver.vector.ElementUI.validateImpl
 */
twaver.vector.ElementUI.prototype.validateImpl = function () {}


/**
 * 所有拓扑交互处理器的基类，响应鼠标、键盘以及触摸事件；交互处理器封装了原始鼠标、键盘以及触摸事件，并派发了更加方便易用的交互事件（包含当前事件的数据源（一般为网元或者网元集合）以及动作（比如单击网元、双击网元、双击背景等等））。使用Network#addInteractionListener添加交互处理监听器。用户也可以继承此类实现自定义交互处理器，并通过Network#setInteractions加载交互处理器
 * @class twaver.vector.interaction.BaseInteraction
 * @constructor
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.BaseInteraction}
 */
twaver.vector.interaction.BaseInteraction = function (network) {}

/**
 * 批量添加事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会查找函数名为"handle_"加"事件类型"（handle_mousedown，handle_mousedown）的函数，作为指定事件类型的回调函数。此方法一般在setUp方法里被调用
 * @method twaver.vector.interaction.BaseInteraction.addListener
 */
twaver.vector.interaction.BaseInteraction.prototype.addListener = function () {}

/**
 * 获取缩放和便宜后的矩形对象
 * @method twaver.vector.interaction.BaseInteraction.convertFromUIToMarkerRect
 * @param {Object} vr 矩形对象
 * @param {Number} xoff x轴偏移量
 * @param {Number} yoff y轴偏移量
 * @return {Object} 返回缩放和便宜后的矩形对象
 */
twaver.vector.interaction.BaseInteraction.prototype.convertFromUIToMarkerRect = function (vr, xoff, yoff) {}

/**
 * 获取缩放和平移后的坐标点
 * @method twaver.vector.interaction.BaseInteraction.convertPointFromView
 * @param {Object} p 坐标点
 * @return {Object} 返回缩放和平移后的坐标点
 */
twaver.vector.interaction.BaseInteraction.prototype.convertPointFromView = function (p) {}

/**
 * 获取此类的字符串类名
 * @method twaver.vector.interaction.BaseInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.vector.interaction.BaseInteraction.prototype.getClassName = function () {}

/**
 * 获取鼠标点所在的位置
 * @method twaver.vector.interaction.BaseInteraction.getMarkerPoint
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回鼠标点所在的位置
 */
twaver.vector.interaction.BaseInteraction.prototype.getMarkerPoint = function (e) {}

/**
 * 返回两个坐标点直接的偏移，考虑了逻辑缩放的影响
 * @method twaver.vector.interaction.BaseInteraction.getOffset
 * @param {Object} newPoint 坐标点
 * @param {Object} lastPoint 坐标点
 * @return {Object} 坐标点
 */
twaver.vector.interaction.BaseInteraction.prototype.getOffset = function (newPoint, lastPoint) {}

/**
 * 绘制交互模式
 * @method twaver.vector.interaction.BaseInteraction.paint
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.interaction.BaseInteraction.prototype.paint = function (ctx) {}

/**
 * 批量删除事件监听器，参数个数不限，类型为String，值为所有合法的事件类型：比如mousedown，mouseup；此方法会删除指定事件类型的函数名为"hanle_"加"事件类型"（handle_mousedown，handle_mousedown）的监听器。此方法一般在tearDown方法里被调用
 * @method twaver.vector.interaction.BaseInteraction.removeListener
 */
twaver.vector.interaction.BaseInteraction.prototype.removeListener = function () {}

/**
 * 重绘交互模式
 * @method twaver.vector.interaction.BaseInteraction.repaint
 */
twaver.vector.interaction.BaseInteraction.prototype.repaint = function () {}

/**
 * 初始化交互处理器，一般调用addListener方法添加鼠标、键盘以及触摸事件监听器；Network#setInteractions会调用此方法
 * @method twaver.vector.interaction.BaseInteraction.setUp
 */
twaver.vector.interaction.BaseInteraction.prototype.setUp = function () {}

/**
 * 销毁交互处理器，一般调用removeListener方法删除鼠标、键盘以及触摸事件监听器；使用Network#setInteractions切换交互处理器时会调用此方法撤销旧的交互处理器
 * @method twaver.vector.interaction.BaseInteraction.tearDown
 */
twaver.vector.interaction.BaseInteraction.prototype.tearDown = function () {}


/**
 * 鹰眼交互处理器
 * @class twaver.vector.OverviewInteraction
 * @constructor
 * @param {twaver.network.Overview} overview 鹰眼
 * @return {twaver.network.OverviewInteraction}
 */
twaver.vector.OverviewInteraction = function (overview) {}

/**
 * 清除拖动鼠标和松开鼠标监听
 * @method twaver.vector.OverviewInteraction.clear
 */
twaver.vector.OverviewInteraction.prototype.clear = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.vector.OverviewInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.vector.OverviewInteraction.prototype.getClassName = function () {}

/**
 * 按下鼠标时执行的处理函数
 * @method twaver.vector.OverviewInteraction.handleMousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.OverviewInteraction.prototype.handleMousedown = function (e) {}

/**
 * 拖动鼠标时执行的处理函数
 * @method twaver.vector.OverviewInteraction.handleMousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.OverviewInteraction.prototype.handleMousemove = function (e) {}

/**
 * 松开鼠标时执行的处理函数
 * @method twaver.vector.OverviewInteraction.handleMouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.OverviewInteraction.prototype.handleMouseup = function (e) {}


/**
 * 鹰眼触摸交互处理器
 * @class twaver.vector.OverviewMSTouchInteraction
 * @constructor
 * @param {twaver.canvas.Overview} overview 鹰眼
 * @return {twaver.canvas.OverviewMSTouchInteraction}
 */
twaver.vector.OverviewMSTouchInteraction = function (overview) {}

/**
 * 获取此类的字符串类名
 * @method twaver.vector.OverviewMSTouchInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.vector.OverviewMSTouchInteraction.prototype.getClassName = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.vector.OverviewMSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.OverviewMSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.vector.OverviewMSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.OverviewMSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.vector.OverviewMSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.OverviewMSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 鹰眼触摸交互处理器
 * @class twaver.vector.OverviewTouchInteraction
 * @constructor
 * @param {twaver.network.Overview} overview 鹰眼
 * @return {twaver.network.OverviewTouchInteraction}
 */
twaver.vector.OverviewTouchInteraction = function (overview) {}

/**
 * 清除拖动鼠标和松开鼠标监听
 * @method twaver.vector.OverviewTouchInteraction.clear
 */
twaver.vector.OverviewTouchInteraction.prototype.clear = function () {}

/**
 * 获取此类的字符串类名
 * @method twaver.vector.OverviewTouchInteraction.getClassName
 * @return {String} 返回类名
 */
twaver.vector.OverviewTouchInteraction.prototype.getClassName = function () {}

/**
 * 触摸结束时执行的处理函数
 * @method twaver.vector.OverviewTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.OverviewTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 触摸移动时执行的处理函数
 * @method twaver.vector.OverviewTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.OverviewTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 触摸开始时执行的处理函数
 * @method twaver.vector.OverviewTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.OverviewTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * XMLserializer是用于对数据容器中的数据进行序列化和反序列化的。
 * DataBox上提供了一种功能，可以直接从XML文件中导入数据，或将DataBox中的数据导出到XML文件。它是通过XmlSerializer这个类来实现的。
 * XmlSerializer是数据容器上的一种功能，可以在序列化时进行一些设置来更改导出时的规则。
 * @class twaver.XmlSerializer
 * @constructor
 * @param {twaver.DataBox} dataBox 进行序列化的数据容器
 * @param {twaver.SerializationSettings} [settings] 序列化设置对象
 * @param {Function} [filterFunction] 过滤的函数
 * @return {twaver.XmlSerializer} 序列化对象本身
 */
twaver.XmlSerializer = function (dataBox, settings, filterFunction) {}

/**
 * 将XML字符串反序列化到数据容器中的指定对象上，如果rootParent为空，则序列化到数据容器中
 * @method twaver.XmlSerializer.deserialize
 * @param {String} xmlString XML字符串
 * @param {twaver.Data} [rootParent] 反序列化时的根对象，如果为空，则序列化到数据容器中
 */
twaver.XmlSerializer.prototype.deserialize = function (xmlString, rootParent) {}

/**
 * 从指定的XML字符串中反序列化某个对象的Client属性
 * @method twaver.XmlSerializer.deserializeClientXml
 * @param {Object} instance 反序列化的对象
 * @param {String} xml XML字符串
 * @param {String} property 反序列化的属性名
 */
twaver.XmlSerializer.prototype.deserializeClientXml = function (instance, xml, property) {}

/**
 * 从指定的XML字符串中反序列化某个对象的Property属性
 * @method twaver.XmlSerializer.deserializePropertyXml
 * @param {Object} instance 反序列化的对象
 * @param {String} xml XML字符串
 * @param {String} property 反序列化的属性名
 */
twaver.XmlSerializer.prototype.deserializePropertyXml = function (instance, xml, property) {}

/**
 * 从指定的XML字符串中反序列化某个对象的Style属性
 * @method twaver.XmlSerializer.deserializeStyleXml
 * @param {Object} instance 反序列化的对象
 * @param {String} xml XML字符串
 * @param {String} property 反序列化的属性名
 */
twaver.XmlSerializer.prototype.deserializeStyleXml = function (instance, xml, property) {}

/**
 * 从XML字符串中反序列化属性值
 * @method twaver.XmlSerializer.deserializeValue
 * @param {String} xml XML字符串
 * @param {String} type 属性的类型
 * @return {String} 属性值
 */
twaver.XmlSerializer.prototype.deserializeValue = function (xml, type) {}

/**
 * 获取类的名称
 * @method twaver.XmlSerializer.getClassName
 * @return {String} 类名
 */
twaver.XmlSerializer.prototype.getClassName = function () {}

/**
 * 初始化数据容器中数据对象的ref值，ref值是TWaver序列化时内部使用的属性
 * @method twaver.XmlSerializer.initRefs
 * @param {twaver.Data} data 数据对象
 */
twaver.XmlSerializer.prototype.initRefs = function (data) {}

/**
 * 是否需要序列化指定的对象
 * @method twaver.XmlSerializer.isSerializable
 * @param {twaver.Data} data 序列化的对象
 * @return {Boolean} true为序列化，否则为false
 */
twaver.XmlSerializer.prototype.isSerializable = function (data) {}

/**
 * 序列化相关的数据容器
 * @method twaver.XmlSerializer.serialize
 * @return {String} XML字符串
 */
twaver.XmlSerializer.prototype.serialize = function () {}

/**
 * 序列化数据容器的主体部分，TWaver内部使用
 * @method twaver.XmlSerializer.serializeBody
 */
twaver.XmlSerializer.prototype.serializeBody = function () {}

/**
 * 将对象的Client属性序列化成XML字符串
 * @method twaver.XmlSerializer.serializeClientXml
 * @param {Object} instance 序列化的数据对象
 * @param {String} client Client属性名称
 * @param {Object} newInstance 新的实例化对象。用于和instance对象比较，如果序列化的Client属性值相等，就不需要序列化这个属性
 */
twaver.XmlSerializer.prototype.serializeClientXml = function (instance, client, newInstance) {}

/**
 * 序列化数据对象
 * @method twaver.XmlSerializer.serializeData
 * @param {twaver.Data} data 序列化的数据对象
 */
twaver.XmlSerializer.prototype.serializeData = function (data) {}

/**
 * 将对象的Property属性序列化成XML字符串
 * @method twaver.XmlSerializer.serializePropertyXml
 * @param {Object} instance 序列化的数据对象
 * @param {String} property Property属性名称
 * @param {Object} newInstance 新的实例化对象。用于和instance对象比较，如果序列化的Property属性值相等，就不需要序列化这个属性
 */
twaver.XmlSerializer.prototype.serializePropertyXml = function (instance, property, newInstance) {}

/**
 * 将对象的Style属性序列化成XML字符串
 * @method twaver.XmlSerializer.serializeStyleXml
 * @param {Object} instance 序列化的数据对象
 * @param {String} style Style属性名称
 * @param {Object} newInstance 新的实例化对象。用于和instance对象比较，如果序列化的Style属性值相等，就不需要序列化这个属性
 */
twaver.XmlSerializer.prototype.serializeStyleXml = function (instance, style, newInstance) {}

/**
 * 序列化对象的某个属性
 * @method twaver.XmlSerializer.serializeValue
 * @param {String} c 属性的类型。它的可选值为“c”,"p"或者“s”,代表着数据的Client属性，Property属性和Style属性
 * @param {String} property 序列化的属性名称
 * @param {String} value 序列化的属性值
 * @param {Object} newInstanceValue 新的实例化对象的属性值
 * @param {String} type 序列化属性的类型。可选值为：'cdata','data','point','list.point','list.string','list.number','rectangle'
 */
twaver.XmlSerializer.prototype.serializeValue = function (c, property, value, newInstanceValue, type) {}


/**
 * 这个类用于定义告警状态传播的规则。告警传播是网元容器的一部分，当网元上发生告警时，会将这个告警传播到相关的网元上。默认的传播规则是，传播到发生告警网元的父亲上。
 * @class twaver.AlarmStatePropagator
 * @constructor
 * @extends twaver.PropertyPropagator
 * @param {twaver.ElementBox} elementBox 绑定的网元容器
 * @return {twaver.AlarmStatePropagator} 告警状态传播对象
 */
twaver.AlarmStatePropagator = function (elementBox) {}

twaver.AlarmStatePropagator.prototype = new twaver.PropertyPropagator()


/**
 * 告警统计是用于统计网元容器上所有的告警状态的数量。它需要和网元容器绑定，当网元容器上某个网元的告警状态发生改变时，告警统计类就会自动计算告警的数量。
 * 这个类可以用于驱动柱状图，饼状图的告警信息的显示
 * @class twaver.AlarmStateStatistics
 * @constructor
 * @extends twaver.PropertyChangeDispatcher
 * @param {twaver.ElementBox} elementBox 网元容器
 * @return {twaver.AlarmStateStatistics} 告警统计对象本身
 */
twaver.AlarmStateStatistics = function (elementBox) {}

twaver.AlarmStateStatistics.prototype = new twaver.PropertyChangeDispatcher()

/**
 * 减少一个网元(TWaver内部使用)
 * @method twaver.AlarmStateStatistics.decrease
 * @param {twaver.Element} element 网元对象
 */
twaver.AlarmStateStatistics.prototype.decrease = function (element) {}

/**
 * 销毁告警统计，比如网元更改事件的监听器，网元属性更改事件的监听器
 * @method twaver.AlarmStateStatistics.dispose
 */
twaver.AlarmStateStatistics.prototype.dispose = function () {}

/**
 * 派发网元告警统计状态的更改事件。TWaver内部使用
 * @method twaver.AlarmStateStatistics.fireAlarmStateChange
 */
twaver.AlarmStateStatistics.prototype.fireAlarmStateChange = function () {}

/**
 * 获取指定告警级别的确认告警的数量
 * @method twaver.AlarmStateStatistics.getAcknowledgedAlarmCount
 * @param {twaver.AlarmSeverity} severity 指定的告警级别
 * @return {Number} 确认告警的数量
 */
twaver.AlarmStateStatistics.prototype.getAcknowledgedAlarmCount = function (severity) {}

/**
 * 获取绑定的网元容器
 * @method twaver.AlarmStateStatistics.getElementBox
 * @return {twaver.ElementBox} 网元容器对象
 */
twaver.AlarmStateStatistics.prototype.getElementBox = function () {}

/**
 * 获取告警统计的过滤器，这个过滤器用于过滤哪些网元或哪些告警可以不计入统计范围。默认为空，也就是统计网元容器中所有网元的告警都计入统计范围
 * @method twaver.AlarmStateStatistics.getFilterFunction
 * @return {Function} 告警统计的过滤器
 */
twaver.AlarmStateStatistics.prototype.getFilterFunction = function () {}

/**
 * 获取指定告警级别的新发告警的数量
 * @method twaver.AlarmStateStatistics.getNewAlarmCount
 * @param {twaver.AlarmSeverity} severity 指定的告警级别
 * @return {Number} 新发告警的数量
 */
twaver.AlarmStateStatistics.prototype.getNewAlarmCount = function (severity) {}

/**
 * 获取指定告警级别的告警统计的总数信息，包括新发告警的数量，确认告警的数量和两者总数量
 * @method twaver.AlarmStateStatistics.getSumInfo
 * @param {twaver.AlarmSeverity} severity 指定的告警级别
 * @return {Object} 告警统计的总数信息
 */
twaver.AlarmStateStatistics.prototype.getSumInfo = function (severity) {}

/**
 * 获取指定告警级别的告警总数量
 * @method twaver.AlarmStateStatistics.getTotalAlarmCount
 * @param {twaver.AlarmSeverity} severity 指定的告警级别
 * @return {Number} 告警级别的告警总数量
 */
twaver.AlarmStateStatistics.prototype.getTotalAlarmCount = function (severity) {}

/**
 * 当网元容器发生变化时。TWaver内部会调用此方法
 * @method twaver.AlarmStateStatistics.handleElementBoxChange
 * @param {Object} e 网元容器发生变化的事件
 */
twaver.AlarmStateStatistics.prototype.handleElementBoxChange = function (e) {}

/**
 * 当网元容器中网元的属性发生变化时调用此方法
 * @method twaver.AlarmStateStatistics.handleElementPropertyChange
 * @param {Object} e 网元属性变化的事件
 */
twaver.AlarmStateStatistics.prototype.handleElementPropertyChange = function (e) {}

/**
 * 增加一个网元，TWaver内部使用
 * @method twaver.AlarmStateStatistics.increase
 * @param {twaver.Element} element 网元对象
 */
twaver.AlarmStateStatistics.prototype.increase = function (element) {}

/**
 * 设置所有的告警统计的数量为零
 * @method twaver.AlarmStateStatistics.reset
 */
twaver.AlarmStateStatistics.prototype.reset = function () {}

/**
 * 设置绑定的网元容器
 * @method twaver.AlarmStateStatistics.setElementBox
 * @param {twaver.ElementBox} box 网元容器对象
 */
twaver.AlarmStateStatistics.prototype.setElementBox = function (box) {}

/**
 * 设置告警统计的过滤器，这个过滤器用于过滤哪些网元或哪些告警可以不参考统计，默认为空，也就是统计网元容器中所有网元的告警
 * @method twaver.AlarmStateStatistics.setFilterFunction
 * @param {Function} f 告警统计的过滤器
 */
twaver.AlarmStateStatistics.prototype.setFilterFunction = function (f) {}


/**
 * 以动画效果渐变更改节点位置以及大小
 * @class twaver.animate.AnimateBounds
 * @constructor
 * @extends twaver.animate.Animate
 * @param {twaver.Node} node 节点
 * @param {Object} newBounds 节点新的位置及大小，值为包含x、y、width和height属性的Object对象
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateBounds}
 */
twaver.animate.AnimateBounds = function (node, newBounds, finishFunction) {}

twaver.animate.AnimateBounds.prototype = new twaver.animate.Animate()


/**
 * 以动画效果更改一组对象的属性
 * @class twaver.animate.AnimateProperty
 * @constructor
 * @extends twaver.animate.Animate
 * @param {twaver.List} objects 需要更改属性的对象集合
 * @param {twaver.List} newValues 新值集合
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateProperty}
 */
twaver.animate.AnimateProperty = function (objects, newValues, finishFunction) {}

twaver.animate.AnimateProperty.prototype = new twaver.animate.Animate()

/**
 * 动画每帧执行的动作，子类重载此方法以实现自定义逻辑
 * @method twaver.animate.AnimateProperty.currentAction
 * @param {Object} obj 需要更改属性的对象
 * @param {Object} oldValue 旧值
 * @param {Object} newValue 新值
 * @param {Number} rate 动画完成进度
 */
twaver.animate.AnimateProperty.prototype.currentAction = function (obj, oldValue, newValue, rate) {}

/**
 * 获取指定对象的指定属性
 * @method twaver.animate.AnimateProperty.getPropertyValue
 * @param {Object} obj 需要更改属性的对象
 */
twaver.animate.AnimateProperty.prototype.getPropertyValue = function (obj) {}


/**
 * 以动画效果更改组件垂直和水平滚动条位置
 * @class twaver.animate.AnimateScrollPosition
 * @constructor
 * @extends twaver.animate.Animate
 * @param {HTMLDivElement} view HTML DIV元素
 * @param {Number} newHorizontalOffset 新的水平滚动条位置
 * @param {Number} newVerticalOffset 新的垂直滚动条位置
 * @return {twaver.animate.AnimateScrollPosition}
 */
twaver.animate.AnimateScrollPosition = function (view, newHorizontalOffset, newVerticalOffset) {}

twaver.animate.AnimateScrollPosition.prototype = new twaver.animate.Animate()


/**
 * 以动画效果切换当前子网
 * @class twaver.animate.AnimateSubNetwork
 * @constructor
 * @extends twaver.animate.Animate
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.SubNetwork} subNetwork 子网
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateSubNetwork}
 */
twaver.animate.AnimateSubNetwork = function (network, subNetwork, finishFunction) {}

twaver.animate.AnimateSubNetwork.prototype = new twaver.animate.Animate()


/**
 * 以动画效果更改水平和垂直缩放比例
 * @class twaver.animate.AnimateXYZoom
 * @constructor
 * @extends twaver.animate.Animate
 * @param {twaver.controls.View} view 视图
 * @param {Number} newXZoom 新的水平缩放比例
 * @param {Number} newYZoom 新的垂直缩放比例
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateXYZoom}
 */
twaver.animate.AnimateXYZoom = function (view, newXZoom, newYZoom, finishFunction) {}

twaver.animate.AnimateXYZoom.prototype = new twaver.animate.Animate()


/**
 * 以动画效果更改水平缩放比例
 * @class twaver.animate.AnimateXZoom
 * @constructor
 * @extends twaver.animate.Animate
 * @param {twaver.controls.View} view 视图
 * @param {Number} newXZoom 新的水平缩放比例
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateXZoom}
 */
twaver.animate.AnimateXZoom = function (view, newXZoom, finishFunction) {}

twaver.animate.AnimateXZoom.prototype = new twaver.animate.Animate()


/**
 * 以动画效果更改垂直缩放比例
 * @class twaver.animate.AnimateYZoom
 * @constructor
 * @extends twaver.animate.Animate
 * @param {twaver.controls.View} view 视图
 * @param {Number} newYZoom 新的垂直缩放比例
 * @param {Number} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateYZoom}
 */
twaver.animate.AnimateYZoom = function (view, newYZoom, finishFunction) {}

twaver.animate.AnimateYZoom.prototype = new twaver.animate.Animate()


/**
 * 以动画效果更改缩放比例
 * @class twaver.animate.AnimateZoom
 * @constructor
 * @extends twaver.animate.Animate
 * @param {twaver.controls.View} view 视图
 * @param {Number} newZoom 新的缩放比例
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateZoom}
 */
twaver.animate.AnimateZoom = function (view, newZoom, finishFunction) {}

twaver.animate.AnimateZoom.prototype = new twaver.animate.Animate()


/**
 * 告警附件和标签附件等的基类，用于显示文本信息的附件
 * @class twaver.canvas.BasicAttachment
 * @constructor
 * @extends twaver.canvas.Attachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.BasicAttachment}
 */
twaver.canvas.BasicAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.canvas.BasicAttachment.prototype = new twaver.canvas.Attachment()

/**
 * 计算附件位置和大小
 * @method twaver.canvas.BasicAttachment.calculateMeasure
 */
twaver.canvas.BasicAttachment.prototype.calculateMeasure = function () {}

/**
 * 获取附件画线时线条两端的样式, 默认值为twaver.Defaults.ATTACHMENT_CAP(butt), 可选值为butt(无端点)，round(圆头端点)或 square(方头端点)
 * @method twaver.canvas.BasicAttachment.getCap
 * @return {String} 返回画线时, 线条两端的样式
 */
twaver.canvas.BasicAttachment.prototype.getCap = function () {}

/**
 * 获取附件内容高度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT(20)
 * @method twaver.canvas.BasicAttachment.getContentHeight
 * @return {Number} 返回附件内容高度
 */
twaver.canvas.BasicAttachment.prototype.getContentHeight = function () {}

/**
 * 获取附件内容区域
 * @method twaver.canvas.BasicAttachment.getContentRect
 * @return {Object} 返回附件内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.BasicAttachment.prototype.getContentRect = function () {}

/**
 * 获取附件内容宽度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（30）
 * @method twaver.canvas.BasicAttachment.getContentWidth
 * @return {Number} 返回附件内容宽度
 */
twaver.canvas.BasicAttachment.prototype.getContentWidth = function () {}

/**
 * 获取附件圆角半径，默认值为twaver.Defaults.ATTACHMENT_CORNER_RADIUS（5）
 * @method twaver.canvas.BasicAttachment.getCornerRadius
 * @return {Number} 返回附件圆角半径
 */
twaver.canvas.BasicAttachment.prototype.getCornerRadius = function () {}

/**
 * 获取附件箭头的显示方位，一般用于告警冒泡，默认值为twaver.Defaults.ATTACHMENT_DIRECTION（right），可选值为：
 * aboveleft 附件箭头在上左角
 * aboveright 附件箭头在上右角
 * belowleft 附件箭头在下左角
 * belowright 附件箭头在下右角
 * leftabove 附件箭头在左上角
 * leftbelow 附件箭头在左下角
 * rightabove 附件箭头在右上角
 * rightbelow 附件箭头在右下角
 * above 附件箭头在上边
 * below 附件箭头在下边
 * left 附件箭头在左边
 * right 附件箭头在右边
 * @method twaver.canvas.BasicAttachment.getDirection
 * @return {String} 返回附件箭头的显示方位
 */
twaver.canvas.BasicAttachment.prototype.getDirection = function () {}

/**
 * 获取附件填充颜色，默认值为twaver.Defaults.ATTACHMENT_FILL_COLOR（#000000）
 * @method twaver.canvas.BasicAttachment.getFillColor
 * @return {String} 返回附件填充颜色
 */
twaver.canvas.BasicAttachment.prototype.getFillColor = function () {}

/**
 * 获取附件渐进色填充样式，默认值为twaver.Defaults.ATTACHMENT_GRADIENT（null），null表示不使用填充渐进色，可选值为：
 * linear.east, linear.north, linear.northeast, linear.northwest, linear.south, linear.southeast, linear.southwest, linear.west, none, radial.center, radial.east, radial.north, radial.northeast, radial.northwest, radial.south, radial.southeast, radial.southwest, radial.west, spread.antidiagonal, spread.diagonal, spread.east, spread.horizontal, spread.north, spread.south, spread.vertical, spread.west
 * @method twaver.canvas.BasicAttachment.getGradient
 * @return {String} 返回附件渐进色填充样式
 */
twaver.canvas.BasicAttachment.prototype.getGradient = function () {}

/**
 * 获取附件填充渐进色，默认值为twaver.Defaults.ATTACHMENT_GRADIENT_COLOR（#FFFFFF）
 * @method twaver.canvas.BasicAttachment.getGradientColor
 * @return {String} 返回附件填充渐进色
 */
twaver.canvas.BasicAttachment.prototype.getGradientColor = function () {}

/**
 * 获取附件在画线时的线条连接点样式，默认值为twaver.Defaults.ATTACHMENT_JOIN（miter），可选值为bevel（斜角连接）round（圆角连接）和miter（尖角连接）
 * @method twaver.canvas.BasicAttachment.getJoin
 * @return {String} 返回附件在画线时的线条连接点样式
 */
twaver.canvas.BasicAttachment.prototype.getJoin = function () {}

/**
 * 获取附件边框颜色，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_COLOR（#000000）
 * @method twaver.canvas.BasicAttachment.getOutlineColor
 * @return {String} 返回附件边框颜色
 */
twaver.canvas.BasicAttachment.prototype.getOutlineColor = function () {}

/**
 * 获取附件边框宽度，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH（-1），-1代表无边框
 * @method twaver.canvas.BasicAttachment.getOutlineWidth
 * @return {Number} 返回附件边框宽度
 */
twaver.canvas.BasicAttachment.prototype.getOutlineWidth = function () {}

/**
 * 获取附件内容和边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING（0）
 * @method twaver.canvas.BasicAttachment.getPadding
 * @return {Number} 返回附件内容和边界之间的间距
 */
twaver.canvas.BasicAttachment.prototype.getPadding = function () {}

/**
 * 获取附件内容和下边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_BOTTOM（0）
 * @method twaver.canvas.BasicAttachment.getPaddingBottom
 * @return {Number} 返回附件内容和下边界之间的间距
 */
twaver.canvas.BasicAttachment.prototype.getPaddingBottom = function () {}

/**
 * 获取附件内容和左边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_LEFT（0）
 * @method twaver.canvas.BasicAttachment.getPaddingLeft
 * @return {Number} 返回附件内容和左边界之间的间距
 */
twaver.canvas.BasicAttachment.prototype.getPaddingLeft = function () {}

/**
 * 获取附件内容和右边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_RIGHT（0）
 * @method twaver.canvas.BasicAttachment.getPaddingRight
 * @return {Number} 附件内容和右边界之间的间距
 */
twaver.canvas.BasicAttachment.prototype.getPaddingRight = function () {}

/**
 * 获取附件内容和上边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_TOP（0）
 * @method twaver.canvas.BasicAttachment.getPaddingTop
 * @return {Number} 返回附件内容和上边界之间的间距
 */
twaver.canvas.BasicAttachment.prototype.getPaddingTop = function () {}

/**
 * 获取附件箭头长度，默认值为twaver.Defaults.ATTACHMENT_POINTER_LENGTH（10）
 * @method twaver.canvas.BasicAttachment.getPointerLength
 * @return {Number} 返回附件箭头长度
 */
twaver.canvas.BasicAttachment.prototype.getPointerLength = function () {}

/**
 * 获取附件箭头宽度，默认值为ATTACHMENT_POINTER_WIDTH（8）
 * @method twaver.canvas.BasicAttachment.getPointerWidth
 * @return {Number} 返回附件箭头宽度
 */
twaver.canvas.BasicAttachment.prototype.getPointerWidth = function () {}

/**
 * 获取附件位置，默认值为twaver.Defaults.ATTACHMENT_POSITION（topright.topright）
 * 可选值为
 * hotspot
 * from
 * to
 * topleft.topleft
 * topleft.topright
 * top.top
 * topright.topleft
 * topright.topright
 * topleft
 * top
 * topright
 * topleft.bottomleft
 * topleft.bottomright
 * top.bottom
 * topright.bottomleft
 * topright.bottomright
 * left.left
 * left
 * left.right
 * center
 * right.left
 * right
 * right.right
 * bottomleft.topleft
 * bottomleft.topright
 * bottom.top
 * bottomright.topleft
 * bottomright.topright
 * bottomleft
 * bottom
 * bottomright
 * bottomleft.bottomleft
 * bottomleft.bottomright
 * bottom.bottom
 * bottomright.bottomleft
 * bottomright.bottomright
 * @method twaver.canvas.BasicAttachment.getPosition
 * @return {String} 返回附件位置
 */
twaver.canvas.BasicAttachment.prototype.getPosition = function () {}

/**
 * 获取附件圆角区域
 * @method twaver.canvas.BasicAttachment.getRoundRect
 * @return {Object} 返回附件圆角区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.BasicAttachment.prototype.getRoundRect = function () {}

/**
 * 获取附件x轴偏移量，默认值为twaver.Defaults.ATTACHMENT_XOFFSET（0）
 * @method twaver.canvas.BasicAttachment.getXOffset
 * @return {Number} 返回附件的x轴偏移量
 */
twaver.canvas.BasicAttachment.prototype.getXOffset = function () {}

/**
 * 获取附件y轴偏移量，默认值为twaver.Defaults.ATTACHMENT_YOFFSET（0）
 * @method twaver.canvas.BasicAttachment.getYOffset
 * @return {Number} 返回附件y轴偏移量
 */
twaver.canvas.BasicAttachment.prototype.getYOffset = function () {}

/**
 * 获取附件是否有填充背景，默认值为twaver.Defaults.ATTACHMENT_FILL（false）
 * @method twaver.canvas.BasicAttachment.isFill
 * @return {Boolean} 返回附件是否有填充背景
 */
twaver.canvas.BasicAttachment.prototype.isFill = function () {}

/**
 * 获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE（false）
 * @method twaver.canvas.BasicAttachment.isShadowable
 * @return {Boolean} 返回附件选中时是否有阴影效果
 */
twaver.canvas.BasicAttachment.prototype.isShadowable = function () {}


/**
 * 编辑附件，用于显示网元是否可编辑。对于可编辑的节点，节点周围显示8个可以改变网元大小的小方块；对于多边形和折线，每个可移动点显示为黄色的小圆球
 * @class twaver.canvas.EditAttachment
 * @constructor
 * @extends twaver.canvas.Attachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.EditAttachment}
 */
twaver.canvas.EditAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.canvas.EditAttachment.prototype = new twaver.canvas.Attachment()

/**
 * 画ShapeLink和ShapeNode的控制点
 * @method twaver.canvas.EditAttachment.paintEditPoints
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.EditAttachment.prototype.paintEditPoints = function (ctx) {}

/**
 * 画8个更改网元大小的控制点
 * @method twaver.canvas.EditAttachment.paintResizingPoints
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.EditAttachment.prototype.paintResizingPoints = function (ctx) {}

/**
 * 绘制旋转点
 * @method twaver.canvas.EditAttachment.paintRotatePoints
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.EditAttachment.prototype.paintRotatePoints = function (ctx) {}


/**
 * 图标组附件，用于显示一组图标
 * @class twaver.canvas.IconsAttachment
 * @constructor
 * @extends twaver.canvas.Attachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.IconsAttachment}
 */
twaver.canvas.IconsAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.canvas.IconsAttachment.prototype = new twaver.canvas.Attachment()

/**
 * 获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE(false)
 * @method twaver.canvas.IconsAttachment.isShadowable
 * @return {Boolean} 返回附件选中时是否有阴影效果
 */
twaver.canvas.IconsAttachment.prototype.isShadowable = function () {}


/**
 * 创建节点交互处理器，当点击拓扑时，创建指定类型的节点，并设置此节点中心位置为点击位置，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建节点模式
 * @class twaver.canvas.interaction.CreateElementInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrElementFunction] 节点类型或者节点生成器方法，可选，默认值为twaver.Node
 * @return {twaver.network.interaction.CreateElementInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateElementInteraction(network, twaver.SubNetwork),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateElementInteraction(network,
 *     function (point) {
 *                     var element = new twaver.Node();
 *                     element.setName(element.getClassName());
 *                     element.setCenterLocation(point);
 *                     var parent = network.getElementAt(point);
 *                     if (parent && parent instanceof twaver.Group) {
 *                         element.setParent(parent);
 *                     }
 *                     return element;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.canvas.interaction.CreateElementInteraction = function (network, typeOrElementFunction) {}

twaver.canvas.interaction.CreateElementInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理鼠标按下事件
 * @method twaver.canvas.interaction.CreateElementInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.CreateElementInteraction.prototype.handle_mousedown = function (e) {}


/**
 * 创建连线交互处理器，在拓扑上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.canvas.interaction.CreateLinkInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrLinkFunction] 连线类型或者连线生成器方法，可选，默认值为twaver.Link
 * @return {twaver.network.interaction.CreateLinkInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateLinkInteraction(network, twaver.Link),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateLinkInteraction(network,
 *     function (fromNode, toNode) {
 *         var link = new twaver.Link();
 *         link.setFromNode(fromNode);
 *         link.setToNode(toNode);
 *         link.setStyle('link.color', 'red');
 *         return link;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.canvas.interaction.CreateLinkInteraction = function (network, typeOrLinkFunction) {}

twaver.canvas.interaction.CreateLinkInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 创建连线结束后，清除临时状态
 * @method twaver.canvas.interaction.CreateLinkInteraction.clear
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.clear = function () {}

/**
 * 创建连线
 * @method twaver.canvas.interaction.CreateLinkInteraction.createLink
 * @return {twaver.Link} 连线
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.createLink = function () {}

/**
 * 获取当前鼠标下的节点，并作为将要创建的连线的起始节点
 * @method twaver.canvas.interaction.CreateLinkInteraction.getFromNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回当前鼠标下的节点
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.getFromNode = function (e) {}

/**
 * 获取鼠标下的节点
 * @method twaver.canvas.interaction.CreateLinkInteraction.getNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回鼠标下的节点
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.getNode = function (e) {}

/**
 * 获取当前鼠标下的节点，并作为将要创建的连线的结束节点
 * @method twaver.canvas.interaction.CreateLinkInteraction.getToNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回当前鼠标下的节点
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.getToNode = function (e) {}

/**
 * 处理鼠标按下事件
 * @method twaver.canvas.interaction.CreateLinkInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.canvas.interaction.CreateLinkInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 从起始点画线到鼠标当前点
 * @method twaver.canvas.interaction.CreateLinkInteraction.paintLine
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.interaction.CreateLinkInteraction.prototype.paintLine = function (ctx) {}


/**
 * 创建多边形交互处理器，在Network上多次点击不同位置设置多边形的points属性，最后双击结束，可以用Network#setCreateShapeNodeInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.canvas.interaction.CreateShapeNodeInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {String} network 拓扑
 * @param {Object} [typeOrShapeNodeFunction] 多边形类型或者多边形生成器方法，可选，默认值为twaver.ShapeNode
 * @return {twaver.network.interaction.CreateShapeNodeInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateShapeNodeInteraction(network, twaver.ShapeNode),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateShapeNodeInteraction(network,
 *     function (points) {
 *         var shapeNode = new twaver.ShapeNode();
 *         shapeNode.setStyle('vector.fill.color', 'red');
 *         if(points){
 *             shapeNode.setPoints(points);
 *         }
 *         return shapeNode;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.canvas.interaction.CreateShapeNodeInteraction = function (network, typeOrShapeNodeFunction) {}

twaver.canvas.interaction.CreateShapeNodeInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 创建多边形结束后，清除临时状态
 * @method twaver.canvas.interaction.CreateShapeNodeInteraction.clear
 */
twaver.canvas.interaction.CreateShapeNodeInteraction.prototype.clear = function () {}

/**
 * 处理鼠标按下
 * @method twaver.canvas.interaction.CreateShapeNodeInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.CreateShapeNodeInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.canvas.interaction.CreateShapeNodeInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.CreateShapeNodeInteraction.prototype.handle_mousemove = function (e) {}


/**
 * 默认交互处理器，处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等交互动作
 * @class twaver.canvas.interaction.DefaultInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.DefaultInteraction}
 */
twaver.canvas.interaction.DefaultInteraction = function (network) {}

twaver.canvas.interaction.DefaultInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理键盘按下事件
 * @method twaver.canvas.interaction.DefaultInteraction.handle_keydown
 * @param {KeyEvent} e 键盘事件
 */
twaver.canvas.interaction.DefaultInteraction.prototype.handle_keydown = function (e) {}

/**
 * 处理鼠标按下
 * @method twaver.canvas.interaction.DefaultInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.DefaultInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标点击
 * @method twaver.canvas.interaction.DefaultInteraction.handleClicked
 * @param {MouseEvent} e 鼠标事件
 * @param {twaver.Element} element 网元
 */
twaver.canvas.interaction.DefaultInteraction.prototype.handleClicked = function (e, element) {}

/**
 * 处理鼠标双击
 * @method twaver.canvas.interaction.DefaultInteraction.handleDoubleClicked
 * @param {MouseEvent} e 鼠标事件
 * @param {twaver.Element} element 网元
 */
twaver.canvas.interaction.DefaultInteraction.prototype.handleDoubleClicked = function (e, element) {}


/**
 * 编辑交互处理器，处理改变网元大小、更改折线（ShapeLink）和多边形（ShapeNode）的轨迹等操作，可以用Network#setEditInteractions快速切换当前交互模式为编辑模式
 * @class twaver.canvas.interaction.EditInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选，默认值为false
 * @return {twaver.network.interaction.EditInteraction}
 */
twaver.canvas.interaction.EditInteraction = function (network, lazyMode) {}

twaver.canvas.interaction.EditInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 编辑结束后，清除临时状态
 * @method twaver.canvas.interaction.EditInteraction.clear
 */
twaver.canvas.interaction.EditInteraction.prototype.clear = function () {}

/**
 * 获取点离直线的距离
 * @method twaver.canvas.interaction.EditInteraction.getDistanceFromPointToLine
 * @param {Object} point 点
 * @param {Object} point1 线段顶点1
 * @param {Object} point2 线段顶点2
 * @return {Number} 返回点离直线的距离
 */
twaver.canvas.interaction.EditInteraction.prototype.getDistanceFromPointToLine = function (point, point1, point2) {}

/**
 * 获取指定点所在的边索引
 * @method twaver.canvas.interaction.EditInteraction.getPointIndex
 * @param {twaver.List} points 坐标点集合
 * @param {Object} point 点
 * @param {Boolean} closed 是否闭合
 * @return {Number} 返回指定点所在的边索引
 */
twaver.canvas.interaction.EditInteraction.prototype.getPointIndex = function (points, point, closed) {}

/**
 * 处理鼠标按下事件
 * @method twaver.canvas.interaction.EditInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.EditInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.canvas.interaction.EditInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.EditInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.canvas.interaction.EditInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.EditInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 获取指定点是否在线段上
 * @method twaver.canvas.interaction.EditInteraction.isPointOnLine
 * @param {Object} point 坐标点
 * @param {Object} point1 线段顶点1
 * @param {Object} point2 线段顶点2
 * @param {Number} width 线段宽度
 * @return {Boolean} 返回指定点是否在线段上
 */
twaver.canvas.interaction.EditInteraction.prototype.isPointOnLine = function (point, point1, point2, width) {}

/**
 * 显示旋转刻度
 * @method twaver.canvas.interaction.EditInteraction.showRotateScale
 */
twaver.canvas.interaction.EditInteraction.prototype.showRotateScale = function () {}


/**
 * 放大镜交互处理器
 * @class twaver.canvas.interaction.MagnifyInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Number} [scale] 缩放比例，可选，默认值为2
 * @param {Number} [xRadius] 水平半径，可选，默认值为100
 * @param {Number} [yRadius] 垂直半径，可选，默认值为100
 * @return {twaver.network.interaction.MagnifyInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.SelectInteraction(network),
 *     new twaver.network.interaction.MoveInteraction(network),
 *     new twaver.network.interaction.DefaultInteraction(network),
 *     new twaver.network.interaction.MagnifyInteraction(network)
 * ]);
 */
twaver.canvas.interaction.MagnifyInteraction = function (network, scale, xRadius, yRadius) {}

twaver.canvas.interaction.MagnifyInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 获取放大镜背景颜色
 * @method twaver.canvas.interaction.MagnifyInteraction.getBackgroundColor
 * @return {String} 返回放大镜背景颜色，默认为白色
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.getBackgroundColor = function () {}

/**
 * 获取边框颜色
 * @method twaver.canvas.interaction.MagnifyInteraction.getBorderColor
 * @return {String} 返回边框颜色，默认为黑色
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.getBorderColor = function () {}

/**
 * 获取边框宽度
 * @method twaver.canvas.interaction.MagnifyInteraction.getBorderWidth
 * @return {Number} 返回边框宽度，默认为1
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.getBorderWidth = function () {}

/**
 * 获取放大镜形状
 * @method twaver.canvas.interaction.MagnifyInteraction.getShape
 * @return {String} 返回放大镜形状，默认为圆形
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.getShape = function () {}

/**
 * 获取x轴半径
 * @method twaver.canvas.interaction.MagnifyInteraction.getXRadius
 * @return {Number} 返回x轴半径，默认为100
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.getXRadius = function () {}

/**
 * 获取y轴半径
 * @method twaver.canvas.interaction.MagnifyInteraction.getYRadius
 * @return {Number} 返回y轴半径
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.getYRadius = function () {}

/**
 * 获取缩放级别
 * @method twaver.canvas.interaction.MagnifyInteraction.getZoom
 * @return {Number} 返回缩放级别，默认为2
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.getZoom = function () {}

/**
 * 处理鼠标移动
 * @method twaver.canvas.interaction.MagnifyInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 设置放大镜背景颜色
 * @method twaver.canvas.interaction.MagnifyInteraction.setBackgroundColor
 * @param {String} value 放大镜背景颜色
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.setBackgroundColor = function (value) {}

/**
 * 设置边框颜色
 * @method twaver.canvas.interaction.MagnifyInteraction.setBorderColor
 * @param {String} value 边框颜色
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.setBorderColor = function (value) {}

/**
 * 设置边框宽度
 * @method twaver.canvas.interaction.MagnifyInteraction.setBorderWidth
 * @param {Number} value 边框宽度
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.setBorderWidth = function (value) {}

/**
 * 设置放大镜形状
 * @method twaver.canvas.interaction.MagnifyInteraction.setShape
 * @param {String} value 放大镜形状
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.setShape = function (value) {}

/**
 * 设置x轴半径
 * @method twaver.canvas.interaction.MagnifyInteraction.setXRadius
 * @param {Number} value x轴半径
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.setXRadius = function (value) {}

/**
 * 设置y轴半径
 * @method twaver.canvas.interaction.MagnifyInteraction.setYRadius
 * @param {Number} value y轴半径
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.setYRadius = function (value) {}

/**
 * 设置缩放级别
 * @method twaver.canvas.interaction.MagnifyInteraction.setZoom
 * @param {Number} value 缩放级别
 */
twaver.canvas.interaction.MagnifyInteraction.prototype.setZoom = function (value) {}


/**
 * 移动网元交互处理器
 * @class twaver.canvas.interaction.MoveInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选，默认值为false
 * @return {twaver.network.interaction.MoveInteraction}
 */
twaver.canvas.interaction.MoveInteraction = function (network, lazyMode) {}

twaver.canvas.interaction.MoveInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 移动结束后，清除临时状态
 * @method twaver.canvas.interaction.MoveInteraction.end
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MoveInteraction.prototype.end = function (e) {}

/**
 * 处理键盘按下事件
 * @method twaver.canvas.interaction.MoveInteraction.handle_keydown
 * @param {KeyEvent} e 键盘事件
 */
twaver.canvas.interaction.MoveInteraction.prototype.handle_keydown = function (e) {}

/**
 * 处理键盘弹起事件
 * @method twaver.canvas.interaction.MoveInteraction.handle_keyup
 * @param {KeyEvent} e 键盘事件
 */
twaver.canvas.interaction.MoveInteraction.prototype.handle_keyup = function (e) {}

/**
 * 处理鼠标按下
 * @method twaver.canvas.interaction.MoveInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MoveInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.canvas.interaction.MoveInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MoveInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标移出事件
 * @method twaver.canvas.interaction.MoveInteraction.handle_mouseout
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MoveInteraction.prototype.handle_mouseout = function (e) {}

/**
 * 处理鼠标弹起，结束网元移动
 * @method twaver.canvas.interaction.MoveInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MoveInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 获取是否正在设置父亲
 * @method twaver.canvas.interaction.MoveInteraction.isParenting
 * @return {Number} 返回是否正在设置父亲
 */
twaver.canvas.interaction.MoveInteraction.prototype.isParenting = function () {}

/**
 * 键盘P键按下时，鼠标移动到网元上时的处理函数
 * @method twaver.canvas.interaction.MoveInteraction.parentProcess
 * @param {MouseEvent} e 鼠标事件
 * @param {Boolean} released 键盘P键是否按下
 */
twaver.canvas.interaction.MoveInteraction.prototype.parentProcess = function (e, released) {}


/**
 * 触摸交互处理器
 * @class twaver.canvas.interaction.MSTouchInteraction
 * @constructor
 * @extends twaver.canvas.interaction.BaseInteraction
 * @param {twaver.canvas.Network} network 拓扑图组件
 * @return {twaver.canvas.interaction.MSTouchInteraction}
 */
twaver.canvas.interaction.MSTouchInteraction = function (network) {}

twaver.canvas.interaction.MSTouchInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.canvas.interaction.MSTouchInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.canvas.interaction.MSTouchInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理鼠标移动事件
 * @method twaver.canvas.interaction.MSTouchInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MSTouchInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.canvas.interaction.MSTouchInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.MSTouchInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 处理触摸结束事件
 * @method twaver.canvas.interaction.MSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.interaction.MSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.canvas.interaction.MSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.interaction.MSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.canvas.interaction.MSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.interaction.MSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 手抓图交互处理器，拖动拓扑时水平或垂直滚动拓扑，可以用Network#setPanInteractions快速切换当前拓扑交互模式为手抓图模式
 * @class twaver.canvas.interaction.PanInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.PanInteraction}
 */
twaver.canvas.interaction.PanInteraction = function (network) {}

twaver.canvas.interaction.PanInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理鼠标按下
 * @method twaver.canvas.interaction.PanInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.PanInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.canvas.interaction.PanInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.PanInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起
 * @method twaver.canvas.interaction.PanInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.PanInteraction.prototype.handle_mouseup = function (e) {}


/**
 * 滚动交互模式
 * @class twaver.canvas.interaction.ScrollInteraction
 * @constructor
 * @extends twaver.canvas.interaction.BaseInteraction
 * @param {twaver.canvas.Network} network 拓扑图组件
 * @return {twaver.canvas.interaction.ScrollInteraction}
 */
twaver.canvas.interaction.ScrollInteraction = function (network) {}

twaver.canvas.interaction.ScrollInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

/**
 * 获取滚动条颜色
 * @method twaver.canvas.interaction.ScrollInteraction.getScrollBarColor
 * @return {String} 返回滚动条颜色，默认为#cccccc
 */
twaver.canvas.interaction.ScrollInteraction.prototype.getScrollBarColor = function () {}

/**
 * 获取滚动条宽度
 * @method twaver.canvas.interaction.ScrollInteraction.getScrollBarWidth
 * @return {Number} 返回滚动条宽度
 */
twaver.canvas.interaction.ScrollInteraction.prototype.getScrollBarWidth = function () {}

/**
 * 处理鼠标按下事件
 * @method twaver.canvas.interaction.ScrollInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.ScrollInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移出事件
 * @method twaver.canvas.interaction.ScrollInteraction.handle_mouseout
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.ScrollInteraction.prototype.handle_mouseout = function (e) {}

/**
 * 处理鼠标移入事件
 * @method twaver.canvas.interaction.ScrollInteraction.handle_mouseover
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.ScrollInteraction.prototype.handle_mouseover = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.canvas.interaction.ScrollInteraction.handleMouseMove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.ScrollInteraction.prototype.handleMouseMove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.canvas.interaction.ScrollInteraction.handleMouseUp
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.ScrollInteraction.prototype.handleMouseUp = function (e) {}

/**
 * 处理鼠标滚轮事件
 * @method twaver.canvas.interaction.ScrollInteraction.handleMouseWheel
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.ScrollInteraction.prototype.handleMouseWheel = function (e) {}

/**
 * 处理拓扑图大小变化事件
 * @method twaver.canvas.interaction.ScrollInteraction.handleViewRectChange
 * @param {Object} e 拓扑图事件
 */
twaver.canvas.interaction.ScrollInteraction.prototype.handleViewRectChange = function (e) {}

/**
 * 绘制圆角矩形
 * @method twaver.canvas.interaction.ScrollInteraction.paintRoundRect
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 * @param {String} fillStyle 填充色
 * @param {Number} alpha 透明度
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Number} w 宽度
 * @param {Number} h 高度
 * @param {Number} r 圆角半径
 */
twaver.canvas.interaction.ScrollInteraction.prototype.paintRoundRect = function (ctx, fillStyle, alpha, x, y, w, h, r) {}

/**
 * 沿x轴方向平移
 * @method twaver.canvas.interaction.ScrollInteraction.scrollXOffset
 * @param {Boolean} left 是否向左平移
 */
twaver.canvas.interaction.ScrollInteraction.prototype.scrollXOffset = function (left) {}

/**
 * 沿y轴方向平移
 * @method twaver.canvas.interaction.ScrollInteraction.scrollYOffset
 * @param {Boolean} up 是否向上平移
 */
twaver.canvas.interaction.ScrollInteraction.prototype.scrollYOffset = function (up) {}

/**
 * 重新绘制滚动条
 * @method twaver.canvas.interaction.ScrollInteraction.validateScrollBar
 */
twaver.canvas.interaction.ScrollInteraction.prototype.validateScrollBar = function () {}


/**
 * 选择网元交互模式，点击空白区域时清空选中，点击网元时选中网元，框选时，选中框选区域中的网元。
 * 框选时，选择模式（当框选网元时，哪些网元会被选中）会影响如何选择网元，默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @class twaver.canvas.interaction.SelectInteraction
 * @constructor
 * @extends twaver.canvas.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.SelectInteraction}
 */
twaver.canvas.interaction.SelectInteraction = function (network) {}

twaver.canvas.interaction.SelectInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

/**
 * 框选结束时，选中网元
 * @method twaver.canvas.interaction.SelectInteraction.end
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.SelectInteraction.prototype.end = function (e) {}

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.canvas.interaction.SelectInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.canvas.interaction.SelectInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理鼠标按下
 * @method twaver.canvas.interaction.SelectInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.SelectInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.canvas.interaction.SelectInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.SelectInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起
 * @method twaver.canvas.interaction.SelectInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.canvas.interaction.SelectInteraction.prototype.handle_mouseup = function (e) {}


/**
 * 触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
 * @class twaver.canvas.interaction.TouchInteraction
 * @constructor
 * @extends twaver.canvas.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.TouchInteraction}
 */
twaver.canvas.interaction.TouchInteraction = function (network) {}

twaver.canvas.interaction.TouchInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.canvas.interaction.TouchInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.canvas.interaction.TouchInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.canvas.interaction.TouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.interaction.TouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.canvas.interaction.TouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.interaction.TouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.canvas.interaction.TouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.canvas.interaction.TouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 连线对应的视图对象，用连线的样式在连线的起始和结束节点之间画一条线
 * @class twaver.canvas.LinkUI
 * @constructor
 * @extends twaver.network.ElementUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Link} element 连线
 * @return {twaver.network.LinkUI}
 */
twaver.canvas.LinkUI = function (network, element) {}

twaver.canvas.LinkUI.prototype = new twaver.network.ElementUI()

/**
 * 检查连线捆绑标签附件
 * @method twaver.canvas.LinkUI.checkLinkHandlerAttachment
 */
twaver.canvas.LinkUI.prototype.checkLinkHandlerAttachment = function () {}

/**
 * 创建连线内容区域，默认为热点周围一个像素的矩形
 * @method twaver.canvas.LinkUI.createBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.LinkUI.prototype.createBodyRect = function () {}

/**
 * 生成构成连线的点的集合
 * @method twaver.canvas.LinkUI.createLinkPoints
 * @return {twaver.List} 返回构成连线的点的集合
 */
twaver.canvas.LinkUI.prototype.createLinkPoints = function () {}

/**
 * 画线，drawBody方法调用此方法画线
 * @method twaver.canvas.LinkUI.drawLinePoints
 * @param {CanvasRenderingContext2D} g 画布渲染内容
 * @param {twaver.List} points 由点构成的集合
 * @param {Number} width 线条宽度
 * @param {String} color 线条颜色
 */
twaver.canvas.LinkUI.prototype.drawLinePoints = function (g, points, width, color) {}

/**
 * 获取连线的角度
 * @method twaver.canvas.LinkUI.getAngle
 * @return {Number} 返回连线的角度
 */
twaver.canvas.LinkUI.prototype.getAngle = function () {}

/**
 * 获取控制点，控制点用于劈分正交直角连线
 * @method twaver.canvas.LinkUI.getControlPoint
 * @return {Object} 返回控制点坐标，值为包含x和y属性的Object对象
 */
twaver.canvas.LinkUI.prototype.getControlPoint = function () {}

/**
 * 获取连线起始坐标
 * @method twaver.canvas.LinkUI.getFromPoint
 * @return {Object} 返回连线起始坐标，值为包含x和y属性的Object对象
 */
twaver.canvas.LinkUI.prototype.getFromPoint = function () {}

/**
 * 获取偏移后的起始坐标
 * @method twaver.canvas.LinkUI.getFromPosition
 * @param {Number} xoffset x轴偏移量
 * @param {Number} yoffset y轴偏移量
 * @return {Object} 返回偏移后的起始坐标，值为包含x和y属性的Object对象
 */
twaver.canvas.LinkUI.prototype.getFromPosition = function (xoffset, yoffset) {}

/**
 * 获取Link的长度
 * @method twaver.canvas.LinkUI.getLineLength
 * @return {Number} 返回Link的长度
 */
twaver.canvas.LinkUI.prototype.getLineLength = function () {}

/**
 * 获取连线捆绑标签附件
 * @method twaver.canvas.LinkUI.getLinkHandlerAttachment
 * @return {twaver.network.Attachment} 返回连线捆绑标签附件
 */
twaver.canvas.LinkUI.prototype.getLinkHandlerAttachment = function () {}

/**
 * 获取构成连线的点的集合
 * @method twaver.canvas.LinkUI.getLinkPoints
 * @return {twaver.List} 返回构成连线的点的集合
 */
twaver.canvas.LinkUI.prototype.getLinkPoints = function () {}

/**
 * 获取连线结束坐标
 * @method twaver.canvas.LinkUI.getToPoint
 * @return {Object} 返回连线结束坐标，值为包含x和y属性的Object对象
 */
twaver.canvas.LinkUI.prototype.getToPoint = function () {}

/**
 * 获取偏移后的结束坐标
 * @method twaver.canvas.LinkUI.getToPosition
 * @param {Number} xoffset x轴偏移量
 * @param {Number} yoffset y轴偏移量
 * @return {Object} 返回偏移后的结束坐标，值为包含x和y属性的Object对象
 */
twaver.canvas.LinkUI.prototype.getToPosition = function (xoffset, yoffset) {}

/**
 * 设置控制点，控制点用于劈分正交直角连线
 * @method twaver.canvas.LinkUI.setControlPoint
 * @param {Object} point 控制点坐标，值为包含x和y属性的Object对象
 */
twaver.canvas.LinkUI.prototype.setControlPoint = function (point) {}

/**
 * 刷新连线视图所占的区域
 * @method twaver.canvas.LinkUI.validateBodyBounds
 */
twaver.canvas.LinkUI.prototype.validateBodyBounds = function () {}


/**
 * 节点对应的视图对象，是其他网元对象（组、网格、多边形和子网等）的基类
 * @class twaver.canvas.NodeUI
 * @constructor
 * @extends twaver.canvas.ElementUI
 * @param {twaver.canvas.Network} network 拓扑
 * @param {twaver.Node} element 节点
 * @return {twaver.canvas.NodeUI}
 */
twaver.canvas.NodeUI = function (network, element) {}

twaver.canvas.NodeUI.prototype = new twaver.canvas.ElementUI()

/**
 * 创建节点内容区域，默认为网元节点的x坐标、y坐标、宽度和高度组成
 * @method twaver.canvas.NodeUI.createBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.canvas.NodeUI.prototype.createBodyRect = function () {}

/**
 * 用图片填充节点内容区域
 * @method twaver.canvas.NodeUI.drawDefaultBody
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.NodeUI.prototype.drawDefaultBody = function (ctx) {}

/**
 * 画边框
 * @method twaver.canvas.NodeUI.drawOuterBorder
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.NodeUI.prototype.drawOuterBorder = function (ctx) {}

/**
 * 画路径
 * @method twaver.canvas.NodeUI.drawPath
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 * @param {String} prefix 前缀
 * @param {Number} padding 内边距
 * @param {Array} pattern 线条虚线样式
 * @param {twaver.List} points 点集合
 * @param {twaver.List} segments 点与点之间连接类型集合
 * @param {Boolean} close 是否闭合
 */
twaver.canvas.NodeUI.prototype.drawPath = function (ctx, prefix, padding, pattern, points, segments, close) {}

/**
 * 节点被选中时，画选中边框
 * @method twaver.canvas.NodeUI.drawSelectBorder
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.NodeUI.prototype.drawSelectBorder = function (ctx) {}

/**
 * 当body.type为vector或default.vector时，用矢量图形填充节点内容
 * @method twaver.canvas.NodeUI.drawVectorBody
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.NodeUI.prototype.drawVectorBody = function (ctx) {}

/**
 * 获取网元视图主体边界
 * @method twaver.canvas.NodeUI.getDefaultBodyRect
 * @return {Object} 返回网元视图主体边界
 */
twaver.canvas.NodeUI.prototype.getDefaultBodyRect = function () {}

/**
 * 获取外边框边界
 * @method twaver.canvas.NodeUI.getOuterBorderRect
 * @return {Object} 返回外边框边界
 */
twaver.canvas.NodeUI.prototype.getOuterBorderRect = function () {}

/**
 * 获取路径边界
 * @method twaver.canvas.NodeUI.getPathRect
 * @param {String} prefix 前缀
 * @param {Number} padding 内边距
 * @return {Object} 返回路径边界
 */
twaver.canvas.NodeUI.prototype.getPathRect = function (prefix, padding) {}

/**
 * 获取选中边框边界
 * @method twaver.canvas.NodeUI.getSelectBorderRect
 * @return {Object} 返回选中边框边界
 */
twaver.canvas.NodeUI.prototype.getSelectBorderRect = function () {}

/**
 * 获取矢量边界
 * @method twaver.canvas.NodeUI.getVectorBody
 * @return {Object} 返回矢量边界
 */
twaver.canvas.NodeUI.prototype.getVectorBody = function () {}

/**
 * 重新计算网元主体边界
 * @method twaver.canvas.NodeUI.validateBodyBounds
 */
twaver.canvas.NodeUI.prototype.validateBodyBounds = function () {}


/**
 * 组件基类，TWaver所有组件基类
 * @class twaver.controls.ControlBase
 * @constructor
 * @extends twaver.PropertyChangeDispatcher
 * @return {twaver.controls.ControlBase}
 */
twaver.controls.ControlBase = function () {}

twaver.controls.ControlBase.prototype = new twaver.PropertyChangeDispatcher()

/**
 * 添加HTML元素缓存池
 * @method twaver.controls.ControlBase.addPool
 * @param {twaver.Pool} pool HTML元素缓存池
 */
twaver.controls.ControlBase.prototype.addPool = function (pool) {}

/**
 * 设置组件新的位置以及大小，twaver布局管理器（twaver.controls.SplitPane等）在大小变化时会调用此方法
 * @method twaver.controls.ControlBase.adjustBounds
 * @param {Object} rect 新的位置以及大小，值为包含x、y、width和height属性的Object对象
 */
twaver.controls.ControlBase.prototype.adjustBounds = function (rect) {}

/**
 * 获取组件的HTML元素
 * @method twaver.controls.ControlBase.getView
 * @return {HTMLDivElement} 返回组件的HTML元素
 */
twaver.controls.ControlBase.prototype.getView = function () {}

/**
 * 无效组件，在等待指定毫秒数后，刷新组件（调用validate方法）,当组件属性更改后，须调用此方法，让组件重画
 * @method twaver.controls.ControlBase.invalidate
 * @param {Number} [delay] 延迟刷新等待的毫秒数，可选，默认为twaver.Defaults.CALL_LATER_DELAY
 */
twaver.controls.ControlBase.prototype.invalidate = function (delay) {}

/**
 * 删除HTML元素缓存池
 * @method twaver.controls.ControlBase.removePool
 * @param {twaver.Pool} pool HTML元素缓存池
 */
twaver.controls.ControlBase.prototype.removePool = function (pool) {}

/**
 * 重画组件，调用invalidate后，此方法会被调用
 * @method twaver.controls.ControlBase.validate
 */
twaver.controls.ControlBase.prototype.validate = function () {}

/**
 * 调用validate方法后，此方法会被调用，子类须重载此方法以重画组件
 * @method twaver.controls.ControlBase.validateImpl
 */
twaver.controls.ControlBase.prototype.validateImpl = function () {}


/**
 * 列表控件触摸交互处理器
 * @class twaver.controls.ListBaseMSTouchInteraction
 * @constructor
 * @extends twaver.controls.ListBaseInteraction
 * @param {twaver.controls.ListBase} listBase 列表基类
 * @return {twaver.controls.ListBaseMSTouchInteraction}
 */
twaver.controls.ListBaseMSTouchInteraction = function (listBase) {}

twaver.controls.ListBaseMSTouchInteraction.prototype = new twaver.controls.ListBaseInteraction()

/**
 * 处理触摸结束事件
 * @method twaver.controls.ListBaseMSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.ListBaseMSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.controls.ListBaseMSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.ListBaseMSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.controls.ListBaseMSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.ListBaseMSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 属性页触摸交互处理器
 * @class twaver.controls.PropertySheetMSTouchInteraction
 * @constructor
 * @extends twaver.controls.PropertySheetInteraction
 * @param {twaver.controls.PropertySheet} propertySheet 属性页
 * @return {twaver.controls.PropertySheetMSTouchInteraction}
 */
twaver.controls.PropertySheetMSTouchInteraction = function (propertySheet) {}

twaver.controls.PropertySheetMSTouchInteraction.prototype = new twaver.controls.PropertySheetInteraction()

/**
 * 处理触摸结束事件
 * @method twaver.controls.PropertySheetMSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.PropertySheetMSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.controls.PropertySheetMSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.PropertySheetMSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.controls.PropertySheetMSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.controls.PropertySheetMSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 构造函数
 * 
 * 数据是TWaver中最基本的元素，它是所有网元的基类。它存在于数据容器中，被数据容器所管理。
 * 数据定义了拓扑元素中最基本的属性，比如ID，Name，Icon，Parent等。
 * 数据中还定义了事件派发的机制，当数据中的属性发生变化时，就会派发出属性更改的事件
 * @class twaver.Data
 * @constructor
 * @extends twaver.PropertyChangeDispatcher
 * @param {Object} [id] ID为数据对象的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是数据的ID，如果为Object类型，可以传入一个带数据属性的对象，比如： var data = new twaver.Data({      image:'tw130',      name:'TWaver Router',      clients:{'ip':'192.168.1.152'} });
 * @return {twaver.Data} 数据对象本身
 */
twaver.Data = function (id) {}

twaver.Data.prototype = new twaver.PropertyChangeDispatcher()

/**
 * 在父亲数据下添加孩子数据，index为添加的孩子数据的顺序号，树中同层下的孩子顺序可以通过这个参数来控制。默认为空，添加在最后一个位置
 * @method twaver.Data.addChild
 * @param {twaver.Data} child 添加的孩子数据
 * @param {Number} [index] 添加的孩子数据的顺序，树中的同层下的孩子顺序是通过这个参数来控制的。默认为空，也就是添加在最后一个位置
 * @return {Boolean} 添加成功返回true，否则为false
 */
twaver.Data.prototype.addChild = function (child, index) {}

/**
 * 清除这个数据下所有的孩子。注意，这个方法只是切断它们之间的父子关系，并不会从DataBox中将孩子数据删除
 * @method twaver.Data.clearChildren
 * @return {Boolean} true为操作成功，false为操作失败
 */
twaver.Data.prototype.clearChildren = function () {}

/**
 * 反序列化JSON数据到数据对象的自定义属性
 * @method twaver.Data.deserializeClientJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据
 * @param {String} clientProp 自定义的属性名
 */
twaver.Data.prototype.deserializeClientJson = function (serializer, json, clientProp) {}

/**
 * 反序列化XML数据到数据对象的自定义属性值
 * @method twaver.Data.deserializeClientXml
 * @param {twaver.XmlSerializer} serializer XML的序列化对象
 * @param {String} clientXML XML数据片段
 * @param {String} clientProp 自定义属性名
 */
twaver.Data.prototype.deserializeClientXml = function (serializer, clientXML, clientProp) {}

/**
 * 将JSON数据反序列化为数据对象
 * @method twaver.Data.deserializeJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据
 */
twaver.Data.prototype.deserializeJson = function (serializer, json) {}

/**
 * 反序列化JSON数据到数据对象的自身属性
 * @method twaver.Data.deserializePropertyJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据片段
 * @param {String} property 数据自身属性名
 */
twaver.Data.prototype.deserializePropertyJson = function (serializer, json, property) {}

/**
 * 反序列化XML数据到数据对象的自身属性
 * @method twaver.Data.deserializePropertyXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} propertyXML XML数据片段
 * @param {String} property 数据自身属性名
 */
twaver.Data.prototype.deserializePropertyXml = function (serializer, propertyXML, property) {}

/**
 * 将XML数据反序列化为数据对象
 * @method twaver.Data.deserializeXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} xml XML数据
 */
twaver.Data.prototype.deserializeXml = function (serializer, xml) {}

/**
 * 获取某个序号值上的孩子对象
 * @method twaver.Data.getChildAt
 * @param {Number} index 数据的顺序值
 * @return {twaver.Data} 孩子数据对象
 */
twaver.Data.prototype.getChildAt = function (index) {}

/**
 * 获取这个数据对象下的所有孩子对象
 * @method twaver.Data.getChildren
 * @return {twaver.List} 孩子对象的集合
 */
twaver.Data.prototype.getChildren = function () {}

/**
 * 获取数据对象下孩子的数量
 * @method twaver.Data.getChildrenSize
 * @return {Number} 孩子数据的数量
 */
twaver.Data.prototype.getChildrenSize = function () {}

/**
 * 获取自定义的属性，Client属性一般用于存放用户自定在数据对象上的属性
 * @method twaver.Data.getClient
 * @param {String} clientProp 自定义的属性名
 * @return {Object} 返回属性值
 */
twaver.Data.prototype.getClient = function (clientProp) {}

/**
 * 获取所有自定义的属性名。Client属性一般用于存放用户自定在数据对象上的属性
 * @method twaver.Data.getClientProperties
 * @return {twaver.List} 自定义属性的集合
 */
twaver.Data.prototype.getClientProperties = function () {}

/**
 * 得到这个数据的图标，图标是用于在树上显示的。
 * @method twaver.Data.getIcon
 * @return {String} 返回图标的名称
 */
twaver.Data.prototype.getIcon = function () {}

/**
 * 得到数据的ID，ID是用于唯一标识数据对象的，在同一个数据容器中的数据ID不能重复
 * @method twaver.Data.getId
 * @return {Object} 数据的ID编号
 */
twaver.Data.prototype.getId = function () {}

/**
 * 获取数据对象的名称
 * @method twaver.Data.getName
 * @return {String} 数据对象的名称值
 */
twaver.Data.prototype.getName = function () {}

/**
 * 获取数据对象的名称2
 * @method twaver.Data.getName2
 * @return {String} 返回数据对象的名称2
 */
twaver.Data.prototype.getName2 = function () {}

/**
 * 获取数据对象的父亲，每个数据对象只能有一个父亲节点
 * @method twaver.Data.getParent
 * @return {twaver.Data} 父亲对象
 */
twaver.Data.prototype.getParent = function () {}

/**
 * 获取数据对象的悬浮标签，悬浮标签是用于在视图上显示的，比如network，tree，table。悬浮标签在视图上显示片刻便会消失。
 * @method twaver.Data.getToolTip
 * @return {String} 数据对象的悬浮标签内容
 */
twaver.Data.prototype.getToolTip = function () {}

/**
 * 判断这个数据对象下是否有孩子对象
 * @method twaver.Data.hasChildren
 * @return {Boolean} true为有孩子对象，否则为false
 */
twaver.Data.prototype.hasChildren = function () {}

/**
 * IClient标志
 * @property IClient
 * @type Boolean
 */
twaver.Data.prototype.IClient = function () {}

/**
 * IData属性标志，默认为true，表明这个对象是IData的类型。
 * @property IData
 * @type Boolean
 */
twaver.Data.prototype.IData = function () {}

/**
 * 判断是否是指定数据对象的子孙节点
 * @method twaver.Data.isDescendantOf
 * @param {twaver.Data} data 指定的数据对象
 * @return {Boolean} true为子孙节点，否则为false
 */
twaver.Data.prototype.isDescendantOf = function (data) {}

/**
 * 判断是否是指定数据对象的父亲
 * @method twaver.Data.isParentOf
 * @param {twaver.Data} data 指定的数据对象
 * @return {Boolean} true为指定数据对象的父亲，否则为false
 */
twaver.Data.prototype.isParentOf = function (data) {}

/**
 * 判断是否和指定数据对象有关联关系，如果这个数据是指定数据对象的子孙或者指定数据对象是这个数据的子孙都称为有关联关系
 * @method twaver.Data.isRelatedTo
 * @param {twaver.Data} data 指定的数据对象
 * @return {Boolean} true为有关联关系，否则为false
 */
twaver.Data.prototype.isRelatedTo = function (data) {}

/**
 * 实例化数据对象
 * @method twaver.Data.newInstance
 * @return {twaver.Data} 数据对象
 */
twaver.Data.prototype.newInstance = function () {}

/**
 * 添加完孩子成功后会回调这个方法
 * @method twaver.Data.onChildAdded
 * @param {twaver.Data} child 添加的孩子对象
 * @param {Number} index 孩子添加的顺序
 */
twaver.Data.prototype.onChildAdded = function (child, index) {}

/**
 * 删除指定孩子对象时会回调这个方法
 * @method twaver.Data.onChildRemoved
 * @param {twaver.Data} child 删除的孩子对象
 * @param {Number} index 删除的孩子对象的顺序序号
 */
twaver.Data.prototype.onChildRemoved = function (child, index) {}

/**
 * 清除所有指定孩子对象时会回调这个方法
 * @method twaver.Data.onChildrenCleared
 * @param {twaver.List} children 清除的孩子对象集合
 */
twaver.Data.prototype.onChildrenCleared = function (children) {}

/**
 * 当数据对象的Client属性发生更改时会回调此方法
 * @method twaver.Data.onClientChanged
 * @param {String} clientProp 属性名
 * @param {String} oldValue 原值
 * @param {String} newValue 新值
 */
twaver.Data.prototype.onClientChanged = function (clientProp, oldValue, newValue) {}

/**
 * 当数据对象的父亲发生更改时回调此方法
 * @method twaver.Data.onParentChanged
 * @param {twaver.Data} oldParent 数据对象原来的父亲节点
 * @param {String} parent 数据对象新的父亲节点
 */
twaver.Data.prototype.onParentChanged = function (oldParent, parent) {}

/**
 * 删除指定的孩子对象
 * @method twaver.Data.removeChild
 * @param {twaver.Data} child 指定的孩子对象
 * @return {Boolean} 返回true表示删除成功，false为删除失败
 */
twaver.Data.prototype.removeChild = function (child) {}

/**
 * 序列化数据元素的自定义属性到JSON片段
 * @method twaver.Data.serializeClientJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} clientPrope 数据对象的自定义属性名
 * @param {twaver.Data} newInstance 序列化的数据对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.Data.prototype.serializeClientJson = function (serializer, clientPrope, newInstance, dataObject) {}

/**
 * 序列化数据元素的自定义属性到XML片段
 * @method twaver.Data.serializeClientXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} clientPrope 自定义的属性名称
 * @param {twaver.Data} newInstance 序列化的实例对象
 */
twaver.Data.prototype.serializeClientXml = function (serializer, clientPrope, newInstance) {}

/**
 * 将数据元素序列化成JSON片段
 * @method twaver.Data.serializeJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {twaver.Data} newInstance 序列化的实例对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.Data.prototype.serializeJson = function (serializer, newInstance, dataObject) {}

/**
 * 序列化数据元素属性到JSON片段
 * @method twaver.Data.serializePropertyJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} property 序列化的属性名称
 * @param {twaver.Data} newInstance 序列化的实例对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.Data.prototype.serializePropertyJson = function (serializer, property, newInstance, dataObject) {}

/**
 * 序列化数据元素属性到XML片段
 * @method twaver.Data.serializePropertyXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} property 数据元素的属性名称
 * @param {twaver.Data} newInstance 序列化的实例对象
 */
twaver.Data.prototype.serializePropertyXml = function (serializer, property, newInstance) {}

/**
 * 将数据元素序列化成XML片段
 * @method twaver.Data.serializeXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {twaver.Data} newInstance 序列化的实例对象
 */
twaver.Data.prototype.serializeXml = function (serializer, newInstance) {}

/**
 * 设置自定义的属性的值
 * @method twaver.Data.setClient
 * @param {String} clientProp 自定义属性的名称
 * @param {Object} newValue 自定义属性的值
 * @return {twaver.Data} 数据对象本身
 */
twaver.Data.prototype.setClient = function (clientProp, newValue) {}

/**
 * 设置数据元素的Icon。Icon和Image是类似的，但需要注意，Icon一般是在树上显示的，而Image是在network上显示的。
 * @method twaver.Data.setIcon
 * @param {String} v 数据元素的Icon名称
 */
twaver.Data.prototype.setIcon = function (v) {}

/**
 * 设置数据元素的名称
 * @method twaver.Data.setName
 * @param {String} v 数据元素的名称
 */
twaver.Data.prototype.setName = function (v) {}

/**
 * 设置数据对象的名称2
 * @method twaver.Data.setName2
 * @param {String} v 数据对象的名称2
 */
twaver.Data.prototype.setName2 = function (v) {}

/**
 * 设置数据元素的父亲，每个数据元素只能设置一个父亲
 * @method twaver.Data.setParent
 * @param {twaver.Data} parent 父亲数据元素
 */
twaver.Data.prototype.setParent = function (parent) {}

/**
 * 设置悬浮标签的显示内容。当鼠标移至数据元素时，视图上就会显示这个悬浮标签一段时间。
 * @method twaver.Data.setToolTip
 * @param {String} v 悬浮标签显示的内容
 */
twaver.Data.prototype.setToolTip = function (v) {}

/**
 * 根据指定的函数，将数据元素的孩子转换成List集合
 * @method twaver.Data.toChildren
 * @param {Function} matchFunction 指定的函数
 * @param {String} scope 函数的作用域，为空时指的是window
 * @return {String} 孩子数据的集合
 */
twaver.Data.prototype.toChildren = function (matchFunction, scope) {}


/**
 * 数据容器是用于管理数据对象的。它是一种不可见的对象，在TWaver的MVC框架中处于M（模型）层，它是所有视图的数据提供者，比如network，table，tree，propertySheet等。
 * 数据容器可以管理数据对象的增减事件变化，也可以监听到数据的属性事件变化。
 * 数据容器上包含着选择容器，用于管理所有选中的数据
 * @class twaver.DataBox
 * @constructor
 * @extends twaver.PropertyChangeDispatcher
 * @param {String} [name] 数据容器的名称
 * @return {twaver.DataBox}
 */
twaver.DataBox = function (name) {}

twaver.DataBox.prototype = new twaver.PropertyChangeDispatcher()

/**
 * 往数据容器中添加一个数据
 * @method twaver.DataBox.add
 * @param {twaver.Data} data 数据对象
 * @param {String} [index] 添加的数据次序。为空时，就将这个数据添加在最后的位置
 */
twaver.DataBox.prototype.add = function (data, index) {}

/**
 * 添加数据容器的数据增减变化的监听器。当数据容器中的数据发生改变时（增加，删除，清空），就可以通过此方法监听
 * @method twaver.DataBox.addDataBoxChangeListener
 * @param {Function} listener 网元更改事件的监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 * @param {Boolean} [ahead] 是否添加在最前方，如果为空，则添加在最后一个位置
 */
twaver.DataBox.prototype.addDataBoxChangeListener = function (listener, scope, ahead) {}

/**
 * 添加数据容器中数据的属性更改事件的监听器。当数据容器中的数据属性发生变化时，比如网元位置，网元名称等，都可以通过此方法来监听
 * @method twaver.DataBox.addDataPropertyChangeListener
 * @param {Function} listener 网元属性更改事件的监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 * @param {Boolean} [ahead] 是否添加在最前方，如果为空，则添加在最后一个位置
 */
twaver.DataBox.prototype.addDataPropertyChangeListener = function (listener, scope, ahead) {}

/**
 * 添加数据的层次变化的监听器，当数据层次发生时，比如上移，下移，移至顶部，底部，会派发出层次变化的事件，就可以通过这个方法来监听到
 * @method twaver.DataBox.addHierarchyChangeListener
 * @param {Function} listener 数据的层次变化的监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 * @param {Boolean} [ahead] 是否添加在最前方，如果为空，则添加在最后一个位置
 */
twaver.DataBox.prototype.addHierarchyChangeListener = function (listener, scope, ahead) {}

/**
 * 清空数据容器中所有的数据
 * @method twaver.DataBox.clear
 */
twaver.DataBox.prototype.clear = function () {}

/**
 * 判断是否包含某个数据
 * @method twaver.DataBox.contains
 * @param {twaver.Data} data 数据对象
 * @return {Boolean} true为包含，false不包含
 */
twaver.DataBox.prototype.contains = function (data) {}

/**
 * 通过数据ID判断是否包含某个数据
 * @method twaver.DataBox.containsById
 * @param {Object} id 数据的ID编号
 * @return {Boolean} true为包含，false不包含
 */
twaver.DataBox.prototype.containsById = function (id) {}

/**
 * 反序列化JSON数据到数据容器的Client属性
 * @method twaver.DataBox.deserializeClientJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据片段
 * @param {String} clientProp Client属性名
 */
twaver.DataBox.prototype.deserializeClientJson = function (serializer, json, clientProp) {}

/**
 * 反序列化XML数据到数据容器的Client属性
 * @method twaver.DataBox.deserializeClientXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} clientXML XML数据片段
 * @param {String} clientProp Client属性名
 */
twaver.DataBox.prototype.deserializeClientXml = function (serializer, clientXML, clientProp) {}

/**
 * 反序列化JSON数据到数据容器，包含数据容器的Client属性，Property属性。
 * @method twaver.DataBox.deserializeJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据
 */
twaver.DataBox.prototype.deserializeJson = function (serializer, json) {}

/**
 * 反序列化JSON数据到数据容器的自身（property）属性
 * @method twaver.DataBox.deserializePropertyJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据
 * @param {String} property 数据容器的属性名称
 */
twaver.DataBox.prototype.deserializePropertyJson = function (serializer, json, property) {}

/**
 * 反序列化XML数据到数据容器的自身（property）属性
 * @method twaver.DataBox.deserializePropertyXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} propertyXML XML数据
 * @param {String} property 数据容器的属性名称
 */
twaver.DataBox.prototype.deserializePropertyXml = function (serializer, propertyXML, property) {}

/**
 * 反序列化XML数据到数据容器，包含数据容器的Client数据，Property属性
 * @method twaver.DataBox.deserializeXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} xml XML数据
 */
twaver.DataBox.prototype.deserializeXml = function (serializer, xml) {}

/**
 * 遍历数据容器中的所有数据
 * @method twaver.DataBox.forEach
 * @param {Function} f 回调函数
 * @param {Object} [scope] 回调函数的作用域，为空时指的是window
 */
twaver.DataBox.prototype.forEach = function (f, scope) {}

/**
 * 广度优先遍历数据容器中指定数据的所有子孙数据。如果指定数据为空时，就会遍历数据容器中的所有数据
 * @method twaver.DataBox.forEachByBreadthFirst
 * @param {Function} callbackFunction 回调函数
 * @param {twaver.Data} [data] 遍历的数据对象，为空时会遍历数据容器中的所有数据
 * @param {Object} [scope] 回调函数的作用域，为空时指的是window
 */
twaver.DataBox.prototype.forEachByBreadthFirst = function (callbackFunction, data, scope) {}

/**
 * 深度优先遍历数据容器中指定数据的所有子孙数据。如果指定数据为空时，就会遍历数据容器中的所有数据
 * @method twaver.DataBox.forEachByDepthFirst
 * @param {Function} callbackFunction 回调函数
 * @param {twaver.Data} [data] 遍历的数据对象，为空时会遍历数据容器中的所有数据
 * @param {Object} [scope] 回调函数的作用域，为空时指的是window
 */
twaver.DataBox.prototype.forEachByDepthFirst = function (callbackFunction, data, scope) {}

/**
 * 反序遍历数据容器中所有数据
 * @method twaver.DataBox.forEachReverse
 * @param {Function} f 回调函数
 * @param {Object} [scope] 回调函数的作用域，为空时指的是window
 */
twaver.DataBox.prototype.forEachReverse = function (f, scope) {}

/**
 * 根据Client属性名，获取对应的属性值。
 * Client属性是用于存放用户自定义的属性
 * @method twaver.DataBox.getClient
 * @param {String} clientProp Client属性名称
 * @return {Object} Client属性值
 */
twaver.DataBox.prototype.getClient = function (clientProp) {}

/**
 * 获取数据容器中所有的Client属性名。
 * Client属性是用于存放用户自定义的属性
 * @method twaver.DataBox.getClientProperties
 * @return {twaver.List} 所有的Client属性名的集合
 */
twaver.DataBox.prototype.getClientProperties = function () {}

/**
 * 获取数据容器中某个序号上的数据
 * @method twaver.DataBox.getDataAt
 * @param {Number} index 数据的序号
 * @return {twaver.Data} 数据对象
 */
twaver.DataBox.prototype.getDataAt = function (index) {}

/**
 * 根据数据的ID编号获取对应的数据
 * @method twaver.DataBox.getDataById
 * @param {Object} id 数据的ID编号
 * @return {twaver.Data} 数据对象
 */
twaver.DataBox.prototype.getDataById = function (id) {}

/**
 * 获取数据容器中的所有数据
 * @method twaver.DataBox.getDatas
 * @return {twaver.List} 所有数据的集合
 */
twaver.DataBox.prototype.getDatas = function () {}

/**
 * 获取数据容器的图标，图标一般是用于在树上显示的
 * @method twaver.DataBox.getIcon
 * @return {String} 图标名称
 */
twaver.DataBox.prototype.getIcon = function () {}

/**
 * 获取数据容器的上限数。默认为-1，是没有上限的，一旦设置了上限数，当添加的数据数量大于这个上限数时，TWaver就会删除最旧的数据
 * @method twaver.DataBox.getLimit
 * @return {Number} 数据容器的上限数
 */
twaver.DataBox.prototype.getLimit = function () {}

/**
 * 获取数据容器的名称
 * @method twaver.DataBox.getName
 * @return {String} 数据容器的名称
 */
twaver.DataBox.prototype.getName = function () {}

/**
 * 获取数据容器中所有根下的数据。根下的数据指的是没有父亲的数据
 * @method twaver.DataBox.getRoots
 * @return {twaver.List} 所有根下数据的集合
 */
twaver.DataBox.prototype.getRoots = function () {}

/**
 * 获取数据容器中的选择容器。选择容器用于存放所有选中的数据对象，更详细的解释请参看SelectionModel类
 * @method twaver.DataBox.getSelectionModel
 * @return {twaver.SelectionModel} 选中数据的容器
 */
twaver.DataBox.prototype.getSelectionModel = function () {}

/**
 * 获取指定数据在兄弟数据中的序号
 * @method twaver.DataBox.getSiblingIndex
 * @param {twaver.Data} data 数据对象
 * @return {Number} 数据对象的序号
 */
twaver.DataBox.prototype.getSiblingIndex = function (data) {}

/**
 * 获取指定数据的所有兄弟数据
 * @method twaver.DataBox.getSiblings
 * @param {twaver.Data} data 指定的数据对象
 * @return {twaver.List} 所有兄弟数据的集合
 */
twaver.DataBox.prototype.getSiblings = function (data) {}

/**
 * 获取数据容器提示信息的内容，提示信息是在视图上显示的，当鼠标停留在数据容器上一段时间后，提示信息就消失
 * @method twaver.DataBox.getToolTip
 * @return {String} 提示信息中显示的内容
 */
twaver.DataBox.prototype.getToolTip = function () {}

/**
 * 处理数据容器中数据的属性更改的函数。TWaver内部使用
 * @method twaver.DataBox.handleDataPropertyChange
 * @param {Object} e 属性更改的事件对象，包含所有更改的信息
 */
twaver.DataBox.prototype.handleDataPropertyChange = function (e) {}

/**
 * 是否是IClient的标识
 * @property IClient
 * @type Boolean
 */
twaver.DataBox.prototype.IClient = function () {}

/**
 * 判断数据容器是否为空。当数据容器中没有数据时返回true，否则返回false
 * @method twaver.DataBox.isEmpty
 * @return {String} 当数据容器中没有数据时返回true，否则返回false
 */
twaver.DataBox.prototype.isEmpty = function () {}

/**
 * 将某个数据下移一个序号。一般数据容器和树或表格绑定时使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序
 * @method twaver.DataBox.moveDown
 * @param {twaver.Data} data 数据对象
 */
twaver.DataBox.prototype.moveDown = function (data) {}

/**
 * 将选中的网元下移一个位置。一般在树和表格中使用
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变。
 * @method twaver.DataBox.moveSelectionDown
 * @param {twaver.SelectionModel} [sm] 选择容器。如果为空，则使用的是DataBox中的SelectionModel
 */
twaver.DataBox.prototype.moveSelectionDown = function (sm) {}

/**
 * 将选中的网元下移至最底部。一般在树和表格中使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变。
 * @method twaver.DataBox.moveSelectionToBottom
 * @param {twaver.SelectionModel} [sm] 选择容器。如果为空，则使用的是DataBox中的SelectionModel
 */
twaver.DataBox.prototype.moveSelectionToBottom = function (sm) {}

/**
 * 将选中的网元上移至最顶部。一般在树和表格中使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
 * @method twaver.DataBox.moveSelectionToTop
 * @param {twaver.SelectionModel} [sm] 选择容器。如果为空，则使用的是DataBox中的SelectionModel
 */
twaver.DataBox.prototype.moveSelectionToTop = function (sm) {}

/**
 * 将选中的网元上移一个位置。一般在树和表格中使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
 * @method twaver.DataBox.moveSelectionUp
 * @param {twaver.SelectionModel} [sm] 选中网元的容器。如果为空，则使用的是DataBox中的SelectionModel
 */
twaver.DataBox.prototype.moveSelectionUp = function (sm) {}

/**
 * 将指定数据移到指定的序号上。一般在绑定的数据容器的树或表格中使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
 * @method twaver.DataBox.moveTo
 * @param {twaver.Data} data 数据对象
 * @param {Number} newIndex 数据的序号
 */
twaver.DataBox.prototype.moveTo = function (data, newIndex) {}

/**
 * 将某个数据移至最下方。一般数据容器和树或表格绑定时使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
 * @method twaver.DataBox.moveToBottom
 * @param {twaver.Data} data 数据对象
 */
twaver.DataBox.prototype.moveToBottom = function (data) {}

/**
 * 将某个数据移至最上方。一般数据容器和树或表格绑定时使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变。
 * @method twaver.DataBox.moveToTop
 * @param {twaver.Data} data 数据对象
 */
twaver.DataBox.prototype.moveToTop = function (data) {}

/**
 * 将某个数据上移一个序号。一般数据容器和树或表格绑定时使用。
 * 注意：数据是在同层次上移动，也就是在兄弟姐妹中的顺序会改变
 * @method twaver.DataBox.moveUp
 * @param {twaver.Data} data 数据对象
 */
twaver.DataBox.prototype.moveUp = function (data) {}

/**
 * 通过类名来实例化数据容器的对象。传入的参数是不固定的，可以是1-7个参数
 * @method twaver.DataBox.newInstance
 * @return {twaver.DataBox} 数据容器对象
 */
twaver.DataBox.prototype.newInstance = function () {}

/**
 * 当数据容器的Client属性发生变化时，回调此方法。默认的方法没有任何实现体，子类可以重写这个方法去处理自己的业务
 * @method twaver.DataBox.onClientChanged
 * @param {String} clientProp 更改的Client属性名称
 * @param {String} oldValue Client属性的原值
 * @param {String} newValue Client属性的新值
 */
twaver.DataBox.prototype.onClientChanged = function (clientProp, oldValue, newValue) {}

/**
 * 当数据容器中数据的属性发生变化时，回调此方法。默认的方法没有任何实现体，子类可以重写这个方法去处理自己的业务
 * @method twaver.DataBox.onDataPropertyChanged
 * @param {twaver.Data} data 更改属性的数据对象
 * @param {Object} e 属性更改的事件对象，包含所有更改的信息
 */
twaver.DataBox.prototype.onDataPropertyChanged = function (data, e) {}

/**
 * 从数据容器中删除某个数据
 * @method twaver.DataBox.remove
 * @param {twaver.Data} data 删除的数据对象
 */
twaver.DataBox.prototype.remove = function (data) {}

/**
 * 通过数据的ID编号从数据容器中删除该数据
 * @method twaver.DataBox.removeById
 * @param {Object} id 数据对象的编号
 */
twaver.DataBox.prototype.removeById = function (id) {}

/**
 * 移除数据容器的数据增减变化的监听器
 * @method twaver.DataBox.removeDataBoxChangeListener
 * @param {Function} listener 网元更改事件监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 */
twaver.DataBox.prototype.removeDataBoxChangeListener = function (listener, scope) {}

/**
 * 移除数据容器中数据的属性更改事件的监听器
 * @method twaver.DataBox.removeDataPropertyChangeListener
 * @param {Function} listener 网元属性更改事件的监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 */
twaver.DataBox.prototype.removeDataPropertyChangeListener = function (listener, scope) {}

/**
 * 从数据容器中删除第一个数据
 * @method twaver.DataBox.removeFirst
 * @param {Number} count 数据容器的大小
 */
twaver.DataBox.prototype.removeFirst = function (count) {}

/**
 * 移除数据的层次变化的监听器
 * @method twaver.DataBox.removeHierarchyChangeListener
 * @param {Function} listener 数据的层次变化的监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 */
twaver.DataBox.prototype.removeHierarchyChangeListener = function (listener, scope) {}

/**
 * 删除所有选中的数据
 * @method twaver.DataBox.removeSelection
 */
twaver.DataBox.prototype.removeSelection = function () {}

/**
 * 序列化数据容器的Client属性到JSON数据
 * @method twaver.DataBox.serializeClientJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} clientPrope Client属性名
 * @param {twaver.DataBox} newInstance 序列化的实例对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.DataBox.prototype.serializeClientJson = function (serializer, clientPrope, newInstance, dataObject) {}

/**
 * 序列化数据容器的Client属性到XML数据
 * @method twaver.DataBox.serializeClientXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} clientPrope Client属性名
 * @param {twaver.DataBox} newInstance 序列化的实例对象
 */
twaver.DataBox.prototype.serializeClientXml = function (serializer, clientPrope, newInstance) {}

/**
 * 序列化数据容器到JSON数据，包含数据容器的Client数据，Property属性
 * @method twaver.DataBox.serializeJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {twaver.DataBox} newInstance 序列化的实例对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.DataBox.prototype.serializeJson = function (serializer, newInstance, dataObject) {}

/**
 * 序列化数据容器的自身（property）属性到JSON数据
 * @method twaver.DataBox.serializePropertyJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} property 数据容器的属性名称
 * @param {twaver.DataBox} newInstance 数据容器实例对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.DataBox.prototype.serializePropertyJson = function (serializer, property, newInstance, dataObject) {}

/**
 * 序列化数据容器的自身（property）属性到XML数据
 * @method twaver.DataBox.serializePropertyXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} property 数据容器的属性名称
 * @param {twaver.DataBox} newInstance 数据容器的实例对象
 */
twaver.DataBox.prototype.serializePropertyXml = function (serializer, property, newInstance) {}

/**
 * 序列化数据容器到XML数据，包含数据容器的Client数据，Property属性
 * @method twaver.DataBox.serializeXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {Object} newInstance 数据容器的实例对象
 */
twaver.DataBox.prototype.serializeXml = function (serializer, newInstance) {}

/**
 * 设置指定的client属性对应的属性值。
 * client属性是用于存放用户自定义的属性
 * @method twaver.DataBox.setClient
 * @param {String} clientProp Client属性名称
 * @param {String} newValue Client属性的值
 * @return {twaver.DataBox} 数据容器对象本身
 */
twaver.DataBox.prototype.setClient = function (clientProp, newValue) {}

/**
 * 设置数据容器的图标，图标一般是用在树上显示的
 * @method twaver.DataBox.setIcon
 * @param {String} v 图标名称
 */
twaver.DataBox.prototype.setIcon = function (v) {}

/**
 * 设置数据容器的上限数。默认为-1，是没有显示的，一旦设置了上限数，当添加的数据数量大于这个上限数时，TWaver就会删除最旧的数据
 * @method twaver.DataBox.setLimit
 * @param {Number} limit 数据容器的上限数
 */
twaver.DataBox.prototype.setLimit = function (limit) {}

/**
 * 设置数据容器的名称
 * @method twaver.DataBox.setName
 * @param {String} v 数据容器的名称
 */
twaver.DataBox.prototype.setName = function (v) {}

/**
 * 设置数据容器的提示信息的内容，提示信息是在视图上显示的，当鼠标停留在数据容器上一段时间后，提示信息就消失
 * @method twaver.DataBox.setToolTip
 * @param {String} v 提示信息中显示的内容
 */
twaver.DataBox.prototype.setToolTip = function (v) {}

/**
 * 数据容器的大小，也就是容器中数据的数量
 * @method twaver.DataBox.size
 * @return {Number} 数据容器的大小
 */
twaver.DataBox.prototype.size = function () {}

/**
 * 将数据容器中的数据转成集合
 * @method twaver.DataBox.toDatas
 * @param {Function} matchFunction 转换成List集合时回调函数
 * @param {String} [scope] 回调函数的作用域，为空时指的是window
 * @return {twaver.List} 数据集合
 */
twaver.DataBox.prototype.toDatas = function (matchFunction, scope) {}


/**
 * 对指定拓扑进行旋转木马布局，鼠标移动时，网元按鼠标方向旋转移动
 * @class twaver.layout.CloudLayouter
 * @constructor
 * @extends twaver.PropertyChangeDispatcher
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.layout.CloudLayouter}
 */
twaver.layout.CloudLayouter = function (network) {}

twaver.layout.CloudLayouter.prototype = new twaver.PropertyChangeDispatcher()

/**
 * 将给定节点居中显示
 * @method twaver.layout.CloudLayouter.centerNode
 * @param {twaver.Node} [node] 节点
 */
twaver.layout.CloudLayouter.prototype.centerNode = function (node) {}

/**
 * 创建指定节点的控制点
 * @method twaver.layout.CloudLayouter.createControlPoint
 * @param {twaver.Node} node 节点
 * @return {Object} 返回包含x和y属性的Object对象
 */
twaver.layout.CloudLayouter.prototype.createControlPoint = function (node) {}

/**
 * 获取停止阀值，当转动速度低于最小值时，布局停止转动，默认值为0.01
 * @method twaver.layout.CloudLayouter.getCeaseLimit
 * @return {Number} 返回停止阀值
 */
twaver.layout.CloudLayouter.prototype.getCeaseLimit = function () {}

/**
 * 获取停止速度，布局以此速率停止转动，默认值为0.9
 * @method twaver.layout.CloudLayouter.getCeaseRate
 * @return {Number} 返回停止速度
 */
twaver.layout.CloudLayouter.prototype.getCeaseRate = function () {}

/**
 * 获取参与布局的节点数
 * @method twaver.layout.CloudLayouter.getCount
 * @return {Number} 返回参与布局的节点数
 */
twaver.layout.CloudLayouter.prototype.getCount = function () {}

/**
 * 获取布局时间间隔，单位为毫秒，默认值为50毫秒
 * @method twaver.layout.CloudLayouter.getInterval
 * @return {Number} 返回布局时间间隔，单位为毫秒
 */
twaver.layout.CloudLayouter.prototype.getInterval = function () {}

/**
 * 获取布局区域
 * @method twaver.layout.CloudLayouter.getLayoutRect
 * @return {Object} 返回布局区域，值为包含x、y、width和height属性的Object对象
 */
twaver.layout.CloudLayouter.prototype.getLayoutRect = function () {}

/**
 * 获取鼠标移动处理方法，默认值为null
 * @method twaver.layout.CloudLayouter.getMouseMoveFunction
 * @return {Function} 返回鼠标移动处理方法
 */
twaver.layout.CloudLayouter.prototype.getMouseMoveFunction = function () {}

/**
 * 获取鼠标移出处理方法，默认值为null
 * @method twaver.layout.CloudLayouter.getMouseOverFunction
 * @return {Function} 返回鼠标移出处理方法
 */
twaver.layout.CloudLayouter.prototype.getMouseOverFunction = function () {}

/**
 * 获取转动速率，默认值为2
 * @method twaver.layout.CloudLayouter.getMoveSpeed
 * @return {Number} 返回转动速率
 */
twaver.layout.CloudLayouter.prototype.getMoveSpeed = function () {}

/**
 * 获取关联的拓扑对象
 * @method twaver.layout.CloudLayouter.getNetwork
 * @return {twaver.network.Network} 返回关联的拓扑对象
 */
twaver.layout.CloudLayouter.prototype.getNetwork = function () {}

/**
 * 获取边界间隙大小比例，默认值为0.2
 * @method twaver.layout.CloudLayouter.getPercentPadding
 * @return {Number} 返回边界间隙大小比例
 */
twaver.layout.CloudLayouter.prototype.getPercentPadding = function () {}

/**
 * 获取更新节点函数，默认值为null
 * @method twaver.layout.CloudLayouter.getUpdateNodeFunction
 * @return {Function} 返回更新节点函数
 */
twaver.layout.CloudLayouter.prototype.getUpdateNodeFunction = function () {}

/**
 * 处理拓扑网元容器变化事件
 * @method twaver.layout.CloudLayouter.handleDataBoxChange
 * @param {Object} e 拓扑网元容器变化事件
 */
twaver.layout.CloudLayouter.prototype.handleDataBoxChange = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.layout.CloudLayouter.handleMouseMove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.layout.CloudLayouter.prototype.handleMouseMove = function (e) {}

/**
 * 处理鼠标进入事件
 * @method twaver.layout.CloudLayouter.handleMouseOver
 * @param {MouseEvent} e 鼠标事件
 */
twaver.layout.CloudLayouter.prototype.handleMouseOver = function (e) {}

/**
 * 处理拓扑属性变化事件
 * @method twaver.layout.CloudLayouter.handleNetworkPropertyChange
 * @param {Object} e 属性变化事件
 */
twaver.layout.CloudLayouter.prototype.handleNetworkPropertyChange = function (e) {}

/**
 * 处理拓扑大小变化事件
 * @method twaver.layout.CloudLayouter.handleResize
 * @param {Object} e 拓扑视图刷新事件
 */
twaver.layout.CloudLayouter.prototype.handleResize = function (e) {}

/**
 * 处理鼠标移出事件
 * @method twaver.layout.CloudLayouter.handleRollOut
 * @param {MouseEvent} e 鼠标事件
 */
twaver.layout.CloudLayouter.prototype.handleRollOut = function (e) {}

/**
 * 选中变化处理函数，默认调用centerNode方法将最后选中的网元居中显示
 * @method twaver.layout.CloudLayouter.handleSelectionChange
 * @param {Object} e 选中变化事件
 */
twaver.layout.CloudLayouter.prototype.handleSelectionChange = function (e) {}

/**
 * 获取布局是否处于激活状态
 * @method twaver.layout.CloudLayouter.isActive
 * @return {Boolean} 是否为激活状态
 */
twaver.layout.CloudLayouter.prototype.isActive = function () {}

/**
 * 判断节点是否在中心位置
 * @method twaver.layout.CloudLayouter.isAtCenter
 * @param {twaver.Node} node 节点
 * @param {Number} perspective 立体透视度
 * @param {Number} cx x坐标
 * @param {Number} cy y坐标
 * @param {Number} cz z坐标
 * @return {Boolean} 如果节点居中，则返回true，否则返回false
 */
twaver.layout.CloudLayouter.prototype.isAtCenter = function (node, perspective, cx, cy, cz) {}

/**
 * 获取是否以椭圆方式布局，默认值为true
 * @method twaver.layout.CloudLayouter.isElliptical
 * @return {Boolean} 返回是否以椭圆方式布局
 */
twaver.layout.CloudLayouter.prototype.isElliptical = function () {}

/**
 * 判断节点是否可以参与布局，不可见和不可移动的节点不参与布局
 * @method twaver.layout.CloudLayouter.isLayoutable
 * @param {twaver.Node} node 节点
 * @return {String} 如果节点可以参与布局，则返回true，否则返回false
 */
twaver.layout.CloudLayouter.prototype.isLayoutable = function (node) {}

/**
 * 获取网元容器变化后，是否重新加载网元，默认值为true
 * @method twaver.layout.CloudLayouter.isReloadOnDataBoxChanged
 * @return {Boolean} 返回网元容器变化后，是否重新加载网元
 */
twaver.layout.CloudLayouter.prototype.isReloadOnDataBoxChanged = function () {}

/**
 * 判断布局是否正在进行中
 * @method twaver.layout.CloudLayouter.isRunning
 * @return {Boolean} 如果正在布局，则返回true，否则返回false
 */
twaver.layout.CloudLayouter.prototype.isRunning = function () {}

/**
 * 获取拓扑大小变化后，是否重新布局，默认值为true
 * @method twaver.layout.CloudLayouter.isUpdateLayoutRectOnResized
 * @return {Boolean} 返回拓扑大小变化后，是否重新布局
 */
twaver.layout.CloudLayouter.prototype.isUpdateLayoutRectOnResized = function () {}

/**
 * 拓扑网元容器中网元变化后，重新加载网元
 * @method twaver.layout.CloudLayouter.reload
 */
twaver.layout.CloudLayouter.prototype.reload = function () {}

/**
 * 设置布局是否处于激活状态，鼠标移动会让布局处于激活状态
 * @method twaver.layout.CloudLayouter.setActive
 * @param {Boolean} v 是否为激活状态
 */
twaver.layout.CloudLayouter.prototype.setActive = function (v) {}

/**
 * 设置停止阀值，当转动速度低于阀值时，布局停止转动，默认值为0.01
 * @method twaver.layout.CloudLayouter.setCeaseLimit
 * @param {Number} v 停止阀值
 */
twaver.layout.CloudLayouter.prototype.setCeaseLimit = function (v) {}

/**
 * 设置停止速度，布局以此速率停止转动，默认值为0.9
 * @method twaver.layout.CloudLayouter.setCeaseRate
 * @param {Number} v 设置停止速度
 */
twaver.layout.CloudLayouter.prototype.setCeaseRate = function (v) {}

/**
 * 设置是否以椭圆方式布局，默认值为true
 * @method twaver.layout.CloudLayouter.setElliptical
 * @param {Boolean} v 是否以椭圆方式布局
 */
twaver.layout.CloudLayouter.prototype.setElliptical = function (v) {}

/**
 * 设置布局时间间隔，单位为毫秒，默认值为50毫秒
 * @method twaver.layout.CloudLayouter.setInterval
 * @param {Number} interval 布局时间间隔，单位为毫秒
 */
twaver.layout.CloudLayouter.prototype.setInterval = function (interval) {}

/**
 * 设置鼠标移动处理方法，默认值为null
 * @method twaver.layout.CloudLayouter.setMouseMoveFunction
 * @param {Function} v 鼠标移动处理方法
 */
twaver.layout.CloudLayouter.prototype.setMouseMoveFunction = function (v) {}

/**
 * 设置鼠标移出处理方法，默认值为null
 * @method twaver.layout.CloudLayouter.setMouseOverFunction
 * @param {Function} v 鼠标移出处理方法
 */
twaver.layout.CloudLayouter.prototype.setMouseOverFunction = function (v) {}

/**
 * 设置转动速率，默认值为2
 * @method twaver.layout.CloudLayouter.setMoveSpeed
 * @param {Number} v 转动速率
 */
twaver.layout.CloudLayouter.prototype.setMoveSpeed = function (v) {}

/**
 * 设置边界间隙大小比例，默认值为0.2
 * @method twaver.layout.CloudLayouter.setPercentPadding
 * @param {Number} v 边界间隙大小比例
 */
twaver.layout.CloudLayouter.prototype.setPercentPadding = function (v) {}

/**
 * 设置网元容器变化后，是否重新加载网元，默认值为true
 * @method twaver.layout.CloudLayouter.setReloadOnDataBoxChanged
 * @param {Boolean} v 网元容器变化后，是否重新加载网元
 */
twaver.layout.CloudLayouter.prototype.setReloadOnDataBoxChanged = function (v) {}

/**
 * 设置拓扑大小变化后，是否重新布局，默认值为true
 * @method twaver.layout.CloudLayouter.setUpdateLayoutRectOnResized
 * @param {Boolean} v 拓扑大小变化后，是否重新布局
 */
twaver.layout.CloudLayouter.prototype.setUpdateLayoutRectOnResized = function (v) {}

/**
 * 设置更新节点函数，默认值为null
 * @method twaver.layout.CloudLayouter.setUpdateNodeFunction
 * @param {Function} v 更新节点函数
 */
twaver.layout.CloudLayouter.prototype.setUpdateNodeFunction = function (v) {}

/**
 * 开始布局
 * @method twaver.layout.CloudLayouter.start
 * @param {Boolean} needToReset 是否重置布局
 */
twaver.layout.CloudLayouter.prototype.start = function (needToReset) {}

/**
 * 停止布局
 * @method twaver.layout.CloudLayouter.stop
 */
twaver.layout.CloudLayouter.prototype.stop = function () {}

/**
 * 更新布局区域
 * @method twaver.layout.CloudLayouter.updateLayoutRect
 * @param {Boolean} needToReload 是否重新加载
 */
twaver.layout.CloudLayouter.prototype.updateLayoutRect = function (needToReload) {}

/**
 * 更新网元节点
 * @method twaver.layout.CloudLayouter.updateNode
 * @param {twaver.Node} node 网元节点
 * @param {Number} zIndex z轴索引
 * @param {Number} count 网元数量
 * @param {Number} alpha 透明度
 */
twaver.layout.CloudLayouter.prototype.updateNode = function (node, zIndex, count, alpha) {}


/**
 * 告警附件和标签附件等的基类，用于显示文本附件信息
 * @class twaver.network.BasicAttachment
 * @constructor
 * @extends twaver.network.Attachment
 * @param {twaver.network.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在附件层，可选，默认为false
 * @return {twaver.network.BasicAttachment}
 */
twaver.network.BasicAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.network.BasicAttachment.prototype = new twaver.network.Attachment()

/**
 * 调用updateMeasure时，会调用此方法，用于重新计算contentRect和roundRect
 * @method twaver.network.BasicAttachment.calculateMeasure
 */
twaver.network.BasicAttachment.prototype.calculateMeasure = function () {}

/**
 * 获取附件画线时, 线条两端的样式, 默认值为twaver.Defaults.ATTACHMENT_CAP(butt), 可选值为butt(无端点)，round(圆头端点)或 square(方头端点)
 * @method twaver.network.BasicAttachment.getCap
 * @return {String} 返回画线时, 线条两端的样式
 */
twaver.network.BasicAttachment.prototype.getCap = function () {}

/**
 * 获取附件内容
 * @method twaver.network.BasicAttachment.getContent
 * @return {HTMLElement} 返回附件内容
 */
twaver.network.BasicAttachment.prototype.getContent = function () {}

/**
 * 获取附件内容高度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（20）
 * @method twaver.network.BasicAttachment.getContentHeight
 * @return {Number} 返回附件内容高度
 */
twaver.network.BasicAttachment.prototype.getContentHeight = function () {}

/**
 * 获取附件内容区域
 * @method twaver.network.BasicAttachment.getContentRect
 * @return {Object} 返回附件内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.BasicAttachment.prototype.getContentRect = function () {}

/**
 * 获取附件内容宽度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（30）
 * @method twaver.network.BasicAttachment.getContentWidth
 * @return {Number} 返回附件内容宽度
 */
twaver.network.BasicAttachment.prototype.getContentWidth = function () {}

/**
 * 获取附件圆角半径，默认值为twaver.Defaults.ATTACHMENT_CORNER_RADIUS（5）
 * @method twaver.network.BasicAttachment.getCornerRadius
 * @return {Number} 返回附件圆角半径
 */
twaver.network.BasicAttachment.prototype.getCornerRadius = function () {}

/**
 * 获取附件箭头的显示方位，一般用于告警冒泡，默认值为twaver.Defaults.ATTACHMENT_DIRECTION（right），可选值为：
 * aboveleft 附件箭头在上左角
 * aboveright 附件箭头在上右角
 * belowleft 附件箭头在下左角
 * belowright 附件箭头在下右角
 * leftabove 附件箭头在左上角
 * leftbelow 附件箭头在左下角
 * rightabove 附件箭头右右上角
 * rightbelow 附件箭头在右下角
 * above 附件箭头在上边
 * below 附件箭头在下边
 * left 附件箭头在左边
 * right 附件箭头在右边
 * @method twaver.network.BasicAttachment.getDirection
 * @return {String} 返回附件箭头的显示方位
 */
twaver.network.BasicAttachment.prototype.getDirection = function () {}

/**
 * 获取附件填充颜色，默认值为twaver.Defaults.ATTACHMENT_FILL_COLOR（#000000）
 * @method twaver.network.BasicAttachment.getFillColor
 * @return {String} 返回附件填充颜色
 */
twaver.network.BasicAttachment.prototype.getFillColor = function () {}

/**
 * 获取附件渐进色填充样式，默认值为twaver.Defaults.ATTACHMENT_GRADIENT（null），null表示不使用填充渐进色，可选值为：
 * linear.east, linear.north, linear.northeast, linear.northwest, linear.south, linear.southeast, linear.southwest, linear.west, none, radial.center, radial.east, radial.north, radial.northeast, radial.northwest, radial.south, radial.southeast, radial.southwest, radial.west, spread.antidiagonal, spread.diagonal, spread.east, spread.horizontal, spread.north, spread.south, spread.vertical, spread.west
 * @method twaver.network.BasicAttachment.getGradient
 * @return {String} 返回附件渐进色填充样式
 */
twaver.network.BasicAttachment.prototype.getGradient = function () {}

/**
 * 获取附件填充渐进色，默认值为twaver.Defaults.ATTACHMENT_GRADIENT_COLOR（#FFFFFF）
 * @method twaver.network.BasicAttachment.getGradientColor
 * @return {String} 返回附件填充渐进色
 */
twaver.network.BasicAttachment.prototype.getGradientColor = function () {}

/**
 * 获取附件画线时，线条连接点样式，默认值为twaver.Defaults.ATTACHMENT_JOIN（miter），可选值为bevel（斜角连接）round（圆角连接）和miter（尖角连接）
 * @method twaver.network.BasicAttachment.getJoin
 * @return {String} 返回附件画线时，线条连接点样式
 */
twaver.network.BasicAttachment.prototype.getJoin = function () {}

/**
 * 获取附件边框颜色，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_COLOR（#000000）
 * @method twaver.network.BasicAttachment.getOutlineColor
 * @return {String} 返回附件边框颜色
 */
twaver.network.BasicAttachment.prototype.getOutlineColor = function () {}

/**
 * 获取附件边框宽度，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH（-1），-1代表无边框
 * @method twaver.network.BasicAttachment.getOutlineWidth
 * @return {Number} 返回附件边框宽度
 */
twaver.network.BasicAttachment.prototype.getOutlineWidth = function () {}

/**
 * 获取附件内容和边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING（0）
 * @method twaver.network.BasicAttachment.getPadding
 * @return {Number} 返回附件内容和边界之间的间距
 */
twaver.network.BasicAttachment.prototype.getPadding = function () {}

/**
 * 获取附件内容和下边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_BOTTOM（0）
 * @method twaver.network.BasicAttachment.getPaddingBottom
 * @return {Number} 返回附件内容和下边界之间的间距
 */
twaver.network.BasicAttachment.prototype.getPaddingBottom = function () {}

/**
 * 获取附件内容和左边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_LEFT（0）
 * @method twaver.network.BasicAttachment.getPaddingLeft
 * @return {Number} 返回附件内容和左边界之间的间距
 */
twaver.network.BasicAttachment.prototype.getPaddingLeft = function () {}

/**
 * 获取附件内容和右边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_RIGHT（0）
 * @method twaver.network.BasicAttachment.getPaddingRight
 * @return {Number} 附件内容和右边界之间的间距
 */
twaver.network.BasicAttachment.prototype.getPaddingRight = function () {}

/**
 * 获取附件内容和上边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_TOP（0）
 * @method twaver.network.BasicAttachment.getPaddingTop
 * @return {Number} 返回附件内容和上边界之间的间距
 */
twaver.network.BasicAttachment.prototype.getPaddingTop = function () {}

/**
 * 获取附件箭头长度，默认值为twaver.Defaults.ATTACHMENT_POINTER_LENGTH（10）
 * @method twaver.network.BasicAttachment.getPointerLength
 * @return {Number} 返回附件箭头长度
 */
twaver.network.BasicAttachment.prototype.getPointerLength = function () {}

/**
 * 获取附件箭头宽度，默认值为ATTACHMENT_POINTER_WIDTH（8）
 * @method twaver.network.BasicAttachment.getPointerWidth
 * @return {Number} 返回附件箭头宽度
 */
twaver.network.BasicAttachment.prototype.getPointerWidth = function () {}

/**
 * 获取附件位置，默认值为twaver.Defaults.ATTACHMENT_POSITION（topright.topright）
 * 可选值为
 * hotspot
 * from
 * to
 * topleft.topleft
 * topleft.topright
 * top.top
 * topright.topleft
 * topright.topright
 * topleft
 * top
 * topright
 * topleft.bottomleft
 * topleft.bottomright
 * top.bottom
 * topright.bottomleft
 * topright.bottomright
 * left.left
 * left
 * left.right
 * center
 * right.left
 * right
 * right.right
 * bottomleft.topleft
 * bottomleft.topright
 * bottom.top
 * bottomright.topleft
 * bottomright.topright
 * bottomleft
 * bottom
 * bottomright
 * bottomleft.bottomleft
 * bottomleft.bottomright
 * bottom.bottom
 * bottomright.bottomleft
 * bottomright.bottomright
 * @method twaver.network.BasicAttachment.getPosition
 * @return {String} 返回附件位置
 */
twaver.network.BasicAttachment.prototype.getPosition = function () {}

/**
 * 获取附件圆角区域
 * @method twaver.network.BasicAttachment.getRoundRect
 * @return {Object} 返回附件圆角区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.BasicAttachment.prototype.getRoundRect = function () {}

/**
 * 获取附件x轴偏移量，默认值为twaver.Defaults.ATTACHMENT_XOFFSET（0）
 * @method twaver.network.BasicAttachment.getXOffset
 * @return {Number} 返回附件x轴偏移量
 */
twaver.network.BasicAttachment.prototype.getXOffset = function () {}

/**
 * 获取附件y轴偏移量，默认值为twaver.Defaults.ATTACHMENT_YOFFSET（0）
 * @method twaver.network.BasicAttachment.getYOffset
 * @return {Number} 返回附件y轴偏移量
 */
twaver.network.BasicAttachment.prototype.getYOffset = function () {}

/**
 * 获取附件是否填充背景，默认值为twaver.Defaults.ATTACHMENT_FILL（false）
 * @method twaver.network.BasicAttachment.isFill
 * @return {Number} 返回附件是否填充背景
 */
twaver.network.BasicAttachment.prototype.isFill = function () {}

/**
 * 获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE（false）
 * @method twaver.network.BasicAttachment.isShadowable
 * @return {Boolean} 返回附件选中时是否有阴影效果
 */
twaver.network.BasicAttachment.prototype.isShadowable = function () {}

/**
 * 设置附件内容
 * @method twaver.network.BasicAttachment.setContent
 * @param {HTMLElement} value 附件内容
 */
twaver.network.BasicAttachment.prototype.setContent = function (value) {}


/**
 * 编辑附件，用于显示网元是否可编辑。对于可编辑的节点，节点周围显示8个可以改变网元大小的小方块；对于多边形和折线，每个可移动点显示为黄色的小圆球
 * @class twaver.network.EditAttachment
 * @constructor
 * @extends twaver.network.Attachment
 * @param {twaver.network.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在附件层，可选，默认为false
 * @return {twaver.network.EditAttachment}
 */
twaver.network.EditAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.network.EditAttachment.prototype = new twaver.network.Attachment()


/**
 * 图标组附件，用于显示一组图标
 * @class twaver.network.IconsAttachment
 * @constructor
 * @extends twaver.network.Attachment
 * @param {twaver.network.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在附件层，可选，默认为false
 * @return {twaver.network.IconsAttachment}
 */
twaver.network.IconsAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.network.IconsAttachment.prototype = new twaver.network.Attachment()

/**
 * 获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE(false)
 * @method twaver.network.IconsAttachment.isShadowable
 * @return {Boolean} 返回附件选中时是否有阴影效果
 */
twaver.network.IconsAttachment.prototype.isShadowable = function () {}


/**
 * 创建节点交互处理器，当点击拓扑时，创建指定类型的节点，并设置此节点中心位置为点击位置，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建节点模式
 * @class twaver.network.interaction.CreateElementInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrElementFunction] 节点类型或者节点生成器方法，可选，默认值为twaver.Node
 * @return {twaver.network.interaction.CreateElementInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateElementInteraction(network, twaver.SubNetwork),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateElementInteraction(network,
 *     function (point) {
 *                     var element = new twaver.Node();
 *                     element.setName(element.getClassName());
 *                     element.setCenterLocation(point);
 *                     var parent = network.getElementAt(point);
 *                     if (parent && parent instanceof twaver.Group) {
 *                         element.setParent(parent);
 *                     }
 *                     return element;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.network.interaction.CreateElementInteraction = function (network, typeOrElementFunction) {}

twaver.network.interaction.CreateElementInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理鼠标按下事件
 * @method twaver.network.interaction.CreateElementInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.CreateElementInteraction.prototype.handle_mousedown = function (e) {}


/**
 * 创建连线交互处理器，在拓扑上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.network.interaction.CreateLinkInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrLinkFunction] 连线类型或者连线生成器方法，可选，默认值为twaver.Link
 * @return {twaver.network.interaction.CreateLinkInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateLinkInteraction(network, twaver.Link),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateLinkInteraction(network,
 *     function (fromNode, toNode) {
 *         var link = new twaver.Link();
 *         link.setFromNode(fromNode);
 *         link.setToNode(toNode);
 *         link.setStyle('link.color', 'red');
 *         return link;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.network.interaction.CreateLinkInteraction = function (network, typeOrLinkFunction) {}

twaver.network.interaction.CreateLinkInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 创建连线结束后，清除临时状态
 * @method twaver.network.interaction.CreateLinkInteraction.clear
 */
twaver.network.interaction.CreateLinkInteraction.prototype.clear = function () {}

/**
 * 创建连线
 * @method twaver.network.interaction.CreateLinkInteraction.createLink
 * @return {twaver.Link} 连线
 */
twaver.network.interaction.CreateLinkInteraction.prototype.createLink = function () {}

/**
 * 获取当前鼠标下的节点，并作为将要创建的连线的起始节点
 * @method twaver.network.interaction.CreateLinkInteraction.getFromNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回当前鼠标下的节点
 */
twaver.network.interaction.CreateLinkInteraction.prototype.getFromNode = function (e) {}

/**
 * 获取鼠标下的节点
 * @method twaver.network.interaction.CreateLinkInteraction.getNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回鼠标下的节点
 */
twaver.network.interaction.CreateLinkInteraction.prototype.getNode = function (e) {}

/**
 * 获取当前鼠标下的节点，并作为将要创建的连线的结束节点
 * @method twaver.network.interaction.CreateLinkInteraction.getToNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回当前鼠标下的节点
 */
twaver.network.interaction.CreateLinkInteraction.prototype.getToNode = function (e) {}

/**
 * 处理鼠标按下事件
 * @method twaver.network.interaction.CreateLinkInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.CreateLinkInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.network.interaction.CreateLinkInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.CreateLinkInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 选择了起始节点后，移动鼠标将动态画一根起始节点中心点到当前鼠标点的连线（宽度为Network#getEditLineWidth，颜色为Network#getEditLineColor）
 * @method twaver.network.interaction.CreateLinkInteraction.updateLine
 */
twaver.network.interaction.CreateLinkInteraction.prototype.updateLine = function () {}

/**
 * 鼠标移动到任意节点上时，此节点周围会显示边框（宽度为Network#getEditLineWidth，颜色为Network#getEditLineColor）
 * @method twaver.network.interaction.CreateLinkInteraction.updateMark
 */
twaver.network.interaction.CreateLinkInteraction.prototype.updateMark = function () {}


/**
 * 创建多边形交互处理器，在Network上多次点击不同位置设置多边形的points属性，最后双击结束，可以用Network#setCreateShapeNodeInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.network.interaction.CreateShapeNodeInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {String} network 拓扑
 * @param {Object} [typeOrShapeNodeFunction] 多边形类型或者多边形生成器方法，可选，默认值为twaver.ShapeNode
 * @return {twaver.network.interaction.CreateShapeNodeInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateShapeNodeInteraction(network, twaver.ShapeNode),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateShapeNodeInteraction(network,
 *     function (points) {
 *         var shapeNode = new twaver.ShapeNode();
 *         shapeNode.setStyle('vector.fill.color', 'red');
 *         if(points){
 *             shapeNode.setPoints(points);
 *         }
 *         return shapeNode;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.network.interaction.CreateShapeNodeInteraction = function (network, typeOrShapeNodeFunction) {}

twaver.network.interaction.CreateShapeNodeInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 创建多边形结束后，清除临时状态
 * @method twaver.network.interaction.CreateShapeNodeInteraction.clear
 */
twaver.network.interaction.CreateShapeNodeInteraction.prototype.clear = function () {}

/**
 * 处理鼠标按下
 * @method twaver.network.interaction.CreateShapeNodeInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.CreateShapeNodeInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.network.interaction.CreateShapeNodeInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.CreateShapeNodeInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 鼠标移动或者点击时，更新当前正在创建的多边形
 * @method twaver.network.interaction.CreateShapeNodeInteraction.updateMark
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.CreateShapeNodeInteraction.prototype.updateMark = function (e) {}


/**
 * 默认交互处理器，处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等交互动作
 * @class twaver.network.interaction.DefaultInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.DefaultInteraction}
 */
twaver.network.interaction.DefaultInteraction = function (network) {}

twaver.network.interaction.DefaultInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理键盘按下事件
 * @method twaver.network.interaction.DefaultInteraction.handle_keydown
 * @param {KeyEvent} e 键盘事件
 */
twaver.network.interaction.DefaultInteraction.prototype.handle_keydown = function (e) {}

/**
 * 处理鼠标按下
 * @method twaver.network.interaction.DefaultInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.DefaultInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标点击
 * @method twaver.network.interaction.DefaultInteraction.handleClicked
 * @param {MouseEvent} e 鼠标事件
 * @param {twaver.Element} element 网元
 */
twaver.network.interaction.DefaultInteraction.prototype.handleClicked = function (e, element) {}

/**
 * 处理鼠标双击
 * @method twaver.network.interaction.DefaultInteraction.handleDoubleClicked
 * @param {MouseEvent} e 鼠标事件
 * @param {twaver.Element} element 网元
 */
twaver.network.interaction.DefaultInteraction.prototype.handleDoubleClicked = function (e, element) {}


/**
 * 编辑交互处理器，处理改变网元大小、更改折线（ShapeLink）和多边形（ShapeNode）的轨迹等操作，可以用Network#setEditInteractions快速切换当前交互模式为编辑模式
 * @class twaver.network.interaction.EditInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选，默认值为false
 * @return {twaver.network.interaction.EditInteraction}
 */
twaver.network.interaction.EditInteraction = function (network, lazyMode) {}

twaver.network.interaction.EditInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 编辑结束后，清除临时状态
 * @method twaver.network.interaction.EditInteraction.clear
 */
twaver.network.interaction.EditInteraction.prototype.clear = function () {}

/**
 * 获取点离直线的距离
 * @method twaver.network.interaction.EditInteraction.getDistanceFromPointToLine
 * @param {Object} point 点
 * @param {Object} point1 线段顶点1
 * @param {Object} point2 线段顶点2
 * @return {Number} 返回点离直线的距离
 */
twaver.network.interaction.EditInteraction.prototype.getDistanceFromPointToLine = function (point, point1, point2) {}

/**
 * 获取指定点所在的边索引
 * @method twaver.network.interaction.EditInteraction.getPointIndex
 * @param {twaver.List} points 坐标点集合
 * @param {Object} point 点
 * @param {Boolean} closed 是否闭合
 * @return {Number} 返回指定点所在的边索引
 */
twaver.network.interaction.EditInteraction.prototype.getPointIndex = function (points, point, closed) {}

/**
 * 处理鼠标按下事件
 * @method twaver.network.interaction.EditInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.EditInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.network.interaction.EditInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.EditInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.network.interaction.EditInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.EditInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 获取指定点是否在线段上
 * @method twaver.network.interaction.EditInteraction.isPointOnLine
 * @param {Object} point 坐标点
 * @param {Object} point1 线段顶点1
 * @param {Object} point2 线段顶点2
 * @param {Number} width 线段宽度
 * @return {Boolean} 返回指定点是否在线段上
 */
twaver.network.interaction.EditInteraction.prototype.isPointOnLine = function (point, point1, point2, width) {}

/**
 * 显示旋转刻度
 * @method twaver.network.interaction.EditInteraction.showRotateScale
 */
twaver.network.interaction.EditInteraction.prototype.showRotateScale = function () {}


/**
 * 放大镜交互处理器
 * @class twaver.network.interaction.MagnifyInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Number} [scale] 缩放比例，可选，默认值为2
 * @param {Number} [xRadius] 水平半径，可选，默认值为100
 * @param {Number} [yRadius] 垂直半径，可选，默认值为100
 * @return {twaver.network.interaction.MagnifyInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.SelectInteraction(network),
 *     new twaver.network.interaction.MoveInteraction(network),
 *     new twaver.network.interaction.DefaultInteraction(network),
 *     new twaver.network.interaction.MagnifyInteraction(network)
 * ]);
 */
twaver.network.interaction.MagnifyInteraction = function (network, scale, xRadius, yRadius) {}

twaver.network.interaction.MagnifyInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 获取放大镜背景颜色
 * @method twaver.network.interaction.MagnifyInteraction.getBackgroundColor
 * @return {String} 返回放大镜背景颜色，默认为白色
 */
twaver.network.interaction.MagnifyInteraction.prototype.getBackgroundColor = function () {}

/**
 * 获取边框颜色
 * @method twaver.network.interaction.MagnifyInteraction.getBorderColor
 * @return {String} 返回边框颜色，默认为黑色
 */
twaver.network.interaction.MagnifyInteraction.prototype.getBorderColor = function () {}

/**
 * 获取边框宽度
 * @method twaver.network.interaction.MagnifyInteraction.getBorderWidth
 * @return {Number} 返回边框宽度，默认为1
 */
twaver.network.interaction.MagnifyInteraction.prototype.getBorderWidth = function () {}

/**
 * 获取放大镜形状
 * @method twaver.network.interaction.MagnifyInteraction.getShape
 * @return {String} 返回放大镜形状，默认为圆形
 */
twaver.network.interaction.MagnifyInteraction.prototype.getShape = function () {}

/**
 * 获取x轴半径
 * @method twaver.network.interaction.MagnifyInteraction.getXRadius
 * @return {Number} 返回x轴半径，默认为100
 */
twaver.network.interaction.MagnifyInteraction.prototype.getXRadius = function () {}

/**
 * 获取y轴半径
 * @method twaver.network.interaction.MagnifyInteraction.getYRadius
 * @return {Number} 返回y轴半径
 */
twaver.network.interaction.MagnifyInteraction.prototype.getYRadius = function () {}

/**
 * 获取缩放级别
 * @method twaver.network.interaction.MagnifyInteraction.getZoom
 * @return {Number} 返回缩放级别，默认为2
 */
twaver.network.interaction.MagnifyInteraction.prototype.getZoom = function () {}

/**
 * 处理鼠标移动
 * @method twaver.network.interaction.MagnifyInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.MagnifyInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 设置放大镜背景颜色
 * @method twaver.network.interaction.MagnifyInteraction.setBackgroundColor
 * @param {String} value 放大镜背景颜色
 */
twaver.network.interaction.MagnifyInteraction.prototype.setBackgroundColor = function (value) {}

/**
 * 设置边框颜色
 * @method twaver.network.interaction.MagnifyInteraction.setBorderColor
 * @param {String} value 边框颜色
 */
twaver.network.interaction.MagnifyInteraction.prototype.setBorderColor = function (value) {}

/**
 * 设置边框宽度
 * @method twaver.network.interaction.MagnifyInteraction.setBorderWidth
 * @param {Number} value 边框宽度
 */
twaver.network.interaction.MagnifyInteraction.prototype.setBorderWidth = function (value) {}

/**
 * 设置放大镜形状
 * @method twaver.network.interaction.MagnifyInteraction.setShape
 * @param {String} value 放大镜形状
 */
twaver.network.interaction.MagnifyInteraction.prototype.setShape = function (value) {}

/**
 * 设置x轴半径
 * @method twaver.network.interaction.MagnifyInteraction.setXRadius
 * @param {Number} value x轴半径
 */
twaver.network.interaction.MagnifyInteraction.prototype.setXRadius = function (value) {}

/**
 * 设置y轴半径
 * @method twaver.network.interaction.MagnifyInteraction.setYRadius
 * @param {Number} value y轴半径
 */
twaver.network.interaction.MagnifyInteraction.prototype.setYRadius = function (value) {}

/**
 * 设置缩放级别
 * @method twaver.network.interaction.MagnifyInteraction.setZoom
 * @param {Number} value 缩放级别
 */
twaver.network.interaction.MagnifyInteraction.prototype.setZoom = function (value) {}

/**
 * 鼠标移动时，更新放大镜内容
 * @method twaver.network.interaction.MagnifyInteraction.updateMark
 */
twaver.network.interaction.MagnifyInteraction.prototype.updateMark = function () {}


/**
 * 移动网元交互处理器
 * @class twaver.network.interaction.MoveInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选，默认值为false
 * @return {twaver.network.interaction.MoveInteraction}
 */
twaver.network.interaction.MoveInteraction = function (network, lazyMode) {}

twaver.network.interaction.MoveInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 移动结束后，清除临时状态
 * @method twaver.network.interaction.MoveInteraction.end
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.MoveInteraction.prototype.end = function (e) {}

/**
 * 处理键盘按下事件
 * @method twaver.network.interaction.MoveInteraction.handle_keydown
 * @param {KeyEvent} e 键盘事件
 */
twaver.network.interaction.MoveInteraction.prototype.handle_keydown = function (e) {}

/**
 * 处理键盘弹起事件
 * @method twaver.network.interaction.MoveInteraction.handle_keyup
 * @param {KeyEvent} e 键盘事件
 */
twaver.network.interaction.MoveInteraction.prototype.handle_keyup = function (e) {}

/**
 * 处理鼠标按下
 * @method twaver.network.interaction.MoveInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.MoveInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.network.interaction.MoveInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.MoveInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起，结束网元移动
 * @method twaver.network.interaction.MoveInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.MoveInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 获取是否正在设置父亲
 * @method twaver.network.interaction.MoveInteraction.isParenting
 * @return {Number} 返回是否正在设置父亲
 */
twaver.network.interaction.MoveInteraction.prototype.isParenting = function () {}

/**
 * 键盘P键按下时，鼠标移动到网元上时的处理函数
 * @method twaver.network.interaction.MoveInteraction.parentProcess
 * @param {MouseEvent} e 鼠标事件
 * @param {Boolean} released 键盘P键是否按下
 */
twaver.network.interaction.MoveInteraction.prototype.parentProcess = function (e, released) {}


/**
 * 触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
 * @class twaver.network.interaction.MSTouchInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.MSTouchInteraction}
 */
twaver.network.interaction.MSTouchInteraction = function (network) {}

twaver.network.interaction.MSTouchInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.network.interaction.MSTouchInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.network.interaction.MSTouchInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理鼠标移动事件
 * @method twaver.network.interaction.MSTouchInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.MSTouchInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.network.interaction.MSTouchInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.MSTouchInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 处理触摸结束事件
 * @method twaver.network.interaction.MSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.interaction.MSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.network.interaction.MSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.interaction.MSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.network.interaction.MSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.interaction.MSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 手抓图交互处理器，拖动拓扑时水平或垂直滚动拓扑，可以用Network#setPanInteractions快速切换当前拓扑交互模式为手抓图模式
 * @class twaver.network.interaction.PanInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.PanInteraction}
 */
twaver.network.interaction.PanInteraction = function (network) {}

twaver.network.interaction.PanInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理鼠标按下
 * @method twaver.network.interaction.PanInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.PanInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.network.interaction.PanInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.PanInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起
 * @method twaver.network.interaction.PanInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.PanInteraction.prototype.handle_mouseup = function (e) {}


/**
 * 选择网元交互模式，点击空白区域时清空选中，点击网元时选中网元，框选时，选中框选区域中的网元。
 * 框选时，选择模式（当框选网元时，哪些网元会被选中）会影响如何选择网元，默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @class twaver.network.interaction.SelectInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.SelectInteraction}
 */
twaver.network.interaction.SelectInteraction = function (network) {}

twaver.network.interaction.SelectInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 框选结束时，选中网元
 * @method twaver.network.interaction.SelectInteraction.end
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.SelectInteraction.prototype.end = function (e) {}

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.network.interaction.SelectInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.network.interaction.SelectInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理鼠标按下
 * @method twaver.network.interaction.SelectInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.SelectInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.network.interaction.SelectInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.SelectInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起
 * @method twaver.network.interaction.SelectInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.network.interaction.SelectInteraction.prototype.handle_mouseup = function (e) {}


/**
 * 触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
 * @class twaver.network.interaction.TouchInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.TouchInteraction}
 */
twaver.network.interaction.TouchInteraction = function (network) {}

twaver.network.interaction.TouchInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.network.interaction.TouchInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.network.interaction.TouchInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.network.interaction.TouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.interaction.TouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.network.interaction.TouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.interaction.TouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.network.interaction.TouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.network.interaction.TouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 连线对应的视图对象，用连线的样式在连线的起始和结束节点之间画一条线
 * @class twaver.network.LinkUI
 * @constructor
 * @extends twaver.network.ElementUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Link} element 连线
 * @return {twaver.network.LinkUI}
 */
twaver.network.LinkUI = function (network, element) {}

twaver.network.LinkUI.prototype = new twaver.network.ElementUI()

/**
 * 检查连线捆绑标签附件
 * @method twaver.network.LinkUI.checkLinkHandlerAttachment
 */
twaver.network.LinkUI.prototype.checkLinkHandlerAttachment = function () {}

/**
 * 创建连线内容区域，默认为热点周围一个像素的矩形
 * @method twaver.network.LinkUI.createBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.LinkUI.prototype.createBodyRect = function () {}

/**
 * 生成构成连线的点的集合
 * @method twaver.network.LinkUI.createLinkPoints
 * @return {twaver.List} 返回构成连线的点的集合
 */
twaver.network.LinkUI.prototype.createLinkPoints = function () {}

/**
 * 用连线的各种样式（link.width连线宽度、link.color连线颜色等）画连线
 * @method twaver.network.LinkUI.drawBody
 */
twaver.network.LinkUI.prototype.drawBody = function () {}

/**
 * 画线，drawBody方法调用此方法画线
 * @method twaver.network.LinkUI.drawLinePoints
 * @param {CanvasRenderingContext2D} g 画布渲染内容
 * @param {twaver.List} points 由点构成的集合
 * @param {Number} width 线条宽度
 * @param {String} color 线条颜色
 */
twaver.network.LinkUI.prototype.drawLinePoints = function (g, points, width, color) {}

/**
 * 获取控制点，控制点用于劈分正交直角连线
 * @method twaver.network.LinkUI.getControlPoint
 * @return {Object} 返回控制点坐标，值为包含x和y属性的Object对象
 */
twaver.network.LinkUI.prototype.getControlPoint = function () {}

/**
 * 获取连线起始坐标
 * @method twaver.network.LinkUI.getFromPoint
 * @return {Object} 返回连线起始坐标，值为包含x和y属性的Object对象
 */
twaver.network.LinkUI.prototype.getFromPoint = function () {}

/**
 * 获取偏移后的起始坐标
 * @method twaver.network.LinkUI.getFromPosition
 * @param {Number} xoffset x轴偏移量
 * @param {Number} yoffset y轴偏移量
 * @return {Object} 返回偏移后的起始坐标，值为包含x和y属性的Object对象
 */
twaver.network.LinkUI.prototype.getFromPosition = function (xoffset, yoffset) {}

/**
 * 获取Link的长度
 * @method twaver.network.LinkUI.getLineLength
 * @return {Number} 返回Link的长度
 */
twaver.network.LinkUI.prototype.getLineLength = function () {}

/**
 * 获取连线捆绑标签附件
 * @method twaver.network.LinkUI.getLinkHandlerAttachment
 * @return {twaver.network.Attachment} 返回连线捆绑标签附件
 */
twaver.network.LinkUI.prototype.getLinkHandlerAttachment = function () {}

/**
 * 获取构成连线的点的集合
 * @method twaver.network.LinkUI.getLinkPoints
 * @return {twaver.List} 返回构成连线的点的集合
 */
twaver.network.LinkUI.prototype.getLinkPoints = function () {}

/**
 * 获取连线结束坐标
 * @method twaver.network.LinkUI.getToPoint
 * @return {Object} 返回连线结束坐标，值为包含x和y属性的Object对象
 */
twaver.network.LinkUI.prototype.getToPoint = function () {}

/**
 * 获取偏移后的结束坐标
 * @method twaver.network.LinkUI.getToPosition
 * @param {Number} xoffset x轴偏移量
 * @param {Number} yoffset y轴偏移量
 * @return {Object} 返回偏移后的结束坐标，值为包含x和y属性的Object对象
 */
twaver.network.LinkUI.prototype.getToPosition = function (xoffset, yoffset) {}

/**
 * 设置控制点，控制点用于劈分正交直角连线
 * @method twaver.network.LinkUI.setControlPoint
 * @param {Object} point 控制点坐标，值为包含x和y属性的Object对象
 */
twaver.network.LinkUI.prototype.setControlPoint = function (point) {}


/**
 * 节点对应的视图对象，是其他网元对象（组、网格、多边形和子网等）的基类
 * @class twaver.network.NodeUI
 * @constructor
 * @extends twaver.network.ElementUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Node} element 节点
 * @return {twaver.network.NodeUI}
 */
twaver.network.NodeUI = function (network, element) {}

twaver.network.NodeUI.prototype = new twaver.network.ElementUI()

/**
 * 创建节点内容区域，默认为网元节点的x坐标、y坐标、宽度和高度组成
 * @method twaver.network.NodeUI.createBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.network.NodeUI.prototype.createBodyRect = function () {}

/**
 * 画节点内容，根据body.type样式属性填充不同内容，body.type样式可选值为：
 * default 对应drawDefaultBody方法，用图片填充节点内容区域
 * vector 对应drawVectorBody方法，用矢量图形填充节点内容区域
 * default.vector 先画图片，再画矢量图形
 * vector.default 先画矢量图形，再画图片
 * 
 * @method twaver.network.NodeUI.drawBody
 */
twaver.network.NodeUI.prototype.drawBody = function () {}

/**
 * 用图片填充节点内容区域
 * @method twaver.network.NodeUI.drawDefaultBody
 */
twaver.network.NodeUI.prototype.drawDefaultBody = function () {}

/**
 * 画边框
 * @method twaver.network.NodeUI.drawOuterBorder
 */
twaver.network.NodeUI.prototype.drawOuterBorder = function () {}

/**
 * 节点被选中时，画选中边框
 * @method twaver.network.NodeUI.drawSelectBorder
 */
twaver.network.NodeUI.prototype.drawSelectBorder = function () {}

/**
 * 当body.type为vector或default.vector时，用矢量图形填充节点内容
 * @method twaver.network.NodeUI.drawVectorBody
 */
twaver.network.NodeUI.prototype.drawVectorBody = function () {}


/**
 * 告警附件和标签附件等的基类，用于显示文本信息的附件
 * @class twaver.vector.BasicAttachment
 * @constructor
 * @extends twaver.canvas.Attachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.BasicAttachment}
 */
twaver.vector.BasicAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.vector.BasicAttachment.prototype = new twaver.canvas.Attachment()

/**
 * 计算附件位置和大小
 * @method twaver.vector.BasicAttachment.calculateMeasure
 */
twaver.vector.BasicAttachment.prototype.calculateMeasure = function () {}

/**
 * 获取附件画线时线条两端的样式, 默认值为twaver.Defaults.ATTACHMENT_CAP(butt), 可选值为butt(无端点)，round(圆头端点)或 square(方头端点)
 * @method twaver.vector.BasicAttachment.getCap
 * @return {String} 返回画线时, 线条两端的样式
 */
twaver.vector.BasicAttachment.prototype.getCap = function () {}

/**
 * 获取附件内容高度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT(20)
 * @method twaver.vector.BasicAttachment.getContentHeight
 * @return {Number} 返回附件内容高度
 */
twaver.vector.BasicAttachment.prototype.getContentHeight = function () {}

/**
 * 获取附件内容区域
 * @method twaver.vector.BasicAttachment.getContentRect
 * @return {Object} 返回附件内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.BasicAttachment.prototype.getContentRect = function () {}

/**
 * 获取附件内容宽度，默认值为twaver.Defaults.ATTACHMENT_CONTENT_HEIGHT（30）
 * @method twaver.vector.BasicAttachment.getContentWidth
 * @return {Number} 返回附件内容宽度
 */
twaver.vector.BasicAttachment.prototype.getContentWidth = function () {}

/**
 * 获取附件圆角半径，默认值为twaver.Defaults.ATTACHMENT_CORNER_RADIUS（5）
 * @method twaver.vector.BasicAttachment.getCornerRadius
 * @return {Number} 返回附件圆角半径
 */
twaver.vector.BasicAttachment.prototype.getCornerRadius = function () {}

/**
 * 获取附件箭头的显示方位，一般用于告警冒泡，默认值为twaver.Defaults.ATTACHMENT_DIRECTION（right），可选值为：
 * aboveleft 附件箭头在上左角
 * aboveright 附件箭头在上右角
 * belowleft 附件箭头在下左角
 * belowright 附件箭头在下右角
 * leftabove 附件箭头在左上角
 * leftbelow 附件箭头在左下角
 * rightabove 附件箭头在右上角
 * rightbelow 附件箭头在右下角
 * above 附件箭头在上边
 * below 附件箭头在下边
 * left 附件箭头在左边
 * right 附件箭头在右边
 * @method twaver.vector.BasicAttachment.getDirection
 * @return {String} 返回附件箭头的显示方位
 */
twaver.vector.BasicAttachment.prototype.getDirection = function () {}

/**
 * 获取附件填充颜色，默认值为twaver.Defaults.ATTACHMENT_FILL_COLOR（#000000）
 * @method twaver.vector.BasicAttachment.getFillColor
 * @return {String} 返回附件填充颜色
 */
twaver.vector.BasicAttachment.prototype.getFillColor = function () {}

/**
 * 获取附件渐进色填充样式，默认值为twaver.Defaults.ATTACHMENT_GRADIENT（null），null表示不使用填充渐进色，可选值为：
 * linear.east, linear.north, linear.northeast, linear.northwest, linear.south, linear.southeast, linear.southwest, linear.west, none, radial.center, radial.east, radial.north, radial.northeast, radial.northwest, radial.south, radial.southeast, radial.southwest, radial.west, spread.antidiagonal, spread.diagonal, spread.east, spread.horizontal, spread.north, spread.south, spread.vertical, spread.west
 * @method twaver.vector.BasicAttachment.getGradient
 * @return {String} 返回附件渐进色填充样式
 */
twaver.vector.BasicAttachment.prototype.getGradient = function () {}

/**
 * 获取附件填充渐进色，默认值为twaver.Defaults.ATTACHMENT_GRADIENT_COLOR（#FFFFFF）
 * @method twaver.vector.BasicAttachment.getGradientColor
 * @return {String} 返回附件填充渐进色
 */
twaver.vector.BasicAttachment.prototype.getGradientColor = function () {}

/**
 * 获取附件在画线时的线条连接点样式，默认值为twaver.Defaults.ATTACHMENT_JOIN（miter），可选值为bevel（斜角连接）round（圆角连接）和miter（尖角连接）
 * @method twaver.vector.BasicAttachment.getJoin
 * @return {String} 返回附件在画线时的线条连接点样式
 */
twaver.vector.BasicAttachment.prototype.getJoin = function () {}

/**
 * 获取附件边框颜色，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_COLOR（#000000）
 * @method twaver.vector.BasicAttachment.getOutlineColor
 * @return {String} 返回附件边框颜色
 */
twaver.vector.BasicAttachment.prototype.getOutlineColor = function () {}

/**
 * 获取附件边框宽度，默认值为twaver.Defaults.ATTACHMENT_OUTLINE_WIDTH（-1），-1代表无边框
 * @method twaver.vector.BasicAttachment.getOutlineWidth
 * @return {Number} 返回附件边框宽度
 */
twaver.vector.BasicAttachment.prototype.getOutlineWidth = function () {}

/**
 * 获取附件内容和边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING（0）
 * @method twaver.vector.BasicAttachment.getPadding
 * @return {Number} 返回附件内容和边界之间的间距
 */
twaver.vector.BasicAttachment.prototype.getPadding = function () {}

/**
 * 获取附件内容和下边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_BOTTOM（0）
 * @method twaver.vector.BasicAttachment.getPaddingBottom
 * @return {Number} 返回附件内容和下边界之间的间距
 */
twaver.vector.BasicAttachment.prototype.getPaddingBottom = function () {}

/**
 * 获取附件内容和左边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_LEFT（0）
 * @method twaver.vector.BasicAttachment.getPaddingLeft
 * @return {Number} 返回附件内容和左边界之间的间距
 */
twaver.vector.BasicAttachment.prototype.getPaddingLeft = function () {}

/**
 * 获取附件内容和右边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_RIGHT（0）
 * @method twaver.vector.BasicAttachment.getPaddingRight
 * @return {Number} 附件内容和右边界之间的间距
 */
twaver.vector.BasicAttachment.prototype.getPaddingRight = function () {}

/**
 * 获取附件内容和上边界之间的间距，默认值为twaver.Defaults.ATTACHMENT_PADDING_TOP（0）
 * @method twaver.vector.BasicAttachment.getPaddingTop
 * @return {Number} 返回附件内容和上边界之间的间距
 */
twaver.vector.BasicAttachment.prototype.getPaddingTop = function () {}

/**
 * 获取附件箭头长度，默认值为twaver.Defaults.ATTACHMENT_POINTER_LENGTH（10）
 * @method twaver.vector.BasicAttachment.getPointerLength
 * @return {Number} 返回附件箭头长度
 */
twaver.vector.BasicAttachment.prototype.getPointerLength = function () {}

/**
 * 获取附件箭头宽度，默认值为ATTACHMENT_POINTER_WIDTH（8）
 * @method twaver.vector.BasicAttachment.getPointerWidth
 * @return {Number} 返回附件箭头宽度
 */
twaver.vector.BasicAttachment.prototype.getPointerWidth = function () {}

/**
 * 获取附件位置，默认值为twaver.Defaults.ATTACHMENT_POSITION（topright.topright）
 * 可选值为
 * hotspot
 * from
 * to
 * topleft.topleft
 * topleft.topright
 * top.top
 * topright.topleft
 * topright.topright
 * topleft
 * top
 * topright
 * topleft.bottomleft
 * topleft.bottomright
 * top.bottom
 * topright.bottomleft
 * topright.bottomright
 * left.left
 * left
 * left.right
 * center
 * right.left
 * right
 * right.right
 * bottomleft.topleft
 * bottomleft.topright
 * bottom.top
 * bottomright.topleft
 * bottomright.topright
 * bottomleft
 * bottom
 * bottomright
 * bottomleft.bottomleft
 * bottomleft.bottomright
 * bottom.bottom
 * bottomright.bottomleft
 * bottomright.bottomright
 * @method twaver.vector.BasicAttachment.getPosition
 * @return {String} 返回附件位置
 */
twaver.vector.BasicAttachment.prototype.getPosition = function () {}

/**
 * 获取附件圆角区域
 * @method twaver.vector.BasicAttachment.getRoundRect
 * @return {Object} 返回附件圆角区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.BasicAttachment.prototype.getRoundRect = function () {}

/**
 * 获取附件x轴偏移量，默认值为twaver.Defaults.ATTACHMENT_XOFFSET（0）
 * @method twaver.vector.BasicAttachment.getXOffset
 * @return {Number} 返回附件的x轴偏移量
 */
twaver.vector.BasicAttachment.prototype.getXOffset = function () {}

/**
 * 获取附件y轴偏移量，默认值为twaver.Defaults.ATTACHMENT_YOFFSET（0）
 * @method twaver.vector.BasicAttachment.getYOffset
 * @return {Number} 返回附件y轴偏移量
 */
twaver.vector.BasicAttachment.prototype.getYOffset = function () {}

/**
 * 获取附件是否有填充背景，默认值为twaver.Defaults.ATTACHMENT_FILL（false）
 * @method twaver.vector.BasicAttachment.isFill
 * @return {Boolean} 返回附件是否有填充背景
 */
twaver.vector.BasicAttachment.prototype.isFill = function () {}

/**
 * 获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE（false）
 * @method twaver.vector.BasicAttachment.isShadowable
 * @return {Boolean} 返回附件选中时是否有阴影效果
 */
twaver.vector.BasicAttachment.prototype.isShadowable = function () {}


/**
 * 编辑附件，用于显示网元是否可编辑。对于可编辑的节点，节点周围显示8个可以改变网元大小的小方块；对于多边形和折线，每个可移动点显示为黄色的小圆球
 * @class twaver.vector.EditAttachment
 * @constructor
 * @extends twaver.canvas.Attachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.EditAttachment}
 */
twaver.vector.EditAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.vector.EditAttachment.prototype = new twaver.canvas.Attachment()

/**
 * 画ShapeLink和ShapeNode的控制点
 * @method twaver.vector.EditAttachment.paintEditPoints
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.EditAttachment.prototype.paintEditPoints = function (ctx) {}

/**
 * 画8个更改网元大小的控制点
 * @method twaver.vector.EditAttachment.paintResizingPoints
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.EditAttachment.prototype.paintResizingPoints = function (ctx) {}

/**
 * 绘制旋转点
 * @method twaver.vector.EditAttachment.paintRotatePoints
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.EditAttachment.prototype.paintRotatePoints = function (ctx) {}


/**
 * 图标组附件，用于显示一组图标
 * @class twaver.vector.IconsAttachment
 * @constructor
 * @extends twaver.canvas.Attachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.IconsAttachment}
 */
twaver.vector.IconsAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.vector.IconsAttachment.prototype = new twaver.canvas.Attachment()

/**
 * 获取附件选中时是否有阴影效果，默认值为twaver.Defaults.ATTACHMENT_SHADOWABLE(false)
 * @method twaver.vector.IconsAttachment.isShadowable
 * @return {Boolean} 返回附件选中时是否有阴影效果
 */
twaver.vector.IconsAttachment.prototype.isShadowable = function () {}


/**
 * 创建节点交互处理器，当点击拓扑时，创建指定类型的节点，并设置此节点中心位置为点击位置，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建节点模式
 * @class twaver.vector.interaction.CreateElementInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrElementFunction] 节点类型或者节点生成器方法，可选，默认值为twaver.Node
 * @return {twaver.network.interaction.CreateElementInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateElementInteraction(network, twaver.SubNetwork),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateElementInteraction(network,
 *     function (point) {
 *                     var element = new twaver.Node();
 *                     element.setName(element.getClassName());
 *                     element.setCenterLocation(point);
 *                     var parent = network.getElementAt(point);
 *                     if (parent && parent instanceof twaver.Group) {
 *                         element.setParent(parent);
 *                     }
 *                     return element;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.vector.interaction.CreateElementInteraction = function (network, typeOrElementFunction) {}

twaver.vector.interaction.CreateElementInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理鼠标按下事件
 * @method twaver.vector.interaction.CreateElementInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.CreateElementInteraction.prototype.handle_mousedown = function (e) {}


/**
 * 创建连线交互处理器，在拓扑上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点，可以用Network#setCreateElementInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.vector.interaction.CreateLinkInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrLinkFunction] 连线类型或者连线生成器方法，可选，默认值为twaver.Link
 * @return {twaver.network.interaction.CreateLinkInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateLinkInteraction(network, twaver.Link),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateLinkInteraction(network,
 *     function (fromNode, toNode) {
 *         var link = new twaver.Link();
 *         link.setFromNode(fromNode);
 *         link.setToNode(toNode);
 *         link.setStyle('link.color', 'red');
 *         return link;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.vector.interaction.CreateLinkInteraction = function (network, typeOrLinkFunction) {}

twaver.vector.interaction.CreateLinkInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 创建连线结束后，清除临时状态
 * @method twaver.vector.interaction.CreateLinkInteraction.clear
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.clear = function () {}

/**
 * 创建连线
 * @method twaver.vector.interaction.CreateLinkInteraction.createLink
 * @return {twaver.Link} 连线
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.createLink = function () {}

/**
 * 获取当前鼠标下的节点，并作为将要创建的连线的起始节点
 * @method twaver.vector.interaction.CreateLinkInteraction.getFromNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回当前鼠标下的节点
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.getFromNode = function (e) {}

/**
 * 获取鼠标下的节点
 * @method twaver.vector.interaction.CreateLinkInteraction.getNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回鼠标下的节点
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.getNode = function (e) {}

/**
 * 获取当前鼠标下的节点，并作为将要创建的连线的结束节点
 * @method twaver.vector.interaction.CreateLinkInteraction.getToNode
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Node} 返回当前鼠标下的节点
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.getToNode = function (e) {}

/**
 * 返回节点在缩放情况下所在空间的位置和大小
 * @method twaver.vector.interaction.CreateLinkInteraction.getZoomNodeRectOrPoint
 * @param {twaver.Node} node 节点
 * @param {Boolean} returnPoint 布尔值，是否返回中心点，否则返回表示大小的矩形
 * @return {Object} 返回点或者矩形
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.getZoomNodeRectOrPoint = function (node, returnPoint) {}

/**
 * 处理鼠标按下事件
 * @method twaver.vector.interaction.CreateLinkInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.vector.interaction.CreateLinkInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 从起始点画线到鼠标当前点
 * @method twaver.vector.interaction.CreateLinkInteraction.paintLine
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.interaction.CreateLinkInteraction.prototype.paintLine = function (ctx) {}


/**
 * 创建多边形交互处理器，在Network上多次点击不同位置设置多边形的points属性，最后双击结束，可以用Network#setCreateShapeNodeInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.vector.interaction.CreateShapeNodeInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {String} network 拓扑
 * @param {Object} [typeOrShapeNodeFunction] 多边形类型或者多边形生成器方法，可选，默认值为twaver.ShapeNode
 * @return {twaver.network.interaction.CreateShapeNodeInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateShapeNodeInteraction(network, twaver.ShapeNode),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateShapeNodeInteraction(network,
 *     function (points) {
 *         var shapeNode = new twaver.ShapeNode();
 *         shapeNode.setStyle('vector.fill.color', 'red');
 *         if(points){
 *             shapeNode.setPoints(points);
 *         }
 *         return shapeNode;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.vector.interaction.CreateShapeNodeInteraction = function (network, typeOrShapeNodeFunction) {}

twaver.vector.interaction.CreateShapeNodeInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 创建多边形结束后，清除临时状态
 * @method twaver.vector.interaction.CreateShapeNodeInteraction.clear
 */
twaver.vector.interaction.CreateShapeNodeInteraction.prototype.clear = function () {}

/**
 * 处理鼠标按下
 * @method twaver.vector.interaction.CreateShapeNodeInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.CreateShapeNodeInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动
 * @method twaver.vector.interaction.CreateShapeNodeInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.CreateShapeNodeInteraction.prototype.handle_mousemove = function (e) {}


/**
 * 默认交互处理器，处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等交互动作
 * @class twaver.vector.interaction.DefaultInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.DefaultInteraction}
 */
twaver.vector.interaction.DefaultInteraction = function (network) {}

twaver.vector.interaction.DefaultInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * @method twaver.vector.interaction.DefaultInteraction.end
 * @param {String} e 
 * @param {String} fromStart 
 */
twaver.vector.interaction.DefaultInteraction.prototype.end = function (e, fromStart) {}

/**
 * @method twaver.vector.interaction.DefaultInteraction.getIntersectMode
 * @return {String}
 */
twaver.vector.interaction.DefaultInteraction.prototype.getIntersectMode = function () {}

/**
 * @method twaver.vector.interaction.DefaultInteraction.getScrollBarColor
 * @return {String}
 */
twaver.vector.interaction.DefaultInteraction.prototype.getScrollBarColor = function () {}

/**
 * @method twaver.vector.interaction.DefaultInteraction.getScrollBarWidth
 * @return {String}
 */
twaver.vector.interaction.DefaultInteraction.prototype.getScrollBarWidth = function () {}

/**
 * 处理键盘按下事件
 * @method twaver.vector.interaction.DefaultInteraction.handle_keydown
 * @param {KeyEvent} e 键盘事件
 */
twaver.vector.interaction.DefaultInteraction.prototype.handle_keydown = function (e) {}

/**
 * 处理鼠标按下
 * @method twaver.vector.interaction.DefaultInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.DefaultInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标点击
 * @method twaver.vector.interaction.DefaultInteraction.handleClicked
 * @param {MouseEvent} e 鼠标事件
 * @param {twaver.Element} element 网元
 */
twaver.vector.interaction.DefaultInteraction.prototype.handleClicked = function (e, element) {}

/**
 * 处理鼠标双击
 * @method twaver.vector.interaction.DefaultInteraction.handleDoubleClicked
 * @param {MouseEvent} e 鼠标事件
 * @param {twaver.Element} element 网元
 */
twaver.vector.interaction.DefaultInteraction.prototype.handleDoubleClicked = function (e, element) {}


/**
 * 编辑交互处理器，处理改变网元大小、更改折线（ShapeLink）和多边形（ShapeNode）的轨迹等操作，可以用Network#setEditInteractions快速切换当前交互模式为编辑模式
 * @class twaver.vector.interaction.EditInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选，默认值为false
 * @return {twaver.network.interaction.EditInteraction}
 */
twaver.vector.interaction.EditInteraction = function (network, lazyMode) {}

twaver.vector.interaction.EditInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 编辑结束后，清除临时状态
 * @method twaver.vector.interaction.EditInteraction.clear
 */
twaver.vector.interaction.EditInteraction.prototype.clear = function () {}

/**
 * 获取点离直线的距离
 * @method twaver.vector.interaction.EditInteraction.getDistanceFromPointToLine
 * @param {Object} point 点
 * @param {Object} point1 线段顶点1
 * @param {Object} point2 线段顶点2
 * @return {Number} 返回点离直线的距离
 */
twaver.vector.interaction.EditInteraction.prototype.getDistanceFromPointToLine = function (point, point1, point2) {}

/**
 * 获取指定点所在的边索引
 * @method twaver.vector.interaction.EditInteraction.getPointIndex
 * @param {twaver.List} points 坐标点集合
 * @param {Object} point 点
 * @param {Boolean} closed 是否闭合
 * @return {Number} 返回指定点所在的边索引
 */
twaver.vector.interaction.EditInteraction.prototype.getPointIndex = function (points, point, closed) {}

/**
 * 处理鼠标按下事件
 * @method twaver.vector.interaction.EditInteraction.handle_mousedown
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.EditInteraction.prototype.handle_mousedown = function (e) {}

/**
 * 处理鼠标移动事件
 * @method twaver.vector.interaction.EditInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.EditInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.vector.interaction.EditInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.EditInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 获取指定点是否在线段上
 * @method twaver.vector.interaction.EditInteraction.isPointOnLine
 * @param {Object} point 坐标点
 * @param {Object} point1 线段顶点1
 * @param {Object} point2 线段顶点2
 * @param {Number} width 线段宽度
 * @return {Boolean} 返回指定点是否在线段上
 */
twaver.vector.interaction.EditInteraction.prototype.isPointOnLine = function (point, point1, point2, width) {}

/**
 * 显示旋转刻度
 * @method twaver.vector.interaction.EditInteraction.showRotateScale
 */
twaver.vector.interaction.EditInteraction.prototype.showRotateScale = function () {}


/**
 * 放大镜交互处理器
 * @class twaver.vector.interaction.MagnifyInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Number} [scale] 缩放比例，可选，默认值为2
 * @param {Number} [xRadius] 水平半径，可选，默认值为100
 * @param {Number} [yRadius] 垂直半径，可选，默认值为100
 * @return {twaver.network.interaction.MagnifyInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.SelectInteraction(network),
 *     new twaver.network.interaction.MoveInteraction(network),
 *     new twaver.network.interaction.DefaultInteraction(network),
 *     new twaver.network.interaction.MagnifyInteraction(network)
 * ]);
 */
twaver.vector.interaction.MagnifyInteraction = function (network, scale, xRadius, yRadius) {}

twaver.vector.interaction.MagnifyInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 处理鼠标移动
 * @method twaver.vector.interaction.MagnifyInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.MagnifyInteraction.prototype.handle_mousemove = function (e) {}


/**
 * 触摸交互处理器
 * @class twaver.vector.interaction.MSTouchInteraction
 * @constructor
 * @extends twaver.canvas.interaction.BaseInteraction
 * @param {twaver.canvas.Network} network 拓扑图组件
 * @return {twaver.canvas.interaction.MSTouchInteraction}
 */
twaver.vector.interaction.MSTouchInteraction = function (network) {}

twaver.vector.interaction.MSTouchInteraction.prototype = new twaver.canvas.interaction.BaseInteraction()

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.vector.interaction.MSTouchInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.vector.interaction.MSTouchInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理鼠标移动事件
 * @method twaver.vector.interaction.MSTouchInteraction.handle_mousemove
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.MSTouchInteraction.prototype.handle_mousemove = function (e) {}

/**
 * 处理鼠标弹起事件
 * @method twaver.vector.interaction.MSTouchInteraction.handle_mouseup
 * @param {MouseEvent} e 鼠标事件
 */
twaver.vector.interaction.MSTouchInteraction.prototype.handle_mouseup = function (e) {}

/**
 * 处理触摸结束事件
 * @method twaver.vector.interaction.MSTouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.interaction.MSTouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.vector.interaction.MSTouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.interaction.MSTouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.vector.interaction.MSTouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.interaction.MSTouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 触摸交互处理器，可以用Network#setTouchInteractions切换当前交互模式为触摸模式
 * @class twaver.vector.interaction.TouchInteraction
 * @constructor
 * @extends twaver.network.interaction.BaseInteraction
 * @param {twaver.network.Network} network 拓扑
 * @return {twaver.network.interaction.TouchInteraction}
 */
twaver.vector.interaction.TouchInteraction = function (network) {}

twaver.vector.interaction.TouchInteraction.prototype = new twaver.network.interaction.BaseInteraction()

/**
 * 获取是否使用相交模式（只要和选择区域相交的网元都会被选中）
 * @method twaver.vector.interaction.TouchInteraction.getIntersectMode
 * @return {Boolean} 如果是相交模式，则返回true，否则返回false
 */
twaver.vector.interaction.TouchInteraction.prototype.getIntersectMode = function () {}

/**
 * 处理触摸结束事件
 * @method twaver.vector.interaction.TouchInteraction.handleTouchend
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.interaction.TouchInteraction.prototype.handleTouchend = function (e) {}

/**
 * 处理触摸移动事件
 * @method twaver.vector.interaction.TouchInteraction.handleTouchmove
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.interaction.TouchInteraction.prototype.handleTouchmove = function (e) {}

/**
 * 处理触摸开始事件
 * @method twaver.vector.interaction.TouchInteraction.handleTouchstart
 * @param {TouchEvent} e 触摸事件
 */
twaver.vector.interaction.TouchInteraction.prototype.handleTouchstart = function (e) {}


/**
 * 连线对应的视图对象，用连线的样式在连线的起始和结束节点之间画一条线
 * @class twaver.vector.LinkUI
 * @constructor
 * @extends twaver.network.ElementUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Link} element 连线
 * @return {twaver.network.LinkUI}
 */
twaver.vector.LinkUI = function (network, element) {}

twaver.vector.LinkUI.prototype = new twaver.network.ElementUI()

/**
 * 检查连线捆绑标签附件
 * @method twaver.vector.LinkUI.checkLinkHandlerAttachment
 */
twaver.vector.LinkUI.prototype.checkLinkHandlerAttachment = function () {}

/**
 * 创建连线内容区域，默认为热点周围一个像素的矩形
 * @method twaver.vector.LinkUI.createBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.LinkUI.prototype.createBodyRect = function () {}

/**
 * 生成构成连线的点的集合
 * @method twaver.vector.LinkUI.createLinkPoints
 * @return {twaver.List} 返回构成连线的点的集合
 */
twaver.vector.LinkUI.prototype.createLinkPoints = function () {}

/**
 * 画线，drawBody方法调用此方法画线
 * @method twaver.vector.LinkUI.drawLinePoints
 * @param {CanvasRenderingContext2D} g 画布渲染内容
 * @param {twaver.List} points 由点构成的集合
 * @param {Number} width 线条宽度
 * @param {String} color 线条颜色
 */
twaver.vector.LinkUI.prototype.drawLinePoints = function (g, points, width, color) {}

/**
 * 获取控制点，控制点用于劈分正交直角连线
 * @method twaver.vector.LinkUI.getControlPoint
 * @return {Object} 返回控制点坐标，值为包含x和y属性的Object对象
 */
twaver.vector.LinkUI.prototype.getControlPoint = function () {}

/**
 * 获取连线起始坐标
 * @method twaver.vector.LinkUI.getFromPoint
 * @return {Object} 返回连线起始坐标，值为包含x和y属性的Object对象
 */
twaver.vector.LinkUI.prototype.getFromPoint = function () {}

/**
 * 获取偏移后的起始坐标
 * @method twaver.vector.LinkUI.getFromPosition
 * @param {Number} xoffset x轴偏移量
 * @param {Number} yoffset y轴偏移量
 * @return {Object} 返回偏移后的起始坐标，值为包含x和y属性的Object对象
 */
twaver.vector.LinkUI.prototype.getFromPosition = function (xoffset, yoffset) {}

/**
 * 获取Link的长度
 * @method twaver.vector.LinkUI.getLineLength
 * @return {Number} 返回Link的长度
 */
twaver.vector.LinkUI.prototype.getLineLength = function () {}

/**
 * 获取连线捆绑标签附件
 * @method twaver.vector.LinkUI.getLinkHandlerAttachment
 * @return {twaver.network.Attachment} 返回连线捆绑标签附件
 */
twaver.vector.LinkUI.prototype.getLinkHandlerAttachment = function () {}

/**
 * 获取构成连线的点的集合
 * @method twaver.vector.LinkUI.getLinkPoints
 * @return {twaver.List} 返回构成连线的点的集合
 */
twaver.vector.LinkUI.prototype.getLinkPoints = function () {}

/**
 * 获取连线结束坐标
 * @method twaver.vector.LinkUI.getToPoint
 * @return {Object} 返回连线结束坐标，值为包含x和y属性的Object对象
 */
twaver.vector.LinkUI.prototype.getToPoint = function () {}

/**
 * 获取偏移后的结束坐标
 * @method twaver.vector.LinkUI.getToPosition
 * @param {Number} xoffset x轴偏移量
 * @param {Number} yoffset y轴偏移量
 * @return {Object} 返回偏移后的结束坐标，值为包含x和y属性的Object对象
 */
twaver.vector.LinkUI.prototype.getToPosition = function (xoffset, yoffset) {}

/**
 * 设置控制点，控制点用于劈分正交直角连线
 * @method twaver.vector.LinkUI.setControlPoint
 * @param {Object} point 控制点坐标，值为包含x和y属性的Object对象
 */
twaver.vector.LinkUI.prototype.setControlPoint = function (point) {}

/**
 * 刷新连线视图所占的区域
 * @method twaver.vector.LinkUI.validateBodyBounds
 */
twaver.vector.LinkUI.prototype.validateBodyBounds = function () {}


/**
 * 逻辑缩放管理器构造函数
 * @class twaver.vector.LogicalZoomManager
 * @constructor
 * @extends twaver.vector.BaseZoomManager
 * @param {twaver.vector.Network} network 拓扑组件
 * @param {Boolean} sizeChange 布尔值，是否缩放尺寸
 * @return {twaver.vector.LogicalZoomManager} 逻辑缩放管理器
 */
twaver.vector.LogicalZoomManager = function (network, sizeChange) {}

twaver.vector.LogicalZoomManager.prototype = new twaver.vector.BaseZoomManager()


/**
 * 节点对应的视图对象，是其他网元对象（组、网格、多边形和子网等）的基类
 * @class twaver.vector.NodeUI
 * @constructor
 * @extends twaver.canvas.ElementUI
 * @param {twaver.canvas.Network} network 拓扑
 * @param {twaver.Node} element 节点
 * @return {twaver.canvas.NodeUI}
 */
twaver.vector.NodeUI = function (network, element) {}

twaver.vector.NodeUI.prototype = new twaver.canvas.ElementUI()

/**
 * 创建节点内容区域，默认为网元节点的x坐标、y坐标、宽度和高度组成
 * @method twaver.vector.NodeUI.createBodyRect
 * @return {Object} 返回内容区域，值为包含x、y、width和height属性的Object对象
 */
twaver.vector.NodeUI.prototype.createBodyRect = function () {}

/**
 * 用图片填充节点内容区域
 * @method twaver.vector.NodeUI.drawDefaultBody
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.NodeUI.prototype.drawDefaultBody = function (ctx) {}

/**
 * 画边框
 * @method twaver.vector.NodeUI.drawOuterBorder
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.NodeUI.prototype.drawOuterBorder = function (ctx) {}

/**
 * 画路径
 * @method twaver.vector.NodeUI.drawPath
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 * @param {String} prefix 前缀
 * @param {Number} padding 内边距
 * @param {Array} pattern 线条虚线样式
 * @param {twaver.List} points 点集合
 * @param {twaver.List} segments 点与点之间连接类型集合
 * @param {Boolean} close 是否闭合
 */
twaver.vector.NodeUI.prototype.drawPath = function (ctx, prefix, padding, pattern, points, segments, close) {}

/**
 * 节点被选中时，画选中边框
 * @method twaver.vector.NodeUI.drawSelectBorder
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.NodeUI.prototype.drawSelectBorder = function (ctx) {}

/**
 * 当body.type为vector或default.vector时，用矢量图形填充节点内容
 * @method twaver.vector.NodeUI.drawVectorBody
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.NodeUI.prototype.drawVectorBody = function (ctx) {}

/**
 * 获取网元视图主体边界
 * @method twaver.vector.NodeUI.getDefaultBodyRect
 * @return {Object} 返回网元视图主体边界
 */
twaver.vector.NodeUI.prototype.getDefaultBodyRect = function () {}

/**
 * 获取外边框边界
 * @method twaver.vector.NodeUI.getOuterBorderRect
 * @return {Object} 返回外边框边界
 */
twaver.vector.NodeUI.prototype.getOuterBorderRect = function () {}

/**
 * 获取路径边界
 * @method twaver.vector.NodeUI.getPathRect
 * @param {String} prefix 前缀
 * @param {Number} padding 内边距
 * @return {Object} 返回路径边界
 */
twaver.vector.NodeUI.prototype.getPathRect = function (prefix, padding) {}

/**
 * 获取选中边框边界
 * @method twaver.vector.NodeUI.getSelectBorderRect
 * @return {Object} 返回选中边框边界
 */
twaver.vector.NodeUI.prototype.getSelectBorderRect = function () {}

/**
 * 获取矢量边界
 * @method twaver.vector.NodeUI.getVectorBody
 * @return {Object} 返回矢量边界
 */
twaver.vector.NodeUI.prototype.getVectorBody = function () {}

/**
 * 重新计算网元主体边界
 * @method twaver.vector.NodeUI.validateBodyBounds
 */
twaver.vector.NodeUI.prototype.validateBodyBounds = function () {}


/**
 * 物理缩放管理器构造函数
 * @class twaver.vector.PhysicalZoomManager
 * @constructor
 * @extends twaver.vector.BaseZoomManager
 * @return {twaver.vector.PhysicalZoomManager} 物理缩放管理器
 */
twaver.vector.PhysicalZoomManager = function () {}

twaver.vector.PhysicalZoomManager.prototype = new twaver.vector.BaseZoomManager()


/**
 * 构造函数
 * 
 * 告警是电信拓扑系统中的一种预定义的对象，它是基于OSS/J服务质量体系的API和基于ITU-T标准建议的X.733。
 * 
 * 在TWaver中，告警是用于展示OSS系统中服务端实际发生的告警。当拓扑图上产生警告时意味着OSS系统中创建的告警被监控到，OSS系统可以将新建的告警传到客户端并在客户端的拓扑图或表格上显示出来。
 * 
 * TWaver中的告警对象定义了告警中最常见的属性。需要注意的是，TWaver中的告警对象只是在UI中使用，而不是直接存储进数据库或服务端的，一般在OSS系统的服务端上的告警会有更详细的属性以及与业务相关的属性。
 * 
 * 告警是存储在告警容器中的，告警容器是网元容器的一部分，它是用于管理告警对象的。每一个告警都可以设置相关联的网元ID，当告警产生时，就会在网元上呈现出来。
 * @class twaver.Alarm
 * @constructor
 * @extends twaver.Data
 * @param {Object} [id] 告警ID用于唯一标识告警对象。在告警容器中，ID是不能重复的，如果告警ID是null，TWaver就会根据默认的规则，自动生成一个告警ID。ID可以是string，number类型，也可以是Object类型。是string或number类型时指的是告警的ID，如果为Object类型，可以传入一个带告警属性的对象，比如: var alarm = new twaver.Alarm({      alarmSeverity:AlarmSeverity.CRITICAL,      acked:true,      clients:{'buinessiID':'523'} });
 * @param {Object} [elementId] 当和告警绑定的网元ID不为空时，添加一个告警，网元上就会同步呈现出这个告警。
 * @param {twaver.AlarmSeverity} [alarmSeverity] 告警级别
 * @param {Boolean} [isAcked] 是否是确认告警
 * @param {Boolean} [isCleared] 告警是否清除
 * @return {twaver.Alarm} 告警对象本身
 */
twaver.Alarm = function (id, elementId, alarmSeverity, isAcked, isCleared) {}

twaver.Alarm.prototype = new twaver.Data()

/**
 * 得到告警的级别，告警级别可以参考twaver.AlarmSeverity
 * @method twaver.Alarm.getAlarmSeverity
 * @return {twaver.AlarmSeverity} 告警级别
 */
twaver.Alarm.prototype.getAlarmSeverity = function () {}

/**
 * 获取绑定在告警上的网元ID
 * @method twaver.Alarm.getElementId
 * @return {Object} 网元ID
 */
twaver.Alarm.prototype.getElementId = function () {}

/**
 * 告警标志
 * @property IAlarm
 * @type Boolean
 */
twaver.Alarm.prototype.IAlarm = function () {}

/**
 * 告警是否已经确认
 * @method twaver.Alarm.isAcked
 * @return {Boolean} true为确认，否则为false
 */
twaver.Alarm.prototype.isAcked = function () {}

/**
 * 告警是否已经清除
 * @method twaver.Alarm.isCleared
 * @return {Boolean} true为清除，否则为false
 */
twaver.Alarm.prototype.isCleared = function () {}

/**
 * 设置告警的状态，true为确认，否则为false
 * @method twaver.Alarm.setAcked
 * @param {Boolean} v true为确认，否则为false
 */
twaver.Alarm.prototype.setAcked = function (v) {}

/**
 * 设置告警的级别，告警级别可参考twaver.AlarmSeverity
 * @method twaver.Alarm.setAlarmSeverity
 * @param {twaver.AlarmSeverity} v 告警级别
 */
twaver.Alarm.prototype.setAlarmSeverity = function (v) {}

/**
 * 设置告警清除的状态，true为已清除，否则为false
 * @method twaver.Alarm.setCleared
 * @param {Boolean} v true为清除，否则为false
 */
twaver.Alarm.prototype.setCleared = function (v) {}


/**
 * 告警容器存在于网元容器中，它作为网元容器的一部分，管理着网元容器中所有网元上的告警对象。当创建一个网元容器时，告警容器就会随之生成
 * @class twaver.AlarmBox
 * @constructor
 * @extends twaver.DataBox
 * @param {twaver.ElementBox} elementBox 网元容器对象
 * @return {twaver.AlarmBox} 告警容器本身
 */
twaver.AlarmBox = function (elementBox) {}

twaver.AlarmBox.prototype = new twaver.DataBox()

/**
 * 获取告警-网元映射的对象，这个对象用于管理所有的网元和告警的对应关系，它决定了告警显示在哪些网元上
 * @method twaver.AlarmBox.getAlarmElementMapping
 * @return {twaver.AlarmElementMapping} 告警-网元映射的对象
 */
twaver.AlarmBox.prototype.getAlarmElementMapping = function () {}

/**
 * 获取某个网元上所有的告警集合
 * @method twaver.AlarmBox.getCorrespondingAlarms
 * @param {twaver.Element} element 网元对象
 * @return {twaver.List} 网元上所有的告警集合
 */
twaver.AlarmBox.prototype.getCorrespondingAlarms = function (element) {}

/**
 * 获取和某个告警相关联的网元对象的集合。
 * @method twaver.AlarmBox.getCorrespondingElements
 * @param {twaver.Alarm} alarm 告警对象
 * @return {twaver.List} 和告警相关联的网元对象的集合
 */
twaver.AlarmBox.prototype.getCorrespondingElements = function (alarm) {}

/**
 * 获取和这个告警容器绑定的网元容器
 * @method twaver.AlarmBox.getElementBox
 * @return {twaver.ElementBox} 包含这个告警容器的网元容器对象
 */
twaver.AlarmBox.prototype.getElementBox = function () {}

/**
 * 当告警的确认状态变化时，TWaver内部会调用此方法。
 * @method twaver.AlarmBox.handleAckedChange
 * @param {twaver.Alarm} alarm 告警对象
 * @param {Object} e 告警状态的变化事件
 */
twaver.AlarmBox.prototype.handleAckedChange = function (alarm, e) {}

/**
 * 当告警容器发生变化时，TWaver内部会调用此方法。
 * @method twaver.AlarmBox.handleAlarmBoxChange
 * @param {Object} e 告警对象事件
 */
twaver.AlarmBox.prototype.handleAlarmBoxChange = function (e) {}

/**
 * 当告警属性发生变化时，TWaver内部会调用此方法。
 * @method twaver.AlarmBox.handleAlarmPropertyChange
 * @param {Object} e 告警对象事件
 */
twaver.AlarmBox.prototype.handleAlarmPropertyChange = function (e) {}

/**
 * 当告警级别的对象发生变化时，TWaver内部会调用此方法。
 * @method twaver.AlarmBox.handleAlarmSeverityChange
 * @param {twaver.Alarm} alarm 告警对象
 * @param {Object} e 告警对象事件
 */
twaver.AlarmBox.prototype.handleAlarmSeverityChange = function (alarm, e) {}

/**
 * 当网元添加时，TWaver内部会调用此方法。
 * @method twaver.AlarmBox.handleElementAdded
 * @param {twaver.Element} element 添加的网元对象
 */
twaver.AlarmBox.prototype.handleElementAdded = function (element) {}

/**
 * 当网元容器发生变化时，TWaver内部会调用此方法
 * @method twaver.AlarmBox.handleElementBoxChange
 * @param {Object} e 网元容器发生更改的事件
 */
twaver.AlarmBox.prototype.handleElementBoxChange = function (e) {}

/**
 * 当网元删除时，调用此方法。TWaver内部使用
 * @method twaver.AlarmBox.handleElementRemoved
 * @param {twaver.Element} element 删除了的网元对象
 */
twaver.AlarmBox.prototype.handleElementRemoved = function (element) {}

/**
 * 当告警的状态为cleared时是否需要删除告警
 * @method twaver.AlarmBox.isRemoveAlarmWhenAlarmIsCleared
 * @return {Boolean} true为删除告警，false不删除告警
 */
twaver.AlarmBox.prototype.isRemoveAlarmWhenAlarmIsCleared = function () {}

/**
 * 当删除网元时，是否删除所有发生在这个网元上的告警对象
 * @method twaver.AlarmBox.isRemoveAlarmWhenElementIsRemoved
 * @return {String} true为删除所有的告警，false为不删除
 */
twaver.AlarmBox.prototype.isRemoveAlarmWhenElementIsRemoved = function () {}

/**
 * 删除所有和指定网元相关的告警对象
 * @method twaver.AlarmBox.removeAlarmsByElement
 * @param {twaver.Element} element 网元对象
 */
twaver.AlarmBox.prototype.removeAlarmsByElement = function (element) {}

/**
 * 设置告警-网元映射的对象，这个对象用于管理所有的网元和告警的对应关系，它决定了告警显示在哪些网元上
 * @method twaver.AlarmBox.setAlarmElementMapping
 * @param {twaver.AlarmElementMapping} alarmElementMapping 告警-网元映射的对象
 */
twaver.AlarmBox.prototype.setAlarmElementMapping = function (alarmElementMapping) {}

/**
 * 设置当告警的状态为cleared时是否需要删除告警
 * @method twaver.AlarmBox.setRemoveAlarmWhenAlarmIsCleared
 * @param {Boolean} removeAlarmWhenAlarmIsCleared true为删除告警，false不删除告警
 * @return {String}
 */
twaver.AlarmBox.prototype.setRemoveAlarmWhenAlarmIsCleared = function (removeAlarmWhenAlarmIsCleared) {}

/**
 * 设置当删除网元时，是否删除所有发生在这个网元上的告警对象
 * @method twaver.AlarmBox.setRemoveAlarmWhenElementIsRemoved
 * @param {Boolean} v true为删除所有的告警，false为不删除
 */
twaver.AlarmBox.prototype.setRemoveAlarmWhenElementIsRemoved = function (v) {}


/**
 * 以动画效果更改一批网元的中心位置
 * @class twaver.animate.AnimateCenterLocation
 * @constructor
 * @extends twaver.animate.AnimateProperty
 * @param {twaver.List} objects 需要更改中心位置的网元节点集合
 * @param {twaver.List} newValues 网元节点新中心位置集合
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateCenterLocation}
 */
twaver.animate.AnimateCenterLocation = function (objects, newValues, finishFunction) {}

twaver.animate.AnimateCenterLocation.prototype = new twaver.animate.AnimateProperty()


/**
 * 以动画效果更改一批网元的位置
 * @class twaver.animate.AnimateLocation
 * @constructor
 * @extends twaver.animate.AnimateProperty
 * @param {twaver.List} objects 需要更改位置的网元节点集合
 * @param {twaver.List} newValues 网元节点新位置集合
 * @param {Function} [finishFunction] 回调函数，动画结束后执行的动作，可选，默认值为null
 * @return {twaver.animate.AnimateLocation}
 */
twaver.animate.AnimateLocation = function (objects, newValues, finishFunction) {}

twaver.animate.AnimateLocation.prototype = new twaver.animate.AnimateProperty()


/**
 * 告警附件，用于在拓扑上显示网元的新发告警信息，一般显示为包含告警级别和数量的冒泡信息，默认告警冒泡附件应该显示在最上层，以免某个网元的告警信息被其他网元覆盖
 * @class twaver.canvas.AlarmAttachment
 * @constructor
 * @extends twaver.canvas.BasicAttachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.AlarmAttachment}
 */
twaver.canvas.AlarmAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.canvas.AlarmAttachment.prototype = new twaver.canvas.BasicAttachment()


/**
 * 网格对应的视图对象，网格是由grid.row.count样式属性指定的行数和grid.column.count样式属性指定的列数构成的表格，其他网元可以填充到其网格中
 * @class twaver.canvas.GridUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑视图
 * @param {twaver.Grid} element 网格
 * @return {twaver.canvas.GridUI}
 */
twaver.canvas.GridUI = function (network, element) {}

twaver.canvas.GridUI.prototype = new twaver.canvas.NodeUI()

/**
 * 画网格内容
 * @method twaver.canvas.GridUI.drawGridBody
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.GridUI.prototype.drawGridBody = function (ctx) {}


/**
 * 组对应的视图对象，组有合并和展开两种状态，合并时，组的孩子不可见；展开时，孩子可见
 * @class twaver.canvas.GroupUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑对象
 * @param {twaver.Group} element 组网元
 * @return {twaver.canvas.GroupUI}
 */
twaver.canvas.GroupUI = function (network, element) {}

twaver.canvas.GroupUI.prototype = new twaver.canvas.NodeUI()

/**
 * 画展开后的组，用group.shape样式属性定义的形状画出矢量图形
 * @method twaver.canvas.GroupUI.drawExpandedGroup
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.canvas.GroupUI.prototype.drawExpandedGroup = function (ctx) {}

/**
 * 获取所有孩子的区域
 * @method twaver.canvas.GroupUI.getChildrenRects
 * @return {twaver.List} 返回所有孩子的区域
 */
twaver.canvas.GroupUI.prototype.getChildrenRects = function () {}


/**
 * 创建折线交互处理器，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点，可以用Network#setCreateShapeLinkInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.canvas.interaction.CreateShapeLinkInteraction
 * @constructor
 * @extends twaver.network.interaction.CreateLinkInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrLinkFunction] 折线类型或者折线生成器方法，可选，默认值为twaver.ShapeLink
 * @return {twaver.network.interaction.CreateShapeLinkInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateShapeLinkInteraction(network, twaver.ShapeLink),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateShapeLinkInteraction(network,
 *     function (fromNode, toNode, points) {
 *         var link = new twaver.ShapeLink();
 *         link.setFromNode(fromNode);
 *         link.setToNode(toNode);
 *         link.setStyle('link.color', 'red');
 *         if(points){
 *             link.setPoints(points);
 *         }
 *         return link;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.canvas.interaction.CreateShapeLinkInteraction = function (network, typeOrLinkFunction) {}

twaver.canvas.interaction.CreateShapeLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


/**
 * 标签附件，用于显示网元名称
 * @class twaver.canvas.LabelAttachment
 * @constructor
 * @extends twaver.canvas.BasicAttachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.LabelAttachment}
 */
twaver.canvas.LabelAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.canvas.LabelAttachment.prototype = new twaver.canvas.BasicAttachment()

/**
 * 获取标签文本
 * @method twaver.canvas.LabelAttachment.getLabel
 * @return {String} 返回标签文本
 */
twaver.canvas.LabelAttachment.prototype.getLabel = function () {}


/**
 * 捆绑连线的标签附件，用于显示多条连线捆绑后的标签
 * @class twaver.canvas.LinkHandlerAttachment
 * @constructor
 * @extends twaver.canvas.BasicAttachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.LinkHandlerAttachment}
 */
twaver.canvas.LinkHandlerAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.canvas.LinkHandlerAttachment.prototype = new twaver.canvas.BasicAttachment()


/**
 * 创建和Network绑定的鹰眼视图，鹰眼是Network的缩略图，能通过鹰眼导航Network。鹰眼支持各种操作：
 * 单击：将Network的视图中心导航到指定坐标点
 * 双击：将Network的缩放级别还原为1
 * 按着CTRL键框选：将Network缩放并平移到指定区域
 * @class twaver.canvas.Overview
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {twaver.network.Network} network 和Overview绑定的Network
 * @return {twaver.network.Overview}
 * @example var overview = new twaver.network.Overview(network);
 * overview.adjustBounds({x:0, y:0, width:200, height:200});
 */
twaver.canvas.Overview = function (network) {}

twaver.canvas.Overview.prototype = new twaver.controls.ControlBase()

/**
 * 将Network的视图中心点滚动到指定的相对于Overview的坐标
 * @method twaver.canvas.Overview.centerNetwork
 * @param {Object} point 相对于Overview的包含x和y属性的Object对象
 * @param {Boolean} [animate] 可选，如果为true，则有动画效果，否则没有，默认为false
 */
twaver.canvas.Overview.prototype.centerNetwork = function (point, animate) {}

/**
 * 获取Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
 * @method twaver.canvas.Overview.getFillColor
 * @return {String} 返回Overview的填充色
 */
twaver.canvas.Overview.prototype.getFillColor = function () {}

/**
 * 获取鼠标所在的逻辑坐标，包含x，y属性
 * @method twaver.canvas.Overview.getLogicalPoint
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回鼠标所在的逻辑坐标，包含x，y属性
 */
twaver.canvas.Overview.prototype.getLogicalPoint = function (e) {}

/**
 * 获取Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
 * @method twaver.canvas.Overview.getMaxPackingHeight
 * @return {Number} 返回Overview最大伸缩高度
 */
twaver.canvas.Overview.prototype.getMaxPackingHeight = function () {}

/**
 * 获取Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
 * @method twaver.canvas.Overview.getMaxPackingWidth
 * @return {Number} 返回Overview最大伸缩宽度
 */
twaver.canvas.Overview.prototype.getMaxPackingWidth = function () {}

/**
 * 获取和Overview绑定的拓扑视图
 * @method twaver.canvas.Overview.getNetwork
 * @return {twaver.network.Network} 返回和Overview绑定的拓扑视图
 */
twaver.canvas.Overview.prototype.getNetwork = function () {}

/**
 * 获取Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
 * @method twaver.canvas.Overview.getOutlineColor
 * @return {String} 返回Overview边框线条颜色
 */
twaver.canvas.Overview.prototype.getOutlineColor = function () {}

/**
 * 获取Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
 * @method twaver.canvas.Overview.getOutlineWidth
 * @return {Number} 返回Overview边框线条宽度
 */
twaver.canvas.Overview.prototype.getOutlineWidth = function () {}

/**
 * 获取Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
 * @method twaver.canvas.Overview.getPadding
 * @return {Number} 返回Overview边缘空白大小
 */
twaver.canvas.Overview.prototype.getPadding = function () {}

/**
 * 获取Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
 * @method twaver.canvas.Overview.getSelectColor
 * @return {String} 返回Overview框选时轮廓的线条颜色
 */
twaver.canvas.Overview.prototype.getSelectColor = function () {}

/**
 * 获取Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
 * @method twaver.canvas.Overview.getSelectWidth
 * @return {Number} 返回Overview框选时轮廓的线条宽度
 */
twaver.canvas.Overview.prototype.getSelectWidth = function () {}

/**
 * 获取操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
 * @method twaver.canvas.Overview.isAnimate
 * @return {Boolean} 返回是否使用动画效果
 */
twaver.canvas.Overview.prototype.isAnimate = function () {}

/**
 * 设置操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
 * @method twaver.canvas.Overview.setAnimate
 * @param {Boolean} v 是否使用动画效果
 */
twaver.canvas.Overview.prototype.setAnimate = function (v) {}

/**
 * 设置Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
 * @method twaver.canvas.Overview.setFillColor
 * @param {String} v Overview的填充色
 */
twaver.canvas.Overview.prototype.setFillColor = function (v) {}

/**
 * 设置Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
 * @method twaver.canvas.Overview.setMaxPackingHeight
 * @param {Number} v Overview最大伸缩高度
 */
twaver.canvas.Overview.prototype.setMaxPackingHeight = function (v) {}

/**
 * 设置Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
 * @method twaver.canvas.Overview.setMaxPackingWidth
 * @param {Number} v Overview最大伸缩宽度
 */
twaver.canvas.Overview.prototype.setMaxPackingWidth = function (v) {}

/**
 * 设置和Overview绑定的拓扑视图
 * @method twaver.canvas.Overview.setNetwork
 * @param {twaver.network.Network} network 拓扑视图
 */
twaver.canvas.Overview.prototype.setNetwork = function (network) {}

/**
 * 设置Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
 * @method twaver.canvas.Overview.setOutlineColor
 * @param {String} v Overview边框线条颜色
 */
twaver.canvas.Overview.prototype.setOutlineColor = function (v) {}

/**
 * 设置Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
 * @method twaver.canvas.Overview.setOutlineWidth
 * @param {Number} v Overview边框线条宽度
 */
twaver.canvas.Overview.prototype.setOutlineWidth = function (v) {}

/**
 * 设置Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
 * @method twaver.canvas.Overview.setPadding
 * @param {Number} v Overview边缘空白大小
 */
twaver.canvas.Overview.prototype.setPadding = function (v) {}

/**
 * 设置Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
 * @method twaver.canvas.Overview.setSelectColor
 * @param {String} v Overview框选时轮廓的线条颜色
 */
twaver.canvas.Overview.prototype.setSelectColor = function (v) {}

/**
 * 设置Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
 * @method twaver.canvas.Overview.setSelectWidth
 * @param {Number} v Overview框选时轮廓的线条宽度
 */
twaver.canvas.Overview.prototype.setSelectWidth = function (v) {}


/**
 * 构造可旋转节点的视图对象
 * @class twaver.canvas.RotatableNodeUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑视图
 * @param {twaver.RotatableNode} element 可旋转节点
 * @return {twaver.canvas.RotatableNodeUI}
 */
twaver.canvas.RotatableNodeUI = function (network, element) {}

twaver.canvas.RotatableNodeUI.prototype = new twaver.canvas.NodeUI()


/**
 * 折线对应的视图对象，由一组点连接而成
 * @class twaver.canvas.ShapeLinkUI
 * @constructor
 * @extends twaver.canvas.LinkUI
 * @param {twaver.canvas.Network} network 拓扑视图
 * @param {twaver.ShapeLink} element 折线
 * @return {twaver.canvas.ShapeLinkUI}
 */
twaver.canvas.ShapeLinkUI = function (network, element) {}

twaver.canvas.ShapeLinkUI.prototype = new twaver.canvas.LinkUI()


/**
 * 多边形网元对应的多边形网元视图，多边形由一组点组成，并将这些点依次连接而组成
 * @class twaver.canvas.ShapeNodeUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑
 * @param {twaver.ShapeNode} element 多边形网元
 * @return {twaver.canvas.ShapeNodeUI}
 */
twaver.canvas.ShapeNodeUI = function (network, element) {}

twaver.canvas.ShapeNodeUI.prototype = new twaver.canvas.NodeUI()


/**
 * Chart面板包括了Chart以及Chart的图例。用户使用这个面板组件可以更方便地来呈现Chart。
 * @class twaver.charts.ChartPane
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {twaver.charts.ChartBase} chart 绑定的Chart组件
 * @param {String} [title] 可选，Chart的标题
 * @param {String} [legendOrientation] 可选，Chart图例的显示方向，默认为bottom
 * @param {String} [legendWidth] 可选，Chart图例的宽度，默认为80px
 * @return {twaver.charts.ChartPane}
 */
twaver.charts.ChartPane = function (chart, title, legendOrientation, legendWidth) {}

twaver.charts.ChartPane.prototype = new twaver.controls.ControlBase()

/**
 * 获取和这个面板绑定的Chart对象
 * @method twaver.charts.ChartPane.getChart
 * @return {twaver.charts.ChartBase} 和这个面板绑定的Chart对象
 */
twaver.charts.ChartPane.prototype.getChart = function () {}

/**
 * 获取Chart上图例的方向
 * Orientation的返回值为：
 * top：上方
 * right：右方
 * bottom：下方
 * left：左方
 * @method twaver.charts.ChartPane.getLegendOrientation
 * @return {String} Chart上图例的方向
 */
twaver.charts.ChartPane.prototype.getLegendOrientation = function () {}

/**
 * 获取图例的面板
 * @method twaver.charts.ChartPane.getLegendPane
 * @return {twaver.charts.LegendPane} 图例的面板
 */
twaver.charts.ChartPane.prototype.getLegendPane = function () {}

/**
 * 获取图例面板的宽度
 * @method twaver.charts.ChartPane.getLegendWidth
 * @return {Number} 图例面板的宽度值
 */
twaver.charts.ChartPane.prototype.getLegendWidth = function () {}

/**
 * 获取Chart的标题
 * @method twaver.charts.ChartPane.getTitle
 * @return {String} Chart的标题
 */
twaver.charts.ChartPane.prototype.getTitle = function () {}

/**
 * 获取Chart中包含标题的DIV
 * @method twaver.charts.ChartPane.getTitleDiv
 * @return {Object} 标题的DIV
 */
twaver.charts.ChartPane.prototype.getTitleDiv = function () {}

/**
 * 获取Chart标题的高度
 * @method twaver.charts.ChartPane.getTitleHeight
 * @return {Number} Chart标题的高度
 */
twaver.charts.ChartPane.prototype.getTitleHeight = function () {}

/**
 * 获取标题的水平对齐方式。水平对齐方式的可选值为：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * @method twaver.charts.ChartPane.getTitleHorizontalAlign
 * @return {String} 标题的水平对齐方式，默认为center
 */
twaver.charts.ChartPane.prototype.getTitleHorizontalAlign = function () {}

/**
 * 设置Chart图例的显示方向，方向的可选值为：
 * top：上方
 * right：右方
 * bottom：下方
 * left：左方
 * @method twaver.charts.ChartPane.setLegendOrientation
 * @param {String} value Chart图例的显示方向
 */
twaver.charts.ChartPane.prototype.setLegendOrientation = function (value) {}

/**
 * 设置图例面板的宽度值
 * @method twaver.charts.ChartPane.setLegendWidth
 * @param {Number} v 图例面板的宽度值
 */
twaver.charts.ChartPane.prototype.setLegendWidth = function (v) {}

/**
 * 设置Chart的标题
 * @method twaver.charts.ChartPane.setTitle
 * @param {String} v 
 */
twaver.charts.ChartPane.prototype.setTitle = function (v) {}

/**
 * 设置Chart标题的高度
 * @method twaver.charts.ChartPane.setTitleHeight
 * @param {Number} v Chart标题的高度
 */
twaver.charts.ChartPane.prototype.setTitleHeight = function (v) {}

/**
 * 设置标题的水平对齐方式，对齐方式的可选值为
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * @method twaver.charts.ChartPane.setTitleHorizontalAlign
 * @param {String} v 标题的水平对齐方式，默认为center
 */
twaver.charts.ChartPane.prototype.setTitleHorizontalAlign = function (v) {}


/**
 * 图例面板是用于辅助Chart来显示的，它默认是显示在Chart的下方，显示Chart上所有的网元信息
 * @class twaver.charts.LegendPane
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {twaver.charts.ChartBase} chart 绑定的Chart对象
 * @return {twaver.charts.LegendPane} 图例面板本身
 */
twaver.charts.LegendPane = function (chart) {}

twaver.charts.LegendPane.prototype = new twaver.controls.ControlBase()

/**
 * 获取和这个图例面板绑定的Chart
 * @method twaver.charts.LegendPane.getChart
 * @return {twaver.charts.ChartBase} 绑定的Chart
 */
twaver.charts.LegendPane.prototype.getChart = function () {}

/**
 * 获取图例面板上被隐藏的网元颜色
 * @method twaver.charts.LegendPane.getHiddenColor
 * @return {String} 被隐藏的网元颜色
 */
twaver.charts.LegendPane.prototype.getHiddenColor = function () {}

/**
 * 获取图例上网元图标的高度
 * @method twaver.charts.LegendPane.getIconHeight
 * @return {Number} 图例上网元图标的高度
 */
twaver.charts.LegendPane.prototype.getIconHeight = function () {}

/**
 * 设置图例面板上图标的圆角弧度，默认为0
 * 
 * @method twaver.charts.LegendPane.getIconRadius
 * @return {Number}
 */
twaver.charts.LegendPane.prototype.getIconRadius = function () {}

/**
 * 获取图例上网元图标的宽度
 * @method twaver.charts.LegendPane.getIconWidth
 * @return {Number} 图例上网元图标的宽度
 */
twaver.charts.LegendPane.prototype.getIconWidth = function () {}

/**
 * 获取图例面板显示实现的方向，默认为水平显示。方向的可选值为：
 * 'horizontal'：水平
 * 'vertical'：垂直
 * @method twaver.charts.LegendPane.getOrientation
 * @return {String} 图例面板显示实现的方向
 */
twaver.charts.LegendPane.prototype.getOrientation = function () {}

/**
 * 获取图例面板的行高
 * @method twaver.charts.LegendPane.getRowHeight
 * @return {Number} 图例面板的行高
 */
twaver.charts.LegendPane.prototype.getRowHeight = function () {}

/**
 * 获取选中网元时图例对于元素的背景色
 * @method twaver.charts.LegendPane.getSelectBackgroundColor
 * @return {String} 选中网元时图例对于元素的背景色
 */
twaver.charts.LegendPane.prototype.getSelectBackgroundColor = function () {}

/**
 * 获取选中网元时图例对于元素的前景色
 * @method twaver.charts.LegendPane.getSelectForegroundColor
 * @return {String} 选中网元时图例对于元素的前景色
 */
twaver.charts.LegendPane.prototype.getSelectForegroundColor = function () {}

/**
 * 当图例面板上绑定的Chart更改时，会调用此方法，这个方法用于刷新图例面板
 * @method twaver.charts.LegendPane.handleViewChange
 * @param {Object} e Chart视图的变化事件
 */
twaver.charts.LegendPane.prototype.handleViewChange = function (e) {}

/**
 * 获取图例面板上指定的网元是否隐藏
 * @method twaver.charts.LegendPane.isHidden
 * @param {twaver.Data} data 指定的网元
 * @return {Boolean} true为隐藏，false不隐藏
 */
twaver.charts.LegendPane.prototype.isHidden = function (data) {}

/**
 * 当绘制图例面板时会调用此方法，此方法的默认实现为空。用户不需要调用此方法，但可以重载此方法执行自定义逻辑
 * @method twaver.charts.LegendPane.onLegendRendered
 * @param {Object} div 包含图例上网元元素的面板
 * @param {twaver.Data} data 指定的图例上的网元元素
 */
twaver.charts.LegendPane.prototype.onLegendRendered = function (div, data) {}

/**
 * 在指定的div层上绘制指定数据的图例
 * @method twaver.charts.LegendPane.renderLegend
 * @param {Object} div 
 * @param {twaver.Data} data 指定的数据对象
 */
twaver.charts.LegendPane.prototype.renderLegend = function (div, data) {}

/**
 * 设置图例面板上被隐藏的网元颜色
 * @method twaver.charts.LegendPane.setHiddenColor
 * @param {String} v 被隐藏的网元颜色
 */
twaver.charts.LegendPane.prototype.setHiddenColor = function (v) {}

/**
 * 设置图例上网元图标的高度
 * @method twaver.charts.LegendPane.setIconHeight
 * @param {Number} v 图例上网元图标的高度
 */
twaver.charts.LegendPane.prototype.setIconHeight = function (v) {}

/**
 * 获取图例面板上图标的圆角弧度，默认为0
 * @method twaver.charts.LegendPane.setIconRadius
 * @param {Number} v 
 */
twaver.charts.LegendPane.prototype.setIconRadius = function (v) {}

/**
 * 设置图例上网元图标的宽度
 * @method twaver.charts.LegendPane.setIconWidth
 * @param {Number} v 图例上网元图标的宽度
 */
twaver.charts.LegendPane.prototype.setIconWidth = function (v) {}

/**
 * 设置图例面板显示的方向，默认为水平显示。方向的可选值为：
 * 'horizontal'：水平
 * 'vertical'：垂直
 * 
 * 
 * @method twaver.charts.LegendPane.setOrientation
 * @param {String} v 图例面板显示的方向
 */
twaver.charts.LegendPane.prototype.setOrientation = function (v) {}

/**
 * 设置图例面板的行高
 * @method twaver.charts.LegendPane.setRowHeight
 * @param {Number} v 图例面板的行高
 */
twaver.charts.LegendPane.prototype.setRowHeight = function (v) {}

/**
 * 设置选中网元时图例对于元素的背景色
 * @method twaver.charts.LegendPane.setSelectBackgroundColor
 * @param {String} v 选中网元时图例对于元素的背景色
 */
twaver.charts.LegendPane.prototype.setSelectBackgroundColor = function (v) {}

/**
 * 设置选中网元时图例对于元素的前景色
 * @method twaver.charts.LegendPane.setSelectForegroundColor
 * @param {String} v 选中网元时图例对于元素的前景色
 */
twaver.charts.LegendPane.prototype.setSelectForegroundColor = function (v) {}


/**
 * 构造函数
 * 列是一种基本元素，它是存在于列容器中的（ColumnBox）。列是用来显示表格或树表的基本元素。
 * @class twaver.Column
 * @constructor
 * @extends twaver.Data
 * @param {Object} [id] ID为列的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型，为string或number类型时指的是列的ID，如果为Object类型，可以传入一个带表格列属性的对象，比如： var column = new twaver.Column({      width:100,     editable:true,      movable:true});
 * @return {twaver.Column} 列对象本身
 */
twaver.Column = function (id) {}

twaver.Column.prototype = new twaver.Data()

/**
 * 获取编辑列时显示的内容。如果列中设置了多个值，编辑时会以combobox的样式来呈现。
 * 例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']。
 * @method twaver.Column.getEnumInfo
 * @return {Object} 编辑列时显示的内容
 */
twaver.Column.prototype.getEnumInfo = function () {}

/**
 * 获取列的水平对齐方式。可选值：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的可以参考CSS中的text-align样式
 * @method twaver.Column.getHorizontalAlign
 * @return {String} 水平对齐方式
 */
twaver.Column.prototype.getHorizontalAlign = function () {}

/**
 * 获取表格的列所对应的网元属性名
 * @method twaver.Column.getPropertyName
 * @return {String} 表格列所对应网元的属性名
 */
twaver.Column.prototype.getPropertyName = function () {}

/**
 * 获取网元属性的类型。可选值有
 * 'field'：网元的自身变量属性，
 * 'accessor', 网元get/set方法的属性，
 * 'style'：网元样式属性,
 * 'client'：网元自定义属性
 * @method twaver.Column.getPropertyType
 * @return {String} 网元属性类型
 */
twaver.Column.prototype.getPropertyType = function () {}

/**
 * 获取表格列排序的方向，默认为升序。可选值有：
 * 'desc'：降序，
 * 'asc'：升序
 * 
 * @method twaver.Column.getSortDirection
 * @return {String} 排序的方向
 */
twaver.Column.prototype.getSortDirection = function () {}

/**
 * 获取表格列排序的规则函数
 * @method twaver.Column.getSortFunction
 * @return {Function} 排序的函数
 */
twaver.Column.prototype.getSortFunction = function () {}

/**
 * 从Data中获取对应的表格列的值，TWaver内部使用
 * @method twaver.Column.getValue
 * @param {twaver.Data} data 表格或树表格绑定的数据对象
 * @param {Object} view 表格或树表
 * @return {Object} 返回表格列的值
 */
twaver.Column.prototype.getValue = function (data, view) {}

/**
 * 获取表格列中值的类型。可选值有：
 * 'string'：字符串类型，
 * 'boolean'：布尔类型， 
 * 'color'：颜色类型， 
 * 'int'：整型，
 * 'number'：数字类型
 * @method twaver.Column.getValueType
 * @return {String} 表格列中值的类型
 */
twaver.Column.prototype.getValueType = function () {}

/**
 * 获取列的宽度
 * @method twaver.Column.getWidth
 * @return {Number} 列的宽度
 */
twaver.Column.prototype.getWidth = function () {}

/**
 * 是否为列的标识
 * @property IColumn
 * @type Boolean
 */
twaver.Column.prototype.IColumn = function () {}

/**
 * 判断是否可编辑
 * @method twaver.Column.isEditable
 * @return {Boolean} true为可编辑，false不可编辑
 */
twaver.Column.prototype.isEditable = function () {}

/**
 * 获取表格列内容是否为纯文本
 * @method twaver.Column.isInnerText
 * @return {Boolean} 返回表格列内容是否为纯文本，默认为true
 */
twaver.Column.prototype.isInnerText = function () {}

/**
 * 判断是否可移动
 * @method twaver.Column.isMovable
 * @return {String} true为可移动，false不可移动
 */
twaver.Column.prototype.isMovable = function () {}

/**
 * 判断是否可改变大小
 * @method twaver.Column.isResizable
 * @return {Boolean} true为可更改大小，false不可更改
 */
twaver.Column.prototype.isResizable = function () {}

/**
 * 判断是否可排序
 * @method twaver.Column.isSortable
 * @return {Boolean} true为可排序，false不可排序
 */
twaver.Column.prototype.isSortable = function () {}

/**
 * 判断列是否可见
 * @method twaver.Column.isVisible
 * @return {Boolean} true为可见，false不可见
 */
twaver.Column.prototype.isVisible = function () {}

/**
 * 单元格的renderer
 * @property renderCell
 * @type Function
 */
twaver.Column.prototype.renderCell = function () {}

/**
 * 表头的renderer
 * @property renderHeader
 * @type Function
 */
twaver.Column.prototype.renderHeader = function () {}

/**
 * 设置表格的列是否可编辑
 * @method twaver.Column.setEditable
 * @param {String} v true为可编辑，false不可编辑
 */
twaver.Column.prototype.setEditable = function (v) {}

/**
 * 设置编辑列时显示的内容。如果列中设置了多个值，编辑时会以combobox的样式来呈现。
 * 例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']
 * @method twaver.Column.setEnumInfo
 * @param {Object} v 编辑列时显示的内容
 */
twaver.Column.prototype.setEnumInfo = function (v) {}

/**
 * 设置列的水平对齐方式。可选值：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的可以参考CSS中的text-align样式
 * @method twaver.Column.setHorizontalAlign
 * @param {String} v 水平对齐方式
 */
twaver.Column.prototype.setHorizontalAlign = function (v) {}

/**
 * 设置表格列内容是否为纯文本
 * @method twaver.Column.setInnerText
 * @param {Boolean} v 表格列内容是否为纯文本
 */
twaver.Column.prototype.setInnerText = function (v) {}

/**
 * 设置表格列是否可移动
 * @method twaver.Column.setMovable
 * @param {Boolean} v true为可移动，false不可移动
 */
twaver.Column.prototype.setMovable = function (v) {}

/**
 * 设置表格列所对应网元的属性名。这里可以是网元自身的属性，样式属性或自定义的属性
 * @method twaver.Column.setPropertyName
 * @param {String} v 网元的属性名
 */
twaver.Column.prototype.setPropertyName = function (v) {}

/**
 * 设置网元属性的类型。可选值有
 * 'field'：网元的自身变量属性，
 * 'accessor', 网元get/set方法的属性，
 * 'style'：网元样式属性,
 * 'client'：网元自定义属性
 * @method twaver.Column.setPropertyType
 * @param {String} v 网元属性的类型
 */
twaver.Column.prototype.setPropertyType = function (v) {}

/**
 * 设置表格的列是否可改变大小
 * @method twaver.Column.setResizable
 * @param {Boolean} v true为可改变大小，false不可改变
 */
twaver.Column.prototype.setResizable = function (v) {}

/**
 * 设置表格的列是否可排序
 * @method twaver.Column.setSortable
 * @param {Boolean} v true为可以排序，false不可排序
 */
twaver.Column.prototype.setSortable = function (v) {}

/**
 * 设置排序的方向，默认为升序。可选值有：
 * 'desc'：降序，
 * 'asc'：升序
 * @method twaver.Column.setSortDirection
 * @param {String} v 排序的方向
 */
twaver.Column.prototype.setSortDirection = function (v) {}

/**
 * 设置表格列排序的规则函数
 * @method twaver.Column.setSortFunction
 * @param {Function} v 排序的函数
 */
twaver.Column.prototype.setSortFunction = function (v) {}

/**
 * 设置table上的值回写到data中，TWaver内部使用
 * @method twaver.Column.setValue
 * @param {twaver.Data} data 表格或树表格绑定的数据对象
 * @param {Object} value 表格列的值
 * @param {Object} view 表格或树表
 * @return {twaver.Data}
 */
twaver.Column.prototype.setValue = function (data, value, view) {}

/**
 * 得到表格列中值的类型。可选值有：
 * 'string'：字符串类型，
 * 'boolean'：布尔类型， 
 * 'color'：颜色类型， 
 * 'int'：整型，
 * 'number'：数字类型
 * @method twaver.Column.setValueType
 * @param {String} v 表格列中值的类型
 */
twaver.Column.prototype.setValueType = function (v) {}

/**
 * 设置表格的列是否可见
 * @method twaver.Column.setVisible
 * @param {String} v true为可见，false不可见
 */
twaver.Column.prototype.setVisible = function (v) {}

/**
 * 设置表格列的宽度
 * @method twaver.Column.setWidth
 * @param {Boolean} v 列的宽度
 */
twaver.Column.prototype.setWidth = function (v) {}


/**
 * 列容器，它继承于数据容器，是用于管理column（列）对象
 * @class twaver.ColumnBox
 * @constructor
 * @extends twaver.DataBox
 * @param {String} [name] 列容器的名称
 * @return {twaver.ColumnBox} 列容器对象
 */
twaver.ColumnBox = function (name) {}

twaver.ColumnBox.prototype = new twaver.DataBox()


/**
 * 构造函数
 * 可折叠面板是TWaver提供的用于存储面板的控件，这种面板中可以存放多个DIV面板，并对存放的DIV面板进行折叠操作。
 * 可折叠面板中的DIV面板只能同时打开其中的一个DIV面板，当点击另外一个DIV的标题时，它会将当前打开的DIV合并，并展开点击的DIV。
 * 可折叠面板使用DIV的标题来唯一标识其中的DIV对象。
 * 有关Accordion的使用可以参开LinkEditorDemo
 * @class twaver.controls.Accordion
 * @constructor
 * @extends twaver.controls.ControlBase
 * @return {twaver.controls.Accordion} 可折叠面板对象本身
 */
twaver.controls.Accordion = function () {}

twaver.controls.Accordion.prototype = new twaver.controls.ControlBase()

/**
 * 添加指定的内容面板到可折叠面板中
 * @method twaver.controls.Accordion.add
 * @param {String} title 指定内容面板的标题
 * @param {Object} content 指定的内容面板
 */
twaver.controls.Accordion.prototype.add = function (title, content) {}

/**
 * 清空折叠面板中所有的DIV
 * @method twaver.controls.Accordion.clear
 */
twaver.controls.Accordion.prototype.clear = function () {}

/**
 * 合并当前的面板
 * @method twaver.controls.Accordion.collapse
 */
twaver.controls.Accordion.prototype.collapse = function () {}

/**
 * 展开指定标题的面板
 * @method twaver.controls.Accordion.expand
 * @param {String} title 指定面板的标题
 */
twaver.controls.Accordion.prototype.expand = function (title) {}

/**
 * 获取可折叠面板中DIV面板边框底部的颜色，默认为twaver.Defaults.ACCORDION_BORDER_BOTTOM_COLOR
 * @method twaver.controls.Accordion.getBorderBottomColor
 * @return {String} 底部边框的颜色
 */
twaver.controls.Accordion.prototype.getBorderBottomColor = function () {}

/**
 * 获取面板合并时的图标，默认为twaver.Defaults.ACCORDION_COLLAPSE_ICON
 * @method twaver.controls.Accordion.getCollapseIcon
 * @return {String} 面板合并时的图标
 */
twaver.controls.Accordion.prototype.getCollapseIcon = function () {}

/**
 * 获取当前展开面板的标题
 * @method twaver.controls.Accordion.getCurrentTitle
 * @return {String} 面板的标题
 */
twaver.controls.Accordion.prototype.getCurrentTitle = function () {}

/**
 * 获取面板展开时的图标，默认为twaver.Defaults.ACCORDION_EXPAND_ICON
 * @method twaver.controls.Accordion.getExpandIcon
 * @return {String} 面板展开时的图标
 */
twaver.controls.Accordion.prototype.getExpandIcon = function () {}

/**
 * 获取可折叠面板图标位置
 * @method twaver.controls.Accordion.getIconPosition
 * @return {String} 返回可折叠面板图标位置
 */
twaver.controls.Accordion.prototype.getIconPosition = function () {}

/**
 * 获取DIV面板标题的背景色，默认为twaver.Defaults.ACCORDION_TITLE_BACKGROUND
 * @method twaver.controls.Accordion.getTitleBackground
 * @return {String} 标题的背景色
 */
twaver.controls.Accordion.prototype.getTitleBackground = function () {}

/**
 * 获取DIV面板标题的高度，默认为 twaver.Defaults.ACCORDION_TITLE_HEIGHT
 * @method twaver.controls.Accordion.getTitleHeight
 * @return {Number} 标题的高度值
 */
twaver.controls.Accordion.prototype.getTitleHeight = function () {}

/**
 * 获取折叠面板中所有DIV面板的标题列表
 * @method twaver.controls.Accordion.getTitles
 * @return {twaver.List} 面板标题的列表
 */
twaver.controls.Accordion.prototype.getTitles = function () {}

/**
 * 鼠标点击折叠面板时的处理函数
 * @method twaver.controls.Accordion.handleMouseDown
 * @param {MouseEvent} e 鼠标点击事件
 */
twaver.controls.Accordion.prototype.handleMouseDown = function (e) {}

/**
 * 合并面板时的处理函数，用户不需要自己调用此方法，但可以重载此方法实现自己的逻辑
 * @method twaver.controls.Accordion.onCollapsed
 * @param {String} title 合并面板的标题
 */
twaver.controls.Accordion.prototype.onCollapsed = function (title) {}

/**
 * 展开面板时的处理函数，用户不需要自己调用此方法，但可以重载此方法实现自己的逻辑
 * @method twaver.controls.Accordion.onExpanded
 * @param {String} title 展开面板的标题
 */
twaver.controls.Accordion.prototype.onExpanded = function (title) {}

/**
 * 删除指定的面板
 * @method twaver.controls.Accordion.remove
 * @param {String} title 指定面板的标题
 */
twaver.controls.Accordion.prototype.remove = function (title) {}

/**
 * 设置可折叠面板中DIV面板边框底部的颜色，默认为twaver.Defaults.ACCORDION_BORDER_BOTTOM_COLOR
 * @method twaver.controls.Accordion.setBorderBottomColor
 * @param {String} v 底部边框的颜色
 */
twaver.controls.Accordion.prototype.setBorderBottomColor = function (v) {}

/**
 * 设置面板合并时的图标，默认为twaver.Defaults.ACCORDION_COLLAPSE_ICON
 * @method twaver.controls.Accordion.setCollapseIcon
 * @param {String} v 面板合并时的图标
 */
twaver.controls.Accordion.prototype.setCollapseIcon = function (v) {}

/**
 * 设置面板展开时的图标，默认为twaver.Defaults.ACCORDION_EXPAND_ICON
 * @method twaver.controls.Accordion.setExpandIcon
 * @param {String} v 面板展开时的图标
 */
twaver.controls.Accordion.prototype.setExpandIcon = function (v) {}

/**
 * 设置可折叠面板图标位置
 * @method twaver.controls.Accordion.setIconPosition
 * @param {String} v 可折叠面板图标位置
 */
twaver.controls.Accordion.prototype.setIconPosition = function (v) {}

/**
 * 设置DIV面板标题的背景色，默认为twaver.Defaults.ACCORDION_TITLE_BACKGROUND
 * @method twaver.controls.Accordion.setTitleBackground
 * @param {String} v 所有标题的背景色
 */
twaver.controls.Accordion.prototype.setTitleBackground = function (v) {}

/**
 * 设置DIV面板标题的高度，默认为 twaver.Defaults.ACCORDION_TITLE_HEIGHT
 * @method twaver.controls.Accordion.setTitleHeight
 * @param {Number} v 标题显示的高度
 */
twaver.controls.Accordion.prototype.setTitleHeight = function (v) {}


/**
 * 它是一个采用边框布局的面板，分为上，下，左，右，中间五个区域，每个区域可以放置组件，DIV，ControlBase对象，可以设置各个区域所占的大小。中间区域采用的是填充的方式，也可以设置各个区域之间的间距
 * @class twaver.controls.BorderPane
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {Object} [center] 中间面板的对象，面板对象可以为DIV，也可以为ControlBase的类型
 * @param {Object} [top] 上面面板的对象，面板对象可以为DIV，也可以为ControlBase的类型
 * @param {Object} [right] 右边面板的对象，面板对象可以为DIV，也可以为ControlBase的类型
 * @param {Object} [bottom] 下面面板的对象，面板对象可以为DIV，也可以为ControlBase的类型
 * @param {Object} [left] 左边面板的对象，面板对象可以为DIV，也可以为ControlBase的类型
 * @return {twaver.controls.BorderPane}
 */
twaver.controls.BorderPane = function (center, top, right, bottom, left) {}

twaver.controls.BorderPane.prototype = new twaver.controls.ControlBase()

/**
 * 获取边框面板中下面部分的面板
 * @method twaver.controls.BorderPane.getBottom
 * @return {Object} 边框面板中下面部分的面板
 */
twaver.controls.BorderPane.prototype.getBottom = function () {}

/**
 * 获取边框面板中下面部分面板的高度
 * @method twaver.controls.BorderPane.getBottomHeight
 * @return {Number} 边框面板中下面部分面板的高度
 */
twaver.controls.BorderPane.prototype.getBottomHeight = function () {}

/**
 * 获取边框面板中中间部分的面板
 * @method twaver.controls.BorderPane.getCenter
 * @return {Object} 边框面板中中间部分的面板
 */
twaver.controls.BorderPane.prototype.getCenter = function () {}

/**
 * 获取各个组件之间的水平间距
 * @method twaver.controls.BorderPane.getHGap
 * @return {Number} 各个组件之间的水平间距
 */
twaver.controls.BorderPane.prototype.getHGap = function () {}

/**
 * 获取边框面板中左边部分的面板
 * @method twaver.controls.BorderPane.getLeft
 * @return {Object} 边框面板中左边部分的面板
 */
twaver.controls.BorderPane.prototype.getLeft = function () {}

/**
 * 获取边框面板中左边部分面板的宽度
 * @method twaver.controls.BorderPane.getLeftWidth
 * @return {Number} 边框面板中左边部分面板的宽度
 */
twaver.controls.BorderPane.prototype.getLeftWidth = function () {}

/**
 * 获取边框面板中右边部分的面板
 * @method twaver.controls.BorderPane.getRight
 * @return {Object} 边框面板中右边部分的面板
 */
twaver.controls.BorderPane.prototype.getRight = function () {}

/**
 * 获取边框面板中右边部分面板的宽度
 * @method twaver.controls.BorderPane.getRightWidth
 * @return {Number} 边框面板中右边部分的宽度
 */
twaver.controls.BorderPane.prototype.getRightWidth = function () {}

/**
 * 获取边框面板中上边部分的面板
 * @method twaver.controls.BorderPane.getTop
 * @return {Object} 边框面板中上边部分的面板
 */
twaver.controls.BorderPane.prototype.getTop = function () {}

/**
 * 获取边框面板中上边部分面板的高度
 * @method twaver.controls.BorderPane.getTopHeight
 * @return {Number} 边框面板中上边部分面板的高度
 */
twaver.controls.BorderPane.prototype.getTopHeight = function () {}

/**
 * 获取各个组件之间的垂直间距
 * @method twaver.controls.BorderPane.getVGap
 * @return {Number} 各个组件之间的垂直间距
 */
twaver.controls.BorderPane.prototype.getVGap = function () {}

/**
 * 设置边框面板中下面部分的面板
 * @method twaver.controls.BorderPane.setBottom
 * @param {Object} value 边框面板中下面部分的面板
 */
twaver.controls.BorderPane.prototype.setBottom = function (value) {}

/**
 * 设置边框面板中下面部分面板的高度
 * @method twaver.controls.BorderPane.setBottomHeight
 * @param {Number} v 边框面板中下面部分面板的高度
 */
twaver.controls.BorderPane.prototype.setBottomHeight = function (v) {}

/**
 * 设置边框面板中中间部分的面板
 * @method twaver.controls.BorderPane.setCenter
 * @param {Object} value 边框面板中中间部分的面板
 */
twaver.controls.BorderPane.prototype.setCenter = function (value) {}

/**
 * 设置各个组件之间的水平间距
 * @method twaver.controls.BorderPane.setHGap
 * @param {Number} v 各个组件之间的水平间距
 */
twaver.controls.BorderPane.prototype.setHGap = function (v) {}

/**
 * 设置边框面板中左边部分的面板
 * @method twaver.controls.BorderPane.setLeft
 * @param {Object} value 边框面板中左边部分的面板
 */
twaver.controls.BorderPane.prototype.setLeft = function (value) {}

/**
 * 设置边框面板中左边部分面板的宽度
 * @method twaver.controls.BorderPane.setLeftWidth
 * @param {Number} v 边框面板中左边部分面板的宽度
 */
twaver.controls.BorderPane.prototype.setLeftWidth = function (v) {}

/**
 * 设置边框面板中右边部分的面板
 * @method twaver.controls.BorderPane.setRight
 * @param {Object} value 边框面板中右边部分的面板
 */
twaver.controls.BorderPane.prototype.setRight = function (value) {}

/**
 * 设置边框面板中右边部分面板的宽度
 * @method twaver.controls.BorderPane.setRightWidth
 * @param {Number} v 边框面板中右边部分面板的宽度
 */
twaver.controls.BorderPane.prototype.setRightWidth = function (v) {}

/**
 * 设置边框面板中上边部分的面板
 * @method twaver.controls.BorderPane.setTop
 * @param {Object} value 边框面板中上边部分的面板
 */
twaver.controls.BorderPane.prototype.setTop = function (value) {}

/**
 * 设置边框面板中上边部分面板的高度
 * @method twaver.controls.BorderPane.setTopHeight
 * @param {Number} v 边框面板中上边部分面板的高度
 */
twaver.controls.BorderPane.prototype.setTopHeight = function (v) {}

/**
 * 设置各个组件之间的垂直间距
 * @method twaver.controls.BorderPane.setVGap
 * @param {Number} v 各个组件之间的垂直间距
 */
twaver.controls.BorderPane.prototype.setVGap = function (v) {}


/**
 * 劈分面板是用于将一块面板劈分成两块的面板，两块面板所占的比例大小是由劈分条的位置来决定的，并且可以通过移动劈分条来动态改变这两块面板的大小。
 * 劈分面板通过设置orientation来进行水平和垂直劈分
 * @class twaver.controls.SplitPane
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {Object} [firstView] 劈分面版的第一块面板，面板可以为DIV或ControlBase类型的对象
 * @param {Object} [nextView] 劈分面版的第二块面板，面板可以为DIV或ControlBase类型的对象
 * @param {String} [orientation] 劈分的方向，可以为'horizontal'或 'vertical'
 * @param {Number} [position] 劈分的百分比
 * @return {twaver.controls.SplitPane}
 */
twaver.controls.SplitPane = function (firstView, nextView, orientation, position) {}

twaver.controls.SplitPane.prototype = new twaver.controls.ControlBase()

/**
 * 设置劈分条的背景色，默认为twaver.Defaults.SPLITPANE_DIVIDER_BACKGROUND
 * @method twaver.controls.SplitPane.getDividerBackground
 * @return {String} 劈分条的背景颜色值
 */
twaver.controls.SplitPane.prototype.getDividerBackground = function () {}

/**
 * 获取劈分条的DIV
 * @method twaver.controls.SplitPane.getDividerDiv
 * @return {HTMLDivElement} 劈分条的DIV
 */
twaver.controls.SplitPane.prototype.getDividerDiv = function () {}

/**
 * 设置劈分条的透明度，默认为twaver.Defaults.SPLITPANE_DIVIDER_OPACITY
 * @method twaver.controls.SplitPane.getDividerOpacity
 * @return {Number} 劈分条的透明度，透明度的值的范围为0-1
 */
twaver.controls.SplitPane.prototype.getDividerOpacity = function () {}

/**
 * 设置劈分条的宽度，默认为twaver.Defaults.SPLITPANE_DIVIDER_WIDTH
 * @method twaver.controls.SplitPane.getDividerWidth
 * @return {Number} 劈分条的宽度
 */
twaver.controls.SplitPane.prototype.getDividerWidth = function () {}

/**
 * 获取劈分面板中的第一块面板
 * @method twaver.controls.SplitPane.getFirstView
 * @return {Object} 劈分面版的第一块面板，面板可以为DIV或ControlBase类型的对象
 */
twaver.controls.SplitPane.prototype.getFirstView = function () {}

/**
 * 获取劈分面板中劈分条拖动时显示的颜色，默认为twaver.Defaults.SPLITPANE_MASK_BACKGROUND
 * @method twaver.controls.SplitPane.getMaskBackground
 * @return {String} 拖动劈分条时的颜色值
 */
twaver.controls.SplitPane.prototype.getMaskBackground = function () {}

/**
 * 获取劈分面板中的第二块面板
 * @method twaver.controls.SplitPane.getNextView
 * @return {Object} 劈分面版的第二块面板，面板可以为DIV或ControlBase类型的对象
 */
twaver.controls.SplitPane.prototype.getNextView = function () {}

/**
 * 获取劈分面板的劈分方向，默认为twaver.Defaults.SPLITPANE_ORIENTATION
 * 可选值有：
 * 'vertical'：垂直，
 * 'horizontal'：水平
 * @method twaver.controls.SplitPane.getOrientation
 * @return {String} 劈分面板的劈分方向
 */
twaver.controls.SplitPane.prototype.getOrientation = function () {}

/**
 * 获取劈分条的位置，劈分条的位置决定了两块面板的大小。比如设置为0.7，那么第一块面板占70%，第二块占30%。默认为twaver.Defaults.SPLITPANE_POSITION
 * @method twaver.controls.SplitPane.getPosition
 * @return {Number} 劈分条的位置，取值范围0-1
 */
twaver.controls.SplitPane.prototype.getPosition = function () {}

/**
 * 获取分隔条是否可拖拽
 * @method twaver.controls.SplitPane.isDividerDraggable
 * @return {Boolean} 返回分隔条是否可拖拽，默认问true
 */
twaver.controls.SplitPane.prototype.isDividerDraggable = function () {}

/**
 * 获取劈分条的背景色，默认为twaver.Defaults.SPLITPANE_DIVIDER_BACKGROUND
 * @method twaver.controls.SplitPane.setDividerBackground
 * @param {String} v 劈分条的背景色
 */
twaver.controls.SplitPane.prototype.setDividerBackground = function (v) {}

/**
 * 设置分隔条是否可拖拽
 * @method twaver.controls.SplitPane.setDividerDraggable
 * @param {Boolean} v 分隔条是否可拖拽
 */
twaver.controls.SplitPane.prototype.setDividerDraggable = function (v) {}

/**
 * 获取劈分条的透明度，默认为twaver.Defaults.SPLITPANE_DIVIDER_OPACITY
 * @method twaver.controls.SplitPane.setDividerOpacity
 * @param {Number} v 劈分条的透明度，透明度的值为0-1
 */
twaver.controls.SplitPane.prototype.setDividerOpacity = function (v) {}

/**
 * 设置劈分条的宽度，默认为twaver.Defaults.SPLITPANE_DIVIDER_WIDTH
 * @method twaver.controls.SplitPane.setDividerWidth
 * @param {Number} v 劈分条的宽度
 */
twaver.controls.SplitPane.prototype.setDividerWidth = function (v) {}

/**
 * 设置劈分面板中的第一块面板
 * @method twaver.controls.SplitPane.setFirstView
 * @param {Object} value 劈分面版的第一块面板，面板可以为DIV或ControlBase类型的对象
 */
twaver.controls.SplitPane.prototype.setFirstView = function (value) {}

/**
 * 设置劈分面板中劈分条拖动时显示的颜色，默认为twaver.Defaults.SPLITPANE_MASK_BACKGROUND
 * @method twaver.controls.SplitPane.setMaskBackground
 * @param {String} v 拖到劈分条时的颜色值
 */
twaver.controls.SplitPane.prototype.setMaskBackground = function (v) {}

/**
 * 设置劈分面板中的第二块面板
 * @method twaver.controls.SplitPane.setNextView
 * @param {Object} value 劈分面版的第二块面板，面板可以为DIV或ControlBase类型的对象
 */
twaver.controls.SplitPane.prototype.setNextView = function (value) {}

/**
 * 设置劈分面板的劈分方向，默认为twaver.Defaults.SPLITPANE_ORIENTATION
 * 可选值有：
 * 'vertical'：垂直，
 * 'horizontal'：水平
 * @method twaver.controls.SplitPane.setOrientation
 * @param {String} v 劈分面板的劈分方向
 */
twaver.controls.SplitPane.prototype.setOrientation = function (v) {}

/**
 * 设置劈分条的位置，劈分条的位置决定了两块面板的大小。比如设置为0.7，那么第一块面板占70%，第二块占30%。默认为twaver.Defaults.SPLITPANE_POSITION
 * @method twaver.controls.SplitPane.setPosition
 * @param {Number} value 劈分条的位置，取值范围0-1
 */
twaver.controls.SplitPane.prototype.setPosition = function (value) {}


/**
 * 这个类用于管理表头
 * @class twaver.controls.TableHeader
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {twaver.controls.Table} table 指定的表格对象
 * @return {twaver.controls.TableHeader}
 */
twaver.controls.TableHeader = function (table) {}

twaver.controls.TableHeader.prototype = new twaver.controls.ControlBase()

/**
 * 设置表头上列的线的颜色，默认为twaver.Defaults.TABLEHEADER_COLUMN_LINE_COLOR
 * @method twaver.controls.TableHeader.getColumnLineColor
 * @return {String} 表头上列的线的颜色
 */
twaver.controls.TableHeader.prototype.getColumnLineColor = function () {}

/**
 * 设置表头的高度，默认为twaver.Defaults.TABLEHEADER_HEIGHT
 * @method twaver.controls.TableHeader.getHeight
 * @return {Number} 表头的高度
 */
twaver.controls.TableHeader.prototype.getHeight = function () {}

/**
 * 获取移动表头的某一列，将其插入表头列时线的颜色，默认为twaver.Defaults.TABLEHEADER_INSERT_BACKGROUND
 * @method twaver.controls.TableHeader.getInsertBackground
 * @return {String} 移动表头的某一列，将其插入表头列时线的颜色
 */
twaver.controls.TableHeader.prototype.getInsertBackground = function () {}

/**
 * 获取移动表头的某一列时这一列的背景色，默认为twaver.Defaults.TABLEHEADER_MOVE_BACKGROUND
 * @method twaver.controls.TableHeader.getMoveBackground
 * @return {String} 移动表头的某一列时这一列的背景色
 */
twaver.controls.TableHeader.prototype.getMoveBackground = function () {}

/**
 * 获取更改表头列大小时鼠标移至表头列时的公差，默认为twaver.Defaults.TABLEHEADER_RESIZE_TOLERANCE
 * 比如设置为5，也就是当鼠标到靠近表头上的分割线5个像素之内，都能改变表头的列的大小
 * @method twaver.controls.TableHeader.getResizeTolerance
 * @return {Number} 鼠标移至表头列更改表头列大小时的公差
 */
twaver.controls.TableHeader.prototype.getResizeTolerance = function () {}

/**
 * 获取表头对象的根DIV，这个DIV用于存放所有的表头
 * @method twaver.controls.TableHeader.getRootDiv
 * @return {HTMLDivElement} 表头上的根DIV
 */
twaver.controls.TableHeader.prototype.getRootDiv = function () {}

/**
 * 获取升序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_ASC_ICON
 * @method twaver.controls.TableHeader.getSortAscIcon
 * @return {String} 升序排序时表头上显示的图标
 */
twaver.controls.TableHeader.prototype.getSortAscIcon = function () {}

/**
 * 获取降序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_DESC_ICON
 * @method twaver.controls.TableHeader.getSortDescIcon
 * @return {String} 降序排序时表头上显示的图标
 */
twaver.controls.TableHeader.prototype.getSortDescIcon = function () {}

/**
 * 获取排序时，图标显示的位置。默认为 twaver.Defaults.TABLEHEADER_SORT_ICON_POSITION。比如设置为 '70% 50%'，那么图标显示的位置为横向在表头列上70%的位置，纵向在表头上50%的位置
 * @method twaver.controls.TableHeader.getSortIconPosition
 * @return {String} 图标显示的位置
 */
twaver.controls.TableHeader.prototype.getSortIconPosition = function () {}

/**
 * ColumnBox里列发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.controls.TableHeader.handleColumnBoxChange
 * @param {Object} e ColumnBox里列的变化事件
 */
twaver.controls.TableHeader.prototype.handleColumnBoxChange = function (e) {}

/**
 * ColumnBox里列的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.controls.TableHeader.handleColumnHierarchyChange
 * @param {Object} e ColumnBox里列的顺序发生变化事件
 */
twaver.controls.TableHeader.prototype.handleColumnHierarchyChange = function (e) {}

/**
 * ColumnBox里列的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.controls.TableHeader.handleColumnPropertyChange
 * @param {Object} e ColumnBox里列的属性发生变化的事件
 */
twaver.controls.TableHeader.prototype.handleColumnPropertyChange = function (e) {}

/**
 * 当组件属性更改后，须调用此方法，让组件重画
 * @method twaver.controls.TableHeader.invalidateDisplay
 */
twaver.controls.TableHeader.prototype.invalidateDisplay = function () {}

/**
 * 当拖动表格的滚动条时，须调用此方法，让组件重画
 * @method twaver.controls.TableHeader.invalidateScroll
 */
twaver.controls.TableHeader.prototype.invalidateScroll = function () {}

/**
 * 当调用renderColumn时，会调用此方法，用户不需要直接调用此方法，但可以重载此方法来实现自己的逻辑
 * @method twaver.controls.TableHeader.onColumnRendered
 * @param {HTMLDivElement} div 包含column的DIV对象
 * @param {twaver.Column} column 指定的列对象
 */
twaver.controls.TableHeader.prototype.onColumnRendered = function (div, column) {}

/**
 * 绘制表头的列
 * @method twaver.controls.TableHeader.renderColumn
 * @param {HTMLDivElement} div 包含column的DIV对象
 * @param {twaver.Column} column 指定的列对象
 */
twaver.controls.TableHeader.prototype.renderColumn = function (div, column) {}

/**
 * 设置表头上列的线的颜色，默认为twaver.Defaults.TABLEHEADER_COLUMN_LINE_COLOR
 * @method twaver.controls.TableHeader.setColumnLineColor
 * @param {String} v 表头上列的线的颜色
 */
twaver.controls.TableHeader.prototype.setColumnLineColor = function (v) {}

/**
 * 设置表头的高度，默认为twaver.Defaults.TABLEHEADER_HEIGHT
 * @method twaver.controls.TableHeader.setHeight
 * @param {Number} v 表头的高度
 */
twaver.controls.TableHeader.prototype.setHeight = function (v) {}

/**
 * 设置移动表头的列时，将其插入表头列时线的颜色，默认为twaver.Defaults.TABLEHEADER_INSERT_BACKGROUND
 * @method twaver.controls.TableHeader.setInsertBackground
 * @param {String} v 移动表头的列，将其插入表头列时线的颜色
 */
twaver.controls.TableHeader.prototype.setInsertBackground = function (v) {}

/**
 * 设置移动表头时的背景色，默认为twaver.Defaults.TABLEHEADER_MOVE_BACKGROUND
 * @method twaver.controls.TableHeader.setMoveBackground
 * @param {String} v 移动表头时的背景色
 */
twaver.controls.TableHeader.prototype.setMoveBackground = function (v) {}

/**
 * 设置更改表头列大小时鼠标移至表头列时的公差，默认为twaver.Defaults.TABLEHEADER_RESIZE_TOLERANCE
 * 比如设置为5，也就是当鼠标移到表头列上，容差在5个像素之内，都能更改表头列的大小
 * @method twaver.controls.TableHeader.setResizeTolerance
 * @param {Number} v 当鼠标靠近表头中的分隔条多少像素时即可以更改表头中列的列宽。
 */
twaver.controls.TableHeader.prototype.setResizeTolerance = function (v) {}

/**
 * 设置升序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_ASC_ICON
 * @method twaver.controls.TableHeader.setSortAscIcon
 * @param {String} v 升序排序时表头上显示的图标
 */
twaver.controls.TableHeader.prototype.setSortAscIcon = function (v) {}

/**
 * 获取降序排序时表头上显示的图标，默认为twaver.Defaults.TABLEHEADER_SORT_DESC_ICON
 * @method twaver.controls.TableHeader.setSortDescIcon
 * @param {String} v 降序排序时表头上显示的图标
 */
twaver.controls.TableHeader.prototype.setSortDescIcon = function (v) {}

/**
 * 设置排序时，图标显示的位置。默认为 twaver.Defaults.TABLEHEADER_SORT_ICON_POSITION。比如设置为 '70% 50%'，那么图标显示的位置为横向在表头列上70%的位置，纵向在表头上50%的位置
 * @method twaver.controls.TableHeader.setSortIconPosition
 * @param {String} v 图标显示的位置
 */
twaver.controls.TableHeader.prototype.setSortIconPosition = function (v) {}

/**
 * 重画组件，调用validate方法后，此方法会被调
 * @method twaver.controls.TableHeader.validateDisplay
 */
twaver.controls.TableHeader.prototype.validateDisplay = function () {}


/**
 * 表格面板，它是用于保存表格的一种面板，表格面板中包含了表格体和表头，即使在创建表格面板时不传入表头，TWaver也会自动为表格体创建一个默认的表头
 * @class twaver.controls.TablePane
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {twaver.controls.Table} table 指定表格对象
 * @param {twaver.controls.TableHeader} [tableHeader] 可选，如果为空时，TWaver会创建一个默认的表头
 * @return {twaver.controls.TablePane}
 */
twaver.controls.TablePane = function (table, tableHeader) {}

twaver.controls.TablePane.prototype = new twaver.controls.ControlBase()

/**
 * 获取表格面板中的表格体对象
 * @method twaver.controls.TablePane.getTable
 * @return {twaver.controls.Table}
 */
twaver.controls.TablePane.prototype.getTable = function () {}

/**
 * 获取表格面板中的表头对象
 * @method twaver.controls.TablePane.getTableHeader
 * @return {twaver.controls.TableHeader}
 */
twaver.controls.TablePane.prototype.getTableHeader = function () {}


/**
 * 选项卡面板是一种视图组件，它是和选项卡容器绑定的，用于显示选项卡容器中的选项卡元素。
 * 例如：
 * var tabPane = new TabPane();
 * this.tabPane.setTabRadius(8);
 * this.tabPane.setTabGap(5);
 * this.tabPane.getTabBox().add(tab1);
 * this.tabPane.getTabBox().add(tab2);
 * @class twaver.controls.TabPane
 * @constructor
 * @extends twaver.controls.ControlBase
 * @return {twaver.controls.TabPane} 创建选项卡面板
 */
twaver.controls.TabPane = function () {}

twaver.controls.TabPane.prototype = new twaver.controls.ControlBase()

/**
 * 获取选项卡上关闭的图标。默认为twaver.Defaults.TABPANE_CLOSE_ICON
 * @method twaver.controls.TabPane.getCloseIcon
 * @return {String} 选项卡上关闭的图标
 */
twaver.controls.TabPane.prototype.getCloseIcon = function () {}

/**
 * 获取内容DIV，它是用于存放选项卡上的视图组件
 * @method twaver.controls.TabPane.getContentDiv
 * @return {HTMLDivElement} 选项卡面板中的内容DIV
 */
twaver.controls.TabPane.prototype.getContentDiv = function () {}

/**
 * 获取当前的选项卡，当前选项卡为选项卡容器中最后一个选中的数据
 * @method twaver.controls.TabPane.getCurrentTab
 * @return {twaver.Tab} 选项卡数据
 */
twaver.controls.TabPane.prototype.getCurrentTab = function () {}

/**
 * 获取当前的选项卡视图，当前选项卡视图为选项卡容器中最后一个选中的数据的视图组件
 * @method twaver.controls.TabPane.getCurrentView
 * @return {Object} 当前的选项卡视图，选项卡视图为DIV或ControlBase类型的对象
 */
twaver.controls.TabPane.prototype.getCurrentView = function () {}

/**
 * 获取选项卡不可用时的颜色值，默认为twaver.Defaults.TABPANE_DISABLED_COLOR
 * @method twaver.controls.TabPane.getDisabledColor
 * @return {String} 选项卡不可用时的颜色值
 */
twaver.controls.TabPane.prototype.getDisabledColor = function () {}

/**
 * 获取选项卡上文字的水平对齐方式，默认为
 * twaver.Defaults.TABPANE_HORIZONTAL_ALIGN
 * 文字的对齐方式可选值为：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * 
 * @method twaver.controls.TabPane.getHorizontalAlign
 * @return {String} 选项卡上文字的水平对齐方式
 */
twaver.controls.TabPane.prototype.getHorizontalAlign = function () {}

/**
 * 获取在移动选项卡并将其插入选项卡面板时线的颜色，默认为twaver.Defaults.TABPANE_INSERT_BACKGROUND
 * 
 * @method twaver.controls.TabPane.getInsertBackground
 * @return {String} 插入选项卡时线的颜色
 */
twaver.controls.TabPane.prototype.getInsertBackground = function () {}

/**
 * 设置移动某一选项卡时该选项卡的背景色，默认为twaver.Defaults.TABPANE_MOVE_BACKGROUND
 * @method twaver.controls.TabPane.getMoveBackground
 * @return {String} 移动某一选项卡时该选项卡的背景色
 */
twaver.controls.TabPane.prototype.getMoveBackground = function () {}

/**
 * 获取当鼠标靠近选项卡的右边框多少像素时即可以更改表头中列的列宽，默认值为twaver.Defaults.TABPANE_TAB_ORIENTATION。比如鼠标没有移动到选项卡上，但是在这个公差范围值之内，那么鼠标也会变成改变大小的状态。
 * @method twaver.controls.TabPane.getResizeTolerance
 * @return {Number} 当鼠标靠近选项卡的右边框多少像素时即可以更改表头中列的列宽
 */
twaver.controls.TabPane.prototype.getResizeTolerance = function () {}

/**
 * 获取选中的选项卡的背景颜色，默认为twaver.Defaults.TABPANE_SELECT_BACKGROUND
 * @method twaver.controls.TabPane.getSelectBackground
 * @return {String} 选中的选项卡的背景颜色
 */
twaver.controls.TabPane.prototype.getSelectBackground = function () {}

/**
 * 获取选项卡的背景色，默认为twaver.Defaults.TABPANE_TAB_BACKGROUND
 * @method twaver.controls.TabPane.getTabBackground
 * @return {String} 选项卡的背景色
 */
twaver.controls.TabPane.prototype.getTabBackground = function () {}

/**
 * 获取选项卡数据容器
 * @method twaver.controls.TabPane.getTabBox
 * @return {twaver.TabBox} 选项卡数据容器
 */
twaver.controls.TabPane.prototype.getTabBox = function () {}

/**
 * 获取选项卡的DIV
 * @method twaver.controls.TabPane.getTabDiv
 * @return {Object} 选项卡的DIV
 */
twaver.controls.TabPane.prototype.getTabDiv = function () {}

/**
 * 获取选项卡之间的间距，默认为twaver.Defaults.TABPANE_TAB_GAP
 * @method twaver.controls.TabPane.getTabGap
 * @return {Number} 选项卡之间的间距
 */
twaver.controls.TabPane.prototype.getTabGap = function () {}

/**
 * 获取选项卡的高度，默认为twaver.Defaults.TABPANE_TAB_HEIGHT
 * @method twaver.controls.TabPane.getTabHeight
 * @return {Number} 选项卡的高度
 */
twaver.controls.TabPane.prototype.getTabHeight = function () {}

/**
 * 获取选项卡所处的位置，默认为twaver.Defaults.TABPANE_TAB_ORIENTATION
 * 。可选值有：
 * 'top'，'bottom'
 * @method twaver.controls.TabPane.getTabOrientation
 * @return {String} 选项卡所处的位置
 */
twaver.controls.TabPane.prototype.getTabOrientation = function () {}

/**
 * 获取选项卡的圆角半径，默认为twaver.Defaults.TABPANE_TAB_RADIUS
 * @method twaver.controls.TabPane.getTabRadius
 * @return {Number} 选项卡的圆角半径
 */
twaver.controls.TabPane.prototype.getTabRadius = function () {}

/**
 * TabBox中的Tab发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.TabPane.handleTabChange
 * @param {Object} e TabBox中的Tab发生变化的事件
 */
twaver.controls.TabPane.prototype.handleTabChange = function (e) {}

/**
 * 无效选项卡，在等待指定的毫秒数后刷新选项卡界面，当选项卡的属性发生更改后，须调用此方法，让选项卡重画
 * 
 * @method twaver.controls.TabPane.invalidateTab
 * @param {Number} [delay] 延迟刷新等待的毫秒数，可选，默认为twaver.Defaults.CALL_LATER_DELAY
 */
twaver.controls.TabPane.prototype.invalidateTab = function (delay) {}

/**
 * 当关闭当前的选项卡时，是否选中下一个Tab页。默认为twaver.Defaults.TABPANE_SELECT_NEXT_ON_CLOSE
 * @method twaver.controls.TabPane.isSelectNextOnClose
 * @return {Boolean} true为选中下一个选项卡，否则为false
 */
twaver.controls.TabPane.prototype.isSelectNextOnClose = function () {}

/**
 * 当前选项卡隐藏时是否自动选中下一个选项卡
 * @method twaver.controls.TabPane.isSelectNextOnInVisible
 * @return {Boolean} 当前选项卡隐藏时是否自动选中下一个选项卡
 */
twaver.controls.TabPane.prototype.isSelectNextOnInVisible = function () {}

/**
 * 当调用renderTab时会调用此方法，用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.TabPane.onTabRendered
 * @param {HTMLDivElement} div 包含选项卡的DIV
 * @param {twaver.Tab} tab 指定的选项卡
 */
twaver.controls.TabPane.prototype.onTabRendered = function (div, tab) {}

/**
 * 当Tab上添加视图组件时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.TabPane.onViewAdded
 * @param {Object} view Tab的视图组件添加的事件
 */
twaver.controls.TabPane.prototype.onViewAdded = function (view) {}

/**
 * 当Tab上删除视图组件时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.TabPane.onViewRemoved
 * @param {Object} view Tab的视图组件删除的事件
 */
twaver.controls.TabPane.prototype.onViewRemoved = function (view) {}

/**
 * 绘制指定的选项卡，用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.TabPane.renderTab
 * @param {HTMLDivElement} div 包含指定选项卡的DIV
 * @param {twaver.Tab} tab 指定的选项卡
 */
twaver.controls.TabPane.prototype.renderTab = function (div, tab) {}

/**
 * 设置选项卡上关闭的图标。默认为twaver.Defaults.TABPANE_CLOSE_ICON
 * @method twaver.controls.TabPane.setCloseIcon
 * @param {String} v 选项卡上关闭的图标
 */
twaver.controls.TabPane.prototype.setCloseIcon = function (v) {}

/**
 * 设置选项卡不可用时的颜色值，默认为twaver.Defaults.TABPANE_DISABLED_COLOR
 * @method twaver.controls.TabPane.setDisabledColor
 * @param {String} v 选项卡不可用时的颜色值
 */
twaver.controls.TabPane.prototype.setDisabledColor = function (v) {}

/**
 * 设置选项卡上文字的水平对齐方式，默认为
 * twaver.Defaults.TABPANE_HORIZONTAL_ALIGN
 * 文字的对齐方式可选值为：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * @method twaver.controls.TabPane.setHorizontalAlign
 * @param {String} v 选项卡上文字的水平对齐方式
 */
twaver.controls.TabPane.prototype.setHorizontalAlign = function (v) {}

/**
 * 设置在移动选项卡并插入选项卡时线的颜色，默认为twaver.Defaults.TABPANE_INSERT_BACKGROUND
 * 
 * @method twaver.controls.TabPane.setInsertBackground
 * @param {String} v 插入选项卡时线的颜色
 */
twaver.controls.TabPane.prototype.setInsertBackground = function (v) {}

/**
 * 设置移动某一选项卡时该选项卡的背景色，默认为twaver.Defaults.TABPANE_MOVE_BACKGROUND
 * @method twaver.controls.TabPane.setMoveBackground
 * @param {String} v 移动某一选项卡时该选项卡的背景色
 */
twaver.controls.TabPane.prototype.setMoveBackground = function (v) {}

/**
 * 设置当鼠标靠近分隔条多少像素时可以改变列宽的像素数，默认值为twaver.Defaults.TABPANE_TAB_TOLERANCE。比如鼠标没有移动到选项卡上，但是在这个公差范围值之内，那么鼠标也会变成改变大小的状态。
 * @method twaver.controls.TabPane.setResizeTolerance
 * @param {Number} v 当鼠标靠近分隔条多少像素时可以改变列宽的像素数
 */
twaver.controls.TabPane.prototype.setResizeTolerance = function (v) {}

/**
 * 设置选中的选项卡的背景颜色，默认为twaver.Defaults.TABPANE_SELECT_BACKGROUND
 * @method twaver.controls.TabPane.setSelectBackground
 * @param {String} v 选中的选项卡的背景颜色
 */
twaver.controls.TabPane.prototype.setSelectBackground = function (v) {}

/**
 * 当关闭当前的选项卡时，设置是否选中下一个Tab页。默认为twaver.Defaults.TABPANE_SELECT_NEXT_ON_CLOSE
 * @method twaver.controls.TabPane.setSelectNextOnClose
 * @param {Boolean} v true为选中下一个选项卡，否则为false
 */
twaver.controls.TabPane.prototype.setSelectNextOnClose = function (v) {}

/**
 * 设置当前选项卡隐藏时是否自动选中下一个选项卡
 * @method twaver.controls.TabPane.setSelectNextOnInVisible
 * @param {Boolean} v 当前选项卡隐藏时是否自动选中下一个选项卡
 */
twaver.controls.TabPane.prototype.setSelectNextOnInVisible = function (v) {}

/**
 * 设置选项卡的背景色，默认为twaver.Defaults.TABPANE_TAB_BACKGROUND
 * @method twaver.controls.TabPane.setTabBackground
 * @param {String} v 选项卡的背景色
 */
twaver.controls.TabPane.prototype.setTabBackground = function (v) {}

/**
 * 获取选项卡之间的间距，默认为twaver.Defaults.TABPANE_TAB_GAP
 * @method twaver.controls.TabPane.setTabGap
 * @param {Number} v 选项卡之间的间距
 */
twaver.controls.TabPane.prototype.setTabGap = function (v) {}

/**
 * 设置选项卡的高度，默认为twaver.Defaults.TABPANE_TAB_HEIGHT
 * @method twaver.controls.TabPane.setTabHeight
 * @param {Number} v 选项卡的高度
 */
twaver.controls.TabPane.prototype.setTabHeight = function (v) {}

/**
 * 设置选项卡所处的位置，默认为twaver.Defaults.TABPANE_TAB_ORIENTATION
 * 。可选值有：
 * 'top'，'bottom'
 * @method twaver.controls.TabPane.setTabOrientation
 * @param {String} v 选项卡所处的位置
 */
twaver.controls.TabPane.prototype.setTabOrientation = function (v) {}

/**
 * 设置选项卡的圆角半径，默认为twaver.Defaults.TABPANE_TAB_RADIUS
 * @method twaver.controls.TabPane.setTabRadius
 * @param {Number} v 选项卡的圆角半径
 */
twaver.controls.TabPane.prototype.setTabRadius = function (v) {}

/**
 * 重画Tab页，调用validate方法后，此方法会被调用
 * @method twaver.controls.TabPane.validateTab
 */
twaver.controls.TabPane.prototype.validateTab = function () {}


/**
 * 构造函数
 * 它定义了一个带标题栏的面板，可以为标题栏设置显示的图标，文字，背景色，高度，以及文字的对齐方法
 * @class twaver.controls.TitlePane
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {Object} [content] 内容面板，可以是DIV或ControlBase类型的对象
 * @param {String} [title] 指定的标题
 * @param {String} [icon] 标题栏的图标
 * @return {twaver.controls.TitlePane}
 */
twaver.controls.TitlePane = function (content, title, icon) {}

twaver.controls.TitlePane.prototype = new twaver.controls.ControlBase()

/**
 * 获取带标题面板中所包含的内容面板
 * @method twaver.controls.TitlePane.getContent
 * @return {Object} 内容面板对象
 */
twaver.controls.TitlePane.prototype.getContent = function () {}

/**
 * 获取标题栏上显示的图标
 * @method twaver.controls.TitlePane.getIcon
 * @return {String} 标题栏上的图标
 */
twaver.controls.TitlePane.prototype.getIcon = function () {}

/**
 * 获取标题栏上显示的标题名称
 * @method twaver.controls.TitlePane.getTitle
 * @return {String} 标题名称
 */
twaver.controls.TitlePane.prototype.getTitle = function () {}

/**
 * 获取标题的背景色。默认为twaver.Defaults.TITLEPANE_TITLE_BACKGROUND
 * @method twaver.controls.TitlePane.getTitleBackground
 * @return {String} 标题的背景色
 */
twaver.controls.TitlePane.prototype.getTitleBackground = function () {}

/**
 * 获取标题栏的DIV
 * @method twaver.controls.TitlePane.getTitleDiv
 * @return {HTMLDivElement} 标题栏的DIV
 */
twaver.controls.TitlePane.prototype.getTitleDiv = function () {}

/**
 * 获取标题栏的高度，默认为twaver.Defaults.TITLEPANE_TITLE_HEIGHT
 * @method twaver.controls.TitlePane.getTitleHeight
 * @return {Number} 标题栏的高度
 */
twaver.controls.TitlePane.prototype.getTitleHeight = function () {}

/**
 * 获取标题的水平对齐方式，默认为twaver.Defaults.TITLEPANE_TITLE_HORIZONTAL_ALIGN
 * 标题的对齐方式可选值为：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * @method twaver.controls.TitlePane.getTitleHorizontalAlign
 * @return {String} 标题的水平对齐方式
 */
twaver.controls.TitlePane.prototype.getTitleHorizontalAlign = function () {}

/**
 * 设置标题面板中所包含的内容面板
 * @method twaver.controls.TitlePane.setContent
 * @param {Object} value 内容面板对象，可以为DIV或为ControlBase类型的对象
 */
twaver.controls.TitlePane.prototype.setContent = function (value) {}

/**
 * 设置标题栏上显示的图标
 * @method twaver.controls.TitlePane.setIcon
 * @param {String} v 标题栏上的图标
 */
twaver.controls.TitlePane.prototype.setIcon = function (v) {}

/**
 * 设置标题栏上显示的标题名称
 * @method twaver.controls.TitlePane.setTitle
 * @param {String} v 标题名称
 */
twaver.controls.TitlePane.prototype.setTitle = function (v) {}

/**
 * 设置标题的背景色。默认为twaver.Defaults.TITLEPANE_TITLE_BACKGROUND
 * @method twaver.controls.TitlePane.setTitleBackground
 * @param {String} v 标题的背景色
 */
twaver.controls.TitlePane.prototype.setTitleBackground = function (v) {}

/**
 * 设置标题栏的高度，默认为twaver.Defaults.TITLEPANE_TITLE_HEIGHT
 * @method twaver.controls.TitlePane.setTitleHeight
 * @param {Number} v 标题栏的高度
 */
twaver.controls.TitlePane.prototype.setTitleHeight = function (v) {}

/**
 * 设置标题的水平对齐方式，默认为twaver.Defaults.TITLEPANE_TITLE_HORIZONTAL_ALIGN
 * 标题的对齐方式可选值为：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * @method twaver.controls.TitlePane.setTitleHorizontalAlign
 * @param {String} v 标题的水平对齐方式
 */
twaver.controls.TitlePane.prototype.setTitleHorizontalAlign = function (v) {}


/**
 * 视图基类，和数据容器（DataBox）关联，用于图形化展示数据容器中的数据
 * @class twaver.controls.ViewBase
 * @constructor
 * @extends twaver.controls.ControlBase
 * @return {twaver.controls.ViewBase}
 */
twaver.controls.ViewBase = function () {}

twaver.controls.ViewBase.prototype = new twaver.controls.ControlBase()

/**
 * 添加交互事件监听器，用于监听用户各种操作
 * @method twaver.controls.ViewBase.addInteractionListener
 * @param {Function} listener 回调函数
 * @param {Object} [scope] 可选，回调函数的作用域，默认为null，即全局
 * @param {Boolean} [ahead] 可选，是否将此监听放在最前面，默认为false
 * @example viewBase.addInteractionListener(function (e) {
 *     console.log(e.kind, e.element);
 * });
 * 
 * kind可以为下列值：
 * createElement 创建网元
 * clickElement 单击网元
 * doubleClickElement 双击网元 
 * clickBackground 单击背景
 * doubleClickBackground 双击背景
 * removeElement 删除网元
 * selectAll 选中所有网元
 * upSubNetwork 进入上一层子网
 * enterSubNetwork 进入子网
 * bundleLink 展开或合并连线捆绑
 * expandGroup 展开组
 * liveMoveStart 开始实时移动网元
 * liveMoveBetween 正在实时移动网元
 * liveMoveEnd 结束实时移动网元
 * lazyMoveStart 开始延迟移动网元
 * lazyMoveBetween 正在延迟移动网元
 * lazyMoveEnd 结束延迟移动网元
 * liveResizeStart 开始实时改变网元大小
 * liveResizeBetween 正在实时改变网元大小
 * liveResizeEnd 结束实时改变网元大小
 * lazyResizeStart 开始延迟改变网元大小
 * lazyResizeBetween 正在延迟改变网元大小
 * lazyResizeEnd 结束延迟改变网元大小
 * selectStart 开始框选
 * selectBetween 正在框选
 * selectEnd 结束框选
 * liveMovePointStart 开始移动ShapeLink或ShapeNode的点
 * liveMovePointBetween 正在移动ShapeLink或ShapeNode的点
 * liveMovePointEnd 结束移动ShapeLink或ShapeNode的点
 */
twaver.controls.ViewBase.prototype.addInteractionListener = function (listener, scope, ahead) {}

/**
 * 添加视图变化事件，用于在视图无效、刷新之前或刷新之后执行自定义动作
 * @method twaver.controls.ViewBase.addViewListener
 * @param {Function} listener 回调函数
 * @param {Object} [scope] 可选，回调函数的作用域，默认为null，即全局
 * @param {Boolean} [ahead] 可选，是否将此监听放在最前面，默认为false
 * @example viewBase.addViewListener(function (e) {
 *     console.log(e.kind);
 * });
 * kind可以为：
 * invalidate 无效视图
 * validateStart 刷新视图前
 * validateEnd 刷新视图后
 */
twaver.controls.ViewBase.prototype.addViewListener = function (listener, scope, ahead) {}

/**
 * 派发交互事件
 * @method twaver.controls.ViewBase.fireInteractionEvent
 * @param {Object} evt 交互事件
 */
twaver.controls.ViewBase.prototype.fireInteractionEvent = function (evt) {}

/**
 * 当视图需要重画时，TWaver调用此方法派发视图变化事件
 * @method twaver.controls.ViewBase.fireViewEvent
 * @param {Object} evt 视图变化事件
 */
twaver.controls.ViewBase.prototype.fireViewEvent = function (evt) {}

/**
 * 获取指定数据元的图标，默认返回data#getIcon
 * @method twaver.controls.ViewBase.getIcon
 * @param {twaver.Data} data 数据元
 * @return {String} 返回指定数据元的图标
 */
twaver.controls.ViewBase.prototype.getIcon = function (data) {}

/**
 * 获取指定数据元的标签，默认返回Data#getName
 * @method twaver.controls.ViewBase.getLabel
 * @param {twaver.Data} data 数据元
 * @return {String} 返回指定数据元的标签
 */
twaver.controls.ViewBase.prototype.getLabel = function (data) {}

/**
 * 获取指定数据元的选中颜色，默认值为twaver.Defaults.SELECT_COLOR
 * @method twaver.controls.ViewBase.getSelectColor
 * @param {twaver.Data} data 数据元
 * @return {String} 返回指定数据元的选中颜色
 */
twaver.controls.ViewBase.prototype.getSelectColor = function (data) {}

/**
 * 获取选择模型，如果ViewBase#isShareSelectionModel为true（默认值为true），则返回和ViewBase绑定的DataBox的SelectionModel，否则返回视图自己独立的SelectionModel
 * @method twaver.controls.ViewBase.getSelectionModel
 * @return {twaver.SelectionModel} 返回选择模型
 */
twaver.controls.ViewBase.prototype.getSelectionModel = function () {}

/**
 * 获取指定数据元的提示信息，默认返回Data#getToolTip
 * @method twaver.controls.ViewBase.getToolTip
 * @param {twaver.Data} data 数据元
 * @return {String} 返回指定数据元的提示信息
 */
twaver.controls.ViewBase.prototype.getToolTip = function (data) {}

/**
 * 获取点击时是否让视图获得焦点
 * @method twaver.controls.ViewBase.isFocusOnClick
 * @return {Boolean} 返回点击时是否让视图获得焦点
 */
twaver.controls.ViewBase.prototype.isFocusOnClick = function () {}

/**
 * 判断指定数据元是否可以被选择，此方法包装了SelectionModel的isSelectable方法
 * @method twaver.controls.ViewBase.isSelectable
 * @param {twaver.Data} data 数据元
 * @return {Boolean} 返回指定数据元是否可以被选择
 */
twaver.controls.ViewBase.prototype.isSelectable = function (data) {}

/**
 * 获取指定数据元是否已被选中
 * @method twaver.controls.ViewBase.isSelected
 * @param {twaver.Data} data 数据元
 * @return {Boolean} 返回指定数据元是否已被选中
 */
twaver.controls.ViewBase.prototype.isSelected = function (data) {}

/**
 * 获取是否和视图绑定的数据容器共享选择模型，默认为true
 * @method twaver.controls.ViewBase.isShareSelectionModel
 * @return {Boolean} 返回是否和视图绑定的数据容器共享选择模型
 */
twaver.controls.ViewBase.prototype.isShareSelectionModel = function () {}

/**
 * 删除指定作用域的交互监听器，作用域必须和添加监听器时的作用域一致，相同的作用域的相同监听器只能成功添加一次
 * @method twaver.controls.ViewBase.removeInteractionListener
 * @param {Function} listener 交互监听器
 * @param {Object} [scope] 交互监听器的作用域，可选，默认为null，代表全局
 */
twaver.controls.ViewBase.prototype.removeInteractionListener = function (listener, scope) {}

/**
 * 删除选中的网元
 * @method twaver.controls.ViewBase.removeSelection
 * @return {twaver.List} 返回被删除的网元集合
 */
twaver.controls.ViewBase.prototype.removeSelection = function () {}

/**
 * 删除指定作用域的视图变化监听器，作用域必须和添加监听器时的作用域一致，相同的作用域的相同监听器只能成功添加一次
 * @method twaver.controls.ViewBase.removeViewListener
 * @param {Function} listener 视图变化监听器
 * @param {Object} [scope] 视图变化监听器的作用域，可选，默认为null，代表全局
 */
twaver.controls.ViewBase.prototype.removeViewListener = function (listener, scope) {}

/**
 * 选中所有网元
 * @method twaver.controls.ViewBase.selectAll
 * @return {twaver.List} 返回所有选中的网元
 */
twaver.controls.ViewBase.prototype.selectAll = function () {}

/**
 * 设置点击时是否让Network获得焦点
 * @method twaver.controls.ViewBase.setFocusOnClick
 * @param {Boolean} v 点击时是否让Network获得焦点
 */
twaver.controls.ViewBase.prototype.setFocusOnClick = function (v) {}

/**
 * 设置是否和Network绑定的ElementBox共享选择模型，默认为true
 * @method twaver.controls.ViewBase.setShareSelectionModel
 * @param {Boolean} shareSelectionModel 是否和Network绑定的ElementBox共享选择模型
 */
twaver.controls.ViewBase.prototype.setShareSelectionModel = function (shareSelectionModel) {}


/**
 * 构造函数
 * 网元是电信拓扑中一种最基本的数据，它继承于Data，存在于网元容器中，网元上可以添加告警信息。
 * 
 * @class twaver.Element
 * @constructor
 * @extends twaver.Data
 * @param {Object} [id] 网元ID，用于唯一标识网元。如果为空，twaver会按照默认的规则给网元ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是网元的ID，如果为Object类型，可以传入一个带网元属性的对象，比如： var element = new twaver.Element({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} });
 * @return {twaver.Element} 网元对象本身
 */
twaver.Element = function (id) {}

twaver.Element.prototype = new twaver.Data()

/**
 * 反序列化JSON数据到指定的网元样式
 * @method twaver.Element.deserializeStyleJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据
 * @param {String} styleProp 网元样式名
 */
twaver.Element.prototype.deserializeStyleJson = function (serializer, json, styleProp) {}

/**
 * 反序列化XML数据到指定的网元样式
 * @method twaver.Element.deserializeStyleXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} styleXML XML数据
 * @param {String} styleProp 网元样式名
 */
twaver.Element.prototype.deserializeStyleXml = function (serializer, styleXML, styleProp) {}

/**
 * 获取网元的告警状态对象，告警状态对象是用于存放网元上的所有告警信息
 * @method twaver.Element.getAlarmState
 * @return {twaver.AlarmState} 告警状态对象
 */
twaver.Element.prototype.getAlarmState = function () {}

/**
 * 获取网元的CanvasUI类名称, twaver.canvas.Network用此类实例化网元对应的UI实例
 * @method twaver.Element.getCanvasUIClass
 * @return {String} 返回网元的CanvasUI类名称
 */
twaver.Element.prototype.getCanvasUIClass = function () {}

/**
 * 获取网元UI的类名，网元UI用于在network组件上绘制这个网元。TWaver会用返回的这个UI类去创建UI对象
 * @method twaver.Element.getElementUIClass
 * @return {String} 网元UI的类名
 */
twaver.Element.prototype.getElementUIClass = function () {}

/**
 * 获取这个网元所在的图层ID。如果为空，则这个网元处于默认的图层上
 * @method twaver.Element.getLayerId
 * @return {Object} 图层ID
 */
twaver.Element.prototype.getLayerId = function () {}

/**
 * 通过样式名称去获取这个网元样式的值
 * @method twaver.Element.getStyle
 * @param {String} styleProp 网元样式名
 * @param {String} [returnDefaultIfNull] 当属性为空时，是否需要返回默认的值。默认值为true
 * @return {Object} 网元的样式值
 */
twaver.Element.prototype.getStyle = function (styleProp, returnDefaultIfNull) {}

/**
 * 获取网元上所有的样式属性集合
 * @method twaver.Element.getStyleProperties
 * @return {twaver.List} 网元上所有样式属性名的集合
 */
twaver.Element.prototype.getStyleProperties = function () {}

/**
 * 获取网元矢量UI的类名，网元UI用于在network组件上绘制这个网元。TWaver会用返回的这个UI类去创建UI对象
 * @method twaver.Element.getVectorUIClass
 * @return {twaver.vector.ElementUI} 矢量UI类型
 */
twaver.Element.prototype.getVectorUIClass = function () {}

/**
 * 是否为网元的标识，默认值为true
 * @property IElement
 * @type Boolean
 */
twaver.Element.prototype.IElement = function () {}

/**
 * 网元是否需要置底
 * @method twaver.Element.isAdjustedToBottom
 * @return {Boolean} true为调整置底，否则为false
 */
twaver.Element.prototype.isAdjustedToBottom = function () {}

/**
 * 判断这个网元是否具有样式的标识，默认为true。
 * @property IStyle
 * @type Boolean
 */
twaver.Element.prototype.IStyle = function () {}

/**
 * 当更改网元的样式时，回调此方法
 * @method twaver.Element.onStyleChanged
 * @param {String} styleProp 网元样式名
 * @param {String} oldValue 网元样式原值
 * @param {String} newValue 网元样式新值
 */
twaver.Element.prototype.onStyleChanged = function (styleProp, oldValue, newValue) {}

/**
 * 如果只有一个参数，则返回指定样式的值，相当于getStyle；否则设置样式，相当于setStyle
 * @method twaver.Element.s
 * @param {String} style 样式名称
 * @param {Object} value 样式值
 * @return {twaver.Element} 如果只有一个参数，则返回指定样式的值，否则返回网元自身
 */
twaver.Element.prototype.s = function (style, value) {}

/**
 * 序列化指定的样式到JSON数据
 * @method twaver.Element.serializeStyleJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} stylePrope 网元样式名
 * @param {twaver.Element} newInstance 序列化的实例对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.Element.prototype.serializeStyleJson = function (serializer, stylePrope, newInstance, dataObject) {}

/**
 * 序列化样式到XML数据
 * @method twaver.Element.serializeStyleXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} stylePrope 网元样式名
 * @param {twaver.Element} newInstance 序列化的实例对象
 */
twaver.Element.prototype.serializeStyleXml = function (serializer, stylePrope, newInstance) {}

/**
 * 设置图层ID
 * @method twaver.Element.setLayerId
 * @param {Object} v 图层ID
 */
twaver.Element.prototype.setLayerId = function (v) {}

/**
 * 设置网元上指定样式名的属性值
 * @method twaver.Element.setStyle
 * @param {String} styleProp 网元样式名
 * @param {String} newValue 网元样式值
 * @return {twaver.Element} 对象本身
 */
twaver.Element.prototype.setStyle = function (styleProp, newValue) {}


/**
 * ElementBox是网元容器，它用于管理TWaver中所有的网元对象，比如节点，连线，组，子网和所有的设备上的网元，比如网格，跟随者。
 * 
 * ElementBox是处于TWaver MVC框架中的M（模型）层，网元在这一层上是不可见的，但是可以进行管理，比如添加，删除，更新以及序列化。
 * 
 * ElementBox是一个大的网元容器，它里面又包含了一些小的容器，比如告警容器（AlarmBox），管理所有的告警对象；图层容器（LayerBox），管理所有的图层对象；选择容器（SelectionModule），管理所有选中的网元。它和DataBox的区别在于它可以进行告警和图层的管理。
 * 
 * ElementBox管理着所有的网元，它可以驱动所有关联的视图组件，比如Network，Tree，Table。一个网元容器可以驱动多个视图组件
 * 
 * 
 * 
 * @class twaver.ElementBox
 * @constructor
 * @extends twaver.DataBox
 * @param {String} [name] 网元容器的名称
 * @return {twaver.ElementBox} 网元容器对象
 */
twaver.ElementBox = function (name) {}

twaver.ElementBox.prototype = new twaver.DataBox()

/**
 * 触发网元Index更改的相关属性名。默认有：'fromAgent'，'toAgent'，'expanded'，'parent'，'host'
 * @property IS_INTERESTED_ADJUSTELEMENTINDEX_PROPERTY
 * @type Object
 * @static
 */
twaver.ElementBox.IS_INTERESTED_ADJUSTELEMENTINDEX_PROPERTY = function () {}

/**
 * 添加网元序号变化的事件监听器。一个网元容器中可以添加多个事件监听器。
 * @method twaver.ElementBox.addIndexChangeListener
 * @param {Function} listener 网元序号变化的事件监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 * @param {Boolean} [ahead] 是否添加在集合的最前方，如果为空，则添加在最后一个位置
 */
twaver.ElementBox.prototype.addIndexChangeListener = function (listener, scope, ahead) {}

/**
 * 调整网元的序号，将网元设置到最顶部。TWaver内部使用
 * @method twaver.ElementBox.adjustElementIndex
 * @param {twaver.Element} element 指定的网元对象
 */
twaver.ElementBox.prototype.adjustElementIndex = function (element) {}

/**
 * 反序列化JSON数据到网元容器的Style属性
 * @method twaver.ElementBox.deserializeStyleJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} json JSON数据
 * @param {String} styleProp 反序列化的样式属性名称
 */
twaver.ElementBox.prototype.deserializeStyleJson = function (serializer, json, styleProp) {}

/**
 * 反序列化XML数据到网元容器的Style属性
 * @method twaver.ElementBox.deserializeStyleXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} styleXml XML数据
 * @param {String} styleProp 序列化的样式属性名称
 */
twaver.ElementBox.prototype.deserializeStyleXml = function (serializer, styleXml, styleProp) {}

/**
 * 派发网元Index变化事件。TWaver内部使用
 * @method twaver.ElementBox.fireIndexChange
 * @param {twaver.Element} element Index发生变化的网元
 * @param {Number} oldIndex 网元Index的原值
 * @param {Number} newIndex 网元Index的新值
 */
twaver.ElementBox.prototype.fireIndexChange = function (element, oldIndex, newIndex) {}

/**
 * 迭代指定图层上的网元。如果指定的图层为空，则迭代网元容器中的所有网元
 * @method twaver.ElementBox.forEachByLayer
 * @param {Function} callbackFunction 回调函数
 * @param {twaver.Layer} layer 迭代网元的图层
 * @param {Object} [scope] 回调函数的作用域，为空时指的是顶层的面板，即window
 */
twaver.ElementBox.prototype.forEachByLayer = function (callbackFunction, layer, scope) {}

/**
 * 反序迭代指定图层上的网元。如果指定的图层为空，则迭代网元容器中的所有网元
 * @method twaver.ElementBox.forEachByLayerReverse
 * @param {Function} callbackFunction 回调函数
 * @param {twaver.Layer} layer 迭代网元的图层
 * @param {Object} [scope] 回调函数的作用域，为空时指的是顶层的面板，即window
 */
twaver.ElementBox.prototype.forEachByLayerReverse = function (callbackFunction, layer, scope) {}

/**
 * 获取网元容器中的告警容器
 * @method twaver.ElementBox.getAlarmBox
 * @return {twaver.AlarmBox} 告警容器
 */
twaver.ElementBox.prototype.getAlarmBox = function () {}

/**
 * 获取告警传播对象：默认孩子最高级别的告警会传给父亲
 * @method twaver.ElementBox.getAlarmStatePropagator
 * @return {twaver.AlarmStatePropagator} 告警传播对象
 */
twaver.ElementBox.prototype.getAlarmStatePropagator = function () {}

/**
 * 获取网元容器中的图层容器
 * @method twaver.ElementBox.getLayerBox
 * @return {twaver.LayerBox} 图层容器
 */
twaver.ElementBox.prototype.getLayerBox = function () {}

/**
 * 获取网元容器某个样式属性的值
 * @method twaver.ElementBox.getStyle
 * @param {String} styleProp 网元容器的样式属性名称
 * @param {String} [returnDefaultIfNull] 
 * @return {Object} 网元容器的样式属性值
 */
twaver.ElementBox.prototype.getStyle = function (styleProp, returnDefaultIfNull) {}

/**
 * 获取网元容器的所有样式属性名称
 * @method twaver.ElementBox.getStyleProperties
 * @return {twaver.List} 样式属性的集合
 */
twaver.ElementBox.prototype.getStyleProperties = function () {}

/**
 * 是否是Style的标识
 * @property IStyle
 * @type Boolean
 */
twaver.ElementBox.prototype.IStyle = function () {}

/**
 * 当网元容器的样式发生变化时，回调此函数
 * @method twaver.ElementBox.onStyleChanged
 * @param {String} styleProp 网元容器的样式属性名称
 * @param {String} oldValue 网元容器的样式属性原值
 * @param {String} newValue 网元容器的样式属性新值
 */
twaver.ElementBox.prototype.onStyleChanged = function (styleProp, oldValue, newValue) {}

/**
 * 移除网元序号变化的事件监听器
 * @method twaver.ElementBox.removeIndexChangeListener
 * @param {Function} listener 网元序号变化的事件监听器
 * @param {Object} [scope] 监听器的作用域，为空时指的是window
 */
twaver.ElementBox.prototype.removeIndexChangeListener = function (listener, scope) {}

/**
 * 设置指定的网元处于某个网元的底层。当refElement为空时，设置指定在网元容器的最底层
 * @method twaver.ElementBox.sendToBottom
 * @param {twaver.Element} element 网元对象
 * @param {twaver.Element} [refElement] 为空时，将网元设置到最底层
 */
twaver.ElementBox.prototype.sendToBottom = function (element, refElement) {}

/**
 * 设置指定的网元处于网元容易的最顶层
 * @method twaver.ElementBox.sendToTop
 * @param {twaver.Element} element 网元对象
 */
twaver.ElementBox.prototype.sendToTop = function (element) {}

/**
 * 序列化网元容器的Style属性到JSON数据
 * @method twaver.ElementBox.serializeStyleJson
 * @param {twaver.JsonSerializer} serializer JSON序列化对象
 * @param {String} stylePrope 序列化的样式属性名称
 * @param {twaver.ElementBox} newInstance 序列化的实例对象
 * @param {Object} dataObject JSON数据对象
 */
twaver.ElementBox.prototype.serializeStyleJson = function (serializer, stylePrope, newInstance, dataObject) {}

/**
 * 序列化网元容器的Style属性到XML数据
 * @method twaver.ElementBox.serializeStyleXml
 * @param {twaver.XmlSerializer} serializer XML序列化对象
 * @param {String} stylePrope 网元样式属性名称
 * @param {twaver.ElementBox} newInstance 序列化的实例对象
 */
twaver.ElementBox.prototype.serializeStyleXml = function (serializer, stylePrope, newInstance) {}

/**
 * 设置网元容器的样式值
 * @method twaver.ElementBox.setStyle
 * @param {String} styleProp 网元样式属性名称
 * @param {String} newValue 网元样式属性的新值
 * @return {twaver.ElementBox} 网元容器对象本身
 */
twaver.ElementBox.prototype.setStyle = function (styleProp, newValue) {}

/**
 * 开始批量添加网元
 * @method twaver.ElementBox.startBatch
 * @param {Function} callback 批量添加数据回调函数
 * @param {Object} scope 回调函数的作用域
 */
twaver.ElementBox.prototype.startBatch = function (callback, scope) {}


/**
 * 图层是在LayerBox中存在的，图层用于对网元进行分层，在ElementBox中的所有网元都显示在某个图层上，同一图层上网元的LayerID是相同的。
 * 
 * 图层在network上是不可见的，但是它可以进行上移，下移。也可以对图层上的网元进行是否可见，是否可移动，是否可编辑的设置
 * 
 * @class twaver.Layer
 * @constructor
 * @extends twaver.Data
 * @param {Object} id 图层ID，用于唯一标识这个图层对象。如果为空，TWaver会按照默认的规则给图层ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是图层的ID，如果为Object类型，可以传入一个带图层属性的对象，比如： var layer = new twaver.Layer({     name:'topLayer',    movable: false,     editable:false});
 * @return {twaver.Layer}
 */
twaver.Layer = function (id) {}

twaver.Layer.prototype = new twaver.Data()

/**
 * 是否为图层的标识
 * @property ILayer
 * @type Boolean
 */
twaver.Layer.prototype.ILayer = function () {}

/**
 * 判断图层是否可编辑，当设置为false时，其上的网元也不可编辑
 * @method twaver.Layer.isEditable
 * @return {Boolean} true为可编辑，false不可编辑
 */
twaver.Layer.prototype.isEditable = function () {}

/**
 * 判断图层是否可移动，当设置为false时，其上的网元也不可移动
 * @method twaver.Layer.isMovable
 * @return {Boolean} true为可移动，false为不可移动
 */
twaver.Layer.prototype.isMovable = function () {}

/**
 * 获取是否可旋转
 * @method twaver.Layer.isRotatable
 * @return {Boolean} 返回是否可旋转
 */
twaver.Layer.prototype.isRotatable = function () {}

/**
 * 判断图层是否可见，当设置为false时，其上的网元也不可见
 * @method twaver.Layer.isVisible
 * @return {Boolean} true为可见，false不可见
 */
twaver.Layer.prototype.isVisible = function () {}

/**
 * 设置图层是否可编辑，当设置为false时，其上的网元也不可编辑
 * @method twaver.Layer.setEditable
 * @param {Boolean} v true为可编辑，false不可编辑
 */
twaver.Layer.prototype.setEditable = function (v) {}

/**
 * 设置图层是否可移动，当设置为false时，其上的网元也不可移动
 * @method twaver.Layer.setMovable
 * @param {Boolean} v true为可移动，false不可移动
 */
twaver.Layer.prototype.setMovable = function (v) {}

/**
 * 设置是否可旋转
 * @method twaver.Layer.setRotatable
 * @param {Boolean} v 是否可旋转
 */
twaver.Layer.prototype.setRotatable = function (v) {}

/**
 * 设置图层是否可见，当设置为false时，其上的网元也不可见
 * @method twaver.Layer.setVisible
 * @param {Boolean} v true为可见，false不可见
 */
twaver.Layer.prototype.setVisible = function (v) {}


/**
 * 图层容器是一种特殊的容器，它是包含在网元容器中的，作为网元容器的一部分，用于管理网元容器中所有的图层对象，比如上移，下移，添加，删除，显示，隐藏图层。处于上层图层上的网元会显示在其下图层上的网元上方。
 * 
 * 当创建一个图层容器时，就会有一个默认的图层对象生成，所有没有指定图层ID的网元都会显示在这个图层上，这个图层称之为defaultLayer。这个图层是不能被删除的。
 * 
 * 当删除一个图层时，所有在它上面的网元在网元容器中不会被删除
 * 
 * @class twaver.LayerBox
 * @constructor
 * @extends twaver.DataBox
 * @param {twaver.ElementBox} elementBox 网元容器对象
 * @return {twaver.LayerBox} 图层对象本身
 */
twaver.LayerBox = function (elementBox) {}

twaver.LayerBox.prototype = new twaver.DataBox()

/**
 * 获取默认的图层对象
 * @method twaver.LayerBox.getDefaultLayer
 * @return {twaver.Layer} 默认的图层对象
 */
twaver.LayerBox.prototype.getDefaultLayer = function () {}

/**
 * 获取包含图层容器的网元容器
 * @method twaver.LayerBox.getElementBox
 * @return {twaver.ElementBox} 包含图层容器的网元容器
 */
twaver.LayerBox.prototype.getElementBox = function () {}

/**
 * 获取指定网元上的图层
 * @method twaver.LayerBox.getLayerByElement
 * @param {twaver.Element} element 指定的网元对象
 * @return {twaver.Layer} 图层对象
 */
twaver.LayerBox.prototype.getLayerByElement = function (element) {}


/**
 * 告警附件，用于在拓扑上显示网元的新发告警信息，一般显示为包含告警级别和数量的冒泡信息，默认告警冒泡附件应该显示在附件层，以免某个网元的告警信息被其他网元覆盖
 * @class twaver.network.AlarmAttachment
 * @constructor
 * @extends twaver.network.BasicAttachment
 * @param {twaver.network.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在附件层，可选，默认为false
 * @return {twaver.network.AlarmAttachment}
 */
twaver.network.AlarmAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.network.AlarmAttachment.prototype = new twaver.network.BasicAttachment()


/**
 * 网格对应的视图对象，网格是由grid.row.count样式属性指定的行数和grid.column.count样式属性指定的列数构成的表格，其他网元可以填充到其网格中
 * @class twaver.network.GridUI
 * @constructor
 * @extends twaver.network.NodeUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Grid} element 网格
 * @return {twaver.network.GridUI}
 */
twaver.network.GridUI = function (network, element) {}

twaver.network.GridUI.prototype = new twaver.network.NodeUI()

/**
 * 画网格内容
 * @method twaver.network.GridUI.drawGridBody
 */
twaver.network.GridUI.prototype.drawGridBody = function () {}


/**
 * 组对应的视图对象，组有合并和展开两种状态，合并时，组的孩子不可见；展开时，孩子可见
 * @class twaver.network.GroupUI
 * @constructor
 * @extends twaver.network.NodeUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Group} element 组
 * @return {twaver.network.GroupUI}
 */
twaver.network.GroupUI = function (network, element) {}

twaver.network.GroupUI.prototype = new twaver.network.NodeUI()

/**
 * 画展开后的组，用group.shape样式属性定义的形状画出矢量图形
 * @method twaver.network.GroupUI.drawExpandedGroup
 */
twaver.network.GroupUI.prototype.drawExpandedGroup = function () {}

/**
 * 获取所有孩子的区域
 * @method twaver.network.GroupUI.getChildrenRects
 * @return {twaver.List} 返回所有孩子的区域
 */
twaver.network.GroupUI.prototype.getChildrenRects = function () {}


/**
 * 创建正交直角连线交互处理器
 * @class twaver.network.interaction.CreateOrthogonalLinkInteraction
 * @constructor
 * @extends twaver.network.interaction.CreateLinkInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {String} [typeOrLinkFunction] 连线类型或者连线生成器方法，可选，默认值为twaver.Link
 * @param {String} [linkType] 连线样式，可选，默认值为orthogonal
 * @param {Boolean} [isByControlPoint] 是否按百分比劈分正交直角连线，可选，默认值为true
 * @param {Number} [splitPercent] 劈分点距起始节点的百分比位置，可选，默认值为0.5
 * @param {Boolean} [isSplitByPercent] 是否按百分比劈分正交直角连线，可选，默认值为true
 * @return {twaver.network.interaction.CreateOrthogonalLinkInteraction}
 */
twaver.network.interaction.CreateOrthogonalLinkInteraction = function (network, typeOrLinkFunction, linkType, isByControlPoint, splitPercent, isSplitByPercent) {}

twaver.network.interaction.CreateOrthogonalLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


/**
 * 创建折线交互处理器，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点，可以用Network#setCreateShapeLinkInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.network.interaction.CreateShapeLinkInteraction
 * @constructor
 * @extends twaver.network.interaction.CreateLinkInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrLinkFunction] 折线类型或者折线生成器方法，可选，默认值为twaver.ShapeLink
 * @return {twaver.network.interaction.CreateShapeLinkInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateShapeLinkInteraction(network, twaver.ShapeLink),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateShapeLinkInteraction(network,
 *     function (fromNode, toNode, points) {
 *         var link = new twaver.ShapeLink();
 *         link.setFromNode(fromNode);
 *         link.setToNode(toNode);
 *         link.setStyle('link.color', 'red');
 *         if(points){
 *             link.setPoints(points);
 *         }
 *         return link;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.network.interaction.CreateShapeLinkInteraction = function (network, typeOrLinkFunction) {}

twaver.network.interaction.CreateShapeLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


/**
 * 标签附件，用于显示网元名称
 * @class twaver.network.LabelAttachment
 * @constructor
 * @extends twaver.network.BasicAttachment
 * @param {twaver.network.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在附件层，可选，默认为false
 * @return {twaver.network.LabelAttachment}
 */
twaver.network.LabelAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.network.LabelAttachment.prototype = new twaver.network.BasicAttachment()

/**
 * 获取标签文本
 * @method twaver.network.LabelAttachment.getLabel
 * @return {String} 返回标签文本
 */
twaver.network.LabelAttachment.prototype.getLabel = function () {}


/**
 * 连线捆绑标签附件，用于显示多条连线捆绑后，显示的标签
 * @class twaver.network.LinkHandlerAttachment
 * @constructor
 * @extends twaver.network.BasicAttachment
 * @param {twaver.network.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在附件层，可选，默认为false
 * @return {twaver.network.LinkHandlerAttachment}
 */
twaver.network.LinkHandlerAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.network.LinkHandlerAttachment.prototype = new twaver.network.BasicAttachment()


/**
 * 创建和Network绑定的鹰眼视图，鹰眼是Network的缩略图，能通过鹰眼导航Network。鹰眼支持各种操作：
 * 单击：将Network的视图中心导航到指定坐标点
 * 双击：将Network的缩放级别还原为1
 * 按着CTRL键框选：将Network缩放并平移到指定区域
 * @class twaver.network.Overview
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {twaver.network.Network} network 和Overview绑定的Network
 * @return {twaver.network.Overview}
 * @example var overview = new twaver.network.Overview(network);
 * overview.adjustBounds({x:0, y:0, width:200, height:200});
 */
twaver.network.Overview = function (network) {}

twaver.network.Overview.prototype = new twaver.controls.ControlBase()

/**
 * 将Network的视图中心点滚动到指定的相对于Overview的坐标
 * @method twaver.network.Overview.centerNetwork
 * @param {Object} point 相对于Overview的包含x和y属性的Object对象
 * @param {Boolean} [animate] 可选，如果为true，则有动画效果，否则没有，默认为false
 */
twaver.network.Overview.prototype.centerNetwork = function (point, animate) {}

/**
 * 获取Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
 * @method twaver.network.Overview.getFillColor
 * @return {String} 返回Overview的填充色
 */
twaver.network.Overview.prototype.getFillColor = function () {}

/**
 * 获取鼠标所在的逻辑坐标，包含x，y属性
 * @method twaver.network.Overview.getLogicalPoint
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回鼠标所在的逻辑坐标，包含x，y属性
 */
twaver.network.Overview.prototype.getLogicalPoint = function (e) {}

/**
 * 获取Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
 * @method twaver.network.Overview.getMaxPackingHeight
 * @return {Number} 返回Overview最大伸缩高度
 */
twaver.network.Overview.prototype.getMaxPackingHeight = function () {}

/**
 * 获取Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
 * @method twaver.network.Overview.getMaxPackingWidth
 * @return {Number} 返回Overview最大伸缩宽度
 */
twaver.network.Overview.prototype.getMaxPackingWidth = function () {}

/**
 * 获取和Overview绑定的拓扑视图
 * @method twaver.network.Overview.getNetwork
 * @return {twaver.network.Network} 返回和Overview绑定的拓扑视图
 */
twaver.network.Overview.prototype.getNetwork = function () {}

/**
 * 获取Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
 * @method twaver.network.Overview.getOutlineColor
 * @return {String} 返回Overview边框线条颜色
 */
twaver.network.Overview.prototype.getOutlineColor = function () {}

/**
 * 获取Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
 * @method twaver.network.Overview.getOutlineWidth
 * @return {Number} 返回Overview边框线条宽度
 */
twaver.network.Overview.prototype.getOutlineWidth = function () {}

/**
 * 获取Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
 * @method twaver.network.Overview.getPadding
 * @return {Number} 返回Overview边缘空白大小
 */
twaver.network.Overview.prototype.getPadding = function () {}

/**
 * 获取Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
 * @method twaver.network.Overview.getSelectColor
 * @return {String} 返回Overview框选时轮廓的线条颜色
 */
twaver.network.Overview.prototype.getSelectColor = function () {}

/**
 * 获取Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
 * @method twaver.network.Overview.getSelectWidth
 * @return {Number} 返回Overview框选时轮廓的线条宽度
 */
twaver.network.Overview.prototype.getSelectWidth = function () {}

/**
 * 获取操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
 * @method twaver.network.Overview.isAnimate
 * @return {Boolean} 返回是否使用动画效果
 */
twaver.network.Overview.prototype.isAnimate = function () {}

/**
 * 设置操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
 * @method twaver.network.Overview.setAnimate
 * @param {Boolean} v 是否使用动画效果
 */
twaver.network.Overview.prototype.setAnimate = function (v) {}

/**
 * 设置Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
 * @method twaver.network.Overview.setFillColor
 * @param {String} v Overview的填充色
 */
twaver.network.Overview.prototype.setFillColor = function (v) {}

/**
 * 设置Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
 * @method twaver.network.Overview.setMaxPackingHeight
 * @param {Number} v Overview最大伸缩高度
 */
twaver.network.Overview.prototype.setMaxPackingHeight = function (v) {}

/**
 * 设置Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
 * @method twaver.network.Overview.setMaxPackingWidth
 * @param {Number} v Overview最大伸缩宽度
 */
twaver.network.Overview.prototype.setMaxPackingWidth = function (v) {}

/**
 * 设置和Overview绑定的拓扑视图
 * @method twaver.network.Overview.setNetwork
 * @param {twaver.network.Network} network 拓扑视图
 */
twaver.network.Overview.prototype.setNetwork = function (network) {}

/**
 * 设置Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
 * @method twaver.network.Overview.setOutlineColor
 * @param {String} v Overview边框线条颜色
 */
twaver.network.Overview.prototype.setOutlineColor = function (v) {}

/**
 * 设置Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
 * @method twaver.network.Overview.setOutlineWidth
 * @param {Number} v Overview边框线条宽度
 */
twaver.network.Overview.prototype.setOutlineWidth = function (v) {}

/**
 * 设置Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
 * @method twaver.network.Overview.setPadding
 * @param {Number} v Overview边缘空白大小
 */
twaver.network.Overview.prototype.setPadding = function (v) {}

/**
 * 设置Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
 * @method twaver.network.Overview.setSelectColor
 * @param {String} v Overview框选时轮廓的线条颜色
 */
twaver.network.Overview.prototype.setSelectColor = function (v) {}

/**
 * 设置Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
 * @method twaver.network.Overview.setSelectWidth
 * @param {Number} v Overview框选时轮廓的线条宽度
 */
twaver.network.Overview.prototype.setSelectWidth = function (v) {}


/**
 * 构造可旋转节点的视图对象
 * @class twaver.network.RotatableNodeUI
 * @constructor
 * @extends twaver.network.NodeUI
 * @param {twaver.network.Network} network 拓扑视图
 * @param {twaver.RotatableNode} element 可旋转节点
 * @return {twaver.network.RotatableNodeUI}
 */
twaver.network.RotatableNodeUI = function (network, element) {}

twaver.network.RotatableNodeUI.prototype = new twaver.network.NodeUI()


/**
 * 折线对应的视图对象，由一组点连接而成
 * @class twaver.network.ShapeLinkUI
 * @constructor
 * @extends twaver.network.LinkUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.ShapeLink} element 折线
 * @return {twaver.network.ShapeLinkUI}
 */
twaver.network.ShapeLinkUI = function (network, element) {}

twaver.network.ShapeLinkUI.prototype = new twaver.network.LinkUI()


/**
 * 多边形网元对应的多边形网元视图，多边形由一组点组成，并将这些点依次连接而组成
 * @class twaver.network.ShapeNodeUI
 * @constructor
 * @extends twaver.network.NodeUI
 * @param {twaver.network.Network} network 拓扑
 * @param {twaver.Element} element 多边形网元
 * @return {twaver.network.ShapeNodeUI}
 */
twaver.network.ShapeNodeUI = function (network, element) {}

twaver.network.ShapeNodeUI.prototype = new twaver.network.NodeUI()


/**
 * 构造函数
 * 属性项是一种基本元素，它是存在于属性容器中的（PropertyBox）。属性列是用来显示在属性页中的基本元素
 * @class twaver.Property
 * @constructor
 * @extends twaver.Data
 * @param {Object} id ID为属性的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是属性的ID，如果为Object类型，可以传入一个属性的对象，比如： var property = new twaver.Property({  name:'Name',    horizontalAlign:'left',    width:100});
 * @return {twaver.Property}
 */
twaver.Property = function (id) {}

twaver.Property.prototype = new twaver.Data()

/**
 * 获取属性项所属的Category的名称
 * @method twaver.Property.getCategoryName
 * @return {String} Category的名称
 */
twaver.Property.prototype.getCategoryName = function () {}

/**
 * 获取编辑属性项时显示的内容。如果属性项中设置了多个值，编辑时会以combobox的样式来呈现。
 * 例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']。
 * @method twaver.Property.getEnumInfo
 * @return {Object} 编辑属性项时显示的内容
 */
twaver.Property.prototype.getEnumInfo = function () {}

/**
 * 获取属性项的水平对齐方式。可选值：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的可以参考CSS中的text-align样式
 * @method twaver.Property.getHorizontalAlign
 * @return {String} 水平对齐方式
 */
twaver.Property.prototype.getHorizontalAlign = function () {}

/**
 * 获取属性表的属性项所对应的网元属性名
 * @method twaver.Property.getPropertyName
 * @return {String} 属性表的属性项所对应网元的属性名
 */
twaver.Property.prototype.getPropertyName = function () {}

/**
 * 获取网元属性的类型。可选值有
 * 'field'：网元的自身变量属性，
 * 'accessor', 网元get/set方法的属性，
 * 'style'：网元样式属性,
 * 'client'：网元自定义属性
 * @method twaver.Property.getPropertyType
 * @return {String} 网元属性类型
 */
twaver.Property.prototype.getPropertyType = function () {}

/**
 * 从Data中获取对应的属性项的值，TWaver内部使用
 * @method twaver.Property.getValue
 * @param {twaver.Data} data 属性页绑定的数据对象
 * @param {twaver.controls.PropertySheet} view 绑定的属性页
 * @return {Object} 返回属性项的值
 */
twaver.Property.prototype.getValue = function (data, view) {}

/**
 * 获取属性项中值的类型。可选值有：
 * 'string'：字符串类型，
 * 'boolean'：布尔类型， 
 * 'color'：颜色类型， 
 * 'int'：整型，
 * 'number'：数字类型
 * @method twaver.Property.getValueType
 * @return {String} 属性项中值的类型
 */
twaver.Property.prototype.getValueType = function () {}

/**
 * 是否是属性项的标志
 * @property IProperty
 * @type Boolean
 */
twaver.Property.prototype.IProperty = function () {}

/**
 * 判断属性表的属性项是否可编辑
 * @method twaver.Property.isEditable
 * @return {Boolean} true为可编辑，false不可编辑
 */
twaver.Property.prototype.isEditable = function () {}

/**
 * 获取属性页列内容是否为纯文本
 * @method twaver.Property.isInnerText
 * @return {Boolean} 返回属性页列内容是否为纯文本
 */
twaver.Property.prototype.isInnerText = function () {}

/**
 * true表示属性项显示，false不显示
 * @property isVisible
 * @type Boolean
 */
twaver.Property.prototype.isVisible = function () {}

/**
 * 这个属性项所对应的render的名称
 * @property renderName
 * @type String
 */
twaver.Property.prototype.renderName = function () {}

/**
 * 
 * @property renderValue
 * @type Object
 */
twaver.Property.prototype.renderValue = function () {}

/**
 * 设置属性项所属的Category的名称
 * @method twaver.Property.setCategoryName
 * @param {String} v Category的名称
 */
twaver.Property.prototype.setCategoryName = function (v) {}

/**
 * 设置属性表的属性项是否可编辑
 * @method twaver.Property.setEditable
 * @param {Boolean} v true为可编辑，false不可编辑
 */
twaver.Property.prototype.setEditable = function (v) {}

/**
 * 设置编辑属性项时显示的内容。如果属性项中设置了多个值，编辑时会以combobox的样式来呈现。
 * 例如：{map:{1:'male', 2:'female'}, values:[1, 2]} 或 ['male', 'female']
 * @method twaver.Property.setEnumInfo
 * @param {Object} v 编辑属性项时显示的内容
 */
twaver.Property.prototype.setEnumInfo = function (v) {}

/**
 * 设置属性项的水平对齐方式。可选值：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的可以参考CSS中的text-align样式
 * @method twaver.Property.setHorizontalAlign
 * @param {String} v 水平对齐方式
 */
twaver.Property.prototype.setHorizontalAlign = function (v) {}

/**
 * 设置属性页列内容是否为纯文本
 * @method twaver.Property.setInnerText
 * @param {Boolean} v 属性页列内容是否为纯文本
 */
twaver.Property.prototype.setInnerText = function (v) {}

/**
 * 设置属性表的属性项所对应的网元属性名
 * @method twaver.Property.setPropertyName
 * @param {String} value 属性表的属性项所对应网元的属性名
 */
twaver.Property.prototype.setPropertyName = function (value) {}

/**
 * 设置网元属性的类型。可选值有
 * 'field'：网元的自身变量属性，
 * 'accessor', 网元get/set方法的属性，
 * 'style'：网元样式属性,
 * 'client'：网元自定义属性
 * @method twaver.Property.setPropertyType
 * @param {String} value 网元属性的类型
 */
twaver.Property.prototype.setPropertyType = function (value) {}

/**
 * 设置属性页上的值回写到data中，TWaver内部使用
 * @method twaver.Property.setValue
 * @param {twaver.Data} data 属性页绑定的数据对象
 * @param {Object} value 属性项的值
 * @param {twaver.controls.PropertySheet} view 属性页
 * @return {twaver.Data}
 */
twaver.Property.prototype.setValue = function (data, value, view) {}

/**
 * 得到属性项中值的类型。可选值有：
 * 'string'：字符串类型，
 * 'boolean'：布尔类型， 
 * 'color'：颜色类型， 
 * 'int'：整型，
 * 'number'：数字类型
 * @method twaver.Property.setValueType
 * @param {String} v 属性项中值的类型
 */
twaver.Property.prototype.setValueType = function (v) {}


/**
 * 属性页的属性容器，它是用于管理所有的属性对象，例如增加、删除属性。它继承于数据容器
 * @class twaver.PropertyBox
 * @constructor
 * @extends twaver.DataBox
 * @param {String} [name] 属性容器名称
 * @return {twaver.PropertyBox} 属性容器对象本身
 */
twaver.PropertyBox = function (name) {}

twaver.PropertyBox.prototype = new twaver.DataBox()


/**
 * 构造函数
 * 选项卡是一种基本元素，它是存在于选项卡容器中的（TabBox）。选项卡是用来显示在选项卡面板中的基本元素
 * @class twaver.Tab
 * @constructor
 * @extends twaver.Data
 * @param {Object} [id] ID为选项卡的唯一标识。如果为null，TWaver内部会按照一定的规则赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是选项卡的ID，如果为Object类型，可以传入一个带选项卡属性的对象，比如： var tab = new twaver.Tab({  width:50,    closable:true,      resizable:true });
 * @return {twaver.Tab}
 */
twaver.Tab = function (id) {}

twaver.Tab.prototype = new twaver.Data()

/**
 * 获取显示在选项卡中的视图组件
 * @method twaver.Tab.getView
 * @return {Object} 视图组件
 */
twaver.Tab.prototype.getView = function () {}

/**
 * 获取选项卡的宽度
 * @method twaver.Tab.getWidth
 * @return {Number} 选项卡的宽度
 */
twaver.Tab.prototype.getWidth = function () {}

/**
 * 获取选项卡是否可关闭。默认值为false
 * @method twaver.Tab.isClosable
 * @return {Boolean} true为可关闭，false不可关闭
 */
twaver.Tab.prototype.isClosable = function () {}

/**
 * 获取选项卡是否不可用。默认值为false
 * @method twaver.Tab.isDisabled
 * @return {Boolean} true为可用，false不可用
 */
twaver.Tab.prototype.isDisabled = function () {}

/**
 * 判断是否可移动，默认值为true
 * @method twaver.Tab.isMovable
 * @return {Boolean} true为可移动，否则为false
 */
twaver.Tab.prototype.isMovable = function () {}

/**
 * 判断是否可改变大小，默认值为true
 * @method twaver.Tab.isResizable
 * @return {Boolean} true为可改变大小，否则为false
 */
twaver.Tab.prototype.isResizable = function () {}

/**
 * 判断是否可见
 * @method twaver.Tab.isVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.Tab.prototype.isVisible = function () {}

/**
 * 是否是选项卡的标识
 * @property ITab
 * @type Boolean
 */
twaver.Tab.prototype.ITab = function () {}

/**
 * 设置选项卡是否可关闭。默认值为false
 * @method twaver.Tab.setClosable
 * @param {Boolean} v true为可关闭，false不可关闭
 */
twaver.Tab.prototype.setClosable = function (v) {}

/**
 * 设置选项卡是否不可用，默认值为false
 * @method twaver.Tab.setDisabled
 * @param {Boolean} v true为可用，false不可用
 */
twaver.Tab.prototype.setDisabled = function (v) {}

/**
 * 设置是否可移动，默认值为true
 * @method twaver.Tab.setMovable
 * @param {Boolean} v true为可移动，否则为false
 */
twaver.Tab.prototype.setMovable = function (v) {}

/**
 * 设置是否可改变大小，默认值为true
 * @method twaver.Tab.setResizable
 * @param {Boolean} v true为可改变大小，否则为false
 */
twaver.Tab.prototype.setResizable = function (v) {}

/**
 * 设置显示在选项卡中的视图组件
 * @method twaver.Tab.setView
 * @param {Object} v 视图组件
 */
twaver.Tab.prototype.setView = function (v) {}

/**
 * 设置是否可见，默认值为true
 * @method twaver.Tab.setVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.Tab.prototype.setVisible = function (v) {}

/**
 * 设置选项卡的宽度
 * @method twaver.Tab.setWidth
 * @param {Number} v 选项卡的宽度
 */
twaver.Tab.prototype.setWidth = function (v) {}


/**
 * 选项卡容器，用于管理所有选项卡对象。比如添加、删除选项卡。它继承于数据容器
 * @class twaver.TabBox
 * @constructor
 * @extends twaver.DataBox
 * @param {String} [name] 选项卡容器的名称
 * @return {twaver.TabBox} 选项卡容器对象本身
 */
twaver.TabBox = function (name) {}

twaver.TabBox.prototype = new twaver.DataBox()


/**
 * 告警附件，用于在拓扑上显示网元的新发告警信息，一般显示为包含告警级别和数量的冒泡信息，默认告警冒泡附件应该显示在最上层，以免某个网元的告警信息被其他网元覆盖
 * @class twaver.vector.AlarmAttachment
 * @constructor
 * @extends twaver.canvas.BasicAttachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.AlarmAttachment}
 */
twaver.vector.AlarmAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.vector.AlarmAttachment.prototype = new twaver.canvas.BasicAttachment()


/**
 * 网格对应的视图对象，网格是由grid.row.count样式属性指定的行数和grid.column.count样式属性指定的列数构成的表格，其他网元可以填充到其网格中
 * @class twaver.vector.GridUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑视图
 * @param {twaver.Grid} element 网格
 * @return {twaver.canvas.GridUI}
 */
twaver.vector.GridUI = function (network, element) {}

twaver.vector.GridUI.prototype = new twaver.canvas.NodeUI()

/**
 * 画网格内容
 * @method twaver.vector.GridUI.drawGridBody
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.GridUI.prototype.drawGridBody = function (ctx) {}


/**
 * 组对应的视图对象，组有合并和展开两种状态，合并时，组的孩子不可见；展开时，孩子可见
 * @class twaver.vector.GroupUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑对象
 * @param {twaver.Group} element 组网元
 * @return {twaver.canvas.GroupUI}
 */
twaver.vector.GroupUI = function (network, element) {}

twaver.vector.GroupUI.prototype = new twaver.canvas.NodeUI()

/**
 * 画展开后的组，用group.shape样式属性定义的形状画出矢量图形
 * @method twaver.vector.GroupUI.drawExpandedGroup
 * @param {CanvasRenderingContext2D} ctx canvas画布
 */
twaver.vector.GroupUI.prototype.drawExpandedGroup = function (ctx) {}

/**
 * 获取所有孩子的区域
 * @method twaver.vector.GroupUI.getChildrenRects
 * @return {twaver.List} 返回所有孩子的区域
 */
twaver.vector.GroupUI.prototype.getChildrenRects = function () {}


/**
 * 创建折线交互处理器，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点，可以用Network#setCreateShapeLinkInteractions快速切换当前交互模式为创建连线模式
 * @class twaver.vector.interaction.CreateShapeLinkInteraction
 * @constructor
 * @extends twaver.network.interaction.CreateLinkInteraction
 * @param {twaver.network.Network} network 拓扑
 * @param {Object} [typeOrLinkFunction] 折线类型或者折线生成器方法，可选，默认值为twaver.ShapeLink
 * @return {twaver.network.interaction.CreateShapeLinkInteraction}
 * @example network.setInteractions([
 *     new twaver.network.interaction.CreateShapeLinkInteraction(network, twaver.ShapeLink),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 * 
 * network.setInteractions([
 *     new twaver.network.interaction.CreateShapeLinkInteraction(network,
 *     function (fromNode, toNode, points) {
 *         var link = new twaver.ShapeLink();
 *         link.setFromNode(fromNode);
 *         link.setToNode(toNode);
 *         link.setStyle('link.color', 'red');
 *         if(points){
 *             link.setPoints(points);
 *         }
 *         return link;
 *     }),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.vector.interaction.CreateShapeLinkInteraction = function (network, typeOrLinkFunction) {}

twaver.vector.interaction.CreateShapeLinkInteraction.prototype = new twaver.network.interaction.CreateLinkInteraction()


/**
 * 标签附件2，用于显示网元名称2
 * @class twaver.vector.Label2Attachment
 * @constructor
 * @extends twaver.vector.BasicAttachment
 * @param {twaver.vector.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在最上层，可选，默认为false
 * @return {twaver.vector.Label2Attachment}
 */
twaver.vector.Label2Attachment = function (elementUI, showInAttachmentDiv) {}

twaver.vector.Label2Attachment.prototype = new twaver.vector.BasicAttachment()

/**
 * 获取标签文本
 * @method twaver.vector.Label2Attachment.getLabel
 * @return {String} 返回标签文本
 */
twaver.vector.Label2Attachment.prototype.getLabel = function () {}


/**
 * 标签附件，用于显示网元名称
 * @class twaver.vector.LabelAttachment
 * @constructor
 * @extends twaver.vector.BasicAttachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} [showInAttachmentDiv] 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.LabelAttachment}
 */
twaver.vector.LabelAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.vector.LabelAttachment.prototype = new twaver.vector.BasicAttachment()

/**
 * 获取标签文本
 * @method twaver.vector.LabelAttachment.getLabel
 * @return {String} 返回标签文本
 */
twaver.vector.LabelAttachment.prototype.getLabel = function () {}


/**
 * 捆绑连线的标签附件，用于显示多条连线捆绑后的标签
 * @class twaver.vector.LinkHandlerAttachment
 * @constructor
 * @extends twaver.vector.BasicAttachment
 * @param {twaver.canvas.ElementUI} elementUI 网元视图
 * @param {Boolean} showInAttachmentDiv 是否显示在最上层，可选，默认为false
 * @return {twaver.canvas.LinkHandlerAttachment}
 */
twaver.vector.LinkHandlerAttachment = function (elementUI, showInAttachmentDiv) {}

twaver.vector.LinkHandlerAttachment.prototype = new twaver.vector.BasicAttachment()


/**
 * 混合缩放管理器构造函数
 * @class twaver.vector.MixedZoomManager
 * @constructor
 * @extends twaver.vector.LogicalZoomManager
 * @return {twaver.vector.MixedZoomManager} 混合缩放管理器
 */
twaver.vector.MixedZoomManager = function () {}

twaver.vector.MixedZoomManager.prototype = new twaver.vector.LogicalZoomManager()


/**
 * 创建和Network绑定的鹰眼视图，鹰眼是Network的缩略图，能通过鹰眼导航Network。鹰眼支持各种操作：
 * 单击：将Network的视图中心导航到指定坐标点
 * 双击：将Network的缩放级别还原为1
 * 按着CTRL键框选：将Network缩放并平移到指定区域
 * @class twaver.vector.Overview
 * @constructor
 * @extends twaver.controls.ControlBase
 * @param {twaver.network.Network} network 和Overview绑定的Network
 * @return {twaver.network.Overview}
 * @example var overview = new twaver.network.Overview(network);
 * overview.adjustBounds({x:0, y:0, width:200, height:200});
 */
twaver.vector.Overview = function (network) {}

twaver.vector.Overview.prototype = new twaver.controls.ControlBase()

/**
 * 将Network的视图中心点滚动到指定的相对于Overview的坐标
 * @method twaver.vector.Overview.centerNetwork
 * @param {Object} point 相对于Overview的包含x和y属性的Object对象
 * @param {Boolean} [animate] 可选，如果为true，则有动画效果，否则没有，默认为false
 */
twaver.vector.Overview.prototype.centerNetwork = function (point, animate) {}

/**
 * 获取Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
 * @method twaver.vector.Overview.getFillColor
 * @return {String} 返回Overview的填充色
 */
twaver.vector.Overview.prototype.getFillColor = function () {}

/**
 * 获取鼠标所在的逻辑坐标，包含x，y属性
 * @method twaver.vector.Overview.getLogicalPoint
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回鼠标所在的逻辑坐标，包含x，y属性
 */
twaver.vector.Overview.prototype.getLogicalPoint = function (e) {}

/**
 * 获取Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
 * @method twaver.vector.Overview.getMaxPackingHeight
 * @return {Number} 返回Overview最大伸缩高度
 */
twaver.vector.Overview.prototype.getMaxPackingHeight = function () {}

/**
 * 获取Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
 * @method twaver.vector.Overview.getMaxPackingWidth
 * @return {Number} 返回Overview最大伸缩宽度
 */
twaver.vector.Overview.prototype.getMaxPackingWidth = function () {}

/**
 * 获取和Overview绑定的拓扑视图
 * @method twaver.vector.Overview.getNetwork
 * @return {twaver.network.Network} 返回和Overview绑定的拓扑视图
 */
twaver.vector.Overview.prototype.getNetwork = function () {}

/**
 * 获取Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
 * @method twaver.vector.Overview.getOutlineColor
 * @return {String} 返回Overview边框线条颜色
 */
twaver.vector.Overview.prototype.getOutlineColor = function () {}

/**
 * 获取Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
 * @method twaver.vector.Overview.getOutlineWidth
 * @return {Number} 返回Overview边框线条宽度
 */
twaver.vector.Overview.prototype.getOutlineWidth = function () {}

/**
 * 获取Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
 * @method twaver.vector.Overview.getPadding
 * @return {Number} 返回Overview边缘空白大小
 */
twaver.vector.Overview.prototype.getPadding = function () {}

/**
 * 获取Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
 * @method twaver.vector.Overview.getSelectColor
 * @return {String} 返回Overview框选时轮廓的线条颜色
 */
twaver.vector.Overview.prototype.getSelectColor = function () {}

/**
 * 获取Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
 * @method twaver.vector.Overview.getSelectWidth
 * @return {Number} 返回Overview框选时轮廓的线条宽度
 */
twaver.vector.Overview.prototype.getSelectWidth = function () {}

/**
 * 获取操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
 * @method twaver.vector.Overview.isAnimate
 * @return {Boolean} 返回是否使用动画效果
 */
twaver.vector.Overview.prototype.isAnimate = function () {}

/**
 * 设置操作Overview时，是否使用动画效果，默认值为twaver.Defaults.OVERVIEW_ANIMATE
 * @method twaver.vector.Overview.setAnimate
 * @param {Boolean} v 是否使用动画效果
 */
twaver.vector.Overview.prototype.setAnimate = function (v) {}

/**
 * 设置Overview的填充色，默认值为twaver.Defaults.OVERVIEW_FILL_COLOR
 * @method twaver.vector.Overview.setFillColor
 * @param {String} v Overview的填充色
 */
twaver.vector.Overview.prototype.setFillColor = function (v) {}

/**
 * 设置Overview最大伸缩高度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_HEIGHT
 * @method twaver.vector.Overview.setMaxPackingHeight
 * @param {Number} v Overview最大伸缩高度
 */
twaver.vector.Overview.prototype.setMaxPackingHeight = function (v) {}

/**
 * 设置Overview最大伸缩宽度，默认值为twaver.Defaults.OVERVIEW_MAX_PACKING_WIDTH
 * @method twaver.vector.Overview.setMaxPackingWidth
 * @param {Number} v Overview最大伸缩宽度
 */
twaver.vector.Overview.prototype.setMaxPackingWidth = function (v) {}

/**
 * 设置和Overview绑定的拓扑视图
 * @method twaver.vector.Overview.setNetwork
 * @param {twaver.network.Network} network 拓扑视图
 */
twaver.vector.Overview.prototype.setNetwork = function (network) {}

/**
 * 设置Overview边框线条颜色，默认值为twaver.Defaults.OVERVIEW_OUTLINE_COLOR
 * @method twaver.vector.Overview.setOutlineColor
 * @param {String} v Overview边框线条颜色
 */
twaver.vector.Overview.prototype.setOutlineColor = function (v) {}

/**
 * 设置Overview边框线条宽度，默认值为twaver.Defaults.OVERVIEW_OUTLINE_WIDTH
 * @method twaver.vector.Overview.setOutlineWidth
 * @param {Number} v Overview边框线条宽度
 */
twaver.vector.Overview.prototype.setOutlineWidth = function (v) {}

/**
 * 设置Overview边缘空白大小，默认值为twaver.Defaults.OVERVIEW_PADDING
 * @method twaver.vector.Overview.setPadding
 * @param {Number} v Overview边缘空白大小
 */
twaver.vector.Overview.prototype.setPadding = function (v) {}

/**
 * 设置Overview框选时轮廓的线条颜色，默认值为twaver.Defaults.OVERVIEW_SELECT_COLOR
 * @method twaver.vector.Overview.setSelectColor
 * @param {String} v Overview框选时轮廓的线条颜色
 */
twaver.vector.Overview.prototype.setSelectColor = function (v) {}

/**
 * 设置Overview框选时轮廓的线条宽度，默认值为twaver.Defaults.OVERVIEW_SELECT_WIDTH
 * @method twaver.vector.Overview.setSelectWidth
 * @param {Number} v Overview框选时轮廓的线条宽度
 */
twaver.vector.Overview.prototype.setSelectWidth = function (v) {}


/**
 * 构造可旋转节点的视图对象
 * @class twaver.vector.RotatableNodeUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑视图
 * @param {twaver.RotatableNode} element 可旋转节点
 * @return {twaver.canvas.RotatableNodeUI}
 */
twaver.vector.RotatableNodeUI = function (network, element) {}

twaver.vector.RotatableNodeUI.prototype = new twaver.canvas.NodeUI()


/**
 * 折线对应的视图对象，由一组点连接而成
 * @class twaver.vector.ShapeLinkUI
 * @constructor
 * @extends twaver.canvas.LinkUI
 * @param {twaver.canvas.Network} network 拓扑视图
 * @param {twaver.ShapeLink} element 折线
 * @return {twaver.canvas.ShapeLinkUI}
 */
twaver.vector.ShapeLinkUI = function (network, element) {}

twaver.vector.ShapeLinkUI.prototype = new twaver.canvas.LinkUI()


/**
 * 多边形网元对应的多边形网元视图，多边形由一组点组成，并将这些点依次连接而组成
 * @class twaver.vector.ShapeNodeUI
 * @constructor
 * @extends twaver.canvas.NodeUI
 * @param {twaver.canvas.Network} network 拓扑
 * @param {twaver.ShapeNode} element 多边形网元
 * @return {twaver.canvas.ShapeNodeUI}
 */
twaver.vector.ShapeNodeUI = function (network, element) {}

twaver.vector.ShapeNodeUI.prototype = new twaver.canvas.NodeUI()


/**
 * 它是TWaver中所有Chart图的基类，定义了Chart上通用的方法。它是和DataBox绑定的，以Chart图的方式来展示数据容器中的数据
 * @class twaver.charts.ChartBase
 * @constructor
 * @extends twaver.controls.ViewBase
 * @param {twaver.DataBox} [dataBox] 绑定的数据容器
 * @return {twaver.charts.ChartBase}
 */
twaver.charts.ChartBase = function (dataBox) {}

twaver.charts.ChartBase.prototype = new twaver.controls.ViewBase()

/**
 * 添加Chart图中悬浮信息框的内容，TWaver内部调用，重写此方法可以更改Chart图上提示信息的显示内容
 * @method twaver.charts.ChartBase.addToolTipInfo
 * @param {Number} x 提示信息显示的X轴上的坐标
 * @param {Number} y 提示信息显示的Y轴上的坐标
 * @param {Number} w 提示信息显示的宽度
 * @param {Number} h 提示信息显示的高度
 * @param {String} value 提示信息显示的内容
 * @param {twaver.Data} data 提示信息所对应的数据对象
 * @param {Number} index 数据所对应的索引值
 */
twaver.charts.ChartBase.prototype.addToolTipInfo = function (x, y, w, h, value, data, index) {}

/**
 * 创建显示在Chart图上的数据，TWaver内部调用
 * @method twaver.charts.ChartBase.createPublishedDatas
 * @return {twaver.List} 所有发布的数据集合
 */
twaver.charts.ChartBase.prototype.createPublishedDatas = function () {}

/**
 * 绘制图表的背景。当显示图表时，TWaver内部会调用此方法。
 * @method twaver.charts.ChartBase.drawBackground
 * @param {Object} g 绘制图表背景的画笔
 * @param {String} rect 图表背景的显示矩形区域。rect是一个包含x,y,width,height的对象。
 */
twaver.charts.ChartBase.prototype.drawBackground = function (g, rect) {}

/**
 * 绘制一条直线，TWaver绘制图表时调用此方法
 * @method twaver.charts.ChartBase.drawLine
 * @param {Object} g 绘制图表的画笔
 * @param {String} color 绘制的直线颜色
 * @param {String} width 绘制的直线宽度
 * @param {Number} x1 直线的起始点X坐标值
 * @param {Number} y1 直线的起始点Y坐标值
 * @param {Number} x2 直线的终点X坐标值
 * @param {Number} y2 直线的终点Y坐标值
 */
twaver.charts.ChartBase.prototype.drawLine = function (g, color, width, x1, y1, x2, y2) {}

/**
 * 绘制值，TWaver绘制图表时调用此方法
 * @method twaver.charts.ChartBase.drawValueTexts
 * @param {Object} g 绘制图表的画笔
 */
twaver.charts.ChartBase.prototype.drawValueTexts = function (g) {}

/**
 * 绘制垂直显示的文本内容，TWaver绘制图表时调用此方法
 * @method twaver.charts.ChartBase.drawVerticalText
 * @param {Object} g 绘制图表的画笔
 * @param {String} text 绘制的文本内容
 * @param {Object} cx 文本显示为值的起始坐标点，它是一个包含x，y坐标值的对象
 * @param {Object} font 文本的字体
 * @param {String} color 文本的颜色
 */
twaver.charts.ChartBase.prototype.drawVerticalText = function (g, text, cx, font, color) {}

/**
 * 格式化文本的值，当显示图表时调用此方法，用户可以重写这个方法来对显示的文本进行格式化
 * @method twaver.charts.ChartBase.formatValueText
 * @param {String} value 需要格式的值
 * @param {twaver.Data} data 格式化的数据对象
 * @return {String} 格式化后的字符值
 */
twaver.charts.ChartBase.prototype.formatValueText = function (value, data) {}

/**
 * 获取图表的背景是否填充，默认为twaver.Defaults.CHART_BACKGROUND_FILL
 * @method twaver.charts.ChartBase.getBackgroundFill
 * @return {Boolean} true为填充背景，否则为false
 */
twaver.charts.ChartBase.prototype.getBackgroundFill = function () {}

/**
 * 获取图表背景的填充色，默认为twaver.Defaults.CHART_BACKGROUND_FILL_COLOR
 * @method twaver.charts.ChartBase.getBackgroundFillColor
 * @return {String} 背景的填充色
 */
twaver.charts.ChartBase.prototype.getBackgroundFillColor = function () {}

/**
 * 获取背景的渐变类型，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT。
 * 渐变类型的可选值为：
 * 'linear.southwest'：线性.南西
 * 'linear.southeast'：线性.南东
 * 'linear.northwest'：线性.北西
 * 'linear.northeast'：线性.北东
 * 'linear.north'：线性.北
 * 'linear.south'：线性.南
 * 'linear.west'：线性.西
 * 'linear.east'：线性.东
 * 'radial.center'：放射.中
 * 'radial.southwest'：放射.南西
 * 'radial.southeast'：放射.南东
 * 'radial.northwest'：放射.北西
 * 'radial.northeast'：放射.北东
 * 'radial.north'：放射.北
 * 'radial.south'：放射.南
 * 'radial.west'：放射.西
 * 'radial.east'：放射.东
 * 'spread.horizontal':扩展.水平
 * 'spread.vertical':扩展.垂直
 * 'spread.diagonal':扩展.对角线
 * 'spread.antidiagonal':扩展.反对角线
 * 'spread.north':扩展.北
 * 'spread.south':扩展.南
 * 'spread.west':扩展.西
 * 'spread.east':扩展.东
 * 
 * @method twaver.charts.ChartBase.getBackgroundGradient
 * @return {String} 渐变类型
 */
twaver.charts.ChartBase.prototype.getBackgroundGradient = function () {}

/**
 * 获取背景的渐变颜色，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT_COLOR
 * @method twaver.charts.ChartBase.getBackgroundGradientColor
 * @return {String} 渐变颜色
 */
twaver.charts.ChartBase.prototype.getBackgroundGradientColor = function () {}

/**
 * 获取背景的外边框颜色，默认为twaver.Defaults.CHART_BACKGROUND_OUTLINE_COLOR
 * @method twaver.charts.ChartBase.getBackgroundOutlineColor
 * @return {String} 外边框颜色
 */
twaver.charts.ChartBase.prototype.getBackgroundOutlineColor = function () {}

/**
 * 获取背景的外边框宽度，默认为 twaver.Defaults.CHART_BACKGROUND_OUTLINE_WIDTH
 * @method twaver.charts.ChartBase.getBackgroundOutlineWidth
 * @return {Number} 外边框的宽度
 */
twaver.charts.ChartBase.prototype.getBackgroundOutlineWidth = function () {}

/**
 * 获取背景的显示区域
 * @method twaver.charts.ChartBase.getBackgroundRect
 * @return {Object} 背景的显示矩形范围
 */
twaver.charts.ChartBase.prototype.getBackgroundRect = function () {}

/**
 * 获取图表上的画板
 * @method twaver.charts.ChartBase.getCanvas
 * @return {Object} 图表的画板
 */
twaver.charts.ChartBase.prototype.getCanvas = function () {}

/**
 * 获取画板的高度
 * @method twaver.charts.ChartBase.getCanvasHeight
 * @return {Number}
 */
twaver.charts.ChartBase.prototype.getCanvasHeight = function () {}

/**
 * 获取画板的宽度
 * @method twaver.charts.ChartBase.getCanvasWidth
 * @return {Number}
 */
twaver.charts.ChartBase.prototype.getCanvasWidth = function () {}

/**
 * 绘制图表上指定数据的颜色，它取的是data中的chart.color值
 * @method twaver.charts.ChartBase.getColor
 * @param {twaver.Data} data 指定的数据
 * @return {String} 颜色值
 */
twaver.charts.ChartBase.prototype.getColor = function (data) {}

/**
 * 获取指定坐标点上的数据对象。参数可以为1个或2个。当参数为一个时，可以是包含x，y坐标值的对象，也可以是鼠标事件对象；当参数为两个时，必须是x，y坐标
 * @method twaver.charts.ChartBase.getDataAt
 * @return {twaver.Data} 数据对象
 */
twaver.charts.ChartBase.prototype.getDataAt = function () {}

/**
 * 获取和这个图表绑定的数据容器
 * @method twaver.charts.ChartBase.getDataBox
 * @return {twaver.DataBox}
 */
twaver.charts.ChartBase.prototype.getDataBox = function () {}

/**
 * 通过鼠标事件获取当前鼠标点的逻辑坐标
 * @method twaver.charts.ChartBase.getLogicalPoint
 * @param {MouseEvent} e 鼠标事件对象
 * @return {Object} 包含x，y的坐标点的对象
 */
twaver.charts.ChartBase.prototype.getLogicalPoint = function (e) {}

/**
 * 获取最大的缩放比例值，默认为twaver.Defaults.ZOOM_MAX
 * @method twaver.charts.ChartBase.getMaxZoom
 * @return {Number} 缩放比例值
 */
twaver.charts.ChartBase.prototype.getMaxZoom = function () {}

/**
 * 获取最小的缩放比例值，默认为twaver.Defaults.ZOOM_MIN
 * @method twaver.charts.ChartBase.getMinZoom
 * @return {Number} 缩放比例值
 */
twaver.charts.ChartBase.prototype.getMinZoom = function () {}

/**
 * 获取指定数据的名称
 * @method twaver.charts.ChartBase.getName
 * @param {twaver.Data} data 指定的数据对象
 * @return {String} 数据的名称
 */
twaver.charts.ChartBase.prototype.getName = function (data) {}

/**
 * 获取外部缩放级别
 * @method twaver.charts.ChartBase.getOuterZoom
 * @return {Number} 返回外部缩放级别
 */
twaver.charts.ChartBase.prototype.getOuterZoom = function () {}

/**
 * 获取显示在图表上的数据
 * @method twaver.charts.ChartBase.getPublishedDatas
 * @return {twaver.List} 所有发布的数据
 */
twaver.charts.ChartBase.prototype.getPublishedDatas = function () {}

/**
 * 获取Chart上选择网元时的公差。默认值为twaver.Defaults.CHART_SELECT_TOLERANCE。当设置了这个值后，点击图表上的网元在这个偏差的范围值之内都能选中这个网元
 * @method twaver.charts.ChartBase.getSelectTolerance
 * @return {Number} 选择网元时的公差
 */
twaver.charts.ChartBase.prototype.getSelectTolerance = function () {}

/**
 * 获取图表上排序的函数，默认为空
 * @method twaver.charts.ChartBase.getSortFunction
 * @return {Function} 排序的函数
 */
twaver.charts.ChartBase.prototype.getSortFunction = function () {}

/**
 * 获取图表上显示文本的大小
 * @method twaver.charts.ChartBase.getTextSize
 * @param {Object} font 显示的字体
 * @param {String} text 文本值
 * @return {Number} 显示文本的大小，是一个包含width，height的对象
 */
twaver.charts.ChartBase.prototype.getTextSize = function (font, text) {}

/**
 * 获取指定数据显示的提示信息
 * @method twaver.charts.ChartBase.getToolTipByData
 * @param {twaver.Data} data 指定的数据
 * @param {Object} info 关联信息
 * @return {String} 返回提示信息
 */
twaver.charts.ChartBase.prototype.getToolTipByData = function (data, info) {}

/**
 * 获取图表上所有显示的数据
 * @method twaver.charts.ChartBase.getUnfilteredDatas
 * @return {twaver.List} 显示的数据的集合
 */
twaver.charts.ChartBase.prototype.getUnfilteredDatas = function () {}

/**
 * 通过指定的对象和颜色值获取唯一的对象颜色值，用于区分不同的网元设置相同的颜色。如果对象设置了相同的颜色值，调用此方法可以对其中的一个颜色值做一些偏移
 * @method twaver.charts.ChartBase.getUniqueColor
 * @param {String} color 
 * @param {twaver.Data} [data] 指定的数据对象
 * @return {String} 颜色值对象
 */
twaver.charts.ChartBase.prototype.getUniqueColor = function (color, data) {}

/**
 * 获取指定的数据在图表上的值，默认取的是Style上的'chart.value'的值
 * @method twaver.charts.ChartBase.getValue
 * @param {twaver.Data} data 指定的数据
 * @return {Object} 指定的数据在图表上的值
 */
twaver.charts.ChartBase.prototype.getValue = function (data) {}

/**
 * 获取指定的数据在图表上值的颜色，默认取的是Style上的'chart.value.color'的值
 * @method twaver.charts.ChartBase.getValueColor
 * @param {twaver.Data} data 指定的数据
 * @return {String} 指定的数据在图表上值的颜色
 */
twaver.charts.ChartBase.prototype.getValueColor = function (data) {}

/**
 * 获取指定的数据在图表上值的字体，默认取的是Style上的'chart.value.font'的值
 * @method twaver.charts.ChartBase.getValueFont
 * @param {twaver.Data} data 指定的数据
 * @return {String} 指定的数据在图表上值的字体
 */
twaver.charts.ChartBase.prototype.getValueFont = function (data) {}

/**
 * 获取图表上是否可见的函数，这个函数可以过滤哪些网元显示，哪些不显示
 * @method twaver.charts.ChartBase.getVisibleFunction
 * @return {Function} 是否可见的过滤器函数
 */
twaver.charts.ChartBase.prototype.getVisibleFunction = function () {}

/**
 * 获取水平方向的间距，默认为
 * twaver.Defaults.CHART_XGAP
 * 
 * @method twaver.charts.ChartBase.getXGap
 * @return {Number} 水平方向的间距
 */
twaver.charts.ChartBase.prototype.getXGap = function () {}

/**
 * 获取图表上X轴方向的偏移值，默认为0
 * 
 * @method twaver.charts.ChartBase.getXTranslate
 * @return {Number} X轴方向的偏移值
 */
twaver.charts.ChartBase.prototype.getXTranslate = function () {}

/**
 * 获取图表的X轴方向的缩放值，默认为1
 * @method twaver.charts.ChartBase.getXZoom
 * @return {Number} 图表上X轴方向的缩放值
 */
twaver.charts.ChartBase.prototype.getXZoom = function () {}

/**
 * 获取垂直方向的间距，默认为
 * twaver.Defaults.CHART_YGAP
 * @method twaver.charts.ChartBase.getYGap
 * @return {Number} 垂直方向的间距
 */
twaver.charts.ChartBase.prototype.getYGap = function () {}

/**
 * 获取图表上Y轴方向的偏移值，默认为0
 * @method twaver.charts.ChartBase.getYTranslate
 * @return {Number} Y轴方向的偏移值
 */
twaver.charts.ChartBase.prototype.getYTranslate = function () {}

/**
 * 获取图表的Y轴方向的缩放值，默认为1
 * @method twaver.charts.ChartBase.getYZoom
 * @return {Number} Y轴方向的缩放值
 */
twaver.charts.ChartBase.prototype.getYZoom = function () {}

/**
 * 当数据容器中数据发生变化时，TWaver内部会调用此方法，同步图表的显示。
 * @method twaver.charts.ChartBase.handleDataBoxChange
 * @param {Object} e 数据容器更改的事件
 */
twaver.charts.ChartBase.prototype.handleDataBoxChange = function (e) {}

/**
 * 当数据的层次关系发生变化时，TWaver内部会调用此方法来更新图表的显示
 * @method twaver.charts.ChartBase.handleHierarchyChange
 * @param {Object} e 层次关系变化的事件
 */
twaver.charts.ChartBase.prototype.handleHierarchyChange = function (e) {}

/**
 * 当数据容器中的数据发生变化时，TWaver内部会调用此方法来更新图表的显示
 * @method twaver.charts.ChartBase.handlePropertyChange
 * @param {Object} e 数据更改事件
 */
twaver.charts.ChartBase.prototype.handlePropertyChange = function (e) {}

/**
 * 当选择容器中的数据发生变化时，TWaver内部会调用此方法来更新图表的显示
 * @method twaver.charts.ChartBase.handleSelectionChange
 * @param {Object} e 选择数据变化的事件
 */
twaver.charts.ChartBase.prototype.handleSelectionChange = function (e) {}

/**
 * 刷新和图表绑定的数据容器，当数据容器发生变化时，TWaver内部会调用此方法。用户不需要直接调用此方法，可以重载这个方法做自己的处理
 * @method twaver.charts.ChartBase.invalidateModel
 */
twaver.charts.ChartBase.prototype.invalidateModel = function () {}

/**
 * 判断图表的背景是否可见，默认为twaver.Defaults.CHART_BACKGROUND_VISIBLE
 * @method twaver.charts.ChartBase.isBackgroundVisible
 * @return {Boolean} true为可见，false不可见
 */
twaver.charts.ChartBase.prototype.isBackgroundVisible = function () {}

/**
 * 判断双击是否还原成默认的初始状态，默认为
 * twaver.Defaults.CHART_DOUBLE_CLICK_TO_RESET
 * @method twaver.charts.ChartBase.isDoubleClickToReset
 * @return {Boolean}
 */
twaver.charts.ChartBase.prototype.isDoubleClickToReset = function () {}

/**
 * 判断悬浮信息框是否生效
 * @method twaver.charts.ChartBase.isToolTipEnabled
 * @return {Boolean} true为生效，否则为false
 */
twaver.charts.ChartBase.prototype.isToolTipEnabled = function () {}

/**
 * 判断图表上网元的值是否可见，默认为twaver.Defaults.CHART_VALUE_VISIBLE
 * @method twaver.charts.ChartBase.isValueVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.ChartBase.prototype.isValueVisible = function () {}

/**
 * 判断图表上指定的数据是否可见
 * @method twaver.charts.ChartBase.isVisible
 * @param {twaver.Data} data 指定的数据对象
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.ChartBase.prototype.isVisible = function (data) {}

/**
 * 是否允许X轴进行偏移，默认为twaver.Defaults.CHART_XTRANSLATE_ENABLED
 * @method twaver.charts.ChartBase.isXTranslateEnabled
 * @return {Boolean}
 */
twaver.charts.ChartBase.prototype.isXTranslateEnabled = function () {}

/**
 * 判断X轴方向是否允许缩放，默认为 twaver.Defaults.CHART_XZOOM_ENABLED
 * @method twaver.charts.ChartBase.isXZoomEnabled
 * @return {Boolean}
 */
twaver.charts.ChartBase.prototype.isXZoomEnabled = function () {}

/**
 * 是否允许Y轴进行偏移，默认为twaver.Defaults.CHART_YTRANSLATE_ENABLED
 * @method twaver.charts.ChartBase.isYTranslateEnabled
 * @return {Boolean}
 */
twaver.charts.ChartBase.prototype.isYTranslateEnabled = function () {}

/**
 * 判断Y轴方向是否允许缩放，默认为 twaver.Defaults.CHART_YZOOM_ENABLED
 * @method twaver.charts.ChartBase.isYZoomEnabled
 * @return {Boolean}
 */
twaver.charts.ChartBase.prototype.isYZoomEnabled = function () {}

/**
 * 当X轴的缩放比例变化时，回调此方法。默认实现为空，用户可以重写这个方法进行自己的处理
 * @method twaver.charts.ChartBase.onXZoomChanged
 * @param {Number} oldZoom X轴缩放的原值
 * @param {Number} newZoom X轴缩放的新值
 */
twaver.charts.ChartBase.prototype.onXZoomChanged = function (oldZoom, newZoom) {}

/**
 * 当Y轴的缩放比例变化时，回调此方法。默认实现为空，用户可以重写这个方法进行自己的处理
 * @method twaver.charts.ChartBase.onYZoomChanged
 * @param {Number} oldZoom Y轴缩放的原值
 * @param {Number} newZoom Y轴缩放的新值
 */
twaver.charts.ChartBase.prototype.onYZoomChanged = function (oldZoom, newZoom) {}

/**
 * 设置图表的背景是否填充，默认为twaver.Defaults.CHART_BACKGROUND_FILL
 * @method twaver.charts.ChartBase.setBackgroundFill
 * @param {Boolean} v true为填充背景，否则为false
 */
twaver.charts.ChartBase.prototype.setBackgroundFill = function (v) {}

/**
 * 设置图表背景的填充色，默认为twaver.Defaults.CHART_BACKGROUND_FILL_COLOR
 * @method twaver.charts.ChartBase.setBackgroundFillColor
 * @param {String} v 背景的填充色
 */
twaver.charts.ChartBase.prototype.setBackgroundFillColor = function (v) {}

/**
 * 设置背景的渐变类型，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT。
 * 渐变类型的可选值为：
 * 'linear.southwest'：线性.南西
 * 'linear.southeast'：线性.南东
 * 'linear.northwest'：线性.北西
 * 'linear.northeast'：线性.北东
 * 'linear.north'：线性.北
 * 'linear.south'：线性.南
 * 'linear.west'：线性.西
 * 'linear.east'：线性.东
 * 'radial.center'：放射.中
 * 'radial.southwest'：放射.南西
 * 'radial.southeast'：放射.南东
 * 'radial.northwest'：放射.北西
 * 'radial.northeast'：放射.北东
 * 'radial.north'：放射.北
 * 'radial.south'：放射.南
 * 'radial.west'：放射.西
 * 'radial.east'：放射.东
 * 'spread.horizontal':扩展.水平
 * 'spread.vertical':扩展.垂直
 * 'spread.diagonal':扩展.对角线
 * 'spread.antidiagonal':扩展.反对角线
 * 'spread.north':扩展.北
 * 'spread.south':扩展.南
 * 'spread.west':扩展.西
 * 'spread.east':扩展.东
 * 
 * @method twaver.charts.ChartBase.setBackgroundGradient
 * @param {String} v 渐变类型
 */
twaver.charts.ChartBase.prototype.setBackgroundGradient = function (v) {}

/**
 * 设置背景的渐变颜色，默认为twaver.Defaults.CHART_BACKGROUND_GRADIENT_COLOR
 * @method twaver.charts.ChartBase.setBackgroundGradientColor
 * @param {String} v 渐变颜色
 */
twaver.charts.ChartBase.prototype.setBackgroundGradientColor = function (v) {}

/**
 * 设置背景的外边框颜色，默认为twaver.Defaults.CHART_BACKGROUND_OUTLINE_COLOR
 * @method twaver.charts.ChartBase.setBackgroundOutlineColor
 * @param {String} v 外边框颜色
 */
twaver.charts.ChartBase.prototype.setBackgroundOutlineColor = function (v) {}

/**
 * 设置背景的外边框宽度，默认为 twaver.Defaults.CHART_BACKGROUND_OUTLINE_WIDTH
 * @method twaver.charts.ChartBase.setBackgroundOutlineWidth
 * @param {Number} v 外边框的宽度
 */
twaver.charts.ChartBase.prototype.setBackgroundOutlineWidth = function (v) {}

/**
 * 设置图表的背景是否可见，默认为twaver.Defaults.CHART_BACKGROUND_VISIBLE
 * @method twaver.charts.ChartBase.setBackgroundVisible
 * @param {Boolean} v true为可见，false不可见
 */
twaver.charts.ChartBase.prototype.setBackgroundVisible = function (v) {}

/**
 * 设置和这个图表绑定的数据容器
 * @method twaver.charts.ChartBase.setDataBox
 * @param {twaver.DataBox} dataBox 
 */
twaver.charts.ChartBase.prototype.setDataBox = function (dataBox) {}

/**
 * 设置双击是否还原的默认的初始状态，默认为
 * twaver.Defaults.CHART_DOUBLE_CLICK_TO_RESET
 * @method twaver.charts.ChartBase.setDoubleClickToReset
 * @param {Boolean} v 
 */
twaver.charts.ChartBase.prototype.setDoubleClickToReset = function (v) {}

/**
 * 设置最大的缩放比例值，默认为twaver.Defaults.ZOOM_MAX
 * @method twaver.charts.ChartBase.setMaxZoom
 * @param {Number} value 缩放比例值
 */
twaver.charts.ChartBase.prototype.setMaxZoom = function (value) {}

/**
 * 设置最小的缩放比例值，默认为twaver.Defaults.ZOOM_MIN
 * @method twaver.charts.ChartBase.setMinZoom
 * @param {Number} value 缩放比例值
 */
twaver.charts.ChartBase.prototype.setMinZoom = function (value) {}

/**
 * 设置外部缩放级别
 * @method twaver.charts.ChartBase.setOuterZoom
 * @param {Number} v 外部缩放级别
 */
twaver.charts.ChartBase.prototype.setOuterZoom = function (v) {}

/**
 * 设置Chart上选择网元时的公差。默认值为twaver.Defaults.CHART_SELECT_TOLERANCE。当设置了这个值后，点击图表上的网元在这个偏差的范围值之内都能选中这个网元
 * @method twaver.charts.ChartBase.setSelectTolerance
 * @param {Number} v 选择网元时的公差
 */
twaver.charts.ChartBase.prototype.setSelectTolerance = function (v) {}

/**
 * 设置图表上排序的函数，默认为空
 * @method twaver.charts.ChartBase.setSortFunction
 * @param {Function} v 排序的函数
 */
twaver.charts.ChartBase.prototype.setSortFunction = function (v) {}

/**
 * 设置悬浮信息框是否生效
 * @method twaver.charts.ChartBase.setToolTipEnabled
 * @param {Boolean} value true为生效，否则为false
 */
twaver.charts.ChartBase.prototype.setToolTipEnabled = function (value) {}

/**
 * 设置指定的数据在图表上显示值的字体
 * @method twaver.charts.ChartBase.setValueFont
 * @param {String} value 指定的数据在图表上值的字体
 */
twaver.charts.ChartBase.prototype.setValueFont = function (value) {}

/**
 * 设置图表上网元的值是否可见，默认为twaver.Defaults.CHART_VALUE_VISIBLE
 * @method twaver.charts.ChartBase.setValueVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.ChartBase.prototype.setValueVisible = function (v) {}

/**
 * 设置图表上是否可见的函数，这个函数可以过滤哪些网元显示，哪些不显示
 * @method twaver.charts.ChartBase.setVisibleFunction
 * @param {Function} v 是否可见的过滤器函数
 */
twaver.charts.ChartBase.prototype.setVisibleFunction = function (v) {}

/**
 * 设置水平方向的间距，默认为twaver.Defaults.CHART_XGAP
 * @method twaver.charts.ChartBase.setXGap
 * @param {Number} v 水平方向的间距
 */
twaver.charts.ChartBase.prototype.setXGap = function (v) {}

/**
 * 设置图表上X轴方向的偏移值，默认为0
 * @method twaver.charts.ChartBase.setXTranslate
 * @param {Number} v X轴方向的偏移值
 */
twaver.charts.ChartBase.prototype.setXTranslate = function (v) {}

/**
 * 设置是否允许X轴进行偏移，默认为twaver.Defaults.CHART_XTRANSLATE_ENABLED
 * @method twaver.charts.ChartBase.setXTranslateEnabled
 * @param {Boolean} v 
 */
twaver.charts.ChartBase.prototype.setXTranslateEnabled = function (v) {}

/**
 * 设置图表的X轴方向的缩放值，默认为1
 * @method twaver.charts.ChartBase.setXZoom
 * @param {Number} value X轴方向的缩放值
 * @param {Boolean} animate true为需要动画，false不需要动画
 */
twaver.charts.ChartBase.prototype.setXZoom = function (value, animate) {}

/**
 * 设置X轴方向是否允许缩放，默认为 twaver.Defaults.CHART_XZOOM_ENABLED
 * @method twaver.charts.ChartBase.setXZoomEnabled
 * @param {Boolean} v 
 */
twaver.charts.ChartBase.prototype.setXZoomEnabled = function (v) {}

/**
 * 设置垂直方向的间距，默认为twaver.Defaults.CHART_YGAP
 * @method twaver.charts.ChartBase.setYGap
 * @param {Number} v 垂直方向的间距
 */
twaver.charts.ChartBase.prototype.setYGap = function (v) {}

/**
 * 设置图表上Y轴方向的偏移值，默认为0
 * @method twaver.charts.ChartBase.setYTranslate
 * @param {Number} v Y轴方向的偏移值
 */
twaver.charts.ChartBase.prototype.setYTranslate = function (v) {}

/**
 * 设置是否允许Y轴进行偏移，默认为twaver.Defaults.CHART_YTRANSLATE_ENABLED
 * @method twaver.charts.ChartBase.setYTranslateEnabled
 * @param {Boolean} v 
 */
twaver.charts.ChartBase.prototype.setYTranslateEnabled = function (v) {}

/**
 * 设置图表的Y轴方向的缩放值，默认为1
 * @method twaver.charts.ChartBase.setYZoom
 * @param {Number} value Y轴方向的缩放值
 * @param {Boolean} animate true为需要动画，false不需要动画
 */
twaver.charts.ChartBase.prototype.setYZoom = function (value, animate) {}

/**
 * 设置Y轴方向是否允许缩放，默认为 twaver.Defaults.CHART_YZOOM_ENABLED
 * @method twaver.charts.ChartBase.setYZoomEnabled
 * @param {Boolean} v true为允许缩放，否则为false
 */
twaver.charts.ChartBase.prototype.setYZoomEnabled = function (v) {}

/**
 * 通过指定的鼠标点和公差来获取当前鼠标下的数据，如果当前鼠标点下没有网元，但是在公差的范围值下有网元存在，也会将这个网元返回
 * @method twaver.charts.ChartBase.tryGetDataAt
 * @param {Object} point 鼠标点对象，是一个包含target,x,y的对象
 * @param {Number} tolerance 公差的范围值
 * @return {twaver.Data}
 */
twaver.charts.ChartBase.prototype.tryGetDataAt = function (point, tolerance) {}

/**
 * 刷新图表的显示界面，当图表发生变化时或数据模型更改时，TWaver会自动调用此方法，用户不需要直接调用此方法，可以重载这个方法做自己的处理
 * @method twaver.charts.ChartBase.validateDisplay
 * @param {Object} g 绘制图表的画笔
 * @param {Number} width 刷新显示区域的宽度
 * @param {String} height 刷新显示区域的高度
 */
twaver.charts.ChartBase.prototype.validateDisplay = function (g, width, height) {}

/**
 * 重画视图组件，当视图组件中绑定的数据发生变化时，须调用此方法，让组件重画
 * @method twaver.charts.ChartBase.validateModel
 */
twaver.charts.ChartBase.prototype.validateModel = function () {}

/**
 * 对图表的X轴方向进行放大
 * @method twaver.charts.ChartBase.xZoomIn
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.xZoomIn = function (animate) {}

/**
 * 对图表的X轴方向进行缩小
 * @method twaver.charts.ChartBase.xZoomOut
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.xZoomOut = function (animate) {}

/**
 * 对图表的X轴方向还原至默认的缩放状态
 * @method twaver.charts.ChartBase.xZoomReset
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.xZoomReset = function (animate) {}

/**
 * 对图表的Y轴方向进行放大
 * @method twaver.charts.ChartBase.yZoomIn
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.yZoomIn = function (animate) {}

/**
 * 对图表的Y轴方向进行缩小
 * @method twaver.charts.ChartBase.yZoomOut
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.yZoomOut = function (animate) {}

/**
 * 对图表的Y轴方向还原至默认的缩放状态
 * @method twaver.charts.ChartBase.yZoomReset
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.yZoomReset = function (animate) {}

/**
 * 对图表进行整体放大
 * @method twaver.charts.ChartBase.zoomIn
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.zoomIn = function (animate) {}

/**
 * 对图表进行整体缩小
 * @method twaver.charts.ChartBase.zoomOut
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.zoomOut = function (animate) {}

/**
 * 将图表的整体还原至默认的缩放状态
 * @method twaver.charts.ChartBase.zoomReset
 * @param {Boolean} animate 是否需要动画效果
 */
twaver.charts.ChartBase.prototype.zoomReset = function (animate) {}


/**
 * 可缩放的视图基类
 * @class twaver.controls.View
 * @constructor
 * @extends twaver.controls.ViewBase
 * @return {twaver.controls.View}
 */
twaver.controls.View = function () {}

twaver.controls.View.prototype = new twaver.controls.ViewBase()

/**
 * 将视图的中心点滚动到指定的逻辑坐标
 * @method twaver.controls.View.centerByLogicalPoint
 * @param {Number} x 视图中心点x坐标
 * @param {Number} y 视图中心点y坐标
 * @param {Boolean} [animate] 可选，如果为true，则有动画效果，否者没有，默认为false
 */
twaver.controls.View.prototype.centerByLogicalPoint = function (x, y, animate) {}

/**
 * 如果缩放级别大于maxZoom，则返回maxZoom；如果小于minZoom，则返回minZoom
 * @method twaver.controls.View.checkZoom
 * @param {Number} value 缩放级别
 * @return {Number} 返回修正后的缩放级别
 */
twaver.controls.View.prototype.checkZoom = function (value) {}

/**
 * 获取指定数据元的告警填充色，默认如果数据元是网元，则返回网元的最高新发告警颜色，否则返回null
 * @method twaver.controls.View.getAlarmFillColor
 * @param {twaver.Data} data 数据元
 * @return {String} 返回指定数据元的告警填充色
 */
twaver.controls.View.prototype.getAlarmFillColor = function (data) {}

/**
 * 获取指定数据元的填充颜色，默认如果数据元是网元，而且有新发告警，则返回最高级别新发告警的颜色，否则返回样式属性inner.color的值
 * @method twaver.controls.View.getInnerColor
 * @param {twaver.Data} data 数据元
 * @return {String} 返回指定数据元的填充颜色
 */
twaver.controls.View.prototype.getInnerColor = function (data) {}

/**
 * 获取鼠标所在的逻辑坐标，包含x，y属性
 * @method twaver.controls.View.getLogicalPoint
 * @param {MouseEvent} e 鼠标事件
 * @return {Object} 返回鼠标所在的逻辑坐标，包含x，y属性
 * @example network.getView().addEventListener('mousedown', function (e) {
 *     var point = network.getLogicalPoint(e);
 *     console.log(point.x, point.y);
 * });
 */
twaver.controls.View.prototype.getLogicalPoint = function (e) {}

/**
 * 获取最大缩放级别
 * @method twaver.controls.View.getMaxZoom
 * @return {Number} 返回最大缩放级别
 */
twaver.controls.View.prototype.getMaxZoom = function () {}

/**
 * 获取最小缩放级别
 * @method twaver.controls.View.getMinZoom
 * @return {Number} 返回最小缩放级别
 */
twaver.controls.View.prototype.getMinZoom = function () {}

/**
 * 获取指定数据元的边框颜色，默认情况下，如果数据元是网元，而且有传播告警，则返回传播告警的颜色，否者返回属性为outer.color的style值
 * @method twaver.controls.View.getOuterColor
 * @param {twaver.Data} data 数据元
 * @return {String} 返回指定数据元的边框颜色
 */
twaver.controls.View.prototype.getOuterColor = function (data) {}

/**
 * 获取根div元素
 * @method twaver.controls.View.getRootDiv
 * @return {HTMLDivElement} 返回根div元素
 */
twaver.controls.View.prototype.getRootDiv = function () {}

/**
 * 获取当前缩放级别
 * @method twaver.controls.View.getZoom
 * @return {Number} 返回当前缩放级别
 */
twaver.controls.View.prototype.getZoom = function () {}

/**
 * 获取指定鼠标事件是否合法，如果鼠标所在的位置在滚动条上，则不合法，否则合法
 * @method twaver.controls.View.isValidEvent
 * @param {MouseEvent} e 鼠标事件
 * @return {Boolean} 如果指定鼠标事件是合法的，则返回true，否则返回false
 */
twaver.controls.View.prototype.isValidEvent = function (e) {}

/**
 * 缩放级别变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
 * @method twaver.controls.View.onZoomChanged
 * @param {Number} oldZoom 旧缩放级别
 * @param {Number} newZoom 新缩放级别
 */
twaver.controls.View.prototype.onZoomChanged = function (oldZoom, newZoom) {}

/**
 * 滚动水平和垂直滚动条指定偏移量
 * @method twaver.controls.View.panByOffset
 * @param {Number} xoffset x坐标偏移量
 * @param {Number} yoffset y坐标偏移量
 * @return {Object} 返回实际偏移量，为包含x和y属性的对象
 */
twaver.controls.View.prototype.panByOffset = function (xoffset, yoffset) {}

/**
 * 设置最大缩放级别
 * @method twaver.controls.View.setMaxZoom
 * @param {Number} value 缩放级别
 */
twaver.controls.View.prototype.setMaxZoom = function (value) {}

/**
 * 设置最小缩放级别
 * @method twaver.controls.View.setMinZoom
 * @param {Number} value 缩放级别
 */
twaver.controls.View.prototype.setMinZoom = function (value) {}

/**
 * 触摸模式下设置缩放级别
 * @method twaver.controls.View.setTouchZoom
 * @param {Number} z 缩放级别
 */
twaver.controls.View.prototype.setTouchZoom = function (z) {}

/**
 * 设置当前缩放级别
 * @method twaver.controls.View.setZoom
 * @param {Number} value 缩放级别
 * @param {Boolean} [animate] 缩放时，是否有动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE
 */
twaver.controls.View.prototype.setZoom = function (value, animate) {}

/**
 * 将视图放大twaver.Defaults.ZOOM_INCREMENT倍
 * @method twaver.controls.View.zoomIn
 * @param {Boolean} [animate] 是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE
 */
twaver.controls.View.prototype.zoomIn = function (animate) {}

/**
 * 将视图缩小twaver.Defaults.ZOOM_INCREMENT倍
 * @method twaver.controls.View.zoomOut
 * @param {Boolean} [animate] 是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE
 */
twaver.controls.View.prototype.zoomOut = function (animate) {}

/**
 * 将视图缩放到让所有数据元可见
 * @method twaver.controls.View.zoomOverview
 * @param {Boolean} [animate] 是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE
 */
twaver.controls.View.prototype.zoomOverview = function (animate) {}

/**
 * 还原缩放级别为1
 * @method twaver.controls.View.zoomReset
 * @param {Boolean} [animate] 是否使用动画效果，可选，默认为twaver.Defaults.ZOOM_ANIMATE
 */
twaver.controls.View.prototype.zoomReset = function (animate) {}


/**
 * 哑节点是一种在network视图中不可见的网元。哑节点虽然不显示在network上，但是在DataBox中是实际存在的，并且它可以有自己的孩子和父亲节点。
 * 哑节点可以在tree，table或其他组件中显示，通常哑节点是用于组织数据的，比如在tree上管理网元的层次关系
 * @class twaver.Dummy
 * @constructor
 * @extends twaver.Element
 * @param {Object} [id] 哑节点ID，用于唯一标识网元。如果为空，TWaver会按照默认的规则给哑节点ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是哑节点的ID，如果为Object类型，可以传入一个带哑节点属性的对象，比如： var dummy = new twaver.Dummy({     name:'dummy',      clients:{'bussinessID':125} });
 * @return {twaver.Dummy} 哑节点对象本身
 */
twaver.Dummy = function (id) {}

twaver.Dummy.prototype = new twaver.Element()

/**
 * 是否为哑节点的标识
 * @property IDummy
 * @type Boolean
 */
twaver.Dummy.prototype.IDummy = function () {}


/**
 * Link是一种网元，它表现为Network上的连线。它在电信拓扑中用于展示链路或基于数据的连线。比如带有物理或逻辑意义的电缆，电路,路由线路，环路等。
 * 
 * 连线是和节点一起使用的。一条连线必须有起始、结束节点，起始节点和结束节点不能为空。
 * 
 * 当起始节点和结束节点相同时，这种连线成为自环连线。自环连线可以展示为半矩形或半圆形。当两个节点之间有多条连线时，默认可以双击绑定。TWaver会根据默认的规则选定一条连线做为代理连线，其他的连线都会隐藏。当然，也可以更改TWaver的这种代理的规则。
 * 
 * 连线和一般网元类似，也可以进行序列化和反序列化。
 * 
 * 	 
 * @class twaver.Link
 * @constructor
 * @extends twaver.Element
 * @param {Object} [id] 连线ID，用于唯一标识网元。如果为空，TWaver会按照默认的规则给连线ID赋值。ID可以为string，number类型，可以为Node类型，也可以为Object类型。为string或number类型时指的是连线的ID，为Node类型时，fromNode和toNode相同，都为ID参数传入的Node对象。如果为Object类型，可以传入一个带连线属性的对象，比如： var link = new twaver.Link({     name:'linkname',     fromNode: twNode,   toNode:bbNode });
 * @param {twaver.Node} [fromNode] 起始节点
 * @param {twaver.Node} [toNode] 结束节点
 * @return {twaver.Link} 连线对象本身
 */
twaver.Link = function (id, fromNode, toNode) {}

twaver.Link.prototype = new twaver.Element()

/**
 * 触发连线捆绑更改的相关属性样式。默认有：'link.bundle.enable'，'link.bundle.id'，'link.bundle.independent'
 * @property IS_INTERESTED_BUNDLE_STYLE
 * @type Object
 * @static
 */
twaver.Link.IS_INTERESTED_BUNDLE_STYLE = function () {}

/**
 * 获取和这条连线捆绑的连线数量
 * @method twaver.Link.getBundleCount
 * @return {Number} 捆绑数量
 */
twaver.Link.prototype.getBundleCount = function () {}

/**
 * 得到捆绑的顺序号
 * @method twaver.Link.getBundleIndex
 * @return {Number} 捆绑的顺序号
 */
twaver.Link.prototype.getBundleIndex = function () {}

/**
 * 获取和这条连线捆绑的所有连线集合
 * @method twaver.Link.getBundleLinks
 * @return {twaver.List} 连线集合
 */
twaver.Link.prototype.getBundleLinks = function () {}

/**
 * 获取连线的起始节点的代理
 * @method twaver.Link.getFromAgent
 * @return {twaver.Node} 起始节点代理
 */
twaver.Link.prototype.getFromAgent = function () {}

/**
 * 获取连线的起始节点
 * @method twaver.Link.getFromNode
 * @return {twaver.Node} 起始节点
 */
twaver.Link.prototype.getFromNode = function () {}

/**
 * 获取连线的结束节点代理
 * @method twaver.Link.getToAgent
 * @return {twaver.Node} 结束节点的代理
 */
twaver.Link.prototype.getToAgent = function () {}

/**
 * 获取连线的结束节点
 * @method twaver.Link.getToNode
 * @return {twaver.Node} 结束节点
 */
twaver.Link.prototype.getToNode = function () {}

/**
 * 判断是否为绑定连线的代理
 * @method twaver.Link.isBundleAgent
 * @return {Boolean} 绑定连线的代理
 */
twaver.Link.prototype.isBundleAgent = function () {}

/**
 * 判断是否为自环连线
 * @method twaver.Link.isLooped
 * @return {Boolean} true为自环，否则为false。
 */
twaver.Link.prototype.isLooped = function () {}

/**
 * 反转连线捆绑的状态。如果这条link处于展开状态，调用这个方法，就会将所有和这条连线捆绑的links都合并，反之亦然。
 * @method twaver.Link.reverseBundleExpanded
 * @return {Boolean} true为反转成功，否则为false
 */
twaver.Link.prototype.reverseBundleExpanded = function () {}

/**
 * 设置连线的起始节点
 * @method twaver.Link.setFromNode
 * @param {twaver.Node} fromNode 起始节点
 */
twaver.Link.prototype.setFromNode = function (fromNode) {}

/**
 * 设置连线的结束节点
 * @method twaver.Link.setToNode
 * @param {Boolean} toNode 结束节点
 */
twaver.Link.prototype.setToNode = function (toNode) {}


/**
 * 构造函数。
 * 节点是TWaver HTML5中最常见的一种网元。它在电信网络拓扑中表现为一种虚拟节点。节点上可以设置图片，标签，告警，附件等信息。电信拓扑中的任意网元都可以用节点来表示，比如说服务器，电脑，路由器，交换机等
 * @class twaver.Node
 * @constructor
 * @extends twaver.Element
 * @param {Object} [id] 节点ID，用于唯一标识这个节点。如果为空，TWaver会按照默认的规则给节点ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是节点的ID，如果为Object类型，可以传入一个带节点属性的对象，比如： var node = new twaver.Node({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} });
 * @return {twaver.Node} 节点对象本身
 */
twaver.Node = function (id) {}

twaver.Node.prototype = new twaver.Element()

/**
 * 触发网元更改的相关属性
 * @property IS_INTERESTED_NODE_PROPERTY
 * @type Object
 * @static
 */
twaver.Node.IS_INTERESTED_NODE_PROPERTY = function () {}

/**
 * 获取这个节点上所有代理连线的集合
 * @method twaver.Node.getAgentLinks
 * @return {twaver.List} 代理连线的集合
 */
twaver.Node.prototype.getAgentLinks = function () {}

/**
 * 获取节点的旋转角度，单位为度
 * @method twaver.Node.getAngle
 * @return {Number} 返回节点的旋转角度，单位为度
 */
twaver.Node.prototype.getAngle = function () {}

/**
 * 得到这个节点的中心位置。如果想获取左上角的位置，需使用getLocation
 * @method twaver.Node.getCenterLocation
 * @return {Object} 节点的中心位置。是一个包含x，y值的对象，比如{x:10,y:10}
 */
twaver.Node.prototype.getCenterLocation = function () {}

/**
 * 获取这个节点的所有跟随者。若想了解跟随者的概念，可参考跟随者类
 * @method twaver.Node.getFollowers
 * @return {twaver.List} 跟随者的集合
 */
twaver.Node.prototype.getFollowers = function () {}

/**
 * 获取从这个节点出发的所有代理连线的集合
 * @method twaver.Node.getFromAgentLinks
 * @return {twaver.List} 代理连线的集合
 */
twaver.Node.prototype.getFromAgentLinks = function () {}

/**
 * 获取以这个节点为起始节点的所有连线的集合
 * @method twaver.Node.getFromLinks
 * @return {twaver.List} 连线的集合
 */
twaver.Node.prototype.getFromLinks = function () {}

/**
 * 获取网元的高度。若网元上设置了高度，则返回设置的高度值。否则如果网元上设置了图片，那么高度就是网元图片的高度。如果什么都没设置，则会返回默认的高度，默认高度为50像素
 * @method twaver.Node.getHeight
 * @return {Number} 节点的高度
 */
twaver.Node.prototype.getHeight = function () {}

/**
 * 获取网元上图片的名称
 * @method twaver.Node.getImage
 * @return {String} 网元图片的名称
 */
twaver.Node.prototype.getImage = function () {}

/**
 * 获取和这个网元相连的所有连线
 * @method twaver.Node.getLinks
 * @return {twaver.List} 连线的集合
 */
twaver.Node.prototype.getLinks = function () {}

/**
 * 获取网元的位置。网元的位置指的是网元左上角的位置
 * @method twaver.Node.getLocation
 * @return {Object} 节点网元的位置。是一个包含x，y值的对象，比如{x:10,y:10}
 */
twaver.Node.prototype.getLocation = function () {}

/**
 * 获取这个节点上所有自环的连线
 * @method twaver.Node.getLoopedLinks
 * @return {twaver.List} 自环连线的集合
 */
twaver.Node.prototype.getLoopedLinks = function () {}

/**
 * 获取节点未旋转前的矩形区域
 * @method twaver.Node.getOriginalRect
 * @return {Object} 返回节点未旋转前的矩形区域
 */
twaver.Node.prototype.getOriginalRect = function () {}

/**
 * 获取网元的形状
 * @method twaver.Node.getRect
 * @return {Object} 网元形状。是一个包含网元下x,y坐标以及宽高的对象。例如：{x:200,y:200,width:50,height:50}
 */
twaver.Node.prototype.getRect = function () {}

/**
 * 获取网元的大小
 * @method twaver.Node.getSize
 * @return {String} 是一个包含节点宽高的对象。例如：{width:50,height:50}
 */
twaver.Node.prototype.getSize = function () {}

/**
 * 获取到这个节点的所有代理连线的集合
 * @method twaver.Node.getToAgentLinks
 * @return {twaver.List} 代理连线的集合
 */
twaver.Node.prototype.getToAgentLinks = function () {}

/**
 * 获取到这个节点的所有连线的集合
 * @method twaver.Node.getToLinks
 * @return {twaver.List} 连线的集合
 */
twaver.Node.prototype.getToLinks = function () {}

/**
 * 获取网元的宽度。若网元上设置了宽度，则返回设置的宽度值。否则如果网元上设置了图片，宽度就是网元图片的宽度。如果什么都没设置，则会返回默认的宽度，默认宽度为50像素
 * @method twaver.Node.getWidth
 * @return {Number} 节点的宽度
 */
twaver.Node.prototype.getWidth = function () {}

/**
 * 获取网元的X坐标。X坐标为网元坐上角的坐标
 * @method twaver.Node.getX
 * @return {Number} 网元的X坐标
 */
twaver.Node.prototype.getX = function () {}

/**
 * 获取网元的Y坐标。Y坐标为网元左上角的坐标
 * @method twaver.Node.getY
 * @return {Number} 网元的Y坐标
 */
twaver.Node.prototype.getY = function () {}

/**
 * 判断这个节点上是否有代理的连线
 * @method twaver.Node.hasAgentLinks
 * @return {Boolean} true为节点上有代理连线，否则为false
 */
twaver.Node.prototype.hasAgentLinks = function () {}

/**
 * 设置节点的旋转角度，单位为度
 * @method twaver.Node.setAngle
 * @param {Number} angle 节点的旋转角度，单位为度
 */
twaver.Node.prototype.setAngle = function (angle) {}

/**
 * 设置这个节点的中心位置。如果想设置左上角的位置，需使用setLocation。参数可以为一个或两个。如果是一个，则传入的必须是一个带x，y坐标的对象，例如：{x:100,y:100}；如果传入的是两个，第一个参数为x坐标，第二个参数为y坐标
 * @method twaver.Node.setCenterLocation
 * @param {Object} x x坐标或者包含x和y属性的Object对象
 * @param {Number} [y] y坐标, 如果第一个参数为包含x和y属性的Object对象, 则此参数忽略
 */
twaver.Node.prototype.setCenterLocation = function (x, y) {}

/**
 * 设置网元的高度
 * @method twaver.Node.setHeight
 * @param {Number} height 网元高度值
 */
twaver.Node.prototype.setHeight = function (height) {}

/**
 * 设置网元上图片的名称。图片名称需要先注册后才可以使用
 * @method twaver.Node.setImage
 * @param {String} image 网元图片的名称
 */
twaver.Node.prototype.setImage = function (image) {}

/**
 * 设置网元的位置。网元的位置指的是网元左上角的位置。参数可以为一个或两个。如果是一个，则传入的必须是一个带x，y坐标的对象，例如：{x:100,y:100}；如果传入的是两个，第一个参数为x坐标，第二个参数为y坐标
 * @method twaver.Node.setLocation
 * @param {Object} x x坐标或者包含x和y属性的Object对象
 * @param {Number} [y] y坐标, 如果第一个参数为包含x和y属性的Object对象, 则此参数忽略
 */
twaver.Node.prototype.setLocation = function (x, y) {}

/**
 * 设置网元的大小。网元的大小指的是网元宽高。参数可以为一个或两个。如果是一个，则传入的必须是一个带width，height坐标的对象，例如：{width:100,height:100}；如果传入的是两个，第一个参数为宽度，第二个参数为高度
 * @method twaver.Node.setSize
 */
twaver.Node.prototype.setSize = function () {}

/**
 * 设置网元的宽度
 * @method twaver.Node.setWidth
 * @param {Number} width 网元的宽度
 */
twaver.Node.prototype.setWidth = function (width) {}

/**
 * 设置X坐标。Z坐标指的是网元左上角X的值
 * @method twaver.Node.setX
 * @param {Number} x X坐标
 */
twaver.Node.prototype.setX = function (x) {}

/**
 * 设置Y坐标。Y坐标指的是网元左上角Y的值
 * @method twaver.Node.setY
 * @param {Number} y Y坐标值
 */
twaver.Node.prototype.setY = function (y) {}

/**
 * 设置网元相对于原来的位置偏移一定的值
 * @method twaver.Node.translate
 * @param {Number} x 偏移X个像素
 * @param {Number} y 偏移Y个像素
 */
twaver.Node.prototype.translate = function (x, y) {}


/**
 * 用指定的ElementBox构造Network，ElementBox是Network的数据容器，如果为null则twaver内部会创建一个新的ElementBox；而且在构造Network后，也可以用Network#setElementBox方法重新绑定一个新的ElementBox
 * @class twaver.canvas.Network
 * @constructor
 * @extends twaver.controls.View
 * @param {twaver.ElementBox} [elementBox] 可选，默认为null，和Network关联的数据容器
 * @return {twaver.network.Network}
 * @example var box = new twaver.ElementBox();
 * var tree = new twaver.controls.Tree(box);
 * var network = new twaver.network.Network(box);
 */
twaver.canvas.Network = function (elementBox) {}

twaver.canvas.Network.prototype = new twaver.controls.View()

/**
 * 添加网元，并派发createElement类型的事件。CreateElementInteraction、CreateLinkInteraction、CreateShapeLinkInteraction和CreateShapeNodeInteraction会调用此方法
 * @method twaver.canvas.Network.addElementByInteraction
 * @param {twaver.Element} element 网元
 */
twaver.canvas.Network.prototype.addElementByInteraction = function (element) {}

/**
 * 添加标记
 * @method twaver.canvas.Network.addMarker
 * @param {Object} marker 带paint方法的对象
 */
twaver.canvas.Network.prototype.addMarker = function (marker) {}

/**
 * 清空标记
 * @method twaver.canvas.Network.clearMarker
 */
twaver.canvas.Network.prototype.clearMarker = function () {}

/**
 * 创建和指定Element关联的ElementUI，添加网元到和Network关联的ElementBox时会触发调用此方法，用户不需要调用此方法，但可以重载此方法
 * @method twaver.canvas.Network.createElementUI
 * @param {twaver.Element} element 用于创建和网元关联的ElementUI
 */
twaver.canvas.Network.prototype.createElementUI = function (element) {}

/**
 * 销毁拓扑图
 * @method twaver.canvas.Network.dispose
 */
twaver.canvas.Network.prototype.dispose = function () {}

/**
 * 获取指定网元的告警冒泡文字内容，默认返回网元的最高新发告警数和别名，如果还有低级别的新发告警则前面带一个+号（比如+3C代表有3个严重告警，并且还有其他低级别新发告警），如果没有新发告警，则返回null
 * @method twaver.canvas.Network.getAlarmLabel
 * @param {twaver.Element} element 网元
 * @return {String} 返回指定网元的告警冒泡文字内容
 */
twaver.canvas.Network.prototype.getAlarmLabel = function (element) {}

/**
 * 获取背景图片
 * @method twaver.canvas.Network.getBackgroundImage
 * @return {HTMLImageElement} 返回背景图片
 */
twaver.canvas.Network.prototype.getBackgroundImage = function () {}

/**
 * 获取背景图片边界
 * @method twaver.canvas.Network.getBackgroundImageRect
 * @return {Object} 返回背景图片边界
 */
twaver.canvas.Network.prototype.getBackgroundImageRect = function () {}

/**
 * 获取拓扑图大小
 * @method twaver.canvas.Network.getCanvasSize
 * @return {Object} 返回拓扑图大小
 */
twaver.canvas.Network.prototype.getCanvasSize = function () {}

/**
 * 获取当前子网，如果是最顶层子网则返回null
 * @method twaver.canvas.Network.getCurrentSubNetwork
 * @return {twaver.SubNetwork} 返回当前子网，如果是最顶层子网则返回null
 */
twaver.canvas.Network.prototype.getCurrentSubNetwork = function () {}

/**
 * 获取网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
 * @method twaver.canvas.Network.getEditableFunction
 * @return {Function} 返回网元可编辑过滤器
 */
twaver.canvas.Network.prototype.getEditableFunction = function () {}

/**
 * 获取创建连线时连线的颜色，默认值为twaver.Defaults.NETWORK_EDIT_LINE_COLOR
 * @method twaver.canvas.Network.getEditLineColor
 * @return {String} 返回创建连线时连线的颜色
 */
twaver.canvas.Network.prototype.getEditLineColor = function () {}

/**
 * 获取创建连线时连线的宽度，默认值为twaver.Defaults.NETWORK_EDIT_LINE_WIDTH
 * @method twaver.canvas.Network.getEditLineWidth
 * @return {Number} 返回创建连线时连线的宽度
 */
twaver.canvas.Network.prototype.getEditLineWidth = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的填充色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR
 * @method twaver.canvas.Network.getEditPointFillColor
 * @return {String} 返回编辑ShapeNode或ShapeLink时控制点的填充色
 */
twaver.canvas.Network.prototype.getEditPointFillColor = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR
 * @method twaver.canvas.Network.getEditPointOutlineColor
 * @return {String} 返回编辑ShapeNode或ShapeLink时控制点的边框颜色
 */
twaver.canvas.Network.prototype.getEditPointOutlineColor = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH
 * @method twaver.canvas.Network.getEditPointOutlineWidth
 * @return {Number} 返回编辑ShapeNode或ShapeLink时控制点的边框宽度
 */
twaver.canvas.Network.prototype.getEditPointOutlineWidth = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的大小，默认值为twaver.Defaults.NETWORK_EDIT_POINT_SIZE
 * @method twaver.canvas.Network.getEditPointSize
 * @return {Number} 返回编辑ShapeNode或ShapeLink时控制点的大小
 */
twaver.canvas.Network.prototype.getEditPointSize = function () {}

/**
 * 获取指定坐标点或者当前鼠标下的网元
 * @method twaver.canvas.Network.getElementAt
 * @param {Object} point 可以为坐标点或者鼠标事件
 * @param {Boolean} [selectable] 如果为true，则只返回可以被选择的网元，否则不可选中的网元也可以返回，可选，默认值为true
 * @return {twaver.Element} 返回坐标点或者当前鼠标下的网元
 * @example network.getView().addEventListener('mousedown', function (e) {
 *     var point = network.getLogicalPoint(e);
 *     console.log(network.getElementAt(e));
 *     console.log(network.getElementAt(point));
 * });
 */
twaver.canvas.Network.prototype.getElementAt = function (point, selectable) {}

/**
 * 获取和Network绑定的ElementBox网元容器
 * @method twaver.canvas.Network.getElementBox
 * @return {twaver.ElementBox} 返回和Network绑定的ElementBox网元容器
 */
twaver.canvas.Network.prototype.getElementBox = function () {}

/**
 * 获取矩形区域包含或相交网元
 * @method twaver.canvas.Network.getElementsAtRect
 * @param {Object} rect 矩形区域
 * @param {Boolean} [intersectMode] 如果为true则只要和矩形区域相交的网元都返回，否则只返回矩形区域包含的网元，可选，默认值为false
 * @param {Function} [filter] 过滤器, 可选, 默认值为null
 * @param {Boolean} [selectable] 网元是否可选择，默认为true
 * @return {twaver.List} 返回矩形区域包含或相交网元
 * @example var elements = network.getElementsAtRect({x:0, y:0, width:100, height:100});
 */
twaver.canvas.Network.prototype.getElementsAtRect = function (rect, intersectMode, filter, selectable) {}

/**
 * 获取和网元关联的视图对象
 * @method twaver.canvas.Network.getElementUI
 * @param {twaver.Element} element 网元
 * @return {twaver.network.ElementUI} 返回和网元关联的视图对象
 */
twaver.canvas.Network.prototype.getElementUI = function (element) {}

/**
 * 获取网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
 * twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
 *     var clazz = element.getElementUIClass();
 *     if (clazz) {
 *          return new clazz(network, element);
 *     }
 *     return null;
 *  }
 * @method twaver.canvas.Network.getElementUIFunction
 * @return {Function} 返回网元视图生成器
 */
twaver.canvas.Network.prototype.getElementUIFunction = function () {}

/**
 * 返回包含分组孩子视图区域的集合
 * @method twaver.canvas.Network.getGroupChildrenRects
 * @param {twaver.Group} group 分组对象
 * @return {twaver.List} 返回包含孩子视图区域的集合
 */
twaver.canvas.Network.prototype.getGroupChildrenRects = function (group) {}

/**
 * 获取指定网元的图标颜色数组，默认返回element#getStyle('icons.colors')
 * @method twaver.canvas.Network.getIconsColors
 * @param {twaver.Element} element 网元
 * @return {Array} 返回指定网元的图标颜色数组
 */
twaver.canvas.Network.prototype.getIconsColors = function (element) {}

/**
 * 获取指定网元的图标名称数组，默认返回element#getStyle('icons.names')
 * @method twaver.canvas.Network.getIconsNames
 * @param {twaver.Element} element 网元
 * @return {Array} 返回指定网元的图标名称数组
 */
twaver.canvas.Network.prototype.getIconsNames = function (element) {}

/**
 * 获取交互处理器集合，交互处理器用于设置Network相应哪些键盘和鼠标事件。
 * @method twaver.canvas.Network.getInteractions
 * @return {Array} 返回交互处理器集合
 */
twaver.canvas.Network.prototype.getInteractions = function () {}

/**
 * 获取指定网元所在的层，默认为'default'层
 * @method twaver.canvas.Network.getLayerByElement
 * @param {twaver.Element} element 用于返回层的网元
 * @return {twaver.Layer} 返回指定网元所在的层
 */
twaver.canvas.Network.prototype.getLayerByElement = function (element) {}

/**
 * 获取延迟移动网元时网元的填充色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR
 * @method twaver.canvas.Network.getLazyMoveFillColor
 * @return {String} 返回延迟移动网元时网元的填充色
 */
twaver.canvas.Network.prototype.getLazyMoveFillColor = function () {}

/**
 * 获取延迟移动网元时网元的边框颜色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR
 * @method twaver.canvas.Network.getLazyMoveOutlineColor
 * @return {String} 返回延迟移动网元时网元的边框颜色
 */
twaver.canvas.Network.prototype.getLazyMoveOutlineColor = function () {}

/**
 * 获取延迟移动网元时网元的边框宽度，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH
 * @method twaver.canvas.Network.getLazyMoveOutlineWidth
 * @return {Number} 返回延迟移动网元时网元的边框宽度
 */
twaver.canvas.Network.prototype.getLazyMoveOutlineWidth = function () {}

/**
 * 获取节点是否可以连线的过滤器
 * @method twaver.canvas.Network.getLinkableFunction
 * @return {Function} 返回节点是否可以连线的过滤器
 */
twaver.canvas.Network.prototype.getLinkableFunction = function () {}

/**
 * 获得LINK的流动间隔时间
 * @method twaver.canvas.Network.getLinkFlowInterval
 * @return {String} 返回Link的流动间隔时间
 */
twaver.canvas.Network.prototype.getLinkFlowInterval = function () {}

/**
 * 获得Link流动时的偏移量
 * @method twaver.canvas.Network.getLinkFlowOffset
 * @param {String} link Link实例
 * @return {String} 返回Link流动时的偏移量
 */
twaver.canvas.Network.prototype.getLinkFlowOffset = function (link) {}

/**
 * 获得Link流动时的步进量
 * @method twaver.canvas.Network.getLinkFlowStepping
 * @param {String} link Link实例
 * @return {String} 返回Link流动时的步进量
 */
twaver.canvas.Network.prototype.getLinkFlowStepping = function (link) {}

/**
 * 获取指定连线捆绑后的标签，默认如果指定的连线是捆绑代理，则返回"+(" + link.getBundleCount() + ")"，否则返回null
 * @method twaver.canvas.Network.getLinkHandlerLabel
 * @param {twaver.Link} link 连线
 * @return {String} 返回指定连线捆绑后的标签
 */
twaver.canvas.Network.prototype.getLinkHandlerLabel = function (link) {}

/**
 * 获取连线路径生成函数
 * @method twaver.canvas.Network.getLinkPathFunction
 * @return {Function} 返回连线路径生成函数
 */
twaver.canvas.Network.prototype.getLinkPathFunction = function () {}

/**
 * 获取网元可移动过滤器
 * @method twaver.canvas.Network.getMovableFunction
 * @return {Function} 返回网元可移动过滤器
 */
twaver.canvas.Network.prototype.getMovableFunction = function () {}

/**
 * 获取可移动的被选中的网元集合
 * @method twaver.canvas.Network.getMovableSelectedElements
 * @return {twaver.List} 返回可移动的被选中的网元集合
 */
twaver.canvas.Network.prototype.getMovableSelectedElements = function () {}

/**
 * 获取可移动的网元的区域
 * @method twaver.canvas.Network.getMovableSelectedElementsRect
 * @return {Object} 返回可移动的网元的区域
 */
twaver.canvas.Network.prototype.getMovableSelectedElementsRect = function () {}

/**
 * 获取下方内边距
 * @method twaver.canvas.Network.getPaddingBottom
 * @return {Number} 返回下方内边距，默认为0
 */
twaver.canvas.Network.prototype.getPaddingBottom = function () {}

/**
 * 获取右边内边距
 * @method twaver.canvas.Network.getPaddingRight
 * @return {Number} 返回右边内编辑，默认为0
 */
twaver.canvas.Network.prototype.getPaddingRight = function () {}

/**
 * 获取相对于网元指定位置的坐标，此方法常用于定位和网元相关的附件的位置
 * @method twaver.canvas.Network.getPosition
 * @param {String} position 相对位置
 * @param {Object} obj 获取位置时的相对网元或网元视图，类型为twaver.Element或者twaver.network.ElementUI
 * @param {Object} tarSize 目标的大小，类型为包含width和height属性的Object对象
 * @param {String} xoffset x坐标偏移量
 * @param {String} yoffset y坐标偏移量
 * @return {Object} 返回包含x坐标和y坐标的Object对象
 * @example var node = new twaver.Node({name:'Node', location: {x:100, y:100}});
 * box.add(node);
 * var position = network.getPosition('top.top', node, {width:10, height:10}, 0, 0);
 * console.log(position.x, position.y);
 * // output: 110 90
 * 
 * position可以为：
 * hotspot
 * from
 * to
 * topleft.topleft
 * topleft.topright
 * top.top
 * topright.topleft
 * topright.topright
 * topleft
 * top
 * topright
 * topleft.bottomleft
 * topleft.bottomright
 * top.bottom
 * topright.bottomleft
 * topright.bottomright
 * left.left
 * left
 * left.right
 * center
 * right.left
 * right
 * right.right
 * bottomleft.topleft
 * bottomleft.topright
 * bottom.top
 * bottomright.topleft
 * bottomright.topright
 * bottomleft
 * bottom
 * bottomright
 * bottomleft.bottomleft
 * bottomleft.bottomright
 * bottom.bottom
 * bottomright.bottomleft
 * bottomright.bottomright
 */
twaver.canvas.Network.prototype.getPosition = function (position, obj, tarSize, xoffset, yoffset) {}

/**
 * 获取框选网元过滤器
 * @method twaver.canvas.Network.getRectSelectFilter
 * @return {Function} 返回框选网元过滤器
 */
twaver.canvas.Network.prototype.getRectSelectFilter = function () {}

/**
 * 获取延迟改变网元大小时网元边框的颜色，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_COLOR
 * @method twaver.canvas.Network.getResizeLineColor
 * @return {String} 返回延迟改变网元大小时网元边框的颜色
 */
twaver.canvas.Network.prototype.getResizeLineColor = function () {}

/**
 * 获取延迟改变网元大小时网元边框的宽度，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH
 * @method twaver.canvas.Network.getResizeLineWidth
 * @return {Number} 返回延迟改变网元大小时网元边框的宽度
 */
twaver.canvas.Network.prototype.getResizeLineWidth = function () {}

/**
 * 获取改变网元大小时控制点的填充色，默认为twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR
 * @method twaver.canvas.Network.getResizePointFillColor
 * @return {String} 返回改变网元大小时控制点的填充色
 */
twaver.canvas.Network.prototype.getResizePointFillColor = function () {}

/**
 * 获取改变网元大小时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR
 * @method twaver.canvas.Network.getResizePointOutlineColor
 * @return {String} 返回改变网元大小时控制点的边框颜色
 */
twaver.canvas.Network.prototype.getResizePointOutlineColor = function () {}

/**
 * 获取改变网元大小时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH
 * @method twaver.canvas.Network.getResizePointOutlineWidth
 * @return {Number} 返回改变网元大小时控制点的边框宽度
 */
twaver.canvas.Network.prototype.getResizePointOutlineWidth = function () {}

/**
 * 获取更改网元大小的控制点的大小
 * @method twaver.canvas.Network.getResizePointSize
 * @return {Number} 返回更改网元大小的控制点的大小
 */
twaver.canvas.Network.prototype.getResizePointSize = function () {}

/**
 * 获取主画布，网元视图绘制在主画布上
 * @method twaver.canvas.Network.getRootCanvas
 * @return {HTMLCanvasElement} 返回主画布
 */
twaver.canvas.Network.prototype.getRootCanvas = function () {}

/**
 * 获取网元是否可旋转过滤器
 * @method twaver.canvas.Network.getRotatableFunction
 * @return {Function} 网元是否可旋转过滤器
 */
twaver.canvas.Network.prototype.getRotatableFunction = function () {}

/**
 * 获取旋转控制点的填充色
 * @method twaver.canvas.Network.getRotatePointFillColor
 * @return {String} 返回旋转控制点的填充色
 */
twaver.canvas.Network.prototype.getRotatePointFillColor = function () {}

/**
 * 获取旋转控制点的偏移量
 * @method twaver.canvas.Network.getRotatePointOffset
 * @return {Number} 返回旋转控制点的偏移量
 */
twaver.canvas.Network.prototype.getRotatePointOffset = function () {}

/**
 * 获取旋转控制点的边框颜色
 * @method twaver.canvas.Network.getRotatePointOutlineColor
 * @return {String} 返回旋转控制点的边框颜色
 */
twaver.canvas.Network.prototype.getRotatePointOutlineColor = function () {}

/**
 * 获取旋转控制点的边框宽度
 * @method twaver.canvas.Network.getRotatePointOutlineWidth
 * @return {Number} 返回旋转控制点的边框宽度
 */
twaver.canvas.Network.prototype.getRotatePointOutlineWidth = function () {}

/**
 * 返回旋转控制点的大小
 * @method twaver.canvas.Network.getRotatePointSize
 * @return {Number} 旋转控制点的大小
 */
twaver.canvas.Network.prototype.getRotatePointSize = function () {}

/**
 * 获取旋转刻度填充色
 * @method twaver.canvas.Network.getRotateScaleFillColor
 * @return {String} 返回旋转刻度填充色
 */
twaver.canvas.Network.prototype.getRotateScaleFillColor = function () {}

/**
 * 获取旋转刻度文字字体颜色
 * @method twaver.canvas.Network.getRotateScaleFontColor
 * @return {String} 旋转刻度文字字体颜色
 */
twaver.canvas.Network.prototype.getRotateScaleFontColor = function () {}

/**
 * 获取旋转刻度高度
 * @method twaver.canvas.Network.getRotateScaleHeight
 * @return {Number} 旋转刻度高度
 */
twaver.canvas.Network.prototype.getRotateScaleHeight = function () {}

/**
 * 获取旋转刻度宽度
 * @method twaver.canvas.Network.getRotateScaleWidth
 * @return {Number} 返回旋转刻度宽度
 */
twaver.canvas.Network.prototype.getRotateScaleWidth = function () {}

/**
 * 获取滚动条宽度
 * @method twaver.canvas.Network.getScrollBarWidth
 * @return {Number} 返回滚动条宽度，默认为10
 */
twaver.canvas.Network.prototype.getScrollBarWidth = function () {}

/**
 * 获取框选时矩形框的填充色，默认值为twaver.Defaults.NETWORK_SELECT_FILL_COLOR
 * @method twaver.canvas.Network.getSelectFillColor
 * @return {String} 返回框选时矩形框的填充色
 */
twaver.canvas.Network.prototype.getSelectFillColor = function () {}

/**
 * 获取选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @method twaver.canvas.Network.getSelectMode
 * @return {String} 返回选择模式
 */
twaver.canvas.Network.prototype.getSelectMode = function () {}

/**
 * 获取框选时矩形框的边框颜色，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR
 * @method twaver.canvas.Network.getSelectOutlineColor
 * @return {String} 返回框选时矩形框的边框颜色
 */
twaver.canvas.Network.prototype.getSelectOutlineColor = function () {}

/**
 * 获取框选时矩形框的边框宽度，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH
 * @method twaver.canvas.Network.getSelectOutlineWidth
 * @return {String} 返回框选时矩形框的边框宽度
 */
twaver.canvas.Network.prototype.getSelectOutlineWidth = function () {}

/**
 * 获得指定网元选中时的阴影颜色，如果网元的style属性shadow.color不为空，则返回style属性shadow.color的值，否则返回style属性select.color的值
 * @method twaver.canvas.Network.getShadowColor
 * @param {twaver.Element} element 网元
 * @return {String} 返回指定网元选中时的阴影颜色
 */
twaver.canvas.Network.prototype.getShadowColor = function (element) {}

/**
 * 获取上层画布，默认告警等附件画在上层画布上
 * @method twaver.canvas.Network.getTopCanvas
 * @return {HTMLCanvasElement} 返回上层画布
 */
twaver.canvas.Network.prototype.getTopCanvas = function () {}

/**
 * 获取Network可见网元所占的区域
 * @method twaver.canvas.Network.getViewRect
 * @return {Object} 返回包含x、y、width和height属性的Object对象
 */
twaver.canvas.Network.prototype.getViewRect = function () {}

/**
 * 获取网元可见过滤器，Network通过可见过滤器判断每个网元是否可见
 * @method twaver.canvas.Network.getVisibleFunction
 * @return {Function} 返回网元可见过滤器
 */
twaver.canvas.Network.prototype.getVisibleFunction = function () {}

/**
 * ElementBox里网元添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleElementBoxChange
 * @param {Object} e ElementBox里网元变化事件，包含kind和data属性
 */
twaver.canvas.Network.prototype.handleElementBoxChange = function (e) {}

/**
 * ElementBox里网元的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleElementBoxPropertyChange
 * @param {Object} e ElementBox里网元属性变化事件，包含property、oldValue和newValue属性
 */
twaver.canvas.Network.prototype.handleElementBoxPropertyChange = function (e) {}

/**
 * ElementBox的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleElementPropertyChange
 * @param {Object} e ElementBox属性变化事件，包含property、oldValue和newValue属性
 */
twaver.canvas.Network.prototype.handleElementPropertyChange = function (e) {}

/**
 * ElementBox里网元的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleIndexChange
 * @param {Object} e 网元顺序变化事件，包含element、oldIndex和newIndex属性
 */
twaver.canvas.Network.prototype.handleIndexChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleLayerBoxChange
 * @param {Object} e LayerBox里Layer变化事件，包含kind和data属性
 */
twaver.canvas.Network.prototype.handleLayerBoxChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer层次变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleLayerHierarchyChange
 * @param {Object} e LayerBox里Layer层次变化事件，包含kind和data属性
 */
twaver.canvas.Network.prototype.handleLayerHierarchyChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer属性变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleLayerPropertyChange
 * @param {Object} e LayerBox里Layer属性变化事件，包含kind和data属性
 */
twaver.canvas.Network.prototype.handleLayerPropertyChange = function (e) {}

/**
 * SelectionModel选择变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.canvas.Network.handleSelectionChange
 * @param {Object} e 选择变化事件，包含kind和data属性
 */
twaver.canvas.Network.prototype.handleSelectionChange = function (e) {}

/**
 * 获取是否包含编辑交互处理器
 * @method twaver.canvas.Network.hasEditInteraction
 * @return {Boolean} 如果包含编辑交互处理器，则返回ture，否则返回false
 */
twaver.canvas.Network.prototype.hasEditInteraction = function () {}

/**
 * 判断是否包含选中的并且可移动的网元
 * @method twaver.canvas.Network.hasMovableSelectedElements
 * @return {Boolean} 如果包含选中的并且可移动的网元，则返回true，否则返回false
 */
twaver.canvas.Network.prototype.hasMovableSelectedElements = function () {}

/**
 * 获取鼠标下或指定坐标下的网元视图对象或附件对象
 * @method twaver.canvas.Network.hitTest
 * @param {Object} point 鼠标事件或坐标点
 * @return {Object} 返回鼠标下或指定坐标下的网元视图对象或附件对象
 */
twaver.canvas.Network.prototype.hitTest = function (point) {}

/**
 * 使指定连线的捆绑连线无效
 * @method twaver.canvas.Network.invalidateBundleLink
 * @param {twaver.Link} element 连线
 */
twaver.canvas.Network.prototype.invalidateBundleLink = function (element) {}

/**
 * 无效画布大小
 * @method twaver.canvas.Network.invalidateCanvasSize
 * @param {Number} delay 延迟时间，默认为300ms
 */
twaver.canvas.Network.prototype.invalidateCanvasSize = function (delay) {}

/**
 * 使指定网元的视图无效
 * @method twaver.canvas.Network.invalidateElementUI
 * @param {twaver.Element} element 网元
 * @param {Boolean} [checkAttachments] 如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false
 */
twaver.canvas.Network.prototype.invalidateElementUI = function (element, checkAttachments) {}

/**
 * 使所有网元的视图无效
 * @method twaver.canvas.Network.invalidateElementUIs
 * @param {Boolean} [checkAttachments] 如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false
 */
twaver.canvas.Network.prototype.invalidateElementUIs = function (checkAttachments) {}

/**
 * 无效所有网元的可见性，当设置了visibleFunction，并且外部条件变动后，可以用此方法强制刷新所有网元是否可见
 * @method twaver.canvas.Network.invalidateElementVisibility
 */
twaver.canvas.Network.prototype.invalidateElementVisibility = function () {}

/**
 * 无效所有选中网元的视图
 * @method twaver.canvas.Network.invalidateSelectedElementUIs
 * @param {Boolean} [checkAttachments] 如果为true，则无效网元的同时无效附件，否则不无效附件，可选，默认为false
 */
twaver.canvas.Network.prototype.invalidateSelectedElementUIs = function (checkAttachments) {}

/**
 * 获取是否自动计算画布大小
 * @method twaver.canvas.Network.isAutoValidateCanvasSize
 * @return {Boolean} 返回是否自动计算画布大小
 */
twaver.canvas.Network.prototype.isAutoValidateCanvasSize = function () {}

/**
 * 获取是否能双击进入空的子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK
 * @method twaver.canvas.Network.isDoubleClickToEmptySubNetwork
 * @return {Boolean} 返回是否能双击进入空的子网
 */
twaver.canvas.Network.prototype.isDoubleClickToEmptySubNetwork = function () {}

/**
 * 获取是否双击展开组，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND
 * @method twaver.canvas.Network.isDoubleClickToGroupExpand
 * @return {Boolean} 返回是否双击展开组
 */
twaver.canvas.Network.prototype.isDoubleClickToGroupExpand = function () {}

/**
 * 获取是否双击捆绑连线，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE
 * @method twaver.canvas.Network.isDoubleClickToLinkBundle
 * @return {Boolean} 返回是否双击捆绑连线
 */
twaver.canvas.Network.prototype.isDoubleClickToLinkBundle = function () {}

/**
 * 获取是否双击子网时进入子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK
 * @method twaver.canvas.Network.isDoubleClickToSubNetwork
 * @return {Boolean} 返回是否双击子网时进入子网
 */
twaver.canvas.Network.prototype.isDoubleClickToSubNetwork = function () {}

/**
 * 获取是否双击背景返回上一层子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK
 * @method twaver.canvas.Network.isDoubleClickToUpSubNetwork
 * @return {Boolean} 返回是否双击背景返回上一层子网
 */
twaver.canvas.Network.prototype.isDoubleClickToUpSubNetwork = function () {}

/**
 * 判断指定网元是否可编辑，如果editableFunction返回false，则不可编辑；如果网元所在的层不可编辑，则不可编辑；否则可编辑
 * @method twaver.canvas.Network.isEditable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元可编辑，则返回true，否则返回false
 */
twaver.canvas.Network.prototype.isEditable = function (element) {}

/**
 * 获取是否正在编辑网元
 * @method twaver.canvas.Network.isEditingElement
 * @return {Boolean} 返回是否正在编辑网元
 */
twaver.canvas.Network.prototype.isEditingElement = function () {}

/**
 * 获取水平滚动条是否可见
 * @method twaver.canvas.Network.isHScrollBarVisible
 * @return {Boolean} 返回水平滚动条是否可见
 */
twaver.canvas.Network.prototype.isHScrollBarVisible = function () {}

/**
 * 获取是否允许用键盘Delete键删除选中网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED
 * @method twaver.canvas.Network.isKeyboardRemoveEnabled
 * @return {Boolean} 返回是否允许用键盘Delete键删除选中网元
 */
twaver.canvas.Network.prototype.isKeyboardRemoveEnabled = function () {}

/**
 * 获取是否允许用键盘Ctrl+A键选择所有网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED
 * @method twaver.canvas.Network.isKeyboardSelectEnabled
 * @return {Boolean} 返回是否允许用键盘Ctrl+A键选择所有网元
 */
twaver.canvas.Network.prototype.isKeyboardSelectEnabled = function () {}

/**
 * 获取延迟移动网元时是否有动画效果，默认值为twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE
 * @method twaver.canvas.Network.isLazyMoveAnimate
 * @return {Boolean} 返回延迟移动网元时是否有动画效果
 */
twaver.canvas.Network.prototype.isLazyMoveAnimate = function () {}

/**
 * 获取延迟移动网元时轮廓是否填充，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL
 * @method twaver.canvas.Network.isLazyMoveFill
 * @return {Boolean} 返回延迟移动网元时轮廓是否填充
 */
twaver.canvas.Network.prototype.isLazyMoveFill = function () {}

/**
 * 获取是否限制网元坐标不能为负
 * @method twaver.canvas.Network.isLimitElementInPositiveLocation
 * @return {Boolean} 返回是否限制网元坐标不能为负
 */
twaver.canvas.Network.prototype.isLimitElementInPositiveLocation = function () {}

/**
 * 获取是否限制左上角，如果限制左上角，不能看到左上角以外的区域
 * @method twaver.canvas.Network.isLimitViewInCanvas
 * @return {Boolean} 返回是否限制左上角，默认为true
 */
twaver.canvas.Network.prototype.isLimitViewInCanvas = function () {}

/**
 * 获取指定节点是否可以创建连线
 * @method twaver.canvas.Network.isLinkable
 * @param {twaver.Node} node 节点
 * @return {Boolean} 返回指定节点是否可以创建连线
 */
twaver.canvas.Network.prototype.isLinkable = function (node) {}

/**
 * 返回是否启用流动Link，默认是false
 * @method twaver.canvas.Network.isLinkFlowEnabled
 * @return {String} 是否启用流动Link
 */
twaver.canvas.Network.prototype.isLinkFlowEnabled = function () {}

/**
 * 获取网元被选择时是否让其可见，默认值为twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.canvas.Network.isMakeVisibleOnSelected
 * @return {Boolean} 返回网元被选择时是否让其可见
 */
twaver.canvas.Network.prototype.isMakeVisibleOnSelected = function () {}

/**
 * 判断指定网元是否可移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
 * @method twaver.canvas.Network.isMovable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元可移动，则返回true，否则返回false
 */
twaver.canvas.Network.prototype.isMovable = function (element) {}

/**
 * 获取是否正在移动网元
 * @method twaver.canvas.Network.isMovingElement
 * @return {Boolean} 返回是否正在移动网元
 */
twaver.canvas.Network.prototype.isMovingElement = function () {}

/**
 * 获取不是代理的连线是否可见，默认值为twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE
 * @method twaver.canvas.Network.isNoAgentLinkVisible
 * @return {Boolean} 返回不是代理的连线是否可见
 */
twaver.canvas.Network.prototype.isNoAgentLinkVisible = function () {}

/**
 * 获取是否允许框选网元
 * @method twaver.canvas.Network.isRectSelectEnabled
 * @return {Boolean} 如果允许框选网元, 返回true, 否则返回false
 */
twaver.canvas.Network.prototype.isRectSelectEnabled = function () {}

/**
 * 获取改变网元大小时是否有动画效果，默认值为twaver.Defaults.NETWORK_RESIZE_ANIMATE
 * @method twaver.canvas.Network.isResizeAnimate
 * @return {Boolean} 返回改变网元大小时是否有动画效果
 */
twaver.canvas.Network.prototype.isResizeAnimate = function () {}

/**
 * 获取指定网元是否可旋转
 * @method twaver.canvas.Network.isRotatable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 返回指定网元是否可旋转
 */
twaver.canvas.Network.prototype.isRotatable = function (element) {}

/**
 * 获取是否正在旋转网元
 * @method twaver.canvas.Network.isRotatingElement
 * @return {Boolean} 返回是否正在旋转网元
 */
twaver.canvas.Network.prototype.isRotatingElement = function () {}

/**
 * 获取滚动条是否可见
 * @method twaver.canvas.Network.isScrollBarVisible
 * @return {Boolean} 返回滚动条是否可见
 */
twaver.canvas.Network.prototype.isScrollBarVisible = function () {}

/**
 * 获取是否正在选择网元
 * @method twaver.canvas.Network.isSelectingElement
 * @return {Boolean} 返回是否正在选择网元
 */
twaver.canvas.Network.prototype.isSelectingElement = function () {}

/**
 * 获取网元被选中后是否置顶，默认值为twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED
 * @method twaver.canvas.Network.isSendToTopOnSelected
 * @return {Boolean} 返回网元被选中后是否置顶
 */
twaver.canvas.Network.prototype.isSendToTopOnSelected = function () {}

/**
 * 获取是否显示旋转网元时的刻度
 * @method twaver.canvas.Network.isShowRotateScale
 * @return {Boolean} 返回是否显示旋转网元时的刻度
 */
twaver.canvas.Network.prototype.isShowRotateScale = function () {}

/**
 * 获取进入下一层子网或返回上一层子网时是否有动画效果，默认值为twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE
 * @method twaver.canvas.Network.isSubNetworkAnimate
 * @return {Boolean} 返回进入下一层子网或返回上一层子网时是否有动画效果
 */
twaver.canvas.Network.prototype.isSubNetworkAnimate = function () {}

/**
 * 获取是否让提示信息生效，默认值为twaver.Defaults.NETWORK_TOOLTIP_ENABLED
 * @method twaver.canvas.Network.isToolTipEnabled
 * @return {Boolean} 返回是否让提示信息生效
 */
twaver.canvas.Network.prototype.isToolTipEnabled = function () {}

/**
 * 获取指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
 * @method twaver.canvas.Network.isVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果指定网元可见，则返回true，否则返回false
 */
twaver.canvas.Network.prototype.isVisible = function (element) {}

/**
 * 获取垂直滚动条是否可见
 * @method twaver.canvas.Network.isVScrollBarVisible
 * @return {Boolean} 返回垂直滚动条是否可见，默认为true
 */
twaver.canvas.Network.prototype.isVScrollBarVisible = function () {}

/**
 * 滚动水平和垂直滚动条，让指定网元可见
 * @method twaver.canvas.Network.makeVisible
 * @param {twaver.Element} element 网元
 */
twaver.canvas.Network.prototype.makeVisible = function (element) {}

/**
 * 将选中的网元移动指定偏移量，移动时可以设置是否有动画效果，而且能指定移动结束后执行的动作
 * @method twaver.canvas.Network.moveSelectedElements
 * @param {Number} xoffset x坐标偏移量
 * @param {Number} yoffset y坐标偏移量
 * @param {Boolean} [animate] 移动时是否有动画效果，可选，默认为false
 * @param {Function} [finishFunction] 回调函数，移动结束后执行的动作，可选，默认为null
 */
twaver.canvas.Network.prototype.moveSelectedElements = function (xoffset, yoffset, animate, finishFunction) {}

/**
 * shareSelectionModel属性变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
 * @method twaver.canvas.Network.onShareSelectionModelChanged
 */
twaver.canvas.Network.prototype.onShareSelectionModelChanged = function () {}

/**
 * 绘制最底层元素
 * @method twaver.canvas.Network.paintBottom
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.Network.prototype.paintBottom = function (ctx) {}

/**
 * 回去标记
 * @method twaver.canvas.Network.paintMarker
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.canvas.Network.prototype.paintMarker = function (ctx) {}

/**
 * 绘制所有网元视图
 * @method twaver.canvas.Network.paintRoot
 */
twaver.canvas.Network.prototype.paintRoot = function () {}

/**
 * 绘制上层画布
 * @method twaver.canvas.Network.paintTopCanvas
 */
twaver.canvas.Network.prototype.paintTopCanvas = function () {}

/**
 * 删除标记
 * @method twaver.canvas.Network.removeMarker
 * @param {Object} marker 带paint方法的对象
 */
twaver.canvas.Network.prototype.removeMarker = function (marker) {}

/**
 * 重绘上层画布
 * @method twaver.canvas.Network.repaintTopCanvas
 */
twaver.canvas.Network.prototype.repaintTopCanvas = function () {}

/**
 * 将指定网元置顶，显示在所有网元的最上面，遮盖其他网元，但也受网元所在的层的制约，还有父子关系以及跟随关系的制约；如果sendToTopOnSelected为true，则点击网元时会调用此方法
 * @method twaver.canvas.Network.sendToTop
 * @param {twaver.Element} element 网元
 */
twaver.canvas.Network.prototype.sendToTop = function (element) {}

/**
 * 设置是否自动计算画布大小
 * @method twaver.canvas.Network.setAutoValidateCanvasSize
 * @param {Boolean} v 是否自动计算画布大小
 */
twaver.canvas.Network.prototype.setAutoValidateCanvasSize = function (v) {}

/**
 * 设置背景图片
 * @method twaver.canvas.Network.setBackgroundImage
 * @param {HTMLImageElement} backgroundImage 背景图片
 */
twaver.canvas.Network.prototype.setBackgroundImage = function (backgroundImage) {}

/**
 * 设置当前交互模式为创建网元模式，在Network上单击时，会创建指定类型的网元
 * @method twaver.canvas.Network.setCreateElementInteractions
 * @param {Function} [type] 网元类型，可选，默认值为twaver.Node
 */
twaver.canvas.Network.prototype.setCreateElementInteractions = function (type) {}

/**
 * 设置当前交互模式为创建连线模式，在Network上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点
 * @method twaver.canvas.Network.setCreateLinkInteractions
 * @param {Function} [type] 连线类型，可选，默认值为twaver.Link
 */
twaver.canvas.Network.prototype.setCreateLinkInteractions = function (type) {}

/**
 * 设置当前交互模式为创建折线模式，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点
 * @method twaver.canvas.Network.setCreateShapeLinkInteractions
 * @param {Function} [type] 折线类型，可选，默认值为twaver.ShapeLink
 */
twaver.canvas.Network.prototype.setCreateShapeLinkInteractions = function (type) {}

/**
 * 设置当前交互模式为创建多边形模式，在Network上多次点击不同位置设置多边形的points属性，最后双击结束
 * @method twaver.canvas.Network.setCreateShapeNodeInteractions
 * @param {Function} [type] 多边形类型，可选，默认值为twaver.ShapeNode
 */
twaver.canvas.Network.prototype.setCreateShapeNodeInteractions = function (type) {}

/**
 * 将当前子网设置为指定子网，并且可以设置是否有动画效果，而且能指定设置当前子网结束后执行的动作
 * @method twaver.canvas.Network.setCurrentSubNetwork
 * @param {twaver.SubNetwork} currentSubNetwork 子网
 * @param {Boolean} [animate] 是否有动画效果
 * @param {Function} [finishFunction] 设置当前子网结束后的回调函数，可选，默认为null
 */
twaver.canvas.Network.prototype.setCurrentSubNetwork = function (currentSubNetwork, animate, finishFunction) {}

/**
 * 设置交互模式为默认交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.canvas.Network.setDefaultInteractions
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选、默认为false
 */
twaver.canvas.Network.prototype.setDefaultInteractions = function (lazyMode) {}

/**
 * 设置是否能双击进入空的子网
 * @method twaver.canvas.Network.setDoubleClickToEmptySubNetwork
 * @param {Boolean} v 是否能双击进入空的子网
 */
twaver.canvas.Network.prototype.setDoubleClickToEmptySubNetwork = function (v) {}

/**
 * 设置是否双击展开组
 * @method twaver.canvas.Network.setDoubleClickToGroupExpand
 * @param {Boolean} v 是否能双击展开组
 */
twaver.canvas.Network.prototype.setDoubleClickToGroupExpand = function (v) {}

/**
 * 设置是否双击捆绑连线
 * @method twaver.canvas.Network.setDoubleClickToLinkBundle
 * @param {Boolean} v 是否双击捆绑连线
 */
twaver.canvas.Network.prototype.setDoubleClickToLinkBundle = function (v) {}

/**
 * 设置是否双击子网时进入子网
 * @method twaver.canvas.Network.setDoubleClickToSubNetwork
 * @param {Boolean} v 是否双击子网时进入子网
 */
twaver.canvas.Network.prototype.setDoubleClickToSubNetwork = function (v) {}

/**
 * 设置是否双击背景返回上一层子网
 * @method twaver.canvas.Network.setDoubleClickToUpSubNetwork
 * @param {Boolean} v 是否双击背景返回上一层子网
 */
twaver.canvas.Network.prototype.setDoubleClickToUpSubNetwork = function (v) {}

/**
 * 设置网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
 * @method twaver.canvas.Network.setEditableFunction
 * @param {Function} value 网元可编辑过滤器
 * @example network.setEditInteractions();
 * network.setEditableFunction(function (element) {
 *     return element.getName() === 'From';
 * });
 */
twaver.canvas.Network.prototype.setEditableFunction = function (value) {}

/**
 * 设置是否正在编辑网元
 * @method twaver.canvas.Network.setEditingElement
 * @param {Boolean} v 是否正在编辑网元
 */
twaver.canvas.Network.prototype.setEditingElement = function (v) {}

/**
 * 设置交互模式为编辑交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、编辑处理器EditInteraction（处理改变网元大小）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.canvas.Network.setEditInteractions
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选、默认为false
 */
twaver.canvas.Network.prototype.setEditInteractions = function (lazyMode) {}

/**
 * 设置创建连线时连线的颜色
 * @method twaver.canvas.Network.setEditLineColor
 * @param {String} v 创建连线时连线的颜色
 */
twaver.canvas.Network.prototype.setEditLineColor = function (v) {}

/**
 * 设置创建连线时连线的宽度
 * @method twaver.canvas.Network.setEditLineWidth
 * @param {Number} v 创建连线时连线的宽度
 */
twaver.canvas.Network.prototype.setEditLineWidth = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的填充色
 * @method twaver.canvas.Network.setEditPointFillColor
 * @param {String} v 编辑ShapeNode或ShapeLink时控制点的填充色
 */
twaver.canvas.Network.prototype.setEditPointFillColor = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的边框颜色
 * @method twaver.canvas.Network.setEditPointOutlineColor
 * @param {String} v 编辑ShapeNode或ShapeLink时控制点的边框颜色
 */
twaver.canvas.Network.prototype.setEditPointOutlineColor = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的边框宽度
 * @method twaver.canvas.Network.setEditPointOutlineWidth
 * @param {Number} v 编辑ShapeNode或ShapeLink时控制点的边框宽度
 */
twaver.canvas.Network.prototype.setEditPointOutlineWidth = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的大小
 * @method twaver.canvas.Network.setEditPointSize
 * @param {Number} v 编辑ShapeNode或ShapeLink时控制点的大小
 */
twaver.canvas.Network.prototype.setEditPointSize = function (v) {}

/**
 * 设置和Network绑定的ElementBox网元容器，Network构造时可以设置ElementBox（内部创建一个新的ElementBox），也可以构造完后再设置ElementBox
 * @method twaver.canvas.Network.setElementBox
 * @param {twaver.ElementBox} elementBox 网元容器
 */
twaver.canvas.Network.prototype.setElementBox = function (elementBox) {}

/**
 * 设置网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
 * twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
 *     var clazz = element.getElementUIClass();
 *     if (clazz) {
 *          return new clazz(network, element);
 *     }
 *     return null;
 *  }
 * @method twaver.canvas.Network.setElementUIFunction
 * @param {Function} value 网元视图生成器
 */
twaver.canvas.Network.prototype.setElementUIFunction = function (value) {}

/**
 * 设置是否包含编辑交互处理器
 * @method twaver.canvas.Network.setHasEditInteraction
 * @param {Boolean} value 是否包含编辑交互处理器
 */
twaver.canvas.Network.prototype.setHasEditInteraction = function (value) {}

/**
 * 设置水平滚动条是否可见
 * @method twaver.canvas.Network.setHScrollBarVisible
 * @param {Boolean} v 水平滚动条是否可见
 */
twaver.canvas.Network.prototype.setHScrollBarVisible = function (v) {}

/**
 * 设置交互处理器，交互处理器用于设置Network相应哪些键盘和鼠标事件。
 * @method twaver.canvas.Network.setInteractions
 * @param {twaver.List} interactions 包含交互处理器的集合
 * @example network.setInteractions([
 *     new twaver.network.interaction.SelectInteraction(network),
 *     new twaver.network.interaction.EditInteraction(network),
 *     new twaver.network.interaction.MoveInteraction(network),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.canvas.Network.prototype.setInteractions = function (interactions) {}

/**
 * 设置是否允许用键盘Delete键删除选中网元
 * @method twaver.canvas.Network.setKeyboardRemoveEnabled
 * @param {Boolean} v 是否允许用键盘Delete键删除选中网元
 */
twaver.canvas.Network.prototype.setKeyboardRemoveEnabled = function (v) {}

/**
 * 设置是否允许用键盘Ctrl+A键选择所有网元
 * @method twaver.canvas.Network.setKeyboardSelectEnabled
 * @param {Boolean} v 是否允许用键盘Ctrl+A键选择所有网元
 */
twaver.canvas.Network.prototype.setKeyboardSelectEnabled = function (v) {}

/**
 * 设置延迟移动网元时是否有动画效果
 * @method twaver.canvas.Network.setLazyMoveAnimate
 * @param {Boolean} v 延迟移动网元时是否有动画效果
 */
twaver.canvas.Network.prototype.setLazyMoveAnimate = function (v) {}

/**
 * 设置延迟移动网元时轮廓是否填充
 * @method twaver.canvas.Network.setLazyMoveFill
 * @param {Boolean} v 延迟移动网元时轮廓是否填充
 */
twaver.canvas.Network.prototype.setLazyMoveFill = function (v) {}

/**
 * 设置延迟移动网元时网元的填充色
 * @method twaver.canvas.Network.setLazyMoveFillColor
 * @param {String} v 延迟移动网元时网元的填充色
 */
twaver.canvas.Network.prototype.setLazyMoveFillColor = function (v) {}

/**
 * 设置延迟移动网元时网元的填充色
 * @method twaver.canvas.Network.setLazyMoveOutlineColor
 * @param {String} v 延迟移动网元时网元的填充色
 */
twaver.canvas.Network.prototype.setLazyMoveOutlineColor = function (v) {}

/**
 * 设置延迟移动网元时网元的边框宽度
 * @method twaver.canvas.Network.setLazyMoveOutlineWidth
 * @param {Number} v 延迟移动网元时网元的边框宽度
 */
twaver.canvas.Network.prototype.setLazyMoveOutlineWidth = function (v) {}

/**
 * 设置是否限制网元坐标不能为负
 * @method twaver.canvas.Network.setLimitElementInPositiveLocation
 * @param {Boolean} v 是否限制网元坐标不能为负
 */
twaver.canvas.Network.prototype.setLimitElementInPositiveLocation = function (v) {}

/**
 * 设置是否限制左上角
 * @method twaver.canvas.Network.setLimitViewInCanvas
 * @param {Boolean} v 是否限制左上角
 */
twaver.canvas.Network.prototype.setLimitViewInCanvas = function (v) {}

/**
 * 设置节点是否可以连线的过滤器
 * @method twaver.canvas.Network.setLinkableFunction
 * @param {Function} value 节点是否可以连线的过滤器
 */
twaver.canvas.Network.prototype.setLinkableFunction = function (value) {}

/**
 * 设置是否启用流动Link，默认是false
 * @method twaver.canvas.Network.setLinkFlowEnabled
 * @param {String} value 是否启用流动Link
 */
twaver.canvas.Network.prototype.setLinkFlowEnabled = function (value) {}

/**
 * 设置LINK的流动间隔时间
 * @method twaver.canvas.Network.setLinkFlowInterval
 * @param {String} value Link的流动间隔时间(毫秒)
 */
twaver.canvas.Network.prototype.setLinkFlowInterval = function (value) {}

/**
 * 设置连线路径生成函数function (linkUI, defaultPoints)
 * @method twaver.canvas.Network.setLinkPathFunction
 * @param {Function} value 连线路径生成函数
 */
twaver.canvas.Network.prototype.setLinkPathFunction = function (value) {}

/**
 * 设置交互模式为放大镜模式
 * @method twaver.canvas.Network.setMagnifyInteractions
 */
twaver.canvas.Network.prototype.setMagnifyInteractions = function () {}

/**
 * 设置网元被选择时是否让其可见
 * @method twaver.canvas.Network.setMakeVisibleOnSelected
 * @param {Boolean} v 网元被选择时是否让其可见
 */
twaver.canvas.Network.prototype.setMakeVisibleOnSelected = function (v) {}

/**
 * 设置网元可移动过滤器，用于判断网元是否可以移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
 * @method twaver.canvas.Network.setMovableFunction
 * @param {Function} v 网元可移动过滤器
 * @example network.setMovableFunction(function (element) {
 *     return element.getName() === 'From';
 * });
 */
twaver.canvas.Network.prototype.setMovableFunction = function (v) {}

/**
 * 设置是否正在移动网元
 * @method twaver.canvas.Network.setMovingElement
 * @param {Boolean} v 是否正在移动网元
 */
twaver.canvas.Network.prototype.setMovingElement = function (v) {}

/**
 * 设置交互模式为微软触摸交互模式
 * @method twaver.canvas.Network.setMSTouchInteractions
 */
twaver.canvas.Network.prototype.setMSTouchInteractions = function () {}

/**
 * 设置不是代理的连线是否可见
 * @method twaver.canvas.Network.setNoAgentLinkVisible
 * @param {Boolean} v 不是代理的连线是否可见
 */
twaver.canvas.Network.prototype.setNoAgentLinkVisible = function (v) {}

/**
 * 设置下方内边距
 * @method twaver.canvas.Network.setPaddingBottom
 * @param {Number} v 下方内边距
 */
twaver.canvas.Network.prototype.setPaddingBottom = function (v) {}

/**
 * 设置右边内边距
 * @method twaver.canvas.Network.setPaddingRight
 * @param {Number} v 右边内边距
 */
twaver.canvas.Network.prototype.setPaddingRight = function (v) {}

/**
 * 设置交互模式为手抓图交互模式，包含手抓图交互处理器PanInteraction（处理垂直或水平滚动滚动条）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.canvas.Network.setPanInteractions
 */
twaver.canvas.Network.prototype.setPanInteractions = function () {}

/**
 * 设置是否允许框选网元
 * @method twaver.canvas.Network.setRectSelectEnabled
 * @param {Boolean} v 是否允许框选网元
 */
twaver.canvas.Network.prototype.setRectSelectEnabled = function (v) {}

/**
 * 设置框选网元过滤器
 * @method twaver.canvas.Network.setRectSelectFilter
 * @param {Function} v 框选网元过滤器
 */
twaver.canvas.Network.prototype.setRectSelectFilter = function (v) {}

/**
 * 设置改变网元大小时是否有动画效果
 * @method twaver.canvas.Network.setResizeAnimate
 * @param {Boolean} v 改变网元大小时是否有动画效果
 */
twaver.canvas.Network.prototype.setResizeAnimate = function (v) {}

/**
 * 设置延迟改变网元大小时网元边框的颜色
 * @method twaver.canvas.Network.setResizeLineColor
 * @param {String} v 延迟改变网元大小时网元边框的颜色
 */
twaver.canvas.Network.prototype.setResizeLineColor = function (v) {}

/**
 * 设置延迟改变网元大小时网元边框的宽度
 * @method twaver.canvas.Network.setResizeLineWidth
 * @param {Number} v 延迟改变网元大小时网元边框的宽度
 */
twaver.canvas.Network.prototype.setResizeLineWidth = function (v) {}

/**
 * 设置改变网元大小时控制点的填充色
 * @method twaver.canvas.Network.setResizePointFillColor
 * @param {String} v 改变网元大小时控制点的填充色
 */
twaver.canvas.Network.prototype.setResizePointFillColor = function (v) {}

/**
 * 设置改变网元大小时控制点的边框颜色
 * @method twaver.canvas.Network.setResizePointOutlineColor
 * @param {String} v 改变网元大小时控制点的边框颜色
 */
twaver.canvas.Network.prototype.setResizePointOutlineColor = function (v) {}

/**
 * 设置改变网元大小时控制点的边框宽度
 * @method twaver.canvas.Network.setResizePointOutlineWidth
 * @param {Number} v 改变网元大小时控制点的边框宽度
 */
twaver.canvas.Network.prototype.setResizePointOutlineWidth = function (v) {}

/**
 * 设置更改网元大小的控制点的大小
 * @method twaver.canvas.Network.setResizePointSize
 * @param {Number} v 更改网元大小的控制点的大小
 */
twaver.canvas.Network.prototype.setResizePointSize = function (v) {}

/**
 * 设置网元是否可旋转过滤器
 * @method twaver.canvas.Network.setRotatableFunction
 * @param {Function} value 网元是否可旋转过滤器
 */
twaver.canvas.Network.prototype.setRotatableFunction = function (value) {}

/**
 * 设置旋转控制点的填充色
 * @method twaver.canvas.Network.setRotatePointFillColor
 * @param {String} v 旋转控制点的填充色
 */
twaver.canvas.Network.prototype.setRotatePointFillColor = function (v) {}

/**
 * 设置旋转控制点的偏移量
 * @method twaver.canvas.Network.setRotatePointOffset
 * @param {Number} v 旋转控制点的偏移量
 */
twaver.canvas.Network.prototype.setRotatePointOffset = function (v) {}

/**
 * 设置旋转控制点的边框颜色
 * @method twaver.canvas.Network.setRotatePointOutlineColor
 * @param {String} v 旋转控制点的边框颜色
 */
twaver.canvas.Network.prototype.setRotatePointOutlineColor = function (v) {}

/**
 * 设置旋转控制点的边框宽度
 * @method twaver.canvas.Network.setRotatePointOutlineWidth
 * @param {Number} v 旋转控制点的边框宽度
 */
twaver.canvas.Network.prototype.setRotatePointOutlineWidth = function (v) {}

/**
 * 设置旋转控制点的大小
 * @method twaver.canvas.Network.setRotatePointSize
 * @param {Number} v 旋转控制点的大小
 */
twaver.canvas.Network.prototype.setRotatePointSize = function (v) {}

/**
 * 设置旋转刻度填充色
 * @method twaver.canvas.Network.setRotateScaleFillColor
 * @param {String} v 旋转刻度填充色
 */
twaver.canvas.Network.prototype.setRotateScaleFillColor = function (v) {}

/**
 * 设置旋转刻度文字字体颜色
 * @method twaver.canvas.Network.setRotateScaleFontColor
 * @param {String} v 旋转刻度文字字体颜色
 */
twaver.canvas.Network.prototype.setRotateScaleFontColor = function (v) {}

/**
 * 设置旋转刻度高度
 * @method twaver.canvas.Network.setRotateScaleHeight
 * @param {Number} v 旋转刻度高度
 */
twaver.canvas.Network.prototype.setRotateScaleHeight = function (v) {}

/**
 * 设置旋转刻度宽度
 * @method twaver.canvas.Network.setRotateScaleWidth
 * @param {Number} v 旋转刻度宽度
 */
twaver.canvas.Network.prototype.setRotateScaleWidth = function (v) {}

/**
 * 设置正在旋转的节点
 * @method twaver.canvas.Network.setRotatingElement
 * @param {twaver.Node} v 节点
 */
twaver.canvas.Network.prototype.setRotatingElement = function (v) {}

/**
 * 设置滚动条是否可见
 * @method twaver.canvas.Network.setScrollBarVisible
 * @param {Number} v 滚动条是否可见
 */
twaver.canvas.Network.prototype.setScrollBarVisible = function (v) {}

/**
 * 设置滚动条宽度
 * @method twaver.canvas.Network.setScrollBarWidth
 * @param {Number} v 滚动条宽度
 */
twaver.canvas.Network.prototype.setScrollBarWidth = function (v) {}

/**
 * 设置框选时矩形框的填充色
 * @method twaver.canvas.Network.setSelectFillColor
 * @param {String} v 框选时矩形框的填充色
 */
twaver.canvas.Network.prototype.setSelectFillColor = function (v) {}

/**
 * 设置是否正在框选网元
 * @method twaver.canvas.Network.setSelectingElement
 * @param {Boolean} v 是否正在框选网元
 */
twaver.canvas.Network.prototype.setSelectingElement = function (v) {}

/**
 * 设置选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @method twaver.canvas.Network.setSelectMode
 * @param {String} v 选择模式
 */
twaver.canvas.Network.prototype.setSelectMode = function (v) {}

/**
 * 设置框选时矩形框的边框颜色
 * @method twaver.canvas.Network.setSelectOutlineColor
 * @param {String} v 框选时矩形框的边框颜色
 */
twaver.canvas.Network.prototype.setSelectOutlineColor = function (v) {}

/**
 * 设置框选时矩形框的边框宽度
 * @method twaver.canvas.Network.setSelectOutlineWidth
 * @param {String} v 框选时矩形框的边框宽度
 */
twaver.canvas.Network.prototype.setSelectOutlineWidth = function (v) {}

/**
 * 设置网元被选中后是否置顶
 * @method twaver.canvas.Network.setSendToTopOnSelected
 * @param {Boolean} v 网元被选中后是否置顶
 */
twaver.canvas.Network.prototype.setSendToTopOnSelected = function (v) {}

/**
 * 设置是否显示旋转网元时的刻度
 * @method twaver.canvas.Network.setShowRotateScale
 * @param {Boolean} v 是否显示旋转网元时的刻度
 */
twaver.canvas.Network.prototype.setShowRotateScale = function (v) {}

/**
 * 设置进入下一层子网或返回上一层子网时是否有动画效果
 * @method twaver.canvas.Network.setSubNetworkAnimate
 * @param {Boolean} v 进入下一层子网或返回上一层子网时是否有动画效果
 */
twaver.canvas.Network.prototype.setSubNetworkAnimate = function (v) {}

/**
 * 设置是否让提示信息生效
 * @method twaver.canvas.Network.setToolTipEnabled
 * @param {Boolean} value 是否让提示信息生效
 */
twaver.canvas.Network.prototype.setToolTipEnabled = function (value) {}

/**
 * 设置当前交互模式为触摸模式，只响应触摸事件，包含触摸交互处理器TouchInteraction（处理触摸事件）
 * @method twaver.canvas.Network.setTouchInteractions
 */
twaver.canvas.Network.prototype.setTouchInteractions = function () {}

/**
 * 设置视图偏移量
 * @method twaver.canvas.Network.setViewOffSet
 * @param {Number} xoff x坐标
 * @param {Number} yoff y坐标
 */
twaver.canvas.Network.prototype.setViewOffSet = function (xoff, yoff) {}

/**
 * 设置视图区域
 * @method twaver.canvas.Network.setViewRect
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Number} w 宽度
 * @param {Number} h 高度
 */
twaver.canvas.Network.prototype.setViewRect = function (x, y, w, h) {}

/**
 * 设置网元可见过滤器，用于判断指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
 * @method twaver.canvas.Network.setVisibleFunction
 * @param {Function} value 网元可见过滤器
 * @example network.setVisibleFunction(function (element) {
 *     return !(element instanceof twaver.Link);
 * });
 */
twaver.canvas.Network.prototype.setVisibleFunction = function (value) {}

/**
 * 设置垂直滚动条是否可见
 * @method twaver.canvas.Network.setVScrollBarVisible
 * @param {Boolean} v 垂直滚动条是否可见
 */
twaver.canvas.Network.prototype.setVScrollBarVisible = function (v) {}

/**
 * 从Network生成指定大小的Canvas元素，用于生成缩略图
 * @method twaver.canvas.Network.toCanvas
 * @param {Number} w 要生成的Canvas元素的宽度
 * @param {Number} h 要生成的Canvas元素的高度
 * @param {HTMLCanvasElement} [c] 目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素
 * @return {HTMLCanvasElement} 返回Canvas元素
 */
twaver.canvas.Network.prototype.toCanvas = function (w, h, c) {}

/**
 * 从Network的指定区域生成指定比例的Canvas元素，用于生成缩略图
 * @method twaver.canvas.Network.toCanvasByRegion
 * @param {Object} rect 包含x、y、width和height属性的Object对象
 * @param {Number} scale 缩放比例
 * @param {HTMLCanvasElement} [c] 目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素
 * @return {HTMLCanvasElement} 返回Canvas元素
 */
twaver.canvas.Network.prototype.toCanvasByRegion = function (rect, scale, c) {}

/**
 * 返回上一层子网，可以设置是否使用动画效果，还可以指定返回结束后执行的动作
 * @method twaver.canvas.Network.upSubNetwork
 * @param {Boolean} [animate] 是否使用动画效果，可选，默认为false
 * @param {Function} [finishFunction] 返回上一层子网结束后执行的回调函数，可选，默认为null
 */
twaver.canvas.Network.prototype.upSubNetwork = function (animate, finishFunction) {}

/**
 * 计算画布大小
 * @method twaver.canvas.Network.validateCanvasSize
 */
twaver.canvas.Network.prototype.validateCanvasSize = function () {}


/**
 * 仪表盘图，它是以表盘的形式来展示数据模型中的数据,是处于TWaver的MVC框架中的V(视图)层。
 * 表盘图支持3D的显示效果，仪表盘图主要分为三部分的设置：表盘的设置，表盘轴心的设置以及指针的设置
 * 
 * @class twaver.charts.DialChart
 * @constructor
 * @extends twaver.charts.ChartBase
 * @param {twaver.DataBox} [dataBox] 绑定的数据模型
 * @return {twaver.charts.DialChart} 仪表盘对象本身
 */
twaver.charts.DialChart = function (dataBox) {}

twaver.charts.DialChart.prototype = new twaver.charts.ChartBase()

/**
 * 对表盘的刻度值进行格式化，默认是保留两位小数。用户可以重写此方法进行自己的格式化
 * @method twaver.charts.DialChart.formatScaleText
 * @param {Number} value 格式化的数据对象
 * @return {Number} 格式化后的值
 */
twaver.charts.DialChart.prototype.formatScaleText = function (value) {}

/**
 * 获取表盘的填充颜色，默认为twaver.Defaults.DIALCHART_COLOR_RANGE_FILL_COLOR。
 * 当ColorRangeList没有赋值时，这个参数才生效
 * @method twaver.charts.DialChart.getColorRangeFillColor
 * @return {String} 表盘的填充颜色
 */
twaver.charts.DialChart.prototype.getColorRangeFillColor = function () {}

/**
 * 获取表盘的填充颜色列表，如果设置了仪表盘的填充颜色列表，TWaver会使用这几个颜色值平分显示在表盘上
 * @method twaver.charts.DialChart.getColorRangeList
 * @return {twaver.List} 表盘的填充颜色列表
 */
twaver.charts.DialChart.prototype.getColorRangeList = function () {}

/**
 * 获取表盘图结束时的角度，默认为 twaver.Defaults.DIALCHART_END_ANGLE
 * @method twaver.charts.DialChart.getEndAngle
 * @return {Number} 表盘图结束时的角度
 */
twaver.charts.DialChart.prototype.getEndAngle = function () {}

/**
 * 获取表盘内圈深色部分的半径值。表盘的内圈深色部分用户绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_INNER_DARKER_RADIUS
 * @method twaver.charts.DialChart.getInnerDarkerRadius
 * @return {Number} 表盘内圈深色部分的半径值
 */
twaver.charts.DialChart.prototype.getInnerDarkerRadius = function () {}

/**
 * 获取表盘内圈的半径值，取值范围为0-1，默认为 twaver.Defaults.DIALCHART_INNER_RADIUS
 * @method twaver.charts.DialChart.getInnerRadius
 * @return {Number} 表盘内圈的半径值
 */
twaver.charts.DialChart.prototype.getInnerRadius = function () {}

/**
 * 获取表盘上限制的最小刻度值，默认为 twaver.Defaults.DIALCHART_LOWER_LIMIT
 * @method twaver.charts.DialChart.getLowerLimit
 * @return {Number} 表盘上限制的最小刻度值
 */
twaver.charts.DialChart.prototype.getLowerLimit = function () {}

/**
 * 获取表盘上主要的刻度值数量，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_COUNT
 * @method twaver.charts.DialChart.getMajorScaleCount
 * @return {Number} 表盘上主要的刻度值数量
 */
twaver.charts.DialChart.prototype.getMajorScaleCount = function () {}

/**
 * 获取表盘上主要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_COLOR
 * @method twaver.charts.DialChart.getMajorScaleLineColor
 * @return {String} 表盘上主要的刻度线的颜色
 */
twaver.charts.DialChart.prototype.getMajorScaleLineColor = function () {}

/**
 * 获取表盘上主要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_LENGTH
 * @method twaver.charts.DialChart.getMajorScaleLineLength
 * @return {Number} 表盘上主要的刻度线的长度
 */
twaver.charts.DialChart.prototype.getMajorScaleLineLength = function () {}

/**
 * 获取表盘上主要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_WIDTH
 * @method twaver.charts.DialChart.getMajorScaleLineWidth
 * @return {Number} 表盘上主要的刻度线的宽度
 */
twaver.charts.DialChart.prototype.getMajorScaleLineWidth = function () {}

/**
 * 获取表盘上次要的刻度值数量，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_COUNT
 * @method twaver.charts.DialChart.getMinorScaleCount
 * @return {Number} 表盘上次要的刻度值数量
 */
twaver.charts.DialChart.prototype.getMinorScaleCount = function () {}

/**
 * 获取表盘上次要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_COLOR
 * @method twaver.charts.DialChart.getMinorScaleLineColor
 * @return {String} 表盘上次要的刻度线的颜色
 */
twaver.charts.DialChart.prototype.getMinorScaleLineColor = function () {}

/**
 * 获取表盘上次要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_LENGTH
 * @method twaver.charts.DialChart.getMinorScaleLineLength
 * @return {Number} 表盘上次要的刻度线的长度
 */
twaver.charts.DialChart.prototype.getMinorScaleLineLength = function () {}

/**
 * 获取表盘上次要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_WIDTH
 * @method twaver.charts.DialChart.getMinorScaleLineWidth
 * @return {Number} 表盘上次要的刻度线的宽度
 */
twaver.charts.DialChart.prototype.getMinorScaleLineWidth = function () {}

/**
 * 获取表盘外圈浅色部分的半径值。表盘的外圈浅色部分用于绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_OUTER_BRIGHTER_RADIUS
 * @method twaver.charts.DialChart.getOuterBrighterRadius
 * @return {Number} 表盘外圈浅色部分的半径值
 */
twaver.charts.DialChart.prototype.getOuterBrighterRadius = function () {}

/**
 * 获取表盘外边框的颜色，默认为 twaver.Defaults.DIALCHART_OUTLINE_COLOR
 * @method twaver.charts.DialChart.getOutlineColor
 * @return {String} 表盘外边框的颜色
 */
twaver.charts.DialChart.prototype.getOutlineColor = function () {}

/**
 * 获取表盘外边框的宽度，默认为 twaver.Defaults.DIALCHART_OUTLINE_WIDTH
 * @method twaver.charts.DialChart.getOutlineWidth
 * @return {Number} 表盘外边框的宽度
 */
twaver.charts.DialChart.prototype.getOutlineWidth = function () {}

/**
 * 获取仪表盘图上中心轴的填充颜色，默认为twaver.Defaults.DIALCHART_PIVOT_FILL_COLOR
 * @method twaver.charts.DialChart.getPivotFillColor
 * @return {String} 中心轴的填充颜色
 */
twaver.charts.DialChart.prototype.getPivotFillColor = function () {}

/**
 * 获取仪表盘图上中心轴的渐变类型。默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT。
 * 渐变类型的可选值为：
 * 'linear.southwest'：线性.南西
 * 'linear.southeast'：线性.南东
 * 'linear.northwest'：线性.北西
 * 'linear.northeast'：线性.北东
 * 'linear.north'：线性.北
 * 'linear.south'：线性.南
 * 'linear.west'：线性.西
 * 'linear.east'：线性.东
 * 'radial.center'：放射.中
 * 'radial.southwest'：放射.南西
 * 'radial.southeast'：放射.南东
 * 'radial.northwest'：放射.北西
 * 'radial.northeast'：放射.北东
 * 'radial.north'：放射.北
 * 'radial.south'：放射.南
 * 'radial.west'：放射.西
 * 'radial.east'：放射.东
 * 'spread.horizontal':扩展.水平
 * 'spread.vertical':扩展.垂直
 * 'spread.diagonal':扩展.对角线
 * 'spread.antidiagonal':扩展.反对角线
 * 'spread.north':扩展.北
 * 'spread.south':扩展.南
 * 'spread.west':扩展.西
 * 'spread.east':扩展.东
 * 
 * @method twaver.charts.DialChart.getPivotGradient
 * @return {String} 渐变类型
 */
twaver.charts.DialChart.prototype.getPivotGradient = function () {}

/**
 * 获取仪表盘图上中心轴的渐变颜色，默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT_COLOR
 * @method twaver.charts.DialChart.getPivotGradientColor
 * @return {String} 中心轴的渐变颜色
 */
twaver.charts.DialChart.prototype.getPivotGradientColor = function () {}

/**
 * 获取仪表盘图上中心轴的外边框颜色，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_COLOR
 * @method twaver.charts.DialChart.getPivotOutlineColor
 * @return {String} 中心轴的外边框颜色
 */
twaver.charts.DialChart.prototype.getPivotOutlineColor = function () {}

/**
 * 获取仪表盘图上中心轴的外边框宽度，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_WIDTH
 * @method twaver.charts.DialChart.getPivotOutlineWidth
 * @return {Number} 中心轴的外边框宽度
 */
twaver.charts.DialChart.prototype.getPivotOutlineWidth = function () {}

/**
 * 获取仪表盘图上中心轴的半径值，默认为twaver.Defaults.DIALCHART_PIVOT_RADIUS
 * @method twaver.charts.DialChart.getPivotRadius
 * @return {Number} 中心轴的半径值
 */
twaver.charts.DialChart.prototype.getPivotRadius = function () {}

/**
 * 获取表盘上刻度值的颜色，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_COLOR
 * @method twaver.charts.DialChart.getScaleTextColor
 * @return {String} 表盘上刻度值的颜色
 */
twaver.charts.DialChart.prototype.getScaleTextColor = function () {}

/**
 * 获取表盘上刻度值的字体，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_FONT
 * @method twaver.charts.DialChart.getScaleTextFont
 * @return {String} 表盘上刻度值的字体
 */
twaver.charts.DialChart.prototype.getScaleTextFont = function () {}

/**
 * 取表盘上刻度值的显示位置。TWaver内部会调用此方法，用户不需调用，但可以重写此方法增加自己的逻辑
 * @method twaver.charts.DialChart.getScaleTextPosition
 * @param {Number} angle 刻度值显示的角度
 * @param {Number} cx 刻度值显示区域的x坐标值
 * @param {Number} cy 刻度值显示区域的y坐标值
 * @param {Number} width 刻度值显示区域的宽度
 * @param {Number} height 刻度值显示区域的高度
 * @return {Object} 返回刻度值的位置对象，它是一个包含x，y坐标的对象
 */
twaver.charts.DialChart.prototype.getScaleTextPosition = function (angle, cx, cy, width, height) {}

/**
 * 获取选中网元时的阴影的颜色，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_COLOR
 * @method twaver.charts.DialChart.getSelectShadowColor
 * @return {String} 选中网元时的阴影的颜色
 */
twaver.charts.DialChart.prototype.getSelectShadowColor = function () {}

/**
 * 获取选中网元时的阴影的偏移值，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_OFFSET
 * @method twaver.charts.DialChart.getSelectShadowOffset
 * @return {Number} 选中网元时的阴影的偏移值
 */
twaver.charts.DialChart.prototype.getSelectShadowOffset = function () {}

/**
 * 获取表盘图开始时的角度，默认为 twaver.Defaults.DIALCHART_START_ANGLE
 * @method twaver.charts.DialChart.getStartAngle
 * @return {Number} 表盘图开始时的角度
 */
twaver.charts.DialChart.prototype.getStartAngle = function () {}

/**
 * 获取表盘上限制的最大刻度值
 * @method twaver.charts.DialChart.getUpperLimit
 * @return {Number} 表盘上限制的最大刻度值
 */
twaver.charts.DialChart.prototype.getUpperLimit = function () {}

/**
 * 获取仪表盘图上网元的值在指针上显示的位置比例，即在指针上的百分比，默认为twaver.Defaults.DIALCHART_VALUE_POSITION
 * @method twaver.charts.DialChart.getValuePosition
 * @return {Number}
 */
twaver.charts.DialChart.prototype.getValuePosition = function () {}

/**
 * 判断仪表盘图上中心轴是否需要填充，默认为twaver.Defaults.DIALCHART_PIVOT_FILL
 * @method twaver.charts.DialChart.isPivotFill
 * @return {Boolean} true为需要填充，否则为false
 */
twaver.charts.DialChart.prototype.isPivotFill = function () {}

/**
 * 判断仪表盘度上的刻度值是否显示在内部，默认为twaver.Defaults.DIALCHART_SCALE_INSIDE
 * @method twaver.charts.DialChart.isScaleInside
 * @return {Boolean} true为显示在内部，否则为false
 */
twaver.charts.DialChart.prototype.isScaleInside = function () {}

/**
 * 获取表盘上限制的最小刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_LOWER_LIMIT_TEXT_VISIBLE
 * @method twaver.charts.DialChart.isScaleLowerLimitTextVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.DialChart.prototype.isScaleLowerLimitTextVisible = function () {}

/**
 * 判断仪表盘图上的刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_VISIBLE
 * @method twaver.charts.DialChart.isScaleTextVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.DialChart.prototype.isScaleTextVisible = function () {}

/**
 * 获取表盘上限制的最大刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_UPPER_LIMIT_TEXT_VISIBLE
 * @method twaver.charts.DialChart.isScaleUpperLimitTextVisible
 * @return {Boolean} true为可见 ，否则为false
 */
twaver.charts.DialChart.prototype.isScaleUpperLimitTextVisible = function () {}

/**
 * 设置表盘的填充颜色，默认为twaver.Defaults.DIALCHART_COLOR_RANGE_FILL_COLOR。
 * 当ColorRangeList没有赋值时，这个参数才生效
 * @method twaver.charts.DialChart.setColorRangeFillColor
 * @param {String} v 表盘的填充颜色
 */
twaver.charts.DialChart.prototype.setColorRangeFillColor = function (v) {}

/**
 * 设置表盘的填充颜色列表，如果设置了仪表盘的填充颜色列表，TWaver会使用这几个颜色值平分显示在表盘上
 * @method twaver.charts.DialChart.setColorRangeList
 * @param {twaver.List} v 表盘的填充颜色列表
 */
twaver.charts.DialChart.prototype.setColorRangeList = function (v) {}

/**
 * 设置表盘图结束时的角度，默认为 twaver.Defaults.DIALCHART_END_ANGLE
 * @method twaver.charts.DialChart.setEndAngle
 * @param {Number} v 表盘图结束时的角度
 */
twaver.charts.DialChart.prototype.setEndAngle = function (v) {}

/**
 * 设置表盘内圈深色部分的半径值。表盘的内圈深色部分用户绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_INNER_DARKER_RADIUS
 * @method twaver.charts.DialChart.setInnerDarkerRadius
 * @param {Number} v 表盘内圈深色部分的半径值
 */
twaver.charts.DialChart.prototype.setInnerDarkerRadius = function (v) {}

/**
 * 设置表盘内圈的半径值，取值范围为0-1，默认为 twaver.Defaults.DIALCHART_INNER_RADIUS
 * @method twaver.charts.DialChart.setInnerRadius
 * @param {Number} v 表盘内圈的半径值
 */
twaver.charts.DialChart.prototype.setInnerRadius = function (v) {}

/**
 * 设置表盘上限制的最小刻度值，默认为 twaver.Defaults.DIALCHART_LOWER_LIMIT
 * @method twaver.charts.DialChart.setLowerLimit
 * @param {Number} v 表盘上限制的最小刻度值
 */
twaver.charts.DialChart.prototype.setLowerLimit = function (v) {}

/**
 * 设置表盘上主要的刻度值数量，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_COUNT
 * @method twaver.charts.DialChart.setMajorScaleCount
 * @param {Number} v 表盘上主要的刻度值数量
 */
twaver.charts.DialChart.prototype.setMajorScaleCount = function (v) {}

/**
 * 获取表盘上主要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_COLOR
 * @method twaver.charts.DialChart.setMajorScaleLineColor
 * @param {String} v 表盘上主要的刻度线的颜色
 */
twaver.charts.DialChart.prototype.setMajorScaleLineColor = function (v) {}

/**
 * 设置表盘上主要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_LENGTH
 * @method twaver.charts.DialChart.setMajorScaleLineLength
 * @param {Number} v 表盘上主要的刻度线的长度
 */
twaver.charts.DialChart.prototype.setMajorScaleLineLength = function (v) {}

/**
 * 设置表盘上主要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MAJOR_SCALE_LINE_WIDTH
 * @method twaver.charts.DialChart.setMajorScaleLineWidth
 * @param {Number} v 表盘上主要的刻度线的宽度
 */
twaver.charts.DialChart.prototype.setMajorScaleLineWidth = function (v) {}

/**
 * 设置表盘上次要的刻度值数量，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_COUNT
 * @method twaver.charts.DialChart.setMinorScaleCount
 * @param {Number} v 表盘上次要的刻度值数量
 */
twaver.charts.DialChart.prototype.setMinorScaleCount = function (v) {}

/**
 * 设置表盘上次要的刻度线的颜色，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_COLOR
 * @method twaver.charts.DialChart.setMinorScaleLineColor
 * @param {String} v 表盘上次要的刻度线的颜色
 */
twaver.charts.DialChart.prototype.setMinorScaleLineColor = function (v) {}

/**
 * 设置表盘上次要的刻度线的长度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_LENGTH
 * @method twaver.charts.DialChart.setMinorScaleLineLength
 * @param {Number} v 表盘上次要的刻度线的长度
 */
twaver.charts.DialChart.prototype.setMinorScaleLineLength = function (v) {}

/**
 * 设置表盘上次要的刻度线的宽度，默认为twaver.Defaults.DIALCHART_MINOR_SCALE_LINE_WIDTH
 * @method twaver.charts.DialChart.setMinorScaleLineWidth
 * @param {Number} v 表盘上次要的刻度线的宽度
 */
twaver.charts.DialChart.prototype.setMinorScaleLineWidth = function (v) {}

/**
 * 设置表盘外圈浅色部分的半径值。表盘的外圈浅色部分用于绘制表盘的3D效果，默认为twaver.Defaults.DIALCHART_OUTER_BRIGHTER_RADIUS
 * @method twaver.charts.DialChart.setOuterBrighterRadius
 * @param {Number} v 表盘外圈浅色部分的半径值
 */
twaver.charts.DialChart.prototype.setOuterBrighterRadius = function (v) {}

/**
 * 设置表盘外边框的颜色，默认为 twaver.Defaults.DIALCHART_OUTLINE_COLOR
 * @method twaver.charts.DialChart.setOutlineColor
 * @param {String} v 表盘外边框的颜色
 */
twaver.charts.DialChart.prototype.setOutlineColor = function (v) {}

/**
 * 设置表盘外边框的宽度，默认为 twaver.Defaults.DIALCHART_OUTLINE_WIDTH
 * @method twaver.charts.DialChart.setOutlineWidth
 * @param {Number} v 表盘外边框的宽度
 */
twaver.charts.DialChart.prototype.setOutlineWidth = function (v) {}

/**
 * 设置仪表盘图上中心轴是否需要填充，默认为twaver.Defaults.DIALCHART_PIVOT_FILL
 * @method twaver.charts.DialChart.setPivotFill
 * @param {Boolean} v true为需要填充，否则为false
 */
twaver.charts.DialChart.prototype.setPivotFill = function (v) {}

/**
 * 设置仪表盘图上中心轴的填充颜色，默认为twaver.Defaults.DIALCHART_PIVOT_FILL_COLOR
 * @method twaver.charts.DialChart.setPivotFillColor
 * @param {String} v 仪表盘图上中心轴的填充颜色
 */
twaver.charts.DialChart.prototype.setPivotFillColor = function (v) {}

/**
 * 设置仪表盘图上中心轴的渐变类型，默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT。
 * 渐变类型的可选值为：
 * 'linear.southwest'：线性.南西
 * 'linear.southeast'：线性.南东
 * 'linear.northwest'：线性.北西
 * 'linear.northeast'：线性.北东
 * 'linear.north'：线性.北
 * 'linear.south'：线性.南
 * 'linear.west'：线性.西
 * 'linear.east'：线性.东
 * 'radial.center'：放射.中
 * 'radial.southwest'：放射.南西
 * 'radial.southeast'：放射.南东
 * 'radial.northwest'：放射.北西
 * 'radial.northeast'：放射.北东
 * 'radial.north'：放射.北
 * 'radial.south'：放射.南
 * 'radial.west'：放射.西
 * 'radial.east'：放射.东
 * 'spread.horizontal':扩展.水平
 * 'spread.vertical':扩展.垂直
 * 'spread.diagonal':扩展.对角线
 * 'spread.antidiagonal':扩展.反对角线
 * 'spread.north':扩展.北
 * 'spread.south':扩展.南
 * 'spread.west':扩展.西
 * 'spread.east':扩展.东
 * 
 * @method twaver.charts.DialChart.setPivotGradient
 * @param {String} v 渐变类型
 */
twaver.charts.DialChart.prototype.setPivotGradient = function (v) {}

/**
 * 设置仪表盘图上中心轴的渐变颜色，默认为twaver.Defaults.DIALCHART_PIVOT_GRADIENT_COLOR
 * @method twaver.charts.DialChart.setPivotGradientColor
 * @param {String} v 中心轴的渐变颜色
 */
twaver.charts.DialChart.prototype.setPivotGradientColor = function (v) {}

/**
 * 获取仪表盘图上中心轴的外边框颜色，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_COLOR
 * @method twaver.charts.DialChart.setPivotOutlineColor
 * @param {String} v 中心轴的外边框颜色
 */
twaver.charts.DialChart.prototype.setPivotOutlineColor = function (v) {}

/**
 * 设置仪表盘图上中心轴的外边框宽度，默认为twaver.Defaults.DIALCHART_PIVOT_OUTLINE_WIDTH
 * @method twaver.charts.DialChart.setPivotOutlineWidth
 * @param {Number} v 仪表盘图上中心轴的外边框宽度
 */
twaver.charts.DialChart.prototype.setPivotOutlineWidth = function (v) {}

/**
 * 设置仪表盘图上中心轴的半径值，默认为twaver.Defaults.DIALCHART_PIVOT_RADIUS
 * @method twaver.charts.DialChart.setPivotRadius
 * @param {Number} v 仪表盘图上中心轴的半径值
 */
twaver.charts.DialChart.prototype.setPivotRadius = function (v) {}

/**
 * 设置仪表盘度上的刻度值是否显示在内部，默认为twaver.Defaults.DIALCHART_SCALE_INSIDE
 * @method twaver.charts.DialChart.setScaleInside
 * @param {Boolean} v true为显示在内部，否则为false
 */
twaver.charts.DialChart.prototype.setScaleInside = function (v) {}

/**
 * 设置表盘上限制的最小刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_LOWER_LIMIT_TEXT_VISIBLE
 * @method twaver.charts.DialChart.setScaleLowerLimitTextVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.DialChart.prototype.setScaleLowerLimitTextVisible = function (v) {}

/**
 * 设置表盘上刻度值的颜色，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_COLOR
 * @method twaver.charts.DialChart.setScaleTextColor
 * @param {String} v 表盘上刻度值的颜色
 */
twaver.charts.DialChart.prototype.setScaleTextColor = function (v) {}

/**
 * 设置表盘上刻度值的字体，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_FONT
 * @method twaver.charts.DialChart.setScaleTextFont
 * @param {String} v 表盘上刻度值的字体
 */
twaver.charts.DialChart.prototype.setScaleTextFont = function (v) {}

/**
 * 设置仪表盘图上的刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_TEXT_VISIBLE
 * @method twaver.charts.DialChart.setScaleTextVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.DialChart.prototype.setScaleTextVisible = function (v) {}

/**
 * 设置表盘上限制的最大刻度值是否可见，默认为twaver.Defaults.DIALCHART_SCALE_UPPER_LIMIT_TEXT_VISIBLE
 * @method twaver.charts.DialChart.setScaleUpperLimitTextVisible
 * @param {Boolean} v true为可见 ，否则为false
 */
twaver.charts.DialChart.prototype.setScaleUpperLimitTextVisible = function (v) {}

/**
 * 设置选中网元时的阴影的颜色，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_COLOR
 * @method twaver.charts.DialChart.setSelectShadowColor
 * @param {String} v 选中网元时的阴影的颜色
 */
twaver.charts.DialChart.prototype.setSelectShadowColor = function (v) {}

/**
 * 设置选中网元时的阴影的偏移值，默认为twaver.Defaults.DIALCHART_SELECT_SHADOW_OFFSET
 * @method twaver.charts.DialChart.setSelectShadowOffset
 * @param {Number} v 选中网元时的阴影的偏移值
 */
twaver.charts.DialChart.prototype.setSelectShadowOffset = function (v) {}

/**
 * 设置表盘图开始时的角度，默认为 twaver.Defaults.DIALCHART_START_ANGLE
 * @method twaver.charts.DialChart.setStartAngle
 * @param {Number} v 表盘图开始时的角度
 */
twaver.charts.DialChart.prototype.setStartAngle = function (v) {}

/**
 * 设置表盘上限制的最大刻度值，默认为twaver.Defaults.DIALCHART_UPPER_LIMIT
 * @method twaver.charts.DialChart.setUpperLimit
 * @param {Number} v 表盘上限制的最大刻度值
 */
twaver.charts.DialChart.prototype.setUpperLimit = function (v) {}

/**
 * 设置仪表盘图上网元的值在指针上显示的位置比例，即在指针上的百分比，默认为twaver.Defaults.DIALCHART_VALUE_POSITION
 * @method twaver.charts.DialChart.setValuePosition
 * @param {Number} v 
 */
twaver.charts.DialChart.prototype.setValuePosition = function (v) {}


/**
 * 饼图，它是以图表的形式来展示数据模型中的数据,是处于TWaver的MVC框架中的V(视图)层。
 * 饼图支持多种显示的类型，比如圆形、椭圆形、环形、线形、椭圆环形等。
 * 
 * @class twaver.charts.PieChart
 * @constructor
 * @extends twaver.charts.ChartBase
 * @param {String} [dataBox] 
 * @return {twaver.charts.PieChart}
 */
twaver.charts.PieChart = function (dataBox) {}

twaver.charts.PieChart.prototype = new twaver.charts.ChartBase()

/**
 * 获取环形饼图内圈的百分比值，取值范围0-1，默认值为twaver.Defaults.PIECHART_DONUT_RATE。当饼图的类型为donut或ovalDonut时，这个参数才生效。
 * @method twaver.charts.PieChart.getDonutRate
 * @return {Number} 环形饼图内圈的百分比值
 */
twaver.charts.PieChart.prototype.getDonutRate = function () {}

/**
 * 获取线形饼图显示的百分比值，取值范围在0-1之间，默认值为twaver.Defaults.PIECHART_LINE_RATE。当饼图的类型为line时，这个参数才生效。
 * 
 * 
 * @method twaver.charts.PieChart.getLineRate
 * @return {Number} 线形饼图显示的百分比值
 */
twaver.charts.PieChart.prototype.getLineRate = function () {}

/**
 * 获取饼图上选择网元时网元的偏移值，默认为twaver.Defaults.PIECHART_SELECT_OFFSET
 * @method twaver.charts.PieChart.getSelectOffset
 * @return {Number} 选择网元时网元的偏移值
 */
twaver.charts.PieChart.prototype.getSelectOffset = function () {}

/**
 * 设置饼图阴影的颜色，默认值为twaver.Defaults.PIECHART_SHADOW_COLOR
 * @method twaver.charts.PieChart.getShadowColor
 * @return {String} 饼图阴影的颜色
 */
twaver.charts.PieChart.prototype.getShadowColor = function () {}

/**
 * 设置饼图阴影的偏移值，默认值为twaver.Defaults.PIECHART_SHADOW_OFFSET
 * @method twaver.charts.PieChart.getShadowOffset
 * @return {Number} 饼图阴影的偏移值
 */
twaver.charts.PieChart.prototype.getShadowOffset = function () {}

/**
 * 获取饼图上起始值显示的角度，取值范围为0-3.141592653589793，默认值为twaver.Defaults.PIECHART_START_ANGLE
 * @method twaver.charts.PieChart.getStartAngle
 * @return {Number}
 */
twaver.charts.PieChart.prototype.getStartAngle = function () {}

/**
 * 获取饼图上所有显示的网元值的总和
 * @method twaver.charts.PieChart.getSum
 * @return {Number} 显示的网元值的总和
 */
twaver.charts.PieChart.prototype.getSum = function () {}

/**
 * 获取饼图的类型，默认为twaver.Defaults.PIECHART_TYPE。类型的可选值有：
 * 'oval'：椭圆形
 * 'circle'：圆形
 * 'line'：直线型
 * 'donut'：环线
 * 'ovalDonut'：椭圆环型
 * @method twaver.charts.PieChart.getType
 * @return {String} 饼图的类型
 */
twaver.charts.PieChart.prototype.getType = function () {}

/**
 * 获取网元的值到中心的距离与饼图半径的位置百分比，默认为twaver.Defaults.PIECHART_VALUE_POSITION
 * @method twaver.charts.PieChart.getValuePosition
 * @return {Number} 网元的值到中心的距离与饼图半径的位置百分比
 */
twaver.charts.PieChart.prototype.getValuePosition = function () {}

/**
 * 设置环形饼图内圈的百分比值，取值范围0-1，默认值为twaver.Defaults.PIECHART_DONUT_RATE。当饼图的类型为donut或ovalDonut时，这个参数才生效。
 * @method twaver.charts.PieChart.setDonutRate
 * @param {Number} v 环形饼图内圈的百分比值
 */
twaver.charts.PieChart.prototype.setDonutRate = function (v) {}

/**
 * 设置线形饼图显示的百分比值，取值范围在0-1之间，默认值为twaver.Defaults.PIECHART_LINE_RATE。当饼图的类型为line时，这个参数才生效。
 * @method twaver.charts.PieChart.setLineRate
 * @param {Number} v 线形饼图显示的百分比值
 */
twaver.charts.PieChart.prototype.setLineRate = function (v) {}

/**
 * 设置饼图上选择网元时网元的偏移值，默认为twaver.Defaults.PIECHART_SELECT_OFFSET
 * @method twaver.charts.PieChart.setSelectOffset
 * @param {Number} v 饼图上选择网元时网元的偏移值
 */
twaver.charts.PieChart.prototype.setSelectOffset = function (v) {}

/**
 * 获取当选中饼图时其阴影的颜色，默认值为twaver.Defaults.PIECHART_SHADOW_COLOR
 * @method twaver.charts.PieChart.setShadowColor
 * @param {String} v 当选中饼图时其阴影的颜色
 */
twaver.charts.PieChart.prototype.setShadowColor = function (v) {}

/**
 * 获取选中饼图时其阴影的偏移值，默认值为twaver.Defaults.PIECHART_SHADOW_OFFSET
 * @method twaver.charts.PieChart.setShadowOffset
 * @param {Number} v 选中饼图时其阴影的偏移值
 */
twaver.charts.PieChart.prototype.setShadowOffset = function (v) {}

/**
 * 设置饼图上起始值显示的角度，取值范围为0-3.141592653589793，默认值为twaver.Defaults.PIECHART_START_ANGLE
 * @method twaver.charts.PieChart.setStartAngle
 * @param {Number} v 
 */
twaver.charts.PieChart.prototype.setStartAngle = function (v) {}

/**
 * 设置饼图的类型，默认为twaver.Defaults.PIECHART_TYPE。类型的可选值有：
 * 'oval'：椭圆形
 * 'circle'：圆形
 * 'line'：线形
 * 'donut'：环形
 * 'ovalDonut'：椭圆环形
 * @method twaver.charts.PieChart.setType
 * @param {String} v 饼图的类型
 */
twaver.charts.PieChart.prototype.setType = function (v) {}

/**
 * 设置饼图上网元的值显示的位置百分比，默认为twaver.Defaults.PIECHART_VALUE_POSITION
 * @method twaver.charts.PieChart.setValuePosition
 * @param {Number} v 网元的值显示的位置百分比
 */
twaver.charts.PieChart.prototype.setValuePosition = function (v) {}


/**
 * 雷达图，也称为螂蛛网图或戴布拉图。它是一个以多个坐标表示网元上'chart.values'值的图。它是处于TWaver的MVC框架中的V(视图)层。
 * 雷达图通常是用来描述多个实体之间在不同坐标集上的比较。雷达图可以很清晰的显示同一个实体上几个不同因素的值，也可以呈现多个不同实体在同一个坐标上值的比较
 * 
 * 
 * @class twaver.charts.RadarChart
 * @constructor
 * @extends twaver.charts.ChartBase
 * @param {twaver.DataBox} [dataBox] 绑定的数据模型
 * @return {twaver.charts.RadarChart} 雷达图对象本身
 */
twaver.charts.RadarChart = function (dataBox) {}

twaver.charts.RadarChart.prototype = new twaver.charts.ChartBase()

/**
 * 格式化雷达图上刻度数据显示的格式，默认是保留两位小数
 * @method twaver.charts.RadarChart.formatScaleText
 * @param {Number} value 雷达图上的刻度值
 * @param {String} axisIndex 雷达图上坐标轴的次序
 * @return {Number} 格式化后的数据
 */
twaver.charts.RadarChart.prototype.formatScaleText = function (value, axisIndex) {}

/**
 * 获取指定数据在雷达图上显示的瞄点的形状，默认为圆形。TWaver中瞄点的形状支持：
 * 'rectangle'：矩形，
 * 'oval'：椭圆形，
 * 'roundrect'：圆角矩形，
 * 'star'：星形，
 * 'triangle'：三角形，
 * 'circle'：圆形，
 * 'hexagon'：六角形，
 * 'pentagon'：五角形，
 * 'diamond'：菱形
 * @method twaver.charts.RadarChart.getAnchorShape
 * @param {twaver.Data} data 指定的数据对象
 * @return {String} 瞄点显示的形状
 */
twaver.charts.RadarChart.prototype.getAnchorShape = function (data) {}

/**
 * 获取指定数据在雷达图上显示的瞄点的大小。默认为6
 * @method twaver.charts.RadarChart.getAnchorSize
 * @param {twaver.Data} data 指定的数据对象
 * @return {String} 瞄点的大小
 */
twaver.charts.RadarChart.prototype.getAnchorSize = function (data) {}

/**
 * 获取网元在雷达图上显示区域的透明度，默认为twaver.Defaults.RADARCHART_AREA_FILL_ALPHA
 * @method twaver.charts.RadarChart.getAreaFillAlpha
 * @return {Number} 显示区域的透明度，取值范围0-1
 */
twaver.charts.RadarChart.prototype.getAreaFillAlpha = function () {}

/**
 * 获取当选择网元时，网元在雷达图上显示区域的透明度，默认为
 * twaver.Defaults.RADARCHART_AREA_SELECT_FILL_ALPHA
 * @method twaver.charts.RadarChart.getAreaSelectFillAlpha
 * @return {Number} 透明度值的取值范围0-1
 */
twaver.charts.RadarChart.prototype.getAreaSelectFillAlpha = function () {}

/**
 * 获取雷达图上坐标轴的数量
 * @method twaver.charts.RadarChart.getAxisCount
 * @return {Number} 雷达图上坐标轴的数量
 */
twaver.charts.RadarChart.prototype.getAxisCount = function () {}

/**
 * 获取雷达图上坐标轴的颜色，默认为twaver.Defaults.RADARCHART_AXIS_LINE_COLOR
 * @method twaver.charts.RadarChart.getAxisLineColor
 * @return {String} 雷达图上坐标轴的颜色
 */
twaver.charts.RadarChart.prototype.getAxisLineColor = function () {}

/**
 * 获取雷达图上坐标轴的宽度，默认为twaver.Defaults.RADARCHART_AXIS_LINE_WIDTH
 * @method twaver.charts.RadarChart.getAxisLineWidth
 * @return {Number} 雷达图上坐标轴的宽度
 */
twaver.charts.RadarChart.prototype.getAxisLineWidth = function () {}

/**
 * 获取雷达图上坐标轴的集合，坐标轴的集合设置成如下的格式：
 * new twaver.List([
 * 	{ text: 'Inflation', min: -5, max: 15 },
 * 	{ text: 'Area(Millions)', min: 0, max: 20000000 / 1000000 },
 * 	{ text: 'Population(Millions)', min: 0, max: 2000000000 / 1000000 },
 * 	{ text: 'GDP(Thousands)', min: 0, max: 8000000 / 1000000 },
 * 	{ text: 'Growth', min: 0, max: 2 }
 * ]);
 * @method twaver.charts.RadarChart.getAxisList
 * @return {twaver.List} 雷达图上坐标轴的集合
 */
twaver.charts.RadarChart.prototype.getAxisList = function () {}

/**
 * 获取雷达图上起始轴的显示角度。默认为twaver.Defaults.RADARCHART_AXIS_START_ANGLE
 * @method twaver.charts.RadarChart.getAxisStartAngle
 * @return {Number} 雷达图上起始轴的显示角度
 */
twaver.charts.RadarChart.prototype.getAxisStartAngle = function () {}

/**
 * 获取雷达图上坐标轴文字的显示颜色。默认为 twaver.Defaults.RADARCHART_AXIS_TEXT_COLOR
 * @method twaver.charts.RadarChart.getAxisTextColor
 * @return {String} 雷达图上坐标轴文字的显示颜色
 */
twaver.charts.RadarChart.prototype.getAxisTextColor = function () {}

/**
 * 获取雷达图坐标轴上文字的字体。默认为twaver.Defaults.RADARCHART_AXIS_TEXT_FONT
 * @method twaver.charts.RadarChart.getAxisTextFont
 * @return {String} 雷达图坐标轴上文字的字体
 */
twaver.charts.RadarChart.prototype.getAxisTextFont = function () {}

/**
 * 获取雷达图上坐标轴文字显示的位置，TWaver内部调用，用户可以重写此方法更改文字显示的位置
 * @method twaver.charts.RadarChart.getAxisTextPosition
 * @param {Number} angle 坐标轴的角度
 * @param {Number} cx 坐标轴文字显示区域的x点
 * @param {Number} cy 坐标轴文字显示区域的y点
 * @param {Number} width 坐标轴文字显示区域的宽度
 * @param {Number} height 坐标轴文字显示区域的高度
 * @return {Object} 坐标轴文字显示的位置，是一个带x，y的对象，例如{x:200,y:300}
 */
twaver.charts.RadarChart.prototype.getAxisTextPosition = function (angle, cx, cy, width, height) {}

/**
 * 获取指定的数据在雷达图上显示的线的宽度，默认为2个像素
 * @method twaver.charts.RadarChart.getLineWidth
 * @param {twaver.Data} data 指定的数据对象
 * @return {Number} 数据在雷达图上显示的线的宽度
 */
twaver.charts.RadarChart.prototype.getLineWidth = function (data) {}

/**
 * 获取雷达图上坐标轴之间环形线的颜色，默认为twaver.Defaults.RADARCHART_RING_LINE_COLOR
 * @method twaver.charts.RadarChart.getRingLineColor
 * @return {String} 环形线的颜色
 */
twaver.charts.RadarChart.prototype.getRingLineColor = function () {}

/**
 * 获取雷达图上坐标轴之间环形线的宽度，默认为twaver.Defaults.RADARCHART_RING_LINE_WIDTH
 * @method twaver.charts.RadarChart.getRingLineWidth
 * @return {Number} 环形线的宽度
 */
twaver.charts.RadarChart.prototype.getRingLineWidth = function () {}

/**
 * 获取雷达图上坐标轴之间环形线的类型，默认为
 * twaver.Defaults.RADARCHART_RING_TYPE，可选值有：
 * 'line'：直线, 
 * 'arc'：弧形线
 * @method twaver.charts.RadarChart.getRingType
 * @return {String} 环形线的类型
 */
twaver.charts.RadarChart.prototype.getRingType = function () {}

/**
 * 获取雷达图上坐标轴刻度的数量，默认为twaver.Defaults.RADARCHART_SCALE_COUNT
 * @method twaver.charts.RadarChart.getScaleCount
 * @return {Number} 刻度的数量
 */
twaver.charts.RadarChart.prototype.getScaleCount = function () {}

/**
 * 获取雷达图上坐标轴刻度的最大值，默认为
 * twaver.Defaults.RADARCHART_SCALE_MAXVALUE
 * @method twaver.charts.RadarChart.getScaleMaxValue
 * @return {Number} 坐标轴刻度的最大值
 */
twaver.charts.RadarChart.prototype.getScaleMaxValue = function () {}

/**
 * 获取雷达图上坐标轴刻度的最小值，默认为
 * twaver.Defaults.RADARCHART_SCALE_MINVALUE
 * @method twaver.charts.RadarChart.getScaleMinValue
 * @return {String} 坐标轴刻度的最小值
 */
twaver.charts.RadarChart.prototype.getScaleMinValue = function () {}

/**
 * 获取雷达图上坐标轴刻度尺文字的颜色，默认为
 * twaver.Defaults.RADARCHART_SCALE_TEXT_COLOR
 * @method twaver.charts.RadarChart.getScaleTextColor
 * @return {String} 坐标轴刻度尺文字的颜色
 */
twaver.charts.RadarChart.prototype.getScaleTextColor = function () {}

/**
 * 获取雷达图上坐标轴刻度尺文字的字体，默认为
 * twaver.Defaults.RADARCHART_SCALE_TEXT_FONT
 * @method twaver.charts.RadarChart.getScaleTextFont
 * @return {String} 坐标轴刻度尺文字的字体
 */
twaver.charts.RadarChart.prototype.getScaleTextFont = function () {}

/**
 * 获取雷达图上坐标轴刻度尺文字的显示位置，TWaver内部调用，用户可以重写此方法更改文字显示的位置
 * @method twaver.charts.RadarChart.getScaleTextPosition
 * @param {Number} angle 坐标轴的角度
 * @param {Number} cx 坐标轴刻度尺文字显示区域的x点
 * @param {Number} cy 坐标轴刻度尺文字显示区域的y点
 * @param {Number} width 坐标轴刻度尺文字显示区域的宽度
 * @param {Number} height 坐标轴刻度尺文字显示区域的高度
 * @return {Object} 坐标轴刻度文字显示的位置，是一个带x，y的对象，例如{x:200,y:300}
 */
twaver.charts.RadarChart.prototype.getScaleTextPosition = function (angle, cx, cy, width, height) {}

/**
 * 获取指定的数据在雷达图上显示值的集合
 * @method twaver.charts.RadarChart.getValues
 * @param {twaver.Data} data 指定的数据对象
 * @return {twaver.List} 数据在雷达图上显示值的集合
 */
twaver.charts.RadarChart.prototype.getValues = function (data) {}

/**
 * 判断雷达图上的网元瞄点是否可见，默认为twaver.Defaults.RADARCHART_ANCHOR_VISIBLE
 * @method twaver.charts.RadarChart.isAnchorVisible
 * @return {Boolean} true为可见，false不可见
 */
twaver.charts.RadarChart.prototype.isAnchorVisible = function () {}

/**
 * 获取网元在雷达图上显示区域的是否需要填充，默认为twaver.Defaults.RADARCHART_AREA_FILL
 * @method twaver.charts.RadarChart.isAreaFill
 * @return {Boolean} true为需要填充，否则为false
 */
twaver.charts.RadarChart.prototype.isAreaFill = function () {}

/**
 * 判读雷达图上坐标轴的文字是否可见，默认为
 * twaver.Defaults.RADARCHART_AXIS_TEXT_VISIBLE
 * @method twaver.charts.RadarChart.isAxisTextVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.isAxisTextVisible = function () {}

/**
 * 判断雷达图上坐标轴是否可见，默认为twaver.Defaults.RADARCHART_AXIS_VISIBLE
 * @method twaver.charts.RadarChart.isAxisVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.isAxisVisible = function () {}

/**
 * 判断雷达图上坐标轴之间环形线的是否可见，默认为twaver.Defaults.RADARCHART_RING_VISIBLE
 * @method twaver.charts.RadarChart.isRingVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.isRingVisible = function () {}

/**
 * 判断雷达图上坐标轴刻度尺上的文字是否可见，默认为
 * twaver.Defaults.RADARCHART_SCALE_TEXT_VISIBLE
 * @method twaver.charts.RadarChart.isScaleTextVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.isScaleTextVisible = function () {}

/**
 * 设置雷达图上的网元瞄点是否可见，默认为twaver.Defaults.RADARCHART_ANCHOR_VISIBLE
 * @method twaver.charts.RadarChart.setAnchorVisible
 * @param {Boolean} v true为可见，false不可见
 */
twaver.charts.RadarChart.prototype.setAnchorVisible = function (v) {}

/**
 * 设置网元在雷达图上显示区域的是否需要填充，默认为twaver.Defaults.RADARCHART_AREA_FILL
 * @method twaver.charts.RadarChart.setAreaFill
 * @param {Boolean} v true为需要填充，否则为false
 */
twaver.charts.RadarChart.prototype.setAreaFill = function (v) {}

/**
 * 设置网元在雷达图上显示区域的透明度，默认为twaver.Defaults.RADARCHART_AREA_FILL_ALPHA
 * @method twaver.charts.RadarChart.setAreaFillAlpha
 * @param {Number} v 显示区域的透明度，取值范围0-1
 */
twaver.charts.RadarChart.prototype.setAreaFillAlpha = function (v) {}

/**
 * 设置当选择网元时，网元在雷达图上显示区域的透明度，默认为
 * twaver.Defaults.RADARCHART_AREA_SELECT_FILL_ALPHA
 * @method twaver.charts.RadarChart.setAreaSelectFillAlpha
 * @param {Number} v 透明度值的取值范围0-1
 */
twaver.charts.RadarChart.prototype.setAreaSelectFillAlpha = function (v) {}

/**
 * 设置雷达图上坐标轴的颜色，默认为twaver.Defaults.RADARCHART_AXIS_LINE_COLOR
 * @method twaver.charts.RadarChart.setAxisLineColor
 * @param {String} v 雷达图上坐标轴的颜色
 */
twaver.charts.RadarChart.prototype.setAxisLineColor = function (v) {}

/**
 * 设置雷达图上坐标轴的宽度，默认为twaver.Defaults.RADARCHART_AXIS_LINE_WIDTH
 * @method twaver.charts.RadarChart.setAxisLineWidth
 * @param {Number} v 雷达图上坐标轴的宽度
 */
twaver.charts.RadarChart.prototype.setAxisLineWidth = function (v) {}

/**
 * 设置雷达图上坐标轴的集合，坐标轴的集合设置成如下的格式：
 * new twaver.List([
 * 	{ text: 'Inflation', min: -5, max: 15 },
 * 	{ text: 'Area(Millions)', min: 0, max: 20000000 / 1000000 },
 * 	{ text: 'Population(Millions)', min: 0, max: 2000000000 / 1000000 },
 * 	{ text: 'GDP(Thousands)', min: 0, max: 8000000 / 1000000 },
 * 	{ text: 'Growth', min: 0, max: 2 }
 * ]);
 * @method twaver.charts.RadarChart.setAxisList
 * @param {twaver.List} v 雷达图上坐标轴的集合
 */
twaver.charts.RadarChart.prototype.setAxisList = function (v) {}

/**
 * 设置雷达图上起始轴的显示角度。默认为twaver.Defaults.RADARCHART_AXIS_START_ANGLE
 * @method twaver.charts.RadarChart.setAxisStartAngle
 * @param {Number} v 雷达图上起始轴的显示角度
 */
twaver.charts.RadarChart.prototype.setAxisStartAngle = function (v) {}

/**
 * 设置雷达图上坐标轴文字的显示颜色。默认为 twaver.Defaults.RADARCHART_AXIS_TEXT_COLOR
 * @method twaver.charts.RadarChart.setAxisTextColor
 * @param {String} v 雷达图上坐标轴文字的显示颜色
 */
twaver.charts.RadarChart.prototype.setAxisTextColor = function (v) {}

/**
 * 设置雷达图坐标轴上文字的字体。默认为twaver.Defaults.RADARCHART_AXIS_TEXT_FONT
 * @method twaver.charts.RadarChart.setAxisTextFont
 * @param {String} v 雷达图坐标轴上文字的字体
 */
twaver.charts.RadarChart.prototype.setAxisTextFont = function (v) {}

/**
 * 设置雷达图上坐标轴的文字是否可见，默认为
 * twaver.Defaults.RADARCHART_AXIS_TEXT_VISIBLE
 * @method twaver.charts.RadarChart.setAxisTextVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.setAxisTextVisible = function (v) {}

/**
 * 设置雷达图上坐标轴是否可见，默认为twaver.Defaults.RADARCHART_AXIS_VISIBLE
 * @method twaver.charts.RadarChart.setAxisVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.setAxisVisible = function (v) {}

/**
 * 设置雷达图上坐标轴之间环形线的颜色，默认为twaver.Defaults.RADARCHART_RING_LINE_COLOR
 * @method twaver.charts.RadarChart.setRingLineColor
 * @param {String} v 环形线的颜色
 */
twaver.charts.RadarChart.prototype.setRingLineColor = function (v) {}

/**
 * 设置雷达图上坐标轴之间环形线的宽度，默认为twaver.Defaults.RADARCHART_RING_LINE_WIDTH
 * @method twaver.charts.RadarChart.setRingLineWidth
 * @param {Number} v 环形线的宽度
 */
twaver.charts.RadarChart.prototype.setRingLineWidth = function (v) {}

/**
 * 设置雷达图上坐标轴之间环形线的类型，默认为
 * twaver.Defaults.RADARCHART_RING_TYPE，可选值有：
 * 'line'：直线, 
 * 'arc'：弧形线
 * @method twaver.charts.RadarChart.setRingType
 * @param {String} v 环形线的类型
 */
twaver.charts.RadarChart.prototype.setRingType = function (v) {}

/**
 * 设置雷达图上坐标轴之间环形线的是否可见，默认为twaver.Defaults.RADARCHART_RING_VISIBLE
 * @method twaver.charts.RadarChart.setRingVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.setRingVisible = function (v) {}

/**
 * 设置雷达图上坐标轴刻度的数量，默认为twaver.Defaults.RADARCHART_SCALE_COUNT
 * @method twaver.charts.RadarChart.setScaleCount
 * @param {Number} v 刻度的数量
 */
twaver.charts.RadarChart.prototype.setScaleCount = function (v) {}

/**
 * 设置雷达图上坐标轴刻度的最大值，默认为
 * twaver.Defaults.RADARCHART_SCALE_MAXVALUE
 * @method twaver.charts.RadarChart.setScaleMaxValue
 * @param {Number} v 坐标轴刻度的最大值
 */
twaver.charts.RadarChart.prototype.setScaleMaxValue = function (v) {}

/**
 * 设置雷达图上坐标轴刻度的最小值，默认为
 * twaver.Defaults.RADARCHART_SCALE_MINVALUE
 * @method twaver.charts.RadarChart.setScaleMinValue
 * @param {Number} v 坐标轴刻度的最小值
 */
twaver.charts.RadarChart.prototype.setScaleMinValue = function (v) {}

/**
 * 设置雷达图上坐标轴刻度尺文字的颜色，默认为
 * twaver.Defaults.RADARCHART_SCALE_TEXT_COLOR
 * @method twaver.charts.RadarChart.setScaleTextColor
 * @param {String} v 坐标轴刻度尺文字的颜色
 */
twaver.charts.RadarChart.prototype.setScaleTextColor = function (v) {}

/**
 * 设置雷达图上坐标轴刻度尺文字的字体，默认为
 * twaver.Defaults.RADARCHART_SCALE_TEXT_FONT
 * @method twaver.charts.RadarChart.setScaleTextFont
 * @param {String} v 坐标轴刻度尺文字的字体
 */
twaver.charts.RadarChart.prototype.setScaleTextFont = function (v) {}

/**
 * 设置雷达图上坐标轴刻度尺上的文字是否可见，默认为
 * twaver.Defaults.RADARCHART_SCALE_TEXT_VISIBLE
 * @method twaver.charts.RadarChart.setScaleTextVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.RadarChart.prototype.setScaleTextVisible = function (v) {}


/**
 * 刻度比例图，它是棒图、气泡图、曲线图的基类。这类图的特征是有X、Y坐标轴。它提供了坐标轴上一系列的参数设置
 * @class twaver.charts.ScaleChart
 * @constructor
 * @extends twaver.charts.ChartBase
 * @param {twaver.DataBox} [dataBox] 绑定的数据容器
 * @return {twaver.charts.ScaleChart}
 */
twaver.charts.ScaleChart = function (dataBox) {}

twaver.charts.ScaleChart.prototype = new twaver.charts.ChartBase()

/**
 * 格式化Y轴上的刻度尺的文字，默认保留两位小数。用户可以重写这个方法来对文字进行格式化
 * @method twaver.charts.ScaleChart.formatYScaleText
 * @param {Number} value 指定的数据值
 * @return {Number} 格式化后的数据
 */
twaver.charts.ScaleChart.prototype.formatYScaleText = function (value) {}

/**
 * 获取显示的列数，TWaver内部会调用此方法。
 * @method twaver.charts.ScaleChart.getColumnCount
 * @return {Number} 显示的列数
 */
twaver.charts.ScaleChart.prototype.getColumnCount = function () {}

/**
 * 获取显示的列的宽度，TWaver内部会调用此方法。
 * @method twaver.charts.ScaleChart.getColumnWidth
 * @return {Number} 列的宽度
 */
twaver.charts.ScaleChart.prototype.getColumnWidth = function () {}

/**
 * 获取图表上限制的最小值
 * @method twaver.charts.ScaleChart.getLowerLimit
 * @return {Number}
 */
twaver.charts.ScaleChart.prototype.getLowerLimit = function () {}

/**
 * 获取图表上网元的最大值
 * @method twaver.charts.ScaleChart.getMax
 * @return {Number}
 */
twaver.charts.ScaleChart.prototype.getMax = function () {}

/**
 * 获取图表上网元的最小值
 * @method twaver.charts.ScaleChart.getMin
 * @return {Number}
 */
twaver.charts.ScaleChart.prototype.getMin = function () {}

/**
 * 最大、最小值之间的差值，取的是Max-Min
 * @method twaver.charts.ScaleChart.getRange
 * @return {String}
 */
twaver.charts.ScaleChart.prototype.getRange = function () {}

/**
 * 获取图表上限制显示的最大值
 * @method twaver.charts.ScaleChart.getUpperLimit
 * @return {String}
 */
twaver.charts.ScaleChart.prototype.getUpperLimit = function () {}

/**
 * 获取指定数据值的集合，取的是data中的chart.values的样式值
 * @method twaver.charts.ScaleChart.getValues
 * @param {twaver.Data} data 指定的数据对象
 * @return {twaver.List} 数据对象图表上值的集合
 */
twaver.charts.ScaleChart.prototype.getValues = function (data) {}

/**
 * 获取图表上X轴线的颜色
 * @method twaver.charts.ScaleChart.getXAxisLineColor
 * @return {String} X轴线的颜色
 */
twaver.charts.ScaleChart.prototype.getXAxisLineColor = function () {}

/**
 * 获取图表上X轴线的宽度
 * @method twaver.charts.ScaleChart.getXAxisLineWidth
 * @return {Number} X轴线的宽度
 */
twaver.charts.ScaleChart.prototype.getXAxisLineWidth = function () {}

/**
 * 获取图表上X轴的显示文字
 * @method twaver.charts.ScaleChart.getXAxisText
 * @return {String} X轴的显示文字
 */
twaver.charts.ScaleChart.prototype.getXAxisText = function () {}

/**
 * 获取图表上X轴的显示文字的颜色
 * @method twaver.charts.ScaleChart.getXAxisTextColor
 * @return {String} X轴显示文字的颜色
 */
twaver.charts.ScaleChart.prototype.getXAxisTextColor = function () {}

/**
 * 获取图表上X轴的显示文字的字体
 * @method twaver.charts.ScaleChart.getXAxisTextFont
 * @return {String} X轴的显示文字的字体
 */
twaver.charts.ScaleChart.prototype.getXAxisTextFont = function () {}

/**
 * 获取图表上X轴刻度尺上的文字显示的颜色
 * @method twaver.charts.ScaleChart.getXScaleTextColor
 * @return {String} X轴刻度尺上文字显示颜色
 */
twaver.charts.ScaleChart.prototype.getXScaleTextColor = function () {}

/**
 * 获取图表上X轴刻度尺上的文字显示的字体
 * @method twaver.charts.ScaleChart.getXScaleTextFont
 * @return {String} X轴刻度尺上的文字的字体
 */
twaver.charts.ScaleChart.prototype.getXScaleTextFont = function () {}

/**
 * 获取图表上X轴刻度尺上的文字显示的方向，可选值为
 * 'horizontal'：水平
 * 'vertical'：垂直
 * @method twaver.charts.ScaleChart.getXScaleTextOrientation
 * @return {String} X轴刻度尺上的文字显示的方向
 */
twaver.charts.ScaleChart.prototype.getXScaleTextOrientation = function () {}

/**
 * 获取X轴上刻度尺的文字显示的内容
 * 
 * @method twaver.charts.ScaleChart.getXScaleTexts
 * @return {twaver.List} 刻度尺的文字显示的内容集合
 */
twaver.charts.ScaleChart.prototype.getXScaleTexts = function () {}

/**
 * 获取图表上Y轴线的颜色
 * @method twaver.charts.ScaleChart.getYAxisLineColor
 * @return {String} Y轴线的颜色
 */
twaver.charts.ScaleChart.prototype.getYAxisLineColor = function () {}

/**
 * 获取图表上Y轴线的宽度
 * @method twaver.charts.ScaleChart.getYAxisLineWidth
 * @return {Number} Y轴线的宽度
 */
twaver.charts.ScaleChart.prototype.getYAxisLineWidth = function () {}

/**
 * 获取图表上Y轴的显示文字
 * @method twaver.charts.ScaleChart.getYAxisText
 * @return {String} Y轴的显示文字
 */
twaver.charts.ScaleChart.prototype.getYAxisText = function () {}

/**
 * 获取图表上Y轴的文字显示的颜色
 * @method twaver.charts.ScaleChart.getYAxisTextColor
 * @return {String} Y轴的文字显示的颜色
 */
twaver.charts.ScaleChart.prototype.getYAxisTextColor = function () {}

/**
 * 获取图表上Y轴的文字显示的字体
 * @method twaver.charts.ScaleChart.getYAxisTextFont
 * @return {String} Y轴的文字显示的字体
 */
twaver.charts.ScaleChart.prototype.getYAxisTextFont = function () {}

/**
 * 获取图表上Y轴刻度线的颜色
 * @method twaver.charts.ScaleChart.getYScaleLineColor
 * @return {String} Y轴刻度线的颜色
 */
twaver.charts.ScaleChart.prototype.getYScaleLineColor = function () {}

/**
 * 获取图表上Y轴刻度线的宽度
 * @method twaver.charts.ScaleChart.getYScaleLineWidth
 * @return {Number} Y轴刻度线的宽度
 */
twaver.charts.ScaleChart.prototype.getYScaleLineWidth = function () {}

/**
 * 获取图表上Y轴刻度之间的间隙像素值，当没有设置Y轴刻度值之间的间距时，这个参数生效
 * @method twaver.charts.ScaleChart.getYScalePixelGap
 * @return {Number} Y轴刻度之间的间隙像素值
 */
twaver.charts.ScaleChart.prototype.getYScalePixelGap = function () {}

/**
 * 获取图表上Y轴刻度尺上的文字显示的颜色
 * @method twaver.charts.ScaleChart.getYScaleTextColor
 * @return {String} Y轴刻度尺上的文字显示的颜色
 */
twaver.charts.ScaleChart.prototype.getYScaleTextColor = function () {}

/**
 * 获取图表上Y轴刻度尺上的文字显示的字体
 * @method twaver.charts.ScaleChart.getYScaleTextFont
 * @return {String} Y轴刻度尺上的文字显示的字体
 */
twaver.charts.ScaleChart.prototype.getYScaleTextFont = function () {}

/**
 * 获取图表上Y轴刻度值之间的间距
 * @method twaver.charts.ScaleChart.getYScaleValueGap
 * @return {Number} Y轴刻度值之间的间距
 */
twaver.charts.ScaleChart.prototype.getYScaleValueGap = function () {}

/**
 * 判断图表上Y轴上最小刻度值是否可见
 * @method twaver.charts.ScaleChart.isYScaleMinTextVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.ScaleChart.prototype.isYScaleMinTextVisible = function () {}

/**
 * 判断图表上Y轴上的刻度值是否可见
 * @method twaver.charts.ScaleChart.isYScaleTextVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.charts.ScaleChart.prototype.isYScaleTextVisible = function () {}

/**
 * 设置图表上限制显示的最小值
 * @method twaver.charts.ScaleChart.setLowerLimit
 * @param {Number} v 
 */
twaver.charts.ScaleChart.prototype.setLowerLimit = function (v) {}

/**
 * 设置图表上限制显示的最大值
 * @method twaver.charts.ScaleChart.setUpperLimit
 * @param {Number} v 
 */
twaver.charts.ScaleChart.prototype.setUpperLimit = function (v) {}

/**
 * 设置图表上X轴线的颜色
 * @method twaver.charts.ScaleChart.setXAxisLineColor
 * @param {String} v X轴线的颜色
 */
twaver.charts.ScaleChart.prototype.setXAxisLineColor = function (v) {}

/**
 * 设置图表上X轴线的宽度
 * @method twaver.charts.ScaleChart.setXAxisLineWidth
 * @param {Number} v X轴线的宽度
 */
twaver.charts.ScaleChart.prototype.setXAxisLineWidth = function (v) {}

/**
 * 设置图表上X轴的显示文字
 * @method twaver.charts.ScaleChart.setXAxisText
 * @param {String} v X轴的显示文字
 */
twaver.charts.ScaleChart.prototype.setXAxisText = function (v) {}

/**
 * 设置图表上X轴的显示文字的颜色
 * @method twaver.charts.ScaleChart.setXAxisTextColor
 * @param {String} v X轴显示文字的颜色
 */
twaver.charts.ScaleChart.prototype.setXAxisTextColor = function (v) {}

/**
 * 设置图表上X轴的显示文字的字体
 * @method twaver.charts.ScaleChart.setXAxisTextFont
 * @param {String} v X轴的显示文字的字体
 */
twaver.charts.ScaleChart.prototype.setXAxisTextFont = function (v) {}

/**
 * 设置图表上X轴刻度尺上的文字显示的颜色
 * @method twaver.charts.ScaleChart.setXScaleTextColor
 * @param {String} v X轴刻度尺上文字显示颜色
 */
twaver.charts.ScaleChart.prototype.setXScaleTextColor = function (v) {}

/**
 * 设置图表上X轴刻度尺上的文字显示的字体
 * @method twaver.charts.ScaleChart.setXScaleTextFont
 * @param {String} v X轴刻度尺上的文字的字体
 */
twaver.charts.ScaleChart.prototype.setXScaleTextFont = function (v) {}

/**
 * 设置图表上X轴刻度尺上的文字显示的方向，可选值为
 * 'horizontal'：水平
 * 'vertical'：垂直
 * @method twaver.charts.ScaleChart.setXScaleTextOrientation
 * @param {String} v X轴刻度尺上的文字显示的方向
 */
twaver.charts.ScaleChart.prototype.setXScaleTextOrientation = function (v) {}

/**
 * 设置X轴上刻度尺的文字显示的内容
 * 
 * @method twaver.charts.ScaleChart.setXScaleTexts
 * @param {twaver.List} v 刻度尺的文字显示的内容集合
 */
twaver.charts.ScaleChart.prototype.setXScaleTexts = function (v) {}

/**
 * 设置图表上Y轴线的颜色
 * @method twaver.charts.ScaleChart.setYAxisLineColor
 * @param {String} v Y轴线的颜色
 */
twaver.charts.ScaleChart.prototype.setYAxisLineColor = function (v) {}

/**
 * 设置图表上Y轴线的宽度
 * @method twaver.charts.ScaleChart.setYAxisLineWidth
 * @param {Number} v Y轴线的宽度
 */
twaver.charts.ScaleChart.prototype.setYAxisLineWidth = function (v) {}

/**
 * 设置图表上Y轴的显示文字
 * @method twaver.charts.ScaleChart.setYAxisText
 * @param {String} v Y轴的显示文字
 */
twaver.charts.ScaleChart.prototype.setYAxisText = function (v) {}

/**
 * 设置图表上Y轴的文字显示的颜色
 * @method twaver.charts.ScaleChart.setYAxisTextColor
 * @param {String} v Y轴的文字显示的颜色
 */
twaver.charts.ScaleChart.prototype.setYAxisTextColor = function (v) {}

/**
 * 设置图表上Y轴的文字显示的字体
 * @method twaver.charts.ScaleChart.setYAxisTextFont
 * @param {String} v Y轴的文字显示的字体
 */
twaver.charts.ScaleChart.prototype.setYAxisTextFont = function (v) {}

/**
 * 设置图表上Y轴刻度线的颜色
 * @method twaver.charts.ScaleChart.setYScaleLineColor
 * @param {String} v Y轴刻度线的颜色
 */
twaver.charts.ScaleChart.prototype.setYScaleLineColor = function (v) {}

/**
 * 设置图表上Y轴刻度线的宽度
 * @method twaver.charts.ScaleChart.setYScaleLineWidth
 * @param {Number} v Y轴刻度线的宽度
 */
twaver.charts.ScaleChart.prototype.setYScaleLineWidth = function (v) {}

/**
 * 设置图表上Y轴上最小刻度值是否可见
 * @method twaver.charts.ScaleChart.setYScaleMinTextVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.ScaleChart.prototype.setYScaleMinTextVisible = function (v) {}

/**
 * 设置图表上Y轴刻度之间的间隙像素值，当没有设置Y轴刻度值之间的间距时，这个参数生效
 * @method twaver.charts.ScaleChart.setYScalePixelGap
 * @param {Number} v Y轴刻度之间的间隙像素值
 */
twaver.charts.ScaleChart.prototype.setYScalePixelGap = function (v) {}

/**
 * 设置图表上Y轴刻度尺上的文字显示的颜色
 * @method twaver.charts.ScaleChart.setYScaleTextColor
 * @param {String} v Y轴刻度尺上的文字显示的颜色
 */
twaver.charts.ScaleChart.prototype.setYScaleTextColor = function (v) {}

/**
 * 设置图表上Y轴刻度尺上的文字显示的字体
 * @method twaver.charts.ScaleChart.setYScaleTextFont
 * @param {String} v Y轴刻度尺上的文字显示的字体
 */
twaver.charts.ScaleChart.prototype.setYScaleTextFont = function (v) {}

/**
 * 设置图表上Y轴上的刻度值是否可见
 * @method twaver.charts.ScaleChart.setYScaleTextVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.charts.ScaleChart.prototype.setYScaleTextVisible = function (v) {}

/**
 * 设置图表上Y轴刻度值之间的间距
 * @method twaver.charts.ScaleChart.setYScaleValueGap
 * @param {Number} v Y轴刻度值之间的间距
 */
twaver.charts.ScaleChart.prototype.setYScaleValueGap = function (v) {}


/**
 * 构造函数
 * 这个类定义了列表、表格、树中通用的方法，它是这些类的基类。它和数据容器绑定，以图形化的方式展示数据容器中的数据
 * @class twaver.controls.ListBase
 * @constructor
 * @extends twaver.controls.View
 * @param {twaver.DataBox} [dataBox] 绑定的数据容器
 * @return {twaver.controls.ListBase} ListBase对象本身
 */
twaver.controls.ListBase = function (dataBox) {}

twaver.controls.ListBase.prototype = new twaver.controls.View()

/**
 * 调整行的大小
 * @method twaver.controls.ListBase.adjustRowSize
 */
twaver.controls.ListBase.prototype.adjustRowSize = function () {}

/**
 * 获取当前排序的函数
 * @method twaver.controls.ListBase.getCurrentSortFunction
 * @return {Function} 排序的函数
 */
twaver.controls.ListBase.prototype.getCurrentSortFunction = function () {}

/**
 * 获取鼠标点击的数据
 * @method twaver.controls.ListBase.getDataAt
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Data} 鼠标事件下的数据
 */
twaver.controls.ListBase.prototype.getDataAt = function (e) {}

/**
 * 获取绑定的数据容器
 * @method twaver.controls.ListBase.getDataBox
 * @return {twaver.DataBox} 绑定的数据容器
 */
twaver.controls.ListBase.prototype.getDataBox = function () {}

/**
 * 获得所有数据的div
 * @method twaver.controls.ListBase.getDataDiv
 * @return {HTMLDivElement} 数据div对象
 */
twaver.controls.ListBase.prototype.getDataDiv = function () {}

/**
 * 获取可见区域结束的行号
 * @method twaver.controls.ListBase.getEndRowIndex
 * @return {Number} 结束的行号
 */
twaver.controls.ListBase.prototype.getEndRowIndex = function () {}

/**
 * 获取所有的行数据
 * @method twaver.controls.ListBase.getRowDatas
 * @return {twaver.List} 所有行的数据
 */
twaver.controls.ListBase.prototype.getRowDatas = function () {}

/**
 * 获取鼠标下数据的行号
 * @method twaver.controls.ListBase.getRowIndexAt
 * @param {MouseEvent} e 鼠标事件
 * @return {Number} 数据的行号
 */
twaver.controls.ListBase.prototype.getRowIndexAt = function (e) {}

/**
 * 获取指定数据的行号
 * @method twaver.controls.ListBase.getRowIndexByData
 * @param {twaver.Data} data 指定的数据
 * @return {Number} 行号
 */
twaver.controls.ListBase.prototype.getRowIndexByData = function (data) {}

/**
 * 通过指定数据的ID编号获取数据所在行的行号
 * @method twaver.controls.ListBase.getRowIndexById
 * @param {Object} id 指定数据的ID编号
 * @return {Number} 行的Index值
 */
twaver.controls.ListBase.prototype.getRowIndexById = function (id) {}

/**
 * 获取列表上行的数量
 * @method twaver.controls.ListBase.getRowSize
 * @return {Number} 行的数量
 */
twaver.controls.ListBase.prototype.getRowSize = function () {}

/**
 * 获取可见区域开始的行号，当列表的滚动条滚动时，开始的行号是随之变化的
 * @method twaver.controls.ListBase.getStartRowIndex
 * @return {Number} 开始的行号
 */
twaver.controls.ListBase.prototype.getStartRowIndex = function () {}

/**
 * 当视图组件发生更改时，twaver会调用此方法。用户不需要直接调用此方法，但是可以重载此方法来实现自己的逻辑
 * @method twaver.controls.ListBase.handleChange
 * @param {Object} e 视图更改事件
 */
twaver.controls.ListBase.prototype.handleChange = function (e) {}

/**
 * 当DataBox中的数据发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
 * @method twaver.controls.ListBase.handleDataBoxChange
 * @param {Object} e 数据发生变化的事件
 */
twaver.controls.ListBase.prototype.handleDataBoxChange = function (e) {}

/**
 * 当DataBox中的数据的层次发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
 * @method twaver.controls.ListBase.handleHierarchyChange
 * @param {Object} e 数据的层次发生变化的事件
 */
twaver.controls.ListBase.prototype.handleHierarchyChange = function (e) {}

/**
 * 当DataBox中的数据的属性发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
 * @method twaver.controls.ListBase.handlePropertyChange
 * @param {Object} e 数据的属性发生变化的事件
 */
twaver.controls.ListBase.prototype.handlePropertyChange = function (e) {}

/**
 * 当DataBox中的选择的数据发生变化时调用此方法，用于更新视图的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
 * @method twaver.controls.ListBase.handleSelectionChange
 * @param {Object} e DataBox中的选择的数据发生变化的事件
 */
twaver.controls.ListBase.prototype.handleSelectionChange = function (e) {}

/**
 * 无效视图中的指定的数据，在等待数毫秒后刷新视图，当视图数据容器中指定的数据发生变化时，须调用此方法，让组件重画
 * @method twaver.controls.ListBase.invalidateData
 * @param {twaver.Data} data 指定的数据对象
 */
twaver.controls.ListBase.prototype.invalidateData = function (data) {}

/**
 * 无效视图的组件，在等待数毫秒后刷新视图组件，当视图发生变化时，须调用此方法，让组件重画
 * @method twaver.controls.ListBase.invalidateDisplay
 */
twaver.controls.ListBase.prototype.invalidateDisplay = function () {}

/**
 * 无效视图的模型，当视图模型中的数据发生变化时，调用此方法，在等待数毫秒数后刷新视图组件
 * @method twaver.controls.ListBase.invalidateModel
 */
twaver.controls.ListBase.prototype.invalidateModel = function () {}

/**
 * 获取列表列内容是否为纯文本
 * @method twaver.controls.ListBase.isInnerText
 * @return {Boolean} 返回列表列内容是否为纯文本
 */
twaver.controls.ListBase.prototype.isInnerText = function () {}

/**
 * 判断指定的数据在视图上是否可见
 * @method twaver.controls.ListBase.isVisible
 * @param {twaver.Data} data 指定的数据
 * @return {Boolean} true为可见，否则为false
 */
twaver.controls.ListBase.prototype.isVisible = function (data) {}

/**
 * 让指定的数据处于可见区域
 * @method twaver.controls.ListBase.makeVisible
 * @param {twaver.Data} data 指定的数据对象
 */
twaver.controls.ListBase.prototype.makeVisible = function (data) {}

/**
 * 当调用renderData时，会调用此方法。用户不需要直接调用此方法，但是可以重写此方法实现自己的逻辑
 * @method twaver.controls.ListBase.onDataRendered
 * @param {HTMLDivElement} div 包含数据的div
 * @param {twaver.Data} data 指定的数据
 * @param {Number} row 数据所在的行
 * @param {Boolean} selected 是否为选中状态
 */
twaver.controls.ListBase.prototype.onDataRendered = function (div, data, row, selected) {}

/**
 * 当数据容器中选择的数据发生变化时，会调用此方法。用户不需要直接调用此方法，但可以重写此方法实现自己的逻辑
 * @method twaver.controls.ListBase.onSelectionChanged
 * @param {Object} e DataBox中选择的数据发生变化的事件
 */
twaver.controls.ListBase.prototype.onSelectionChanged = function (e) {}

/**
 * 当共享选择模型发生更改时调用此方法
 * @method twaver.controls.ListBase.onShareSelectionModelChanged
 */
twaver.controls.ListBase.prototype.onShareSelectionModelChanged = function () {}

/**
 * 当调用validate后，twaver会调用此方法，用户不需自己调用此方法，但可以重载此方法，实现自己的逻辑
 * @method twaver.controls.ListBase.onValidated
 */
twaver.controls.ListBase.prototype.onValidated = function () {}

/**
 * 让滚动条滚动到指定的数据，让指定的数据可见
 * @method twaver.controls.ListBase.scrollToData
 * @param {twaver.Data} data 指定的数据
 */
twaver.controls.ListBase.prototype.scrollToData = function (data) {}

/**
 * 设置绑定的数据容器
 * @method twaver.controls.ListBase.setDataBox
 * @param {twaver.DataBox} dataBox 绑定的数据容器
 */
twaver.controls.ListBase.prototype.setDataBox = function (dataBox) {}

/**
 * 设置列表列内容是否为纯文本
 * @method twaver.controls.ListBase.setInnerText
 * @param {Boolean} v 列表列内容是否为纯文本
 */
twaver.controls.ListBase.prototype.setInnerText = function (v) {}

/**
 * 重画组件，调用validate方法后，此方法会被调用
 * @method twaver.controls.ListBase.validateModel
 */
twaver.controls.ListBase.prototype.validateModel = function () {}


/**
 * 构造函数
 * 属性表是TWaver视图组件中的一种，它和数据容器绑定，并显示数据容器中当前选中的网元属性。
 * 属性表是只有两列的表格，以键、值这样的对应关系来显示属性，并可以对属性进行分组
 * @class twaver.controls.PropertySheet
 * @constructor
 * @extends twaver.controls.View
 * @param {twaver.DataBox} dataBox 绑定的数据容器
 * @return {twaver.controls.PropertySheet}
 */
twaver.controls.PropertySheet = function (dataBox) {}

twaver.controls.PropertySheet.prototype = new twaver.controls.View()

/**
 * 调整属性表的宽度
 * @method twaver.controls.PropertySheet.adjustWidth
 */
twaver.controls.PropertySheet.prototype.adjustWidth = function () {}

/**
 * 取消当前编辑器的编辑状态
 * @method twaver.controls.PropertySheet.cancelEditing
 */
twaver.controls.PropertySheet.prototype.cancelEditing = function () {}

/**
 * 合并属性表上的指定的类别
 * @method twaver.controls.PropertySheet.collapse
 * @param {String} categoryName 类别的名称
 */
twaver.controls.PropertySheet.prototype.collapse = function (categoryName) {}

/**
 * 合并属性表上所有的类别
 * @method twaver.controls.PropertySheet.collapseAll
 */
twaver.controls.PropertySheet.prototype.collapseAll = function () {}

/**
 * 提交单元格中编辑的值，将这个值回写到Data的属性中
 * @method twaver.controls.PropertySheet.commitEditValue
 * @param {Object} editInfo 指定的单元格编辑器的信息，它是一个包含column和data的对象
 * @param {Object} target 编辑器所对应的对象，它是一个包含type的对象，用于判断编辑器的类型
 */
twaver.controls.PropertySheet.prototype.commitEditValue = function (editInfo, target) {}

/**
 * 展开属性表上的指定的类别
 * @method twaver.controls.PropertySheet.expand
 * @param {String} categoryName 类别的名称
 */
twaver.controls.PropertySheet.prototype.expand = function (categoryName) {}

/**
 * 展开属性表上所有的类别
 * @method twaver.controls.PropertySheet.expandAll
 */
twaver.controls.PropertySheet.prototype.expandAll = function () {}

/**
 * 获取属性表所有边框的颜色，默认为 twaver.Defaults.PROPERTYSHEET_BORDER_COLOR
 * @method twaver.controls.PropertySheet.getBorderColor
 * @return {String} 边框的颜色
 */
twaver.controls.PropertySheet.prototype.getBorderColor = function () {}

/**
 * 获取指定属性的类别名称
 * @method twaver.controls.PropertySheet.getCategoryName
 * @param {twaver.Property} property 指定的属性对象
 * @return {String} 属性所对应的类别名称
 */
twaver.controls.PropertySheet.prototype.getCategoryName = function (property) {}

/**
 * 获取类别合并时的图标，默认为twaver.Defaults.PROPERTYSHEET_COLLAPSE_ICON
 * @method twaver.controls.PropertySheet.getCollapseIcon
 * @return {String} 合并的图标
 */
twaver.controls.PropertySheet.prototype.getCollapseIcon = function () {}

/**
 * 获取属性表上列的线宽，默认为 twaver.Defaults.PROPERTYSHEET_COLUMN_LINE_WIDTH
 * @method twaver.controls.PropertySheet.getColumnLineWidth
 * @return {Number} 列的线宽
 */
twaver.controls.PropertySheet.prototype.getColumnLineWidth = function () {}

/**
 * 获取属性表上当前显示的数据，默认为数据容器中最后一个选中的数据
 * @method twaver.controls.PropertySheet.getCurrentData
 * @return {twaver.Data} 当前显示的数据
 */
twaver.controls.PropertySheet.prototype.getCurrentData = function () {}

/**
 * 获取绑定的数据容器
 * @method twaver.controls.PropertySheet.getDataBox
 * @return {twaver.DataBox} 指定的数据容器
 */
twaver.controls.PropertySheet.prototype.getDataBox = function () {}

/**
 * 获取属性表上数据所在的DIV
 * @method twaver.controls.PropertySheet.getDataDiv
 * @return {HTMLDivElement} 包含数据的DIV
 */
twaver.controls.PropertySheet.prototype.getDataDiv = function () {}

/**
 * 获取属性表的类别展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
 * @method twaver.controls.PropertySheet.getExpandIcon
 * @return {String} 属性表的类别展开时的图标
 */
twaver.controls.PropertySheet.prototype.getExpandIcon = function () {}

/**
 * 获取属性表上父亲和孩子之间的缩进，默认为twaver.Defaults.PROPERTYSHEET_INDENT
 * @method twaver.controls.PropertySheet.getIndent
 * @return {Number} 属性表上父亲和孩子之间的缩进值
 */
twaver.controls.PropertySheet.prototype.getIndent = function () {}

/**
 * 获取属性数据容器
 * @method twaver.controls.PropertySheet.getPropertyBox
 * @return {twaver.PropertyBox} 包含属性的容器
 */
twaver.controls.PropertySheet.prototype.getPropertyBox = function () {}

/**
 * 获取属性名的水平对齐方式，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_HORIZONTAL_ALIGN
 * 水平对齐方式的可选值为：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * @method twaver.controls.PropertySheet.getPropertyNameHorizontalAlign
 * @return {String} 属性名的水平对齐方式
 */
twaver.controls.PropertySheet.prototype.getPropertyNameHorizontalAlign = function () {}

/**
 * 获取属性名所在的列所占的宽度，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_WIDTH
 * @method twaver.controls.PropertySheet.getPropertyNameWidth
 * @return {Number} 属性名所在的列所占的宽度
 */
twaver.controls.PropertySheet.prototype.getPropertyNameWidth = function () {}

/**
 * 获取当鼠标靠近分隔条时可以改变列宽的像素数。默认为twaver.Defaults.PROPERTYSHEET_RESIZE_TOLERANCE
 * @method twaver.controls.PropertySheet.getResizeTolerance
 * @return {Number} 当鼠标靠近分隔条时可以改变列宽的像素数
 */
twaver.controls.PropertySheet.prototype.getResizeTolerance = function () {}

/**
 * 获取属性表的行高。默认为 twaver.Defaults.PROPERTYSHEET_ROW_HEIGHT
 * @method twaver.controls.PropertySheet.getRowHeight
 * @return {Number} 属性表的行高
 */
twaver.controls.PropertySheet.prototype.getRowHeight = function () {}

/**
 * 获取鼠标下的数据在属性表上的行数
 * @method twaver.controls.PropertySheet.getRowIndexAt
 * @param {MouseEvent} e 鼠标事件
 * @return {Number} 数据的行数
 */
twaver.controls.PropertySheet.prototype.getRowIndexAt = function (e) {}

/**
 * 设置属性表每行线的宽度，默认为twaver.Defaults.PROPERTYSHEET_ROW_LINE_WIDTH
 * @method twaver.controls.PropertySheet.getRowLineWidth
 * @return {Number} 行之间线的宽度
 */
twaver.controls.PropertySheet.prototype.getRowLineWidth = function () {}

/**
 * 获取属性表排序的函数
 * @method twaver.controls.PropertySheet.getSortFunction
 * @return {Function} 排序的函数
 */
twaver.controls.PropertySheet.prototype.getSortFunction = function () {}

/**
 * 获取属性表的总宽度，默认为twaver.Defaults.PROPERTYSHEET_SUM_WIDTH
 * @method twaver.controls.PropertySheet.getSumWidth
 * @return {Number} 属性表的宽度
 */
twaver.controls.PropertySheet.prototype.getSumWidth = function () {}

/**
 * 获取属性表上指定的属性所对应的数据值
 * @method twaver.controls.PropertySheet.getValue
 * @param {twaver.Data} data 指定的数据对象
 * @param {twaver.Property} property 指定的属性对象
 * @return {Object} 数据的属性值
 */
twaver.controls.PropertySheet.prototype.getValue = function (data, property) {}

/**
 * 获取属性表上可见过滤器，用于过滤某个属性获取某些网元在属性表上是否可见
 * 
 * 
 * 
 * @method twaver.controls.PropertySheet.getVisibleFunction
 * @return {Boolean} true为可见，否则为false
 * @example sheet.setVisibleFunction(function (property) {
 *      return       box.getSelectionModel().getLastData() instanceof twaver.Link;
 * });
 */
twaver.controls.PropertySheet.prototype.getVisibleFunction = function () {}

/**
 * 处理更新
 * @method twaver.controls.PropertySheet.handleChange
 * @param {Event} e 更新事件
 */
twaver.controls.PropertySheet.prototype.handleChange = function (e) {}

/**
 * 当数据容器中数据的属性发生变化时调用此方法，用于更新属性表的显示内容。用户不需要调用此方法，但可以重写此方式实现自己的逻辑
 * @method twaver.controls.PropertySheet.handlePropertyChange
 * @param {Object} e 数据容器的属性更改事件
 */
twaver.controls.PropertySheet.prototype.handlePropertyChange = function (e) {}

/**
 * 当数据容器中数据的选择状态发生变化时调用此方法，用于刷新属性表显示的内容，用户不需要调用此方法，但可以重写此方式实现自己的逻辑
 * @method twaver.controls.PropertySheet.handleSelectionChange
 * @param {Object} e 数据选择状态更改的事件
 */
twaver.controls.PropertySheet.prototype.handleSelectionChange = function (e) {}

/**
 * 无效属性容器，当属性容器中的数据或数据的属性发生变化时，调用此方法。在等待指定的毫秒数后刷新属性表界面，让属性表重画
 * @method twaver.controls.PropertySheet.invalidatePropertyBox
 */
twaver.controls.PropertySheet.prototype.invalidatePropertyBox = function () {}

/**
 * 判断是否需要自动调整属性表的宽度
 * 默认为twaver.Defaults.PROPERTYSHEET_AUTO_ADJUSTABLE
 * @method twaver.controls.PropertySheet.isAutoAdjustable
 * @return {Boolean} true为自动调整，否则为false
 */
twaver.controls.PropertySheet.prototype.isAutoAdjustable = function () {}

/**
 * 判断是否显示类别分组。默认为twaver.Defaults.PROPERTYSHEET_CATEGORIZABLE
 * @method twaver.controls.PropertySheet.isCategorizable
 * @return {Boolean} true为显示，否则为false
 */
twaver.controls.PropertySheet.prototype.isCategorizable = function () {}

/**
 * 获取数据中指定的属性单元格是否可编辑
 * @method twaver.controls.PropertySheet.isCellEditable
 * @param {twaver.Data} data 指定的数据对象
 * @param {twaver.Property} property 指定的属性
 * @return {Boolean} true为可编辑，否则为false
 */
twaver.controls.PropertySheet.prototype.isCellEditable = function (data, property) {}

/**
 * 属性表是否可编辑
 * @method twaver.controls.PropertySheet.isEditable
 * @return {Boolean} true为可编辑，否则为false
 */
twaver.controls.PropertySheet.prototype.isEditable = function () {}

/**
 * 判断指定的类别是否是展开状态
 * @method twaver.controls.PropertySheet.isExpanded
 * @param {String} categoryName 指定的类别名称
 * @return {Boolean} true为展开，否则为false
 */
twaver.controls.PropertySheet.prototype.isExpanded = function (categoryName) {}

/**
 * 判断指定的属性是否可见
 * @method twaver.controls.PropertySheet.isVisible
 * @param {String} property 指定的属性
 * @return {Boolean} true为可见，否则为false
 */
twaver.controls.PropertySheet.prototype.isVisible = function (property) {}

/**
 * 当绘制属性表的类别时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.PropertySheet.onCategoryRendered
 * @param {HTMLDivElement} div 类别对应的Div元素
 * @param {String} categoryName 类别名
 */
twaver.controls.PropertySheet.prototype.onCategoryRendered = function (div, categoryName) {}

/**
 * 当调用绘制属性表的属性名称时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.PropertySheet.onNameRendered
 * @param {Object} params 行信息的对象，它是一个包含view,data,property,value的对象
 */
twaver.controls.PropertySheet.prototype.onNameRendered = function (params) {}

/**
 * 当绘制属性表的属性值时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.PropertySheet.onValueRendered
 * @param {Object} params 行信息的对象，它是一个包含view,data,property,value的对象
 */
twaver.controls.PropertySheet.prototype.onValueRendered = function (params) {}

/**
 * 绘制属性表的类别。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.PropertySheet.renderCategory
 * @param {HTMLDivElement} div 包含指定的类别的DIV
 * @param {String} categoryName 指定的类别名称
 */
twaver.controls.PropertySheet.prototype.renderCategory = function (div, categoryName) {}

/**
 * 绘制属性表的属性名称。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.PropertySheet.renderName
 * @param {Object} params 它是一个包含view,data,property,value和nameRender div的对象
 */
twaver.controls.PropertySheet.prototype.renderName = function (params) {}

/**
 * 绘制属性表的属性值。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.PropertySheet.renderValue
 * @param {Object} params 它是一个包含view,data,property,value和nameRender div的对象
 */
twaver.controls.PropertySheet.prototype.renderValue = function (params) {}

/**
 * 是否需要自动调整属性表的大小，默认为twaver.Defaults.PROPERTYSHEET_AUTO_ADJUSTABLE
 * @method twaver.controls.PropertySheet.setAutoAdjustable
 * @param {Boolean} v 是否自动调整
 */
twaver.controls.PropertySheet.prototype.setAutoAdjustable = function (v) {}

/**
 * 设置属性表所有边框的颜色，默认为 twaver.Defaults.PROPERTYSHEET_BORDER_COLOR
 * @method twaver.controls.PropertySheet.setBorderColor
 * @param {String} v 边框的颜色
 */
twaver.controls.PropertySheet.prototype.setBorderColor = function (v) {}

/**
 * 设置是否显示类别分组。默认为twaver.Defaults.PROPERTYSHEET_CATEGORIZABLE
 * @method twaver.controls.PropertySheet.setCategorizable
 * @param {Boolean} v true为显示，否则为false
 */
twaver.controls.PropertySheet.prototype.setCategorizable = function (v) {}

/**
 * 设置类别合并时的图标，默认为twaver.Defaults.PROPERTYSHEET_COLLAPSE_ICON
 * @method twaver.controls.PropertySheet.setCollapseIcon
 * @param {String} v 合并的图标
 */
twaver.controls.PropertySheet.prototype.setCollapseIcon = function (v) {}

/**
 * 设置属性表上列的线宽，默认为 twaver.Defaults.PROPERTYSHEET_COLUMN_LINE_WIDTH
 * @method twaver.controls.PropertySheet.setColumnLineWidth
 * @param {Number} v 列的线宽
 */
twaver.controls.PropertySheet.prototype.setColumnLineWidth = function (v) {}

/**
 * 设置绑定的数据容器
 * @method twaver.controls.PropertySheet.setDataBox
 * @param {twaver.DataBox} dataBox 指定的数据容器
 */
twaver.controls.PropertySheet.prototype.setDataBox = function (dataBox) {}

/**
 * 设置属性表是否可编辑，默认为twaver.Defaults.PROPERTYSHEET_EDITABLE
 * @method twaver.controls.PropertySheet.setEditable
 * @param {Boolean} v true为可编辑，否则为false
 */
twaver.controls.PropertySheet.prototype.setEditable = function (v) {}

/**
 * 设置属性表的Category展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
 * @method twaver.controls.PropertySheet.setExpandIcon
 * @param {String} v 属性表的Category展开时的图标
 */
twaver.controls.PropertySheet.prototype.setExpandIcon = function (v) {}

/**
 * 设置属性表上父亲和孩子之间的缩进，默认为twaver.Defaults.PROPERTYSHEET_INDENT
 * @method twaver.controls.PropertySheet.setIndent
 * @param {Number} v 属性表上父亲和孩子之间的缩进值
 */
twaver.controls.PropertySheet.prototype.setIndent = function (v) {}

/**
 * 设置属性名的水平对齐方式，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_HORIZONTAL_ALIGN
 * 水平对齐方式的可选值为：
 * left：左对齐。
 * right：右对齐。	
 * center：中间对齐。	
 * justify: 填充对齐，使得一行上每个文字的间隔相同。	
 * inherit：继承于父亲的对齐方式。
 * 更多的对齐方式可以参考CSS中的text-align样式
 * @method twaver.controls.PropertySheet.setPropertyNameHorizontalAlign
 * @param {String} v 属性名的水平对齐方式
 */
twaver.controls.PropertySheet.prototype.setPropertyNameHorizontalAlign = function (v) {}

/**
 * 设置属性名所在的列所占的宽度，默认为twaver.Defaults.PROPERTYSHEET_PROPERTY_NAME_WIDTH
 * @method twaver.controls.PropertySheet.setPropertyNameWidth
 * @param {Number} v 属性名所在的列所占的宽度
 */
twaver.controls.PropertySheet.prototype.setPropertyNameWidth = function (v) {}

/**
 * 设置当鼠标靠近分隔条多少像素时即可以改变列宽。默认为twaver.Defaults.PROPERTYSHEET_RESIZE_TOLERANCE
 * @method twaver.controls.PropertySheet.setResizeTolerance
 * @param {Number} v 当鼠标靠近分隔条多少像素时可以改变列宽的像素数
 */
twaver.controls.PropertySheet.prototype.setResizeTolerance = function (v) {}

/**
 * 设置属性表的行高。默认为 twaver.Defaults.PROPERTYSHEET_ROW_HEIGHT
 * @method twaver.controls.PropertySheet.setRowHeight
 * @param {Number} v 属性表的行高
 */
twaver.controls.PropertySheet.prototype.setRowHeight = function (v) {}

/**
 * 设置属性表每行线的宽度，默认为twaver.Defaults.PROPERTYSHEET_ROW_LINE_WIDTH
 * @method twaver.controls.PropertySheet.setRowLineWidth
 * @param {Number} v 行之间线的宽度
 */
twaver.controls.PropertySheet.prototype.setRowLineWidth = function (v) {}

/**
 * 设置选中属性表上的行的颜色，默认为 twaver.Defaults.SELECT_COLOR
 * @method twaver.controls.PropertySheet.setSelectColor
 * @param {String} v 选中行的颜色
 */
twaver.controls.PropertySheet.prototype.setSelectColor = function (v) {}

/**
 * 设置属性表排序的函数
 * @method twaver.controls.PropertySheet.setSortFunction
 * @param {Object} v 排序的函数
 */
twaver.controls.PropertySheet.prototype.setSortFunction = function (v) {}

/**
 * 设置属性表的总宽度，默认为twaver.Defaults.PROPERTYSHEET_SUM_WIDTH
 * @method twaver.controls.PropertySheet.setSumWidth
 * @param {Number} v 属性表的宽度
 */
twaver.controls.PropertySheet.prototype.setSumWidth = function (v) {}

/**
 * 将属性页上指定的属性值设置到数据对象上，TWaver内部使用
 * @method twaver.controls.PropertySheet.setValue
 * @param {twaver.Data} data 指定的数据
 * @param {twaver.Property} property 指定的属性表上的属性
 * @param {Object} value 属性的值
 */
twaver.controls.PropertySheet.prototype.setValue = function (data, property, value) {}

/**
 * 设置属性表上可见过滤器，用于过滤某个属性获取某些网元在属性表上是否可见
 * 
 * @method twaver.controls.PropertySheet.setVisibleFunction
 * @param {Boolean} v true为可见，否则为false
 * @example sheet.setVisibleFunction(function (property) {
 *      return       box.getSelectionModel().getLastData() instanceof twaver.Link;
 * });
 */
twaver.controls.PropertySheet.prototype.setVisibleFunction = function (v) {}

/**
 * 更新属性表中当前显示的数据，默认显示的是最后一个选中的网元
 * @method twaver.controls.PropertySheet.updateCurrentData
 */
twaver.controls.PropertySheet.prototype.updateCurrentData = function () {}

/**
 * 更新当前的行号
 * @method twaver.controls.PropertySheet.updateCurrentRowIndex
 * @param {Number} newIndex 指定的行号
 */
twaver.controls.PropertySheet.prototype.updateCurrentRowIndex = function (newIndex) {}

/**
 * 当属性表发生变化时，调用此方法，让属性表重画
 * @method twaver.controls.PropertySheet.validateDisplay
 */
twaver.controls.PropertySheet.prototype.validateDisplay = function () {}

/**
 * 当属性表中的数据发生变化时，调用此方法，让属性面板重画
 * @method twaver.controls.PropertySheet.validateModel
 */
twaver.controls.PropertySheet.prototype.validateModel = function () {}


/**
 * 构造函数。
 * 跟随者是一种特殊的网元，它可以设置宿主节点，当宿主节点移动时，跟随者也会移动
 * 
 * @class twaver.Follower
 * @constructor
 * @extends twaver.Node
 * @param {Object} [id] 跟随者ID，用于唯一标识这个跟随者。如果为空，TWaver会按照默认的规则给跟随者ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是跟随者的ID，如果为Object类型，可以传入一个带跟随者属性的对象，比如： var follow = new twaver.Follow({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} }); 
 * @return {twaver.Follower}
 */
twaver.Follower = function (id) {}

twaver.Follower.prototype = new twaver.Node()

/**
 * 触发跟随者变化的相关样式
 * @property IS_INTERESTED_FOLLOWER_STYLE
 * @type Object
 * @static
 */
twaver.Follower.IS_INTERESTED_FOLLOWER_STYLE = function () {}

/**
 * 触发宿主网格变化的相关属性
 * @property IS_INTERESTED_HOST_GRID_PROPERTY
 * @type Object
 * @static
 */
twaver.Follower.IS_INTERESTED_HOST_GRID_PROPERTY = function () {}

/**
 * 获取宿主节点
 * @method twaver.Follower.getHost
 * @return {twaver.Node} 宿主节点
 */
twaver.Follower.prototype.getHost = function () {}

/**
 * 当host上的属性发生变化时，调用此方法，更新这个跟随者
 * @method twaver.Follower.handleHostPropertyChange
 * @param {Object} e 包含peoperty，newValue,oldValue属性的事件对象
 */
twaver.Follower.prototype.handleHostPropertyChange = function (e) {}

/**
 * 判断当前的跟随者是否跟随着指定的网元，即为宿主节点或宿主节点链
 * @method twaver.Follower.isHostOn
 * @param {twaver.Node} node 宿主节点
 * @return {Boolean} 如果指定网元是宿主节点则为true，否则为false
 */
twaver.Follower.prototype.isHostOn = function (node) {}

/**
 * 检查传入的网元是否在当前跟随者链中。比如传入的网元跟着当前跟随者移动，或当前跟随者跟着传入的网元移动
 * @method twaver.Follower.isLoopedHostOn
 * @param {twaver.Follower} follower 跟着移动的网元对象
 * @return {Boolean} 如果跟着移动则为true，否则为false
 */
twaver.Follower.prototype.isLoopedHostOn = function (follower) {}

/**
 * 当host变化时回调此方法，比如setHost
 * @method twaver.Follower.onHostChanged
 * @param {twaver.Node} oldHost 旧host
 * @param {twaver.Node} newHost 新的host
 */
twaver.Follower.prototype.onHostChanged = function (oldHost, newHost) {}

/**
 * 设置宿主节点
 * @method twaver.Follower.setHost
 * @param {twaver.Node} host 宿主节点
 */
twaver.Follower.prototype.setHost = function (host) {}

/**
 * 更新跟随者的属性。TWaver内部使用
 * @method twaver.Follower.updateFollower
 * @param {Object} e 包含peoperty，newValue,oldValue属性的事件对象
 */
twaver.Follower.prototype.updateFollower = function (e) {}

/**
 * 更新跟随者属性的具体实现，TWaver内部使用
 * @method twaver.Follower.updateFollowerImpl
 * @param {Object} e 包含peoperty，newValue,oldValue属性的事件对象
 */
twaver.Follower.prototype.updateFollowerImpl = function (e) {}


/**
 * 子网连线，具有连线和子网的双重特性，它和普通连线的区别在于可以双击进入/退出子网，进入子网时可以展现出这个子网连线下所有的孩子网元
 * @class twaver.LinkSubNetwork
 * @constructor
 * @extends twaver.Link
 * @param {String} [id] 连线子网ID，用于唯一标识子网连线。如果为空，TWaver会按照默认的规则给子网连线ID赋值。ID可以为string，number类型，可以为Node类型，也可以为Object类型。为string或number类型时指的是连线子网的ID，为Node类型时，fromNode和toNode相同，都为ID参数传入的Node对象，如果为Object类型，可以传入一个带连线子网属性的对象，比如： var linkSubNetwork = new twaver.LinkSubNetwork({     name:'linksubnetworkname',     fromNode: twNode,   toNode:bbNode });
 * @return {twaver.LinkSubNetwork} 子网连线本身
 */
twaver.LinkSubNetwork = function (id) {}

twaver.LinkSubNetwork.prototype = new twaver.Link()

/**
 * 是否为子网的标识，默认为true
 * @property ISubNetwork
 * @type Boolean
 */
twaver.LinkSubNetwork.prototype.ISubNetwork = function () {}


/**
 * 用指定的ElementBox构造Network，ElementBox是Network的数据容器，如果为null则twaver内部会创建一个新的ElementBox；而且在构造Network后，也可以用Network#setElementBox方法重新绑定一个新的ElementBox
 * @class twaver.network.Network
 * @constructor
 * @extends twaver.controls.View
 * @param {twaver.ElementBox} [elementBox] 可选，默认为null，和Network关联的数据容器
 * @return {twaver.network.Network}
 * @example var box = new twaver.ElementBox();
 * var tree = new twaver.controls.Tree(box);
 * var network = new twaver.network.Network(box);
 */
twaver.network.Network = function (elementBox) {}

twaver.network.Network.prototype = new twaver.controls.View()

/**
 * 添加网元，并派发createElement类型的事件。CreateElementInteraction、CreateLinkInteraction、CreateShapeLinkInteraction和CreateShapeNodeInteraction会调用此方法
 * @method twaver.network.Network.addElementByInteraction
 * @param {twaver.Element} element 网元
 */
twaver.network.Network.prototype.addElementByInteraction = function (element) {}

/**
 * 创建和指定Element关联的ElementUI，添加网元到和Network关联的ElementBox时会触发调用此方法，用户不需要调用此方法，但可以重载此方法
 * @method twaver.network.Network.createElementUI
 * @param {twaver.Element} element 用于创建和网元关联的ElementUI
 */
twaver.network.Network.prototype.createElementUI = function (element) {}

/**
 * 按layer从上到下的顺序查找第一个满足条件的网元
 * @method twaver.network.Network.findFirstElement
 * @param {Function} matchFunction 过滤器
 * @param {Object} [scope] 过滤器的作用域，可选，默认为null
 * @return {twaver.Element} 返回第一个满足条件的网元
 * @example  network.getView().addEventListener('mousedown', function(e){
 *     var point = network.getLogicalPoint(e);
 *     var node = network.findFirstElement(function(element){
 *         return !!network.getElementUI(element).hitTest(point.x, point.y);
 *     });
 *     console.log(node && node.getName());
 * });
 */
twaver.network.Network.prototype.findFirstElement = function (matchFunction, scope) {}

/**
 * 遍历所有网元视图，可以指定要遍历的层，如果不指定，则遍历所有层
 * @method twaver.network.Network.forEachElementUI
 * @param {Function} callbackFunction 回调函数
 * @param {twaver.Layer} [layer] 要遍历的层，可选，默认为null，表示遍历所有层
 * @param {Object} [scope] 回调函数的作用域，可选，默认为null
 * @example network.forEachElementUI(function(ui){
 *     console.log(ui.getElement().getName());
 * });
 */
twaver.network.Network.prototype.forEachElementUI = function (callbackFunction, layer, scope) {}

/**
 * 获取指定网元的告警冒泡文字内容，默认返回网元的最高新发告警数和别名，如果还有低级别的新发告警则前面带一个+号（比如+3C代表有3个严重告警，并且还有其他低级别新发告警），如果没有新发告警，则返回null
 * @method twaver.network.Network.getAlarmLabel
 * @param {twaver.Element} element 网元
 * @return {String} 返回指定网元的告警冒泡文字内容
 */
twaver.network.Network.prototype.getAlarmLabel = function (element) {}

/**
 * 获取附件div
 * Network的层次关系为：
 * view
 * ->rootDiv
 * ->->bottomDiv
 * ->->layersDiv
 * ->->->layer n
 * ->->->layer ...
 * ->->->default layer
 * ->->attachmentDiv
 * ->->topDiv
 * @method twaver.network.Network.getAttachmentDiv
 * @return {HTMLDivElement} 返回HTML div元素
 */
twaver.network.Network.prototype.getAttachmentDiv = function () {}

/**
 * 获取底层div
 * Network的层次关系为：
 * view
 * ->rootDiv
 * ->->bottomDiv
 * ->->layersDiv
 * ->->->layer n
 * ->->->layer ...
 * ->->->default layer
 * ->->attachmentDiv
 * ->->topDiv
 * @method twaver.network.Network.getBottomDiv
 * @return {HTMLDivElement} 返回HTML div元素
 */
twaver.network.Network.prototype.getBottomDiv = function () {}

/**
 * 获取当前子网，如果是最顶层子网则返回null
 * @method twaver.network.Network.getCurrentSubNetwork
 * @return {twaver.SubNetwork} 返回当前子网，如果是最顶层子网则返回null
 */
twaver.network.Network.prototype.getCurrentSubNetwork = function () {}

/**
 * 获取网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
 * @method twaver.network.Network.getEditableFunction
 * @return {Function} 返回网元可编辑过滤器
 */
twaver.network.Network.prototype.getEditableFunction = function () {}

/**
 * 获取创建连线时连线的颜色，默认值为twaver.Defaults.NETWORK_EDIT_LINE_COLOR
 * @method twaver.network.Network.getEditLineColor
 * @return {String} 返回创建连线时连线的颜色
 */
twaver.network.Network.prototype.getEditLineColor = function () {}

/**
 * 获取创建连线时连线的宽度，默认值为twaver.Defaults.NETWORK_EDIT_LINE_WIDTH
 * @method twaver.network.Network.getEditLineWidth
 * @return {Number} 返回创建连线时连线的宽度
 */
twaver.network.Network.prototype.getEditLineWidth = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的填充色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR
 * @method twaver.network.Network.getEditPointFillColor
 * @return {String} 返回编辑ShapeNode或ShapeLink时控制点的填充色
 */
twaver.network.Network.prototype.getEditPointFillColor = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR
 * @method twaver.network.Network.getEditPointOutlineColor
 * @return {String} 返回编辑ShapeNode或ShapeLink时控制点的边框颜色
 */
twaver.network.Network.prototype.getEditPointOutlineColor = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH
 * @method twaver.network.Network.getEditPointOutlineWidth
 * @return {Number} 返回编辑ShapeNode或ShapeLink时控制点的边框宽度
 */
twaver.network.Network.prototype.getEditPointOutlineWidth = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的大小，默认值为twaver.Defaults.NETWORK_EDIT_POINT_SIZE
 * @method twaver.network.Network.getEditPointSize
 * @return {Number} 返回编辑ShapeNode或ShapeLink时控制点的大小
 */
twaver.network.Network.prototype.getEditPointSize = function () {}

/**
 * 获取指定坐标点或者当前鼠标下的网元
 * @method twaver.network.Network.getElementAt
 * @param {Object} point 可以为坐标点或者鼠标事件
 * @param {Boolean} [selectable] 如果为true，则只返回可以被选择的网元，否则不可选中的网元也可以返回，可选，默认值为true
 * @return {twaver.Element} 返回坐标点或者当前鼠标下的网元
 * @example network.getView().addEventListener('mousedown', function (e) {
 *     var point = network.getLogicalPoint(e);
 *     console.log(network.getElementAt(e));
 *     console.log(network.getElementAt(point));
 * });
 */
twaver.network.Network.prototype.getElementAt = function (point, selectable) {}

/**
 * 获取和Network绑定的ElementBox网元容器
 * @method twaver.network.Network.getElementBox
 * @return {twaver.ElementBox} 返回和Network绑定的ElementBox网元容器
 */
twaver.network.Network.prototype.getElementBox = function () {}

/**
 * 获取矩形区域包含或相交网元
 * @method twaver.network.Network.getElementsAtRect
 * @param {Object} rect 矩形区域
 * @param {Boolean} [intersectMode] 如果为true则只要和矩形区域相交的网元都返回，否则只返回矩形区域包含的网元，可选，默认值为false
 * @param {Function} [filter] 过滤器, 可选, 默认值为null
 * @param {Boolean} [selectable] 网元是否可选择，默认为true
 * @return {twaver.List} 返回矩形区域包含或相交网元
 * @example var elements = network.getElementsAtRect({x:0, y:0, width:100, height:100});
 */
twaver.network.Network.prototype.getElementsAtRect = function (rect, intersectMode, filter, selectable) {}

/**
 * 获取和网元关联的视图对象
 * @method twaver.network.Network.getElementUI
 * @param {twaver.Element} element 网元
 * @return {twaver.network.ElementUI} 返回和网元关联的视图对象
 */
twaver.network.Network.prototype.getElementUI = function (element) {}

/**
 * 获取网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
 * twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
 *     var clazz = element.getElementUIClass();
 *     if (clazz) {
 *          return new clazz(network, element);
 *     }
 *     return null;
 *  }
 * @method twaver.network.Network.getElementUIFunction
 * @return {Function} 返回网元视图生成器
 */
twaver.network.Network.prototype.getElementUIFunction = function () {}

/**
 * 返回包含分组孩子视图区域的集合
 * @method twaver.network.Network.getGroupChildrenRects
 * @param {twaver.Group} group 分组对象
 * @return {twaver.List} 返回包含孩子视图区域的集合
 */
twaver.network.Network.prototype.getGroupChildrenRects = function (group) {}

/**
 * 获取指定网元的图标颜色数组，默认返回element#getStyle('icons.colors')
 * @method twaver.network.Network.getIconsColors
 * @param {twaver.Element} element 网元
 * @return {Array} 返回指定网元的图标颜色数组
 */
twaver.network.Network.prototype.getIconsColors = function (element) {}

/**
 * 获取指定网元的图标名称数组，默认返回element#getStyle('icons.names')
 * @method twaver.network.Network.getIconsNames
 * @param {twaver.Element} element 网元
 * @return {Array} 返回指定网元的图标名称数组
 */
twaver.network.Network.prototype.getIconsNames = function (element) {}

/**
 * 获取交互处理器集合，交互处理器用于设置Network相应哪些键盘和鼠标事件。
 * @method twaver.network.Network.getInteractions
 * @return {Array} 返回交互处理器集合
 */
twaver.network.Network.prototype.getInteractions = function () {}

/**
 * 获取指定网元所在的层，默认为'default'层
 * @method twaver.network.Network.getLayerByElement
 * @param {twaver.Element} element 用于返回层的网元
 * @return {twaver.Layer} 返回指定网元所在的层
 */
twaver.network.Network.prototype.getLayerByElement = function (element) {}

/**
 * 获取指定网元所在的层的div元素
 * @method twaver.network.Network.getLayerDivByElement
 * @param {twaver.Element} element 网元
 * @return {HTMLDivElement} 返回指定网元所在的层的div元素
 */
twaver.network.Network.prototype.getLayerDivByElement = function (element) {}

/**
 * 获取层div元素
 * Network的层次关系为：
 * view
 * ->rootDiv
 * ->->bottomDiv
 * ->->layersDiv
 * ->->->layer n
 * ->->->layer ...
 * ->->->default layer
 * ->->attachmentDiv
 * ->->topDiv
 * @method twaver.network.Network.getLayersDiv
 * @return {HTMLDivElement} 返回层div元素
 */
twaver.network.Network.prototype.getLayersDiv = function () {}

/**
 * 获取延迟移动网元时网元的填充色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR
 * @method twaver.network.Network.getLazyMoveFillColor
 * @return {String} 返回延迟移动网元时网元的填充色
 */
twaver.network.Network.prototype.getLazyMoveFillColor = function () {}

/**
 * 获取延迟移动网元时网元的边框颜色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR
 * @method twaver.network.Network.getLazyMoveOutlineColor
 * @return {String} 返回延迟移动网元时网元的边框颜色
 */
twaver.network.Network.prototype.getLazyMoveOutlineColor = function () {}

/**
 * 获取延迟移动网元时网元的边框宽度，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH
 * @method twaver.network.Network.getLazyMoveOutlineWidth
 * @return {Number} 返回延迟移动网元时网元的边框宽度
 */
twaver.network.Network.prototype.getLazyMoveOutlineWidth = function () {}

/**
 * 获取节点是否可以连线的过滤器
 * @method twaver.network.Network.getLinkableFunction
 * @return {Function} 返回节点是否可以连线的过滤器
 */
twaver.network.Network.prototype.getLinkableFunction = function () {}

/**
 * 获得LINK的流动间隔时间
 * @method twaver.network.Network.getLinkFlowInterval
 * @return {String} 返回Link的流动间隔时间
 */
twaver.network.Network.prototype.getLinkFlowInterval = function () {}

/**
 * 获得Link流动时的偏移量
 * @method twaver.network.Network.getLinkFlowOffset
 * @param {String} link Link实例
 * @return {String} 返回Link流动时的偏移量
 */
twaver.network.Network.prototype.getLinkFlowOffset = function (link) {}

/**
 * 获得Link流动时的步进量
 * @method twaver.network.Network.getLinkFlowStepping
 * @param {String} link Link实例
 * @return {String} 返回Link流动时的步进量
 */
twaver.network.Network.prototype.getLinkFlowStepping = function (link) {}

/**
 * 获取指定连线捆绑后的标签，默认如果指定的连线是捆绑代理，则返回"+(" + link.getBundleCount() + ")"，否则返回null
 * @method twaver.network.Network.getLinkHandlerLabel
 * @param {twaver.Link} link 连线
 * @return {String} 返回指定连线捆绑后的标签
 */
twaver.network.Network.prototype.getLinkHandlerLabel = function (link) {}

/**
 * 获取连线路径生成函数
 * @method twaver.network.Network.getLinkPathFunction
 * @return {Function} 返回连线路径生成函数
 */
twaver.network.Network.prototype.getLinkPathFunction = function () {}

/**
 * 获取网元可移动过滤器
 * @method twaver.network.Network.getMovableFunction
 * @return {Function} 返回网元可移动过滤器
 */
twaver.network.Network.prototype.getMovableFunction = function () {}

/**
 * 获取可移动的被选中的网元集合
 * @method twaver.network.Network.getMovableSelectedElements
 * @return {twaver.List} 返回可移动的被选中的网元集合
 */
twaver.network.Network.prototype.getMovableSelectedElements = function () {}

/**
 * 获取可移动的网元的区域
 * @method twaver.network.Network.getMovableSelectedElementsRect
 * @return {Object} 返回可移动的网元的区域
 */
twaver.network.Network.prototype.getMovableSelectedElementsRect = function () {}

/**
 * 获取相对于网元指定位置的坐标，此方法常用于定位和网元相关的附件的位置
 * @method twaver.network.Network.getPosition
 * @param {String} position 相对位置
 * @param {Object} obj 获取位置时的相对网元或网元视图，类型为twaver.Element或者twaver.network.ElementUI
 * @param {Object} tarSize 目标的大小，类型为包含width和height属性的Object对象
 * @param {String} xoffset x坐标偏移量
 * @param {String} yoffset y坐标偏移量
 * @return {Object} 返回包含x坐标和y坐标的Object对象
 * @example var node = new twaver.Node({name:'Node', location: {x:100, y:100}});
 * box.add(node);
 * var position = network.getPosition('top.top', node, {width:10, height:10}, 0, 0);
 * console.log(position.x, position.y);
 * // output: 110 90
 * 
 * position可以为：
 * hotspot
 * from
 * to
 * topleft.topleft
 * topleft.topright
 * top.top
 * topright.topleft
 * topright.topright
 * topleft
 * top
 * topright
 * topleft.bottomleft
 * topleft.bottomright
 * top.bottom
 * topright.bottomleft
 * topright.bottomright
 * left.left
 * left
 * left.right
 * center
 * right.left
 * right
 * right.right
 * bottomleft.topleft
 * bottomleft.topright
 * bottom.top
 * bottomright.topleft
 * bottomright.topright
 * bottomleft
 * bottom
 * bottomright
 * bottomleft.bottomleft
 * bottomleft.bottomright
 * bottom.bottom
 * bottomright.bottomleft
 * bottomright.bottomright
 */
twaver.network.Network.prototype.getPosition = function (position, obj, tarSize, xoffset, yoffset) {}

/**
 * 获取框选网元过滤器
 * @method twaver.network.Network.getRectSelectFilter
 * @return {Function} 返回框选网元过滤器
 */
twaver.network.Network.prototype.getRectSelectFilter = function () {}

/**
 * 获取延迟改变网元大小时网元边框的颜色，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_COLOR
 * @method twaver.network.Network.getResizeLineColor
 * @return {String} 返回延迟改变网元大小时网元边框的颜色
 */
twaver.network.Network.prototype.getResizeLineColor = function () {}

/**
 * 获取延迟改变网元大小时网元边框的宽度，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH
 * @method twaver.network.Network.getResizeLineWidth
 * @return {Number} 返回延迟改变网元大小时网元边框的宽度
 */
twaver.network.Network.prototype.getResizeLineWidth = function () {}

/**
 * 获取改变网元大小时控制点的填充色，默认为twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR
 * @method twaver.network.Network.getResizePointFillColor
 * @return {String} 返回改变网元大小时控制点的填充色
 */
twaver.network.Network.prototype.getResizePointFillColor = function () {}

/**
 * 获取改变网元大小时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR
 * @method twaver.network.Network.getResizePointOutlineColor
 * @return {String} 返回改变网元大小时控制点的边框颜色
 */
twaver.network.Network.prototype.getResizePointOutlineColor = function () {}

/**
 * 获取改变网元大小时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH
 * @method twaver.network.Network.getResizePointOutlineWidth
 * @return {Number} 返回改变网元大小时控制点的边框宽度
 */
twaver.network.Network.prototype.getResizePointOutlineWidth = function () {}

/**
 * 获取更改网元大小的控制点的大小
 * @method twaver.network.Network.getResizePointSize
 * @return {Number} 返回更改网元大小的控制点的大小
 */
twaver.network.Network.prototype.getResizePointSize = function () {}

/**
 * 获取网元是否可旋转过滤器
 * @method twaver.network.Network.getRotatableFunction
 * @return {Function} 网元是否可旋转过滤器
 */
twaver.network.Network.prototype.getRotatableFunction = function () {}

/**
 * 获取旋转控制点的填充色
 * @method twaver.network.Network.getRotatePointFillColor
 * @return {String} 返回旋转控制点的填充色
 */
twaver.network.Network.prototype.getRotatePointFillColor = function () {}

/**
 * 获取旋转控制点的偏移量
 * @method twaver.network.Network.getRotatePointOffset
 * @return {Number} 返回旋转控制点的偏移量
 */
twaver.network.Network.prototype.getRotatePointOffset = function () {}

/**
 * 获取旋转控制点的边框颜色
 * @method twaver.network.Network.getRotatePointOutlineColor
 * @return {String} 返回旋转控制点的边框颜色
 */
twaver.network.Network.prototype.getRotatePointOutlineColor = function () {}

/**
 * 获取旋转控制点的边框宽度
 * @method twaver.network.Network.getRotatePointOutlineWidth
 * @return {Number} 返回旋转控制点的边框宽度
 */
twaver.network.Network.prototype.getRotatePointOutlineWidth = function () {}

/**
 * 返回旋转控制点的大小
 * @method twaver.network.Network.getRotatePointSize
 * @return {Number} 旋转控制点的大小
 */
twaver.network.Network.prototype.getRotatePointSize = function () {}

/**
 * 获取旋转刻度填充色
 * @method twaver.network.Network.getRotateScaleFillColor
 * @return {String} 返回旋转刻度填充色
 */
twaver.network.Network.prototype.getRotateScaleFillColor = function () {}

/**
 * 获取旋转刻度文字字体颜色
 * @method twaver.network.Network.getRotateScaleFontColor
 * @return {String} 旋转刻度文字字体颜色
 */
twaver.network.Network.prototype.getRotateScaleFontColor = function () {}

/**
 * 获取旋转刻度高度
 * @method twaver.network.Network.getRotateScaleHeight
 * @return {Number} 旋转刻度高度
 */
twaver.network.Network.prototype.getRotateScaleHeight = function () {}

/**
 * 获取旋转刻度宽度
 * @method twaver.network.Network.getRotateScaleWidth
 * @return {Number} 返回旋转刻度宽度
 */
twaver.network.Network.prototype.getRotateScaleWidth = function () {}

/**
 * 获取框选时矩形框的填充色，默认值为twaver.Defaults.NETWORK_SELECT_FILL_COLOR
 * @method twaver.network.Network.getSelectFillColor
 * @return {String} 返回框选时矩形框的填充色
 */
twaver.network.Network.prototype.getSelectFillColor = function () {}

/**
 * 获得选择时容差像素数
 * @method twaver.network.Network.getSelectionTolerance
 * @return {String} 返回选择容差像素数
 */
twaver.network.Network.prototype.getSelectionTolerance = function () {}

/**
 * 获取选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @method twaver.network.Network.getSelectMode
 * @return {String} 返回选择模式
 */
twaver.network.Network.prototype.getSelectMode = function () {}

/**
 * 获取框选时矩形框的边框颜色，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR
 * @method twaver.network.Network.getSelectOutlineColor
 * @return {String} 返回框选时矩形框的边框颜色
 */
twaver.network.Network.prototype.getSelectOutlineColor = function () {}

/**
 * 获取框选时矩形框的边框宽度，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH
 * @method twaver.network.Network.getSelectOutlineWidth
 * @return {String} 返回框选时矩形框的边框宽度
 */
twaver.network.Network.prototype.getSelectOutlineWidth = function () {}

/**
 * 获得指定网元选中时的阴影颜色，如果网元的style属性shadow.color不为空，则返回style属性shadow.color的值，否则返回style属性select.color的值
 * @method twaver.network.Network.getShadowColor
 * @param {twaver.Element} element 网元
 * @return {String} 返回指定网元选中时的阴影颜色
 */
twaver.network.Network.prototype.getShadowColor = function (element) {}

/**
 * 获取顶层div元素
 * Network的层次关系为：
 * view
 * ->rootDiv
 * ->->bottomDiv
 * ->->layersDiv
 * ->->->layer n
 * ->->->layer ...
 * ->->->default layer
 * ->->attachmentDiv
 * ->->topDiv
 * @method twaver.network.Network.getTopDiv
 * @return {HTMLDivElement} 返回顶层div元素
 */
twaver.network.Network.prototype.getTopDiv = function () {}

/**
 * 获取Network可见网元所占的区域
 * @method twaver.network.Network.getViewRect
 * @return {Object} 返回包含x、y、width和height属性的Object对象
 */
twaver.network.Network.prototype.getViewRect = function () {}

/**
 * 获取网元可见过滤器，Network通过可见过滤器判断每个网元是否可见
 * @method twaver.network.Network.getVisibleFunction
 * @return {Function} 返回网元可见过滤器
 */
twaver.network.Network.prototype.getVisibleFunction = function () {}

/**
 * ElementBox里网元添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleElementBoxChange
 * @param {Object} e ElementBox里网元变化事件，包含kind和data属性
 */
twaver.network.Network.prototype.handleElementBoxChange = function (e) {}

/**
 * ElementBox里网元的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleElementBoxPropertyChange
 * @param {Object} e ElementBox里网元属性变化事件，包含property、oldValue和newValue属性
 */
twaver.network.Network.prototype.handleElementBoxPropertyChange = function (e) {}

/**
 * ElementBox的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleElementPropertyChange
 * @param {Object} e ElementBox属性变化事件，包含property、oldValue和newValue属性
 */
twaver.network.Network.prototype.handleElementPropertyChange = function (e) {}

/**
 * ElementBox里网元的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleIndexChange
 * @param {Object} e 网元顺序变化事件，包含element、oldIndex和newIndex属性
 */
twaver.network.Network.prototype.handleIndexChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleLayerBoxChange
 * @param {Object} e LayerBox里Layer变化事件，包含kind和data属性
 */
twaver.network.Network.prototype.handleLayerBoxChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer层次变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleLayerHierarchyChange
 * @param {Object} e LayerBox里Layer层次变化事件，包含kind和data属性
 */
twaver.network.Network.prototype.handleLayerHierarchyChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer属性变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleLayerPropertyChange
 * @param {Object} e LayerBox里Layer属性变化事件，包含kind和data属性
 */
twaver.network.Network.prototype.handleLayerPropertyChange = function (e) {}

/**
 * SelectionModel选择变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.network.Network.handleSelectionChange
 * @param {Object} e 选择变化事件，包含kind和data属性
 */
twaver.network.Network.prototype.handleSelectionChange = function (e) {}

/**
 * 获取是否包含编辑交互处理器
 * @method twaver.network.Network.hasEditInteraction
 * @return {Boolean} 如果包含编辑交互处理器，则返回ture，否则返回false
 */
twaver.network.Network.prototype.hasEditInteraction = function () {}

/**
 * 判断是否包含选中的并且可移动的网元
 * @method twaver.network.Network.hasMovableSelectedElements
 * @return {Boolean} 如果包含选中的并且可移动的网元，则返回true，否则返回false
 */
twaver.network.Network.prototype.hasMovableSelectedElements = function () {}

/**
 * 获取鼠标下或指定坐标下的网元视图对象或附件对象
 * @method twaver.network.Network.hitTest
 * @param {Object} point 鼠标事件或坐标点
 * @return {Object} 返回鼠标下或指定坐标下的网元视图对象或附件对象
 */
twaver.network.Network.prototype.hitTest = function (point) {}

/**
 * 使指定连线的捆绑连线无效
 * @method twaver.network.Network.invalidateBundleLink
 * @param {twaver.Link} element 连线
 */
twaver.network.Network.prototype.invalidateBundleLink = function (element) {}

/**
 * 使网元顺序无效
 * @method twaver.network.Network.invalidateElementIndex
 */
twaver.network.Network.prototype.invalidateElementIndex = function () {}

/**
 * 使指定网元的视图无效
 * @method twaver.network.Network.invalidateElementUI
 * @param {twaver.Element} element 网元
 * @param {Boolean} [checkAttachments] 如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false
 */
twaver.network.Network.prototype.invalidateElementUI = function (element, checkAttachments) {}

/**
 * 使所有网元的视图无效
 * @method twaver.network.Network.invalidateElementUIs
 * @param {Boolean} [checkAttachments] 如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false
 */
twaver.network.Network.prototype.invalidateElementUIs = function (checkAttachments) {}

/**
 * 无效所有网元的可见性，当设置了visibleFunction，并且外部条件变动后，可以用此方法强制刷新所有网元是否可见
 * @method twaver.network.Network.invalidateElementVisibility
 */
twaver.network.Network.prototype.invalidateElementVisibility = function () {}

/**
 * 无效所有选中网元的视图
 * @method twaver.network.Network.invalidateSelectedElementUIs
 * @param {Boolean} [checkAttachments] 如果为true，则无效网元的同时无效附件，否则不无效附件，可选，默认为false
 */
twaver.network.Network.prototype.invalidateSelectedElementUIs = function (checkAttachments) {}

/**
 * 获取是否能双击进入空的子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK
 * @method twaver.network.Network.isDoubleClickToEmptySubNetwork
 * @return {Boolean} 返回是否能双击进入空的子网
 */
twaver.network.Network.prototype.isDoubleClickToEmptySubNetwork = function () {}

/**
 * 获取是否双击展开组，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND
 * @method twaver.network.Network.isDoubleClickToGroupExpand
 * @return {Boolean} 返回是否双击展开组
 */
twaver.network.Network.prototype.isDoubleClickToGroupExpand = function () {}

/**
 * 获取是否双击捆绑连线，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE
 * @method twaver.network.Network.isDoubleClickToLinkBundle
 * @return {Boolean} 返回是否双击捆绑连线
 */
twaver.network.Network.prototype.isDoubleClickToLinkBundle = function () {}

/**
 * 获取是否双击子网时进入子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK
 * @method twaver.network.Network.isDoubleClickToSubNetwork
 * @return {Boolean} 返回是否双击子网时进入子网
 */
twaver.network.Network.prototype.isDoubleClickToSubNetwork = function () {}

/**
 * 获取是否双击背景返回上一层子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK
 * @method twaver.network.Network.isDoubleClickToUpSubNetwork
 * @return {Boolean} 返回是否双击背景返回上一层子网
 */
twaver.network.Network.prototype.isDoubleClickToUpSubNetwork = function () {}

/**
 * 判断指定网元是否可编辑，如果editableFunction返回false，则不可编辑；如果网元所在的层不可编辑，则不可编辑；否则可编辑
 * @method twaver.network.Network.isEditable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元可编辑，则返回true，否则返回false
 */
twaver.network.Network.prototype.isEditable = function (element) {}

/**
 * 获取是否正在编辑网元
 * @method twaver.network.Network.isEditingElement
 * @return {Boolean} 返回是否正在编辑网元
 */
twaver.network.Network.prototype.isEditingElement = function () {}

/**
 * 获取是否允许用键盘Delete键删除选中网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED
 * @method twaver.network.Network.isKeyboardRemoveEnabled
 * @return {Boolean} 返回是否允许用键盘Delete键删除选中网元
 */
twaver.network.Network.prototype.isKeyboardRemoveEnabled = function () {}

/**
 * 获取是否允许用键盘Ctrl+A键选择所有网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED
 * @method twaver.network.Network.isKeyboardSelectEnabled
 * @return {Boolean} 返回是否允许用键盘Ctrl+A键选择所有网元
 */
twaver.network.Network.prototype.isKeyboardSelectEnabled = function () {}

/**
 * 获取延迟移动网元时是否有动画效果，默认值为twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE
 * @method twaver.network.Network.isLazyMoveAnimate
 * @return {Boolean} 返回延迟移动网元时是否有动画效果
 */
twaver.network.Network.prototype.isLazyMoveAnimate = function () {}

/**
 * 获取延迟移动网元时轮廓是否填充，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL
 * @method twaver.network.Network.isLazyMoveFill
 * @return {Boolean} 返回延迟移动网元时轮廓是否填充
 */
twaver.network.Network.prototype.isLazyMoveFill = function () {}

/**
 * 获取是否限制网元坐标不能为负
 * @method twaver.network.Network.isLimitElementInPositiveLocation
 * @return {Boolean} 返回是否限制网元坐标不能为负
 */
twaver.network.Network.prototype.isLimitElementInPositiveLocation = function () {}

/**
 * 获取指定节点是否可以创建连线
 * @method twaver.network.Network.isLinkable
 * @param {twaver.Node} node 节点
 * @return {Boolean} 返回指定节点是否可以创建连线
 */
twaver.network.Network.prototype.isLinkable = function (node) {}

/**
 * 返回是否启用流动Link，默认是false
 * @method twaver.network.Network.isLinkFlowEnabled
 * @return {String} 是否启用流动Link
 */
twaver.network.Network.prototype.isLinkFlowEnabled = function () {}

/**
 * 获取网元被选择时是否让其可见，默认值为twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.network.Network.isMakeVisibleOnSelected
 * @return {Boolean} 返回网元被选择时是否让其可见
 */
twaver.network.Network.prototype.isMakeVisibleOnSelected = function () {}

/**
 * 判断指定网元是否可移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
 * @method twaver.network.Network.isMovable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元可移动，则返回true，否则返回false
 */
twaver.network.Network.prototype.isMovable = function (element) {}

/**
 * 获取是否正在移动网元
 * @method twaver.network.Network.isMovingElement
 * @return {Boolean} 返回是否正在移动网元
 */
twaver.network.Network.prototype.isMovingElement = function () {}

/**
 * 获取不是代理的连线是否可见，默认值为twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE
 * @method twaver.network.Network.isNoAgentLinkVisible
 * @return {Boolean} 返回不是代理的连线是否可见
 */
twaver.network.Network.prototype.isNoAgentLinkVisible = function () {}

/**
 * 获取是否允许框选网元
 * @method twaver.network.Network.isRectSelectEnabled
 * @return {Boolean} 如果允许框选网元, 返回true, 否则返回false
 */
twaver.network.Network.prototype.isRectSelectEnabled = function () {}

/**
 * 获取不可见的网元视图是否被删除，默认值为twaver.Defaults.NETWORK_REMOVE_ELEMENTUI_ON_INVISIBLE
 * @method twaver.network.Network.isRemoveElementUIOnInvisible
 * @return {Boolean} 返回不可见的网元视图是否被删除
 */
twaver.network.Network.prototype.isRemoveElementUIOnInvisible = function () {}

/**
 * 获取改变网元大小时是否有动画效果，默认值为twaver.Defaults.NETWORK_RESIZE_ANIMATE
 * @method twaver.network.Network.isResizeAnimate
 * @return {Boolean} 返回改变网元大小时是否有动画效果
 */
twaver.network.Network.prototype.isResizeAnimate = function () {}

/**
 * 获取指定网元是否可旋转
 * @method twaver.network.Network.isRotatable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 返回指定网元是否可旋转
 */
twaver.network.Network.prototype.isRotatable = function (element) {}

/**
 * 获取是否正在旋转网元
 * @method twaver.network.Network.isRotatingElement
 * @return {Boolean} 返回是否正在旋转网元
 */
twaver.network.Network.prototype.isRotatingElement = function () {}

/**
 * 获取是否正在选择网元
 * @method twaver.network.Network.isSelectingElement
 * @return {Boolean} 返回是否正在选择网元
 */
twaver.network.Network.prototype.isSelectingElement = function () {}

/**
 * 获取网元被选中后是否置顶，默认值为twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED
 * @method twaver.network.Network.isSendToTopOnSelected
 * @return {Boolean} 返回网元被选中后是否置顶
 */
twaver.network.Network.prototype.isSendToTopOnSelected = function () {}

/**
 * 获取是否显示旋转网元时的刻度
 * @method twaver.network.Network.isShowRotateScale
 * @return {Boolean} 返回是否显示旋转网元时的刻度
 */
twaver.network.Network.prototype.isShowRotateScale = function () {}

/**
 * 获取进入下一层子网或返回上一层子网时是否有动画效果，默认值为twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE
 * @method twaver.network.Network.isSubNetworkAnimate
 * @return {Boolean} 返回进入下一层子网或返回上一层子网时是否有动画效果
 */
twaver.network.Network.prototype.isSubNetworkAnimate = function () {}

/**
 * 获取是否让提示信息生效，默认值为twaver.Defaults.NETWORK_TOOLTIP_ENABLED
 * @method twaver.network.Network.isToolTipEnabled
 * @return {Boolean} 返回是否让提示信息生效
 */
twaver.network.Network.prototype.isToolTipEnabled = function () {}

/**
 * 获取指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
 * @method twaver.network.Network.isVisible
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果指定网元可见，则返回true，否则返回false
 */
twaver.network.Network.prototype.isVisible = function (element) {}

/**
 * 滚动水平和垂直滚动条，让指定网元可见
 * @method twaver.network.Network.makeVisible
 * @param {twaver.Element} element 网元
 */
twaver.network.Network.prototype.makeVisible = function (element) {}

/**
 * 将选中的网元移动指定偏移量，移动时可以设置是否有动画效果，而且能指定移动结束后执行的动作
 * @method twaver.network.Network.moveSelectedElements
 * @param {Number} xoffset x坐标偏移量
 * @param {Number} yoffset y坐标偏移量
 * @param {Boolean} [animate] 移动时是否有动画效果，可选，默认为false
 * @param {Function} [finishFunction] 回调函数，移动结束后执行的动作，可选，默认为null
 */
twaver.network.Network.prototype.moveSelectedElements = function (xoffset, yoffset, animate, finishFunction) {}

/**
 * shareSelectionModel属性变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
 * @method twaver.network.Network.onShareSelectionModelChanged
 */
twaver.network.Network.prototype.onShareSelectionModelChanged = function () {}

/**
 * 将指定网元置顶，显示在所有网元的最上面，遮盖其他网元，但也受网元所在的层的制约，还有父子关系以及跟随关系的制约；如果sendToTopOnSelected为true，则点击网元时会调用此方法
 * @method twaver.network.Network.sendToTop
 * @param {twaver.Element} element 网元
 */
twaver.network.Network.prototype.sendToTop = function (element) {}

/**
 * 设置当前交互模式为创建网元模式，在Network上单击时，会创建指定类型的网元
 * @method twaver.network.Network.setCreateElementInteractions
 * @param {Function} [type] 网元类型，可选，默认值为twaver.Node
 */
twaver.network.Network.prototype.setCreateElementInteractions = function (type) {}

/**
 * 设置当前交互模式为创建连线模式，在Network上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点
 * @method twaver.network.Network.setCreateLinkInteractions
 * @param {Function} [type] 连线类型，可选，默认值为twaver.Link
 */
twaver.network.Network.prototype.setCreateLinkInteractions = function (type) {}

/**
 * 设置当前交互模式为创建折线模式，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点
 * @method twaver.network.Network.setCreateShapeLinkInteractions
 * @param {Function} [type] 折线类型，可选，默认值为twaver.ShapeLink
 */
twaver.network.Network.prototype.setCreateShapeLinkInteractions = function (type) {}

/**
 * 设置当前交互模式为创建多边形模式，在Network上多次点击不同位置设置多边形的points属性，最后双击结束
 * @method twaver.network.Network.setCreateShapeNodeInteractions
 * @param {Function} [type] 多边形类型，可选，默认值为twaver.ShapeNode
 */
twaver.network.Network.prototype.setCreateShapeNodeInteractions = function (type) {}

/**
 * 将当前子网设置为指定子网，并且可以设置是否有动画效果，而且能指定设置当前子网结束后执行的动作
 * @method twaver.network.Network.setCurrentSubNetwork
 * @param {twaver.SubNetwork} currentSubNetwork 子网
 * @param {Boolean} [animate] 是否有动画效果
 * @param {Function} [finishFunction] 设置当前子网结束后的回调函数，可选，默认为null
 */
twaver.network.Network.prototype.setCurrentSubNetwork = function (currentSubNetwork, animate, finishFunction) {}

/**
 * 设置交互模式为默认交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.network.Network.setDefaultInteractions
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选、默认为false
 */
twaver.network.Network.prototype.setDefaultInteractions = function (lazyMode) {}

/**
 * 设置是否能双击进入空的子网
 * @method twaver.network.Network.setDoubleClickToEmptySubNetwork
 * @param {Boolean} v 是否能双击进入空的子网
 */
twaver.network.Network.prototype.setDoubleClickToEmptySubNetwork = function (v) {}

/**
 * 设置是否双击展开组
 * @method twaver.network.Network.setDoubleClickToGroupExpand
 * @param {Boolean} v 是否能双击展开组
 */
twaver.network.Network.prototype.setDoubleClickToGroupExpand = function (v) {}

/**
 * 设置是否双击捆绑连线
 * @method twaver.network.Network.setDoubleClickToLinkBundle
 * @param {Boolean} v 是否双击捆绑连线
 */
twaver.network.Network.prototype.setDoubleClickToLinkBundle = function (v) {}

/**
 * 设置是否双击子网时进入子网
 * @method twaver.network.Network.setDoubleClickToSubNetwork
 * @param {Boolean} v 是否双击子网时进入子网
 */
twaver.network.Network.prototype.setDoubleClickToSubNetwork = function (v) {}

/**
 * 设置是否双击背景返回上一层子网
 * @method twaver.network.Network.setDoubleClickToUpSubNetwork
 * @param {Boolean} v 是否双击背景返回上一层子网
 */
twaver.network.Network.prototype.setDoubleClickToUpSubNetwork = function (v) {}

/**
 * 设置网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
 * @method twaver.network.Network.setEditableFunction
 * @param {Function} value 网元可编辑过滤器
 * @example network.setEditInteractions();
 * network.setEditableFunction(function (element) {
 *     return element.getName() === 'From';
 * });
 */
twaver.network.Network.prototype.setEditableFunction = function (value) {}

/**
 * 设置是否正在编辑网元
 * @method twaver.network.Network.setEditingElement
 * @param {Boolean} v 是否正在编辑网元
 */
twaver.network.Network.prototype.setEditingElement = function (v) {}

/**
 * 设置交互模式为编辑交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、编辑处理器EditInteraction（处理改变网元大小）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.network.Network.setEditInteractions
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选、默认为false
 */
twaver.network.Network.prototype.setEditInteractions = function (lazyMode) {}

/**
 * 设置创建连线时连线的颜色
 * @method twaver.network.Network.setEditLineColor
 * @param {String} v 创建连线时连线的颜色
 */
twaver.network.Network.prototype.setEditLineColor = function (v) {}

/**
 * 设置创建连线时连线的宽度
 * @method twaver.network.Network.setEditLineWidth
 * @param {Number} v 创建连线时连线的宽度
 */
twaver.network.Network.prototype.setEditLineWidth = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的填充色
 * @method twaver.network.Network.setEditPointFillColor
 * @param {String} v 编辑ShapeNode或ShapeLink时控制点的填充色
 */
twaver.network.Network.prototype.setEditPointFillColor = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的边框颜色
 * @method twaver.network.Network.setEditPointOutlineColor
 * @param {String} v 编辑ShapeNode或ShapeLink时控制点的边框颜色
 */
twaver.network.Network.prototype.setEditPointOutlineColor = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的边框宽度
 * @method twaver.network.Network.setEditPointOutlineWidth
 * @param {Number} v 编辑ShapeNode或ShapeLink时控制点的边框宽度
 */
twaver.network.Network.prototype.setEditPointOutlineWidth = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的大小
 * @method twaver.network.Network.setEditPointSize
 * @param {Number} v 编辑ShapeNode或ShapeLink时控制点的大小
 */
twaver.network.Network.prototype.setEditPointSize = function (v) {}

/**
 * 设置和Network绑定的ElementBox网元容器，Network构造时可以设置ElementBox（内部创建一个新的ElementBox），也可以构造完后再设置ElementBox
 * @method twaver.network.Network.setElementBox
 * @param {twaver.ElementBox} elementBox 网元容器
 */
twaver.network.Network.prototype.setElementBox = function (elementBox) {}

/**
 * 设置网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
 * twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
 *     var clazz = element.getElementUIClass();
 *     if (clazz) {
 *          return new clazz(network, element);
 *     }
 *     return null;
 *  }
 * @method twaver.network.Network.setElementUIFunction
 * @param {Function} value 网元视图生成器
 */
twaver.network.Network.prototype.setElementUIFunction = function (value) {}

/**
 * 设置是否包含编辑交互处理器
 * @method twaver.network.Network.setHasEditInteraction
 * @param {Boolean} value 是否包含编辑交互处理器
 */
twaver.network.Network.prototype.setHasEditInteraction = function (value) {}

/**
 * 设置交互处理器，交互处理器用于设置Network相应哪些键盘和鼠标事件。
 * @method twaver.network.Network.setInteractions
 * @param {twaver.List} interactions 包含交互处理器的集合
 * @example network.setInteractions([
 *     new twaver.network.interaction.SelectInteraction(network),
 *     new twaver.network.interaction.EditInteraction(network),
 *     new twaver.network.interaction.MoveInteraction(network),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.network.Network.prototype.setInteractions = function (interactions) {}

/**
 * 设置是否允许用键盘Delete键删除选中网元
 * @method twaver.network.Network.setKeyboardRemoveEnabled
 * @param {Boolean} v 是否允许用键盘Delete键删除选中网元
 */
twaver.network.Network.prototype.setKeyboardRemoveEnabled = function (v) {}

/**
 * 设置是否允许用键盘Ctrl+A键选择所有网元
 * @method twaver.network.Network.setKeyboardSelectEnabled
 * @param {Boolean} v 是否允许用键盘Ctrl+A键选择所有网元
 */
twaver.network.Network.prototype.setKeyboardSelectEnabled = function (v) {}

/**
 * 设置延迟移动网元时是否有动画效果
 * @method twaver.network.Network.setLazyMoveAnimate
 * @param {Boolean} v 延迟移动网元时是否有动画效果
 */
twaver.network.Network.prototype.setLazyMoveAnimate = function (v) {}

/**
 * 设置延迟移动网元时轮廓是否填充
 * @method twaver.network.Network.setLazyMoveFill
 * @param {Boolean} v 延迟移动网元时轮廓是否填充
 */
twaver.network.Network.prototype.setLazyMoveFill = function (v) {}

/**
 * 设置延迟移动网元时网元的填充色
 * @method twaver.network.Network.setLazyMoveFillColor
 * @param {String} v 延迟移动网元时网元的填充色
 */
twaver.network.Network.prototype.setLazyMoveFillColor = function (v) {}

/**
 * 设置延迟移动网元时网元的填充色
 * @method twaver.network.Network.setLazyMoveOutlineColor
 * @param {String} v 延迟移动网元时网元的填充色
 */
twaver.network.Network.prototype.setLazyMoveOutlineColor = function (v) {}

/**
 * 设置延迟移动网元时网元的边框宽度
 * @method twaver.network.Network.setLazyMoveOutlineWidth
 * @param {Number} v 延迟移动网元时网元的边框宽度
 */
twaver.network.Network.prototype.setLazyMoveOutlineWidth = function (v) {}

/**
 * 设置是否限制网元坐标不能为负
 * @method twaver.network.Network.setLimitElementInPositiveLocation
 * @param {Boolean} v 是否限制网元坐标不能为负
 */
twaver.network.Network.prototype.setLimitElementInPositiveLocation = function (v) {}

/**
 * 设置节点是否可以连线的过滤器
 * @method twaver.network.Network.setLinkableFunction
 * @param {Function} value 节点是否可以连线的过滤器
 */
twaver.network.Network.prototype.setLinkableFunction = function (value) {}

/**
 * 设置是否启用流动Link，默认是false
 * @method twaver.network.Network.setLinkFlowEnabled
 * @param {String} value 是否启用流动Link
 */
twaver.network.Network.prototype.setLinkFlowEnabled = function (value) {}

/**
 * 设置LINK的流动间隔时间
 * @method twaver.network.Network.setLinkFlowInterval
 * @param {String} value Link的流动间隔时间(毫秒)
 */
twaver.network.Network.prototype.setLinkFlowInterval = function (value) {}

/**
 * 设置连线路径生成函数function (linkUI, defaultPoints)
 * @method twaver.network.Network.setLinkPathFunction
 * @param {Function} value 连线路径生成函数
 */
twaver.network.Network.prototype.setLinkPathFunction = function (value) {}

/**
 * 设置交互模式为放大镜模式
 * @method twaver.network.Network.setMagnifyInteractions
 */
twaver.network.Network.prototype.setMagnifyInteractions = function () {}

/**
 * 设置网元被选择时是否让其可见
 * @method twaver.network.Network.setMakeVisibleOnSelected
 * @param {Boolean} v 网元被选择时是否让其可见
 */
twaver.network.Network.prototype.setMakeVisibleOnSelected = function (v) {}

/**
 * 设置网元可移动过滤器，用于判断网元是否可以移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
 * @method twaver.network.Network.setMovableFunction
 * @param {Function} v 网元可移动过滤器
 * @example network.setMovableFunction(function (element) {
 *     return element.getName() === 'From';
 * });
 */
twaver.network.Network.prototype.setMovableFunction = function (v) {}

/**
 * 设置是否正在移动网元
 * @method twaver.network.Network.setMovingElement
 * @param {Boolean} v 是否正在移动网元
 */
twaver.network.Network.prototype.setMovingElement = function (v) {}

/**
 * 设置交互模式为微软触摸交互模式
 * @method twaver.network.Network.setMSTouchInteractions
 */
twaver.network.Network.prototype.setMSTouchInteractions = function () {}

/**
 * 设置不是代理的连线是否可见
 * @method twaver.network.Network.setNoAgentLinkVisible
 * @param {Boolean} v 不是代理的连线是否可见
 */
twaver.network.Network.prototype.setNoAgentLinkVisible = function (v) {}

/**
 * 设置交互模式为手抓图交互模式，包含手抓图交互处理器PanInteraction（处理垂直或水平滚动滚动条）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.network.Network.setPanInteractions
 */
twaver.network.Network.prototype.setPanInteractions = function () {}

/**
 * 设置是否允许框选网元
 * @method twaver.network.Network.setRectSelectEnabled
 * @param {Boolean} v 是否允许框选网元
 */
twaver.network.Network.prototype.setRectSelectEnabled = function (v) {}

/**
 * 设置框选网元过滤器
 * @method twaver.network.Network.setRectSelectFilter
 * @param {Function} v 框选网元过滤器
 */
twaver.network.Network.prototype.setRectSelectFilter = function (v) {}

/**
 * 设置不可见的网元视图是否被删除
 * @method twaver.network.Network.setRemoveElementUIOnInvisible
 * @param {Boolean} value 不可见的网元视图是否被删除
 */
twaver.network.Network.prototype.setRemoveElementUIOnInvisible = function (value) {}

/**
 * 设置改变网元大小时是否有动画效果
 * @method twaver.network.Network.setResizeAnimate
 * @param {Boolean} v 改变网元大小时是否有动画效果
 */
twaver.network.Network.prototype.setResizeAnimate = function (v) {}

/**
 * 设置延迟改变网元大小时网元边框的颜色
 * @method twaver.network.Network.setResizeLineColor
 * @param {String} v 延迟改变网元大小时网元边框的颜色
 */
twaver.network.Network.prototype.setResizeLineColor = function (v) {}

/**
 * 设置延迟改变网元大小时网元边框的宽度
 * @method twaver.network.Network.setResizeLineWidth
 * @param {Number} v 延迟改变网元大小时网元边框的宽度
 */
twaver.network.Network.prototype.setResizeLineWidth = function (v) {}

/**
 * 设置改变网元大小时控制点的填充色
 * @method twaver.network.Network.setResizePointFillColor
 * @param {String} v 改变网元大小时控制点的填充色
 */
twaver.network.Network.prototype.setResizePointFillColor = function (v) {}

/**
 * 设置改变网元大小时控制点的边框颜色
 * @method twaver.network.Network.setResizePointOutlineColor
 * @param {String} v 改变网元大小时控制点的边框颜色
 */
twaver.network.Network.prototype.setResizePointOutlineColor = function (v) {}

/**
 * 设置改变网元大小时控制点的边框宽度
 * @method twaver.network.Network.setResizePointOutlineWidth
 * @param {Number} v 改变网元大小时控制点的边框宽度
 */
twaver.network.Network.prototype.setResizePointOutlineWidth = function (v) {}

/**
 * 设置更改网元大小的控制点的大小
 * @method twaver.network.Network.setResizePointSize
 * @param {Number} v 更改网元大小的控制点的大小
 */
twaver.network.Network.prototype.setResizePointSize = function (v) {}

/**
 * 设置网元是否可旋转过滤器
 * @method twaver.network.Network.setRotatableFunction
 * @param {Function} value 网元是否可旋转过滤器
 */
twaver.network.Network.prototype.setRotatableFunction = function (value) {}

/**
 * 设置旋转控制点的填充色
 * @method twaver.network.Network.setRotatePointFillColor
 * @param {String} v 旋转控制点的填充色
 */
twaver.network.Network.prototype.setRotatePointFillColor = function (v) {}

/**
 * 设置旋转控制点的偏移量
 * @method twaver.network.Network.setRotatePointOffset
 * @param {Number} v 旋转控制点的偏移量
 */
twaver.network.Network.prototype.setRotatePointOffset = function (v) {}

/**
 * 设置旋转控制点的边框颜色
 * @method twaver.network.Network.setRotatePointOutlineColor
 * @param {String} v 旋转控制点的边框颜色
 */
twaver.network.Network.prototype.setRotatePointOutlineColor = function (v) {}

/**
 * 设置旋转控制点的边框宽度
 * @method twaver.network.Network.setRotatePointOutlineWidth
 * @param {Number} v 旋转控制点的边框宽度
 */
twaver.network.Network.prototype.setRotatePointOutlineWidth = function (v) {}

/**
 * 设置旋转控制点的大小
 * @method twaver.network.Network.setRotatePointSize
 * @param {Number} v 旋转控制点的大小
 */
twaver.network.Network.prototype.setRotatePointSize = function (v) {}

/**
 * 设置旋转刻度填充色
 * @method twaver.network.Network.setRotateScaleFillColor
 * @param {String} v 旋转刻度填充色
 */
twaver.network.Network.prototype.setRotateScaleFillColor = function (v) {}

/**
 * 设置旋转刻度文字字体颜色
 * @method twaver.network.Network.setRotateScaleFontColor
 * @param {String} v 旋转刻度文字字体颜色
 */
twaver.network.Network.prototype.setRotateScaleFontColor = function (v) {}

/**
 * 设置旋转刻度高度
 * @method twaver.network.Network.setRotateScaleHeight
 * @param {Number} v 旋转刻度高度
 */
twaver.network.Network.prototype.setRotateScaleHeight = function (v) {}

/**
 * 设置旋转刻度宽度
 * @method twaver.network.Network.setRotateScaleWidth
 * @param {Number} v 旋转刻度宽度
 */
twaver.network.Network.prototype.setRotateScaleWidth = function (v) {}

/**
 * 设置正在旋转的节点
 * @method twaver.network.Network.setRotatingElement
 * @param {twaver.Node} v 节点
 */
twaver.network.Network.prototype.setRotatingElement = function (v) {}

/**
 * 设置框选时矩形框的填充色
 * @method twaver.network.Network.setSelectFillColor
 * @param {String} v 框选时矩形框的填充色
 */
twaver.network.Network.prototype.setSelectFillColor = function (v) {}

/**
 * 设置是否正在框选网元
 * @method twaver.network.Network.setSelectingElement
 * @param {Boolean} v 是否正在框选网元
 */
twaver.network.Network.prototype.setSelectingElement = function (v) {}

/**
 * 返回选择容差像素数
 * @method twaver.network.Network.setSelectionTolerance
 * @param {String} v 选择容差像素数
 */
twaver.network.Network.prototype.setSelectionTolerance = function (v) {}

/**
 * 设置选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @method twaver.network.Network.setSelectMode
 * @param {String} v 选择模式
 */
twaver.network.Network.prototype.setSelectMode = function (v) {}

/**
 * 设置框选时矩形框的边框颜色
 * @method twaver.network.Network.setSelectOutlineColor
 * @param {String} v 框选时矩形框的边框颜色
 */
twaver.network.Network.prototype.setSelectOutlineColor = function (v) {}

/**
 * 设置框选时矩形框的边框宽度
 * @method twaver.network.Network.setSelectOutlineWidth
 * @param {String} v 框选时矩形框的边框宽度
 */
twaver.network.Network.prototype.setSelectOutlineWidth = function (v) {}

/**
 * 设置网元被选中后是否置顶
 * @method twaver.network.Network.setSendToTopOnSelected
 * @param {Boolean} v 网元被选中后是否置顶
 */
twaver.network.Network.prototype.setSendToTopOnSelected = function (v) {}

/**
 * 设置是否显示旋转网元时的刻度
 * @method twaver.network.Network.setShowRotateScale
 * @param {Boolean} v 是否显示旋转网元时的刻度
 */
twaver.network.Network.prototype.setShowRotateScale = function (v) {}

/**
 * 设置进入下一层子网或返回上一层子网时是否有动画效果
 * @method twaver.network.Network.setSubNetworkAnimate
 * @param {Boolean} v 进入下一层子网或返回上一层子网时是否有动画效果
 */
twaver.network.Network.prototype.setSubNetworkAnimate = function (v) {}

/**
 * 设置是否让提示信息生效
 * @method twaver.network.Network.setToolTipEnabled
 * @param {Boolean} value 是否让提示信息生效
 */
twaver.network.Network.prototype.setToolTipEnabled = function (value) {}

/**
 * 设置当前交互模式为触摸模式，只响应触摸事件，包含触摸交互处理器TouchInteraction（处理触摸事件）
 * @method twaver.network.Network.setTouchInteractions
 */
twaver.network.Network.prototype.setTouchInteractions = function () {}

/**
 * 设置网元可见过滤器，用于判断指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
 * @method twaver.network.Network.setVisibleFunction
 * @param {Function} value 网元可见过滤器
 * @example network.setVisibleFunction(function (element) {
 *     return !(element instanceof twaver.Link);
 * });
 */
twaver.network.Network.prototype.setVisibleFunction = function (value) {}

/**
 * 从Network生成指定大小的Canvas元素，用于生成缩略图
 * @method twaver.network.Network.toCanvas
 * @param {Number} w 要生成的Canvas元素的宽度
 * @param {Number} h 要生成的Canvas元素的高度
 * @param {HTMLCanvasElement} [c] 目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素
 * @return {HTMLCanvasElement} 返回Canvas元素
 */
twaver.network.Network.prototype.toCanvas = function (w, h, c) {}

/**
 * 从Network的指定区域生成指定比例的Canvas元素，用于生成缩略图
 * @method twaver.network.Network.toCanvasByRegion
 * @param {Object} rect 包含x、y、width和height属性的Object对象
 * @param {Number} scale 缩放比例
 * @param {HTMLCanvasElement} [c] 目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素
 * @return {HTMLCanvasElement} 返回Canvas元素
 */
twaver.network.Network.prototype.toCanvasByRegion = function (rect, scale, c) {}

/**
 * 更新Network的层div视图，当和Network关联的ElementBox的LayerBox里Layer变化时，会调用此方法
 * @method twaver.network.Network.updateLayers
 */
twaver.network.Network.prototype.updateLayers = function () {}

/**
 * 返回上一层子网，可以设置是否使用动画效果，还可以指定返回结束后执行的动作
 * @method twaver.network.Network.upSubNetwork
 * @param {Boolean} [animate] 是否使用动画效果，可选，默认为false
 * @param {Function} [finishFunction] 返回上一层子网结束后执行的回调函数，可选，默认为null
 */
twaver.network.Network.prototype.upSubNetwork = function (animate, finishFunction) {}


/**
 * 它是由一系列的点决定线路走向的一种连线。可以用于展示一些复杂线路的连线。通过添加、删除点可以更改连线的形状
 * @class twaver.ShapeLink
 * @constructor
 * @extends twaver.Link
 * @param {Object} [id] 折线ID，用于唯一标识折线对象。如果为空，TWaver会按照默认的规则给折线ID赋值。ID可以为string，number类型，可以为Node类型，也可以为Object类型。为string或number类型时指的是折线的ID，为Node类型时，fromNode和toNode相同，都为ID参数传入的Node对象，如果为Object类型，可以传入一个带折线属性的对象，比如： var shapeLink = new twaver.ShapeLink({     name:'shapelinkname',     fromNode: twNode,   toNode:bbNode });
 * @param {twaver.Node} [fromNode] 起始节点
 * @param {twaver.Node} [toNode] 结束节点
 * @return {twaver.ShapeLink} 折线对象本身
 */
twaver.ShapeLink = function (id, fromNode, toNode) {}

twaver.ShapeLink.prototype = new twaver.Link()

/**
 * 在折线上添加一点，更改折线的走向
 * @method twaver.ShapeLink.addPoint
 * @param {Object} point 包含x，y属性的对象。例如：var point = {x:10,y:10}
 * @param {Number} [index] 添加点的次序，如果为空，则添加在最后一个位置。
 */
twaver.ShapeLink.prototype.addPoint = function (point, index) {}

/**
 * 派发点的更改事件，当折线上的点发生变化时，会调用此方法。此方法用于TWaver内部调用的
 * @method twaver.ShapeLink.firePointsChange
 */
twaver.ShapeLink.prototype.firePointsChange = function () {}

/**
 * 获取折线上所有点的集合
 * @method twaver.ShapeLink.getPoints
 * @return {twaver.List} 折线点的集合
 */
twaver.ShapeLink.prototype.getPoints = function () {}

/**
 * 移除指定序号上的点，更改折线的走向
 * @method twaver.ShapeLink.removeAt
 * @param {Number} index 移除点的指定序号
 */
twaver.ShapeLink.prototype.removeAt = function (index) {}

/**
 * 移除指定点，用于更改折线的走向
 * @method twaver.ShapeLink.removePoint
 * @param {Object} point 移除的点。例如：var point = {x:10,y:10}
 */
twaver.ShapeLink.prototype.removePoint = function (point) {}

/**
 * 设置某个序号上的点，用于更改折线的走向
 * @method twaver.ShapeLink.setPoint
 * @param {Number} index 折线上点的序号
 * @param {Object} point 包含x，y属性的点对象。例如：var point = {x:10,y:10}
 */
twaver.ShapeLink.prototype.setPoint = function (index, point) {}

/**
 * 设置折线上点的集合
 * @method twaver.ShapeLink.setPoints
 * @param {twaver.List} value 折线上点的集合
 */
twaver.ShapeLink.prototype.setPoints = function (value) {}


/**
 * 用指定的ElementBox构造Network，ElementBox是Network的数据容器，如果为null则twaver内部会创建一个新的ElementBox；而且在构造Network后，也可以用Network#setElementBox方法重新绑定一个新的ElementBox
 * @class twaver.vector.Network
 * @constructor
 * @extends twaver.controls.View
 * @param {twaver.ElementBox} [elementBox] 可选，默认为null，和Network关联的数据容器
 * @return {twaver.network.Network}
 * @example var box = new twaver.ElementBox();
 * var tree = new twaver.controls.Tree(box);
 * var network = new twaver.network.Network(box);
 */
twaver.vector.Network = function (elementBox) {}

twaver.vector.Network.prototype = new twaver.controls.View()

/**
 * 添加网元，并派发createElement类型的事件。CreateElementInteraction、CreateLinkInteraction、CreateShapeLinkInteraction和CreateShapeNodeInteraction会调用此方法
 * @method twaver.vector.Network.addElementByInteraction
 * @param {twaver.Element} element 网元
 */
twaver.vector.Network.prototype.addElementByInteraction = function (element) {}

/**
 * 添加标记
 * @method twaver.vector.Network.addMarker
 * @param {Object} marker 带paint方法的对象
 */
twaver.vector.Network.prototype.addMarker = function (marker) {}

/**
 * 清空标记
 * @method twaver.vector.Network.clearMarker
 */
twaver.vector.Network.prototype.clearMarker = function () {}

/**
 * 把屏幕坐标点转换为拓扑组件的逻辑坐标点
 * @method twaver.vector.Network.convertPointFromView
 * @param {Object} p 坐标点
 * @return {Object} 坐标点
 */
twaver.vector.Network.prototype.convertPointFromView = function (p) {}

/**
 * 创建和指定Element关联的ElementUI，添加网元到和Network关联的ElementBox时会触发调用此方法，用户不需要调用此方法，但可以重载此方法
 * @method twaver.vector.Network.createElementUI
 * @param {twaver.Element} data 用于创建和网元关联的ElementUI
 * @return {String}
 */
twaver.vector.Network.prototype.createElementUI = function (data) {}

/**
 * 获取指定网元的告警冒泡文字内容，默认返回网元的最高新发告警数和别名，如果还有低级别的新发告警则前面带一个+号（比如+3C代表有3个严重告警，并且还有其他低级别新发告警），如果没有新发告警，则返回null
 * @method twaver.vector.Network.getAlarmLabel
 * @param {twaver.Element} element 网元
 * @return {String} 返回指定网元的告警冒泡文字内容
 */
twaver.vector.Network.prototype.getAlarmLabel = function (element) {}

/**
 * 获取背景图片
 * @method twaver.vector.Network.getBackgroundImage
 * @return {HTMLImageElement} 返回背景图片
 */
twaver.vector.Network.prototype.getBackgroundImage = function () {}

/**
 * 获取拓扑图大小
 * @method twaver.vector.Network.getCanvasSize
 * @return {Object} 返回拓扑图大小
 */
twaver.vector.Network.prototype.getCanvasSize = function () {}

/**
 * 获取当前子网，如果是最顶层子网则返回null
 * @method twaver.vector.Network.getCurrentSubNetwork
 * @return {twaver.SubNetwork} 返回当前子网，如果是最顶层子网则返回null
 */
twaver.vector.Network.prototype.getCurrentSubNetwork = function () {}

/**
 * 获取网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
 * @method twaver.vector.Network.getEditableFunction
 * @return {Function} 返回网元可编辑过滤器
 */
twaver.vector.Network.prototype.getEditableFunction = function () {}

/**
 * 获取创建连线时连线的颜色，默认值为twaver.Defaults.NETWORK_EDIT_LINE_COLOR
 * @method twaver.vector.Network.getEditLineColor
 * @return {String} 返回创建连线时连线的颜色
 */
twaver.vector.Network.prototype.getEditLineColor = function () {}

/**
 * 获取创建连线时连线的宽度，默认值为twaver.Defaults.NETWORK_EDIT_LINE_WIDTH
 * @method twaver.vector.Network.getEditLineWidth
 * @return {Number} 返回创建连线时连线的宽度
 */
twaver.vector.Network.prototype.getEditLineWidth = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的填充色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_FILL_COLOR
 * @method twaver.vector.Network.getEditPointFillColor
 * @return {String} 返回编辑ShapeNode或ShapeLink时控制点的填充色
 */
twaver.vector.Network.prototype.getEditPointFillColor = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_COLOR
 * @method twaver.vector.Network.getEditPointOutlineColor
 * @return {String} 返回编辑ShapeNode或ShapeLink时控制点的边框颜色
 */
twaver.vector.Network.prototype.getEditPointOutlineColor = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_EDIT_POINT_OUTLINE_WIDTH
 * @method twaver.vector.Network.getEditPointOutlineWidth
 * @return {Number} 返回编辑ShapeNode或ShapeLink时控制点的边框宽度
 */
twaver.vector.Network.prototype.getEditPointOutlineWidth = function () {}

/**
 * 获取编辑ShapeNode或ShapeLink时控制点的大小，默认值为twaver.Defaults.NETWORK_EDIT_POINT_SIZE
 * @method twaver.vector.Network.getEditPointSize
 * @return {Number} 返回编辑ShapeNode或ShapeLink时控制点的大小
 */
twaver.vector.Network.prototype.getEditPointSize = function () {}

/**
 * 获取指定坐标点或者当前鼠标下的网元
 * @method twaver.vector.Network.getElementAt
 * @param {Object} point 可以为坐标点或者鼠标事件
 * @param {Boolean} [selectable] 如果为true，则只返回可以被选择的网元，否则不可选中的网元也可以返回，可选，默认值为true
 * @return {twaver.Element} 返回坐标点或者当前鼠标下的网元
 * @example network.getView().addEventListener('mousedown', function (e) {
 *     var point = network.getLogicalPoint(e);
 *     console.log(network.getElementAt(e));
 *     console.log(network.getElementAt(point));
 * });
 */
twaver.vector.Network.prototype.getElementAt = function (point, selectable) {}

/**
 * 获取和Network绑定的ElementBox网元容器
 * @method twaver.vector.Network.getElementBox
 * @return {twaver.ElementBox} 返回和Network绑定的ElementBox网元容器
 */
twaver.vector.Network.prototype.getElementBox = function () {}

/**
 * 获取矩形区域包含或相交网元
 * @method twaver.vector.Network.getElementsAtRect
 * @param {Object} rect 矩形区域
 * @param {Boolean} [intersectMode] 如果为true则只要和矩形区域相交的网元都返回，否则只返回矩形区域包含的网元，可选，默认值为false
 * @param {Function} [filter] 过滤器, 可选, 默认值为null
 * @param {Boolean} [selectable] 网元是否可选择，默认为true
 * @return {twaver.List} 返回矩形区域包含或相交网元
 * @example var elements = network.getElementsAtRect({x:0, y:0, width:100, height:100});
 */
twaver.vector.Network.prototype.getElementsAtRect = function (rect, intersectMode, filter, selectable) {}

/**
 * 获取和网元关联的视图对象
 * @method twaver.vector.Network.getElementUI
 * @param {twaver.Element} element 网元
 * @return {twaver.network.ElementUI} 返回和网元关联的视图对象
 */
twaver.vector.Network.prototype.getElementUI = function (element) {}

/**
 * 获取网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
 * twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
 *     var clazz = element.getElementUIClass();
 *     if (clazz) {
 *          return new clazz(network, element);
 *     }
 *     return null;
 *  }
 * @method twaver.vector.Network.getElementUIFunction
 * @return {Function} 返回网元视图生成器
 */
twaver.vector.Network.prototype.getElementUIFunction = function () {}

/**
 * 获取拓扑组件当前的Graphics缩放值
 * @method twaver.vector.Network.getGraphicsZoom
 * @return {Number} 数值
 */
twaver.vector.Network.prototype.getGraphicsZoom = function () {}

/**
 * 返回包含分组孩子视图区域的集合
 * @method twaver.vector.Network.getGroupChildrenRects
 * @param {twaver.Group} group 分组对象
 * @return {twaver.List} 返回包含孩子视图区域的集合
 */
twaver.vector.Network.prototype.getGroupChildrenRects = function (group) {}

/**
 * 获取指定网元的图标颜色数组，默认返回element#getStyle('icons.colors')
 * @method twaver.vector.Network.getIconsColors
 * @param {twaver.Element} element 网元
 * @return {Array} 返回指定网元的图标颜色数组
 */
twaver.vector.Network.prototype.getIconsColors = function (element) {}

/**
 * 获取指定网元的图标名称数组，默认返回element#getStyle('icons.names')
 * @method twaver.vector.Network.getIconsNames
 * @param {twaver.Element} element 网元
 * @return {Array} 返回指定网元的图标名称数组
 */
twaver.vector.Network.prototype.getIconsNames = function (element) {}

/**
 * 获取交互处理器集合，交互处理器用于设置Network相应哪些键盘和鼠标事件。
 * @method twaver.vector.Network.getInteractions
 * @return {Array} 返回交互处理器集合
 */
twaver.vector.Network.prototype.getInteractions = function () {}

/**
 * @method twaver.vector.Network.getLabel2
 * @param {String} element 
 * @return {String}
 */
twaver.vector.Network.prototype.getLabel2 = function (element) {}

/**
 * 获取指定网元所在的层，默认为'default'层
 * @method twaver.vector.Network.getLayerByElement
 * @param {twaver.Element} element 用于返回层的网元
 * @return {twaver.Layer} 返回指定网元所在的层
 */
twaver.vector.Network.prototype.getLayerByElement = function (element) {}

/**
 * 获取延迟移动网元时网元的填充色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL_COLOR
 * @method twaver.vector.Network.getLazyMoveFillColor
 * @return {String} 返回延迟移动网元时网元的填充色
 */
twaver.vector.Network.prototype.getLazyMoveFillColor = function () {}

/**
 * 获取延迟移动网元时网元的边框颜色，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_COLOR
 * @method twaver.vector.Network.getLazyMoveOutlineColor
 * @return {String} 返回延迟移动网元时网元的边框颜色
 */
twaver.vector.Network.prototype.getLazyMoveOutlineColor = function () {}

/**
 * 获取延迟移动网元时网元的边框宽度，默认值为twaver.Defaults.NETWORK_LAZYMOVE_OUTLINE_WIDTH
 * @method twaver.vector.Network.getLazyMoveOutlineWidth
 * @return {Number} 返回延迟移动网元时网元的边框宽度
 */
twaver.vector.Network.prototype.getLazyMoveOutlineWidth = function () {}

/**
 * 获取节点是否可以连线的过滤器
 * @method twaver.vector.Network.getLinkableFunction
 * @return {Function} 返回节点是否可以连线的过滤器
 */
twaver.vector.Network.prototype.getLinkableFunction = function () {}

/**
 * 获得LINK的流动间隔时间
 * @method twaver.vector.Network.getLinkFlowInterval
 * @return {String} 返回Link的流动间隔时间
 */
twaver.vector.Network.prototype.getLinkFlowInterval = function () {}

/**
 * 获得Link流动时的偏移量
 * @method twaver.vector.Network.getLinkFlowOffset
 * @param {String} link Link实例
 * @return {String} 返回Link流动时的偏移量
 */
twaver.vector.Network.prototype.getLinkFlowOffset = function (link) {}

/**
 * 获得Link流动时的步进量
 * @method twaver.vector.Network.getLinkFlowStepping
 * @param {String} link Link实例
 * @return {String} 返回Link流动时的步进量
 */
twaver.vector.Network.prototype.getLinkFlowStepping = function (link) {}

/**
 * 获取指定连线捆绑后的标签，默认如果指定的连线是捆绑代理，则返回"+(" + link.getBundleCount() + ")"，否则返回null
 * @method twaver.vector.Network.getLinkHandlerLabel
 * @param {twaver.Link} link 连线
 * @return {String} 返回指定连线捆绑后的标签
 */
twaver.vector.Network.prototype.getLinkHandlerLabel = function (link) {}

/**
 * 获取连线路径生成函数
 * @method twaver.vector.Network.getLinkPathFunction
 * @return {Function} 返回连线路径生成函数
 */
twaver.vector.Network.prototype.getLinkPathFunction = function () {}

/**
 * 获取拓扑组件当前的位置缩放值
 * @method twaver.vector.Network.getLocationZoom
 * @return {Number} 数值
 */
twaver.vector.Network.prototype.getLocationZoom = function () {}

/**
 * 获取网元可移动过滤器
 * @method twaver.vector.Network.getMovableFunction
 * @return {Function} 返回网元可移动过滤器
 */
twaver.vector.Network.prototype.getMovableFunction = function () {}

/**
 * 获取可移动的被选中的网元集合
 * @method twaver.vector.Network.getMovableSelectedElements
 * @return {twaver.List} 返回可移动的被选中的网元集合
 */
twaver.vector.Network.prototype.getMovableSelectedElements = function () {}

/**
 * 获取可移动的网元的区域
 * @method twaver.vector.Network.getMovableSelectedElementsRect
 * @return {Object} 返回可移动的网元的区域
 */
twaver.vector.Network.prototype.getMovableSelectedElementsRect = function () {}

/**
 * 获取两个坐标点得偏移量，考虑了缩放的影响
 * @method twaver.vector.Network.getOffset
 * @param {Object} newPoint 坐标点
 * @param {Object} lastPoint 坐标点
 * @return {Object} 坐标点
 */
twaver.vector.Network.prototype.getOffset = function (newPoint, lastPoint) {}

/**
 * 获取相对于网元指定位置的坐标，此方法常用于定位和网元相关的附件的位置
 * @method twaver.vector.Network.getPosition
 * @param {String} position 相对位置
 * @param {Object} obj 获取位置时的相对网元或网元视图，类型为twaver.Element或者twaver.network.ElementUI
 * @param {Object} tarSize 目标的大小，类型为包含width和height属性的Object对象
 * @param {String} xoffset x坐标偏移量
 * @param {String} yoffset y坐标偏移量
 * @return {Object} 返回包含x坐标和y坐标的Object对象
 * @example var node = new twaver.Node({name:'Node', location: {x:100, y:100}});
 * box.add(node);
 * var position = network.getPosition('top.top', node, {width:10, height:10}, 0, 0);
 * console.log(position.x, position.y);
 * // output: 110 90
 * 
 * position可以为：
 * hotspot
 * from
 * to
 * topleft.topleft
 * topleft.topright
 * top.top
 * topright.topleft
 * topright.topright
 * topleft
 * top
 * topright
 * topleft.bottomleft
 * topleft.bottomright
 * top.bottom
 * topright.bottomleft
 * topright.bottomright
 * left.left
 * left
 * left.right
 * center
 * right.left
 * right
 * right.right
 * bottomleft.topleft
 * bottomleft.topright
 * bottom.top
 * bottomright.topleft
 * bottomright.topright
 * bottomleft
 * bottom
 * bottomright
 * bottomleft.bottomleft
 * bottomleft.bottomright
 * bottom.bottom
 * bottomright.bottomleft
 * bottomright.bottomright
 */
twaver.vector.Network.prototype.getPosition = function (position, obj, tarSize, xoffset, yoffset) {}

/**
 * 获取框选网元过滤器
 * @method twaver.vector.Network.getRectSelectFilter
 * @return {Function} 返回框选网元过滤器
 */
twaver.vector.Network.prototype.getRectSelectFilter = function () {}

/**
 * 获取延迟改变网元大小时网元边框的颜色，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_COLOR
 * @method twaver.vector.Network.getResizeLineColor
 * @return {String} 返回延迟改变网元大小时网元边框的颜色
 */
twaver.vector.Network.prototype.getResizeLineColor = function () {}

/**
 * 获取延迟改变网元大小时网元边框的宽度，默认值为twaver.Defaults.NETWORK_RESIZE_LINE_WIDTH
 * @method twaver.vector.Network.getResizeLineWidth
 * @return {Number} 返回延迟改变网元大小时网元边框的宽度
 */
twaver.vector.Network.prototype.getResizeLineWidth = function () {}

/**
 * 获取改变网元大小时控制点的填充色，默认为twaver.Defaults.NETWORK_RESIZE_POINT_FILL_COLOR
 * @method twaver.vector.Network.getResizePointFillColor
 * @return {String} 返回改变网元大小时控制点的填充色
 */
twaver.vector.Network.prototype.getResizePointFillColor = function () {}

/**
 * 获取改变网元大小时控制点的边框颜色，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_COLOR
 * @method twaver.vector.Network.getResizePointOutlineColor
 * @return {String} 返回改变网元大小时控制点的边框颜色
 */
twaver.vector.Network.prototype.getResizePointOutlineColor = function () {}

/**
 * 获取改变网元大小时控制点的边框宽度，默认值为twaver.Defaults.NETWORK_RESIZE_POINT_OUTLINE_WIDTH
 * @method twaver.vector.Network.getResizePointOutlineWidth
 * @return {Number} 返回改变网元大小时控制点的边框宽度
 */
twaver.vector.Network.prototype.getResizePointOutlineWidth = function () {}

/**
 * 获取更改网元大小的控制点的大小
 * @method twaver.vector.Network.getResizePointSize
 * @return {Number} 返回更改网元大小的控制点的大小
 */
twaver.vector.Network.prototype.getResizePointSize = function () {}

/**
 * 获取主画布，网元视图绘制在主画布上
 * @method twaver.vector.Network.getRootCanvas
 * @return {HTMLCanvasElement} 返回主画布
 */
twaver.vector.Network.prototype.getRootCanvas = function () {}

/**
 * 获取网元是否可旋转过滤器
 * @method twaver.vector.Network.getRotatableFunction
 * @return {Function} 网元是否可旋转过滤器
 */
twaver.vector.Network.prototype.getRotatableFunction = function () {}

/**
 * 获取旋转控制点的填充色
 * @method twaver.vector.Network.getRotatePointFillColor
 * @return {String} 返回旋转控制点的填充色
 */
twaver.vector.Network.prototype.getRotatePointFillColor = function () {}

/**
 * 获取旋转控制点的偏移量
 * @method twaver.vector.Network.getRotatePointOffset
 * @return {Number} 返回旋转控制点的偏移量
 */
twaver.vector.Network.prototype.getRotatePointOffset = function () {}

/**
 * 获取旋转控制点的边框颜色
 * @method twaver.vector.Network.getRotatePointOutlineColor
 * @return {String} 返回旋转控制点的边框颜色
 */
twaver.vector.Network.prototype.getRotatePointOutlineColor = function () {}

/**
 * 获取旋转控制点的边框宽度
 * @method twaver.vector.Network.getRotatePointOutlineWidth
 * @return {Number} 返回旋转控制点的边框宽度
 */
twaver.vector.Network.prototype.getRotatePointOutlineWidth = function () {}

/**
 * 返回旋转控制点的大小
 * @method twaver.vector.Network.getRotatePointSize
 * @return {Number} 旋转控制点的大小
 */
twaver.vector.Network.prototype.getRotatePointSize = function () {}

/**
 * 获取旋转刻度填充色
 * @method twaver.vector.Network.getRotateScaleFillColor
 * @return {String} 返回旋转刻度填充色
 */
twaver.vector.Network.prototype.getRotateScaleFillColor = function () {}

/**
 * 获取旋转刻度文字字体颜色
 * @method twaver.vector.Network.getRotateScaleFontColor
 * @return {String} 旋转刻度文字字体颜色
 */
twaver.vector.Network.prototype.getRotateScaleFontColor = function () {}

/**
 * 获取旋转刻度高度
 * @method twaver.vector.Network.getRotateScaleHeight
 * @return {Number} 旋转刻度高度
 */
twaver.vector.Network.prototype.getRotateScaleHeight = function () {}

/**
 * 获取旋转刻度宽度
 * @method twaver.vector.Network.getRotateScaleWidth
 * @return {Number} 返回旋转刻度宽度
 */
twaver.vector.Network.prototype.getRotateScaleWidth = function () {}

/**
 * 获取滚动条宽度
 * @method twaver.vector.Network.getScrollBarWidth
 * @return {Number} 返回滚动条宽度，默认为10
 */
twaver.vector.Network.prototype.getScrollBarWidth = function () {}

/**
 * 获取框选时矩形框的填充色，默认值为twaver.Defaults.NETWORK_SELECT_FILL_COLOR
 * @method twaver.vector.Network.getSelectFillColor
 * @return {String} 返回框选时矩形框的填充色
 */
twaver.vector.Network.prototype.getSelectFillColor = function () {}

/**
 * 获取选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @method twaver.vector.Network.getSelectMode
 * @return {String} 返回选择模式
 */
twaver.vector.Network.prototype.getSelectMode = function () {}

/**
 * 获取框选时矩形框的边框颜色，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_COLOR
 * @method twaver.vector.Network.getSelectOutlineColor
 * @return {String} 返回框选时矩形框的边框颜色
 */
twaver.vector.Network.prototype.getSelectOutlineColor = function () {}

/**
 * 获取框选时矩形框的边框宽度，默认值为twaver.Defaults.NETWORK_SELECT_OUTLINE_WIDTH
 * @method twaver.vector.Network.getSelectOutlineWidth
 * @return {String} 返回框选时矩形框的边框宽度
 */
twaver.vector.Network.prototype.getSelectOutlineWidth = function () {}

/**
 * 获得指定网元选中时的阴影颜色，如果网元的style属性shadow.color不为空，则返回style属性shadow.color的值，否则返回style属性select.color的值
 * @method twaver.vector.Network.getShadowColor
 * @param {twaver.Element} element 网元
 * @return {String} 返回指定网元选中时的阴影颜色
 */
twaver.vector.Network.prototype.getShadowColor = function (element) {}

/**
 * 返回缩放后多边形节点的所有顶点，逻辑缩放下，这些顶点会和本身的顶点不一样，物理缩放下，这些顶点和本身的顶点一样。
 * @method twaver.vector.Network.getShapeNodeZoomPoints
 * @param {twaver.ShapeNode} shapeNode 多边形节点
 * @param {Boolean} reverseZoom 是否反转缩放值，如果是计算过程中缩放值用1/缩放值代替
 * @return {Object} 返回缩放后多边形节点的所有顶点
 */
twaver.vector.Network.prototype.getShapeNodeZoomPoints = function (shapeNode, reverseZoom) {}

/**
 * @method twaver.vector.Network.getSizeZoom
 * @return {String}
 */
twaver.vector.Network.prototype.getSizeZoom = function () {}

/**
 * 获取上层画布，默认告警等附件画在上层画布上
 * @method twaver.vector.Network.getTopCanvas
 * @return {HTMLCanvasElement} 返回上层画布
 */
twaver.vector.Network.prototype.getTopCanvas = function () {}

/**
 * 获取Network可见网元所占的区域
 * @method twaver.vector.Network.getViewRect
 * @return {Object} 返回包含x、y、width和height属性的Object对象
 */
twaver.vector.Network.prototype.getViewRect = function () {}

/**
 * 获取网元可见过滤器，Network通过可见过滤器判断每个网元是否可见
 * @method twaver.vector.Network.getVisibleFunction
 * @return {Function} 返回网元可见过滤器
 */
twaver.vector.Network.prototype.getVisibleFunction = function () {}

/**
 * @method twaver.vector.Network.getZoomBodyRect
 * @param {String} data 
 * @return {String}
 */
twaver.vector.Network.prototype.getZoomBodyRect = function (data) {}

/**
 * 获取缩放管理器
 * @method twaver.vector.Network.getZoomManager
 * @return {twaver.vector.BaseZoomManager} 返回缩放管理器
 */
twaver.vector.Network.prototype.getZoomManager = function () {}

/**
 * 返回一个对象，这个对象标示在特定缩放值下，那些元素不可见。比如：
 * {
 * 
 * 	link : 0.5,
 * 	label : 0.8,
 * 	alarmBallon : 0.5,
 * } 标示在缩放值小于0.5的时候，link不可见,告警冒泡不可见，缩放值小于0.8时，标签不可见。
 * @method twaver.vector.Network.getZoomVisibilityThresholds
 * @return {Object} 返回一个对象，这个对象标示在特定缩放值下，那些元素不可见
 * @example 					network.setZoomVisibilityThresholds({
 * 						zoomName : 'zoom',
 * 						link : 0.5,
 * 						label : 0.8,
 * 						alarmBallon : 0.5,
 * 					});
 */
twaver.vector.Network.prototype.getZoomVisibilityThresholds = function () {}

/**
 * ElementBox里网元添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleElementBoxChange
 * @param {Object} e ElementBox里网元变化事件，包含kind和data属性
 */
twaver.vector.Network.prototype.handleElementBoxChange = function (e) {}

/**
 * ElementBox里网元的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleElementBoxPropertyChange
 * @param {Object} e ElementBox里网元属性变化事件，包含property、oldValue和newValue属性
 */
twaver.vector.Network.prototype.handleElementBoxPropertyChange = function (e) {}

/**
 * ElementBox的属性发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleElementPropertyChange
 * @param {Object} e ElementBox属性变化事件，包含property、oldValue和newValue属性
 */
twaver.vector.Network.prototype.handleElementPropertyChange = function (e) {}

/**
 * ElementBox里网元的顺序发生变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleIndexChange
 * @param {Object} e 网元顺序变化事件，包含element、oldIndex和newIndex属性
 */
twaver.vector.Network.prototype.handleIndexChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer添加、删除以及清空时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleLayerBoxChange
 * @param {Object} e LayerBox里Layer变化事件，包含kind和data属性
 */
twaver.vector.Network.prototype.handleLayerBoxChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer层次变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleLayerHierarchyChange
 * @param {Object} e LayerBox里Layer层次变化事件，包含kind和data属性
 */
twaver.vector.Network.prototype.handleLayerHierarchyChange = function (e) {}

/**
 * ElementBox的LayerBox里Layer属性变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleLayerPropertyChange
 * @param {Object} e LayerBox里Layer属性变化事件，包含kind和data属性
 */
twaver.vector.Network.prototype.handleLayerPropertyChange = function (e) {}

/**
 * SelectionModel选择变化时的处理函数，用户不需要调用此方法，但可以重载此方法，添加自定义逻辑
 * @method twaver.vector.Network.handleSelectionChange
 * @param {Object} e 选择变化事件，包含kind和data属性
 */
twaver.vector.Network.prototype.handleSelectionChange = function (e) {}

/**
 * 获取是否包含编辑交互处理器
 * @method twaver.vector.Network.hasEditInteraction
 * @return {Boolean} 如果包含编辑交互处理器，则返回ture，否则返回false
 */
twaver.vector.Network.prototype.hasEditInteraction = function () {}

/**
 * 判断是否包含选中的并且可移动的网元
 * @method twaver.vector.Network.hasMovableSelectedElements
 * @return {Boolean} 如果包含选中的并且可移动的网元，则返回true，否则返回false
 */
twaver.vector.Network.prototype.hasMovableSelectedElements = function () {}

/**
 * 获取鼠标下或指定坐标下的网元视图对象或附件对象
 * @method twaver.vector.Network.hitTest
 * @param {Object} point 鼠标事件或坐标点
 * @return {Object} 返回鼠标下或指定坐标下的网元视图对象或附件对象
 */
twaver.vector.Network.prototype.hitTest = function (point) {}

/**
 * 使指定连线的捆绑连线无效
 * @method twaver.vector.Network.invalidateBundleLink
 * @param {twaver.Link} element 连线
 */
twaver.vector.Network.prototype.invalidateBundleLink = function (element) {}

/**
 * 无效画布大小
 * @method twaver.vector.Network.invalidateCanvasSize
 * @param {Number} delay 延迟时间，默认为300ms
 */
twaver.vector.Network.prototype.invalidateCanvasSize = function (delay) {}

/**
 * 使指定网元的视图无效
 * @method twaver.vector.Network.invalidateElementUI
 * @param {twaver.Element} element 网元
 * @param {Boolean} [checkAttachments] 如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false
 */
twaver.vector.Network.prototype.invalidateElementUI = function (element, checkAttachments) {}

/**
 * 使所有网元的视图无效
 * @method twaver.vector.Network.invalidateElementUIs
 * @param {Boolean} [checkAttachments] 如果为true，则使网元无效的同时使附件无效，否则不使附件无效，可选，默认为false
 */
twaver.vector.Network.prototype.invalidateElementUIs = function (checkAttachments) {}

/**
 * 无效所有网元的可见性，当设置了visibleFunction，并且外部条件变动后，可以用此方法强制刷新所有网元是否可见
 * @method twaver.vector.Network.invalidateElementVisibility
 */
twaver.vector.Network.prototype.invalidateElementVisibility = function () {}

/**
 * 无效所有选中网元的视图
 * @method twaver.vector.Network.invalidateSelectedElementUIs
 * @param {Boolean} [checkAttachments] 如果为true，则无效网元的同时无效附件，否则不无效附件，可选，默认为false
 */
twaver.vector.Network.prototype.invalidateSelectedElementUIs = function (checkAttachments) {}

/**
 * 获取是否自动计算画布大小
 * @method twaver.vector.Network.isAutoValidateCanvasSize
 * @return {Boolean} 返回是否自动计算画布大小
 */
twaver.vector.Network.prototype.isAutoValidateCanvasSize = function () {}

/**
 * 获取是否能双击进入空的子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_EMPTYSUBNETWORK
 * @method twaver.vector.Network.isDoubleClickToEmptySubNetwork
 * @return {Boolean} 返回是否能双击进入空的子网
 */
twaver.vector.Network.prototype.isDoubleClickToEmptySubNetwork = function () {}

/**
 * 获取是否双击展开组，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_GROUPEXPAND
 * @method twaver.vector.Network.isDoubleClickToGroupExpand
 * @return {Boolean} 返回是否双击展开组
 */
twaver.vector.Network.prototype.isDoubleClickToGroupExpand = function () {}

/**
 * 获取是否双击捆绑连线，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_LINKBUNDLE
 * @method twaver.vector.Network.isDoubleClickToLinkBundle
 * @return {Boolean} 返回是否双击捆绑连线
 */
twaver.vector.Network.prototype.isDoubleClickToLinkBundle = function () {}

/**
 * 获取是否双击子网时进入子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_SUBNETWORK
 * @method twaver.vector.Network.isDoubleClickToSubNetwork
 * @return {Boolean} 返回是否双击子网时进入子网
 */
twaver.vector.Network.prototype.isDoubleClickToSubNetwork = function () {}

/**
 * 获取是否双击背景返回上一层子网，默认值为twaver.Defaults.NETWORK_DOUBLECLICK_TO_UPSUBNETWORK
 * @method twaver.vector.Network.isDoubleClickToUpSubNetwork
 * @return {Boolean} 返回是否双击背景返回上一层子网
 */
twaver.vector.Network.prototype.isDoubleClickToUpSubNetwork = function () {}

/**
 * 判断指定网元是否可编辑，如果editableFunction返回false，则不可编辑；如果网元所在的层不可编辑，则不可编辑；否则可编辑
 * @method twaver.vector.Network.isEditable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元可编辑，则返回true，否则返回false
 */
twaver.vector.Network.prototype.isEditable = function (element) {}

/**
 * 获取是否正在编辑网元
 * @method twaver.vector.Network.isEditingElement
 * @return {Boolean} 返回是否正在编辑网元
 */
twaver.vector.Network.prototype.isEditingElement = function () {}

/**
 * 获取水平滚动条是否可见
 * @method twaver.vector.Network.isHScrollBarVisible
 * @return {Boolean} 返回水平滚动条是否可见
 */
twaver.vector.Network.prototype.isHScrollBarVisible = function () {}

/**
 * 获取是否允许用键盘Delete键删除选中网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_REMOVE_ENABLED
 * @method twaver.vector.Network.isKeyboardRemoveEnabled
 * @return {Boolean} 返回是否允许用键盘Delete键删除选中网元
 */
twaver.vector.Network.prototype.isKeyboardRemoveEnabled = function () {}

/**
 * 获取是否允许用键盘Ctrl+A键选择所有网元，默认值为twaver.Defaults.NETWORK_KEYBOARD_SELECT_ENABLED
 * @method twaver.vector.Network.isKeyboardSelectEnabled
 * @return {Boolean} 返回是否允许用键盘Ctrl+A键选择所有网元
 */
twaver.vector.Network.prototype.isKeyboardSelectEnabled = function () {}

/**
 * 获取延迟移动网元时是否有动画效果，默认值为twaver.Defaults.NETWORK_LAZYMOVE_ANIMATE
 * @method twaver.vector.Network.isLazyMoveAnimate
 * @return {Boolean} 返回延迟移动网元时是否有动画效果
 */
twaver.vector.Network.prototype.isLazyMoveAnimate = function () {}

/**
 * 获取延迟移动网元时轮廓是否填充，默认值为twaver.Defaults.NETWORK_LAZYMOVE_FILL
 * @method twaver.vector.Network.isLazyMoveFill
 * @return {Boolean} 返回延迟移动网元时轮廓是否填充
 */
twaver.vector.Network.prototype.isLazyMoveFill = function () {}

/**
 * 获取是否限制网元坐标不能为负
 * @method twaver.vector.Network.isLimitElementInPositiveLocation
 * @return {Boolean} 返回是否限制网元坐标不能为负
 */
twaver.vector.Network.prototype.isLimitElementInPositiveLocation = function () {}

/**
 * 获取是否限制左上角，如果限制左上角，不能看到左上角以外的区域
 * @method twaver.vector.Network.isLimitViewInCanvas
 * @return {Boolean} 返回是否限制左上角，默认为true
 */
twaver.vector.Network.prototype.isLimitViewInCanvas = function () {}

/**
 * 获取指定节点是否可以创建连线
 * @method twaver.vector.Network.isLinkable
 * @param {twaver.Node} node 节点
 * @return {Boolean} 返回指定节点是否可以创建连线
 */
twaver.vector.Network.prototype.isLinkable = function (node) {}

/**
 * 返回是否启用流动Link，默认是false
 * @method twaver.vector.Network.isLinkFlowEnabled
 * @return {String} 是否启用流动Link
 */
twaver.vector.Network.prototype.isLinkFlowEnabled = function () {}

/**
 * 获取网元被选择时是否让其可见，默认值为twaver.Defaults.NETWORK_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.vector.Network.isMakeVisibleOnSelected
 * @return {Boolean} 返回网元被选择时是否让其可见
 */
twaver.vector.Network.prototype.isMakeVisibleOnSelected = function () {}

/**
 * 判断指定网元是否可移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
 * @method twaver.vector.Network.isMovable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 如果网元可移动，则返回true，否则返回false
 */
twaver.vector.Network.prototype.isMovable = function (element) {}

/**
 * 获取是否正在移动网元
 * @method twaver.vector.Network.isMovingElement
 * @return {Boolean} 返回是否正在移动网元
 */
twaver.vector.Network.prototype.isMovingElement = function () {}

/**
 * 获取不是代理的连线是否可见，默认值为twaver.Defaults.NETWORK_NO_AGENT_LINK_VISIBLE
 * @method twaver.vector.Network.isNoAgentLinkVisible
 * @return {Boolean} 返回不是代理的连线是否可见
 */
twaver.vector.Network.prototype.isNoAgentLinkVisible = function () {}

/**
 * 获取是否允许框选网元
 * @method twaver.vector.Network.isRectSelectEnabled
 * @return {Boolean} 如果允许框选网元, 返回true, 否则返回false
 */
twaver.vector.Network.prototype.isRectSelectEnabled = function () {}

/**
 * 获取改变网元大小时是否有动画效果，默认值为twaver.Defaults.NETWORK_RESIZE_ANIMATE
 * @method twaver.vector.Network.isResizeAnimate
 * @return {Boolean} 返回改变网元大小时是否有动画效果
 */
twaver.vector.Network.prototype.isResizeAnimate = function () {}

/**
 * 获取指定网元是否可旋转
 * @method twaver.vector.Network.isRotatable
 * @param {twaver.Element} element 网元
 * @return {Boolean} 返回指定网元是否可旋转
 */
twaver.vector.Network.prototype.isRotatable = function (element) {}

/**
 * 获取是否正在旋转网元
 * @method twaver.vector.Network.isRotatingElement
 * @return {Boolean} 返回是否正在旋转网元
 */
twaver.vector.Network.prototype.isRotatingElement = function () {}

/**
 * 获取滚动条是否可见
 * @method twaver.vector.Network.isScrollBarVisible
 * @return {Boolean} 返回滚动条是否可见
 */
twaver.vector.Network.prototype.isScrollBarVisible = function () {}

/**
 * 获取是否正在选择网元
 * @method twaver.vector.Network.isSelectingElement
 * @return {Boolean} 返回是否正在选择网元
 */
twaver.vector.Network.prototype.isSelectingElement = function () {}

/**
 * 获取网元被选中后是否置顶，默认值为twaver.Defaults.NETWORK_SENDTOTOP_ON_SELECTED
 * @method twaver.vector.Network.isSendToTopOnSelected
 * @return {Boolean} 返回网元被选中后是否置顶
 */
twaver.vector.Network.prototype.isSendToTopOnSelected = function () {}

/**
 * 获取是否显示旋转网元时的刻度
 * @method twaver.vector.Network.isShowRotateScale
 * @return {Boolean} 返回是否显示旋转网元时的刻度
 */
twaver.vector.Network.prototype.isShowRotateScale = function () {}

/**
 * 获取进入下一层子网或返回上一层子网时是否有动画效果，默认值为twaver.Defaults.NETWORK_SUBNETWORK_ANIMATE
 * @method twaver.vector.Network.isSubNetworkAnimate
 * @return {Boolean} 返回进入下一层子网或返回上一层子网时是否有动画效果
 */
twaver.vector.Network.prototype.isSubNetworkAnimate = function () {}

/**
 * 获取是否让提示信息生效，默认值为twaver.Defaults.NETWORK_TOOLTIP_ENABLED
 * @method twaver.vector.Network.isToolTipEnabled
 * @return {Boolean} 返回是否让提示信息生效
 */
twaver.vector.Network.prototype.isToolTipEnabled = function () {}

/**
 * 点击网元的透明部分网元是否能被选中，默认为false
 * @method twaver.vector.Network.isTransparentSelectionEnable
 * @return {Boolean} 点击网元的透明部分网元是否能被选中，默认为false
 */
twaver.vector.Network.prototype.isTransparentSelectionEnable = function () {}

/**
 * 获取指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
 * @method twaver.vector.Network.isVisible
 * @param {twaver.Element} element 网元
 * @param {String} visibleFunction 
 * @param {String} defaultLayer 
 * @return {Boolean} 如果指定网元可见，则返回true，否则返回false
 */
twaver.vector.Network.prototype.isVisible = function (element, visibleFunction, defaultLayer) {}

/**
 * 获取垂直滚动条是否可见
 * @method twaver.vector.Network.isVScrollBarVisible
 * @return {Boolean} 返回垂直滚动条是否可见，默认为true
 */
twaver.vector.Network.prototype.isVScrollBarVisible = function () {}

/**
 * 滚动滚轮是否缩放界面，默认值为true
 * @method twaver.vector.Network.isWheelToZoom
 * @return {Boolean} 滚动滚轮是否缩放界面，默认值为true
 */
twaver.vector.Network.prototype.isWheelToZoom = function () {}

/**
 * 返回是否显示缩放提示，默认为true
 * @method twaver.vector.Network.isZoomDivVisible
 * @return {Boolean} 返回是否显示缩放提示，默认为true
 */
twaver.vector.Network.prototype.isZoomDivVisible = function () {}

/**
 * 滚动水平和垂直滚动条，让指定网元可见
 * @method twaver.vector.Network.makeVisible
 * @param {twaver.Element} element 网元
 */
twaver.vector.Network.prototype.makeVisible = function (element) {}

/**
 * 将选中的网元移动指定偏移量，移动时可以设置是否有动画效果，而且能指定移动结束后执行的动作
 * @method twaver.vector.Network.moveSelectedElements
 * @param {Number} xoffset x坐标偏移量
 * @param {Number} yoffset y坐标偏移量
 * @param {Boolean} [animate] 移动时是否有动画效果，可选，默认为false
 * @param {Function} [finishFunction] 回调函数，移动结束后执行的动作，可选，默认为null
 */
twaver.vector.Network.prototype.moveSelectedElements = function (xoffset, yoffset, animate, finishFunction) {}

/**
 * shareSelectionModel属性变化时触发的动作，用户不需要调用此方法，但可以重载此方法执行自定义逻辑
 * @method twaver.vector.Network.onShareSelectionModelChanged
 */
twaver.vector.Network.prototype.onShareSelectionModelChanged = function () {}

/**
 * 绘制最底层元素
 * @method twaver.vector.Network.paintBottom
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.Network.prototype.paintBottom = function (ctx) {}

/**
 * 回去标记
 * @method twaver.vector.Network.paintMarker
 * @param {CanvasRenderingContext2D} ctx 画布上下文
 */
twaver.vector.Network.prototype.paintMarker = function (ctx) {}

/**
 * 绘制所有网元视图
 * @method twaver.vector.Network.paintRoot
 */
twaver.vector.Network.prototype.paintRoot = function () {}

/**
 * 绘制上层画布
 * @method twaver.vector.Network.paintTopCanvas
 */
twaver.vector.Network.prototype.paintTopCanvas = function () {}

/**
 * 居中显示拓扑图
 * @method twaver.vector.Network.panToCenter
 */
twaver.vector.Network.prototype.panToCenter = function () {}

/**
 * 删除标记
 * @method twaver.vector.Network.removeMarker
 * @param {Object} marker 带paint方法的对象
 */
twaver.vector.Network.prototype.removeMarker = function (marker) {}

/**
 * 重绘上层画布
 * @method twaver.vector.Network.repaintTopCanvas
 */
twaver.vector.Network.prototype.repaintTopCanvas = function () {}

/**
 * 将指定网元置顶，显示在所有网元的最上面，遮盖其他网元，但也受网元所在的层的制约，还有父子关系以及跟随关系的制约；如果sendToTopOnSelected为true，则点击网元时会调用此方法
 * @method twaver.vector.Network.sendToTop
 * @param {twaver.Element} element 网元
 */
twaver.vector.Network.prototype.sendToTop = function (element) {}

/**
 * 设置是否自动计算画布大小
 * @method twaver.vector.Network.setAutoValidateCanvasSize
 * @param {Boolean} v 是否自动计算画布大小
 */
twaver.vector.Network.prototype.setAutoValidateCanvasSize = function (v) {}

/**
 * 设置背景图片
 * @method twaver.vector.Network.setBackgroundImage
 * @param {HTMLImageElement} backgroundImage 背景图片
 */
twaver.vector.Network.prototype.setBackgroundImage = function (backgroundImage) {}

/**
 * 设置当前交互模式为创建网元模式，在Network上单击时，会创建指定类型的网元
 * @method twaver.vector.Network.setCreateElementInteractions
 * @param {Function} [type] 网元类型，可选，默认值为twaver.Node
 */
twaver.vector.Network.prototype.setCreateElementInteractions = function (type) {}

/**
 * 设置当前交互模式为创建连线模式，在Network上单击任意网元设置连线的开始节点，再次点击任意网元设置连线的结束节点
 * @method twaver.vector.Network.setCreateLinkInteractions
 * @param {Function} [type] 连线类型，可选，默认值为twaver.Link
 */
twaver.vector.Network.prototype.setCreateLinkInteractions = function (type) {}

/**
 * 设置当前交互模式为创建折线模式，在Network上单击任意网元设置折线的开始节点，多次点击不同的背景位置设置折线的points属性，再次点击任意网元设置折线的结束节点
 * @method twaver.vector.Network.setCreateShapeLinkInteractions
 * @param {Function} [type] 折线类型，可选，默认值为twaver.ShapeLink
 */
twaver.vector.Network.prototype.setCreateShapeLinkInteractions = function (type) {}

/**
 * 设置当前交互模式为创建多边形模式，在Network上多次点击不同位置设置多边形的points属性，最后双击结束
 * @method twaver.vector.Network.setCreateShapeNodeInteractions
 * @param {Function} [type] 多边形类型，可选，默认值为twaver.ShapeNode
 */
twaver.vector.Network.prototype.setCreateShapeNodeInteractions = function (type) {}

/**
 * 将当前子网设置为指定子网，并且可以设置是否有动画效果，而且能指定设置当前子网结束后执行的动作
 * @method twaver.vector.Network.setCurrentSubNetwork
 * @param {twaver.SubNetwork} currentSubNetwork 子网
 * @param {Boolean} [animate] 是否有动画效果
 * @param {Function} [finishFunction] 设置当前子网结束后的回调函数，可选，默认为null
 */
twaver.vector.Network.prototype.setCurrentSubNetwork = function (currentSubNetwork, animate, finishFunction) {}

/**
 * 设置交互模式为默认交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.vector.Network.setDefaultInteractions
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选、默认为false
 */
twaver.vector.Network.prototype.setDefaultInteractions = function (lazyMode) {}

/**
 * 设置是否能双击进入空的子网
 * @method twaver.vector.Network.setDoubleClickToEmptySubNetwork
 * @param {Boolean} v 是否能双击进入空的子网
 */
twaver.vector.Network.prototype.setDoubleClickToEmptySubNetwork = function (v) {}

/**
 * 设置是否双击展开组
 * @method twaver.vector.Network.setDoubleClickToGroupExpand
 * @param {Boolean} v 是否能双击展开组
 */
twaver.vector.Network.prototype.setDoubleClickToGroupExpand = function (v) {}

/**
 * 设置是否双击捆绑连线
 * @method twaver.vector.Network.setDoubleClickToLinkBundle
 * @param {Boolean} v 是否双击捆绑连线
 */
twaver.vector.Network.prototype.setDoubleClickToLinkBundle = function (v) {}

/**
 * 设置是否双击子网时进入子网
 * @method twaver.vector.Network.setDoubleClickToSubNetwork
 * @param {Boolean} v 是否双击子网时进入子网
 */
twaver.vector.Network.prototype.setDoubleClickToSubNetwork = function (v) {}

/**
 * 设置是否双击背景返回上一层子网
 * @method twaver.vector.Network.setDoubleClickToUpSubNetwork
 * @param {Boolean} v 是否双击背景返回上一层子网
 */
twaver.vector.Network.prototype.setDoubleClickToUpSubNetwork = function (v) {}

/**
 * 设置网元可编辑过滤器，默认值为null，用于判断在编辑模式时是否可以更改节点大小（选中网元时周围有8个可拖拽的控制点），或者移动多边形、折线的点
 * @method twaver.vector.Network.setEditableFunction
 * @param {Function} value 网元可编辑过滤器
 * @example network.setEditInteractions();
 * network.setEditableFunction(function (element) {
 *     return element.getName() === 'From';
 * });
 */
twaver.vector.Network.prototype.setEditableFunction = function (value) {}

/**
 * 设置是否正在编辑网元
 * @method twaver.vector.Network.setEditingElement
 * @param {Boolean} v 是否正在编辑网元
 */
twaver.vector.Network.prototype.setEditingElement = function (v) {}

/**
 * 设置交互模式为编辑交互模式，包含选择交互处理器SelectInteraction（处理框选或选择网元）、编辑处理器EditInteraction（处理改变网元大小）、移动交互处理器MoveInteraction（处理移动网元）和默认交互处理器DefaultInteraction（处理展开或合并组、进入或返回子网、合并或展开连线捆绑、删除或全选网元等）
 * @method twaver.vector.Network.setEditInteractions
 * @param {Boolean} [lazyMode] 是否使用延迟模式，可选、默认为false
 */
twaver.vector.Network.prototype.setEditInteractions = function (lazyMode) {}

/**
 * 设置创建连线时连线的颜色
 * @method twaver.vector.Network.setEditLineColor
 * @param {String} v 创建连线时连线的颜色
 */
twaver.vector.Network.prototype.setEditLineColor = function (v) {}

/**
 * 设置创建连线时连线的宽度
 * @method twaver.vector.Network.setEditLineWidth
 * @param {Number} v 创建连线时连线的宽度
 */
twaver.vector.Network.prototype.setEditLineWidth = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的填充色
 * @method twaver.vector.Network.setEditPointFillColor
 * @param {String} v 编辑ShapeNode或ShapeLink时控制点的填充色
 */
twaver.vector.Network.prototype.setEditPointFillColor = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的边框颜色
 * @method twaver.vector.Network.setEditPointOutlineColor
 * @param {String} v 编辑ShapeNode或ShapeLink时控制点的边框颜色
 */
twaver.vector.Network.prototype.setEditPointOutlineColor = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的边框宽度
 * @method twaver.vector.Network.setEditPointOutlineWidth
 * @param {Number} v 编辑ShapeNode或ShapeLink时控制点的边框宽度
 */
twaver.vector.Network.prototype.setEditPointOutlineWidth = function (v) {}

/**
 * 设置编辑ShapeNode或ShapeLink时控制点的大小
 * @method twaver.vector.Network.setEditPointSize
 * @param {Number} v 编辑ShapeNode或ShapeLink时控制点的大小
 */
twaver.vector.Network.prototype.setEditPointSize = function (v) {}

/**
 * 设置和Network绑定的ElementBox网元容器，Network构造时可以设置ElementBox（内部创建一个新的ElementBox），也可以构造完后再设置ElementBox
 * @method twaver.vector.Network.setElementBox
 * @param {twaver.ElementBox} elementBox 网元容器
 */
twaver.vector.Network.prototype.setElementBox = function (elementBox) {}

/**
 * 设置网元视图生成器，用于创建和网元关联的网元视图，默认用element#getElementUIClass返回的类型创建和网元关联的网元视图
 * twaver.Defaults.ELEMENTUI_FUNCTION = function(network, element){
 *     var clazz = element.getElementUIClass();
 *     if (clazz) {
 *          return new clazz(network, element);
 *     }
 *     return null;
 *  }
 * @method twaver.vector.Network.setElementUIFunction
 * @param {Function} value 网元视图生成器
 */
twaver.vector.Network.prototype.setElementUIFunction = function (value) {}

/**
 * 设置是否包含编辑交互处理器
 * @method twaver.vector.Network.setHasEditInteraction
 * @param {Boolean} value 是否包含编辑交互处理器
 */
twaver.vector.Network.prototype.setHasEditInteraction = function (value) {}

/**
 * 设置水平滚动条是否可见
 * @method twaver.vector.Network.setHScrollBarVisible
 * @param {Boolean} v 水平滚动条是否可见
 */
twaver.vector.Network.prototype.setHScrollBarVisible = function (v) {}

/**
 * 设置交互处理器，交互处理器用于设置Network相应哪些键盘和鼠标事件。
 * @method twaver.vector.Network.setInteractions
 * @param {twaver.List} interactions 包含交互处理器的集合
 * @example network.setInteractions([
 *     new twaver.network.interaction.SelectInteraction(network),
 *     new twaver.network.interaction.EditInteraction(network),
 *     new twaver.network.interaction.MoveInteraction(network),
 *     new twaver.network.interaction.DefaultInteraction(network)
 * ]);
 */
twaver.vector.Network.prototype.setInteractions = function (interactions) {}

/**
 * 设置是否允许用键盘Delete键删除选中网元
 * @method twaver.vector.Network.setKeyboardRemoveEnabled
 * @param {Boolean} v 是否允许用键盘Delete键删除选中网元
 */
twaver.vector.Network.prototype.setKeyboardRemoveEnabled = function (v) {}

/**
 * 设置是否允许用键盘Ctrl+A键选择所有网元
 * @method twaver.vector.Network.setKeyboardSelectEnabled
 * @param {Boolean} v 是否允许用键盘Ctrl+A键选择所有网元
 */
twaver.vector.Network.prototype.setKeyboardSelectEnabled = function (v) {}

/**
 * 设置延迟移动网元时是否有动画效果
 * @method twaver.vector.Network.setLazyMoveAnimate
 * @param {Boolean} v 延迟移动网元时是否有动画效果
 */
twaver.vector.Network.prototype.setLazyMoveAnimate = function (v) {}

/**
 * 设置延迟移动网元时轮廓是否填充
 * @method twaver.vector.Network.setLazyMoveFill
 * @param {Boolean} v 延迟移动网元时轮廓是否填充
 */
twaver.vector.Network.prototype.setLazyMoveFill = function (v) {}

/**
 * 设置延迟移动网元时网元的填充色
 * @method twaver.vector.Network.setLazyMoveFillColor
 * @param {String} v 延迟移动网元时网元的填充色
 */
twaver.vector.Network.prototype.setLazyMoveFillColor = function (v) {}

/**
 * 设置延迟移动网元时网元的填充色
 * @method twaver.vector.Network.setLazyMoveOutlineColor
 * @param {String} v 延迟移动网元时网元的填充色
 */
twaver.vector.Network.prototype.setLazyMoveOutlineColor = function (v) {}

/**
 * 设置延迟移动网元时网元的边框宽度
 * @method twaver.vector.Network.setLazyMoveOutlineWidth
 * @param {Number} v 延迟移动网元时网元的边框宽度
 */
twaver.vector.Network.prototype.setLazyMoveOutlineWidth = function (v) {}

/**
 * 设置是否限制网元坐标不能为负
 * @method twaver.vector.Network.setLimitElementInPositiveLocation
 * @param {Boolean} v 是否限制网元坐标不能为负
 */
twaver.vector.Network.prototype.setLimitElementInPositiveLocation = function (v) {}

/**
 * 设置是否限制左上角
 * @method twaver.vector.Network.setLimitViewInCanvas
 * @param {Boolean} v 是否限制左上角
 */
twaver.vector.Network.prototype.setLimitViewInCanvas = function (v) {}

/**
 * 设置节点是否可以连线的过滤器
 * @method twaver.vector.Network.setLinkableFunction
 * @param {Function} value 节点是否可以连线的过滤器
 */
twaver.vector.Network.prototype.setLinkableFunction = function (value) {}

/**
 * 设置是否启用流动Link，默认是false
 * @method twaver.vector.Network.setLinkFlowEnabled
 * @param {String} value 是否启用流动Link
 */
twaver.vector.Network.prototype.setLinkFlowEnabled = function (value) {}

/**
 * 设置LINK的流动间隔时间
 * @method twaver.vector.Network.setLinkFlowInterval
 * @param {String} value Link的流动间隔时间(毫秒)
 */
twaver.vector.Network.prototype.setLinkFlowInterval = function (value) {}

/**
 * 设置连线路径生成函数function (linkUI, defaultPoints)
 * @method twaver.vector.Network.setLinkPathFunction
 * @param {Function} value 连线路径生成函数
 */
twaver.vector.Network.prototype.setLinkPathFunction = function (value) {}

/**
 * 设置网元被选择时是否让其可见
 * @method twaver.vector.Network.setMakeVisibleOnSelected
 * @param {Boolean} v 网元被选择时是否让其可见
 */
twaver.vector.Network.prototype.setMakeVisibleOnSelected = function (v) {}

/**
 * 设置网元可移动过滤器，用于判断网元是否可以移动，如果网元是Link，则不可移动；如果movableFunction返回false，则也不可移动；如果网元所在的层不可移动，则也不可移动；否则可以移动
 * @method twaver.vector.Network.setMovableFunction
 * @param {Function} v 网元可移动过滤器
 * @example network.setMovableFunction(function (element) {
 *     return element.getName() === 'From';
 * });
 */
twaver.vector.Network.prototype.setMovableFunction = function (v) {}

/**
 * 设置是否正在移动网元
 * @method twaver.vector.Network.setMovingElement
 * @param {Boolean} v 是否正在移动网元
 */
twaver.vector.Network.prototype.setMovingElement = function (v) {}

/**
 * 设置交互模式为微软触摸交互模式
 * @method twaver.vector.Network.setMSTouchInteractions
 */
twaver.vector.Network.prototype.setMSTouchInteractions = function () {}

/**
 * 设置不是代理的连线是否可见
 * @method twaver.vector.Network.setNoAgentLinkVisible
 * @param {Boolean} v 不是代理的连线是否可见
 */
twaver.vector.Network.prototype.setNoAgentLinkVisible = function (v) {}

/**
 * 设置是否允许框选网元
 * @method twaver.vector.Network.setRectSelectEnabled
 * @param {Boolean} v 是否允许框选网元
 */
twaver.vector.Network.prototype.setRectSelectEnabled = function (v) {}

/**
 * 设置框选网元过滤器
 * @method twaver.vector.Network.setRectSelectFilter
 * @param {Function} v 框选网元过滤器
 */
twaver.vector.Network.prototype.setRectSelectFilter = function (v) {}

/**
 * 设置改变网元大小时是否有动画效果
 * @method twaver.vector.Network.setResizeAnimate
 * @param {Boolean} v 改变网元大小时是否有动画效果
 */
twaver.vector.Network.prototype.setResizeAnimate = function (v) {}

/**
 * 设置延迟改变网元大小时网元边框的颜色
 * @method twaver.vector.Network.setResizeLineColor
 * @param {String} v 延迟改变网元大小时网元边框的颜色
 */
twaver.vector.Network.prototype.setResizeLineColor = function (v) {}

/**
 * 设置延迟改变网元大小时网元边框的宽度
 * @method twaver.vector.Network.setResizeLineWidth
 * @param {Number} v 延迟改变网元大小时网元边框的宽度
 */
twaver.vector.Network.prototype.setResizeLineWidth = function (v) {}

/**
 * 设置改变网元大小时控制点的填充色
 * @method twaver.vector.Network.setResizePointFillColor
 * @param {String} v 改变网元大小时控制点的填充色
 */
twaver.vector.Network.prototype.setResizePointFillColor = function (v) {}

/**
 * 设置改变网元大小时控制点的边框颜色
 * @method twaver.vector.Network.setResizePointOutlineColor
 * @param {String} v 改变网元大小时控制点的边框颜色
 */
twaver.vector.Network.prototype.setResizePointOutlineColor = function (v) {}

/**
 * 设置改变网元大小时控制点的边框宽度
 * @method twaver.vector.Network.setResizePointOutlineWidth
 * @param {Number} v 改变网元大小时控制点的边框宽度
 */
twaver.vector.Network.prototype.setResizePointOutlineWidth = function (v) {}

/**
 * 设置更改网元大小的控制点的大小
 * @method twaver.vector.Network.setResizePointSize
 * @param {Number} v 更改网元大小的控制点的大小
 */
twaver.vector.Network.prototype.setResizePointSize = function (v) {}

/**
 * 设置网元是否可旋转过滤器
 * @method twaver.vector.Network.setRotatableFunction
 * @param {Function} value 网元是否可旋转过滤器
 */
twaver.vector.Network.prototype.setRotatableFunction = function (value) {}

/**
 * 设置旋转控制点的填充色
 * @method twaver.vector.Network.setRotatePointFillColor
 * @param {String} v 旋转控制点的填充色
 */
twaver.vector.Network.prototype.setRotatePointFillColor = function (v) {}

/**
 * 设置旋转控制点的偏移量
 * @method twaver.vector.Network.setRotatePointOffset
 * @param {Number} v 旋转控制点的偏移量
 */
twaver.vector.Network.prototype.setRotatePointOffset = function (v) {}

/**
 * 设置旋转控制点的边框颜色
 * @method twaver.vector.Network.setRotatePointOutlineColor
 * @param {String} v 旋转控制点的边框颜色
 */
twaver.vector.Network.prototype.setRotatePointOutlineColor = function (v) {}

/**
 * 设置旋转控制点的边框宽度
 * @method twaver.vector.Network.setRotatePointOutlineWidth
 * @param {Number} v 旋转控制点的边框宽度
 */
twaver.vector.Network.prototype.setRotatePointOutlineWidth = function (v) {}

/**
 * 设置旋转控制点的大小
 * @method twaver.vector.Network.setRotatePointSize
 * @param {Number} v 旋转控制点的大小
 */
twaver.vector.Network.prototype.setRotatePointSize = function (v) {}

/**
 * 设置旋转刻度填充色
 * @method twaver.vector.Network.setRotateScaleFillColor
 * @param {String} v 旋转刻度填充色
 */
twaver.vector.Network.prototype.setRotateScaleFillColor = function (v) {}

/**
 * 设置旋转刻度文字字体颜色
 * @method twaver.vector.Network.setRotateScaleFontColor
 * @param {String} v 旋转刻度文字字体颜色
 */
twaver.vector.Network.prototype.setRotateScaleFontColor = function (v) {}

/**
 * 设置旋转刻度高度
 * @method twaver.vector.Network.setRotateScaleHeight
 * @param {Number} v 旋转刻度高度
 */
twaver.vector.Network.prototype.setRotateScaleHeight = function (v) {}

/**
 * 设置旋转刻度宽度
 * @method twaver.vector.Network.setRotateScaleWidth
 * @param {Number} v 旋转刻度宽度
 */
twaver.vector.Network.prototype.setRotateScaleWidth = function (v) {}

/**
 * 设置正在旋转的节点
 * @method twaver.vector.Network.setRotatingElement
 * @param {twaver.Node} v 节点
 */
twaver.vector.Network.prototype.setRotatingElement = function (v) {}

/**
 * 设置滚动条是否可见
 * @method twaver.vector.Network.setScrollBarVisible
 * @param {Number} v 滚动条是否可见
 */
twaver.vector.Network.prototype.setScrollBarVisible = function (v) {}

/**
 * 设置滚动条宽度
 * @method twaver.vector.Network.setScrollBarWidth
 * @param {Number} v 滚动条宽度
 */
twaver.vector.Network.prototype.setScrollBarWidth = function (v) {}

/**
 * 设置框选时矩形框的填充色
 * @method twaver.vector.Network.setSelectFillColor
 * @param {String} v 框选时矩形框的填充色
 */
twaver.vector.Network.prototype.setSelectFillColor = function (v) {}

/**
 * 设置是否正在框选网元
 * @method twaver.vector.Network.setSelectingElement
 * @param {Boolean} v 是否正在框选网元
 */
twaver.vector.Network.prototype.setSelectingElement = function (v) {}

/**
 * 设置选择模式（当框选网元时，哪些网元会被选中），默认值为twaver.Defaults.NETWORK_SELECT_MODE（mix）
 * 可选值为：
 * mix 混合模式（从左上角往右下角框选时为contain模式，从右下角往左上角框选时为intersect模式）
 * intersect 相交模式（只要和选择区域相交的网元都会被选中）
 * contain 包含模式（只有完全被选择区域包含的网元会被选中）
 * @method twaver.vector.Network.setSelectMode
 * @param {String} v 选择模式
 */
twaver.vector.Network.prototype.setSelectMode = function (v) {}

/**
 * 设置框选时矩形框的边框颜色
 * @method twaver.vector.Network.setSelectOutlineColor
 * @param {String} v 框选时矩形框的边框颜色
 */
twaver.vector.Network.prototype.setSelectOutlineColor = function (v) {}

/**
 * 设置框选时矩形框的边框宽度
 * @method twaver.vector.Network.setSelectOutlineWidth
 * @param {String} v 框选时矩形框的边框宽度
 */
twaver.vector.Network.prototype.setSelectOutlineWidth = function (v) {}

/**
 * 设置网元被选中后是否置顶
 * @method twaver.vector.Network.setSendToTopOnSelected
 * @param {Boolean} v 网元被选中后是否置顶
 */
twaver.vector.Network.prototype.setSendToTopOnSelected = function (v) {}

/**
 * 设置是否显示旋转网元时的刻度
 * @method twaver.vector.Network.setShowRotateScale
 * @param {Boolean} v 是否显示旋转网元时的刻度
 */
twaver.vector.Network.prototype.setShowRotateScale = function (v) {}

/**
 * 设置进入下一层子网或返回上一层子网时是否有动画效果
 * @method twaver.vector.Network.setSubNetworkAnimate
 * @param {Boolean} v 进入下一层子网或返回上一层子网时是否有动画效果
 */
twaver.vector.Network.prototype.setSubNetworkAnimate = function (v) {}

/**
 * 设置是否让提示信息生效
 * @method twaver.vector.Network.setToolTipEnabled
 * @param {Boolean} value 是否让提示信息生效
 */
twaver.vector.Network.prototype.setToolTipEnabled = function (value) {}

/**
 * 设置当前交互模式为触摸模式，只响应触摸事件，包含触摸交互处理器TouchInteraction（处理触摸事件）
 * @method twaver.vector.Network.setTouchInteractions
 */
twaver.vector.Network.prototype.setTouchInteractions = function () {}

/**
 * 设置点击网元的透明部分网元是否能被选中
 * @method twaver.vector.Network.setTransparentSelectionEnable
 * @param {Boolean} v 设置点击网元的透明部分网元是否能被选中
 */
twaver.vector.Network.prototype.setTransparentSelectionEnable = function (v) {}

/**
 * 设置视图偏移量
 * @method twaver.vector.Network.setViewOffSet
 * @param {Number} xoff x坐标
 * @param {Number} yoff y坐标
 */
twaver.vector.Network.prototype.setViewOffSet = function (xoff, yoff) {}

/**
 * 设置视图区域
 * @method twaver.vector.Network.setViewRect
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Number} w 宽度
 * @param {Number} h 高度
 */
twaver.vector.Network.prototype.setViewRect = function (x, y, w, h) {}

/**
 * 设置网元可见过滤器，用于判断指定的网元是否可见，如果可见过滤器visibleFunction返回false，则不可见；如果网元所在的层不可见，则网元不可见；否则网元可见
 * @method twaver.vector.Network.setVisibleFunction
 * @param {Function} value 网元可见过滤器
 * @example network.setVisibleFunction(function (element) {
 *     return !(element instanceof twaver.Link);
 * });
 */
twaver.vector.Network.prototype.setVisibleFunction = function (value) {}

/**
 * 设置垂直滚动条是否可见
 * @method twaver.vector.Network.setVScrollBarVisible
 * @param {Boolean} v 垂直滚动条是否可见
 */
twaver.vector.Network.prototype.setVScrollBarVisible = function (v) {}

/**
 * 设置滚动滚轮是否缩放界面
 * @method twaver.vector.Network.setWheelToZoom
 * @param {Boolean} v 设置滚动滚轮是否缩放界面
 */
twaver.vector.Network.prototype.setWheelToZoom = function (v) {}

/**
 * 缩放的时候是否显示左上角的提示按钮
 * @method twaver.vector.Network.setZoomDivVisible
 * @param {Boolean} v 缩放的时候是否显示左上角的提示按钮
 */
twaver.vector.Network.prototype.setZoomDivVisible = function (v) {}

/**
 * 设置拓扑组件的缩放管理器
 * @method twaver.vector.Network.setZoomManager
 * @param {twaver.vector.BaseZoomManager} zoomManager 缩放管理器
 */
twaver.vector.Network.prototype.setZoomManager = function (zoomManager) {}

/**
 * 设置缩放可见标示对象
 * @method twaver.vector.Network.setZoomVisibilityThresholds
 * @param {Object} value 缩放可见标示对象
 */
twaver.vector.Network.prototype.setZoomVisibilityThresholds = function (value) {}

/**
 * 从Network生成指定大小的Canvas元素，用于生成缩略图
 * @method twaver.vector.Network.toCanvas
 * @param {Number} w 要生成的Canvas元素的宽度
 * @param {Number} h 要生成的Canvas元素的高度
 * @param {HTMLCanvasElement} [c] 目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素
 * @return {HTMLCanvasElement} 返回Canvas元素
 */
twaver.vector.Network.prototype.toCanvas = function (w, h, c) {}

/**
 * 从Network的指定区域生成指定比例的Canvas元素，用于生成缩略图
 * @method twaver.vector.Network.toCanvasByRegion
 * @param {Object} rect 包含x、y、width和height属性的Object对象
 * @param {Number} scale 缩放比例
 * @param {HTMLCanvasElement} [c] 目标Canvas元素，可选，默认为null，如果为null，则创建新的Canvas元素，否则使用此Canvas元素
 * @return {HTMLCanvasElement} 返回Canvas元素
 */
twaver.vector.Network.prototype.toCanvasByRegion = function (rect, scale, c) {}

/**
 * 返回上一层子网，可以设置是否使用动画效果，还可以指定返回结束后执行的动作
 * @method twaver.vector.Network.upSubNetwork
 * @param {Boolean} [animate] 是否使用动画效果，可选，默认为false
 * @param {Function} [finishFunction] 返回上一层子网结束后执行的回调函数，可选，默认为null
 */
twaver.vector.Network.prototype.upSubNetwork = function (animate, finishFunction) {}

/**
 * 计算画布大小
 * @method twaver.vector.Network.validateCanvasSize
 */
twaver.vector.Network.prototype.validateCanvasSize = function () {}


/**
 * 棒图是TWaver图表中的一种，它是以条形柱状的形式展示数据。它支持多种类型的呈现方式，通过setType方法设置。
 * 棒图是和DataBox绑定的，它呈现的是DataBox中Data的chart.values的值。
 * 
 * @class twaver.charts.BarChart
 * @constructor
 * @extends twaver.charts.ScaleChart
 * @param {twaver.DataBox} [dataBox] 绑定的数据容器
 * @return {twaver.charts.BarChart}
 */
twaver.charts.BarChart = function (dataBox) {}

twaver.charts.BarChart.prototype = new twaver.charts.ScaleChart()

/**
 * 刷新棒图为默认类型时的数据模型
 * @method twaver.charts.BarChart.defaultValidateModel
 */
twaver.charts.BarChart.prototype.defaultValidateModel = function () {}

/**
 * 绘制棒图显示的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
 * @method twaver.charts.BarChart.drawContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制棒图内容的区域
 * @param {Number} validHeight 棒图上显示柱子的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.BarChart.prototype.drawContent = function (g, rect, validHeight, skyline) {}

/**
 * 绘制棒图为默认类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
 * @method twaver.charts.BarChart.drawDefaultContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制棒图内容的区域
 * @param {Number} validHeight 棒图上显示柱子的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.BarChart.prototype.drawDefaultContent = function (g, rect, validHeight, skyline) {}

/**
 * 绘制棒图为组类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
 * @method twaver.charts.BarChart.drawGroupContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制棒图内容的区域
 * @param {Number} validHeight 棒图上显示柱子的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.BarChart.prototype.drawGroupContent = function (g, rect, validHeight, skyline) {}

/**
 * 绘制棒图为层次类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
 * @method twaver.charts.BarChart.drawLayerContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制棒图内容的区域
 * @param {Number} validHeight 棒图上显示柱子的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.BarChart.prototype.drawLayerContent = function (g, rect, validHeight, skyline) {}

/**
 * 绘制棒图为百分比类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
 * @method twaver.charts.BarChart.drawPercentContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制棒图内容的区域
 * @param {Number} validHeight 棒图上显示柱子的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.BarChart.prototype.drawPercentContent = function (g, rect, validHeight, skyline) {}

/**
 * 绘制一个矩形区域
 * @method twaver.charts.BarChart.drawRect
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {String} color 图表绘制的颜色
 * @param {Boolean} selected 是否选中当前的矩形区域
 * @param {Number} x 矩形区域的X坐标
 * @param {Number} y 矩形区域的Y坐标
 * @param {Number} w 矩形区域的宽度
 * @param {Number} h 矩形区域的高度
 */
twaver.charts.BarChart.prototype.drawRect = function (g, color, selected, x, y, w, h) {}

/**
 * 绘制棒图为叠加类型时的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
 * @method twaver.charts.BarChart.drawStackContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制棒图内容的区域
 * @param {Number} validHeight 棒图上显示柱子的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.BarChart.prototype.drawStackContent = function (g, rect, validHeight, skyline) {}

/**
 * 获取棒图的显示类型，默认为twaver.Defaults.BARCHART_TYPE
 * 支持的类型有：
 * 'default','group','stack','layer','percent'
 * @method twaver.charts.BarChart.getType
 * @return {String} 棒图的显示类型
 */
twaver.charts.BarChart.prototype.getType = function () {}

/**
 * 刷新棒图为组类型时的数据模型
 * @method twaver.charts.BarChart.groupValidateModel
 */
twaver.charts.BarChart.prototype.groupValidateModel = function () {}

/**
 * 刷新棒图为层次类型时的数据模型
 * @method twaver.charts.BarChart.layerValidateModel
 */
twaver.charts.BarChart.prototype.layerValidateModel = function () {}

/**
 * 刷新棒图为百分比类型时的数据模型
 * @method twaver.charts.BarChart.percentValidateModel
 */
twaver.charts.BarChart.prototype.percentValidateModel = function () {}

/**
 * 设置棒图的显示类型，默认为twaver.Defaults.BARCHART_TYPE
 * 支持的类型有：
 * 'default','group','stack','layer','percent'
 * @method twaver.charts.BarChart.setType
 * @param {String} v 棒图的显示类型
 */
twaver.charts.BarChart.prototype.setType = function (v) {}

/**
 * 刷新棒图为叠加类型时的数据模型
 * @method twaver.charts.BarChart.stackValidateModel
 */
twaver.charts.BarChart.prototype.stackValidateModel = function () {}


/**
 * 气泡图属于分散图的一种，它是用气泡来绘制数据的。在一个气泡图中，x轴，y轴以及气泡值本身分别代表了一个事件的三个值的变化，而气泡值的大小又取决于x轴与y轴上值的大小。
 * 气泡图支持多种形状的呈现，它取决于网元上chart.bubble.shape的值
 * @class twaver.charts.BubbleChart
 * @constructor
 * @extends twaver.charts.ScaleChart
 * @param {twaver.DataBox} [dataBox] 绑定的数据容器
 * @return {twaver.charts.BubbleChart}
 */
twaver.charts.BubbleChart = function (dataBox) {}

twaver.charts.BubbleChart.prototype = new twaver.charts.ScaleChart()

/**
 * 绘制气泡图的显示内容，用户不需要调用此方法，但是可以重写此方法来绘制气泡显示的内容
 * @method twaver.charts.BubbleChart.drawContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制气泡图内容的区域
 * @param {Number} validHeight 气泡图上显示气泡的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.BubbleChart.prototype.drawContent = function (g, rect, validHeight, skyline) {}

/**
 * 获取指定数据在气泡上显示的名称，默认取值于data.getStyle('chart.names')
 * @method twaver.charts.BubbleChart.getNames
 * @param {twaver.Data} data 指定的数据
 * @return {twaver.List} 返回一个包含Stirng类型的List对象
 */
twaver.charts.BubbleChart.prototype.getNames = function (data) {}

/**
 * 获取选中网元时阴影的颜色，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_COLOR
 * @method twaver.charts.BubbleChart.getSelectShadowColor
 * @return {String} 选中网元时阴影的颜色
 */
twaver.charts.BubbleChart.prototype.getSelectShadowColor = function () {}

/**
 * 获取选中网元时阴影的偏移量，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_OFFSET
 * @method twaver.charts.BubbleChart.getSelectShadowOffset
 * @return {Number} 选中网元时阴影的偏移量
 */
twaver.charts.BubbleChart.prototype.getSelectShadowOffset = function () {}

/**
 * 获取指定的网元在气泡图上气泡显示的形状，取的是网元上chart.bubble.shape样式的值。
 * TWaver中气泡支持的形状有：
 * 'rectangle'：矩形，
 * 'oval'：椭圆形，
 * 'roundrect'：圆角矩形，
 * 'star'：星形，
 * 'triangle'：三角形，
 * 'circle'：圆形，
 * 'hexagon'：六角形，
 * 'pentagon'：五角形，
 * 'diamond'：菱形
 * 
 * @method twaver.charts.BubbleChart.getShape
 * @param {twaver.Data} data 指定的数据对象
 * @return {String} 气泡的形状
 */
twaver.charts.BubbleChart.prototype.getShape = function (data) {}

/**
 * 获取指定的网元在气泡图上显示的大小，默认为data.getStyle('chart.values')的值。
 * @method twaver.charts.BubbleChart.getSize
 * @param {twaver.Data} data 指定的数据对象
 * @param {Number} value 指定数据显示在图表上的值
 * @return {Number} 返回指定数据显示在图表上气泡值的大小
 */
twaver.charts.BubbleChart.prototype.getSize = function (data, value) {}

/**
 * 获取X轴限制的最小值，默认为twaver.Defaults.BUBBLECHART_XAXIS_LOWER_LIMIT
 * @method twaver.charts.BubbleChart.getXAxisLowerLimit
 * @return {Number} X轴限制的最小值
 */
twaver.charts.BubbleChart.prototype.getXAxisLowerLimit = function () {}

/**
 * 获取X轴限制的最大值，默认为twaver.Defaults.BUBBLECHART_XAXIS_UPPER_LIMIT
 * @method twaver.charts.BubbleChart.getXAxisUpperLimit
 * @return {Number} X轴限制的最大值
 */
twaver.charts.BubbleChart.prototype.getXAxisUpperLimit = function () {}

/**
 * 获取指定的数据在气泡图上显示的X轴的坐标值
 * @method twaver.charts.BubbleChart.getXAxisValues
 * @param {twaver.Data} data 指定的数据对象
 * @return {Number} X轴的坐标值
 */
twaver.charts.BubbleChart.prototype.getXAxisValues = function (data) {}

/**
 * 获取气泡图上显示网元的X坐标的最大的值
 * @method twaver.charts.BubbleChart.getXMax
 * @return {Number} X坐标的最大的值
 */
twaver.charts.BubbleChart.prototype.getXMax = function () {}

/**
 * 获取气泡图上显示网元的X坐标的最小的值
 * @method twaver.charts.BubbleChart.getXMin
 * @return {Number} X坐标的最小的值
 */
twaver.charts.BubbleChart.prototype.getXMin = function () {}

/**
 * 获取X轴上显示的值的范围，值等于XMax-XMin
 * @method twaver.charts.BubbleChart.getXRange
 * @return {Number} X轴上显示的值的范围
 */
twaver.charts.BubbleChart.prototype.getXRange = function () {}

/**
 * 获取气泡图上平行于X轴的刻度线的显示颜色，默认为
 * twaver.Defaults.BUBBLECHART_XSCALE_LINE_COLOR
 * @method twaver.charts.BubbleChart.getXScaleLineColor
 * @return {String} 刻度线的显示颜色
 */
twaver.charts.BubbleChart.prototype.getXScaleLineColor = function () {}

/**
 * 获取气泡图上平行于X轴的刻度线的宽度，默认为
 * twaver.Defaults.BUBBLECHART_XSCALE_LINE_WIDTH
 * @method twaver.charts.BubbleChart.getXScaleLineWidth
 * @return {Number} 刻度线的宽度
 */
twaver.charts.BubbleChart.prototype.getXScaleLineWidth = function () {}

/**
 * 获取指定的数据在气泡图上显示的Y轴的坐标值
 * @method twaver.charts.BubbleChart.getYAxisValues
 * @param {twaver.Data} data 指定的数据
 * @return {Number} Y轴的坐标值
 */
twaver.charts.BubbleChart.prototype.getYAxisValues = function (data) {}

/**
 * 设置选中网元时阴影的颜色，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_COLOR
 * @method twaver.charts.BubbleChart.setSelectShadowColor
 * @param {String} v 选中网元时阴影的颜色
 */
twaver.charts.BubbleChart.prototype.setSelectShadowColor = function (v) {}

/**
 * 设置选中网元时阴影的偏移量，默认为twaver.Defaults.BUBBLECHART_SELECT_SHADOW_OFFSET
 * @method twaver.charts.BubbleChart.setSelectShadowOffset
 * @param {Number} v 选中网元时阴影的偏移量
 */
twaver.charts.BubbleChart.prototype.setSelectShadowOffset = function (v) {}

/**
 * 设置X轴限制的最小值，默认为twaver.Defaults.BUBBLECHART_XAXIS_LOWER_LIMIT
 * @method twaver.charts.BubbleChart.setXAxisLowerLimit
 * @param {Number} v X轴限制的最小值
 */
twaver.charts.BubbleChart.prototype.setXAxisLowerLimit = function (v) {}

/**
 * 设置X轴限制的最大值，默认为twaver.Defaults.BUBBLECHART_XAXIS_UPPER_LIMIT
 * @method twaver.charts.BubbleChart.setXAxisUpperLimit
 * @param {Number} v X轴限制的最大值
 */
twaver.charts.BubbleChart.prototype.setXAxisUpperLimit = function (v) {}

/**
 * 设置气泡图上平行于X轴的刻度线的显示颜色，默认为
 * twaver.Defaults.BUBBLECHART_XSCALE_LINE_COLOR
 * @method twaver.charts.BubbleChart.setXScaleLineColor
 * @param {String} v 刻度线的显示颜色
 */
twaver.charts.BubbleChart.prototype.setXScaleLineColor = function (v) {}

/**
 * 设置气泡图上平行于X轴的刻度线的宽度，默认为
 * twaver.Defaults.BUBBLECHART_XSCALE_LINE_WIDTH
 * @method twaver.charts.BubbleChart.setXScaleLineWidth
 * @param {Number} v 刻度线的宽度
 */
twaver.charts.BubbleChart.prototype.setXScaleLineWidth = function (v) {}


/**
 * 曲线图是图表组件中的一种。它是以曲线的形式展示数据。曲线图展示的是数据容器的网元中chart.values的值
 * @class twaver.charts.LineChart
 * @constructor
 * @extends twaver.charts.ScaleChart
 * @param {twaver.DataBox} [dataBox] 绑定的数据容器
 * @return {twaver.charts.LineChart}
 */
twaver.charts.LineChart = function (dataBox) {}

twaver.charts.LineChart.prototype = new twaver.charts.ScaleChart()

/**
 * 绘制曲线图显示的形状，用户不需要调用此方法，但可以重写此方法来实现自己定制的图形
 * @method twaver.charts.LineChart.drawContent
 * @param {CanvasRenderingContext2D} g 绘制图表的画笔
 * @param {Object} rect 绘制图表内容的区域
 * @param {Number} validHeight 曲线图上显示曲线的有效高度
 * @param {Number} skyline Y轴刻度的最小值
 */
twaver.charts.LineChart.prototype.drawContent = function (g, rect, validHeight, skyline) {}

/**
 * 获取指定的网元在曲线图上显示的线的宽度，取的是网元上'chart.line.width'的样式值
 * @method twaver.charts.LineChart.getLineWidth
 * @param {twaver.Data} data 指定的数据对象
 * @return {Number} 线的宽度
 */
twaver.charts.LineChart.prototype.getLineWidth = function (data) {}

/**
 * 获取指定数据在曲线图上显示的瞄点的形状，默认为圆形。TWaver中瞄点的形状支持：
 * 'rectangle'：矩形，
 * 'oval'：椭圆形，
 * 'roundrect'：圆角矩形，
 * 'star'：星形，
 * 'triangle'：三角形，
 * 'circle'：圆形，
 * 'hexagon'：六角形，
 * 'pentagon'：五角形，
 * 'diamond'：菱形
 * @method twaver.charts.LineChart.getMarkerShape
 * @param {twaver.Data} data 指定的数据对象
 * @return {String} 瞄点的形状
 */
twaver.charts.LineChart.prototype.getMarkerShape = function (data) {}

/**
 * 获取指定数据在曲线图上显示的瞄点的大小
 * @method twaver.charts.LineChart.getMarkerSize
 * @param {twaver.Data} data 指定的数据对象
 * @return {Number} 瞄点的大小
 */
twaver.charts.LineChart.prototype.getMarkerSize = function (data) {}

/**
 * 获取鼠标位置所在的点索引
 * @method twaver.charts.LineChart.getPointIndexAt
 * @return {Number} 返回鼠标位置所在的点索引
 */
twaver.charts.LineChart.prototype.getPointIndexAt = function () {}

/**
 * 获取曲线图上平行于X轴的刻度线的显示颜色，默认为
 * twaver.Defaults.LINECHART_YSCALE_LINE_COLOR
 * @method twaver.charts.LineChart.getXScaleLineColor
 * @return {String} 平行于X轴的刻度线的显示颜色
 */
twaver.charts.LineChart.prototype.getXScaleLineColor = function () {}

/**
 * 设置曲线图上平行于X轴的刻度线的宽度，默认为
 * twaver.Defaults.LINECHART_YSCALE_LINE_WIDTH
 * @method twaver.charts.LineChart.getXScaleLineWidth
 * @return {Number} 刻度线的宽度
 */
twaver.charts.LineChart.prototype.getXScaleLineWidth = function () {}

/**
 * 当设置网元的图表显示值的集合不连续时，比如中间有Number.NaN，判断是否需要在曲线图上显示不连续的效果
 * 
 * @method twaver.charts.LineChart.isInterruptable
 * @return {Boolean} true为显示不连续的效果，否则为false
 */
twaver.charts.LineChart.prototype.isInterruptable = function () {}

/**
 * 当设置网元的图表显示值的集合不连续时，比如中间有Number.NaN，设置是否需要在曲线图上显示不连续的效果
 * @method twaver.charts.LineChart.setInterruptable
 * @param {Boolean} v true为显示不连续的效果，否则为false
 */
twaver.charts.LineChart.prototype.setInterruptable = function (v) {}

/**
 * 设置曲线图上平行于X轴的刻度线的显示颜色，默认为
 * twaver.Defaults.LINECHART_YSCALE_LINE_COLOR
 * @method twaver.charts.LineChart.setXScaleLineColor
 * @param {String} v 平行于X轴的刻度线的显示颜色
 */
twaver.charts.LineChart.prototype.setXScaleLineColor = function (v) {}

/**
 * 设置曲线图上平行于X轴的刻度线的宽度，默认为
 * twaver.Defaults.LINECHART_YSCALE_LINE_WIDTH
 * @method twaver.charts.LineChart.setXScaleLineWidth
 * @param {Number} v 平行于X轴的刻度线的宽度
 */
twaver.charts.LineChart.prototype.setXScaleLineWidth = function (v) {}


/**
 * 构造函数
 * 它是以列表的形式来展示数据容器中的数据
 * @class twaver.controls.List
 * @constructor
 * @extends twaver.controls.ListBase
 * @param {twaver.DataBox} [dataBox] 指定的数据容器
 * @return {twaver.controls.List}
 */
twaver.controls.List = function (dataBox) {}

twaver.controls.List.prototype = new twaver.controls.ListBase()

/**
 * 获取列表上父亲和孩子之间的缩进，默认为twaver.Defaults.LIST_INDENT
 * @method twaver.controls.List.getIndent
 * @return {Number} 父子之间的缩进
 */
twaver.controls.List.prototype.getIndent = function () {}

/**
 * 获取列表的行高，默认为
 * twaver.Defaults.LIST_ROW_HEIGHT
 * @method twaver.controls.List.getRowHeight
 * @return {Number} 列表的行高
 */
twaver.controls.List.prototype.getRowHeight = function () {}

/**
 * 获取列表上行之间线的颜色，默认为 twaver.Defaults.LIST_ROW_LINE_COLOR
 * @method twaver.controls.List.getRowLineColor
 * @return {String} 列表上行之间线的颜色
 */
twaver.controls.List.prototype.getRowLineColor = function () {}

/**
 * 获取列表上行之间线的宽度，默认为twaver.Defaults.LIST_ROW_LINE_WIDTH
 * @method twaver.controls.List.getRowLineWidth
 * @return {Number} 列表上行之间线的宽度
 */
twaver.controls.List.prototype.getRowLineWidth = function () {}

/**
 * 获取列表上的数据排序的函数
 * @method twaver.controls.List.getSortFunction
 * @return {Function} 排序的函数
 * @example list.setSortFunction(function (d1, d2) {
 *          if (d1.getName() < d2.getName()) {
 *              return 1;
 *          } else if (d1.getName() == d2.getName()) {
 *               return 0;
 *          } else {
 *               return -1;
 *          }
 * });
 */
twaver.controls.List.prototype.getSortFunction = function () {}

/**
 * 获取列表上的数据是否可见的过滤器
 * @method twaver.controls.List.getVisibleFunction
 * @return {Function} 是否可见的过滤器
 * @example list.setVisibleFunction(function (element) {
 *      return element instanceof twaver.Node;
 * });
 */
twaver.controls.List.prototype.getVisibleFunction = function () {}

/**
 * 获取指定的列表上行的数据是否可勾选
 * @method twaver.controls.List.isCheckable
 * @param {twaver.Data} [data] 指定的数据对象
 * @return {Boolean} 是否可勾选，true为可勾选，否则为false
 */
twaver.controls.List.prototype.isCheckable = function (data) {}

/**
 * 是否为勾选模型
 * @method twaver.controls.List.isCheckMode
 * @return {Boolean} true为勾选模型，否则为false
 */
twaver.controls.List.prototype.isCheckMode = function () {}

/**
 * 判断列表是否支持键盘删除数据的操作，默认为 
 * twaver.Defaults.LIST_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.List.isKeyboardRemoveEnabled
 * @return {Boolean} true为可以键盘删除，否则为false
 */
twaver.controls.List.prototype.isKeyboardRemoveEnabled = function () {}

/**
 * 判断列表上是否支持键盘选择数据的操作，默认为twaver.Defaults.LIST_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.List.isKeyboardSelectEnabled
 * @return {Boolean} true为可以键盘选择数据，否则为false
 */
twaver.controls.List.prototype.isKeyboardSelectEnabled = function () {}

/**
 * 判断当选中某个列表上数据时，是否处于可见区域，默认为
 * twaver.Defaults.LIST_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.List.isMakeVisibleOnSelected
 * @return {Boolean} true为处于可见区域，否则为false
 */
twaver.controls.List.prototype.isMakeVisibleOnSelected = function () {}

/**
 * 调用renderData时会调用此方法，用户不需要直接调用此方法，可以重载此方法实现自己的逻辑
 * @method twaver.controls.List.onLabelRendered
 * @param {HTMLSpanElement} span 包含数据元标签的Span
 * @param {twaver.Data} data 指定的数据
 * @param {String} label 显示的标签值
 * @param {Number} row 指定的行号
 * @param {Boolean} selected 是否为选中状态
 */
twaver.controls.List.prototype.onLabelRendered = function (span, data, label, row, selected) {}

/**
 * 绘制列表中指定的数据
 * @method twaver.controls.List.renderData
 * @param {HTMLDivElement} div 包含数据的div
 * @param {twaver.Data} data 指定的数据
 * @param {Number} row 指定数据的行号
 * @param {Boolean} selected 是否为选中状态
 */
twaver.controls.List.prototype.renderData = function (div, data, row, selected) {}

/**
 * 设置是否为勾选模型
 * @method twaver.controls.List.setCheckMode
 * @param {Boolean} v true为勾选模型，否则为false
 */
twaver.controls.List.prototype.setCheckMode = function (v) {}

/**
 * 设置列表上父亲和孩子之间的缩进，默认为twaver.Defaults.LIST_INDENT
 * @method twaver.controls.List.setIndent
 * @param {Number} v 列表的缩进
 */
twaver.controls.List.prototype.setIndent = function (v) {}

/**
 * 设置列表是否支持键盘删除数据的操作，默认为 
 * twaver.Defaults.LIST_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.List.setKeyboardRemoveEnabled
 * @param {Boolean} v true为可以键盘删除，否则为false
 */
twaver.controls.List.prototype.setKeyboardRemoveEnabled = function (v) {}

/**
 * 设置列表上是否支持键盘选择数据的操作，默认为twaver.Defaults.LIST_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.List.setKeyboardSelectEnabled
 * @param {Boolean} v true为可以键盘选择数据，否则为false
 */
twaver.controls.List.prototype.setKeyboardSelectEnabled = function (v) {}

/**
 * 设置当选中某个列表上数据时，是否处于可见区域，默认为
 * twaver.Defaults.LIST_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.List.setMakeVisibleOnSelected
 * @param {Boolean} v true为处于可见区域，否则为false
 */
twaver.controls.List.prototype.setMakeVisibleOnSelected = function (v) {}

/**
 * 获取列表的行高，默认为
 * twaver.Defaults.LIST_ROW_HEIGHT
 * @method twaver.controls.List.setRowHeight
 * @param {Number} v 列表的行高
 */
twaver.controls.List.prototype.setRowHeight = function (v) {}

/**
 * 设置列表上行之间线的颜色，默认为 twaver.Defaults.LIST_ROW_LINE_COLOR
 * @method twaver.controls.List.setRowLineColor
 * @param {String} v 列表上行之间线的颜色
 */
twaver.controls.List.prototype.setRowLineColor = function (v) {}

/**
 * 设置列表上行之间线的宽度，默认为twaver.Defaults.LIST_ROW_LINE_WIDTH
 * @method twaver.controls.List.setRowLineWidth
 * @param {Number} v 列表上行之间线的宽度
 */
twaver.controls.List.prototype.setRowLineWidth = function (v) {}

/**
 * 设置列表上的数据排序的函数
 * @method twaver.controls.List.setSortFunction
 * @param {Function} v 排序的函数
 * @example list.setSortFunction(function (d1, d2) {
 *          if (d1.getName() < d2.getName()) {
 *              return 1;
 *          } else if (d1.getName() == d2.getName()) {
 *               return 0;
 *          } else {
 *               return -1;
 *          }
 * });
 */
twaver.controls.List.prototype.setSortFunction = function (v) {}

/**
 * 设置列表上的数据是否可见的过滤器
 * @method twaver.controls.List.setVisibleFunction
 * @param {Function} v 是否可见的过滤器
 * @example list.setVisibleFunction(function (element) {
 *      return element instanceof twaver.Node;
 * });
 */
twaver.controls.List.prototype.setVisibleFunction = function (v) {}


/**
 * 构造函数
 * 它是表格和树表的基类，定义了表格和树表类中通用的方法，它是和DataBox绑定的，以图表的形式显示DataBox中的数据
 * @class twaver.controls.TableBase
 * @constructor
 * @extends twaver.controls.ListBase
 * @param {twaver.DataBox} dataBox 指定的数据模型
 * @return {twaver.controls.TableBase}
 */
twaver.controls.TableBase = function (dataBox) {}

twaver.controls.TableBase.prototype = new twaver.controls.ListBase()

/**
 * 取消当前编辑器的编辑状态
 * @method twaver.controls.TableBase.cancelEditing
 */
twaver.controls.TableBase.prototype.cancelEditing = function () {}

/**
 * 提交单元格中编辑的值，将这个值回写到Data的属性中
 * @method twaver.controls.TableBase.commitEditValue
 * @param {Object} editInfo 指定的单元格编辑器的信息，它是一个包含column和data的对象
 * @param {Object} target 编辑器所对应的对象类型，它是一个包含type的对象类型，用于判断编辑器的类型
 */
twaver.controls.TableBase.prototype.commitEditValue = function (editInfo, target) {}

/**
 * 获取鼠标位置所在的列
 * @method twaver.controls.TableBase.getColumnAt
 * @param {MouseEvent} e 鼠标事件
 * @return {twaver.Column} 返回鼠标位置所在的列
 */
twaver.controls.TableBase.prototype.getColumnAt = function (e) {}

/**
 * 获取表格上列的数据容器
 * @method twaver.controls.TableBase.getColumnBox
 * @return {twaver.ColumnBox} 列数据容器
 */
twaver.controls.TableBase.prototype.getColumnBox = function () {}

/**
 * 获取当前编辑器
 * @method twaver.controls.TableBase.getCurrentEditor
 * @return {HTMLElement} 返回当前编辑器
 */
twaver.controls.TableBase.prototype.getCurrentEditor = function () {}

/**
 * 从Data中获取对应的表格列的值，TWaver内部使用
 * @method twaver.controls.TableBase.getValue
 * @param {twaver.Data} data 表格或树表格绑定的数据对象
 * @param {twaver.Column} column 指定的列对象
 * @return {Object} 返回表格列的值
 */
twaver.controls.TableBase.prototype.getValue = function (data, column) {}

/**
 * 当列的容器中列发生变化时调用此方法，用于更新表格的显示内容。用户不需要调用此方法，但可以重写此方法实现自己的逻辑
 * @method twaver.controls.TableBase.handleColumnBoxChange
 * @param {Object} e 列容器发生变化的事件
 */
twaver.controls.TableBase.prototype.handleColumnBoxChange = function (e) {}

/**
 * 当列的容器中列的顺序关系发生变化时调用此方法，用于更新表格的显示内容。用户不需要调用此方法，但可以重写此方法实现自己的逻辑
 * @method twaver.controls.TableBase.handleColumnHierarchyChange
 * @param {Object} e 列容器中列的顺序发生变化的事件
 */
twaver.controls.TableBase.prototype.handleColumnHierarchyChange = function (e) {}

/**
 * 当列的容器中列的属性发生变化时调用此方法，用于更新表格的显示内容。用户不需要调用此方法，但可以重写此方法实现自己的逻辑
 * @method twaver.controls.TableBase.handleColumnPropertyChange
 * @param {Object} e ColumnBox中列的属性变化事件
 */
twaver.controls.TableBase.prototype.handleColumnPropertyChange = function (e) {}

/**
 * 判断指定的表格列的单元格是否可编辑
 * @method twaver.controls.TableBase.isCellEditable
 * @param {twaver.Data} [data] 指定的数据对象
 * @param {twaver.Column} column 指定的列
 * @return {Boolean} true为可编辑，否则为false
 */
twaver.controls.TableBase.prototype.isCellEditable = function (data, column) {}

/**
 * 当绘制表格单元格时调用此方法，用户不需要自己调用此方法，但可以重载这个方法实现自己的逻辑处理
 * @method twaver.controls.TableBase.onCellRendered
 * @param {Object} params params是一个包含多个数据的对象，params的格式为： params = {data: data, value: this.getValue(data, column), div: cell, view: this, column: column, rowIndex: row, selected: selected}
 */
twaver.controls.TableBase.prototype.onCellRendered = function (params) {}

/**
 * 排序列时的回调函数
 * @method twaver.controls.TableBase.onColumnSorted
 * @param {twaver.Column} column 列对象
 */
twaver.controls.TableBase.prototype.onColumnSorted = function (column) {}

/**
 * 渲染表格的单元格
 * @method twaver.controls.TableBase.renderCell
 * @param {Object} params params是一个包含多个数据的对象，params的格式为： params = {data: data, value: this.getValue(data, column), div: cell, view: this, column: column, rowIndex: row, selected: selected}
 */
twaver.controls.TableBase.prototype.renderCell = function (params) {}

/**
 * 绘制表格中的数据，用户可以重写此方法实现自己的逻辑
 * @method twaver.controls.TableBase.renderData
 * @param {HTMLDivElement} div 包含指定表格上行数据的DIV
 * @param {twaver.Data} data 指定的数据对象
 * @param {Number} row 表格指定的行
 * @param {Boolean} selected 表格数据是否是选中状态
 */
twaver.controls.TableBase.prototype.renderData = function (div, data, row, selected) {}

/**
 * 设置表格上的值回写到data中，TWaver内部使用
 * @method twaver.controls.TableBase.setValue
 * @param {twaver.Data} data 表格或树表格绑定的数据对象
 * @param {twaver.Column} column 表格列对象
 * @param {Object} value 表格列的值
 */
twaver.controls.TableBase.prototype.setValue = function (data, column, value) {}

/**
 * 当鼠标点击到某个单元格上时，更新当前单元格的编辑器
 * @method twaver.controls.TableBase.updateCurrentEditor
 * @param {MouseEvent} e 鼠标的点击事件
 */
twaver.controls.TableBase.prototype.updateCurrentEditor = function (e) {}


/**
 * TWaver HTML5的树是图形组件的一种，它是和DataBox绑定的，以树的形式展示DataBox中的数据以及数据之间的层次关系。
 * TWaver HTML5的Tree采用了一种新的机制，只展示可见部分的数据，因此它的性能很高，能承载上万的数据
 * 
 * @class twaver.controls.Tree
 * @constructor
 * @extends twaver.controls.ListBase
 * @param {twaver.DataBox} dataBox 绑定的数据容器
 * @return {twaver.controls.Tree}
 */
twaver.controls.Tree = function (dataBox) {}

twaver.controls.Tree.prototype = new twaver.controls.ListBase()

/**
 * 合并指定的树节点
 * @method twaver.controls.Tree.collapse
 * @param {twaver.Data} data 指定的树节点的数据
 */
twaver.controls.Tree.prototype.collapse = function (data) {}

/**
 * 合并所有的树节点对象，调用这个方法后，所有的孩子都会处于合并状态
 * @method twaver.controls.Tree.collapseAll
 */
twaver.controls.Tree.prototype.collapseAll = function () {}

/**
 * 展开指定的树节点对象
 * @method twaver.controls.Tree.expand
 * @param {twaver.Data} data 指定的树节点的数据
 */
twaver.controls.Tree.prototype.expand = function (data) {}

/**
 * 展开所有的树节点对象，调用这个方法后，所有的孩子都会处于打开状态
 * @method twaver.controls.Tree.expandAll
 */
twaver.controls.Tree.prototype.expandAll = function () {}

/**
 * 获取树的勾选方式。勾选方式的可选值有：
 * 'default'：默认
 * 'children':勾选父亲时，会将孩子也勾选上
 * 'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
 * 'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
 * @method twaver.controls.Tree.getCheckMode
 * @return {String} 树上的勾选方式
 */
twaver.controls.Tree.prototype.getCheckMode = function () {}

/**
 * 获取树合并的图标，默认为twaver.Defaults.TREE_COLLAPSE_ICON
 * @method twaver.controls.Tree.getCollapseIcon
 * @return {String} 树合并的图标
 */
twaver.controls.Tree.prototype.getCollapseIcon = function () {}

/**
 * 获取树展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
 * @method twaver.controls.Tree.getExpandIcon
 * @return {String} 树展开的图标
 */
twaver.controls.Tree.prototype.getExpandIcon = function () {}

/**
 * 获取树上父亲和孩子之间的缩进，默认为twaver.Defaults.TREE_INDENT
 * @method twaver.controls.Tree.getIndent
 * @return {Number} 树的缩进
 */
twaver.controls.Tree.prototype.getIndent = function () {}

/**
 * 获取指定的节点数据所在的层次
 * @method twaver.controls.Tree.getLevel
 * @param {twaver.Data} data 指定的节点数据
 * @return {Number} 节点的层次数
 */
twaver.controls.Tree.prototype.getLevel = function (data) {}

/**
 * 获取根节点数据
 * @method twaver.controls.Tree.getRootData
 * @return {twaver.Data} 树的根节点
 */
twaver.controls.Tree.prototype.getRootData = function () {}

/**
 * 获取树的行高，默认为twaver.Defaults.TREE_ROW_HEIGHT
 * @method twaver.controls.Tree.getRowHeight
 * @return {Number} 树的行高
 */
twaver.controls.Tree.prototype.getRowHeight = function () {}

/**
 * 获取树上行之间线的颜色，默认为twaver.Defaults.TREE_ROW_LINE_COLOR
 * @method twaver.controls.Tree.getRowLineColor
 * @return {String} 树上行之间线的颜色
 */
twaver.controls.Tree.prototype.getRowLineColor = function () {}

/**
 * 获取树上行之间线的宽度，默认为twaver.Defaults.TREE_ROW_LINE_WIDTH
 * @method twaver.controls.Tree.getRowLineWidth
 * @return {Number} 树上行之间线的宽度
 */
twaver.controls.Tree.prototype.getRowLineWidth = function () {}

/**
 * 获取树节点排序的函数
 * @method twaver.controls.Tree.getSortFunction
 * @return {Function} 排序的函数
 * @example tree.setSortFunction(function (d1, d2) {
 *          if (d1.getName() < d2.getName()) {
 *              return 1;
 *          } else if (d1.getName() == d2.getName()) {
 *               return 0;
 *          } else {
 *               return -1;
 *          }
 * });
 */
twaver.controls.Tree.prototype.getSortFunction = function () {}

/**
 * 获取指定数据当前显示的图标，如果指定的数据是处于合并状态，就返回合并时的图标；如果是展开状态，返回的是展开的图标
 * @method twaver.controls.Tree.getToggleImage
 * @param {twaver.Data} data 指定的树节点
 * @return {String} 树节点当前显示的图标
 */
twaver.controls.Tree.prototype.getToggleImage = function (data) {}

/**
 * 获取树节点不可勾选时的样式，默认为'none'。可选值有：
 * 'none'：没有任何样式
 * 'disabled':不可用
 * @method twaver.controls.Tree.getUncheckableStyle
 * @return {String} 树节点不可勾选时的样式
 */
twaver.controls.Tree.prototype.getUncheckableStyle = function () {}

/**
 * 获取树上的节点是否可见的过滤器
 * @method twaver.controls.Tree.getVisibleFunction
 * @return {Function} 是否可见的过滤器
 * @example tree.setVisibleFunction(function (element) {
 *      return element instanceof twaver.Node;
 * });
 */
twaver.controls.Tree.prototype.getVisibleFunction = function () {}

/**
 * 获取指定的树节点是否可勾选
 * @method twaver.controls.Tree.isCheckable
 * @param {twaver.Data} [data] 指定的树节点对象
 * @return {Boolean} 是否可勾选，true为可勾选，否则为false
 */
twaver.controls.Tree.prototype.isCheckable = function (data) {}

/**
 * 是否为勾选模型
 * @method twaver.controls.Tree.isCheckMode
 * @return {Boolean} true为勾选模型，否则为false
 */
twaver.controls.Tree.prototype.isCheckMode = function () {}

/**
 * 判断指定的节点数据下的孩子是否可以排序。默认实现为可排序，用户可以重写此方法实现自己的逻辑
 * @method twaver.controls.Tree.isChildrenSortable
 * @param {twaver.Data} parent 指定的数据
 * @return {Boolean} true为可排序，否则为false
 */
twaver.controls.Tree.prototype.isChildrenSortable = function (parent) {}

/**
 * 指定的树节点是否处于展开状态
 * @method twaver.controls.Tree.isExpanded
 * @param {twaver.Data} data 指定的树节点对象
 * @return {Boolean} true为展开状态，否则为false
 */
twaver.controls.Tree.prototype.isExpanded = function (data) {}

/**
 * 判断树是否支持键盘删除节点的操作，默认为 twaver.Defaults.TREE_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.Tree.isKeyboardRemoveEnabled
 * @return {Boolean} true为可以键盘删除，否则为false
 */
twaver.controls.Tree.prototype.isKeyboardRemoveEnabled = function () {}

/**
 * 判断树是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.Tree.isKeyboardSelectEnabled
 * @return {Boolean} true为可以键盘选择节点，否则为false
 */
twaver.controls.Tree.prototype.isKeyboardSelectEnabled = function () {}

/**
 * 判断当选中某个树节点时，是否处于可见区域，默认为twaver.Defaults.TREE_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.Tree.isMakeVisibleOnSelected
 * @return {Boolean} true为处于可见区域，否则为false
 */
twaver.controls.Tree.prototype.isMakeVisibleOnSelected = function () {}

/**
 * 判断根节点是否可见
 * @method twaver.controls.Tree.isRootVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.controls.Tree.prototype.isRootVisible = function () {}

/**
 * 当绘制树上的标签时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.Tree.onLabelRendered
 * @param {HTMLSpanElement} span 包含数据元标签的Span
 * @param {twaver.Data} data 指定的数据
 * @param {String} label 显示的标签值
 * @param {Number} row 指定的行号
 * @param {Number} level 指定数据的层次数
 * @param {Boolean} selected 是否为选中状态
 */
twaver.controls.Tree.prototype.onLabelRendered = function (span, data, label, row, level, selected) {}

/**
 * 渲染树上显示的数据
 * @method twaver.controls.Tree.renderData
 * @param {HTMLDivElement} div 包含指定数据的div
 * @param {twaver.Data} data 指定的数据
 * @param {Number} row 指定数据所在的行号
 * @param {Boolean} selected 是否为选中状态
 */
twaver.controls.Tree.prototype.renderData = function (div, data, row, selected) {}

/**
 * 设置树的勾选方式。勾选方式的可选值有：
 * 'default'：默认
 * 'children':勾选父亲时，会将孩子也勾选上
 * 'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
 * 'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
 * @method twaver.controls.Tree.setCheckMode
 * @param {String} v 树上的勾选方式
 */
twaver.controls.Tree.prototype.setCheckMode = function (v) {}

/**
 * 获取树合并的图标，默认为twaver.Defaults.TREE_COLLAPSE_ICON
 * @method twaver.controls.Tree.setCollapseIcon
 * @param {String} v 树合并的图标
 */
twaver.controls.Tree.prototype.setCollapseIcon = function (v) {}

/**
 * 设置树展开的图标，默认为twaver.Defaults.TREE_EXPAND_ICON
 * @method twaver.controls.Tree.setExpandIcon
 * @param {String} v 树展开的图标
 */
twaver.controls.Tree.prototype.setExpandIcon = function (v) {}

/**
 * 设置树上父亲和孩子之间的缩进，默认为twaver.Defaults.TREE_INDENT
 * @method twaver.controls.Tree.setIndent
 * @param {Number} v 树上孩子和父亲之间的缩进值
 */
twaver.controls.Tree.prototype.setIndent = function (v) {}

/**
 * 设置树是否支持键盘删除节点的操作，默认为 twaver.Defaults.TREE_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.Tree.setKeyboardRemoveEnabled
 * @param {Boolean} v true为可以键盘删除，否则为false
 */
twaver.controls.Tree.prototype.setKeyboardRemoveEnabled = function (v) {}

/**
 * 设置树是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.Tree.setKeyboardSelectEnabled
 * @param {Boolean} v true为可以键盘选择节点，否则为false
 */
twaver.controls.Tree.prototype.setKeyboardSelectEnabled = function (v) {}

/**
 * 设置选中某个树节点时，让其处于可见区域，默认为twaver.Defaults.TREE_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.Tree.setMakeVisibleOnSelected
 * @param {Boolean} v true为处于可见区域，否则为false
 */
twaver.controls.Tree.prototype.setMakeVisibleOnSelected = function (v) {}

/**
 * 获取根节点数据
 * @method twaver.controls.Tree.setRootData
 * @param {twaver.Data} v 树的根节点
 */
twaver.controls.Tree.prototype.setRootData = function (v) {}

/**
 * 设置根节点是否可见
 * @method twaver.controls.Tree.setRootVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.controls.Tree.prototype.setRootVisible = function (v) {}

/**
 * 设置树的行高，默认为twaver.Defaults.TREE_ROW_HEIGHT
 * @method twaver.controls.Tree.setRowHeight
 * @param {Number} v 树的行高
 */
twaver.controls.Tree.prototype.setRowHeight = function (v) {}

/**
 * 设置树上行之间线的颜色，默认为twaver.Defaults.TREE_ROW_LINE_COLOR
 * @method twaver.controls.Tree.setRowLineColor
 * @param {String} v 树上行之间线的颜色
 */
twaver.controls.Tree.prototype.setRowLineColor = function (v) {}

/**
 * 设置树上行之间线的宽度，默认为twaver.Defaults.TREE_ROW_LINE_WIDTH
 * @method twaver.controls.Tree.setRowLineWidth
 * @param {Number} v 树上行之间线的宽度
 */
twaver.controls.Tree.prototype.setRowLineWidth = function (v) {}

/**
 * 设置树节点排序的函数
 * @method twaver.controls.Tree.setSortFunction
 * @param {Function} v 排序的函数
 * @example tree.setSortFunction(function (d1, d2) {
 *          if (d1.getName() < d2.getName()) {
 *              return 1;
 *          } else if (d1.getName() == d2.getName()) {
 *               return 0;
 *          } else {
 *               return -1;
 *          }
 * });
 */
twaver.controls.Tree.prototype.setSortFunction = function (v) {}

/**
 * 设置树节点不可勾选时的样式，默认为'none'。可选值有：
 * 'none'：没有任何样式
 * 'disabled':不可用
 * @method twaver.controls.Tree.setUncheckableStyle
 * @param {String} v 树节点不可勾选时的样式
 */
twaver.controls.Tree.prototype.setUncheckableStyle = function (v) {}

/**
 * 设置树上的节点是否可见的过滤器
 * @method twaver.controls.Tree.setVisibleFunction
 * @param {Function} v 是否可见的过滤器
 * @example tree.setVisibleFunction(function (element) {
 *      return element instanceof twaver.Node;
 * });
 */
twaver.controls.Tree.prototype.setVisibleFunction = function (v) {}


/**
 * 构造函数
 * 网格是由行和列组成的一种网元。网格是单元格的集合，每个单元格上可以附上网格。
 * 网格可以指定其行和列的数量，也可以设置行和列的宽高。
 * Grid的具体用法可以参考GridEditorDemo。
 * @class twaver.Grid
 * @constructor
 * @extends twaver.Follower
 * @param {Object} [id] 网格ID，用于唯一标识这个网格对象。如果为空，TWaver会按照默认的规则给连线网格ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是网格的ID，如果为Object类型，可以传入一个带网格属性的对象，比如： var grid = new twaver.Grid({      image:'tw130',      name:'TWaver Router',      styles:{'lable.yoffset':-75} });
 * @return {twaver.Grid}
 */
twaver.Grid = function (id) {}

twaver.Grid.prototype = new twaver.Follower()

/**
 * 获取某个点上单元格的对象
 * @method twaver.Grid.getCellObject
 * @param {Object} x x坐标。x可以为Number，也可以为Object。当x为Number时，y值必填。当x为Object时，需要传入的一个带x，y变量的对象，例如：{x:10,y:10}
 * @param {Number} [y] y坐标。可选，当x为object时，y不需要赋值；当x为Number时，y必须要赋值
 * @return {Object} 包含行列索引的单元格对象
 */
twaver.Grid.prototype.getCellObject = function (x, y) {}

/**
 * 获取某个行、列上单元格的位置和大小
 * @method twaver.Grid.getCellRect
 * @param {Number} rowIndex 行的索引号
 * @param {Number} columnIndex 列的索引号
 * @return {Object} 单元格的位置和大小。包含单元格的x,y坐标，以及单元格的宽高。例如：{x:100,Y:100,width:50,height:50}
 */
twaver.Grid.prototype.getCellRect = function (rowIndex, columnIndex) {}


/**
 * 组是一种特殊的网元。它在某个区域形状中展示其孩子网元。组可以进行展开，合并。当组展开时，它的孩子网元都会在network上显示出来；合并组时，孩子网元都会隐藏。
 * 组和子网不同，组是在同一层展示它的孩子，而子网是需要进入下一层展示它的孩子网元
 * @class twaver.Group
 * @constructor
 * @extends twaver.Follower
 * @param {Object} [id] 组ID，用于唯一标识这个组对象。如果为空，TWaver会按照默认的规则给组ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是组的ID，如果为Object类型，可以传入一个带组属性的对象，比如： var group = new twaver.Group({      image:'tw130',      name:'TWaver Router',      expanded:true,   styles:{'lable.yoffset':-75} });
 * @return {twaver.Group}
 */
twaver.Group = function (id) {}

twaver.Group.prototype = new twaver.Follower()

/**
 * 获取孩子网元的边界
 * @method twaver.Group.getChildRect
 * @param {twaver.Element} child 孩子网元
 * @return {Object} 返回孩子网元的边界
 */
twaver.Group.prototype.getChildRect = function (child) {}

/**
 * 判断组是否处于展开状态
 * @method twaver.Group.isExpanded
 * @return {Boolean} true为展开，false为合并
 */
twaver.Group.prototype.isExpanded = function () {}

/**
 * 反向设置组的展开状态。当组展开时，调用此方法，组变成合并状态；当组合并时，调用此方法，组变成展开状态
 * @method twaver.Group.reverseExpanded
 */
twaver.Group.prototype.reverseExpanded = function () {}

/**
 * 设置组的展开状态
 * @method twaver.Group.setExpanded
 * @param {Boolean} expanded true为展开，false为合并
 */
twaver.Group.prototype.setExpanded = function (expanded) {}

/**
 * 根据所有孩子坐标来更新组的位置
 * @method twaver.Group.updateLocationFromChildren
 */
twaver.Group.prototype.updateLocationFromChildren = function () {}


/**
 * 可旋转节点, 设置以度为单位的旋转角度后, 节点的图片会旋转相应角度
 * @class twaver.RotatableNode
 * @constructor
 * @extends twaver.Follower
 * @param {Object} [id] 网元ID，用于唯一标识网元对象。如果为空，TWaver会在内部构造唯一ID. 如果参数id为string或number类型, 则参数id将直接作为网元id; 如果为Object类型, 则将其属性赋值给网元
 * @return {twaver.RotatableNode}
 * @example var rotatableNode = new twaver.RotatableNode({
 *     image: 'tw130',
 *     name: 'TWaver Router',
 *     expanded: true,
 *     styles: {
 *         'lable.yoffset': -75
 *     }
 * });
 */
twaver.RotatableNode = function (id) {}

twaver.RotatableNode.prototype = new twaver.Follower()


/**
 * 构造函数
 * 多边形节点是一种特殊的网元。普通网元在network上是通过图片来展示的，而多边形节点网元是通过多边形来代替图片呈现的。
 * 
 * 多边形网元是由一系列的点组成的多边形形状的网元，可以通过增加、删除点来更改其形状，多边形的点之间可以通过line （直线），move（移动），quad（曲线）来连接。
 * 
 * 多边形可以通过各种颜色，渐变色来填充绘制，也可以设置其外边框。
 * 
 * 多边形网元和折线都是通过一系列的点来绘制的网元，但是不同的是折线它是一条Link，必须有起始和结束节点，而且必须是一条连续的路径。而多边形网元的点之间可以move to，这样可以是一条不连续的路径。
 * 
 * 多边形网元的应用可以参考States Map Demo，它是一系列的点来绘制各个州
 * 
 * @class twaver.ShapeNode
 * @constructor
 * @extends twaver.Follower
 * @param {Object} [id] 多边形节点ID，用于唯一标识这个多边形节点对象。如果为空，twaver会按照默认的规则给连线多边形节点ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是多边形节点的ID，如果为Object类型，可以传入一个带多边形节点属性的对象，比如： var shapeNode = new twaver.ShapeNode({      name:'TWaver Router',      styles:{'lable.yoffset':-75} });
 * @return {twaver.ShapeNode}
 */
twaver.ShapeNode = function (id) {}

twaver.ShapeNode.prototype = new twaver.Follower()

/**
 * 在多边形节点上添加点，更改多边形的走向。
 * @method twaver.ShapeNode.addPoint
 * @param {Object} point 包含x，y属性的对象。例如：var point = {x:10,y:10};
 * @param {Number} [index] 添加点的次序，如果为空，则添加在最后一个位置。
 */
twaver.ShapeNode.prototype.addPoint = function (point, index) {}

/**
 * 派发点的更改事件，当多边形上的点发生变化时，会调用此方法。此方法用于TWaver内部调用的
 * @method twaver.ShapeNode.firePointsChange
 */
twaver.ShapeNode.prototype.firePointsChange = function () {}

/**
 * 获取ShapeNode的周长
 * @method twaver.ShapeNode.getLineLength
 * @return {Number} 返回ShapeNode的周长
 */
twaver.ShapeNode.prototype.getLineLength = function () {}

/**
 * 获取多边形节点上所有点的集合
 * @method twaver.ShapeNode.getPoints
 * @return {twaver.List} 多边形网元上点的集合
 */
twaver.ShapeNode.prototype.getPoints = function () {}

/**
 * 获取多边形节点上所有连线段的集合
 * @method twaver.ShapeNode.getSegments
 * @return {twaver.List} 多边形节点网元上连线段的集合
 */
twaver.ShapeNode.prototype.getSegments = function () {}

/**
 * 移除参数指定的某个点，更改多边形节点的形状
 * @method twaver.ShapeNode.removeAt
 * @param {Number} index 移除参数所指定的某个点
 */
twaver.ShapeNode.prototype.removeAt = function (index) {}

/**
 * 移除指定的点，用于更改多边形网元的形状
 * @method twaver.ShapeNode.removePoint
 * @param {Object} point 移除的点对象，例如：var point = {x:10,y:10}
 */
twaver.ShapeNode.prototype.removePoint = function (point) {}

/**
 * 设置指定序号上的点，用于更改多边形网元的形状
 * @method twaver.ShapeNode.setPoint
 * @param {Number} index 多边形网元上的序号
 * @param {Object} point 包含x，y属性的点对象。例如：var point = {x:10,y:10}
 */
twaver.ShapeNode.prototype.setPoint = function (index, point) {}

/**
 * 设置多边形上点的集合
 * @method twaver.ShapeNode.setPoints
 * @param {twaver.List} value 多边形节点上点的集合
 */
twaver.ShapeNode.prototype.setPoints = function (value) {}

/**
 * 设置多边形网元上所有连线段的集合
 * @method twaver.ShapeNode.setSegments
 * @param {twaver.List} v 多边形节点上连线段的集合
 */
twaver.ShapeNode.prototype.setSegments = function (v) {}


/**
 * 子网是TWaver中的一种网元，子网可以进行钻取。在network上用于分层展现。默认双击可以进入下一层，展示子网的所有孩子。
 * 子网可以设置自己的背景色和图片。子网中可以嵌入子网，这样在network上展示网元时可以进行分层呈现
 * 
 * 
 * @class twaver.SubNetwork
 * @constructor
 * @extends twaver.Follower
 * @param {Object} [id] 子网ID，用于唯一标识这个子网对象。如果为空，twaver会按照默认的规则给连线子网ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是子网的ID，如果为Object类型，可以传入一个带子网属性的对象，比如： var subnetwork = new twaver.Subnetwork({      name:'TWaver Router',      styles:{'lable.yoffset':-75} });
 * @return {twaver.SubNetwork}
 */
twaver.SubNetwork = function (id) {}

twaver.SubNetwork.prototype = new twaver.Follower()

/**
 * 子否为子网的标志
 * @property ISubNetwork
 * @type Boolean
 */
twaver.SubNetwork.prototype.ISubNetwork = function () {}


/**
 * 总线是一种特殊的网元，它和shapeNode类似，也是由一系列的点组成的，但是它是不闭合的，也没有内部填充色。
 * 总线可以随着network的宽度更改而更改。总线上可以连接多个网元，来进行总线布局。
 * 总线的具体用法可以参考Bus Layout Demo
 * @class twaver.Bus
 * @constructor
 * @extends twaver.ShapeNode
 * @param {Object} [id] 总线ID，用于唯一标识这个多总线对象。如果为空，TWaver会按照默认的规则给总线ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是总线的ID，如果为Object类型，可以传入一个带总线属性的对象，比如： var bus = new twaver.Bus({      name:'TWaver Router',      styles:{'lable.yoffset':-75} });
 * @return {twaver.Bus}
 */
twaver.Bus = function (id) {}

twaver.Bus.prototype = new twaver.ShapeNode()


/**
 * 表格是TWaver HTML5中提供的视图组件的一种，它是和DataBox绑定的，以表格的形式呈现出DataBox中的数据。TWaver HTML5中表格能承载万级别的数据，它采用了一种新的机制来绘制表格，极大地提高了传统的表格性能。
 * @class twaver.controls.Table
 * @constructor
 * @extends twaver.controls.TableBase
 * @param {twaver.DataBox} dataBox 绑定的数据容器
 * @return {twaver.controls.Table}
 */
twaver.controls.Table = function (dataBox) {}

twaver.controls.Table.prototype = new twaver.controls.TableBase()

/**
 * 获取表格上勾选的列，表格上自带了勾选的列，默认是隐藏的
 * @method twaver.controls.Table.getCheckColumn
 * @return {twaver.Column} 勾选的列对象
 */
twaver.controls.Table.prototype.getCheckColumn = function () {}

/**
 * 获取表格上每列线的颜色，默认为twaver.Defaults.TABLE_COLUMN_LINE_COLOR
 * @method twaver.controls.Table.getColumnLineColor
 * @return {String} 每列线的颜色
 */
twaver.controls.Table.prototype.getColumnLineColor = function () {}

/**
 * 获取表格上每列线的宽度，默认为twaver.Defaults.TABLE_COLUMN_LINE_WIDTH
 * @method twaver.controls.Table.getColumnLineWidth
 * @return {Number} 列的线宽
 */
twaver.controls.Table.prototype.getColumnLineWidth = function () {}

/**
 * 获取表格的行高，默认为twaver.Defaults.TABLE_ROW_HEIGHT
 * @method twaver.controls.Table.getRowHeight
 * @return {Number} 表格的行高
 */
twaver.controls.Table.prototype.getRowHeight = function () {}

/**
 * 获取表格上每行线的颜色，默认为twaver.Defaults.TABLE_ROW_LINE_COLOR
 * @method twaver.controls.Table.getRowLineColor
 * @return {String} 每行线的颜色
 */
twaver.controls.Table.prototype.getRowLineColor = function () {}

/**
 * 获取表格上每行线的宽度，默认为twaver.Defaults.TABLE_ROW_LINE_WIDTH
 * @method twaver.controls.Table.getRowLineWidth
 * @return {Number} 每行的线宽
 */
twaver.controls.Table.prototype.getRowLineWidth = function () {}

/**
 * 获取表格上排序的列
 * @method twaver.controls.Table.getSortColumn
 * @return {twaver.Column} 排序的列
 */
twaver.controls.Table.prototype.getSortColumn = function () {}

/**
 * 获取表格上排序的函数
 * @method twaver.controls.Table.getSortFunction
 * @return {Function} 表格上排序的函数
 */
twaver.controls.Table.prototype.getSortFunction = function () {}

/**
 * 获取表格上是否可见的过滤器，用于过滤哪些网元可见，哪些不可见
 * @method twaver.controls.Table.getVisibleFunction
 * @return {Function} 是否可见的过滤器
 * @example table.setVisibleFunction(function (element) {
 *      return element instanceof twaver.Node;
 * });
 */
twaver.controls.Table.prototype.getVisibleFunction = function () {}

/**
 * 判断表格是否带勾选的功能
 * @method twaver.controls.Table.isCheckMode
 * @return {Boolean} true为可勾选，否则为false
 */
twaver.controls.Table.prototype.isCheckMode = function () {}

/**
 * 判断表格是否可编辑，默认为twaver.Defaults.TABLE_EDITABLE
 * @method twaver.controls.Table.isEditable
 * @return {Boolean} true为可编辑，否则为false
 */
twaver.controls.Table.prototype.isEditable = function () {}

/**
 * 判断表格上是否支持键盘删除数据，默认为
 * twaver.Defaults.TABLE_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.Table.isKeyboardRemoveEnabled
 * @return {Boolean} 是否支持键盘删除，true为可以删除，否则为false
 */
twaver.controls.Table.prototype.isKeyboardRemoveEnabled = function () {}

/**
 * 判断表格上是否支持键盘选择数据，默认为
 * twaver.Defaults.TABLE_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.Table.isKeyboardSelectEnabled
 * @return {Boolean} true为可以使用键盘来选择数据，否则为false
 */
twaver.controls.Table.prototype.isKeyboardSelectEnabled = function () {}

/**
 * 判断当选中某条数据时，是否让其处于表格上可见的区域，默认为：twaver.Defaults.TABLE_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.Table.isMakeVisibleOnSelected
 * @return {Boolean} true为可见，否则为false
 */
twaver.controls.Table.prototype.isMakeVisibleOnSelected = function () {}

/**
 * 渲染勾选那一列的单元格
 * @method twaver.controls.Table.renderCheckCell
 * @param {Object} params 它是一个带view，selected，div，data属性的对象
 */
twaver.controls.Table.prototype.renderCheckCell = function (params) {}

/**
 * 设置表格是否可勾选，如果为true，那么就会在表格的第一列加上勾选列
 * @method twaver.controls.Table.setCheckMode
 * @param {Boolean} value true为可勾选，否则为false
 */
twaver.controls.Table.prototype.setCheckMode = function (value) {}

/**
 * 设置表格上每列线的颜色，默认为twaver.Defaults.TABLE_COLUMN_LINE_COLOR
 * @method twaver.controls.Table.setColumnLineColor
 * @param {String} v 每列线的颜色
 */
twaver.controls.Table.prototype.setColumnLineColor = function (v) {}

/**
 * 设置表格上每列线的宽度，默认为twaver.Defaults.TABLE_COLUMN_LINE_WIDTH
 * @method twaver.controls.Table.setColumnLineWidth
 * @param {Number} v 每列的线宽
 */
twaver.controls.Table.prototype.setColumnLineWidth = function (v) {}

/**
 * 设置表格是否可编辑，默认为twaver.Defaults.TABLE_EDITABLE
 * @method twaver.controls.Table.setEditable
 * @param {Boolean} v true为可编辑，否则为false
 */
twaver.controls.Table.prototype.setEditable = function (v) {}

/**
 * 设置表格上是否支持键盘删除数据，默认为
 * twaver.Defaults.TABLE_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.Table.setKeyboardRemoveEnabled
 * @param {Boolean} v 是否支持键盘删除，true为可以删除，否则为false
 */
twaver.controls.Table.prototype.setKeyboardRemoveEnabled = function (v) {}

/**
 * 设置表格上是否支持键盘选择数据，默认为
 * twaver.Defaults.TABLE_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.Table.setKeyboardSelectEnabled
 * @param {Boolean} v true为可以使用键盘来选择数据，否则为false
 */
twaver.controls.Table.prototype.setKeyboardSelectEnabled = function (v) {}

/**
 * 设置当选中某条数据时，是否让其处于表格上可见的区域，默认为：twaver.Defaults.TABLE_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.Table.setMakeVisibleOnSelected
 * @param {Boolean} v true为可见，否则为false
 */
twaver.controls.Table.prototype.setMakeVisibleOnSelected = function (v) {}

/**
 * 设置表格的行高，默认为twaver.Defaults.TABLE_ROW_HEIGHT
 * @method twaver.controls.Table.setRowHeight
 * @param {Number} v 表格的行高
 */
twaver.controls.Table.prototype.setRowHeight = function (v) {}

/**
 * 设置表格上每行线的颜色，默认为twaver.Defaults.TABLE_ROW_LINE_COLOR
 * @method twaver.controls.Table.setRowLineColor
 * @param {String} v 每行线的颜色
 */
twaver.controls.Table.prototype.setRowLineColor = function (v) {}

/**
 * 设置表格上每行线的宽度，默认为twaver.Defaults.TABLE_ROW_LINE_WIDTH
 * @method twaver.controls.Table.setRowLineWidth
 * @param {String} v 每行的线宽
 */
twaver.controls.Table.prototype.setRowLineWidth = function (v) {}

/**
 * 设置让表格上指定的列排序
 * @method twaver.controls.Table.setSortColumn
 * @param {twaver.Column} v 指定排序的列
 */
twaver.controls.Table.prototype.setSortColumn = function (v) {}

/**
 * 设置表格上排序的函数
 * @method twaver.controls.Table.setSortFunction
 * @param {Function} v 排序的函数
 * @example this.table.setSortFunction(function (node1, node2) {
 * 	var name1 = node1.getClient("STATE_NAME");
 * 	var name2 = node2.getClient("STATE_NAME");
 * 	if (name1 > name2) {
 * 	    return 1;
 * 	} else if (name1 == name2) {
 * 	    return 0;
 * 	} else {
 * 	    return -1;
 * 	}
 *     };
 * );
 * 
 */
twaver.controls.Table.prototype.setSortFunction = function (v) {}

/**
 * 设置表格上是否可见的过滤器，用于过滤哪些网元可见，哪些不可见
 * @method twaver.controls.Table.setVisibleFunction
 * @param {Function} v 是否可见的过滤器
 * @example table.setVisibleFunction(function (element) {
 *      return element instanceof twaver.Node;
 * });
 */
twaver.controls.Table.prototype.setVisibleFunction = function (v) {}


/**
 * TreeTable是结合了Tree和Table特性的一种视图组件，它既有树的展开、合并功能，也有表格那种能呈现多列数据的功能。
 * TreeTable是和数据容器一起工作的，它以图形的方式显示数据容器中的数据
 * @class twaver.controls.TreeTable
 * @constructor
 * @extends twaver.controls.TableBase
 * @param {twaver.DataBox} dataBox 绑定的数据容器
 * @return {twaver.controls.TreeTable}
 */
twaver.controls.TreeTable = function (dataBox) {}

twaver.controls.TreeTable.prototype = new twaver.controls.TableBase()

/**
 * 合并指定的节点
 * @method twaver.controls.TreeTable.collapse
 * @param {twaver.Data} data 指定的节点数据
 */
twaver.controls.TreeTable.prototype.collapse = function (data) {}

/**
 * 合并所有的树节点对象，调用这个方法后，所有的孩子都会处于合并状态
 * @method twaver.controls.TreeTable.collapseAll
 */
twaver.controls.TreeTable.prototype.collapseAll = function () {}

/**
 * 展开指定的树节点对象
 * @method twaver.controls.TreeTable.expand
 * @param {twaver.Data} data 指定的树节点的数据
 */
twaver.controls.TreeTable.prototype.expand = function (data) {}

/**
 * 展开所有的树节点对象，调用这个方法后，所有的孩子都会处于打开状态
 * @method twaver.controls.TreeTable.expandAll
 */
twaver.controls.TreeTable.prototype.expandAll = function () {}

/**
 * 获取TreeTable的勾选方式。勾选方式的可选值有：
 * 'default'：默认
 * 'children':勾选父亲时，会将孩子也勾选上
 * 'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
 * 'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
 * @method twaver.controls.TreeTable.getCheckMode
 * @return {String} TreeTable的勾选模式
 */
twaver.controls.TreeTable.prototype.getCheckMode = function () {}

/**
 * 获取TreeTable节点合并的图标，默认为twaver.Defaults.TREETABLE_COLLAPSE_ICON
 * @method twaver.controls.TreeTable.getCollapseIcon
 * @return {String} TreeTable节点合并的图标
 */
twaver.controls.TreeTable.prototype.getCollapseIcon = function () {}

/**
 * 获取TreeTable中每列的线的颜色，默认为
 * twaver.Defaults.TREETABLE_COLUMN_LINE_COLOR
 * @method twaver.controls.TreeTable.getColumnLineColor
 * @return {String} 每列线的颜色
 */
twaver.controls.TreeTable.prototype.getColumnLineColor = function () {}

/**
 * 获取TreeTable上每列线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
 * @method twaver.controls.TreeTable.getColumnLineWidth
 * @return {Number} 列的线宽
 */
twaver.controls.TreeTable.prototype.getColumnLineWidth = function () {}

/**
 * 获取TreeTable展开的图标，默认为twaver.Defaults.TREETABLE_EXPAND_ICON
 * @method twaver.controls.TreeTable.getExpandIcon
 * @return {String} TreeTable展开的图标
 */
twaver.controls.TreeTable.prototype.getExpandIcon = function () {}

/**
 * 获取TreeTable上父亲和孩子之间的缩进，默认为twaver.Defaults.TREETABLE_INDENT
 * @method twaver.controls.TreeTable.getIndent
 * @return {Number} 树节点的缩进
 */
twaver.controls.TreeTable.prototype.getIndent = function () {}

/**
 * 获取指定的节点数据所在的层次
 * @method twaver.controls.TreeTable.getLevel
 * @param {twaver.Data} data 指定的节点数据
 * @return {Number} 节点的层次数
 */
twaver.controls.TreeTable.prototype.getLevel = function (data) {}

/**
 * 获取根节点数据
 * @method twaver.controls.TreeTable.getRootData
 * @return {twaver.Data} TreeTable的根节点
 */
twaver.controls.TreeTable.prototype.getRootData = function () {}

/**
 * 获取TreeTable的行高，默认为twaver.Defaults.TREETABLE_ROW_HEIGHT
 * @method twaver.controls.TreeTable.getRowHeight
 * @return {Number} TreeTable的行高
 */
twaver.controls.TreeTable.prototype.getRowHeight = function () {}

/**
 * 获取TreeTable上行之间线的颜色，默认为twaver.Defaults.TREETABLE_ROW_LINE_COLOR
 * @method twaver.controls.TreeTable.getRowLineColor
 * @return {String} TreeTable上行之间线的颜色
 */
twaver.controls.TreeTable.prototype.getRowLineColor = function () {}

/**
 * 获取TreeTable上行之间线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
 * @method twaver.controls.TreeTable.getRowLineWidth
 * @return {Number} TreeTable上行之间线的宽度
 */
twaver.controls.TreeTable.prototype.getRowLineWidth = function () {}

/**
 * 获取TreeTable上排序的列
 * @method twaver.controls.TreeTable.getSortColumn
 * @return {twaver.Column} 排序的列
 */
twaver.controls.TreeTable.prototype.getSortColumn = function () {}

/**
 * 获取TreeTable上排序的函数
 * @method twaver.controls.TreeTable.getSortFunction
 * @return {Function} 排序的函数
 */
twaver.controls.TreeTable.prototype.getSortFunction = function () {}

/**
 * 获取指定数据当前显示的图标，如果指定的数据是处于合并状态，就返回合并时的图标；如果是展开状态，返回的是展开的图标
 * @method twaver.controls.TreeTable.getToggleImage
 * @param {twaver.Data} data 指定的数据
 * @return {String} TreeTable上指定的节点当前显示的图标
 */
twaver.controls.TreeTable.prototype.getToggleImage = function (data) {}

/**
 * 获取TreeTable上树的那一列
 * @method twaver.controls.TreeTable.getTreeColumn
 * @return {twaver.Column} 包含树的那一列
 */
twaver.controls.TreeTable.prototype.getTreeColumn = function () {}

/**
 * 获取指定的数据在TreeTable上显示的标签值
 * @method twaver.controls.TreeTable.getTreeValue
 * @param {twaver.Data} data 指定的数据
 * @param {twaver.controls.Table} table TreeTable上的表格
 * @return {String} 标签值
 */
twaver.controls.TreeTable.prototype.getTreeValue = function (data, table) {}

/**
 * 获取TreeTable的树节点不可勾选时的样式，默认为'none'。可选值有：
 * 'none'：没有任何样式
 * 'disabled':不可用
 * @method twaver.controls.TreeTable.getUncheckableStyle
 * @return {String} 树节点不可勾选时的样式
 */
twaver.controls.TreeTable.prototype.getUncheckableStyle = function () {}

/**
 * 获取TreeTable上是否可见的过滤器，用于过滤哪些网元可见，哪些不可见
 * @method twaver.controls.TreeTable.getVisibleFunction
 * @return {Function} 是否可见的过滤器
 */
twaver.controls.TreeTable.prototype.getVisibleFunction = function () {}

/**
 * 获取指定的数据是否可勾选
 * @method twaver.controls.TreeTable.isCheckable
 * @param {twaver.Data} data 指定的节点对象
 * @return {Boolean} 是否可勾选，true为可勾选，否则为false
 */
twaver.controls.TreeTable.prototype.isCheckable = function (data) {}

/**
 * 是否为勾选模型
 * @method twaver.controls.TreeTable.isCheckMode
 * @return {Boolean} true为勾选模型，否则为false
 */
twaver.controls.TreeTable.prototype.isCheckMode = function () {}

/**
 * 判断指定的节点数据下的孩子是否可以排序。默认实现为可排序，用户可以重写此方法实现自己的逻辑
 * @method twaver.controls.TreeTable.isChildrenSortable
 * @param {twaver.Data} parent 指定的数据
 * @return {Boolean} true为可排序，否则为false
 */
twaver.controls.TreeTable.prototype.isChildrenSortable = function (parent) {}

/**
 * 判断树表是否可编辑，默认为twaver.Defaults.TREETABLE_EDITABLE
 * @method twaver.controls.TreeTable.isEditable
 * @return {Boolean} true为可编辑，否则为false
 */
twaver.controls.TreeTable.prototype.isEditable = function () {}

/**
 * 判断指定的TreeTable上的节点是否处于展开状态
 * @method twaver.controls.TreeTable.isExpanded
 * @param {twaver.Data} data 指定的数据
 * @return {Boolean} true为展开状态，否则为false
 */
twaver.controls.TreeTable.prototype.isExpanded = function (data) {}

/**
 * 判断TreeTable上是否支持键盘删除数据的操作，默认为 twaver.Defaults.TREETABLE_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.TreeTable.isKeyboardRemoveEnabled
 * @return {Boolean} true为支持键盘删除，否则为false
 */
twaver.controls.TreeTable.prototype.isKeyboardRemoveEnabled = function () {}

/**
 * 判断TreeTable上是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.TreeTable.isKeyboardSelectEnabled
 * @return {Boolean} true为可以键盘选择节点，否则为false
 */
twaver.controls.TreeTable.prototype.isKeyboardSelectEnabled = function () {}

/**
 * 判断当选中TreeTable中某个节点时，是否让其处于可见区域，默认为twaver.Defaults.TREETABLE_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.TreeTable.isMakeVisibleOnSelected
 * @return {Boolean} true为处于可见区域，否则为false
 */
twaver.controls.TreeTable.prototype.isMakeVisibleOnSelected = function () {}

/**
 * 判断TreeTable的根节点是否可见
 * @method twaver.controls.TreeTable.isRootVisible
 * @return {Boolean} true为可见，否则为false
 */
twaver.controls.TreeTable.prototype.isRootVisible = function () {}

/**
 * 当渲染TreeTable上的标签时，调用此方法。用户不需要自己调用此方法，但可以重载此方法，添加自定义的逻辑
 * @method twaver.controls.TreeTable.onLabelRendered
 * @param {HTMLSpanElement} span 包含数据元标签的Span
 * @param {twaver.Data} data 指定的数据
 * @param {String} label 显示的标签值
 * @param {Number} row 指定的行号
 * @param {Number} level 指定数据的层次数
 * @param {Boolean} selected 是否为选中状态
 */
twaver.controls.TreeTable.prototype.onLabelRendered = function (span, data, label, row, level, selected) {}

/**
 * 渲染树这一列的单元格显示样式
 * 
 * @method twaver.controls.TreeTable.renderTreeCell
 * @param {Object} params 参数的格式为 {div：div, data:data, rowIndex:index, selected:selected}的对象
 */
twaver.controls.TreeTable.prototype.renderTreeCell = function (params) {}

/**
 * 设置TreeTable的勾选方式。勾选方式的可选值有：
 * 'default'：默认
 * 'children':勾选父亲时，会将孩子也勾选上
 * 'descendant':勾选父亲时，将孩子以及所有的子孙节点都勾选上
 * 'descendantAncestor':勾选节点时，会将其下的所有孩子以及子孙节点都勾选上，并且将这个节点的所有祖先节点也勾选上
 * @method twaver.controls.TreeTable.setCheckMode
 * @param {String} v TreeTable的勾选模式
 */
twaver.controls.TreeTable.prototype.setCheckMode = function (v) {}

/**
 * 设置TreeTable节点合并的图标，默认为twaver.Defaults.TREETABLE_COLLAPSE_ICON
 * @method twaver.controls.TreeTable.setCollapseIcon
 * @param {String} v TreeTable节点合并的图标
 */
twaver.controls.TreeTable.prototype.setCollapseIcon = function (v) {}

/**
 * 设置TreeTable中每列的线的颜色，默认为
 * twaver.Defaults.TREETABLE_COLUMN_LINE_COLOR
 * @method twaver.controls.TreeTable.setColumnLineColor
 * @param {String} v 每列线的颜色
 */
twaver.controls.TreeTable.prototype.setColumnLineColor = function (v) {}

/**
 * 获取TreeTable上每列线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
 * @method twaver.controls.TreeTable.setColumnLineWidth
 * @param {Number} v 列的线宽
 */
twaver.controls.TreeTable.prototype.setColumnLineWidth = function (v) {}

/**
 * 设置树表是否可编辑，默认为twaver.Defaults.TREETABLE_EDITABLE
 * @method twaver.controls.TreeTable.setEditable
 * @param {Boolean} v true为可编辑，否则为false
 */
twaver.controls.TreeTable.prototype.setEditable = function (v) {}

/**
 * 设置TreeTable展开的图标，默认为twaver.Defaults.TREETABLE_EXPAND_ICON
 * @method twaver.controls.TreeTable.setExpandIcon
 * @param {String} v TreeTable展开的图标
 */
twaver.controls.TreeTable.prototype.setExpandIcon = function (v) {}

/**
 * 设置TreeTable上父亲和孩子之间的缩进，默认为twaver.Defaults.TREETABLE_INDENT
 * @method twaver.controls.TreeTable.setIndent
 * @param {Number} v 树节点的缩进
 */
twaver.controls.TreeTable.prototype.setIndent = function (v) {}

/**
 * 设置TreeTable上是否支持键盘删除数据的操作，默认为 twaver.Defaults.TREETABLE_KEYBOARD_REMOVE_ENABLED
 * @method twaver.controls.TreeTable.setKeyboardRemoveEnabled
 * @param {Boolean} v true为支持键盘删除，否则为false
 */
twaver.controls.TreeTable.prototype.setKeyboardRemoveEnabled = function (v) {}

/**
 * 设置TreeTable上是否支持键盘选择节点的操作，默认为twaver.Defaults.TREE_KEYBOARD_SELECT_ENABLED
 * @method twaver.controls.TreeTable.setKeyboardSelectEnabled
 * @param {Boolean} v true为可以键盘选择节点，否则为false
 */
twaver.controls.TreeTable.prototype.setKeyboardSelectEnabled = function (v) {}

/**
 * 设置当选中TreeTable中某个节点时，是否让其处于可见区域，默认为twaver.Defaults.TREETABLE_MAKE_VISIBLE_ON_SELECTED
 * @method twaver.controls.TreeTable.setMakeVisibleOnSelected
 * @param {Boolean} v true为处于可见区域，否则为false
 */
twaver.controls.TreeTable.prototype.setMakeVisibleOnSelected = function (v) {}

/**
 * 设置根节点数据
 * @method twaver.controls.TreeTable.setRootData
 * @param {twaver.Data} v TreeTable的根节点
 */
twaver.controls.TreeTable.prototype.setRootData = function (v) {}

/**
 * 设置TreeTable的根节点是否可见
 * @method twaver.controls.TreeTable.setRootVisible
 * @param {Boolean} v true为可见，否则为false
 */
twaver.controls.TreeTable.prototype.setRootVisible = function (v) {}

/**
 * 设置TreeTable的行高，默认为twaver.Defaults.TREETABLE_ROW_HEIGHT
 * @method twaver.controls.TreeTable.setRowHeight
 * @param {Number} v TreeTable的行高
 */
twaver.controls.TreeTable.prototype.setRowHeight = function (v) {}

/**
 * 设置TreeTable上行之间线的颜色，默认为twaver.Defaults.TREETABLE_ROW_LINE_COLOR
 * @method twaver.controls.TreeTable.setRowLineColor
 * @param {String} v TreeTable上行之间线的颜色
 */
twaver.controls.TreeTable.prototype.setRowLineColor = function (v) {}

/**
 * 设置TreeTable上行之间线的宽度，默认为twaver.Defaults.TREETABLE_COLUMN_LINE_WIDTH
 * @method twaver.controls.TreeTable.setRowLineWidth
 * @param {Number} v TreeTable上行之间线的宽度
 */
twaver.controls.TreeTable.prototype.setRowLineWidth = function (v) {}

/**
 * 设置TreeTable上排序的列
 * @method twaver.controls.TreeTable.setSortColumn
 * @param {twaver.Column} v 排序的列
 */
twaver.controls.TreeTable.prototype.setSortColumn = function (v) {}

/**
 * 设置TreeTable排序的函数
 * @method twaver.controls.TreeTable.setSortFunction
 * @param {Function} v 排序的函数
 * @example treetable.setSortFunction(function (d1, d2) {
 *          if (d1.getName() < d2.getName()) {
 *              return 1;
 *          } else if (d1.getName() == d2.getName()) {
 *               return 0;
 *          } else {
 *               return -1;
 *          }
 * });
 */
twaver.controls.TreeTable.prototype.setSortFunction = function (v) {}

/**
 * 设置指定的数据在TreeTable上显示的标签值
 * @method twaver.controls.TreeTable.setTreeValue
 * @param {twaver.Data} data 指定的数据
 * @param {String} value 显示的标签值
 * @param {twaver.controls.Table} table TreeTable包含的表格
 */
twaver.controls.TreeTable.prototype.setTreeValue = function (data, value, table) {}

/**
 * 设置TreeTable的树节点不可勾选时的样式，默认为'none'。可选值有：
 * 'none'：没有任何样式
 * 'disabled':不可用
 * @method twaver.controls.TreeTable.setUncheckableStyle
 * @param {String} v 树节点不可勾选时的样式
 */
twaver.controls.TreeTable.prototype.setUncheckableStyle = function (v) {}

/**
 * 设置TreeTable上的节点是否可见的过滤器
 * @method twaver.controls.TreeTable.setVisibleFunction
 * @param {Function} v 是否可见的过滤器
 * @example tree.setVisibleFunction(function (element) {
 *      return element instanceof twaver.Node;
 * });
 */
twaver.controls.TreeTable.prototype.setVisibleFunction = function (v) {}


/**
 * 多边形子网是一种子网网元，它是有一系列的点组成的多边形形状的子网。它继承于ShapeNode，和ShapeNode的区别在于它可以双击进入/退出下一层
 * @class twaver.ShapeSubNetwork
 * @constructor
 * @extends twaver.ShapeNode
 * @param {Object} [id] 多边形子网ID，用于唯一标识这个多边形子网对象。如果为空，TWaver会按照默认的规则给多边形子网ID赋值。ID可以为string，number类型，也可以为Object类型。为string或number类型时指的是多边形子网的ID，如果为Object类型，可以传入一个带多边形子网属性的对象，比如： var shapeSubNetwork = new twaver.ShapeSubNetwork({  name:'TWaver Router',      styles:{'lable.yoffset':-75} });
 * @return {twaver.ShapeSubNetwork}
 */
twaver.ShapeSubNetwork = function (id) {}

twaver.ShapeSubNetwork.prototype = new twaver.ShapeNode()

/**
 * 是否为子网的标志
 * @property ISubNetwork
 * @type Boolean
 */
twaver.ShapeSubNetwork.prototype.ISubNetwork = function () {}

