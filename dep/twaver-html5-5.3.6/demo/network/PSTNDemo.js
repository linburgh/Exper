PSTNDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
};
twaver.Util.ext('PSTNDemo', Object, {
    init: function () {
        this.registImages();
        var main = document.getElementById('main');
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var centerPane = new BorderPane(this.network, toolbar);
        this.network.setLinkFlowEnabled(true);
        centerPane.setTopHeight(25);
        demo.Util.appendChild(centerPane.getView(), main, 0, 0, 0, 0);

        this.initBox();
        this.network.getElementBox().forEach(function (element) {
            if (element instanceof twaver.Link) {
                if(!element.getStyle('link.flow'))
                    element.setStyle('link.color', '#C0C0C0');
                element.setStyle('link.width', 5);
            }
        });
        window.onresize = function (e) { centerPane.invalidate(); };
    },
    registImages: function () {
        this.registerImage("../images/pstn/antenna.png");
        this.registerImage("../images/pstn/cartridge_system.png");
        this.registerImage("../images/pstn/cloud.png");
        this.registerImage("../images/pstn/mainframe.png");
        this.registerImage("../images/pstn/modem.png");
        this.registerImage("../images/pstn/msc.png");
        this.registerImage("../images/pstn/phone.png");
        this.registerImage("../images/pstn/router.png");
        this.registerImage("../images/pstn/router2.png");
        this.registerImage("../images/pstn/satellite_antenna.png");
        this.registerImage("../images/pstn/terminal.png");
        this.registerImage("../images/pstn/testing.png");
        this.registerImage("../images/pstn/tw130.png");
        this.registerImage("../images/pstn/wdm.png");

        this.registerImage("../images/attachment/att1.png");
        this.registerImage("../images/attachment/att2.png");
        this.registerImage("../images/attachment/att3.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    initBox: function () {
        var tw130 = new twaver.Node({
            location: { x: 356, y: 139 },
            image: 'tw130',
            name: 'TWaver Router',
            styles: { 'label.yoffset': -75 }
        });
        this.box.add(tw130);

        var cloudData = new twaver.Node({
            location: { x: 246, y: 145 },
            image: 'cloud',
            name: 'DATA',
            styles: { 'label.yoffset': -30, 'label.color': '#000000' }
        });
        this.box.add(cloudData);

        var link = new twaver.Link(cloudData, tw130);
        this.box.add(link);

        var cloudPSTN = new twaver.Node();
        cloudPSTN.setLocation(246, 209);
        cloudPSTN.setImage("cloud");
        cloudPSTN.setName("PSTN");
        cloudPSTN.setStyle('label.yoffset', -30);
        cloudPSTN.setStyle('label.color', '#000000');
        cloudPSTN.getAlarmState().propagateSeverity = twaver.AlarmSeverity.WARNING;
        this.box.add(cloudPSTN);

        var orlink = new twaver.Link(cloudPSTN, tw130);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(orlink);

        var scrambler = new twaver.Node();
        scrambler.setLocation(175, 157);
        scrambler.setImage("router");
        scrambler.setName("Scrambler");
        this.box.add(scrambler);

        link = new twaver.Link(scrambler, cloudData);
        link.setStyle('link.flow', true);
        link.setStyle('link.flow.converse',true);
        link.setStyle('link.pattern', [5, 5]);
        link.setStyle('link.flow.color', 'red');
        link.setStyle('link.color', 'yellow');
        link.setStyle('vector.outline.color', '#FFFFFF');
        this.box.add(link);

        for (var i = 0; i < 7; i++) {
            node = new twaver.Node();
            if (i < 5) {
                node.setLocation(106, 95 + i * 12);
            } else {
                node.setLocation(106, 122 + i * 20);
            }
            node.setImage("router");
            this.box.add(node);
            if (i == 4) {
                node.setName("Encoder");
            }

            orlink = new twaver.Link(node, scrambler);
            orlink.setStyle('link.type', 'orthogonal.H.V');
            this.box.add(orlink);
        }
        var node = new twaver.Node();
        node.setImage("satellite_antenna");
        node.setLocation(31, 90);
        node.setName("Satellite Feed");
        this.box.add(node);

        node = new twaver.Node();
        node.setImage("antenna");
        node.setLocation(33, 183);
        node.setName("Off Air");
        this.box.add(node);

        node = new twaver.Node();
        node.setImage("msc");
        node.setLocation(33, 291);
        node.setName("Programming");
        this.box.add(node);

        var preAmp = new twaver.Node();
        preAmp.setImage("cartridge_system");
        preAmp.setLocation(191, 292);
        preAmp.setName("Pre-Amp");
        preAmp.setStyle('icons.names', ["att1", "att2", "att3"]);
        preAmp.setStyle('icons.colors', [null, "#00FF00", "#0000FF"]);
        this.box.add(preAmp);

        node = new twaver.Node();
        node.setLocation(105, 302);
        node.setImage("router");
        node.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.CRITICAL, 5);
        this.box.add(node);
        node.setName("V-OLT");

        link = new twaver.Link(node, preAmp);
        link.setStyle('icons.names', ["att2"]);
        this.box.add(link);

        var wdm = new twaver.Node();
        wdm.setName("WDM");
        wdm.setLocation(432, 146);
        wdm.setImage("wdm");
        this.box.add(wdm);

        orlink = new twaver.Link(preAmp, wdm);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        orlink.setStyle('vector.outline.color', '#FF00FF');
        this.box.add(orlink);

        link = new twaver.Link(tw130, wdm);
        this.box.add(link);

        var test = new twaver.Node();
        test.setLocation(476, 161);
        test.setImage("testing");
        test.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.MAJOR, 1);
        this.box.add(test);

        link = new twaver.Link(test, wdm);
        this.box.add(link);

        wdm = new twaver.Node();
        wdm.setName("WDM");
        wdm.setLocation(516, 146);
        wdm.setImage("wdm");
        this.box.add(wdm);

        link = new twaver.Link(test, wdm);
        this.box.add(link);

        var ont = new twaver.Node();
        ont.setName("ONT");
        ont.setLocation(555, 196);
        ont.setImage("mainframe");
        this.box.add(ont);

        orlink = new twaver.Link(ont, wdm);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        orlink.setStyle('icons.names', ["att2"]);
        this.box.add(orlink);

        var modem = new twaver.Node();
        modem.setImage("modem");
        modem.setLocation(560, 98);
        modem.setName("Modem");
        this.box.add(modem);

        var pc = new twaver.Node();
        pc.setName("PC");
        pc.setLocation(651, 64);
        this.box.add(pc);

        orlink = new twaver.Link(pc, modem);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(orlink);

        var stb = new twaver.Node();
        stb.setImage("router2");
        stb.setName("STB");
        stb.setLocation(614, 122);
        this.box.add(stb);
        orlink = new twaver.Link(stb, modem);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(orlink);

        var tv = new twaver.Node();
        tv.setImage("terminal");
        tv.setName("IPTV/SDV");
        tv.setLocation(666, 152);
        this.box.add(tv);

        var l = new twaver.Link(tv, stb);
        l.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(l);

        var phone = new twaver.Node();
        phone.setImage("phone");
        phone.setLocation(648, 223);
        phone.setName("Phone");
        this.box.add(phone);

        orlink = new twaver.Link(phone, ont);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(orlink);

        pc = new twaver.Node();
        pc.setName("PC");
        pc.setLocation(648, 266);
        this.box.add(pc);

        orlink = new twaver.Link(pc, ont);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(orlink);

        stb = new twaver.Node();
        stb.setImage("router2");
        stb.setName("STB");
        stb.setLocation(609, 324);
        this.box.add(stb);

        orlink = new twaver.Link(stb, ont);
        orlink.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(orlink);

        tv = new twaver.Node();
        tv.setImage("terminal");
        tv.setName("IPTV/SDV");
        tv.setLocation(641, 357);
        this.box.add(tv);

        l = new twaver.Link(tv, stb);
        l.setStyle('link.type', 'orthogonal.H.V');
        this.box.add(l);
    }
});