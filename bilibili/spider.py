# -*- coding: utf-8 -*-
'''
爬取Bilibili用户信息
1、使用Requests、Regex、Xpath和bs4模块
2、存放文件当中
'''
import requests

total = 1   # 默认爬虫数
cookie = {
    'name': 'bilibiliUserDataInfo', # cookie name
    'value': '7A29BBDE-VA94D-4F66-QC63-D9CB8568D84331045infoc,bilibili.com',   # cookie value
    'domain': '/',    # cookie domain
    'path': 'Fri, 29 Jan 2021 08:50:10 GMT',  # cookie有效路径
    'expires': 'false',   # cookie 有效期
    'httpOnly': 'false'  # 不可更改cookie
}

userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 \
       like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 \
       Mobile/14E5239e Safari/602.1'

def run(url):
    # 启动爬虫
    global total, userAgent, cookie
    mid = url.replace('https://m.bilibili.com/space/', '')
    head = {'User-Agent': userAgent,
            'X-Requested-With': 'XMLHttpRequest',
            'Origin': 'http://space.bilibili.com',
            'Host': 'm.bilibili.com',
            'AlexaToolbar-ALX_NS_PH': 'AlexaToolbar/alx-4.0',
            'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Referer': url}
    try:
        r = requests.get(url, headers=head, cookies=cookie, timeout=10).text
        if r.find("name\":") == -1:
            return
        name = r[r.find("name\":") + 7:r.find('\",\"face\"')]
        sex = r[r.find('\"sex\":\"') + 7:r.find('\",\"sign')]
        if r.find('lv0') != -1:
            level = 0
        elif r.find('lv1') != -1:
            level = 1
        elif r.find('lv2') != -1:
            level = 2
        elif r.find('lv3') != -1:
            level = 3
        elif r.find('lv4') != -1:
            level = 4
        elif r.find('lv5') != -1:
            level = 5
        elif r.find('lv6') != -1:
            level = 6
        else:
            level = -1
        head = {'User-Agent': userAgent,
                'X-Requested-With': 'XMLHttpRequest',
                'Origin': 'http://space.bilibili.com',
                'Host': 'api.bilibili.com',
                'AlexaToolbar-ALX_NS_PH': 'AlexaToolbar/alx-4.0',
                'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Referer': url}
        res = requests.get('https://api.bilibili.com/x/relation/stat?jsonp=jsonp&vmid=' + str(mid),headers=head, cookies=cookie, timeout=10).text
        res_js = eval(res)
        following = res_js['data']['following']
        follower = res_js['data']['follower']
        users = ('序号', total, 'MID', mid, '昵称', name, '性别', sex, '关注', following, '粉丝', follower, '等级', level)
    except Exception as e:
        print('爬取失败：\n' + str(e))
        return
    print("爬取成功，该用户数据：\n" + str(users))
    total += 1
    with open('data.txt', 'a', encoding='utf-8') as f:
        f.write(str(users) + '\n')
        f.close()

if __name__ == "__main__":
    total_num = 5 # 爬取总数
    for i in range(1, total_num):
        run("https://m.bilibili.com/space/" + str(i))
